import {createRouteInfoTemplate} from './view/route-info.js';
import {createSiteMenuTemplate} from './view/site-menu.js';
import {createFiltersTemplate} from './view/filters.js';
import {createSortingTemplate} from './view/sorting.js';
import {createCreationFormTemplate} from './view/creation-form.js';
import {createEditFormTemplate} from './view/edit-form.js';
import {createWayPointsTemplate} from './view/waypoint.js';

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector('.page-header');
const siteTripMainElement = siteHeaderElement.querySelector('.trip-main');
const siteNavigationElement = siteHeaderElement.querySelector('.trip-controls__navigation');
const siteFiltersElement = siteHeaderElement.querySelector('.trip-controls__filters');

const siteMainElement = document.querySelector('.page-main');
const siteTripEventsElement = siteMainElement.querySelector('.trip-events');

render(siteTripMainElement, createRouteInfoTemplate(), 'afterbegin');
render(siteFiltersElement, createFiltersTemplate(), 'beforeend');
render(siteNavigationElement, createSiteMenuTemplate(), 'beforeend');
render(siteTripEventsElement, createSortingTemplate(), 'afterbegin');
render(siteTripEventsElement, createEditFormTemplate(), 'beforeend');
render(siteTripEventsElement, createCreationFormTemplate(), 'beforeend');
render(siteTripEventsElement, createWayPointsTemplate(), 'beforeend');
