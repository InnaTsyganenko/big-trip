import dayjs from 'dayjs';

export const headerDate = (date) => {
  return dayjs(date).format('DD MMM');
};

export const newPointDate = (date) => {
  return dayjs(date).format('DD/MM/YY HH:mm');
};
