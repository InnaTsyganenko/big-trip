import dayjs from 'dayjs';
import * as isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
dayjs.extend(isSameOrAfter);
import {POINT_COUNT} from './const.js';
import {isEscEvent, isInPage, renderTemplate, renderElement, RenderPosition} from './utils.js';
import {generatePoint} from './mock/point.js';
import SiteMenuView from './view/site-menu.js';
import NoPointView from './view/no-point.js';
import {pointListComponent} from './view/point-list.js';
import {createPointTemplate, points} from './view/point.js';
import {createRouteInfoTemplate} from './view/route-info.js';
import {createAddPointTemplate} from './view/add-point.js';
import {createEditPointTemplate} from './view/edit-point.js';
import {createFiltersTemplate} from './view/filters.js';
import {createSortingTemplate} from './view/sorting.js';

const body = document.querySelector('.page-body');
const siteHeaderElement = document.querySelector('.page-header__container');
const siteMainElement = document.querySelector('.page-main');
const siteTripMainElement = siteHeaderElement.querySelector('.trip-main');
const siteNavigationElement = siteHeaderElement.querySelector('.trip-controls__navigation');
const siteFiltersElement = siteHeaderElement.querySelector('.trip-controls__filters');
const siteTripEventsElement = siteMainElement.querySelector('.trip-events');

renderElement(siteTripEventsElement, pointListComponent, RenderPosition.BEFOREEND);

const sortingDatePointsSlice = points.sort((a, b) => a.datetimeStart - b.datetimeStart).slice(1);

if (POINT_COUNT === 0) {
  renderElement(siteTripEventsElement, new NoPointView().getElement(), 'beforeend');
}

const renderPoints = () => {
  sortingDatePointsSlice.forEach((i) => {
    renderTemplate(pointListComponent, createPointTemplate(i), 'beforeend');
  });
};
renderPoints();

renderElement(siteNavigationElement, new SiteMenuView().getElement(), RenderPosition.BEFOREEND);
renderTemplate(siteFiltersElement, createFiltersTemplate(), 'beforeend');
renderTemplate(siteTripEventsElement, createSortingTemplate(), 'afterbegin');
renderTemplate(siteTripMainElement, createRouteInfoTemplate(), 'afterbegin');

const addPointButton = siteHeaderElement.querySelector('.trip-main__event-add-btn');

const closeAddForm = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    pointListComponent.querySelector('.event--edit').remove();
    addPointButton.disabled = false;
    body.removeEventListener('keydown', closeAddForm);
  }
};

const addPoint = new Array(1).fill().map(generatePoint);

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

const siteFiltersElements = siteHeaderElement.querySelectorAll('.trip-filters__filter-input');
const sitePointsSortElements = siteMainElement.querySelectorAll('.trip-sort__input');
const filterEverythingInput = siteHeaderElement.querySelector('#filter-everything');
const sortDayInput = siteTripEventsElement.querySelector('#sort-day');

let arrfiltredPoints = [...sortingDatePointsSlice];

siteFiltersElements.forEach((filterElement) => {
  filterElement.addEventListener('change', () => {
    sortDayInput.checked = true;
    pointListComponent.innerHTML = '';
    const filtredPoints = sortingDatePointsSlice.filter((e) =>
      (filterElement.id === 'filter-future'
        ? (e.datetimeStart.isBefore(dayjs(), 'm') && e.datetimeEnd.isAfter(dayjs(), 'm') || e.datetimeStart.isSameOrAfter(dayjs(), 'm')) : false)
        ||
        (filterElement.id === 'filter-past'
          ? (e.datetimeStart.isBefore(dayjs(), 'm') && e.datetimeEnd.isAfter(dayjs(), 'm') || e.datetimeEnd.isBefore(dayjs(), 'm')) : false)
        ||
      (filterElement.id === 'filter-everything'
        ? sortingDatePointsSlice : false),
    );
    arrfiltredPoints = filtredPoints;
    filtredPoints.forEach((i) => {
      renderTemplate(pointListComponent, createPointTemplate(i), 'beforeend');
    });
    showEditForm();
  });
});


sitePointsSortElements.forEach((sortElement) => {
  sortElement.addEventListener('change', () => {
    pointListComponent.innerHTML = '';
    if (sortingDatePointsSlice > '1') {
      const sortedPoints = arrfiltredPoints.sort((a, b) =>
        ((sortElement.id === 'sort-time') ? (b.duration - a.duration) : false)
        ||
        (sortElement.id === 'sort-price' ? (b.price - a.price) : false)
        ||
        (sortElement.id === 'sort-everything'
          ? sortingDatePointsSlice : false),
      );
      sortedPoints.forEach((i) => {
        renderTemplate(pointListComponent, createPointTemplate(i), 'beforeend');
      });
    }
  });
});

