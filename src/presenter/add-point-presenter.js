import {isEscEvent} from '../utils/common';
import {RenderPosition, render} from '../utils/render';
import NoPointListView from '../view/no-point-list-view';
import EditPointView from '../view/edit-point-view';

const ModeAddPoint = {
  DEFAULT: 'DEFAULT',
  SHOW: 'SHOW',
};

export default class AddPointPresenter {
  #pointListContainer = null;
  #addPointComponent = null;
  #mode = null;
  #body = null;
  #point = null;
  #sortDayInput = null;
  #siteTripEventsElement = null;
  #siteMainElement = null;
  #siteHeaderContainerElement = null;
  #addPointButton = null;
  #pointsLength = null;

  constructor(pointListContainer, pointsLength) {
    this.#pointListContainer = pointListContainer;
    this.#pointsLength = pointsLength;

    this.#addPointComponent = null;
    this.#mode = ModeAddPoint.DEFAULT;

    this.#body = document.querySelector('.page-body');
    this.#siteMainElement = document.querySelector('.page-main');
  }

  init(point) {
    this.#point = point;

    this.#siteHeaderContainerElement = document.querySelector('.page-header__container');
    this.#addPointButton = this.#siteHeaderContainerElement.querySelector('.trip-main__event-add-btn');

    this.#addPointComponent = new EditPointView(point);

    this.#addPointButton.addEventListener('click', () => {
      this.#mode = ModeAddPoint.SHOW;

      if (this.#pointListContainer && this.#pointListContainer.element.querySelector('.event--edit')) {
        this.#pointListContainer.element.querySelector('.event--edit').querySelector('.event__rollup-btn').click();
      }

      if (this.#body.querySelector('.trip-events__msg')) {
        this.#body.querySelector('.trip-events__msg').style = 'display: none;';
      }

      this.#sortDayInput.checked = true;
      render(this.#pointListContainer, this.#addPointComponent, RenderPosition.AFTERBEGIN);
      this.#addPointButton.disabled = true;
      this.#body.addEventListener('keydown', this.#escKeyDownHandler);
    });

    this.#siteTripEventsElement = this.#siteMainElement.querySelector('.trip-events');
    this.#sortDayInput = this.#siteTripEventsElement.querySelector('#sort-day');

    this.#addPointComponent.setFormSubmitHandler(this.#handleFormSubmit);
    this.#addPointComponent.setDeletePointHandler(this.#handleDeletePointClick);

  }

  #handleFormSubmit = () => {
    this.closeAddForm();
  }

  #handleDeletePointClick = () => {
    this.closeAddForm();
    if (this.#pointListContainer.element.querySelector('.trip-events__item') === null) {
      render(this.#siteTripEventsElement, new NoPointListView().element, RenderPosition.BEFOREEND);
    }
    this.#body.removeEventListener('keydown', this.#escKeyDownHandler);
  }

  closeAddForm = () => {
    if (this.#mode === ModeAddPoint.SHOW) {
      this.#mode = ModeAddPoint.DEFAULT;
      this.#pointListContainer.element.querySelector('.trip-events__item').remove();
      this.#addPointButton.disabled = false;
      if (this.#pointsLength === 0) {
        this.#siteMainElement.querySelector('.trip-events__msg').style = 'display: block;';
      }
    }
  }

  #escKeyDownHandler = (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      this.closeAddForm();
      this.#body.removeEventListener('keydown', this.#escKeyDownHandler);
    }
  }
}
