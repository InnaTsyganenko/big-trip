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
const siteTripElement = siteMainElement.querySelector('.trip-events');

render(siteTripInfoElement, routeInfoComponent.element, RenderPosition.AFTERBEGIN);
render(siteNavigationElement, siteMenuComponent.element, RenderPosition.AFTERBEGIN);

const tripPresenter = new TripPresenter(siteTripElement, pointsModel, filterModel);
const filterPresenter = new FilterPresenter(siteFiltersElement, filterModel, pointsModel);

let statsComponent = null;

const handleSiteMenuClick = (menuItem) => {
  switch (menuItem) {
    case MenuItem.TABLE:
      siteTripElement.classList.remove('trip-events--hidden');
      statsComponent.element.remove();
      tripPresenter.init();
      break;
    case MenuItem.STATS:
      tripPresenter.destroy();
      siteTripElement.classList.add('trip-events--hidden');
      siteMainElement.querySelector('.page-body__container').classList.add('none');
      statsComponent = new StatsView(pointsModel.points);
      render(siteTripElement, statsComponent, RenderPosition.AFTEREND);
      break;
  }
};

siteMenuComponent.setMenuClickHandler(handleSiteMenuClick);

filterPresenter.init();
tripPresenter.init();
