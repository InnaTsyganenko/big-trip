import Abstract from './abstract.js';

const createNoPointListTemplate = () => {
  return '<p class="trip-events__msg">Click New Event to create your first point</p>';
};

export default class NoPointListView extends Abstract {
  getTemplate() {
    return createNoPointListTemplate();
  }
}
