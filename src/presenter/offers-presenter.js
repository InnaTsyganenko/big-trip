import {RenderPosition, render, replace, remove} from '../utils/render';
import OffersView from '../view/offers-view';

export default class Point {
  #offers = [];
  #offersComponent = null;

  #offersContainer = null;

  constructor(offersContainer) {
    this.#offersContainer = offersContainer;
  }

  init(offers) {
    this.#offers = offers;

    const prevOffersComponent = this.#offersComponent;

    this.#offersComponent = new OffersView(offers);

    if (prevOffersComponent === null) {
      render(this.#offersContainer, this.#offersComponent, RenderPosition.AFTERBEGIN);
      return;
    }

    if (this.#offersComponent && this.#offersComponent !== prevOffersComponent) {
      replace(this.#offersComponent, prevOffersComponent);
    }

    remove(prevOffersComponent);
  }

  resetView() {
    
  }

  destroy() {
    remove(this.#offersComponent);
  }
}
