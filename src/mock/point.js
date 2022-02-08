import {nanoid} from 'nanoid';
import {getRandomInteger} from '../utils/common.js';

export const options = [
  {
    id: 1,
    value: 'luggage',
    title: 'Add luggage',
    price: 30,
    isChecked: false,
  }, {
    id: 2,
    value: 'comfort',
    title: 'Switch to comfort class',
    price: 100,
    isChecked: false,
  }, {
    id: 3,
    value: 'meal',
    title: 'Add meal',
    price: 15,
    isChecked: false,
  }, {
    id: 4,
    value: 'seats',
    title: 'Choose seats',
    price: 5,
    isChecked: false,
  }, {
    id: 5,
    value: 'train',
    title: 'Travel by train',
    price: 40,
    isChecked: false,
  },
];

export const types = {
  'taxi': [1, 2],
  'bus': [4],
  'train': [2, 3],
  'ship': [5],
  'drive': [5],
  'flight': [1, 2, 4],
  'check-in': [3],
  'sightseeing': [],
  'restaurant': [],
};

export const destinations = [
  {
    name: 'Amsterdam',
    description: 'Amsterdam, city and port, western Netherlands, located on the IJsselmeer and connected to the North Sea. It is the capital and the principal commercial and financial centre of the Netherlands.',
    pictures: [
      {
        src: [getRandomInteger(1, 2)],
        description: 'Amsterdam parlament building',
      },
      {
        src: [getRandomInteger(3, 5)],
        description: 'Amsterdam parlament building',
      },
      {
        src: [getRandomInteger(6, 8)],
        description: 'Amsterdam parlament building',
      },
      {
        src: [getRandomInteger(9, 11)],
        description: 'Amsterdam parlament building',
      },
      {
        src: [getRandomInteger(12, 14)],
        description: 'Amsterdam parlament building',
      }
    ]
  },
  {
    name: 'Geneva',
    description: 'Geneva is the capital of the Swiss Canton of Geneva located in the south-westernmost corner of Switzerland. The city is situated along the banks of Europes largest lake, Lake Geneva (Lac Léman), at the mouth of the Rhone River and is bordered by the Jura Mountains to the west and the French Alps in the east.',
    pictures: [
      {
        src: [getRandomInteger(15, 17)],
        description: 'Geneva parlament building',
      },
      {
        src: [getRandomInteger(18, 20)],
        description: 'Geneva parlament building',
      },
      {
        src: [getRandomInteger(21, 23)],
        description: 'Geneva parlament building',
      },
    ]
  },
  {
    name: 'Vienna',
    description: 'Vienna is the federal capital, largest city and one of nine states of Austria. Vienna is Austria&apos;s primate city, with a population of about 1.9 million. It is the 7th-largest city by population within city limits in the European Union. These regions work together in a European Centrope border region.',
    pictures: [
      {
        src: [getRandomInteger(24, 26)],
        description: 'Vienna',
      },
      {
        src: [getRandomInteger(27, 29)],
        description: 'Vienna',
      },
      {
        src: [getRandomInteger(30, 32)],
        description: 'Vienna',
      },
      {
        src: [getRandomInteger(34, 36)],
        description: 'Vienna',
      },
      {
        src: [getRandomInteger(37, 39)],
        description: 'Vienna',
      },
      {
        src: [getRandomInteger(40, 42)],
        description: 'Vienna',
      },
      {
        src: [getRandomInteger(43, 45)],
        description: 'Vienna',
      }
    ]
  },
  {
    name: 'Amsterdam',
    description: 'Amsterdam, city and port, western Netherlands, located on the IJsselmeer and connected to the North Sea. It is the capital and the principal commercial and financial centre of the Netherlands.',
    pictures: [
      {
        src: [getRandomInteger(1, 2)],
        description: 'Amsterdam parlament building',
      },
      {
        src: [getRandomInteger(3, 5)],
        description: 'Amsterdam parlament building',
      },
      {
        src: [getRandomInteger(6, 8)],
        description: 'Amsterdam parlament building',
      },
      {
        src: [getRandomInteger(9, 11)],
        description: 'Amsterdam parlament building',
      },
      {
        src: [getRandomInteger(12, 14)],
        description: 'Amsterdam parlament building',
      }
    ]
  },
];

export const generatePoint = () => {
  const dateNow = new Date();
  const dateFrom = new Date();
  const dateTo = new Date();

  dateFrom.setDate(dateNow.getDate() + getRandomInteger(-2, 2));
  dateFrom.setHours(dateNow.getHours() + getRandomInteger(1, 24));
  dateFrom.setMinutes(dateNow.getMinutes() + getRandomInteger(5, 60));
  dateTo.setDate(dateFrom.getDate() + getRandomInteger(0, 2));
  dateTo.setHours(dateFrom.getHours() + getRandomInteger(1, 24));
  dateTo.setMinutes(dateFrom.getMinutes() + getRandomInteger(0, 60));
  const duration = (dateTo - dateFrom) / 60000; // делим на 60000 чтобы получить из миллисекунд минуты

  const type = Object.keys(types)[getRandomInteger(0, Object.keys(types).length - 1)];
  const offers = types[type].map((item) => options.find((option) => option.id === item));

  return {
    price: getRandomInteger(20, 200),
    dateFrom,
    dateTo,
    duration,
    id: nanoid(),
    isFavorite: Boolean(getRandomInteger(0, 1)),
    type,
    offers,
    destination: destinations[getRandomInteger(0, destinations.length - 1)],
  };
};
