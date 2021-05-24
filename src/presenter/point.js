import {isEscEvent} from '../utils/common.js';
import {points} from '../mock/point.js';
import {Mode} from '../const.js';
import {RenderPosition, render, replace, remove} from '../utils/render.js';
import NoPointListView from '../view/no-point-list.js';
import PointView from '../view/point.js';
import EditPointView from '../view/edit-point.js';

export default class PointPresenter {
  constructor(pointListContainer, changeData, changeMode) {
    this._pointListContainer = pointListContainer;
    this._changeData = changeData;
    this._changeMode = changeMode;

    this._body = document.querySelector('.page-body');
    this._siteMainElement = document.querySelector('.page-main');
    this._siteTripEventsElement = this._body.querySelector('.trip-events');
    this._siteHeaderContainerElement = document.querySelector('.page-header__container');

    this._pointComponent = null;
    this._pointEditComponent = null;

    this._mode = Mode.DEFAULT;

    this._handleEditClick = this._handleEditClick.bind(this);
    this._handleFavoriteClick = this._handleFavoriteClick.bind(this);
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
    this._handleHideEditClick = this._handleHideEditClick.bind(this);
    this._handleDeletePointClick = this._handleDeletePointClick.bind(this);
    this._escKeyDownHandler = this._escKeyDownHandler.bind(this);
  }

  init(mode, point) {
    this._point = point;

    const prevPointComponent = this._pointComponent;
    const prevPointEditComponent = this._pointEditComponent;

    this._pointEditComponent = new EditPointView(point, mode);
    this._pointEditComponent.setFormSubmitHandler(this._handleFormSubmit);
    this._pointEditComponent.setDeletePointHandler(this._handleDeletePointClick);
    this._pointEditComponent.setFormHideEditHandler(this._handleHideEditClick);

    if (mode === Mode.ADD) {
      this._addPointButton = document.querySelector('.trip-main__event-add-btn');
      this._siteTripEventsElement = this._siteMainElement.querySelector('.trip-events');
      this._sortDayInput = this._siteTripEventsElement.querySelector('#sort-day');
      this._addPointButton.addEventListener('click', () => {
        this._mode = Mode.ADD;
        (this._pointListContainer.getElement().querySelector('.event--edit')) ?
          this._pointListContainer.getElement().querySelector('.event--edit').querySelector('.event__rollup-btn').click() : false;
        (this._body.querySelector('.trip-events__msg')) ?
          this._body.querySelector('.trip-events__msg').style = 'display: none;' : false;
        this._sortDayInput.checked = true;
        render(this._pointListContainer, this._pointEditComponent, RenderPosition.AFTERBEGIN);
        this._addPointButton.disabled = true;
        this._body.addEventListener('keydown', this._escKeyDownHandler);
      });

    } else {
      this._pointComponent = new PointView(point);
      this._pointComponent.setEditClickHandler(this._handleEditClick);
      this._pointComponent.setFavoriteClickHandler(this._handleFavoriteClick);
    }

    if ((prevPointComponent === null || prevPointEditComponent === null) && this._pointComponent !== null) {
      render(this._pointListContainer, this._pointComponent, RenderPosition.BEFOREEND);
      return;
    }

    if (this._mode === Mode.DEFAULT && this._pointComponent !== null) {
      replace(this._pointComponent, prevPointComponent);
    }

    if (this._mode === Mode.EDITING) {
      replace(this._pointEditComponent, prevPointEditComponent);
    }

    if (this._pointComponent !== null) {
      remove(prevPointComponent);
      remove(prevPointEditComponent);
    }
  }

  resetView() {
    if (this._mode === Mode.EDITING) {
      this._replaceFormToCard();
    }
  }

  destroy() {
    if (this._pointComponent !== null) {
      remove(this._pointComponent);
    }
    remove(this._pointEditComponent);
  }

  _replaceCardToForm() {
    replace(this._pointEditComponent, this._pointComponent);
    this._changeMode();
    this._mode = Mode.EDITING;
    this._body.addEventListener('keydown', this._escKeyDownHandler);
  }

  _replaceFormToCard() {
    replace(this._pointComponent, this._pointEditComponent);
    this._mode = Mode.DEFAULT;
    this._body.removeEventListener('keydown', this._escKeyDownHandler);
  }

  _escKeyDownHandler(evt) {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      if (this._mode === Mode.EDITING) {
        this._pointEditComponent.reset(this._point);
        this._replaceFormToCard();
      }
      if (this._mode === Mode.ADD) {
        this._handleDeletePointClick();
      }
      this._mode = Mode.DEFAULT;
      this._body.removeEventListener('keydown', this._escKeyDownHandler);
    }
  }

  _handleEditClick() {
    this._replaceCardToForm();
  }

  _handleFavoriteClick() {
    this._changeData(
      Object.assign(
        {},
        this._point,
        {
          isFavorite: !this._point.isFavorite,
        },
      ),
    );
  }

  _handleFormSubmit(point) {
    this._changeData(point);
    this._replaceFormToCard();
    this._body.removeEventListener('keydown', this._escKeyDownHandler);
  }

  _handleHideEditClick() {
    this._replaceFormToCard();
    this._body.removeEventListener('keydown', this._escKeyDownHandler);
  }

  _handleDeletePointClick() {
    (points.length === 0) ?
      this._siteMainElement.querySelector('.trip-events__msg').style = 'display: block;' : null;
    remove(this._pointEditComponent);

    if (this._mode === Mode.ADD) {
      this._addPointButton.disabled = false;
    }
    if (this._pointListContainer.getElement().querySelector('.trip-events__item') === null) {
      render(this._siteTripEventsElement, new NoPointListView().getElement(), RenderPosition.BEFOREEND);
    }
    this._mode = Mode.DEFAULT;
    this._body.removeEventListener('keydown', this._escKeyDownHandler);
    this._pointEditComponent.restoreHandlers();
  }
}
