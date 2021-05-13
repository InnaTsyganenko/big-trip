import dayjs from 'dayjs';
import * as isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
dayjs.extend(isSameOrAfter);
import {RenderPosition, render} from './utils/render.js';
import {sortingDatePointsSlice} from './mock/point.js';
import SiteMenuView from './view/site-menu.js';
import RouteInfoView from './view/route-info.js';
import FiltersView from './view/filters.js';
import TripEventsPresenter from './presenter/trip.js';

const siteHeaderContainerElement = document.querySelector('.page-header__container');
const siteTripInfoElement = siteHeaderContainerElement.querySelector('.trip-main');
const siteNavigationElement = siteHeaderContainerElement.querySelector('.trip-controls__navigation');
const siteFiltersElement = siteHeaderContainerElement.querySelector('.trip-controls__filters');

const siteMainElement = document.querySelector('.page-main');
const siteTripEventsElement = siteMainElement.querySelector('.trip-events');

render(siteTripInfoElement, new RouteInfoView().getElement(), RenderPosition.AFTERBEGIN);
render(siteNavigationElement, new SiteMenuView().getElement(), RenderPosition.AFTERBEGIN);
render(siteFiltersElement, new FiltersView().getElement(), RenderPosition.AFTERBEGIN);

const tripEventsPresenter = new TripEventsPresenter(siteTripEventsElement);
tripEventsPresenter.init(sortingDatePointsSlice);
