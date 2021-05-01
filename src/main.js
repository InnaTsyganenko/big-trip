import dayjs from 'dayjs';
import * as isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
dayjs.extend(isSameOrAfter);
import {isEscEvent, RenderPosition, render} from './utils.js';
import {generatePoint, sortingDatePointsSlice} from './mock/point.js';
import SiteMenuView from './view/site-menu.js';
import NoPointListView from './view/no-point.js';
import PointListView from './view/point-list.js';
import PointView from './view/point.js';
import RouteInfoView from './view/route-info.js';
import AddPointView from './view/add-point.js';
import EditPointView from './view/edit-point.js';
import FiltersView from './view/filters.js';
import SortingView from './view/sorting.js';

const siteHeaderContainerElement = document.querySelector('.page-header__container');
const siteTripInfoElement = siteHeaderContainerElement.querySelector('.trip-main');
const siteNavigationElement = siteHeaderContainerElement.querySelector('.trip-controls__navigation');
const siteFiltersElement = siteHeaderContainerElement.querySelector('.trip-controls__filters');
const addPointButton = siteHeaderContainerElement.querySelector('.trip-main__event-add-btn');

const body = document.querySelector('.page-body');
const siteMainElement = document.querySelector('.page-main');
const siteTripEventsElement = siteMainElement.querySelector('.trip-events');

render(siteTripInfoElement, new RouteInfoView().getElement(), RenderPosition.AFTERBEGIN);
render(siteNavigationElement, new SiteMenuView().getElement(), RenderPosition.AFTERBEGIN);
render(siteFiltersElement, new FiltersView().getElement(), RenderPosition.AFTERBEGIN);
render(siteTripEventsElement, new SortingView().getElement(), RenderPosition.AFTERBEGIN);

if (sortingDatePointsSlice.length === 0) {
  render(siteTripEventsElement, new NoPointListView().getElement(), RenderPosition.BEFOREEND);
}

const pointListComponent = new PointListView();
render(siteTripEventsElement, pointListComponent.getElement(), RenderPosition.BEFOREEND);

const renderPoint = (pointListElement, point) => {
  const pointComponent = new PointView(point);
  const pointEditComponent = new EditPointView(point);
  const replaceCardToForm = () => {
    pointListElement.replaceChild(pointEditComponent.getElement(), pointComponent.getElement());
  };

  const replaceFormToCard = () => {
    pointListElement.replaceChild(pointComponent.getElement(), pointEditComponent.getElement());
  };

  const onEscKeyDown = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      replaceFormToCard();
      document.removeEventListener('keydown', onEscKeyDown);
    }
  };

  pointComponent.getElement().querySelector('.event__rollup-btn').addEventListener('click', () => {
    replaceCardToForm();
    document.addEventListener('keydown', onEscKeyDown);
  });

  pointEditComponent.getElement().querySelector('form').addEventListener('submit', (evt) => {
    evt.preventDefault();
    replaceFormToCard();
    document.removeEventListener('keydown', onEscKeyDown);
  });

  pointEditComponent.getElement().querySelector('.event__reset-btn').addEventListener('click', (evt) => {
    evt.preventDefault();
    replaceFormToCard();
    document.removeEventListener('keydown', onEscKeyDown);
  });

  render(pointListElement, pointComponent.getElement(), RenderPosition.BEFOREEND);
};

sortingDatePointsSlice.forEach((listPoint) => renderPoint(pointListComponent.getElement(), listPoint));

const closeAddForm = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    pointListComponent.getElement().querySelector('.event--edit').remove();
    addPointButton.disabled = false;
    body.removeEventListener('keydown', closeAddForm);
  }
};

const addPoint = new Array(1).fill().map(generatePoint);

addPointButton.addEventListener('click', () => {
  filterEverythingInput.checked = true;
  sortDayInput.checked = true;
  render(pointListComponent.getElement(), new AddPointView(addPoint[0]).getElement(), RenderPosition.AFTERBEGIN);
  addPointButton.disabled = true;
  body.addEventListener('keydown', closeAddForm);
});

const siteFiltersElements = siteHeaderContainerElement.querySelectorAll('.trip-filters__filter-input');
const sitePointsSortElements = siteMainElement.querySelectorAll('.trip-sort__input');
const filterEverythingInput = siteHeaderContainerElement.querySelector('#filter-everything');
const sortDayInput = siteTripEventsElement.querySelector('#sort-day');

const isFutureOrCurrentPoints = () => {
  return sortingDatePointsSlice.filter((point) => (point.datetimeStart.isSameOrAfter(dayjs(), 'm'))
  || (point.datetimeStart.isBefore(dayjs(), 'm')
  && point.datetimeEnd.isAfter(dayjs(), 'm')));
};

const isPastOrCurrentPoints = () => {
  return sortingDatePointsSlice.filter((point) => (point.datetimeEnd.isBefore(dayjs(), 'm'))
  || (point.datetimeStart.isBefore(dayjs(), 'm')
  && point.datetimeEnd.isAfter(dayjs(), 'm')));
};

let arrfiltredPoints = [...sortingDatePointsSlice];

siteFiltersElements.forEach((filterElement) => {
  filterElement.addEventListener('change', () => {
    sortDayInput.checked = true;
    pointListComponent.getElement().innerHTML = '';
    const filtredPoints = () =>
      filterElement.id === 'filter-future' ? isFutureOrCurrentPoints() : false
      ||
      filterElement.id === 'filter-past' ? isPastOrCurrentPoints() : false
      ||
      filterElement.id === 'filter-everything' ? sortingDatePointsSlice : false;
    arrfiltredPoints = filtredPoints();
    filtredPoints().forEach((listPoint) => renderPoint(pointListComponent.getElement(), listPoint));
  });
});

sitePointsSortElements.forEach((sortElement) => {
  sortElement.addEventListener('change', () => {
    pointListComponent.getElement().innerHTML = '';
    if (sortingDatePointsSlice > '1') {
      const sortedPoints = arrfiltredPoints.sort((a, b) =>
        ((sortElement.id === 'sort-time') ? (b.duration - a.duration) : false)
        ||
        (sortElement.id === 'sort-price' ? (b.price - a.price) : false)
        ||
        (sortElement.id === 'sort-everything'
          ? sortingDatePointsSlice : false),
      );
      sortedPoints.forEach((listPoint) => renderPoint(pointListComponent.getElement(), listPoint));
    }
  });
});
