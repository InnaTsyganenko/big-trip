import SmartView from './smart-view';
import {types, options, destinations} from '../mock/point';
import flatpickr from 'flatpickr';
import {Mode} from '../const';

import '../../node_modules/flatpickr/dist/flatpickr.min.css';

const createPointTypesTemplate = (currentType) => Object.keys(types).map((type) => `<div class="event__type-item">
  <input
  id="event-type-${type}-1"
  class="event__type-input  visually-hidden"
  type="radio" name="event-type"
  value="${type}"
  ${currentType === type ? 'checked' : ''}
  >
  <label
  class="event__type-label  event__type-label--${type}"
  for="event-type-${type}-1">${type}</label>
</div>`).join('\n');

const createPointCitiesTemplate = (cities) => cities.map((city) => `<option value="${city}">${city}</option>`).join('\n');

const createPointOptionsTemplate = (offers) => offers.map((offer) => `<div class="event__offer-selector">
  <input class="event__offer-checkbox  visually-hidden" id="event-offer-${offer.value}-1" type="checkbox" value="${offer.value}" name="event-offer-${offer.value}" ${(offer.isChecked) ? 'checked' : ''}>
  <label class="event__offer-label" for="event-offer-${offer.value}-1">
    <span class="event__offer-title">${offer.title}</span>
    &plus;&euro;&nbsp;
    <span class="event__offer-price">${offer.price}</span>
  </label>
</div>`).join('\n');

const createPointImagesTemplate = (pictures) => pictures.map((picture) => `<img class="event__photo" src="http://picsum.photos/248/152?r=${picture.src}" alt=${picture.description}>`).join('\n');


const createEditPointTemplate = (data, mode) => {
  const {price, dateFrom, dateTo, type, destination, offers} = data;
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
      <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${dateFrom}">
      &mdash;
      <label class="visually-hidden" for="event-end-time-1">To</label>
      <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${dateTo}">
    </div>

    <div class="event__field-group  event__field-group--price">
      <label class="event__label" for="event-price-1">
        <span class="visually-hidden">Price</span>
        &euro;
      </label>
      <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${price}">
    </div>

    <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
    <button class="event__reset-btn" type="reset">${mode === Mode.EDITING ? 'Delete' : 'Cancel'}</button>
    ${mode === Mode.EDITING ? `<button class="event__rollup-btn" type="button">
    <span class="visually-hidden">Open event</span>
  </button>` : ''}
  </header>
  <section class="event__details">
    ${offers.length !== 0 ? `<section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>
        <div class="event__available-offers">
          ${createPointOptionsTemplate(offers)}
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
  #datepicker = null;
  #mode = null;

  constructor(point, mode) {
    super();

    this.#mode = mode;
    this._data = EditPointView.parsePointToData(point);

    this.#setInnerHandlers();
    this.#setDatepicker();
  }

  // Перегружаем метод родителя removeElement,
  // чтобы при удалении удалялся более не нужный календарь
  removeElement = () => {
    super.removeElement();

    if (this.#datepicker) {
      this.#datepicker.destroy();
      this.#datepicker = null;
    }
  }

  reset(point) {
    this.updateData(
      EditPointView.parsePointToData(point),
    );
  }

  get template() {
    return createEditPointTemplate(this._data, this.#mode);
  }

  restoreHandlers = () => {
    this.#setInnerHandlers();
    this.setFormSubmitHandler(this._callback.formSubmit);
    this.setFormHideEditHandler(this._callback.formHideEdit);
    this.#setDatepicker();
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

  #setDatepicker = () => {
    this.#datepicker = flatpickr(
      this.element.querySelector('#event-start-time-1'),
      {
        dateFormat: 'd/m/Y H:i',
        defaultDate: this._data.dateFrom,
        enableTime: true,
        onClose: this.#dateFromHandler, // На событие flatpickr передаём наш колбэк
      },
    );
    this.#datepicker = flatpickr(
      this.element.querySelector('#event-end-time-1'),
      {
        dateFormat: 'd/m/Y H:i',
        defaultDate: this._data.dateTo,
        enableTime: true,
        onClose: this.#dateToHandler, // На событие flatpickr передаём наш колбэк
      },
    );
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
    const offersByType = types[evt.target.value].map((item) => options.find((option) => option.id === item));
    this._data.offers.forEach((offer) => {
      offer.isChecked = false;
    });
    this.updateData({
      type: evt.target.value,
      offers: offersByType,
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
    const offer = this._data.offers.find((item) => item.value === evt.target.value);
    offer.isChecked = !offer.isChecked;
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

  #dateFromHandler = ([userDate]) => {
    this.updateData({
      dateFrom: userDate,
    });
  }

  #dateToHandler = ([userDate]) => {
    this.updateData({
      dateTo: userDate,
    });
  }

  static parsePointToData = (point) => ({...point});

  static parseDataToPoint = (data) => {
    const point = {...data};
    return point;
  }
}
