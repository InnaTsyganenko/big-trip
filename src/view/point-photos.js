export const createPointPhotosTemplate = (photos) => {
  return photos.map((photo) =>
    `<img class="event__photo" src="http://picsum.photos/248/152?r=${photo}" alt="Event photo"></img>`);
};
