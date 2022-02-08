import {FilterType} from '../const';

export const filter = {
  [FilterType.EVERYTHING]: (points) => points,
  [FilterType.FUTURE]: (points) => points.filter((point) => point.dateFrom === ''),
  [FilterType.PAST]: (points) => points.filter((point) => point.dataTo === ''),
};
