import SmartView from './smart-view';

const createPointOffersTemplate = (offers) => offers.map((offer) => `${offers.length !== 0 ? `<section class="event__section  event__section--offers">
<h3 class="event__section-title  event__section-title--offers">Offers</h3>
<div class="event__available-offers">
<div class="event__offer-selector">
<input class="event__offer-checkbox  visually-hidden" id="event-offer-${offer.value}-1" type="checkbox" value="${offer.value}" name="event-offer-${offer.value}" ${(offer.isChecked) ? 'checked' : ''}>
<label class="event__offer-label" for="event-offer-${offer.value}-1">
  <span class="event__offer-title">${offer.title}</span>
  &plus;&euro;&nbsp;
  <span class="event__offer-price">${offer.price}</span>
</label>
</div>
</div>
</section>` : ''}`).join('\n');

export default class OffersView extends SmartView{
  constructor(offers) {
    super();

    this._data = OffersView.parseOffersToData(offers);

    this.#setInnerHandlers();
  }

  get template() {
    return createPointOffersTemplate(this._data);
  }

  restoreHandlers = () => {
    this.#setInnerHandlers();
  }

  #setInnerHandlers = () => {
    this.element
      .querySelectorAll('.event__offer-checkbox').forEach((item) => item.addEventListener('change', this.#selectOptionHandler));
  }

  #selectOptionHandler = (evt) => {
    evt.preventDefault();
    const offer = this._data.offers.find((item) => item.value === evt.target.value);
    offer.isChecked = !offer.isChecked;
  }

  static parseOffersToData = (point) => ({...point});

  static parseDataToOffers = (data) => {
    const point = {...data};
    return point;
  }
}
