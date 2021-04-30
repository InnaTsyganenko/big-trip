import {getRandomArrayElements} from '../utils.js';
import {options} from '../mock/point.js';

export const randomAvailableOptions = getRandomArrayElements(options, 0);
export const createPointAvailableOptionsTemplate = () => {
  return randomAvailableOptions.map((option) => `<div class="event__offer-selector">
  <input class="event__offer-checkbox  visually-hidden" id="event-offer-${option.value}-1" type="checkbox" name="event-offer-${option.value}" ${(option.isChecked) ? 'checked' : ''}>
  <label class="event__offer-label" for="event-offer-${option.value}-1">
    <span class="event__offer-title">${option.title}</span>
    &plus;&euro;&nbsp;
    <span class="event__offer-price">${option.price}</span>
  </label>
</div>`).join('\n');
};
