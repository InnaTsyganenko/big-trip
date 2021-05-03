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
    body.removeEventListener('keydown', onEscKeyDown);
  };

  const onEscKeyDown = (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      replaceFormToCard();
      body.removeEventListener('keydown', onEscKeyDown);
    }
  };

  pointEditComponent.getElement().querySelector('.event__reset-btn').addEventListener('click', () => replaceFormToCard());

  pointComponent.getElement().querySelector('.event__rollup-btn').addEventListener('click', () => {
    (pointListComponent.getElement().querySelector('.event--edit')) ?
      pointListComponent.getElement().querySelector('.event--edit').querySelector('.event__reset-btn').click() : false;
    replaceCardToForm();
    body.addEventListener('keydown', onEscKeyDown);
  });

  pointEditComponent.getElement().querySelector('.event__rollup-btn').addEventListener('click', () => {
    replaceFormToCard();
  });

  pointEditComponent.getElement().querySelector('form').addEventListener('submit', (evt) => {
    evt.preventDefault();
    replaceFormToCard();
  });

  render(pointListElement, pointComponent.getElement(), RenderPosition.BEFOREEND);
};

sortingDatePointsSlice.forEach((listPoint) => renderPoint(pointListComponent.getElement(), listPoint));

const renderAddForm = (addForm) => {
  const addPointButton = siteHeaderContainerElement.querySelector('.trip-main__event-add-btn');
  addForm = new Array(1).fill().map(generatePoint);
  const pointAddComponent = new AddPointView(addForm[0]);

  const showAddForm = () => {
    (pointListComponent.getElement().querySelector('.event--edit')) ?
      pointListComponent.getElement().querySelector('.event--edit').querySelector('.event__reset-btn').click() : false;
    filterEverythingInput.checked = true;
    sortDayInput.checked = true;
    render(pointListComponent.getElement(), pointAddComponent.getElement(), RenderPosition.AFTERBEGIN);
    addPointButton.disabled = true;
  };

  const closeAddForm = () => {
    pointListComponent.getElement().querySelector('.trip-events__item').remove();
    addPointButton.disabled = false;
    body.removeEventListener('keydown', onEscKeyDown);
  };

  const onEscKeyDown = (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      closeAddForm();
      body.removeEventListener('keydown', onEscKeyDown);
    }
  };

  addPointButton.addEventListener('click', () => {
    showAddForm();
    body.addEventListener('keydown', onEscKeyDown);
  });

  pointAddComponent.getElement().querySelector('.event__reset-btn').addEventListener('click', () => closeAddForm());
};

renderAddForm();

const siteFiltersElements = siteHeaderContainerElement.querySelectorAll('.trip-filters__filter-input');
const sitePointsSortElements = siteMainElement.querySelectorAll('.trip-sort__input');
const filterEverythingInput = siteHeaderContainerElement.querySelector('#filter-everything');
const sortDayInput = siteTripEventsElement.querySelector('#sort-day');
const sortTimeInput = siteTripEventsElement.querySelector('#sort-time');
const sortPriceInput = siteTripEventsElement.querySelector('#sort-price');

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
    (arrfiltredPoints.length < '2') ? ((sortTimeInput.disabled = true) & (sortPriceInput.disabled = true)) : ((sortTimeInput.disabled = false) & (sortPriceInput.disabled = false));
    filtredPoints().forEach((listPoint) => renderPoint(pointListComponent.getElement(), listPoint));
  });
});

sitePointsSortElements.forEach((sortElement) => {
  sortElement.addEventListener('change', () => {
    pointListComponent.getElement().innerHTML = '';
    const sortedPoints = arrfiltredPoints.sort((a, b) =>
      ((sortElement.id === 'sort-time') ? (b.duration - a.duration) : false)
      ||
      (sortElement.id === 'sort-price' ? (b.price - a.price) : false)
      ||
      (sortElement.id === 'sort-everything'
        ? sortingDatePointsSlice : false),
    );
    sortedPoints.forEach((listPoint) => renderPoint(pointListComponent.getElement(), listPoint));
  });
});
