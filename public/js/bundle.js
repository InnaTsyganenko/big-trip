/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/const.js":
/*!**********************!*\
  !*** ./src/const.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "POINT_COUNT": () => (/* binding */ POINT_COUNT),
/* harmony export */   "TYPES": () => (/* binding */ TYPES),
/* harmony export */   "DESTINATION": () => (/* binding */ DESTINATION),
/* harmony export */   "DESCRIPTION": () => (/* binding */ DESCRIPTION)
/* harmony export */ });
const POINT_COUNT = 5;
const TYPES = ['Taxi', 'Bus', 'Train', 'Ship', 'Transport', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant'];
const DESTINATION = ['Amsterdam', 'Geneva', 'Chamonix'];
const DESCRIPTION = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Cras aliquet varius magna, non porta ligula feugiat eget.', 'Fusce tristique felis at fermentum pharetra.', 'Aliquam id orci ut lectus varius viverra.', 'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.', 'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.', 'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.', 'Sed sed nisi sed augue convallis suscipit in sed felis.', 'Aliquam erat volutpat.', 'Nunc fermentum tortor ac porta dapibus.', 'In rutrum ac purus sit amet tempus.'];

/***/ }),

/***/ "./src/mock/point.js":
/*!***************************!*\
  !*** ./src/mock/point.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "options": () => (/* binding */ options),
/* harmony export */   "generatePoint": () => (/* binding */ generatePoint),
/* harmony export */   "points": () => (/* binding */ points),
/* harmony export */   "addPointData": () => (/* binding */ addPointData)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.dev.js");
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/common.js */ "./src/utils/common.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../const.js */ "./src/const.js");




const options = [{
  id: 1,
  value: 'luggage',
  title: 'Add luggage',
  price: 30,
  isChecked: Boolean((0,_utils_common_js__WEBPACK_IMPORTED_MODULE_1__.getRandomInteger)(0, 1))
}, {
  id: 2,
  value: 'comfort',
  title: 'Switch to comfort class',
  price: 100,
  isChecked: Boolean((0,_utils_common_js__WEBPACK_IMPORTED_MODULE_1__.getRandomInteger)(0, 1))
}, {
  id: 3,
  value: 'meal',
  title: 'Add meal',
  price: 15,
  isChecked: Boolean((0,_utils_common_js__WEBPACK_IMPORTED_MODULE_1__.getRandomInteger)(0, 1))
}, {
  id: 4,
  value: 'seats',
  title: 'Choose seats',
  price: 5,
  isChecked: Boolean((0,_utils_common_js__WEBPACK_IMPORTED_MODULE_1__.getRandomInteger)(0, 1))
}, {
  id: 5,
  value: 'train',
  title: 'Travel by train',
  price: 40,
  isChecked: Boolean((0,_utils_common_js__WEBPACK_IMPORTED_MODULE_1__.getRandomInteger)(0, 1))
}];
const generatePoint = () => {
  const datetimeStart = dayjs__WEBPACK_IMPORTED_MODULE_0___default()().add((0,_utils_common_js__WEBPACK_IMPORTED_MODULE_1__.getRandomInteger)(-3000, 3000), 'm');
  const datetimeEnd = datetimeStart.add((0,_utils_common_js__WEBPACK_IMPORTED_MODULE_1__.getRandomInteger)(100, 3000), 'm');
  const duration = datetimeEnd.diff(datetimeStart, 'm');
  return {
    id: (0,nanoid__WEBPACK_IMPORTED_MODULE_3__.nanoid)(),
    type: _const_js__WEBPACK_IMPORTED_MODULE_2__.TYPES[(0,_utils_common_js__WEBPACK_IMPORTED_MODULE_1__.getRandomInteger)(0, _const_js__WEBPACK_IMPORTED_MODULE_2__.TYPES.length - 1)],
    destination: _const_js__WEBPACK_IMPORTED_MODULE_2__.DESTINATION[(0,_utils_common_js__WEBPACK_IMPORTED_MODULE_1__.getRandomInteger)(0, _const_js__WEBPACK_IMPORTED_MODULE_2__.DESTINATION.length - 1)],
    datetimeStart,
    datetimeEnd,
    duration,
    price: (0,_utils_common_js__WEBPACK_IMPORTED_MODULE_1__.getRandomInteger)(20, 200),
    description: (0,_utils_common_js__WEBPACK_IMPORTED_MODULE_1__.getRandomArrayElements)(_const_js__WEBPACK_IMPORTED_MODULE_2__.DESCRIPTION, 1),
    photos: 'http://picsum.photos/248/152?r=',
    offers: [1, 2, 3],
    isFavorite: Boolean((0,_utils_common_js__WEBPACK_IMPORTED_MODULE_1__.getRandomInteger)(0, 1))
  };
};
const points = new Array(_const_js__WEBPACK_IMPORTED_MODULE_2__.POINT_COUNT).fill().map(generatePoint).sort((a, b) => a.datetimeStart - b.datetimeStart).slice(1);
const addPointData = new Array(1).fill().map(generatePoint);

/***/ }),

/***/ "./src/presenter/add-point.js":
/*!************************************!*\
  !*** ./src/presenter/add-point.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddPointPresenter)
/* harmony export */ });
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common.js */ "./src/utils/common.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");
/* harmony import */ var _mock_point_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mock/point.js */ "./src/mock/point.js");
/* harmony import */ var _view_no_point_list_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/no-point-list.js */ "./src/view/no-point-list.js");
/* harmony import */ var _view_add_point_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view/add-point.js */ "./src/view/add-point.js");





const ModeAddPoint = {
  DEFAULT: 'DEFAULT',
  SHOW: 'SHOW'
};
class AddPointPresenter {
  constructor(pointListContainer) {
    this._pointListContainer = pointListContainer;
    this._addPointComponent = null;
    this._mode = ModeAddPoint.DEFAULT;
    this._body = document.querySelector('.page-body');
    this._siteMainElement = document.querySelector('.page-main');
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
    this._handleCancelPointClick = this._handleCancelPointClick.bind(this);
    this._escKeyDownHandler = this._escKeyDownHandler.bind(this);
  }

  init(point) {
    this._point = point;
    this._siteHeaderContainerElement = document.querySelector('.page-header__container');
    this._addPointButton = this._siteHeaderContainerElement.querySelector('.trip-main__event-add-btn');
    this._addPointComponent = new _view_add_point_js__WEBPACK_IMPORTED_MODULE_4__["default"](point);

    this._addPointButton.addEventListener('click', () => {
      this._mode = ModeAddPoint.SHOW;
      this._pointListContainer.getElement().querySelector('.event--edit') ? this._pointListContainer.getElement().querySelector('.event--edit').querySelector('.event__rollup-btn').click() : false;
      this._body.querySelector('.trip-events__msg') ? this._body.querySelector('.trip-events__msg').style = 'display: none;' : false;
      this._sortDayInput.checked = true;
      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.render)(this._pointListContainer, this._addPointComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_1__.RenderPosition.AFTERBEGIN);
      this._addPointButton.disabled = true;

      this._body.addEventListener('keydown', this._escKeyDownHandler);
    });

    this._siteTripEventsElement = this._siteMainElement.querySelector('.trip-events');
    this._sortDayInput = this._siteTripEventsElement.querySelector('#sort-day');

    this._addPointComponent.setFormSubmitHandler(this._handleFormSubmit);

    this._addPointComponent.setFormCancelHandler(this._handleCancelPointClick);
  }

  _handleFormSubmit() {
    this._closeAddForm();
  }

  _handleHideEditClick() {
    this._closeAddForm();
  }

  _handleCancelPointClick() {
    this._closeAddForm();

    if (this._pointListContainer.getElement().querySelector('.trip-events__item') === null) {
      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.render)(this._siteTripEventsElement, new _view_no_point_list_js__WEBPACK_IMPORTED_MODULE_3__["default"]().getElement(), _utils_render_js__WEBPACK_IMPORTED_MODULE_1__.RenderPosition.BEFOREEND);
    }

    this._body.removeEventListener('keydown', this._escKeyDownHandler);
  }

  _closeAddForm() {
    if (this._mode == ModeAddPoint.SHOW) {
      this._mode = ModeAddPoint.DEFAULT;

      this._pointListContainer.getElement().querySelector('.trip-events__item').remove();

      this._addPointButton.disabled = false;
      _mock_point_js__WEBPACK_IMPORTED_MODULE_2__.points.length === 0 ? this._siteMainElement.querySelector('.trip-events__msg').style = 'display: block;' : false;
    }
  }

  _escKeyDownHandler(evt) {
    if ((0,_utils_common_js__WEBPACK_IMPORTED_MODULE_0__.isEscEvent)(evt)) {
      evt.preventDefault();

      this._closeAddForm();

      this._body.removeEventListener('keydown', this._escKeyDownHandler);
    }
  }

}

/***/ }),

/***/ "./src/presenter/point.js":
/*!********************************!*\
  !*** ./src/presenter/point.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Point)
/* harmony export */ });
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common.js */ "./src/utils/common.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");
/* harmony import */ var _view_no_point_list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/no-point-list.js */ "./src/view/no-point-list.js");
/* harmony import */ var _view_point_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/point.js */ "./src/view/point.js");
/* harmony import */ var _view_edit_point_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view/edit-point.js */ "./src/view/edit-point.js");





const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING'
};
class Point {
  constructor(pointListContainer, changeData, changeMode) {
    this._pointListContainer = pointListContainer;
    this._changeData = changeData;
    this._changeMode = changeMode;
    this._body = document.querySelector('.page-body');
    this._siteTripEventsElement = this._body.querySelector('.trip-events');
    this._siteHeaderContainerElement = document.querySelector('.page-header__container');
    this._pointComponent = null;
    this._pointEditComponent = null;
    this._mode = Mode.DEFAULT;
    this._handleEditClick = this._handleEditClick.bind(this);
    this._handleFavoriteClick = this._handleFavoriteClick.bind(this);
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
    this._handleHideEditClick = this._handleHideEditClick.bind(this);
    this._handleDeletePointClick = this._handleDeletePointClick.bind(this);
    this._escKeyDownHandler = this._escKeyDownHandler.bind(this);
  }

  init(point) {
    this._point = point;
    const prevPointComponent = this._pointComponent;
    const prevPointEditComponent = this._pointEditComponent;
    this._pointComponent = new _view_point_js__WEBPACK_IMPORTED_MODULE_3__["default"](point);
    this._pointEditComponent = new _view_edit_point_js__WEBPACK_IMPORTED_MODULE_4__["default"](point);

    this._pointComponent.setEditClickHandler(this._handleEditClick);

    this._pointComponent.setFavoriteClickHandler(this._handleFavoriteClick);

    this._pointEditComponent.setFormSubmitHandler(this._handleFormSubmit);

    this._pointEditComponent.setDeletePointHandler(this._handleDeletePointClick);

    this._pointEditComponent.setFormHideEditHandler(this._handleHideEditClick);

    if (prevPointComponent === null || prevPointEditComponent === null) {
      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.render)(this._pointListContainer, this._pointComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_1__.RenderPosition.BEFOREEND);
      return;
    }

    if (this._mode === Mode.DEFAULT) {
      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.replace)(this._pointComponent, prevPointComponent);
    }

    if (this._mode === Mode.EDITING) {
      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.replace)(this._pointEditComponent, prevPointEditComponent);
    }

    (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.remove)(prevPointComponent);
    (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.remove)(prevPointEditComponent);
  }

  resetView() {
    if (this._mode !== Mode.DEFAULT) {
      this._replaceFormToCard();
    }
  }

  destroy() {
    (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.remove)(this._pointComponent);
    (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.remove)(this._pointEditComponent);
  }

  _replaceCardToForm() {
    (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.replace)(this._pointEditComponent, this._pointComponent);

    this._changeMode();

    this._mode = Mode.EDITING;

    this._body.addEventListener('keydown', this._escKeyDownHandler);
  }

  _replaceFormToCard() {
    (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.replace)(this._pointComponent, this._pointEditComponent);
    this._mode = Mode.DEFAULT;

    this._body.removeEventListener('keydown', this._escKeyDownHandler);
  }

  _escKeyDownHandler(evt) {
    if ((0,_utils_common_js__WEBPACK_IMPORTED_MODULE_0__.isEscEvent)(evt)) {
      evt.preventDefault();

      this._pointEditComponent.reset(this._point);

      this._replaceFormToCard();

      this._body.removeEventListener('keydown', this._escKeyDownHandler);
    }
  }

  _handleEditClick() {
    this._replaceCardToForm();
  }

  _handleFavoriteClick() {
    this._changeData(Object.assign({}, this._point, {
      isFavorite: !this._point.isFavorite
    }));
  }

  _handleFormSubmit(point) {
    this._changeData(point);

    this._replaceFormToCard();

    this._body.removeEventListener('keydown', this._escKeyDownHandler);
  }

  _handleHideEditClick() {
    this._replaceFormToCard();

    this._body.removeEventListener('keydown', this._escKeyDownHandler);
  }

  _handleDeletePointClick() {
    (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.remove)(this._pointEditComponent);

    if (this._pointListContainer.getElement().querySelector('.trip-events__item') === null) {
      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.render)(this._siteTripEventsElement, new _view_no_point_list_js__WEBPACK_IMPORTED_MODULE_2__["default"]().getElement(), _utils_render_js__WEBPACK_IMPORTED_MODULE_1__.RenderPosition.BEFOREEND);
    }

    this._body.removeEventListener('keydown', this._escKeyDownHandler);
  }

}

/***/ }),

/***/ "./src/presenter/trip.js":
/*!*******************************!*\
  !*** ./src/presenter/trip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TripEvents)
/* harmony export */ });
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common.js */ "./src/utils/common.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");
/* harmony import */ var _mock_point_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mock/point.js */ "./src/mock/point.js");
/* harmony import */ var _view_sorting_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/sorting.js */ "./src/view/sorting.js");
/* harmony import */ var _view_no_point_list_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view/no-point-list.js */ "./src/view/no-point-list.js");
/* harmony import */ var _view_point_list_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../view/point-list.js */ "./src/view/point-list.js");
/* harmony import */ var _point_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./point.js */ "./src/presenter/point.js");
/* harmony import */ var _add_point_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-point.js */ "./src/presenter/add-point.js");








class TripEvents {
  constructor(tripContainer) {
    this._tripContainer = tripContainer;
    this._pointPresenter = {};
    this._addPointComponent = null;
    this._currentSortType = 'sort-everything';
    this._body = document.querySelector('.page-body');
    this._siteHeaderContainerElement = document.querySelector('.page-header__container');
    this._siteMainElement = document.querySelector('.page-main');
    this._siteTripEventsElement = this._siteMainElement.querySelector('.trip-events');
    this._sortingComponent = new _view_sorting_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this._noPointListComponent = new _view_no_point_list_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
    this._pointListComponent = new _view_point_list_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
    this._handlePointChange = this._handlePointChange.bind(this);
    this._handleModeChange = this._handleModeChange.bind(this);
    this._handleSortTypeChange = this._handleSortTypeChange.bind(this);
  }

  init(tripEvents) {
    this._tripEvents = tripEvents.slice();
    this._sourcedTripEvents = tripEvents.slice();
    (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.render)(this._siteTripEventsElement, this._pointListComponent.getElement(), _utils_render_js__WEBPACK_IMPORTED_MODULE_1__.RenderPosition.BEFOREEND);

    this._renderTripEvents();
  }

  _handlePointChange(updatedPoint) {
    this._tripEvents = (0,_utils_common_js__WEBPACK_IMPORTED_MODULE_0__.updateItem)(this._tripEvents, updatedPoint);
    this._sourcedTripEvents = (0,_utils_common_js__WEBPACK_IMPORTED_MODULE_0__.updateItem)(this._tripEvents, updatedPoint);

    this._pointPresenter[updatedPoint.id].init(updatedPoint);
  }

  _handleModeChange() {
    Object.values(this._pointPresenter).forEach(presenter => presenter.resetView());

    this._addPointComponent._closeAddForm();
  }

  _sortPoints(sortType) {
    switch (sortType) {
      case 'sort-time':
        this._tripEvents.sort((a, b) => b.duration - a.duration);

        break;

      case 'sort-price':
        this._tripEvents.sort((a, b) => b.price - a.price);

        break;

      default:
        this._tripEvents = this._sourcedTripEvents;
    }

    this._currentSortType = sortType;
  }

  _handleSortTypeChange(sortType) {
    if (this._currentSortType === sortType) {
      return;
    }

    this._sortPoints(sortType);

    this._clearPointList();

    this._renderTripEvents();
  }

  _renderSorting() {
    (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.render)(this._siteTripEventsElement, this._sortingComponent.getElement(), _utils_render_js__WEBPACK_IMPORTED_MODULE_1__.RenderPosition.AFTERBEGIN);

    this._sortingComponent.setSortTypeChangeHandler(this._handleSortTypeChange);
  }

  _renderNoPointsList() {
    (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.render)(this._siteTripEventsElement, this._noPointListComponent.getElement(), _utils_render_js__WEBPACK_IMPORTED_MODULE_1__.RenderPosition.BEFOREEND);
  }

  _renderPoint(point) {
    const pointPresenter = new _point_js__WEBPACK_IMPORTED_MODULE_6__["default"](this._pointListComponent, this._handlePointChange, this._handleModeChange);
    pointPresenter.init(point);
    this._pointPresenter[point.id] = pointPresenter;
  }

  _renderAddPoint(point) {
    const addPointPresenter = new _add_point_js__WEBPACK_IMPORTED_MODULE_7__["default"](this._pointListComponent);
    addPointPresenter.init(point);
    this._addPointComponent = addPointPresenter;
  }

  _renderPoints() {
    this._tripEvents.forEach(tripEvent => this._renderPoint(tripEvent));
  }

  _renderTripEvents() {
    this._renderSorting();

    _mock_point_js__WEBPACK_IMPORTED_MODULE_2__.points.length === 0 ? this._renderNoPointsList() : this._renderPoints();

    this._renderAddPoint(_mock_point_js__WEBPACK_IMPORTED_MODULE_2__.addPointData[0]);
  }

  _clearPointList() {
    Object.values(this._pointPresenter).forEach(presenter => presenter.destroy());
    this._pointPresenter = {};
  }

}

/***/ }),

/***/ "./src/utils/common.js":
/*!*****************************!*\
  !*** ./src/utils/common.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRandomInteger": () => (/* binding */ getRandomInteger),
/* harmony export */   "getRandomArrayElements": () => (/* binding */ getRandomArrayElements),
/* harmony export */   "isEscEvent": () => (/* binding */ isEscEvent),
/* harmony export */   "isInPage": () => (/* binding */ isInPage),
/* harmony export */   "updateItem": () => (/* binding */ updateItem)
/* harmony export */ });
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

  return shuffledArr.slice(min);
};
const isEscEvent = evt => {
  return evt.key === ('Escape' || 0);
};
const isInPage = node => {
  return node === document.body ? false : document.body.contains(node);
};
const updateItem = (items, update) => {
  const index = items.findIndex(item => item.id === update.id);

  if (index === -1) {
    return items;
  }

  return [...items.slice(0, index), update, ...items.slice(index + 1)];
};

/***/ }),

/***/ "./src/utils/point.js":
/*!****************************!*\
  !*** ./src/utils/point.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "headerDate": () => (/* binding */ headerDate),
/* harmony export */   "newPointDate": () => (/* binding */ newPointDate)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);

const headerDate = date => {
  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).format('DD MMM');
};
const newPointDate = date => {
  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).format('DD/MM/YY HH:mm');
};

/***/ }),

/***/ "./src/utils/render.js":
/*!*****************************!*\
  !*** ./src/utils/render.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenderPosition": () => (/* binding */ RenderPosition),
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "makeElement": () => (/* binding */ makeElement),
/* harmony export */   "replace": () => (/* binding */ replace),
/* harmony export */   "remove": () => (/* binding */ remove)
/* harmony export */ });
/* harmony import */ var _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/abstract.js */ "./src/view/abstract.js");

const RenderPosition = {
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend'
};
const render = (container, child, place) => {
  if (container instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    container = container.getElement();
  }

  if (child instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    child = child.getElement();
  }

  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(child);
      break;

    case RenderPosition.BEFOREEND:
      container.append(child);
      break;

    default:
      container.append(child).BEFOREEND;
  }
};
const makeElement = template => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;
  return newElement.firstChild;
};
const replace = (newChild, oldChild) => {
  if (oldChild instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    oldChild = oldChild.getElement();
  }

  if (newChild instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    newChild = newChild.getElement();
  }

  const parent = oldChild.parentElement;

  if (parent === null || oldChild === null || newChild === null) {
    throw new Error('Can\'t replace unexisting elements');
  }

  parent.replaceChild(newChild, oldChild);
};
const remove = component => {
  if (!(component instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"])) {
    throw new Error('Can remove only components');
  }

  component.getElement().remove();
  component.removeElement();
};

/***/ }),

/***/ "./src/view/abstract.js":
/*!******************************!*\
  !*** ./src/view/abstract.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AbstractView)
/* harmony export */ });
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");

class AbstractView {
  constructor() {
    if (new.target === AbstractView) {
      throw new Error('Can\'t instantiate Abstract, only concrete one.');
    }

    this._callback = {};
    this._element = null;
  }

  getTemplate() {
    throw new Error('Abstract method not implemented: getTemplate');
  }

  getElement() {
    if (!this._element) {
      this._element = (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }

}

/***/ }),

/***/ "./src/view/add-point.js":
/*!*******************************!*\
  !*** ./src/view/add-point.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddPointView)
/* harmony export */ });
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common.js */ "./src/utils/common.js");
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");
/* harmony import */ var _utils_point_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/point.js */ "./src/utils/point.js");
/* harmony import */ var _point_types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./point-types.js */ "./src/view/point-types.js");
/* harmony import */ var _point_options_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./point-options.js */ "./src/view/point-options.js");





const BLANK_POINT = {
  type: '',
  destination: '',
  datetimeStart: '',
  datetimeEnd: '',
  price: '',
  description: '',
  photos: '',
  offers: '',
  isFavorite: ''
};

const createAddPointTemplate = (point = {}) => {
  const {
    type,
    destination,
    datetimeStart,
    datetimeEnd,
    price,
    description,
    photos,
    offers
  } = point;
  const typesTemplate = (0,_point_types_js__WEBPACK_IMPORTED_MODULE_3__.createPointTypesTemplate)(type);
  const offersTemplate = (0,_point_options_js__WEBPACK_IMPORTED_MODULE_4__.createPointAvailableOptionsTemplate)(offers);
  return `<li class="trip-events__item">
  <form class="event event--edit" action="#" method="post">
  <header class="event__header">
    <div class="event__type-wrapper">
      <label class="event__type  event__type-btn" for="event-type-toggle-1">
        <span class="visually-hidden">Choose event type</span>
        <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
      </label>
      <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

      <div class="event__type-list">
        <fieldset class="event__type-group">
          <legend class="visually-hidden">Event type</legend>
          ${typesTemplate}
        </fieldset>
      </div>
    </div>

    <div class="event__field-group  event__field-group--destination">
      <label class="event__label  event__type-output" for="event-destination-1">
        ${type}
      </label>
      <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destination}" list="destination-list-1">
      <datalist id="destination-list-1">
        <option value="Amsterdam"></option>
        <option value="Geneva"></option>
        <option value="Chamonix"></option>
      </datalist>
    </div>

    <div class="event__field-group  event__field-group--time">
      <label class="visually-hidden" for="event-start-time-1">From</label>
      <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${(0,_utils_point_js__WEBPACK_IMPORTED_MODULE_2__.newPointDate)(datetimeStart)}">
      &mdash;
      <label class="visually-hidden" for="event-end-time-1">To</label>
      <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${(0,_utils_point_js__WEBPACK_IMPORTED_MODULE_2__.newPointDate)(datetimeEnd)}">
    </div>

    <div class="event__field-group  event__field-group--price">
      <label class="event__label" for="event-price-1">
        <span class="visually-hidden">Price</span>
        &euro;
      </label>
      <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${price}">
    </div>

    <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
    <button class="event__reset-btn" type="reset">Cancel</button>
  </header>
  <section class="event__details">
  ${_point_options_js__WEBPACK_IMPORTED_MODULE_4__.randomAvailableOptions.length !== 0 ? `<section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>
      <div class="event__available-offers">
        ${offersTemplate}
      </div>
    </section>` : ''}
    ${description.length !== 0 ? `<section class="event__section  event__section--destination">
      <h3 class="event__section-title  event__section-title--destination">Destination</h3>
      <p class="event__destination-description">${description.join(' ')}</p>

      <div class="event__photos-container">
        <div class="event__photos-tape">
          <img class="event__photo" src="${photos + (0,_utils_common_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInteger)(1, 15)}" alt="Event photo">
          <img class="event__photo" src="${photos + (0,_utils_common_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInteger)(1, 15)}" alt="Event photo">
          <img class="event__photo" src="${photos + (0,_utils_common_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInteger)(1, 15)}" alt="Event photo">
          <img class="event__photo" src="${photos + (0,_utils_common_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInteger)(1, 15)}" alt="Event photo">
          <img class="event__photo" src="${photos + (0,_utils_common_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInteger)(1, 15)}" alt="Event photo">
        </div>
      </div>
    </section>` : ''}
  </section>
</form>
</li>`;
};

class AddPointView extends _abstract_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(point = BLANK_POINT) {
    super();
    this._point = point;
    this._formSubmitHandler = this._formSubmitHandler.bind(this);
    this._formCancelHandler = this._formCancelHandler.bind(this);
  }

  getTemplate() {
    return createAddPointTemplate(this._point);
  }

  _formSubmitHandler(evt) {
    evt.preventDefault();

    this._callback.formSubmit();
  }

  _formCancelHandler(evt) {
    evt.preventDefault();

    this._callback.formCancel();
  }

  setFormSubmitHandler(callback) {
    this._callback.formSubmit = callback;
    this.getElement().querySelector('form').addEventListener('submit', this._formSubmitHandler);
  }

  setFormCancelHandler(callback) {
    this._callback.formCancel = callback;
    this.getElement().querySelector('.event__reset-btn').addEventListener('click', this._formCancelHandler);
  }

}

/***/ }),

/***/ "./src/view/edit-point.js":
/*!********************************!*\
  !*** ./src/view/edit-point.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditPointView)
/* harmony export */ });
/* harmony import */ var _point_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point-types.js */ "./src/view/point-types.js");
/* harmony import */ var _point_options_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./point-options.js */ "./src/view/point-options.js");
/* harmony import */ var _utils_point_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/point.js */ "./src/utils/point.js");
/* harmony import */ var _smart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./smart.js */ "./src/view/smart.js");





const createEditPointTemplate = data => {
  const {
    type,
    destination,
    datetimeStart,
    datetimeEnd,
    price,
    description,
    offers
  } = data;
  const typePointsTemplate = (0,_point_types_js__WEBPACK_IMPORTED_MODULE_0__.createPointTypesTemplate)(type);
  return `<li class="trip-events__item">
  <form class="event event--edit" action="#" method="post">
  <header class="event__header">
    <div class="event__type-wrapper">
      <label class="event__type  event__type-btn" for="event-type-toggle-1">
        <span class="visually-hidden">Choose event type</span>
        <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
      </label>
      <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

      <div class="event__type-list">
        <fieldset class="event__type-group">
          <legend class="visually-hidden">Event type</legend>
          ${typePointsTemplate}
        </fieldset>
      </div>
    </div>

    <div class="event__field-group  event__field-group--destination">
      <label class="event__label  event__type-output" for="event-destination-1">
        ${type}
      </label>
      <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destination}" list="destination-list-1">
      <datalist id="destination-list-1">
        <option value="Amsterdam"></option>
        <option value="Geneva"></option>
        <option value="Chamonix"></option>
      </datalist>
    </div>

    <div class="event__field-group  event__field-group--time">
      <label class="visually-hidden" for="event-start-time-1">From</label>
      <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${(0,_utils_point_js__WEBPACK_IMPORTED_MODULE_2__.newPointDate)(datetimeStart)}">
      &mdash;
      <label class="visually-hidden" for="event-end-time-1">To</label>
      <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${(0,_utils_point_js__WEBPACK_IMPORTED_MODULE_2__.newPointDate)(datetimeEnd)}">
    </div>

    <div class="event__field-group  event__field-group--price">
      <label class="event__label" for="event-price-1">
        <span class="visually-hidden">Price</span>
        &euro;
      </label>
      <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${price}">
    </div>

    <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
    <button class="event__reset-btn" type="reset">Delete</button>
    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  </header>
  <section class="event__details">
    ${_point_options_js__WEBPACK_IMPORTED_MODULE_1__.randomAvailableOptions.length !== 0 ? `<section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>
        <div class="event__available-offers">
          ${(0,_point_options_js__WEBPACK_IMPORTED_MODULE_1__.createPointAvailableOptionsTemplate)(offers)}
        </div>
      </section>` : ''}
      ${description.length !== 0 ? `<section class="event__section  event__section--destination">
        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
        <p class="event__destination-description">${description.join(' ')}</p>
    </section>` : ''}
  </section>
</form>
</li>`;
};

class EditPointView extends _smart_js__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor(point) {
    super();
    this._data = EditPointView.parsePointToData(point);
    this._formSubmitHandler = this._formSubmitHandler.bind(this);
    this._formHideEditHandler = this._formHideEditHandler.bind(this);
    this._formDeletePointHandler = this._formDeletePointHandler.bind(this);
    this._typePointToggleHandler = this._typePointToggleHandler.bind(this);

    this._setInnerHandlers();
  }

  reset(point) {
    this.updateData(EditPointView.parsePointToData(point));
  }

  getTemplate() {
    return createEditPointTemplate(this._data);
  }

  updateData(update) {
    if (!update) {
      return;
    }

    this._data = Object.assign({}, this._data, update);
    this.updateElement();
  }

  updateElement() {
    const prevElement = this.getElement();
    const parent = prevElement.parentElement;
    this.removeElement();
    const newElement = this.getElement();
    parent.replaceChild(newElement, prevElement);
    this.restoreHandlers();
  }

  restoreHandlers() {
    this._setInnerHandlers();

    this.setFormSubmitHandler(this._callback.formSubmit);
    this.setFormHideEditHandler(this._callback.formHideEdit);
  }

  _setInnerHandlers() {
    this.getElement().querySelector('.event__type-group').addEventListener('change', this._typePointToggleHandler);
  }

  _typePointToggleHandler(evt) {
    evt.preventDefault();
    this.updateData({
      type: evt.target.value
    });
  }

  _formSubmitHandler(evt) {
    evt.preventDefault();

    this._callback.formSubmit(EditPointView.parseDataToPoint(this._data));
  }

  _formHideEditHandler(evt) {
    evt.preventDefault();

    this._callback.formHideEdit();
  }

  _formDeletePointHandler(evt) {
    evt.preventDefault();

    this._callback.formDeletePoint();
  }

  setFormSubmitHandler(callback) {
    this._callback.formSubmit = callback;
    this.getElement().querySelector('form').addEventListener('submit', this._formSubmitHandler);
  }

  setFormHideEditHandler(callback) {
    this._callback.formHideEdit = callback;
    this.getElement().querySelector('.event__rollup-btn').addEventListener('click', this._formHideEditHandler);
  }

  setDeletePointHandler(callback) {
    this._callback.formDeletePoint = callback;
    this.getElement().querySelector('.event__reset-btn').addEventListener('click', this._formDeletePointHandler);
  }

  static parsePointToData(point) {
    return Object.assign({}, point, {});
  }

  static parseDataToPoint(data) {
    data = Object.assign({}, data);
    return data;
  }

}

/***/ }),

/***/ "./src/view/filters.js":
/*!*****************************!*\
  !*** ./src/view/filters.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FiltersView)
/* harmony export */ });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createFiltersTemplate = () => {
  return `<div class="trip-controls__filters">
  <h2 class="visually-hidden">Filter events</h2>
  <form class="trip-filters" action="#" method="get">
    <div class="trip-filters__filter">
      <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>
      <label class="trip-filters__filter-label" for="filter-everything">Everything</label>
    </div>

    <div class="trip-filters__filter">
      <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">
      <label class="trip-filters__filter-label" for="filter-future">Future</label>
    </div>

    <div class="trip-filters__filter">
      <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">
      <label class="trip-filters__filter-label" for="filter-past">Past</label>
    </div>

    <button class="visually-hidden" type="submit">Accept filter</button>
  </form>
</div>`;
};

class FiltersView extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createFiltersTemplate();
  }

}

/***/ }),

/***/ "./src/view/no-point-list.js":
/*!***********************************!*\
  !*** ./src/view/no-point-list.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NoPointListView)
/* harmony export */ });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createNoPointListTemplate = () => {
  return '<p class="trip-events__msg">Click New Event to create your first point</p>';
};

class NoPointListView extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createNoPointListTemplate();
  }

}

/***/ }),

/***/ "./src/view/point-list.js":
/*!********************************!*\
  !*** ./src/view/point-list.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PointListView)
/* harmony export */ });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createPointListTemplate = () => {
  return '<ul class="trip-events__list"></ul>';
};

class PointListView extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createPointListTemplate();
  }

}

/***/ }),

/***/ "./src/view/point-options.js":
/*!***********************************!*\
  !*** ./src/view/point-options.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "randomAvailableOptions": () => (/* binding */ randomAvailableOptions),
/* harmony export */   "createPointAvailableOptionsTemplate": () => (/* binding */ createPointAvailableOptionsTemplate)
/* harmony export */ });
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common.js */ "./src/utils/common.js");
/* harmony import */ var _mock_point_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mock/point.js */ "./src/mock/point.js");


const randomAvailableOptions = (0,_utils_common_js__WEBPACK_IMPORTED_MODULE_0__.getRandomArrayElements)(_mock_point_js__WEBPACK_IMPORTED_MODULE_1__.options, 0);
const createPointAvailableOptionsTemplate = () => {
  return randomAvailableOptions.map(option => `<div class="event__offer-selector">
  <input class="event__offer-checkbox  visually-hidden" id="event-offer-${option.value}-1" type="checkbox" name="event-offer-${option.value}" ${option.isChecked ? 'checked' : ''}>
  <label class="event__offer-label" for="event-offer-${option.value}-1">
    <span class="event__offer-title">${option.title}</span>
    &plus;&euro;&nbsp;
    <span class="event__offer-price">${option.price}</span>
  </label>
</div>`).join('\n');
};

/***/ }),

/***/ "./src/view/point-types.js":
/*!*********************************!*\
  !*** ./src/view/point-types.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPointTypesTemplate": () => (/* binding */ createPointTypesTemplate)
/* harmony export */ });
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const.js */ "./src/const.js");

const createPointTypesTemplate = currentType => {
  return _const_js__WEBPACK_IMPORTED_MODULE_0__.TYPES.map(type => `<div class="event__type-item">
  <input
  id="event-type-${type}-1"
  class="event__type-input  visually-hidden"
  type="radio" name="event-type"
  value="${type}"
  ${currentType === type ? 'checked' : ''}
  >
  <label
  class="event__type-label  event__type-label--${type}"
  for="event-type-${type}-1">${type}</label>
</div>`).join('\n');
};

/***/ }),

/***/ "./src/view/point.js":
/*!***************************!*\
  !*** ./src/view/point.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PointView)
/* harmony export */ });
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common.js */ "./src/utils/common.js");
/* harmony import */ var _mock_point_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mock/point.js */ "./src/mock/point.js");
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");




const createPointOptionsTemplate = () => {
  const randomOffers = (0,_utils_common_js__WEBPACK_IMPORTED_MODULE_0__.getRandomArrayElements)(_mock_point_js__WEBPACK_IMPORTED_MODULE_1__.options, 0);
  return randomOffers.map(option => `<li class="event__offer">
  <span class="event__offer-title"style="white-space: pre;">${option.title}</span>&plus;&euro;&nbsp;
  <span class="event__offer-price">${option.price}</span>
  </li>`).join('\n');
};

const createPointTemplate = point => {
  const {
    type,
    destination,
    datetimeStart,
    datetimeEnd,
    duration,
    price,
    isFavorite
  } = point;

  const calcDuration = () => {
    let result = duration + 'M';

    if (duration >= 60 & duration < 1440) {
      const hours = Math.floor(duration / 60).toString();
      const minutes = (duration % 60).toString();
      result = (hours.length === 1 ? '0' : '') + hours + 'H ' + (minutes.length === 1 ? '0' : '') + minutes + 'M';
    } else if (duration > 1440) {
      const days = Math.floor(duration / 1440).toString();
      const hours = Math.floor(duration % 1440 / 60).toString();
      const minutes = (duration % 1440 % 60).toString();
      result = (days.length === 1 ? '0' : '') + days + 'D ' + (hours.length === 1 ? '0' : '') + hours + 'H ' + (minutes.length === 1 ? '0' : '') + minutes + 'M';
    }

    return result;
  };

  const favoriteClassName = isFavorite ? 'event__favorite-btn event__favorite-btn--active' : 'event__favorite-btn';
  return `<li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime="2019-03-18">MAR 18</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${type} ${destination}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${datetimeStart.format('YYYY-MM-DDTHH:mm:s.Z')}">${datetimeStart.format('DD / HH:mm')}</time>
          &mdash;
          <time class="event__end-time" datetime="${datetimeEnd.format('YYYY-MM-DDTHH:mm:s.Z')}">${datetimeEnd.format('DD / HH:mm')}</time>
        </p>
        <p class="event__duration">${calcDuration()}</p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${price}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        ${createPointOptionsTemplate()}
      </ul>
      <button class="event__favorite-btn ${favoriteClassName}" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
        </svg>
      </button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`;
};

class PointView extends _abstract_js__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor(point) {
    super();
    this._point = point;
    this._editClickHandler = this._editClickHandler.bind(this);
    this._favoriteClickHandler = this._favoriteClickHandler.bind(this);
  }

  getTemplate() {
    return createPointTemplate(this._point);
  }

  _editClickHandler(evt) {
    evt.preventDefault();

    this._callback.editClick();
  }

  _favoriteClickHandler(evt) {
    evt.preventDefault();

    this._callback.favoriteClick();
  }

  setEditClickHandler(callback) {
    this._callback.editClick = callback;
    this.getElement().querySelector('.event__rollup-btn').addEventListener('click', this._editClickHandler);
  }

  setFavoriteClickHandler(callback) {
    this._callback.favoriteClick = callback;
    this.getElement().querySelector('.event__favorite-btn').addEventListener('click', this._favoriteClickHandler);
  }

}

/***/ }),

/***/ "./src/view/route-info.js":
/*!********************************!*\
  !*** ./src/view/route-info.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RouteInfoView)
/* harmony export */ });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");
/* harmony import */ var _utils_point_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/point.js */ "./src/utils/point.js");
/* harmony import */ var _mock_point_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mock/point.js */ "./src/mock/point.js");




const displayDestinations = dest => {
  switch (dest.length) {
    case 1:
      dest = dest[0];
      break;

    case 2:
      dest = dest[0] + ' ' + '&mdash;' + ' ' + dest[1];
      break;

    case 3:
      dest = dest[0] + ' ' + '&mdash;' + ' ' + dest[1] + ' ' + '&mdash;' + ' ' + ' ' + dest[2];
      break;

    default:
      dest = dest[0] + ' ' + '&mdash;' + ' ' + '...' + ' ' + '&mdash;' + ' ' + dest[dest.length - 1];
      break;
  }

  return dest;
};

const createRouteInfoTemplate = () => {
  const arrDestinations = [];
  let arrPrices = [];

  for (let i = 0; i < _mock_point_js__WEBPACK_IMPORTED_MODULE_2__.points.length; i++) {
    arrDestinations.push(_mock_point_js__WEBPACK_IMPORTED_MODULE_2__.points[i].destination);
    arrPrices.push(_mock_point_js__WEBPACK_IMPORTED_MODULE_2__.points[i].price);
  }

  arrPrices = arrPrices > '0' ? arrPrices.reduce((total, amount) => total + amount) : '0';
  return `<section class="trip-main__trip-info  trip-info">
  <div class="trip-info__main">
    <h1 class="trip-info__title">${_mock_point_js__WEBPACK_IMPORTED_MODULE_2__.points.length > 1 ? displayDestinations(arrDestinations) : ''}</h1>
    <p class="trip-info__dates">${_mock_point_js__WEBPACK_IMPORTED_MODULE_2__.points.length > 1 ? (0,_utils_point_js__WEBPACK_IMPORTED_MODULE_1__.headerDate)(_mock_point_js__WEBPACK_IMPORTED_MODULE_2__.points[0].datetimeStart) + ' ' + '&mdash;' + ' ' + (0,_utils_point_js__WEBPACK_IMPORTED_MODULE_1__.headerDate)(_mock_point_js__WEBPACK_IMPORTED_MODULE_2__.points[_mock_point_js__WEBPACK_IMPORTED_MODULE_2__.points.length - 1].datetimeEnd) : ''}</p>
  </div>
  <p class="trip-info__cost">
  Total: &euro;&nbsp;<span class="trip-info__cost-value">${arrPrices}</span>
</p>
</section>`;
};

class RouteInfoView extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createRouteInfoTemplate();
  }

}

/***/ }),

/***/ "./src/view/site-menu.js":
/*!*******************************!*\
  !*** ./src/view/site-menu.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SiteMenuView)
/* harmony export */ });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createSiteMenuTemplate = () => {
  return `<div class="trip-controls__navigation">
  <h2 class="visually-hidden">Switch trip view</h2>
  <nav class="trip-controls__trip-tabs  trip-tabs">
    <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
    <a class="trip-tabs__btn" href="#">Stats</a>
  </nav>
</div>`;
};

class SiteMenuView extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createSiteMenuTemplate();
  }

}

/***/ }),

/***/ "./src/view/smart.js":
/*!***************************!*\
  !*** ./src/view/smart.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SmartView)
/* harmony export */ });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");

class SmartView extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
    this._data = {};
  }

  updateData(update, justDataUpdating) {
    if (!update) {
      return;
    }

    this._data = Object.assign({}, this._data, update);

    if (justDataUpdating) {
      return;
    }

    this.updateElement();
  }

  updateElement() {
    const prevElement = this.getElement();
    const parent = prevElement.parentElement;
    this.removeElement();
    const newElement = this.getElement();
    parent.replaceChild(newElement, prevElement);
    this.restoreHandlers();
  }

  restoreHandlers() {
    throw new Error('Abstract method not implemented: resetHandlers');
  }

}

/***/ }),

/***/ "./src/view/sorting.js":
/*!*****************************!*\
  !*** ./src/view/sorting.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SortView)
/* harmony export */ });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createSortingTemplate = () => {
  return `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
  <div class="trip-sort__item  trip-sort__item--day">
    <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked>
    <label class="trip-sort__btn" for="sort-day">Day</label>
  </div>

  <div class="trip-sort__item  trip-sort__item--event">
    <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>
    <label class="trip-sort__btn" for="sort-event">Event</label>
  </div>

  <div class="trip-sort__item  trip-sort__item--time">
    <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">
    <label class="trip-sort__btn" for="sort-time">Time</label>
  </div>

  <div class="trip-sort__item  trip-sort__item--price">
    <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">
    <label class="trip-sort__btn" for="sort-price">Price</label>
  </div>

  <div class="trip-sort__item  trip-sort__item--offer">
    <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>
    <label class="trip-sort__btn" for="sort-offer">Offers</label>
  </div>
</form>`;
};

class SortView extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
    this._sortTypeChangeHandler = this._sortTypeChangeHandler.bind(this);
  }

  getTemplate() {
    return createSortingTemplate();
  }

  _sortTypeChangeHandler(evt) {
    if (evt.target.tagName !== 'INPUT') {
      return;
    }

    evt.preventDefault();

    this._callback.sortTypeChange(evt.target.id);
  }

  setSortTypeChangeHandler(callback) {
    this._callback.sortTypeChange = callback;
    this.getElement().addEventListener('change', this._sortTypeChangeHandler);
  }

}

/***/ }),

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},D="en",v={};v[D]=M;var p=function(t){return t instanceof _},S=function(t,e,n){var r;if(!t)return D;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else{var i=t.name;v[i]=t,r=i}return!n&&r&&(D=r),r||!n&&D},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var D=this.$locale().weekStart||0,v=(y<D?y+7:y)-D;return $(r?m-v:m+(6-v),M);case a:case d:return l(g+"Hours",0);case u:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case i:return l(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),$=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||$;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||l[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,D=O.m(this,M);return D=(l={},l[c]=D/12,l[f]=D,l[h]=D/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?D:O.a(D)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return v[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),b=_.prototype;return w.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=v[D],w.Ls=v,w.p={},w}));

/***/ }),

/***/ "./node_modules/dayjs/plugin/isSameOrAfter.js":
/*!****************************************************!*\
  !*** ./node_modules/dayjs/plugin/isSameOrAfter.js ***!
  \****************************************************/
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,(function(){"use strict";return function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}}}));

/***/ }),

/***/ "./node_modules/nanoid/index.dev.js":
/*!******************************************!*\
  !*** ./node_modules/nanoid/index.dev.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nanoid": () => (/* binding */ nanoid),
/* harmony export */   "customAlphabet": () => (/* binding */ customAlphabet),
/* harmony export */   "customRandom": () => (/* binding */ customRandom),
/* harmony export */   "urlAlphabet": () => (/* reexport safe */ _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__.urlAlphabet),
/* harmony export */   "random": () => (/* binding */ random)
/* harmony export */ });
/* harmony import */ var _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-alphabet/index.js */ "./node_modules/nanoid/url-alphabet/index.js");
// This file replaces `index.js` in bundlers like webpack or Rollup,
// according to `browser` config in `package.json`.



if (true) {
  // All bundlers will remove this block in the production bundle.
  if (
    typeof navigator !== 'undefined' &&
    navigator.product === 'ReactNative' &&
    typeof crypto === 'undefined'
  ) {
    throw new Error(
      'React Native does not have a built-in secure random generator. ' +
        'If you don’t need unpredictable IDs use `nanoid/non-secure`. ' +
        'For secure IDs, import `react-native-get-random-values` ' +
        'before Nano ID.'
    )
  }
  if (typeof msCrypto !== 'undefined' && typeof crypto === 'undefined') {
    throw new Error(
      'Import file with `if (!window.crypto) window.crypto = window.msCrypto`' +
        ' before importing Nano ID to fix IE 11 support'
    )
  }
  if (typeof crypto === 'undefined') {
    throw new Error(
      'Your browser does not have secure random generator. ' +
        'If you don’t need unpredictable IDs, you can use nanoid/non-secure.'
    )
  }
}

let random = bytes => crypto.getRandomValues(new Uint8Array(bytes))

let customRandom = (alphabet, size, getRandom) => {
  // First, a bitmask is necessary to generate the ID. The bitmask makes bytes
  // values closer to the alphabet size. The bitmask calculates the closest
  // `2^31 - 1` number, which exceeds the alphabet size.
  // For example, the bitmask for the alphabet size 30 is 31 (00011111).
  // `Math.clz32` is not used, because it is not available in browsers.
  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1
  // Though, the bitmask solution is not perfect since the bytes exceeding
  // the alphabet size are refused. Therefore, to reliably generate the ID,
  // the random bytes redundancy has to be satisfied.

  // Note: every hardware random generator call is performance expensive,
  // because the system call for entropy collection takes a lot of time.
  // So, to avoid additional system calls, extra bytes are requested in advance.

  // Next, a step determines how many random bytes to generate.
  // The number of random bytes gets decided upon the ID size, mask,
  // alphabet size, and magic number 1.6 (using 1.6 peaks at performance
  // according to benchmarks).

  // `-~f => Math.ceil(f)` if f is a float
  // `-~i => i + 1` if i is an integer
  let step = -~((1.6 * mask * size) / alphabet.length)

  return () => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      // A compact alternative for `for (var i = 0; i < step; i++)`.
      let j = step
      while (j--) {
        // Adding `|| ''` refuses a random byte that exceeds the alphabet size.
        id += alphabet[bytes[j] & mask] || ''
        if (id.length === size) return id
      }
    }
  }
}

let customAlphabet = (alphabet, size) => customRandom(alphabet, size, random)

let nanoid = (size = 21) => {
  let id = ''
  let bytes = crypto.getRandomValues(new Uint8Array(size))

  // A compact alternative for `for (var i = 0; i < step; i++)`.
  while (size--) {
    // It is incorrect to use bytes exceeding the alphabet size.
    // The following mask reduces the random byte in the 0-255 value
    // range to the 0-63 value range. Therefore, adding hacks, such
    // as empty string fallback or magic numbers, is unneccessary because
    // the bitmask trims bytes down to the alphabet size.
    let byte = bytes[size] & 63
    if (byte < 36) {
      // `0-9a-z`
      id += byte.toString(36)
    } else if (byte < 62) {
      // `A-Z`
      id += (byte - 26).toString(36).toUpperCase()
    } else if (byte < 63) {
      id += '_'
    } else {
      id += '-'
    }
  }
  return id
}




/***/ }),

/***/ "./node_modules/nanoid/url-alphabet/index.js":
/*!***************************************************!*\
  !*** ./node_modules/nanoid/url-alphabet/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "urlAlphabet": () => (/* binding */ urlAlphabet)
/* harmony export */ });
// This alphabet uses `A-Za-z0-9_-` symbols. The genetic algorithm helped
// optimize the gzip compression for this alphabet.
let urlAlphabet =
  'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW'




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs_plugin_isSameOrAfter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs/plugin/isSameOrAfter */ "./node_modules/dayjs/plugin/isSameOrAfter.js");
/* harmony import */ var dayjs_plugin_isSameOrAfter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_isSameOrAfter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/render.js */ "./src/utils/render.js");
/* harmony import */ var _mock_point_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mock/point.js */ "./src/mock/point.js");
/* harmony import */ var _view_site_menu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/site-menu.js */ "./src/view/site-menu.js");
/* harmony import */ var _view_route_info_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/route-info.js */ "./src/view/route-info.js");
/* harmony import */ var _view_filters_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/filters.js */ "./src/view/filters.js");
/* harmony import */ var _presenter_trip_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./presenter/trip.js */ "./src/presenter/trip.js");


dayjs__WEBPACK_IMPORTED_MODULE_0___default().extend(dayjs_plugin_isSameOrAfter__WEBPACK_IMPORTED_MODULE_1__);






const siteHeaderContainerElement = document.querySelector('.page-header__container');
const siteTripInfoElement = siteHeaderContainerElement.querySelector('.trip-main');
const siteNavigationElement = siteHeaderContainerElement.querySelector('.trip-controls__navigation');
const siteFiltersElement = siteHeaderContainerElement.querySelector('.trip-controls__filters');
const siteMainElement = document.querySelector('.page-main');
const siteTripEventsElement = siteMainElement.querySelector('.trip-events');
(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)(siteTripInfoElement, new _view_route_info_js__WEBPACK_IMPORTED_MODULE_5__["default"]().getElement(), _utils_render_js__WEBPACK_IMPORTED_MODULE_2__.RenderPosition.AFTERBEGIN);
(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)(siteNavigationElement, new _view_site_menu_js__WEBPACK_IMPORTED_MODULE_4__["default"]().getElement(), _utils_render_js__WEBPACK_IMPORTED_MODULE_2__.RenderPosition.AFTERBEGIN);
(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)(siteFiltersElement, new _view_filters_js__WEBPACK_IMPORTED_MODULE_6__["default"]().getElement(), _utils_render_js__WEBPACK_IMPORTED_MODULE_2__.RenderPosition.AFTERBEGIN);
const tripPresenter = new _presenter_trip_js__WEBPACK_IMPORTED_MODULE_7__["default"](siteTripEventsElement);
tripPresenter.init(_mock_point_js__WEBPACK_IMPORTED_MODULE_3__.points);
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map