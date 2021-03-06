
import AbstractView from './abstract-view.js';
import {addNull} from '../utils/common';

const displayDestinations = (dest) => {
  let result;
  switch (dest.length) {
    case 1:
      result = dest[0];
      break;
    case 2:
      result = `${dest[0]} &mdash; ${dest[1]}`;
      break;
    case 3:
      result = `${dest[0]} &mdash; ${dest[1]} &mdash; ${dest[2]}`;
      break;
    default:
      result = `${dest[0]} ... &mdash; ... ${dest[dest.length - 1]}`;
      break;
  }
  return result;
};

const createRouteInfoTemplate = (points) => {
  const arrDestinations = [];
  let arrPrices = [];

  points.forEach((point) => {
    arrDestinations.push(point.destination.name);
    arrPrices.push(point.price);
  });

  const optionsForMonth = { month: 'short'};
  const formatShortMonth = (date) => new Intl.DateTimeFormat('en-US', optionsForMonth).format(date);

  arrPrices = arrPrices > '0' ? arrPrices.reduce((total, amount) => total + amount) : '0';
  return `<section class="trip-main__trip-info  trip-info">
  <div class="trip-info__main">
    <h1 class="trip-info__title">${points.length >= 1 ? displayDestinations(arrDestinations) : ''}</h1>
    <p class="trip-info__dates">${points.length > 1 ? `${addNull(points[0].dateFrom.getDate())} ${formatShortMonth(points[0].dateFrom)} &mdash; ${addNull(points[0].dateTo.getDate())} ${formatShortMonth(points[points.length - 1].dateTo)}` : ''}</p>
  </div>
  <p class="trip-info__cost">
  Total: &euro;&nbsp;<span class="trip-info__cost-value">${arrPrices}</span>
</p>
</section>`;
};

export default class RouteInfoView extends AbstractView {
  #points = [];

  constructor(points) {
    super();
    this.#points = points;
  }

  get template() {
    return createRouteInfoTemplate(this.#points);
  }
}
