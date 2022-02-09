import {RenderPosition, render} from './utils/render';
import {generatePoint} from './mock/point';
import SiteMenuView from './view/site-menu-view';
import RouteInfoView from './view/route-info-view';
import StatsView from './view/stats-view';
import TripPresenter from './presenter/trip-presenter';
import FilterPresenter from './presenter/filter-presenter.js';
import PointsModel from './model/points-model';
import FilterModel from './model/filter-model.js';
import {MenuItem} from './const';

const POINT_COUNT = 6;

const points = Array.from({length: POINT_COUNT}, generatePoint);

const pointsModel = new PointsModel();
pointsModel.points = points;

const filterModel = new FilterModel();

const routeInfoComponent = new RouteInfoView(points);
const siteMenuComponent = new SiteMenuView();

const siteHeaderContainerElement = document.querySelector('.page-header__container');
const siteTripInfoElement = siteHeaderContainerElement.querySelector('.trip-main');
const siteNavigationElement = siteHeaderContainerElement.querySelector('.trip-controls__navigation');
const siteFiltersElement = siteHeaderContainerElement.querySelector('.trip-controls__filters');

const siteMainElement = document.querySelector('.page-main');
const siteTripEventsElement = siteMainElement.querySelector('.trip-events');

render(siteTripInfoElement, routeInfoComponent.element, RenderPosition.AFTERBEGIN);
render(siteNavigationElement, siteMenuComponent.element, RenderPosition.AFTERBEGIN);

const tripPresenter = new TripPresenter(siteTripEventsElement, pointsModel, filterModel);
const filterPresenter = new FilterPresenter(siteFiltersElement, filterModel, pointsModel);

let statsComponent = null;

const handleSiteMenuClick = (menuItem) => {
  switch (menuItem) {
    case MenuItem.TABLE:
      console.log(MenuItem.TABLE);
      siteTripEventsElement.classList.remove('trip-events--hidden');
      // remove(statisticsComponent);
      // tripPresenter.init();
      // boardPresenter.destroy();
      // boardPresenter.init();
      // boardPresenter.createTask(handleTaskNewFormClose);
      // siteMenuComponent.element.querySelector(`[value=${MenuItem.TASKS}]`).disabled = true;
      // siteMenuComponent.element.querySelector(`[value=${MenuItem.STATISTICS}]`).disabled = true;
      break;
    case MenuItem.STATS:
      console.log(MenuItem.STATS);
      // tripPresenter.destroy();
      // siteTripEventsElement.classList.add('trip-events--hidden');
      // statsComponent = new StatsView(pointsModel.points);
      // render(siteTripEventsElement, statsComponent, RenderPosition.AFTEREND);
      // boardPresenter.init();
      // remove(statisticsComponent);
      break;
  }
};

siteMenuComponent.setMenuClickHandler(handleSiteMenuClick);

filterPresenter.init();
tripPresenter.init();
