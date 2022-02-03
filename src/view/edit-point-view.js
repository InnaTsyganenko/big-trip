import {createPointTypesTemplate} from './point-types-view';
import {createPointOptionsTemplate} from './point-options-view';
import {createPointCitiesTemplate} from './point-cities-view';
import {createPointImagesTemplate} from './point-images-view';
import {newPointDate} from '../utils/point';
import SmartView from './smart-view';
import {types, options, destinations} from '../mock/point';

const createEditPointTemplate = (data) => {
  const {price, dateFrom, dateTo, type, destination} = data;
  const offersByType = types[type].map((item) => options.find((x) => x.id === item));
  const cities = [...new Set(destinations.map((item) => item.name))];

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
      <label class="event__label  event__type-output" for="event-destination-1">${type}</label>
      <datalist id="destination-list-1">
        ${createPointCitiesTemplate(cities)}
      </datalist>
      <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" list="destination-list-1" value="${destination.name} "autocomplete="off">
    </div>

    <div class="event__field-group  event__field-group--time">
      <label class="visually-hidden" for="event-start-time-1">From</label>
      <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${newPointDate(dateFrom)}">
      &mdash;
      <label class="visually-hidden" for="event-end-time-1">To</label>
      <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${newPointDate(dateTo)}">
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
    ${offersByType.length !== 0 ? `<section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>
        <div class="event__available-offers">
          ${createPointOptionsTemplate(offersByType)}
        </div>
      </section>` : ''}
      ${destination.description.length !== 0 ? `<section class="event__section  event__section--destination">
        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
        <p class="event__destination-description">${destination.description}</p>
        ${destination.pictures.length > 0 ? `<div class="event__photos-container">
        <div class="event__photos-tape">
          ${createPointImagesTemplate(destination.pictures)}
        </div>
      </div>` : ''}
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
    this.#citiesInputHandler = this.#citiesInputHandler.bind(this);

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

    this.element
      .querySelector('.event__input--destination')
      .addEventListener('change', this.#citiesInputHandler);

    this.element
      .querySelectorAll('.event__offer-checkbox').forEach((item) => item.addEventListener('change', this.#selectOptionHandler));
  }

  #typePointToggleHandler = (evt) => {
    evt.preventDefault();
    this.updateData({
      type: evt.target.value,
    });
  }

  #citiesInputHandler = (evt) => {
    evt.preventDefault();
    const destinationByName = destinations.find((item) => item.name === evt.target.value);
    this.updateData({
      destination: destinationByName,
    });
  }

  #selectOptionHandler = (evt) => {
    evt.preventDefault();
    // const offersByType = options.find((option) => option.value === evt.target.value);

    this.updateData({});
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

  static parsePointToData = (point) => point;

  static parseDataToPoint = (data) => {
    data = Object.assign({}, data);

    return data;
  }
}
