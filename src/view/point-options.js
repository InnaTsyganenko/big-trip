import {options} from '../mock/point.js';

export const createPointAvailableOptionsTemplate = (options_ids) => {
  return options.map((option) => `${Object.values(options_ids).includes(option.id) ? `<div class="event__offer-selector">
  <input class="event__offer-checkbox  visually-hidden" id="event-offer-${option.value}-1" type="checkbox" name="event-offer-${option.value}" ${(option.isChecked) ? 'checked' : ''}>
  <label class="event__offer-label" for="event-offer-${option.value}-1">
    <span class="event__offer-title">${option.title}</span>
    &plus;&euro;&nbsp;
    <span class="event__offer-price">${option.price}</span>
  </label>
</div>` : ''}`).join('\n');
};
