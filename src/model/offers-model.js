import AbstractObservable from '../utils/abstract-observable.js';
import {UpdateType} from '../const.js';

export default class OffersModel extends AbstractObservable {
  #offers = [];

  constructor() {
    super();
  }

  get offers() {
    return this.#offers;
  }

  init = async () => {
    this._notify(UpdateType.INIT);
  }
}
