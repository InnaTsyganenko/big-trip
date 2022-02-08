import {updateItem} from '../utils/common';
import {RenderPosition, render} from '../utils/render';
import SortView from '../view/sort-view';
import NoPointListView from '../view/no-point-list-view';
import PointListView from '../view/point-list-view';
import PointPresenter from './point-presenter';
import AddPointPresenter from './add-point-presenter';
import {filter} from '../utils/filter.js';
import {Mode, SortType, UpdateType, UserAction, FilterType} from '../const.js';

export default class TripEvents {
  #pointsModel = null;
  #filterModel = null;

  #tripContainer = null;

  #addPointComponent = null;
  #sortComponent = null;
  #pointListComponent = null;
  #noPointListComponent = null;


  #pointPresenter = null;

  #siteMainElement = null;
  #siteTripEventsElement = null;

  #currentSortType = null;
  #filterType = FilterType.EVERYTHING;

  #points = [];
  #sourcedPoints = [];
  #addPoint = {};

  constructor(tripContainer, pointsModel, filterModel) {
    this.#tripContainer = tripContainer;

    this.#pointsModel = pointsModel;
    this.#filterModel = filterModel;

    this.#pointPresenter = {};
    this.#currentSortType = 'sort-day';

    this.#siteMainElement = document.querySelector('.page-main');
    this.#siteTripEventsElement = this.#siteMainElement.querySelector('.trip-events');

    this.#pointListComponent = new PointListView();
  }

  get points() {
    this.#filterType = this.#filterModel.filter;
    const points = this.#pointsModel.points.slice(0, this.#points.length - 1);
    // const filteredPoints = filter[this.#filterType](points);

    switch (this.#currentSortType) {
      case `sort-${SortType.TIME}`:
        return points.sort((a, b) => b.duration - a.duration);
      case `sort-${SortType.PRICE}`:
        return points.sort((a, b) => b.price - a.price);
    }

    return points;
  }

  init() {
    this.#addPoint = this.points.slice(0, 1);

    render(this.#siteTripEventsElement, this.#pointListComponent.element, RenderPosition.BEFOREEND);

    this.#pointsModel.addObserver(this.#handleModelEvent);
    this.#filterModel.addObserver(this.#handleModelEvent);

    this.#renderSort();
    this.#renderTripEvents();
  }

  destroy = () => {
    this.#clearPoints({resetSortType: true});

    // remove(this.#taskListComponent);
    // remove(this.#boardComponent);

    this.#pointsModel.removeObserver(this.#handleModelEvent);
    this.#filterModel.removeObserver(this.#handleModelEvent);
  }

  #handleViewAction = (actionType, updateType, update) => {
    switch (actionType) {
      case UserAction.UPDATE_POINT:
        this.#pointsModel.updatePoint(updateType, update);
        break;
      case UserAction.ADD_POINT:
        this.#pointsModel.addPoint(updateType, update);
        break;
      case UserAction.DELETE_POINT:
        this.#pointsModel.deletePoint(updateType, update);
        break;
    }
  }

  #handleModelEvent = (updateType, data) => {
    switch (updateType) {
      case UpdateType.PATCH:
        // this.#taskPresenter.get(data.id).init(data);
        break;
      case UpdateType.MINOR:
        // this.#clearBoard();
        // this.#renderBoard();
        break;
      case UpdateType.MAJOR:
        // this.#clearBoard({resetRenderedTaskCount: true, resetSortType: true});
        // this.#renderBoard();
        break;
    }
  }

  #handleModeChange = () => {
    Object
      .values(this.#pointPresenter)
      .forEach((presenter) => presenter.resetView());
    this.#addPointComponent.closeAddForm();
  }

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#currentSortType = sortType;
    this.#clearPoints();
    this.#renderTripEvents();
  }

  #renderSort = () => {
    this.#sortComponent = new SortView();
    this.#sortComponent.setSortTypeChangeHandler(this.#handleSortTypeChange);
    render(this.#siteTripEventsElement, this.#sortComponent.element, RenderPosition.AFTERBEGIN);
  }

  #renderNoPointsList = () => {
    this.#noPointListComponent = new NoPointListView(this.#filterType);
    render(this.#siteTripEventsElement, this.#noPointListComponent.element, RenderPosition.BEFOREEND);
  }

  #renderPoint = (point) => {
    const pointPresenter = new PointPresenter(this.#pointListComponent, this.#handleViewAction, this.#handleModeChange);
    pointPresenter.init(point, Mode.EDITING);
    this.#pointPresenter[point.id] = pointPresenter;
  }

  #renderAddPoint = () => {
    const addPointPresenter = new AddPointPresenter(this.#pointListComponent, this.points.length);
    addPointPresenter.init(this.#addPoint[0], Mode.ADD);
    this.#addPointComponent = addPointPresenter;
  }

  #renderPoints = () => {
    this.points.forEach((point) => this.#renderPoint(point));
  }

  #renderTripEvents = () => {
    if (this.points.length > 0) {
      this.#renderPoints();
    } else {
      this.#renderNoPointsList();
    }

    this.#renderAddPoint();
  }

  #clearPoints = () => {
    this.#pointPresenter.forEach((presenter) => presenter.destroy());
    this.#pointPresenter.clear();
  }
}
