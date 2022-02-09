import AbstractView from './abstract-view.js';

const createFiltersTemplate = (filters, currentFilterType) => `<div class="trip-controls__filters">
    <h2 class="visually-hidden">Filter events</h2>
    <form class="trip-filters" action="#" method="get">
      ${filters.map((value) => `<div class="trip-filters__filter">
      <input id="filter-${value}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${value}" ${value === currentFilterType ? 'checked' : ''}>
      <label class="trip-filters__filter-label" for="filter-${value}">${value}</label>
    </div>`).join('')}

      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>
  </div>`;

export default class FilterView extends AbstractView{
  #filters = null;
  #currentFilterType = null;

  constructor(filters, currentFilterType) {
    super();
    this.#filters = filters;
    this.#currentFilterType = currentFilterType;
  }

  get template() {
    return createFiltersTemplate(this.#filters, this.#currentFilterType);
  }

  setFilterTypeChangeHandler = (callback) => {
    this._callback.filterTypeChange = callback;
    this.element.querySelectorAll('input[name=trip-filter]').forEach((link) => link.addEventListener('click', this.#filterTypeChangeHandler));
  }

  #filterTypeChangeHandler = (evt) => {
    evt.preventDefault();
    this._callback.filterTypeChange(evt.target.value);
  }
}
