import {getRandomInteger, getRandomArrayElements} from '../utils.js';
import {POINT_COUNT} from '../const.js';
import {generatePoint} from '../mock/point.js';

export const options = [
  {
    id: 1,
    value: 'luggage',
    title: 'Add luggage',
    price: 30,
    isChecked: Boolean(getRandomInteger(0, 1)),
  }, {
    id: 2,
    value: 'comfort',
    title: 'Switch to comfort class',
    price: 100,
    isChecked: Boolean(getRandomInteger(0, 1)),
  }, {
    id: 3,
    value: 'meal',
    title: 'Add meal',
    price: 15,
    isChecked: Boolean(getRandomInteger(0, 1)),
  }, {
    id: 4,
    value: 'seats',
    title: 'Choose seats',
    price: 5,
    isChecked: Boolean(getRandomInteger(0, 1)),
  }, {
    id: 5,
    value: 'train',
    title: 'Travel by train',
    price: 40,
    isChecked: Boolean(getRandomInteger(0, 1)),
  },
];

export const createPointOptionsTemplate = () => {
  const randomOffers = getRandomArrayElements(options, 0);
  return randomOffers.map((option) => `<li class="event__offer">
  <span class="event__offer-title"style="white-space: pre;">${option.title}</span>&plus;&euro;&nbsp;
  <span class="event__offer-price">${option.price}</span>
  </li>`).join('\n');
};

export const createEmptyListTemplate = () => {
  return '<p class="trip-events__msg">Click New Event to create your first point</p>';
};

export const createPointTemplate = (point) => {
  const {type, destination, datetimeStart, datetimeEnd, duration, price, isFavorite} = point;

  const calcDuration = () => {
    let result = duration + 'M';
    if (duration >= 60 & duration < 1440) {
      const hours = Math.floor(duration / 60).toString();
      const minutes = (duration % 60).toString();
      result = (hours.length === 1 ? '0' : '') + hours + 'H ' + (minutes.length === 1 ? '0' : '') + minutes + 'M';
    } else if (duration > 1440) {
      const days = Math.floor(duration / 1440).toString();
      const hours = Math.floor(duration % 1440 / 60).toString();
      const minutes = ((duration % 1440 % 60)).toString();
      result = (days.length === 1 ? '0' : '') + days + 'D ' + (hours.length === 1 ? '0' : '') + hours + 'H ' + (minutes.length === 1 ? '0' : '') + minutes + 'M';
    }
    return result;
  };

  const favoriteClassName = isFavorite
    ? 'event__favorite-btn event__favorite-btn--active'
    : 'event__favorite-btn';

  return `<li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime="2019-03-18">MAR 18</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${type} ${destination}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${datetimeStart.format('YYYY-MM-DDTHH:mm:s.Z')}">${datetimeStart.format('DD / HH:mm')}</time>
          &mdash;
          <time class="event__end-time" datetime="${datetimeEnd.format('YYYY-MM-DDTHH:mm:s.Z')}">${datetimeEnd.format('DD / HH:mm')}</time>
        </p>
        <p class="event__duration">${calcDuration()}</p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${price}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        ${createPointOptionsTemplate()}
      </ul>
      <button class="event__favorite-btn ${favoriteClassName}" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
        </svg>
      </button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`;
};

export const points = new Array(POINT_COUNT).fill().map(generatePoint);
export const sortingDatePoints = points.sort((a, b) => a.datetimeStart - b.datetimeStart);
