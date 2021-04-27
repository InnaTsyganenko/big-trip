import {POINT_COUNT} from './const.js';
import {isEscEvent, isInPage, renderTemplate, renderElement, RenderPosition} from './utils.js';
import SiteMenuView from './view/site-menu.js';
import NoPointView from './view/no-point.js';
import PointListView from './view/point-list.js';
import {createPointTemplate, points, sortingDatePoints} from './view/point.js';
import {createRouteInfoTemplate} from './view/route-info.js';
import {createAddPointTemplate, addPoint} from './view/add-point.js';
import {createEditPointTemplate} from './view/edit-point.js';
import {createFiltersTemplate, isPastPoint, isFuturePoint} from './view/filters.js';
import {createSortingTemplate} from './view/sorting.js';

const body = document.querySelector('.page-body');
const siteHeaderElement = document.querySelector('.page-header__container');
const siteMainElement = document.querySelector('.page-main');
const siteTripMainElement = siteHeaderElement.querySelector('.trip-main');
const siteNavigationElement = siteHeaderElement.querySelector('.trip-controls__navigation');
const siteFiltersElement = siteHeaderElement.querySelector('.trip-controls__filters');
const siteTripEventsElement = siteMainElement.querySelector('.trip-events');


const pointListComponent = new PointListView().getElement();
renderElement(siteTripEventsElement, pointListComponent, RenderPosition.BEFOREEND);

if (POINT_COUNT === 0) {
  renderElement(siteTripEventsElement, new NoPointView().getElement(), 'beforeend');
}

const renderPoints = () => {
  sortingDatePoints.slice(1).forEach((i) => {
    renderTemplate(pointListComponent, createPointTemplate(i), 'beforeend');
  });
};
renderPoints();

renderElement(siteNavigationElement, new SiteMenuView().getElement(), RenderPosition.BEFOREEND);
renderTemplate(siteFiltersElement, createFiltersTemplate(), 'beforeend');
renderTemplate(siteTripEventsElement, createSortingTemplate(), 'afterbegin');
renderTemplate(siteTripMainElement, createRouteInfoTemplate(), 'afterbegin');

const addPointButton = siteHeaderElement.querySelector('.trip-main__event-add-btn');

const siteFiltersElements = siteHeaderElement.querySelectorAll('.trip-filters__filter-input');
const sitePointsSortElements = siteMainElement.querySelectorAll('.trip-sort__input');
const filterEverythingInput = siteHeaderElement.querySelector('#filter-everything');
const sortDayInput = siteTripEventsElement.querySelector('#sort-day');

const closeAddForm = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    pointListComponent.querySelector('.event--edit').remove();
    addPointButton.disabled = false;
    body.removeEventListener('keydown', closeAddForm);
  }
};

addPointButton.addEventListener('click', () => {
  filterEverythingInput.checked = true;
  sortDayInput.checked = true;
  pointListComponent.innerHTML = '';
  renderPoints();
  renderTemplate(pointListComponent, createAddPointTemplate(addPoint[0]), 'afterbegin');
  addPointButton.disabled = true;
  body.addEventListener('keydown', closeAddForm);
  showEditForm();
});

const showEditForm = () => {
  const sitePointsElement = pointListComponent.querySelectorAll('.trip-events__item');
  sitePointsElement.forEach((editPoint) => {
    const editPointButton = editPoint.querySelector('.event__rollup-btn');
    editPointButton.addEventListener('click', () => {
      if (isInPage(document.querySelector('.event--edit'))) {
        document.querySelector('.event--edit').remove();
      }
      renderTemplate(editPoint, createEditPointTemplate(points[1]), 'beforeend');
      body.addEventListener('keydown', closeAddForm);
    });
  });
};

showEditForm();

siteFiltersElements.forEach((filterPoints) => {
  let filtredPastPoints;
  let filtredFuturePoints;
  filterPoints.addEventListener('change', () => {
    pointListComponent.innerHTML = '';
    sortDayInput.checked = true;
    switch (filterPoints.id) {
      case 'filter-future':
        filtredFuturePoints = isFuturePoint();
        for (let i = 0; i < filtredFuturePoints.length; i++) {
          renderTemplate(pointListComponent, createPointTemplate(filtredFuturePoints[i]), 'beforeend');
        }
        break;
      case 'filter-past':
        filtredPastPoints = isPastPoint();
        for (let i = 0; i < filtredPastPoints.length; i++) {
          renderTemplate(pointListComponent, createPointTemplate(filtredPastPoints[i]), 'beforeend');
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
    pointListComponent.innerHTML = '';
    switch (sortingPoints.id) {
      case 'sort-time':
        points.sort((a, b) => b.duration - a.duration);
        for (let i = 1; i < points.length; i++) {
          renderTemplate(pointListComponent, createPointTemplate(points[i]), 'beforeend');
        }
        break;
      case 'sort-price':
        points.sort((a, b) => b.price - a.price);
        for (let i = 1; i < points.length; i++) {
          renderTemplate(pointListComponent, createPointTemplate(points[i]), 'beforeend');
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
