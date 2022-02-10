export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const isEscEvent = (evt) => evt.key === ('Escape' || 'Esc');

export const addNull = (count) => count < 10 ? `0${count}` : count;

export const calcDuration = (duration) => {
  let days;
  let hours;
  let minutes;
  let result;

  if (duration < 60) {
    result = `${addNull(duration)}M`;
  }

  if (duration >= 60 && duration < 1440) {
    hours = Math.floor(duration / 60).toString();
    minutes = (duration % 60).toString();
    result = `${addNull(hours)}H ${addNull(minutes)}M`;
  }

  if (duration >= 1440) {
    days = Math.floor(duration / 1440).toString();
    hours = Math.floor(duration % 1440 / 60).toString();
    minutes = ((duration % 1440 % 60)).toString();
    result = `${addNull(days)}D ${addNull(hours)}H ${addNull(minutes)}M`;
  }

  return result;
};
