import dayjs from 'dayjs';

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomArrayElements = function (arr, minValue) {
  const shuffledArr = arr.slice(0);
  const count = getRandomInteger(minValue, arr.length);
  let i = arr.length;
  const min = i - count;
  let temp;
  let index;
  while (i-- > min) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffledArr[index];
    shuffledArr[index] = shuffledArr[i];
    shuffledArr[i] = temp;
  }
  return (shuffledArr.slice(min));
};

const headerDate = (date) => {
  return dayjs(date).format('DD MMM');
};

const newPointDate = (date) => {
  return dayjs(date).format('DD/MM/YY HH:mm');
};

const isEscEvent = (evt) => {
  return evt.key === ('Escape' || 'Esc');
};

const isInPage = (node) => {
  return (node === document.body) ? false : document.body.contains(node);
};

export {getRandomInteger, getRandomArrayElements, headerDate, isEscEvent, isInPage, newPointDate};
