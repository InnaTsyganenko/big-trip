import {TYPES_OPTIONS, DESTINATION_DESCRIPTION, DESTINATION_PHOTOS} from '../const.js';
import AbstractView from './abstract.js';
import {newPointDate} from '../utils/point.js';
import {createPointTypesTemplate} from './point-types.js';
import {createPointAvailableOptionsTemplate} from './point-options.js';
import {createPointPhotosTemplate} from './point-photos.js';

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

const createAddPointTemplate = (data = {}) => {
  const {type, destination, datetimeStart, datetimeEnd, price, description, photos, offers} = data;

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
    <button class="event__reset-btn" type="reset">Cancel</button>
  </header>
  <section class="event__details">
  ${offers.length !== 0 ? `<section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>
      <div class="event__available-offers">
        ${createPointAvailableOptionsTemplate(offers)}
      </div>
    </section>` : ''}
    ${description.length !== 0 ? `<section class="event__section  event__section--destination">
      <h3 class="event__section-title  event__section-title--destination">Destination</h3>
      <p class="event__destination-description">${description.join(' ')}</p>

      <div class="event__photos-container">
        <div class="event__photos-tape">
        ${createPointPhotosTemplate(photos)}
        </div>
      </div>
    </section>` : ''}
  </section>
</form>
</li>`;
};

export default class AddPoint extends AbstractView {
  constructor(point = BLANK_POINT) {
    super();

    this._data = AddPoint.parsePointToData(point);

    this._formSubmitHandler = this._formSubmitHandler.bind(this);
    this._formCancelHandler = this._formCancelHandler.bind(this);

    this._typePointToggleHandler = this._typePointToggleHandler.bind(this);
    this._destinationPointToggleHandler = this._destinationPointToggleHandler.bind(this);

    this._setInnerHandlers();
  }

  reset(point) {
    this.updateData(
      AddPoint.parsePointToData(point),
    );
  }

  getTemplate() {
    return createAddPointTemplate(this._data);
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
    const prevElement = this.getElement();
    const parent = prevElement.parentElement;
    this.removeElement();

    const newElement = this.getElement();

    parent.replaceChild(newElement, prevElement);

    this.restoreHandlers();
  }

  restoreHandlers() {
    this._setInnerHandlers();
    this.setFormSubmitHandler(this._callback.formSubmit);
  }

  _setInnerHandlers() {
    this.getElement()
      .querySelector('.event__type-group')
      .addEventListener('change', this._typePointToggleHandler);

    this.getElement()
      .querySelector('.event__input--destination')
      .addEventListener('change', this._destinationPointToggleHandler);
  }

  _typePointToggleHandler(evt) {
    evt.preventDefault();
    this.updateData({
      type: evt.target.value,
      offers: TYPES_OPTIONS[evt.target.value],
    });
  }

  _destinationPointToggleHandler(evt) {
    evt.preventDefault();
    this.updateData({
      description: DESTINATION_DESCRIPTION[evt.target.value],
      destination: evt.target.value,
      photos: DESTINATION_PHOTOS[evt.target.value],
    });
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

  static parsePointToData(point) {
    return Object.assign(
      {},
      point,
      {
      },
    );
  }

  static parseDataToPoint(data) {
    data = Object.assign({}, data);

    return data;
  }
}
