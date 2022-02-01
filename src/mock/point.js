import dayjs from 'dayjs';
import {nanoid} from 'nanoid';
import {getRandomInteger, getRandomArrayElements} from '../utils/common.js';
import {TYPES} from '../const.js';

const DESTINATION = ['Amsterdam', 'Geneva', 'Chamonix'];
const DESCRIPTION = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis.',
  'Aliquam erat volutpat.',
  'Nunc fermentum tortor ac porta dapibus.',
  'In rutrum ac purus sit amet tempus.',
];

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
  const dateFrom = dayjs().add(getRandomInteger(-3000, 3000), 'm');
  const dateTo = dateFrom.add(getRandomInteger(30, 1500), 'm');
  const duration = dateTo.diff(dateFrom, 'm');

  return {
    price: getRandomInteger(20, 200),
    dateFrom,
    dateTo,
    duration,
    destination: DESTINATION[getRandomInteger(0, DESTINATION.length - 1)],
    id: nanoid(),
    isFavorite: Boolean(getRandomInteger(0, 1)),
    offers: getRandomArrayElements(options, 0),
    type: TYPES[getRandomInteger(0, TYPES.length - 1)],
    description: getRandomArrayElements(DESCRIPTION, 1),
    photos: 'http://picsum.photos/248/152?r=',
  };
};
