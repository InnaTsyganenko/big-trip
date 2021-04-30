
import {headerDate} from '../utils.js';
import {points} from '../view/point.js';

const displayDestinations = (dest) => {
  switch (dest.length) {
    case 1:
      dest = dest[0];
      break;
    case 2:
      dest = dest[0] + ' ' + '&mdash;' + ' ' + dest[1];
      break;
    case 3:
      dest = dest[0] + ' ' + '&mdash;' + ' ' + dest[1] + ' ' + '&mdash;' + ' ' + ' ' + dest[2];
      break;
    default:
      dest = dest[0] + ' ' + '&mdash;' + ' ' + '...' + ' ' + '&mdash;' + ' ' + dest[dest.length - 1];
      break;
  }
  return dest;
};

export const createRouteInfoTemplate = () => {
  const arrDestinations = [];
  let arrPrices = [];
  for (let i = 1; i < points.length; i++) {
    arrDestinations.push(points[i].destination);
    arrPrices.push(points[i].price);
  }

  arrPrices = arrPrices > '0' ? arrPrices.reduce((total, amount) => total + amount) : '0';
  return `<section class="trip-main__trip-info  trip-info">
  <div class="trip-info__main">
    <h1 class="trip-info__title">${points.length > 1 ? displayDestinations(arrDestinations) : ''}</h1>
    <p class="trip-info__dates">${points.length > 1 ? headerDate(points[1].datetimeStart) + ' ' + '&mdash;' + ' ' + headerDate(points[points.length - 1].datetimeEnd) : ''}</p>
  </div>
  <p class="trip-info__cost">
  Total: &euro;&nbsp;<span class="trip-info__cost-value">${arrPrices}</span>
</p>
</section>`;
};
