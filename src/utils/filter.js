import {FilterType} from '../const';

const isSameOrAfterDate = (date) => date >= new Date();
const isPastDate = (date) => date < new Date();
const isCurrentDate = (dateFrom, dateTo) => dateFrom < new Date() && dateTo > new Date();

export const filter = {
  [FilterType.EVERYTHING]: (points) => points,
  [FilterType.FUTURE]: (points) => points.filter((point) => isSameOrAfterDate(point.dateFrom) || isCurrentDate(point.dateFrom, point.dateTo)),
  [FilterType.PAST]: (points) => points.filter((point) => isPastDate(point.dateTo) || isCurrentDate(point.dateFrom, point.dateTo)),
};
