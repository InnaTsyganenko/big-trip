import AbstractView from './abstract-view.js';
import {SortType} from '../const.js';

const createSortingTemplate = (currentSortType, sorts) => `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
  ${sorts.map((sort) => `<div class="trip-sort__item  trip-sort__item--${sort.type}">
  <input id="sort-${sort.type}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${sort.type}" ${sort.type === SortType.DAY ? 'checked' : ''} ${sort.type === SortType.EVENT || sort.type === SortType.OFFERS ? 'disabled' : ''}>
  <label class="trip-sort__btn" for="sort-${sort.type}">${sort.type}</label>
</div>`).join('')}
    </form>`;

export default class SortView extends AbstractView {
  #currentSortType = null;

  constructor(currentSortType) {
    super();
    this.#currentSortType = currentSortType;
    console.log(this.#currentSortType);
  }

  get template() {
    return createSortingTemplate(this.#currentSortType, this.#getSorts());
  }

  #getSorts = () => [
    {
      type: SortType.DAY,
    },
    {
      type: SortType.EVENT,
    },
    {
      type: SortType.TIME,
    },
    {
      type: SortType.PRICE,
    },
    {
      type: SortType.OFFERS,
    },
  ]

  setSortTypeChangeHandler = (callback) => {
    this._callback.sortTypeChange = callback;
    this.element.addEventListener('change', this.#sortTypeChangeHandler);
  }

  #sortTypeChangeHandler = (evt) => {
    if (evt.target.tagName !== 'INPUT') {
      return;
    }

    evt.preventDefault();
    this.#currentSortType = evt.target.id;
    this._callback.sortTypeChange(evt.target.id);
  }
}
