import {getRandomInteger} from '../utils/common.js';
import AbstractView from './abstract.js';
import {newPointDate} from '../utils/point.js';
import {createPointTypesTemplate} from './point-types.js';
import {randomAvailableOptions, createPointAvailableOptionsTemplate} from './point-options.js';

const BLANK_POINT = {
  type: '',
  destination: '',
  datetimeStart: '',
  datetimeEnd: '',
  price: '',
  description: '',
  photos: '',
  offers: '',
  isFavorite: '',
};

const createAddPointTemplate = (point = {}) => {
  const {type, destination, datetimeStart, datetimeEnd, price, description, photos, offers} = point;

  const typesTemplate = createPointTypesTemplate(type);
  const offersTemplate = createPointAvailableOptionsTemplate(offers);
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
          ${typesTemplate}
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
    <button class="event__reset-btn" type="reset">Cancel</button>
  </header>
  <section class="event__details">
  ${randomAvailableOptions.length !== 0 ? `<section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>
      <div class="event__available-offers">
        ${offersTemplate}
      </div>
    </section>` : ''}
    ${description.length !== 0 ? `<section class="event__section  event__section--destination">
      <h3 class="event__section-title  event__section-title--destination">Destination</h3>
      <p class="event__destination-description">${description.join(' ')}</p>

      <div class="event__photos-container">
        <div class="event__photos-tape">
          <img class="event__photo" src="${photos + getRandomInteger(1, 15)}" alt="Event photo">
          <img class="event__photo" src="${photos + getRandomInteger(1, 15)}" alt="Event photo">
          <img class="event__photo" src="${photos + getRandomInteger(1, 15)}" alt="Event photo">
          <img class="event__photo" src="${photos + getRandomInteger(1, 15)}" alt="Event photo">
          <img class="event__photo" src="${photos + getRandomInteger(1, 15)}" alt="Event photo">
        </div>
      </div>
    </section>` : ''}
  </section>
</form>
</li>`;
};

export default class AddPointView extends AbstractView{
  constructor(point = BLANK_POINT) {
    super();
    this._point = point;
    this._formSubmitHandler = this._formSubmitHandler.bind(this);
    this._formCancelHandler = this._formCancelHandler.bind(this);
  }

  getTemplate() {
    return createAddPointTemplate(this._point);
  }

  _formSubmitHandler(evt) {
    evt.preventDefault();
    this._callback.formSubmit();
  }

  _formCancelHandler(evt) {
    evt.preventDefault();
    this._callback.formCancel();
  }

  setFormSubmitHandler(callback) {
    this._callback.formSubmit = callback;
    this.getElement().querySelector('form').addEventListener('submit', this._formSubmitHandler);
  }

  setFormCancelHandler(callback) {
    this._callback.formCancel = callback;
    this.getElement().querySelector('.event__reset-btn').addEventListener('click', this._formCancelHandler);
  }
}
