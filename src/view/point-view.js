import AbstractView from './abstract-view';
import {addNull, calcDuration} from '../utils/common';
import {options} from '../mock/options';

const createPointOptionsTemplate = (offers) => offers.map((option) => `<li class="event__offer">
  <span class="event__offer-title"style="white-space: pre;">${option.title}</span>&plus;&euro;&nbsp;
  <span class="event__offer-price">${option.price}</span>
  </li>`).join('\n');

const createPointTemplate = (point) => {
  const {price, dateFrom, dateTo, duration, type, destination, isFavorite, offers} = point;
  const offersByType = offers.map((item) => options.find((option) => option.id === item));
  const offersChecked = offersByType.filter((offer) => offer.isChecked === true);
  console.log(offersChecked);

  const favoriteClassName = isFavorite
    ? 'event__favorite-btn event__favorite-btn--active'
    : 'event__favorite-btn';

  return `<li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime="2019-03-18">MAR 18</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${type} ${destination.name}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${dateFrom}">${dateFrom.getDate()} / ${addNull(dateFrom.getHours())}:${addNull(dateFrom.getMinutes())}</time>
          &mdash;
          <time class="event__end-time" datetime="${dateTo}">${dateTo.getDate()} / ${addNull(dateTo.getHours())}:${addNull(dateTo.getMinutes())}</time>
        </p>
        <p class="event__duration">${calcDuration(duration)}</p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${price}</span>
      </p>
      ${offersChecked.length > 0 ?
    `<h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        ${createPointOptionsTemplate(offersChecked)}
      </ul>` : ''}
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
