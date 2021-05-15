import {updateItem} from '../utils/common.js';
import {RenderPosition, render} from '../utils/render.js';
import {points, addPointData} from '../mock/point.js';
import SortingView from '../view/sorting.js';
import NoPointListView from '../view/no-point-list.js';
import PointListView from '../view/point-list.js';
import PointPresenter from './point.js';
import AddPointPresenter from './add-point.js';

export default class TripEvents {
  constructor(tripContainer) {
    this._tripContainer = tripContainer;
    this._pointPresenter = {};
    this._addPointComponent = null;
    this._currentSortType = 'sort-everything';

    this._body = document.querySelector('.page-body');
    this._siteHeaderContainerElement = document.querySelector('.page-header__container');
    this._siteMainElement = document.querySelector('.page-main');
    this._siteTripEventsElement = this._siteMainElement.querySelector('.trip-events');

    this._sortingComponent = new SortingView();
    this._noPointListComponent = new NoPointListView();
    this._pointListComponent = new PointListView();

    this._handlePointChange = this._handlePointChange.bind(this);
    this._handleModeChange = this._handleModeChange.bind(this);
    this._handleSortTypeChange = this._handleSortTypeChange.bind(this);
  }

  init(tripEvents) {
    this._tripEvents = tripEvents.slice();
    this._sourcedTripEvents = tripEvents.slice();
    render(this._siteTripEventsElement, this._pointListComponent.getElement(), RenderPosition.BEFOREEND);
    this._renderTripEvents();
  }

  _handlePointChange(updatedPoint) {
    this._tripEvents = updateItem(this._tripEvents, updatedPoint);
    this._sourcedTripEvents = updateItem(this._tripEvents, updatedPoint);
    this._pointPresenter[updatedPoint.id].init(updatedPoint);
  }

  _handleModeChange() {
    Object
      .values(this._pointPresenter)
      .forEach((presenter) => presenter.resetView());
    this._addPointComponent._closeAddForm();
  }

  _sortPoints(sortType) {
    switch (sortType) {
      case 'sort-time':
        this._tripEvents.sort((a, b) => b.duration - a.duration);
        break;
      case 'sort-price':
        this._tripEvents.sort((a, b) => b.price - a.price);
        break;
      default:
        this._tripEvents = this._sourcedTripEvents;
    }

    this._currentSortType = sortType;
  }

  _handleSortTypeChange(sortType) {
    if (this._currentSortType === sortType) {
      return;
    }

    this._sortPoints(sortType);
    this._clearPointList();
    this._renderTripEvents();
  }

  _renderSorting() {
    render(this._siteTripEventsElement, this._sortingComponent.getElement(), RenderPosition.AFTERBEGIN);
    this._sortingComponent.setSortTypeChangeHandler(this._handleSortTypeChange);
  }

  _renderNoPointsList() {
    render(this._siteTripEventsElement, this._noPointListComponent.getElement(), RenderPosition.BEFOREEND);
  }

  _renderPoint(point) {
    const pointPresenter = new PointPresenter(this._pointListComponent, this._handlePointChange, this._handleModeChange);
    pointPresenter.init(point);
    this._pointPresenter[point.id] = pointPresenter;
  }

  _renderAddPoint(point) {
    const addPointPresenter = new AddPointPresenter(this._pointListComponent);
    addPointPresenter.init(point);
    this._addPointComponent = addPointPresenter;
  }

  _renderPoints() {
    this._tripEvents.forEach((tripEvent) => this._renderPoint(tripEvent));
  }

  _renderTripEvents() {
    this._renderSorting();
    (points.length === 0) ? this._renderNoPointsList()
      : this._renderPoints();
    this._renderAddPoint(addPointData[0]);
  }

  _clearPointList() {
    Object
      .values(this._pointPresenter)
      .forEach((presenter) => presenter.destroy());
    this._pointPresenter = {};
  }
}
