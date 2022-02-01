import dayjs from 'dayjs';

export const headerDate = (date) => dayjs(date).format('DD MMM');

export const newPointDate = (date) => dayjs(date).format('DD/MM/YY HH:mm');
