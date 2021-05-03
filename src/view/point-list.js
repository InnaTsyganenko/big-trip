import {makeElement} from '../utils.js';

const createPointListTemplate = () => {
  return '<ul class="trip-events__list"></ul>';
};

export default class PointList {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createPointListTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = makeElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
