import {isEscEvent} from '../utils/common';
import {RenderPosition, render, replace, remove} from '../utils/render';
import NoPointListView from '../view/no-point-list-view';
import PointView from '../view/point-view';
import EditPointView from '../view/edit-point-view';

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
  ADD: 'ADD',
};

export default class Point {
  #mode = null;

  #pointListContainer = null;

  constructor(pointListContainer, changeData, changeMode) {
    this.#pointListContainer = pointListContainer;
    this._changeData = changeData;
    this._changeMode = changeMode;

    this._body = document.querySelector('.page-body');
    this._siteTripEventsElement = this._body.querySelector('.trip-events');

    this._pointComponent = null;
    this._pointEditComponent = null;
    this.#mode = Mode.DEFAULT;

    this._handleEditClick = this._handleEditClick.bind(this);
    this._handleFavoriteClick = this._handleFavoriteClick.bind(this);
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
    this._handleHideEditClick = this._handleHideEditClick.bind(this);
    this._handleDeletePointClick = this._handleDeletePointClick.bind(this);
    this._escKeyDownHandler = this._escKeyDownHandler.bind(this);
  }

  init(point) {
    this._point = point;

    const prevPointComponent = this._pointComponent;
    const prevPointEditComponent = this._pointEditComponent;

    this._pointComponent = new PointView(point);
    this._pointEditComponent = new EditPointView(point);
    this._pointComponent.setEditClickHandler(this._handleEditClick);
    this._pointComponent.setFavoriteClickHandler(this._handleFavoriteClick);
    this._pointEditComponent.setFormSubmitHandler(this._handleFormSubmit);
    this._pointEditComponent.setDeletePointHandler(this._handleDeletePointClick);
    this._pointEditComponent.setFormHideEditHandler(this._handleHideEditClick);

    if (prevPointComponent === null || prevPointEditComponent === null) {
      render(this.#pointListContainer, this._pointComponent, RenderPosition.BEFOREEND);
      return;
    }

    if (this.#mode === Mode.DEFAULT) {
      replace(this._pointComponent, prevPointComponent);
    }

    if (this.#mode === Mode.EDITING) {
      replace(this._pointEditComponent, prevPointEditComponent);
    }

    remove(prevPointComponent);
    remove(prevPointEditComponent);
  }

  resetView() {
    if (this.#mode !== Mode.DEFAULT) {
      this.#replaceFormToCard();
    }
  }

  destroy() {
    remove(this._pointComponent);
    remove(this._pointEditComponent);
  }

  #replaceCardToForm = () => {
    replace(this._pointEditComponent, this._pointComponent);
    this._changeMode();
    this.#mode = Mode.EDITING;
    this._body.addEventListener('keydown', this._escKeyDownHandler);
  }

  #replaceFormToCard = () => {
    replace(this._pointComponent, this._pointEditComponent);
    this.#mode = Mode.DEFAULT;
    this._body.removeEventListener('keydown', this._escKeyDownHandler);
  }

  _escKeyDownHandler(evt) {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      this._pointEditComponent.reset(this._point);
      this.#replaceFormToCard();
      this._body.removeEventListener('keydown', this._escKeyDownHandler);
    }
  }

  _handleEditClick() {
    this.#replaceCardToForm();
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
    this.#replaceFormToCard();
    this._body.removeEventListener('keydown', this._escKeyDownHandler);
  }

  _handleHideEditClick() {
    this._pointEditComponent.reset(this._point);
    this.#replaceFormToCard();
    this._body.removeEventListener('keydown', this._escKeyDownHandler);
  }

  _handleDeletePointClick() {
    remove(this._pointEditComponent);
    if (this.#pointListContainer.element.querySelector('.trip-events__item') === null) {
      render(this._siteTripEventsElement, new NoPointListView().element, RenderPosition.BEFOREEND);
    }
    this._body.removeEventListener('keydown', this._escKeyDownHandler);
  }
}
