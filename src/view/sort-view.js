import AbstractView from './abstract-view.js';
import {SortType} from '../const.js';

const createSortingTemplate = (sorts) => `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
  ${sorts.map((sort) => `<div class="trip-sort__item  trip-sort__item--${sort}">
  <input id="sort-${sort}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="${sort}" ${sort === SortType.DAY ? 'checked' : ''} ${sort === SortType.EVENT || sort === SortType.OFFERS ? 'disabled' : ''}>
  <label class="trip-sort__btn" for="sort-${sort}">${sort}</label>
</div>`).join('')}
    </form>`;

export default class SortView extends AbstractView {
  #sortValues = null;

  constructor() {
    super();
    this.#sortValues = Array.from(Object.values(SortType));
  }

  get template() {
    return createSortingTemplate(this.#sortValues);
  }

  setSortTypeChangeHandler = (callback) => {
    this._callback.sortTypeChange = callback;
    this.element.addEventListener('change', this.#sortTypeChangeHandler);
  }

  #sortTypeChangeHandler = (evt) => {
    if (evt.target.tagName !== 'INPUT') {
      return;
    }

    evt.preventDefault();
    this._callback.sortTypeChange(evt.target.value);
  }
}
