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
  #offersModel = null;

  #tripContainer = null;

  #addPointComponent = null;
  #sortComponent = null;
  #pointListComponent = null;
  #noPointListComponent = null;


  #pointPresenter = new Map();

  #siteMainElement = null;

  #currentSortType = null;
  #filterType = FilterType.EVERYTHING;

  #addPoint = {};

  constructor(tripContainer, pointsModel, filterModel, offersModel) {
    this.#tripContainer = tripContainer;

    this.#pointsModel = pointsModel;
    this.#filterModel = filterModel;
    this.#offersModel = offersModel;

    this.#currentSortType = SortType.DAY;

    this.#siteMainElement = document.querySelector('.page-main');
    this.#tripContainer = this.#siteMainElement.querySelector('.trip-events');

    this.#pointListComponent = new PointListView();
  }

  get points() {
    this.#filterType = this.#filterModel.filter;
    const points = this.#pointsModel.points.slice(0, this.#pointsModel.points.length - 1);

    const filteredPoints = filter[this.#filterType](points);

    switch (this.#currentSortType) {
      case SortType.TIME:
        return filteredPoints.sort((a, b) => b.duration - a.duration);
      case SortType.PRICE:
        return filteredPoints.sort((a, b) => b.price - a.price);
    }

    return filteredPoints;
  }

  init() {
    this.#addPoint = this.points.slice(0, 1);

    render(this.#tripContainer, this.#pointListComponent.element, RenderPosition.BEFOREEND);

    this.#pointsModel.addObserver(this.#handleModelEvent);
    this.#filterModel.addObserver(this.#handleModelEvent);

    this.#renderSort();
    this.#renderTripEvents();
  }

  destroy = () => {
    this.#clearPoints({resetSortType: true});

    this.#sortComponent.element.remove();
    this.#pointListComponent.element.remove();

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
        this.#pointPresenter.get(data.id).init(data);
        break;
      case UpdateType.MINOR:
        // this.#clearBoard();
        // this.#renderBoard();
        break;
      case UpdateType.MAJOR:
        this.#clearPoints({resetSortType: true});
        this.#renderTripEvents();
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
    render(this.#tripContainer, this.#sortComponent.element, RenderPosition.AFTERBEGIN);
  }

  #renderNoPointsList = () => {
    this.#noPointListComponent = new NoPointListView(this.#filterType);
    render(this.#tripContainer, this.#noPointListComponent.element, RenderPosition.BEFOREEND);
  }

  #renderPoint = (point) => {
    const pointPresenter = new PointPresenter(this.#pointListComponent, this.#handleViewAction, this.#handleModeChange);
    pointPresenter.init(point, Mode.EDITING);
    this.#pointPresenter.set(point.id, pointPresenter);
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

  #clearPoints = ({resetSortType = false} = {}) => {
    this.#pointPresenter.forEach((presenter) => presenter.destroy());
    this.#pointPresenter.clear();

    if (this.#noPointListComponent) {
      this.#noPointListComponent.element.remove();
    }

    if (resetSortType) {
      this.#currentSortType = SortType.DAY;
    }
  }
}
