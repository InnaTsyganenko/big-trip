import {isEscEvent} from '../utils/common.js';
import {RenderPosition, render} from '../utils/render.js';
import {sortingDatePointsSlice} from '../mock/point.js';
import NoPointListView from '../view/no-point-list.js';
import AddPointView from '../view/add-point.js';

const Mode = {
  DEFAULT: 'DEFAULT',
  SHOW: 'SHOW',
};

export default class AddPoint {
  constructor(pointListContainer) {
    this._pointListContainer = pointListContainer;

    this._addPointComponent = null;
    this._mode = Mode.DEFAULT;

    this._body = document.querySelector('.page-body');
    this._siteMainElement = document.querySelector('.page-main');

    this._handleFormSubmit = this._handleFormSubmit.bind(this);
    this._handleCancelPointClick = this._handleCancelPointClick.bind(this);
    this._escKeyDownHandler = this._escKeyDownHandler.bind(this);
  }

  init(point) {
    this._point = point;

    this._siteHeaderContainerElement = document.querySelector('.page-header__container');
    this._addPointButton = this._siteHeaderContainerElement.querySelector('.trip-main__event-add-btn');

    this._addPointComponent = new AddPointView(point);

    this._addPointButton.addEventListener('click', () => {
      const filterEverythingInput = this._siteHeaderContainerElement.querySelector('#filter-everything');
      (this._pointListContainer.getElement().querySelector('.event--edit')) ?
        this._pointListContainer.getElement().querySelector('.event--edit').querySelector('.event__rollup-btn').click() : false;
      (this._body.querySelector('.trip-events__msg')) ?
        this._body.querySelector('.trip-events__msg').style = 'display: none;' : false;
      filterEverythingInput.checked = true;
      this._sortDayInput.checked = true;
      render(this._pointListContainer, this._addPointComponent, RenderPosition.AFTERBEGIN);
      this._addPointButton.disabled = true;
      this._body.addEventListener('keydown', this._escKeyDownHandler);
      this._mode = Mode.SHOW;
    });

    this._siteTripEventsElement = this._siteMainElement.querySelector('.trip-events');
    this._sortDayInput = this._siteTripEventsElement.querySelector('#sort-day');

    this._addPointComponent.setFormSubmitHandler(this._handleFormSubmit);
    this._addPointComponent.setFormCancelHandler(this._handleCancelPointClick);

  }

  _handleFormSubmit() {
    this._closeAddForm();
  }

  _handleHideEditClick() {
    this._closeAddForm();
  }

  _handleCancelPointClick() {
    this._closeAddForm();
    if (this._pointListContainer.getElement().querySelector('.trip-events__item') === null) {
      render(this._siteTripEventsElement, new NoPointListView().getElement(), RenderPosition.BEFOREEND);
    }
    this._body.removeEventListener('keydown', this._escKeyDownHandler);
  }

  _closeAddForm() {
    if (this._mode == Mode.SHOW) {
      this._mode = Mode.DEFAULT;
      this._pointListContainer.getElement().querySelector('.trip-events__item').remove();
      this._addPointButton.disabled = false;
      (sortingDatePointsSlice.length === 0) ?
        this._siteMainElement.querySelector('.trip-events__msg').style = 'display: block;' : false;
    }
  }

  _escKeyDownHandler(evt) {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      this._closeAddForm();
      this._body.removeEventListener('keydown', this._escKeyDownHandler);
    }
  }
}
