import {options} from './point.js';
import {getRandomInteger, newPointDate, getRandomArrayElements} from '../utils.js';
import {TYPES} from '../const.js';

export const createPointTypesTemplate = (currentType) => {
  return TYPES.map((type) => `<div class="event__type-item">
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
};

export const randomAvailableOptions = getRandomArrayElements(options, 0);
export const createPointAvailableOptionsTemplate = () => {
  return randomAvailableOptions.map((option) => `<div class="event__offer-selector">
  <input class="event__offer-checkbox  visually-hidden" id="event-offer-${option.value}-1" type="checkbox" name="event-offer-${option.value}" ${(option.isChecked) ? 'checked' : ''}>
  <label class="event__offer-label" for="event-offer-${option.value}-1">
    <span class="event__offer-title">${option.title}</span>
    &plus;&euro;&nbsp;
    <span class="event__offer-price">${option.price}</span>
  </label>
</div>`).join('\n');
};

export const createAddPointTemplate = (point = {}) => {
  const {type, destination, datetimeStart, datetimeEnd, price, description, photos, offers} = point;

  const typesTemplate = createPointTypesTemplate(type);
  const offersTemplate = createPointAvailableOptionsTemplate(offers);
  return `<form class="event event--edit" action="#" method="post">
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
</form>`;
};