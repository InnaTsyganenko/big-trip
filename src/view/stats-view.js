import SmartView from './smart-view';
import {SortType} from '../const.js';

const createSortingTemplate = (sorts) => {
console.log('stats');
  return `<section class="statistics">
  <h2 class="visually-hidden">Trip statistics</h2>

  <div class="statistics__item statistics__item--money">
    <canvas class="statistics__chart  statistics__chart--money" width="900"></canvas>
  </div>

  <div class="statistics__item statistics__item--transport">
    <canvas class="statistics__chart  statistics__chart--transport" width="900"></canvas>
  </div>

  <div class="statistics__item statistics__item--time-spend">
    <canvas class="statistics__chart  statistics__chart--time" width="900"></canvas>
  </div>
  </section>`;
};

export default class StatsView extends SmartView {
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
    this._callback.sortTypeChange(evt.target.id);
  }
}
