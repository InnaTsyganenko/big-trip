import dayjs from 'dayjs';
import {nanoid} from 'nanoid';
import {getRandomInteger, getRandomArrayElements} from '../utils/common.js';
import {POINT_COUNT, TYPES, TYPES_OPTIONS, DESTINATION, DESCRIPTION, DESTINATION_PHOTOS} from '../const.js';

export const options = [
  {
    id: 0,
    value: 'luggage',
    title: 'Add luggage',
    price: 30,
    isChecked: Boolean(getRandomInteger(0, 1)),
  }, {
    id: 1,
    value: 'comfort',
    title: 'Switch to comfort class',
    price: 100,
    isChecked: Boolean(getRandomInteger(0, 1)),
  }, {
    id: 2,
    value: 'meal',
    title: 'Add meal',
    price: 15,
    isChecked: Boolean(getRandomInteger(0, 1)),
  }, {
    id: 3,
    value: 'seats',
    title: 'Choose seats',
    price: 5,
    isChecked: Boolean(getRandomInteger(0, 1)),
  }, {
    id: 4,
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
  const type = TYPES[getRandomInteger(0, TYPES.length - 1)];
  const destination = DESTINATION[getRandomInteger(0, DESTINATION.length - 1)];

  return {
    id: nanoid(),
    type: type,
    destination: destination,
    datetimeStart,
    datetimeEnd,
    duration,
    price: getRandomInteger(20, 200),
    description: getRandomArrayElements(DESCRIPTION, 1),
    photos: DESTINATION_PHOTOS[destination],
    offers: TYPES_OPTIONS[type],
    isFavorite: Boolean(getRandomInteger(0, 1)),
  };
};

export const addPointData = new Array(1).fill().map(generatePoint);
export const points = new Array(POINT_COUNT).fill().map(generatePoint).sort((a, b) => a.datetimeStart - b.datetimeStart).slice(1);
export const tripPoints = addPointData.concat(points);
