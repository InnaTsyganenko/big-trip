import dayjs from 'dayjs';
import * as isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
dayjs.extend(isSameOrAfter);
import {RenderPosition, render} from './utils/render.js';
import {generatePoint} from './mock/point.js';
import SiteMenuView from './view/site-menu-view.js';
import RouteInfoView from './view/route-info-view.js';
import FiltersView from './view/filters-view.js';
import TripPresenter from './presenter/trip-presenter.js';

const POINT_COUNT = 5;

const points = Array.from({length: POINT_COUNT}, generatePoint);

const routeInfoComponent = new RouteInfoView(points);
const siteMenuComponent = new SiteMenuView();
const filtersComponent = new FiltersView();

const siteHeaderContainerElement = document.querySelector('.page-header__container');
const siteTripInfoElement = siteHeaderContainerElement.querySelector('.trip-main');
const siteNavigationElement = siteHeaderContainerElement.querySelector('.trip-controls__navigation');
const siteFiltersElement = siteHeaderContainerElement.querySelector('.trip-controls__filters');

const siteMainElement = document.querySelector('.page-main');
const siteTripEventsElement = siteMainElement.querySelector('.trip-events');

render(siteTripInfoElement, routeInfoComponent.element, RenderPosition.AFTERBEGIN);
render(siteNavigationElement, siteMenuComponent.element, RenderPosition.AFTERBEGIN);
render(siteFiltersElement, filtersComponent.element, RenderPosition.AFTERBEGIN);

const tripPresenter = new TripPresenter(siteTripEventsElement);
tripPresenter.init(points);
