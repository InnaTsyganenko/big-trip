import dayjs from 'dayjs';
import {getRandomInteger, getRandomArrayElements} from '../utils.js';
import {TYPES, DESTINATION, DESCRIPTION} from '../const.js';

export const generatePoint = () => {
  const datetimeStart = dayjs().add(getRandomInteger(-3000, 3000), 'm');
  const datetimeEnd = datetimeStart.add(getRandomInteger(100, 3000), 'm');
  const duration = datetimeEnd.diff(datetimeStart, 'm');

  return {
    id: 1,
    type: TYPES[getRandomInteger(0, TYPES.length - 1)],
    destination: DESTINATION[getRandomInteger(0, DESTINATION.length - 1)],
    datetimeStart,
    datetimeEnd,
    duration,
    price: getRandomInteger(20, 200),
    description: getRandomArrayElements(DESCRIPTION, 1),
    photos: 'http://picsum.photos/248/152?r=',
    offers: [1, 2, 3],
    isFavorite: Boolean(getRandomInteger(0, 1)),
  };
};
