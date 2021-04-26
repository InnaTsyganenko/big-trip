
import {createSiteMenuTemplate} from './view/site-menu.js';
import {POINT_COUNT} from './const.js';
import {isEscEvent, isInPage} from './utils.js';
import {createEmptyListTemplate, createPointTemplate, points, sortingDatePoints} from './view/point.js';
import {createRouteInfoTemplate} from './view/route-info.js';
import {createAddPointTemplate} from './view/add-point.js';
import {createEditPointTemplate} from './view/edit-point.js';
import {createFiltersTemplate, isPastPoint, isFuturePoint} from './view/filters.js';
import {createSortingTemplate} from './view/sorting.js';

const body = document.querySelector('.page-body');
const siteHeaderElement = document.querySelector('.page-header');
const siteMainElement = document.querySelector('.page-main');
const siteTripMainElement = siteHeaderElement.querySelector('.trip-main');
const siteNavigationElement = siteHeaderElement.querySelector('.trip-controls__navigation');
const siteFiltersElement = siteHeaderElement.querySelector('.trip-controls__filters');
const siteTripEventsElement = siteMainElement.querySelector('.trip-events');
const sitePointsListElement = siteTripEventsElement.querySelector('.trip-events__list');

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

if (POINT_COUNT === 0) {
  render(siteTripEventsElement, createEmptyListTemplate(), 'beforeend');
}

const renderPoints = () => {
  sortingDatePoints.slice(2).forEach((i) => {
    render(sitePointsListElement, createPointTemplate(i), 'beforeend');
  });
};
renderPoints();

render(siteNavigationElement, createSiteMenuTemplate(), 'beforeend');
render(siteFiltersElement, createFiltersTemplate(), 'beforeend');
render(siteTripEventsElement, createSortingTemplate(), 'afterbegin');
render(siteTripMainElement, createRouteInfoTemplate(), 'afterbegin');

const addPointButton = siteHeaderElement.querySelector('.trip-main__event-add-btn');

const siteFiltersElements = siteHeaderElement.querySelectorAll('.trip-filters__filter-input');
const sitePointsSortElements = siteMainElement.querySelectorAll('.trip-sort__input');
const filterEverythingInput = siteHeaderElement.querySelector('#filter-everything');
const sortDayInput = siteTripEventsElement.querySelector('#sort-day');

const closeAddForm = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    sitePointsListElement.querySelector('.event--edit').remove();
    addPointButton.disabled = false;
    body.removeEventListener('keydown', closeAddForm);
  }
};

addPointButton.addEventListener('click', () => {
  filterEverythingInput.checked = true;
  sortDayInput.checked = true;
  sitePointsListElement.innerHTML = '';
  renderPoints();
  render(sitePointsListElement, createAddPointTemplate(points[0]), 'afterbegin');
  addPointButton.disabled = true;
  body.addEventListener('keydown', closeAddForm);
  showEditForm();
});

const showEditForm = () => {
  const sitePointsElement = sitePointsListElement.querySelectorAll('.trip-events__item');
  sitePointsElement.forEach((editPoint) => {
    const editPointButton = editPoint.querySelector('.event__rollup-btn');
    editPointButton.addEventListener('click', () => {
      if (isInPage(document.querySelector('.event--edit'))) {
        document.querySelector('.event--edit').remove();
      }
      render(editPoint, createEditPointTemplate(points[1]), 'beforeend');
      body.addEventListener('keydown', closeAddForm);
    });
  });
};

showEditForm();

siteFiltersElements.forEach((filterPoints) => {
  let filtredPastPoints;
  let filtredFuturePoints;
  filterPoints.addEventListener('change', () => {
    sitePointsListElement.innerHTML = '';
    sortDayInput.checked = true;
    switch (filterPoints.id) {
      case 'filter-future':
        filtredFuturePoints = isFuturePoint();
        for (let i = 0; i < filtredFuturePoints.length; i++) {
          render(sitePointsListElement, createPointTemplate(filtredFuturePoints[i]), 'beforeend');
        }
        break;
      case 'filter-past':
        filtredPastPoints = isPastPoint();
        for (let i = 0; i < filtredPastPoints.length; i++) {
          render(sitePointsListElement, createPointTemplate(filtredPastPoints[i]), 'beforeend');
        }
        break;
      default:
        renderPoints();
        break;
    }
    showEditForm();
  });
});

sitePointsSortElements.forEach((sortingPoints) => {
  sortingPoints.addEventListener('change', () => {
    sitePointsListElement.innerHTML = '';
    switch (sortingPoints.id) {
      case 'sort-time':
        points.sort((a, b) => b.duration - a.duration);
        for (let i = 2; i < points.length; i++) {
          render(sitePointsListElement, createPointTemplate(points[i]), 'beforeend');
        }
        break;
      case 'sort-price':
        points.sort((a, b) => b.price - a.price);
        for (let i = 2; i < points.length; i++) {
          render(sitePointsListElement, createPointTemplate(points[i]), 'beforeend');
        }
        break;
      default:
        points.sort((a, b) => a.datetimeStart - b.datetimeStart);
        renderPoints();
        break;
    }
    showEditForm();
  });
});
