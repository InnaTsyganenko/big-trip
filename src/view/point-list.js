import Abstract from './abstract.js';

const createPointListTemplate = () => {
  return '<ul class="trip-events__list"></ul>';
};

export default class PointListView extends Abstract{
  getTemplate() {
    return createPointListTemplate();
  }
}
