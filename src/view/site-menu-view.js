import AbstractView from './abstract-view';
import {MenuItem} from '../const';

const createSiteMenuTemplate = () => `<div class="trip-controls__navigation">
  <h2 class="visually-hidden">Switch trip view</h2>
  <nav class="trip-controls__trip-tabs  trip-tabs">
    <a class="trip-tabs__btn trip-tabs__btn--active" href="#" data-menu-item="${MenuItem.TABLE}">Table</a>
    <a class="trip-tabs__btn" href="#" data-menu-item="${MenuItem.STATS}">Stats</a>
  </nav>
</div>`;

export default class SiteMenuView extends AbstractView{
  get template() {
    return createSiteMenuTemplate();
  }

  setMenuClickHandler = (callback) => {
    this._callback.menuClick = callback;
    this.element.querySelectorAll('[data-menu-item]').forEach((item) => item.addEventListener('click', this.#menuClickHandler));
  }

  #menuClickHandler = (evt) => {
    evt.preventDefault();
    this.element.querySelectorAll('[data-menu-item]').forEach((item) => item.classList.remove('trip-tabs__btn--active'));
    evt.target.classList.toggle('trip-tabs__btn--active');
    this._callback.menuClick(evt.target.dataset.menuItem);
  }
}
