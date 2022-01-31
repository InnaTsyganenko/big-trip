import {createPointTypesTemplate} from './point-types-view.js';
import {createPointAvailableOptionsTemplate, randomAvailableOptions} from './point-options-view.js';
import {newPointDate} from '../utils/point.js';
import SmartView from './smart-view.js';

const createEditPointTemplate = (data) => {
  const {type, destination, datetimeStart, datetimeEnd, price, description, offers} = data;

  const typePointsTemplate = createPointTypesTemplate(type);
  return `<li class="trip-events__item">
  <form class="event event--edit" action="#" method="post">
  <header class="event__header">
    <div class="event__type-wrapper">
      <label class="event__type  event__type-btn" for="event-type-toggle-1">
        <span class="visually-hidden">Choose event type</span>
        <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
      </label>
      <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

      <div class="event__type-list">
        <fieldset class="event__type-group">
          <legend class="visually-hidden">Event type</legend>
          ${typePointsTemplate}
        </fieldset>
      </div>
    </div>

    <div class="event__field-group  event__field-group--destination">
      <label class="event__label  event__type-output" for="event-destination-1">
        ${type}
      </label>
      <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destination}" list="destination-list-1">
      <datalist id="destination-list-1">
        <option value="Amsterdam"></option>
        <option value="Geneva"></option>
        <option value="Chamonix"></option>
      </datalist>
    </div>

    <div class="event__field-group  event__field-group--time">
      <label class="visually-hidden" for="event-start-time-1">From</label>
      <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${newPointDate(datetimeStart)}">
      &mdash;
      <label class="visually-hidden" for="event-end-time-1">To</label>
      <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${newPointDate(datetimeEnd)}">
    </div>

    <div class="event__field-group  event__field-group--price">
      <label class="event__label" for="event-price-1">
        <span class="visually-hidden">Price</span>
        &euro;
      </label>
      <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${price}">
    </div>

    <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
    <button class="event__reset-btn" type="reset">Delete</button>
    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  </header>
  <section class="event__details">
    ${randomAvailableOptions.length !== 0 ? `<section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>
        <div class="event__available-offers">
          ${createPointAvailableOptionsTemplate(offers)}
        </div>
      </section>` : ''}
      ${description.length !== 0 ? `<section class="event__section  event__section--destination">
        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
        <p class="event__destination-description">${description.join(' ')}</p>
    </section>` : ''}
  </section>
</form>
</li>`;
};

export default class EditPointView extends SmartView{
  constructor(point) {
    super();

    this._data = EditPointView.parsePointToData(point);

    this.#formSubmitHandler = this.#formSubmitHandler.bind(this);
    this.#formHideEditHandler = this.#formHideEditHandler.bind(this);
    this.#formDeletePointHandler = this.#formDeletePointHandler.bind(this);
    this.#typePointToggleHandler = this.#typePointToggleHandler.bind(this);

    this.#setInnerHandlers();
  }

  reset(point) {
    this.updateData(
      EditPointView.parsePointToData(point),
    );
  }

  get template() {
    return createEditPointTemplate(this._data);
  }

  updateData(update) {
    if (!update) {
      return;
    }

    this._data = Object.assign(
      {},
      this._data,
      update,
    );

    this.updateElement();
  }

  updateElement() {
    const prevElement = this.element;
    const parent = prevElement.parentElement;
    this.removeElement();

    const newElement = this.element;

    parent.replaceChild(newElement, prevElement);

    this.restoreHandlers();
  }

  restoreHandlers = () => {
    this.#setInnerHandlers();
    this.setFormSubmitHandler(this._callback.formSubmit);
    this.setFormHideEditHandler(this._callback.formHideEdit);
  }

  setFormSubmitHandler = (callback) => {
    this._callback.formSubmit = callback;
    this.element.querySelector('form').addEventListener('submit', this.#formSubmitHandler);
  }

  setFormHideEditHandler = (callback) => {
    this._callback.formHideEdit = callback;
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#formHideEditHandler);
  }

  setDeletePointHandler = (callback) => {
    this._callback.formDeletePoint = callback;
    this.element.querySelector('.event__reset-btn').addEventListener('click', this.#formDeletePointHandler);
  }

  #setInnerHandlers = () => {
    this.element
      .querySelector('.event__type-group')
      .addEventListener('change', this.#typePointToggleHandler);
  }

  #typePointToggleHandler = (evt) => {
    evt.preventDefault();
    this.updateData({
      type: evt.target.value,
    });
  }

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this._callback.formSubmit(EditPointView.parseDataToPoint(this._data));
  }

  #formHideEditHandler = (evt) => {
    evt.preventDefault();
    this._callback.formHideEdit();
  }

  #formDeletePointHandler = (evt) => {
    evt.preventDefault();
    this._callback.formDeletePoint();
  }

  static parsePointToData = (point) => {
    return Object.assign(
      {},
      point,
      {
      },
    );
  }

  static parseDataToPoint = (data) => {
    data = Object.assign({}, data);

    return data;
  }
}
