import {createPointTypesTemplate} from './point-types.js';
import {createPointAvailableOptionsTemplate, randomAvailableOptions} from './point-options.js';
import {newPointDate} from '../utils/point.js';
import AbstractView from './abstract.js';

const createEditPointTemplate = (editPoint) => {
  const {type, destination, datetimeStart, datetimeEnd, price, description, offers} = editPoint;
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
          ${createPointTypesTemplate(type)}
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

export default class EditPointView extends AbstractView{
  constructor(point) {
    super();
    this._point = point;
    this._formSubmitHandler = this._formSubmitHandler.bind(this);
    this._formHideEditHandler = this._formHideEditHandler.bind(this);
    this._formDeletePointHandler = this._formDeletePointHandler.bind(this);
  }

  getTemplate() {
    return createEditPointTemplate(this._point);
  }

  _formSubmitHandler(evt) {
    evt.preventDefault();
    this._callback.formSubmit();
  }

  _formHideEditHandler(evt) {
    evt.preventDefault();
    this._callback.formHideEdit();
  }

  _formDeletePointHandler(evt) {
    evt.preventDefault();
    this._callback.formDeletePoint();
  }

  setFormSubmitHandler(callback) {
    this._callback.formSubmit = callback;
    this.getElement().querySelector('form').addEventListener('submit', this._formSubmitHandler);
  }

  setFormHideEditHandler(callback) {
    this._callback.formHideEdit = callback;
    this.getElement().querySelector('.event__rollup-btn').addEventListener('click', this._formHideEditHandler);
  }

  setFormDeletePointHandler(callback) {
    this._callback.formDeletePoint = callback;
    this.getElement().querySelector('.event__reset-btn').addEventListener('click', this._formDeletePointHandler);
  }
}
