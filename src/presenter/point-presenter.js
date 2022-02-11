import {isEscEvent} from '../utils/common';
import {RenderPosition, render, replace, remove} from '../utils/render';
import {Mode} from '../const';
import NoPointListView from '../view/no-point-list-view';
import PointView from '../view/point-view';
import EditPointView from '../view/edit-point-view';
import OffersPresenter from './offers-presenter';

export default class Point {
  #mode = null;
  #changeData = null;
  #changeMode = null;
  #pointComponent = null;
  #pointEditComponent = null;
  #siteTripEventsElement = null;
  #point = {};

  #pointListContainer = null;

  constructor(pointListContainer, changeData, changeMode) {
    this.#pointListContainer = pointListContainer;
    this.#changeData = changeData;
    this.#changeMode = changeMode;

    const bodyElement = document.querySelector('.page-body');
    this.#siteTripEventsElement = bodyElement.querySelector('.trip-events');

    this.#pointComponent = null;
    this.#pointEditComponent = null;
    this.#mode = Mode.DEFAULT;
  }

  init(point, offers, mode) {
    this.#point = point;

    const prevPointComponent = this.#pointComponent;
    const prevPointEditComponent = this.#pointEditComponent;

    this.#pointComponent = new PointView(point);
    this.#pointEditComponent = new EditPointView(point, mode);
    this.#pointComponent.setEditClickHandler(this.#handleEditClick);
    this.#pointComponent.setFavoriteClickHandler(this.#handleFavoriteClick);
    this.#pointEditComponent.setFormSubmitHandler(this.#handleFormSubmit);
    this.#pointEditComponent.setDeletePointHandler(this.#handleDeletePointClick);
    this.#pointEditComponent.setFormHideEditHandler(this.#handleHideEditClick);

    console.log();

    const offersPresenter = new OffersPresenter(this.#pointComponent.element.querySelector('.event__selected-offers'), offers);


    if (prevPointComponent === null || prevPointEditComponent === null) {
      render(this.#pointListContainer, this.#pointComponent, RenderPosition.BEFOREEND);
      return;
    }

    if (this.#mode === Mode.DEFAULT) {
      replace(this.#pointComponent, prevPointComponent);
    }

    if (this.#mode === Mode.EDITING) {
      replace(this.#pointEditComponent, prevPointEditComponent);
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
    remove(this.#pointComponent);
    remove(this.#pointEditComponent);
  }

  #replaceCardToForm = () => {
    if (this.#pointListContainer && this.#pointListContainer.element.querySelector('.event--edit')) {
      this.#pointListContainer.element.querySelector('.event--edit').querySelector('.event__rollup-btn').click();
    }
    replace(this.#pointEditComponent, this.#pointComponent);
    this.#changeMode();
    this.#mode = Mode.EDITING;
    document.addEventListener('keydown', this.#escKeyDownHandler);
  }

  #replaceFormToCard = () => {
    replace(this.#pointComponent, this.#pointEditComponent);
    this.#mode = Mode.DEFAULT;
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  }

  #escKeyDownHandler = (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      this.#pointEditComponent.reset(this.#point);
      this.#replaceFormToCard();
      document.removeEventListener('keydown', this.#escKeyDownHandler);
    }
  }

  #handleEditClick = () => {
    this.#replaceCardToForm();
  }

  #handleFavoriteClick = () => {
    this.#changeData(
      Object.assign(
        {},
        this.#point,
        {
          isFavorite: !this.#point.isFavorite,
        },
      ),
    );
  }

  #handleFormSubmit = (point) => {
    this.#changeData(point);
    this.#replaceFormToCard();
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  }

  #handleHideEditClick = () => {
    this.#pointEditComponent.reset(this.#point);
    this.#replaceFormToCard();
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  }

  #handleDeletePointClick = () => {
    remove(this.#pointEditComponent);
    if (this.#pointListContainer.element.querySelector('.trip-events__item') === null) {
      render(this.#siteTripEventsElement, new NoPointListView().element, RenderPosition.BEFOREEND);
    }
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  }
}
