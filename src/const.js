export const POINT_COUNT = 5;
export const TYPES = ['Taxi', 'Bus', 'Train', 'Ship', 'Transport', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant'];
export const DESTINATION = ['Amsterdam', 'Geneva', 'Chamonix'];
export const DESCRIPTION = [
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

export const TYPES_OPTIONS =
  {
    'Taxi': [1],
    'Bus': [2, 3, 4],
    'Train': [0, 4],
    'Ship': [1, 2, 3],
    'Transport': [2],
    'Drive': [3, 4],
    'Flight': [0, 1],
    'Check-in': [2],
    'Sightseeing': [3],
    'Restaurant': [],
  };

export const DESTINATION_DESCRIPTION =
  {
    'Amsterdam': ['Fusce tristique felis at fermentum pharetra.'],
    'Geneva': ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
    'Chamonix': ['In rutrum ac purus sit amet tempus.'],
  };

export const DESTINATION_PHOTOS =
  {
    'Amsterdam': [1, 3, 4],
    'Geneva': [2, 4, 6, 8, 12],
    'Chamonix': [5, 7, 9, 11],
  };
