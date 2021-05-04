import {makeElement} from '../utils.js';

const createNoPointListTemplate = () => {
  return '<p class="trip-events__msg">Click New Event to create your first point</p>';
};

export default class NoPointList {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createNoPointListTemplate();
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
