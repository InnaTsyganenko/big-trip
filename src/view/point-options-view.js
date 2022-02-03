export const createPointOptionsTemplate = (offers) => offers.map((offer) => `<div class="event__offer-selector">
  <input class="event__offer-checkbox  visually-hidden" id="event-offer-${offer.value}-1" type="checkbox" value="${offer.value}" name="event-offer-${offer.value}" ${(offer.isChecked) ? 'checked' : ''}>
  <label class="event__offer-label" for="event-offer-${offer.value}-1">
    <span class="event__offer-title">${offer.title}</span>
    &plus;&euro;&nbsp;
    <span class="event__offer-price">${offer.price}</span>
  </label>
</div>`).join('\n');
