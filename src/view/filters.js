import dayjs from 'dayjs';
import * as isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
dayjs.extend(isSameOrAfter);
import {POINT_COUNT} from '../const.js';
import {points} from './point.js';

export const isFuturePoint = () => {
  const arrFuturePoint = [];
  for (let i = 2; i < POINT_COUNT; i++) {
    const pointsFutureOrCurrent = ((points[i].datetimeStart.isBefore(dayjs(), 'm')) && (points[i].datetimeEnd.isAfter(dayjs(), 'm'))) || (points[i].datetimeStart.isSameOrAfter(dayjs(), 'm'));
    pointsFutureOrCurrent ? arrFuturePoint.push(points[i]) : false;
  }
  return arrFuturePoint;
};

export const isPastPoint = () => {
  const arrPastPoint = [];
  for (let i = 2; i < POINT_COUNT; i++) {
    const pointsPastOrCurrent = ((points[i].datetimeStart.isBefore(dayjs(), 'm')) && (points[i].datetimeEnd.isAfter(dayjs(), 'm'))) || (points[i].datetimeEnd.isBefore(dayjs(), 'm'));
    pointsPastOrCurrent ? arrPastPoint.push(points[i]) : false;
  }
  return arrPastPoint;
};

export const createFiltersTemplate = () => {
  return `<div class="trip-controls__filters">
  <h2 class="visually-hidden">Filter events</h2>
  <form class="trip-filters" action="#" method="get">
    <div class="trip-filters__filter">
      <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>
      <label class="trip-filters__filter-label" for="filter-everything">Everything</label>
    </div>

    <div class="trip-filters__filter">
      <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">
      <label class="trip-filters__filter-label" for="filter-future">Future</label>
    </div>

    <div class="trip-filters__filter">
      <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">
      <label class="trip-filters__filter-label" for="filter-past">Past</label>
    </div>

    <button class="visually-hidden" type="submit">Accept filter</button>
  </form>
</div>`;
};
