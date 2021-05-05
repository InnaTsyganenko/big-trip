import dayjs from 'dayjs';
import {getRandomInteger, getRandomArrayElements} from '../utils/common.js';
import {POINT_COUNT, TYPES, DESTINATION, DESCRIPTION} from '../const.js';

export const options = [
  {
    id: 1,
    value: 'luggage',
    title: 'Add luggage',
    price: 30,
    isChecked: Boolean(getRandomInteger(0, 1)),
  }, {
    id: 2,
    value: 'comfort',
    title: 'Switch to comfort class',
    price: 100,
    isChecked: Boolean(getRandomInteger(0, 1)),
  }, {
    id: 3,
    value: 'meal',
    title: 'Add meal',
    price: 15,
    isChecked: Boolean(getRandomInteger(0, 1)),
  }, {
    id: 4,
    value: 'seats',
    title: 'Choose seats',
    price: 5,
    isChecked: Boolean(getRandomInteger(0, 1)),
  }, {
    id: 5,
    value: 'train',
    title: 'Travel by train',
    price: 40,
    isChecked: Boolean(getRandomInteger(0, 1)),
  },
];

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

const points = new Array(POINT_COUNT).fill().map(generatePoint);
export const sortingDatePointsSlice = points.sort((a, b) => a.datetimeStart - b.datetimeStart).slice(1);
