import {updateItem} from '../utils/common';
import {RenderPosition, render} from '../utils/render';
import {SortType} from '../const';
import SortView from '../view/sort-view';
import NoPointListView from '../view/no-point-list-view';
import PointListView from '../view/point-list-view';
import PointPresenter from './point-presenter';
import AddPointPresenter from './add-point-presenter';

export default class TripEvents {
  #tripContainer = null;

  #addPointComponent = null;
  #sortComponent = null;
  #pointListComponent = null;
  #noPointListComponent = null;

  #pointPresenter = null;

  #siteMainElement = null;
  #siteTripEventsElement = null;

  #currentSortType = null;

  #points = [];
  #sourcedTripEvents = [];

  constructor(tripContainer) {
    this.#tripContainer = tripContainer;
    this.#pointPresenter = {};
    this.#currentSortType = 'sort-day';

    this.#siteMainElement = document.querySelector('.page-main');
    this.#siteTripEventsElement = this.#siteMainElement.querySelector('.trip-events');

    this.#noPointListComponent = new NoPointListView();
    this.#pointListComponent = new PointListView();
  }

  init(points) {
    this.#points = points;
    this.#sourcedTripEvents = points;
    render(this.#siteTripEventsElement, this.#pointListComponent.element, RenderPosition.BEFOREEND);
    this.#renderSort();
    this.#renderTripEvents();
  }

  #handlePointChange = (updatedPoint) => {
    this.#points = updateItem(this.#points, updatedPoint);
    this.#sourcedTripEvents = updateItem(this.#points, updatedPoint);
    this.#pointPresenter[updatedPoint.id].init(updatedPoint);
  }

  #handleModeChange = () => {
    Object
      .values(this.#pointPresenter)
      .forEach((presenter) => presenter.resetView());
    this.#addPointComponent.closeAddForm();
  }

  #sortPoints = (sortType) => {
    switch (sortType) {
      case SortType.TIME:
        this.#points.sort((a, b) => b.duration - a.duration);
        console.log(this.#points);
        break;
      case SortType.PRICE:
        this.#points.sort((a, b) => b.price - a.price);
        break;
      default:
        this.#points = this.#sourcedTripEvents;
    }

    this.#currentSortType = sortType;
  }

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#sortPoints(sortType);
    this.#clearPointList();
    this.#renderTripEvents();
  }

  #renderSort = () => {
    this.#sortComponent = new SortView(this.#currentSortType);
    render(this.#siteTripEventsElement, this.#sortComponent.element, RenderPosition.AFTERBEGIN);
    this.#sortComponent.setSortTypeChangeHandler(this.#handleSortTypeChange);
  }

  #renderNoPointsList = () => {
    render(this.#siteTripEventsElement, this.#noPointListComponent.element, RenderPosition.BEFOREEND);
  }

  #renderPoint = (point) => {
    const pointPresenter = new PointPresenter(this.#pointListComponent, this.#handlePointChange, this.#handleModeChange);
    pointPresenter.init(point);
    this.#pointPresenter[point.id] = pointPresenter;
  }

  #renderAddPoint = () => {
    const addPointPresenter = new AddPointPresenter(this.#pointListComponent, this.#points.length);
    addPointPresenter.init();
    this.#addPointComponent = addPointPresenter;
  }

  #renderPoints = () => {
    this.#points.forEach((tripEvent) => this.#renderPoint(tripEvent));
  }

  #renderTripEvents = () => {
    (this.#points.length === 0) ? this.#renderNoPointsList()
      : this.#renderPoints();
    this.#renderAddPoint();
  }

  #clearPointList = () => {
    Object
      .values(this.#pointPresenter)
      .forEach((presenter) => presenter.destroy());
    this.#pointPresenter = {};
  }
}
