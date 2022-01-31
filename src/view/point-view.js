import {getRandomArrayElements} from '../utils/common.js';
import AbstractView from './abstract-view.js';

const createPointOptionsTemplate = (options) => {
  return options.map((option) => `<li class="event__offer">
  <span class="event__offer-title"style="white-space: pre;">${option.title}</span>&plus;&euro;&nbsp;
  <span class="event__offer-price">${option.price}</span>
  </li>`).join('\n');
};

const createPointTemplate = (point) => {
  const {type, destination, datetimeStart, datetimeEnd, duration, price, isFavorite, offers} = point;

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
        ${createPointOptionsTemplate(offers)}
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

export default class PointView extends AbstractView{
  constructor(point) {
    super();
    this._point = point;
    this._editClickHandler = this._editClickHandler.bind(this);
    this._favoriteClickHandler = this._favoriteClickHandler.bind(this);
  }

  get template() {
    return createPointTemplate(this._point);
  }

  _editClickHandler(evt) {
    evt.preventDefault();
    this._callback.editClick();
  }

  _favoriteClickHandler(evt) {
    evt.preventDefault();
    this._callback.favoriteClick();
  }

  setEditClickHandler(callback) {
    this._callback.editClick = callback;
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this._editClickHandler);
  }

  setFavoriteClickHandler(callback) {
    this._callback.favoriteClick = callback;
    this.element.querySelector('.event__favorite-btn').addEventListener('click', this._favoriteClickHandler);
  }
}