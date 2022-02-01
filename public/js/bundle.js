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
/* harmony export */   "TYPES": () => (/* binding */ TYPES),
/* harmony export */   "SortType": () => (/* binding */ SortType)
/* harmony export */ });
const TYPES = ['Taxi', 'Bus', 'Train', 'Ship', 'Transport', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant'];
const SortType = {
  DAY: 'day',
  EVENT: 'event',
  TIME: 'time',
  PRICE: 'price',
  OFFERS: 'offers'
};

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
/* harmony export */   "generatePoint": () => (/* binding */ generatePoint)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.dev.js");
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/common.js */ "./src/utils/common.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../const.js */ "./src/const.js");




const DESTINATION = ['Amsterdam', 'Geneva', 'Chamonix'];
const DESCRIPTION = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Cras aliquet varius magna, non porta ligula feugiat eget.', 'Fusce tristique felis at fermentum pharetra.', 'Aliquam id orci ut lectus varius viverra.', 'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.', 'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.', 'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.', 'Sed sed nisi sed augue convallis suscipit in sed felis.', 'Aliquam erat volutpat.', 'Nunc fermentum tortor ac porta dapibus.', 'In rutrum ac purus sit amet tempus.'];
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
    destination: DESTINATION[(0,_utils_common_js__WEBPACK_IMPORTED_MODULE_1__.getRandomInteger)(0, DESTINATION.length - 1)],
    datetimeStart,
    datetimeEnd,
    duration,
    price: (0,_utils_common_js__WEBPACK_IMPORTED_MODULE_1__.getRandomInteger)(20, 200),
    description: (0,_utils_common_js__WEBPACK_IMPORTED_MODULE_1__.getRandomArrayElements)(DESCRIPTION, 1),
    photos: 'http://picsum.photos/248/152?r=',
    offers: (0,_utils_common_js__WEBPACK_IMPORTED_MODULE_1__.getRandomArrayElements)(options, 0),
    isFavorite: Boolean((0,_utils_common_js__WEBPACK_IMPORTED_MODULE_1__.getRandomInteger)(0, 1))
  };
};

/***/ }),

/***/ "./src/presenter/add-point-presenter.js":
/*!**********************************************!*\
  !*** ./src/presenter/add-point-presenter.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddPointPresenter)
/* harmony export */ });
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common */ "./src/utils/common.js");
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.js");
/* harmony import */ var _view_no_point_list_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/no-point-list-view */ "./src/view/no-point-list-view.js");
/* harmony import */ var _view_add_point_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/add-point-view */ "./src/view/add-point-view.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }





const ModeAddPoint = {
  DEFAULT: 'DEFAULT',
  SHOW: 'SHOW'
};

var _pointListContainer = /*#__PURE__*/new WeakMap();

var _addPointComponent = /*#__PURE__*/new WeakMap();

var _mode = /*#__PURE__*/new WeakMap();

var _body = /*#__PURE__*/new WeakMap();

var _point = /*#__PURE__*/new WeakMap();

var _sortDayInput = /*#__PURE__*/new WeakMap();

var _siteTripEventsElement = /*#__PURE__*/new WeakMap();

var _siteMainElement = /*#__PURE__*/new WeakMap();

var _siteHeaderContainerElement = /*#__PURE__*/new WeakMap();

var _addPointButton = /*#__PURE__*/new WeakMap();

var _pointsLength = /*#__PURE__*/new WeakMap();

var _handleFormSubmit = /*#__PURE__*/new WeakMap();

var _handleHideEditClick = /*#__PURE__*/new WeakMap();

var _handleCancelPointClick = /*#__PURE__*/new WeakMap();

var _escKeyDownHandler = /*#__PURE__*/new WeakMap();

class AddPointPresenter {
  constructor(pointListContainer, pointsLength) {
    _classPrivateFieldInitSpec(this, _pointListContainer, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _addPointComponent, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _mode, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _body, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _point, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _sortDayInput, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _siteTripEventsElement, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _siteMainElement, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _siteHeaderContainerElement, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _addPointButton, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _pointsLength, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _handleFormSubmit, {
      writable: true,
      value: () => {
        this.closeAddForm();
      }
    });

    _classPrivateFieldInitSpec(this, _handleHideEditClick, {
      writable: true,
      value: () => {
        this.closeAddForm();
      }
    });

    _classPrivateFieldInitSpec(this, _handleCancelPointClick, {
      writable: true,
      value: () => {
        this.closeAddForm();

        if (_classPrivateFieldGet(this, _pointListContainer).element.querySelector('.trip-events__item') === null) {
          (0,_utils_render__WEBPACK_IMPORTED_MODULE_1__.render)(_classPrivateFieldGet(this, _siteTripEventsElement), new _view_no_point_list_view__WEBPACK_IMPORTED_MODULE_2__["default"]().element, _utils_render__WEBPACK_IMPORTED_MODULE_1__.RenderPosition.BEFOREEND);
        }

        _classPrivateFieldGet(this, _body).removeEventListener('keydown', _classPrivateFieldGet(this, _escKeyDownHandler));
      }
    });

    _defineProperty(this, "closeAddForm", () => {
      if (_classPrivateFieldGet(this, _mode) == ModeAddPoint.SHOW) {
        _classPrivateFieldSet(this, _mode, ModeAddPoint.DEFAULT);

        _classPrivateFieldGet(this, _pointListContainer).element.querySelector('.trip-events__item').remove();

        _classPrivateFieldGet(this, _addPointButton).disabled = false;
        _classPrivateFieldGet(this, _pointsLength) === 0 ? _classPrivateFieldGet(this, _siteMainElement).querySelector('.trip-events__msg').style = 'display: block;' : false;
      }
    });

    _classPrivateFieldInitSpec(this, _escKeyDownHandler, {
      writable: true,
      value: evt => {
        if ((0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.isEscEvent)(evt)) {
          evt.preventDefault();
          this.closeAddForm();

          _classPrivateFieldGet(this, _body).removeEventListener('keydown', _classPrivateFieldGet(this, _escKeyDownHandler));
        }
      }
    });

    _classPrivateFieldSet(this, _pointListContainer, pointListContainer);

    _classPrivateFieldSet(this, _pointsLength, pointsLength);

    _classPrivateFieldSet(this, _addPointComponent, null);

    _classPrivateFieldSet(this, _mode, ModeAddPoint.DEFAULT);

    _classPrivateFieldSet(this, _body, document.querySelector('.page-body'));

    _classPrivateFieldSet(this, _siteMainElement, document.querySelector('.page-main'));
  }

  init(point) {
    _classPrivateFieldSet(this, _point, point);

    _classPrivateFieldSet(this, _siteHeaderContainerElement, document.querySelector('.page-header__container'));

    _classPrivateFieldSet(this, _addPointButton, _classPrivateFieldGet(this, _siteHeaderContainerElement).querySelector('.trip-main__event-add-btn'));

    _classPrivateFieldSet(this, _addPointComponent, new _view_add_point_view__WEBPACK_IMPORTED_MODULE_3__["default"](point));

    _classPrivateFieldGet(this, _addPointButton).addEventListener('click', () => {
      _classPrivateFieldSet(this, _mode, ModeAddPoint.SHOW);

      _classPrivateFieldGet(this, _pointListContainer).element.querySelector('.event--edit') ? _classPrivateFieldGet(this, _pointListContainer).element.querySelector('.event--edit').querySelector('.event__rollup-btn').click() : false;
      _classPrivateFieldGet(this, _body).querySelector('.trip-events__msg') ? _classPrivateFieldGet(this, _body).querySelector('.trip-events__msg').style = 'display: none;' : false;
      _classPrivateFieldGet(this, _sortDayInput).checked = true;
      (0,_utils_render__WEBPACK_IMPORTED_MODULE_1__.render)(_classPrivateFieldGet(this, _pointListContainer), _classPrivateFieldGet(this, _addPointComponent), _utils_render__WEBPACK_IMPORTED_MODULE_1__.RenderPosition.AFTERBEGIN);
      _classPrivateFieldGet(this, _addPointButton).disabled = true;

      _classPrivateFieldGet(this, _body).addEventListener('keydown', _classPrivateFieldGet(this, _escKeyDownHandler));
    });

    _classPrivateFieldSet(this, _siteTripEventsElement, _classPrivateFieldGet(this, _siteMainElement).querySelector('.trip-events'));

    _classPrivateFieldSet(this, _sortDayInput, _classPrivateFieldGet(this, _siteTripEventsElement).querySelector('#sort-day'));

    _classPrivateFieldGet(this, _addPointComponent).setFormSubmitHandler(_classPrivateFieldGet(this, _handleFormSubmit));

    _classPrivateFieldGet(this, _addPointComponent).setFormCancelHandler(_classPrivateFieldGet(this, _handleCancelPointClick));
  }

}

/***/ }),

/***/ "./src/presenter/point-presenter.js":
/*!******************************************!*\
  !*** ./src/presenter/point-presenter.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Point)
/* harmony export */ });
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common */ "./src/utils/common.js");
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.js");
/* harmony import */ var _view_no_point_list_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/no-point-list-view */ "./src/view/no-point-list-view.js");
/* harmony import */ var _view_point_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/point-view */ "./src/view/point-view.js");
/* harmony import */ var _view_edit_point_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view/edit-point-view */ "./src/view/edit-point-view.js");
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }






const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING'
};

var _replaceCardToForm = /*#__PURE__*/new WeakMap();

var _replaceFormToCard = /*#__PURE__*/new WeakMap();

class Point {
  constructor(pointListContainer, changeData, changeMode) {
    _classPrivateFieldInitSpec(this, _replaceCardToForm, {
      writable: true,
      value: () => {
        (0,_utils_render__WEBPACK_IMPORTED_MODULE_1__.replace)(this._pointEditComponent, this._pointComponent);

        this._changeMode();

        this._mode = Mode.EDITING;

        this._body.addEventListener('keydown', this._escKeyDownHandler);
      }
    });

    _classPrivateFieldInitSpec(this, _replaceFormToCard, {
      writable: true,
      value: () => {
        (0,_utils_render__WEBPACK_IMPORTED_MODULE_1__.replace)(this._pointComponent, this._pointEditComponent);
        this._mode = Mode.DEFAULT;

        this._body.removeEventListener('keydown', this._escKeyDownHandler);
      }
    });

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
    this._pointComponent = new _view_point_view__WEBPACK_IMPORTED_MODULE_3__["default"](point);
    this._pointEditComponent = new _view_edit_point_view__WEBPACK_IMPORTED_MODULE_4__["default"](point);

    this._pointComponent.setEditClickHandler(this._handleEditClick);

    this._pointComponent.setFavoriteClickHandler(this._handleFavoriteClick);

    this._pointEditComponent.setFormSubmitHandler(this._handleFormSubmit);

    this._pointEditComponent.setDeletePointHandler(this._handleDeletePointClick);

    this._pointEditComponent.setFormHideEditHandler(this._handleHideEditClick);

    if (prevPointComponent === null || prevPointEditComponent === null) {
      (0,_utils_render__WEBPACK_IMPORTED_MODULE_1__.render)(this._pointListContainer, this._pointComponent, _utils_render__WEBPACK_IMPORTED_MODULE_1__.RenderPosition.BEFOREEND);
      return;
    }

    if (this._mode === Mode.DEFAULT) {
      (0,_utils_render__WEBPACK_IMPORTED_MODULE_1__.replace)(this._pointComponent, prevPointComponent);
    }

    if (this._mode === Mode.EDITING) {
      (0,_utils_render__WEBPACK_IMPORTED_MODULE_1__.replace)(this._pointEditComponent, prevPointEditComponent);
    }

    (0,_utils_render__WEBPACK_IMPORTED_MODULE_1__.remove)(prevPointComponent);
    (0,_utils_render__WEBPACK_IMPORTED_MODULE_1__.remove)(prevPointEditComponent);
  }

  resetView() {
    if (this._mode !== Mode.DEFAULT) {
      _classPrivateFieldGet(this, _replaceFormToCard).call(this);
    }
  }

  destroy() {
    (0,_utils_render__WEBPACK_IMPORTED_MODULE_1__.remove)(this._pointComponent);
    (0,_utils_render__WEBPACK_IMPORTED_MODULE_1__.remove)(this._pointEditComponent);
  }

  _escKeyDownHandler(evt) {
    if ((0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.isEscEvent)(evt)) {
      evt.preventDefault();

      this._pointEditComponent.reset(this._point);

      _classPrivateFieldGet(this, _replaceFormToCard).call(this);

      this._body.removeEventListener('keydown', this._escKeyDownHandler);
    }
  }

  _handleEditClick() {
    _classPrivateFieldGet(this, _replaceCardToForm).call(this);
  }

  _handleFavoriteClick() {
    this._changeData(Object.assign({}, this._point, {
      isFavorite: !this._point.isFavorite
    }));
  }

  _handleFormSubmit(point) {
    this._changeData(point);

    _classPrivateFieldGet(this, _replaceFormToCard).call(this);

    this._body.removeEventListener('keydown', this._escKeyDownHandler);
  }

  _handleHideEditClick() {
    _classPrivateFieldGet(this, _replaceFormToCard).call(this);

    this._body.removeEventListener('keydown', this._escKeyDownHandler);
  }

  _handleDeletePointClick() {
    (0,_utils_render__WEBPACK_IMPORTED_MODULE_1__.remove)(this._pointEditComponent);

    if (this._pointListContainer.element.querySelector('.trip-events__item') === null) {
      (0,_utils_render__WEBPACK_IMPORTED_MODULE_1__.render)(this._siteTripEventsElement, new _view_no_point_list_view__WEBPACK_IMPORTED_MODULE_2__["default"]().element, _utils_render__WEBPACK_IMPORTED_MODULE_1__.RenderPosition.BEFOREEND);
    }

    this._body.removeEventListener('keydown', this._escKeyDownHandler);
  }

}

/***/ }),

/***/ "./src/presenter/trip-presenter.js":
/*!*****************************************!*\
  !*** ./src/presenter/trip-presenter.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TripEvents)
/* harmony export */ });
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common */ "./src/utils/common.js");
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../const */ "./src/const.js");
/* harmony import */ var _view_sort_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/sort-view */ "./src/view/sort-view.js");
/* harmony import */ var _view_no_point_list_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view/no-point-list-view */ "./src/view/no-point-list-view.js");
/* harmony import */ var _view_point_list_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../view/point-list-view */ "./src/view/point-list-view.js");
/* harmony import */ var _point_presenter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./point-presenter */ "./src/presenter/point-presenter.js");
/* harmony import */ var _add_point_presenter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-point-presenter */ "./src/presenter/add-point-presenter.js");
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }










var _tripContainer = /*#__PURE__*/new WeakMap();

var _addPointComponent = /*#__PURE__*/new WeakMap();

var _sortComponent = /*#__PURE__*/new WeakMap();

var _pointListComponent = /*#__PURE__*/new WeakMap();

var _noPointListComponent = /*#__PURE__*/new WeakMap();

var _pointPresenter = /*#__PURE__*/new WeakMap();

var _siteMainElement = /*#__PURE__*/new WeakMap();

var _siteTripEventsElement = /*#__PURE__*/new WeakMap();

var _currentSortType = /*#__PURE__*/new WeakMap();

var _points = /*#__PURE__*/new WeakMap();

var _sourcedTripEvents = /*#__PURE__*/new WeakMap();

var _handlePointChange = /*#__PURE__*/new WeakMap();

var _handleModeChange = /*#__PURE__*/new WeakMap();

var _sortPoints = /*#__PURE__*/new WeakMap();

var _handleSortTypeChange = /*#__PURE__*/new WeakMap();

var _renderSort = /*#__PURE__*/new WeakMap();

var _renderNoPointsList = /*#__PURE__*/new WeakMap();

var _renderPoint = /*#__PURE__*/new WeakMap();

var _renderAddPoint = /*#__PURE__*/new WeakMap();

var _renderPoints = /*#__PURE__*/new WeakMap();

var _renderTripEvents = /*#__PURE__*/new WeakMap();

var _clearPointList = /*#__PURE__*/new WeakMap();

class TripEvents {
  constructor(tripContainer) {
    _classPrivateFieldInitSpec(this, _tripContainer, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _addPointComponent, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _sortComponent, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _pointListComponent, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _noPointListComponent, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _pointPresenter, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _siteMainElement, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _siteTripEventsElement, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _currentSortType, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _points, {
      writable: true,
      value: []
    });

    _classPrivateFieldInitSpec(this, _sourcedTripEvents, {
      writable: true,
      value: []
    });

    _classPrivateFieldInitSpec(this, _handlePointChange, {
      writable: true,
      value: updatedPoint => {
        _classPrivateFieldSet(this, _points, (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.updateItem)(_classPrivateFieldGet(this, _points), updatedPoint));

        _classPrivateFieldSet(this, _sourcedTripEvents, (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.updateItem)(_classPrivateFieldGet(this, _points), updatedPoint));

        _classPrivateFieldGet(this, _pointPresenter)[updatedPoint.id].init(updatedPoint);
      }
    });

    _classPrivateFieldInitSpec(this, _handleModeChange, {
      writable: true,
      value: () => {
        Object.values(_classPrivateFieldGet(this, _pointPresenter)).forEach(presenter => presenter.resetView());

        _classPrivateFieldGet(this, _addPointComponent).closeAddForm();
      }
    });

    _classPrivateFieldInitSpec(this, _sortPoints, {
      writable: true,
      value: sortType => {
        switch (sortType) {
          case _const__WEBPACK_IMPORTED_MODULE_2__.SortType.TIME:
            _classPrivateFieldGet(this, _points).sort((a, b) => b.duration - a.duration);

            console.log(_classPrivateFieldGet(this, _points));
            break;

          case _const__WEBPACK_IMPORTED_MODULE_2__.SortType.PRICE:
            _classPrivateFieldGet(this, _points).sort((a, b) => b.price - a.price);

            break;

          default:
            _classPrivateFieldSet(this, _points, _classPrivateFieldGet(this, _sourcedTripEvents));

        }

        _classPrivateFieldSet(this, _currentSortType, sortType);
      }
    });

    _classPrivateFieldInitSpec(this, _handleSortTypeChange, {
      writable: true,
      value: sortType => {
        if (_classPrivateFieldGet(this, _currentSortType) === sortType) {
          return;
        }

        _classPrivateFieldGet(this, _sortPoints).call(this, sortType);

        _classPrivateFieldGet(this, _clearPointList).call(this);

        _classPrivateFieldGet(this, _renderTripEvents).call(this);
      }
    });

    _classPrivateFieldInitSpec(this, _renderSort, {
      writable: true,
      value: () => {
        _classPrivateFieldSet(this, _sortComponent, new _view_sort_view__WEBPACK_IMPORTED_MODULE_3__["default"](_classPrivateFieldGet(this, _currentSortType)));

        (0,_utils_render__WEBPACK_IMPORTED_MODULE_1__.render)(_classPrivateFieldGet(this, _siteTripEventsElement), _classPrivateFieldGet(this, _sortComponent).element, _utils_render__WEBPACK_IMPORTED_MODULE_1__.RenderPosition.AFTERBEGIN);

        _classPrivateFieldGet(this, _sortComponent).setSortTypeChangeHandler(_classPrivateFieldGet(this, _handleSortTypeChange));
      }
    });

    _classPrivateFieldInitSpec(this, _renderNoPointsList, {
      writable: true,
      value: () => {
        (0,_utils_render__WEBPACK_IMPORTED_MODULE_1__.render)(_classPrivateFieldGet(this, _siteTripEventsElement), _classPrivateFieldGet(this, _noPointListComponent).element, _utils_render__WEBPACK_IMPORTED_MODULE_1__.RenderPosition.BEFOREEND);
      }
    });

    _classPrivateFieldInitSpec(this, _renderPoint, {
      writable: true,
      value: point => {
        const pointPresenter = new _point_presenter__WEBPACK_IMPORTED_MODULE_6__["default"](_classPrivateFieldGet(this, _pointListComponent), _classPrivateFieldGet(this, _handlePointChange), _classPrivateFieldGet(this, _handleModeChange));
        pointPresenter.init(point);
        _classPrivateFieldGet(this, _pointPresenter)[point.id] = pointPresenter;
      }
    });

    _classPrivateFieldInitSpec(this, _renderAddPoint, {
      writable: true,
      value: () => {
        const addPointPresenter = new _add_point_presenter__WEBPACK_IMPORTED_MODULE_7__["default"](_classPrivateFieldGet(this, _pointListComponent), _classPrivateFieldGet(this, _points).length);
        addPointPresenter.init();

        _classPrivateFieldSet(this, _addPointComponent, addPointPresenter);
      }
    });

    _classPrivateFieldInitSpec(this, _renderPoints, {
      writable: true,
      value: () => {
        _classPrivateFieldGet(this, _points).forEach(tripEvent => _classPrivateFieldGet(this, _renderPoint).call(this, tripEvent));
      }
    });

    _classPrivateFieldInitSpec(this, _renderTripEvents, {
      writable: true,
      value: () => {
        _classPrivateFieldGet(this, _points).length === 0 ? _classPrivateFieldGet(this, _renderNoPointsList).call(this) : _classPrivateFieldGet(this, _renderPoints).call(this);

        _classPrivateFieldGet(this, _renderAddPoint).call(this);
      }
    });

    _classPrivateFieldInitSpec(this, _clearPointList, {
      writable: true,
      value: () => {
        Object.values(_classPrivateFieldGet(this, _pointPresenter)).forEach(presenter => presenter.destroy());

        _classPrivateFieldSet(this, _pointPresenter, {});
      }
    });

    _classPrivateFieldSet(this, _tripContainer, tripContainer);

    _classPrivateFieldSet(this, _pointPresenter, {});

    _classPrivateFieldSet(this, _currentSortType, 'sort-day');

    _classPrivateFieldSet(this, _siteMainElement, document.querySelector('.page-main'));

    _classPrivateFieldSet(this, _siteTripEventsElement, _classPrivateFieldGet(this, _siteMainElement).querySelector('.trip-events'));

    _classPrivateFieldSet(this, _noPointListComponent, new _view_no_point_list_view__WEBPACK_IMPORTED_MODULE_4__["default"]());

    _classPrivateFieldSet(this, _pointListComponent, new _view_point_list_view__WEBPACK_IMPORTED_MODULE_5__["default"]());
  }

  init(points) {
    _classPrivateFieldSet(this, _points, points);

    _classPrivateFieldSet(this, _sourcedTripEvents, points);

    (0,_utils_render__WEBPACK_IMPORTED_MODULE_1__.render)(_classPrivateFieldGet(this, _siteTripEventsElement), _classPrivateFieldGet(this, _pointListComponent).element, _utils_render__WEBPACK_IMPORTED_MODULE_1__.RenderPosition.BEFOREEND);

    _classPrivateFieldGet(this, _renderSort).call(this);

    _classPrivateFieldGet(this, _renderTripEvents).call(this);
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
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "replace": () => (/* binding */ replace),
/* harmony export */   "remove": () => (/* binding */ remove)
/* harmony export */ });
/* harmony import */ var _view_abstract_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/abstract-view.js */ "./src/view/abstract-view.js");

const RenderPosition = {
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
  AFTEREND: 'afterend'
};
const render = (container, element, place) => {
  const parent = container instanceof _view_abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? container.element : container;
  const child = element instanceof _view_abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? element.element : element;

  switch (place) {
    case RenderPosition.BEFOREBEGIN:
      parent.before(child);
      break;

    case RenderPosition.AFTERBEGIN:
      parent.prepend(child);
      break;

    case RenderPosition.BEFOREEND:
      parent.append(child);
      break;

    case RenderPosition.AFTEREND:
      parent.after(child);
      break;
  }
};
const createElement = template => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;
  return newElement.firstChild;
};
const replace = (newElement, oldElement) => {
  if (newElement === null || oldElement === null) {
    throw new Error('Can\'t replace unexisting elements');
  }

  const newChild = newElement instanceof _view_abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? newElement.element : newElement;
  const oldChild = oldElement instanceof _view_abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? oldElement.element : oldElement;
  const parent = oldChild.parentElement;

  if (parent === null) {
    throw new Error('Parent element doesn\'t exist');
  }

  parent.replaceChild(newChild, oldChild);
};
const remove = component => {
  if (component === null) {
    return;
  }

  if (!(component instanceof _view_abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"])) {
    throw new Error('Can remove only components');
  }

  component.element.remove();
  component.removeElement();
};

/***/ }),

/***/ "./src/view/abstract-view.js":
/*!***********************************!*\
  !*** ./src/view/abstract-view.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AbstractView)
/* harmony export */ });
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }


const SHAKE_ANIMATION_TIMEOUT = 600;

var _element = /*#__PURE__*/new WeakMap();

class AbstractView {
  constructor() {
    _classPrivateFieldInitSpec(this, _element, {
      writable: true,
      value: null
    });

    _defineProperty(this, "_callback", {});

    if (new.target === AbstractView) {
      throw new Error('Can\'t instantiate AbstractView, only concrete one.');
    }
  }

  get element() {
    if (!_classPrivateFieldGet(this, _element)) {
      _classPrivateFieldSet(this, _element, (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(this.template));
    }

    return _classPrivateFieldGet(this, _element);
  }

  get template() {
    throw new Error('Abstract method not implemented: get template');
  }

  removeElement() {
    _classPrivateFieldSet(this, _element, null);
  }

  shake(callback) {
    this.element.style.animation = `shake ${SHAKE_ANIMATION_TIMEOUT / 1000}s`;
    setTimeout(() => {
      this.element.style.animation = '';
      callback();
    }, SHAKE_ANIMATION_TIMEOUT);
  }

}

/***/ }),

/***/ "./src/view/add-point-view.js":
/*!************************************!*\
  !*** ./src/view/add-point-view.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddPointView)
/* harmony export */ });
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common */ "./src/utils/common.js");
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract-view */ "./src/view/abstract-view.js");
/* harmony import */ var _utils_point__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/point */ "./src/utils/point.js");
/* harmony import */ var _point_types_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./point-types-view */ "./src/view/point-types-view.js");
/* harmony import */ var _point_options_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./point-options-view */ "./src/view/point-options-view.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }






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
  const typesTemplate = (0,_point_types_view__WEBPACK_IMPORTED_MODULE_3__.createPointTypesTemplate)(type);
  const offersTemplate = (0,_point_options_view__WEBPACK_IMPORTED_MODULE_4__.createPointAvailableOptionsTemplate)(offers);
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
      <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${(0,_utils_point__WEBPACK_IMPORTED_MODULE_2__.newPointDate)(datetimeStart)}">
      &mdash;
      <label class="visually-hidden" for="event-end-time-1">To</label>
      <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${(0,_utils_point__WEBPACK_IMPORTED_MODULE_2__.newPointDate)(datetimeEnd)}">
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
  ${_point_options_view__WEBPACK_IMPORTED_MODULE_4__.randomAvailableOptions.length !== 0 ? `<section class="event__section  event__section--offers">
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
          <img class="event__photo" src="${photos + (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.getRandomInteger)(1, 15)}" alt="Event photo">
          <img class="event__photo" src="${photos + (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.getRandomInteger)(1, 15)}" alt="Event photo">
          <img class="event__photo" src="${photos + (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.getRandomInteger)(1, 15)}" alt="Event photo">
          <img class="event__photo" src="${photos + (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.getRandomInteger)(1, 15)}" alt="Event photo">
          <img class="event__photo" src="${photos + (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.getRandomInteger)(1, 15)}" alt="Event photo">
        </div>
      </div>
    </section>` : ''}
  </section>
</form>
</li>`;
};

var _point = /*#__PURE__*/new WeakMap();

var _formSubmitHandler = /*#__PURE__*/new WeakMap();

var _formCancelHandler = /*#__PURE__*/new WeakMap();

class AddPointView extends _abstract_view__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(point = BLANK_POINT) {
    super();

    _classPrivateFieldInitSpec(this, _point, {
      writable: true,
      value: null
    });

    _defineProperty(this, "setFormSubmitHandler", callback => {
      this._callback.formSubmit = callback;
      this.element.querySelector('form').addEventListener('submit', _classPrivateFieldGet(this, _formSubmitHandler));
    });

    _classPrivateFieldInitSpec(this, _formSubmitHandler, {
      writable: true,
      value: evt => {
        evt.preventDefault();

        this._callback.formSubmit();
      }
    });

    _defineProperty(this, "setFormCancelHandler", callback => {
      this._callback.formCancel = callback;
      this.element.querySelector('.event__reset-btn').addEventListener('click', _classPrivateFieldGet(this, _formCancelHandler));
    });

    _classPrivateFieldInitSpec(this, _formCancelHandler, {
      writable: true,
      value: evt => {
        evt.preventDefault();

        this._callback.formCancel();
      }
    });

    _classPrivateFieldSet(this, _point, point);
  }

  get template() {
    return createAddPointTemplate(_classPrivateFieldGet(this, _point));
  }

}

/***/ }),

/***/ "./src/view/edit-point-view.js":
/*!*************************************!*\
  !*** ./src/view/edit-point-view.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditPointView)
/* harmony export */ });
/* harmony import */ var _point_types_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point-types-view.js */ "./src/view/point-types-view.js");
/* harmony import */ var _point_options_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./point-options-view.js */ "./src/view/point-options-view.js");
/* harmony import */ var _utils_point_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/point.js */ "./src/utils/point.js");
/* harmony import */ var _smart_view_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./smart-view.js */ "./src/view/smart-view.js");
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }






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
  const typePointsTemplate = (0,_point_types_view_js__WEBPACK_IMPORTED_MODULE_0__.createPointTypesTemplate)(type);
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
    ${_point_options_view_js__WEBPACK_IMPORTED_MODULE_1__.randomAvailableOptions.length !== 0 ? `<section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>
        <div class="event__available-offers">
          ${(0,_point_options_view_js__WEBPACK_IMPORTED_MODULE_1__.createPointAvailableOptionsTemplate)(offers)}
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

var _setInnerHandlers = /*#__PURE__*/new WeakMap();

var _typePointToggleHandler = /*#__PURE__*/new WeakMap();

var _formSubmitHandler = /*#__PURE__*/new WeakMap();

var _formHideEditHandler = /*#__PURE__*/new WeakMap();

var _formDeletePointHandler = /*#__PURE__*/new WeakMap();

class EditPointView extends _smart_view_js__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor(point) {
    super();

    _defineProperty(this, "restoreHandlers", () => {
      _classPrivateFieldGet(this, _setInnerHandlers).call(this);

      this.setFormSubmitHandler(this._callback.formSubmit);
      this.setFormHideEditHandler(this._callback.formHideEdit);
    });

    _defineProperty(this, "setFormSubmitHandler", callback => {
      this._callback.formSubmit = callback;
      this.element.querySelector('form').addEventListener('submit', _classPrivateFieldGet(this, _formSubmitHandler));
    });

    _defineProperty(this, "setFormHideEditHandler", callback => {
      this._callback.formHideEdit = callback;
      this.element.querySelector('.event__rollup-btn').addEventListener('click', _classPrivateFieldGet(this, _formHideEditHandler));
    });

    _defineProperty(this, "setDeletePointHandler", callback => {
      this._callback.formDeletePoint = callback;
      this.element.querySelector('.event__reset-btn').addEventListener('click', _classPrivateFieldGet(this, _formDeletePointHandler));
    });

    _classPrivateFieldInitSpec(this, _setInnerHandlers, {
      writable: true,
      value: () => {
        this.element.querySelector('.event__type-group').addEventListener('change', _classPrivateFieldGet(this, _typePointToggleHandler));
      }
    });

    _classPrivateFieldInitSpec(this, _typePointToggleHandler, {
      writable: true,
      value: evt => {
        evt.preventDefault();
        this.updateData({
          type: evt.target.value
        });
      }
    });

    _classPrivateFieldInitSpec(this, _formSubmitHandler, {
      writable: true,
      value: evt => {
        evt.preventDefault();

        this._callback.formSubmit(EditPointView.parseDataToPoint(this._data));
      }
    });

    _classPrivateFieldInitSpec(this, _formHideEditHandler, {
      writable: true,
      value: evt => {
        evt.preventDefault();

        this._callback.formHideEdit();
      }
    });

    _classPrivateFieldInitSpec(this, _formDeletePointHandler, {
      writable: true,
      value: evt => {
        evt.preventDefault();

        this._callback.formDeletePoint();
      }
    });

    this._data = EditPointView.parsePointToData(point);

    _classPrivateFieldSet(this, _formSubmitHandler, _classPrivateFieldGet(this, _formSubmitHandler).bind(this));

    _classPrivateFieldSet(this, _formHideEditHandler, _classPrivateFieldGet(this, _formHideEditHandler).bind(this));

    _classPrivateFieldSet(this, _formDeletePointHandler, _classPrivateFieldGet(this, _formDeletePointHandler).bind(this));

    _classPrivateFieldSet(this, _typePointToggleHandler, _classPrivateFieldGet(this, _typePointToggleHandler).bind(this));

    _classPrivateFieldGet(this, _setInnerHandlers).call(this);
  }

  reset(point) {
    this.updateData(EditPointView.parsePointToData(point));
  }

  get template() {
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
    const prevElement = this.element;
    const parent = prevElement.parentElement;
    this.removeElement();
    const newElement = this.element;
    parent.replaceChild(newElement, prevElement);
    this.restoreHandlers();
  }

}

_defineProperty(EditPointView, "parsePointToData", point => {
  return Object.assign({}, point, {});
});

_defineProperty(EditPointView, "parseDataToPoint", data => {
  data = Object.assign({}, data);
  return data;
});

/***/ }),

/***/ "./src/view/filters-view.js":
/*!**********************************!*\
  !*** ./src/view/filters-view.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FiltersView)
/* harmony export */ });
/* harmony import */ var _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view.js */ "./src/view/abstract-view.js");


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

class FiltersView extends _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get template() {
    return createFiltersTemplate();
  }

}

/***/ }),

/***/ "./src/view/no-point-list-view.js":
/*!****************************************!*\
  !*** ./src/view/no-point-list-view.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NoPointListView)
/* harmony export */ });
/* harmony import */ var _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view.js */ "./src/view/abstract-view.js");


const createNoPointListTemplate = () => {
  return '<p class="trip-events__msg">Click New Event to create your first point</p>';
};

class NoPointListView extends _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get template() {
    return createNoPointListTemplate();
  }

}

/***/ }),

/***/ "./src/view/point-list-view.js":
/*!*************************************!*\
  !*** ./src/view/point-list-view.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PointListView)
/* harmony export */ });
/* harmony import */ var _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view.js */ "./src/view/abstract-view.js");


const createPointListTemplate = () => {
  return '<ul class="trip-events__list"></ul>';
};

class PointListView extends _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get template() {
    return createPointListTemplate();
  }

}

/***/ }),

/***/ "./src/view/point-options-view.js":
/*!****************************************!*\
  !*** ./src/view/point-options-view.js ***!
  \****************************************/
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

/***/ "./src/view/point-types-view.js":
/*!**************************************!*\
  !*** ./src/view/point-types-view.js ***!
  \**************************************/
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

/***/ "./src/view/point-view.js":
/*!********************************!*\
  !*** ./src/view/point-view.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PointView)
/* harmony export */ });
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common.js */ "./src/utils/common.js");
/* harmony import */ var _abstract_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract-view.js */ "./src/view/abstract-view.js");



const createPointOptionsTemplate = options => {
  return options.map(option => `<li class="event__offer">
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
    isFavorite,
    offers
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
        ${createPointOptionsTemplate(offers)}
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

class PointView extends _abstract_view_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(point) {
    super();
    this._point = point;
    this._editClickHandler = this._editClickHandler.bind(this);
    this._favoriteClickHandler = this._favoriteClickHandler.bind(this);
  }

  get template() {
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
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this._editClickHandler);
  }

  setFavoriteClickHandler(callback) {
    this._callback.favoriteClick = callback;
    this.element.querySelector('.event__favorite-btn').addEventListener('click', this._favoriteClickHandler);
  }

}

/***/ }),

/***/ "./src/view/route-info-view.js":
/*!*************************************!*\
  !*** ./src/view/route-info-view.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RouteInfoView)
/* harmony export */ });
/* harmony import */ var _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view.js */ "./src/view/abstract-view.js");
/* harmony import */ var _utils_point_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/point.js */ "./src/utils/point.js");
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }




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

const createRouteInfoTemplate = points => {
  const arrDestinations = [];
  let arrPrices = [];

  for (let i = 0; i < points.length; i++) {
    arrDestinations.push(points[i].destination);
    arrPrices.push(points[i].price);
  }

  arrPrices = arrPrices > '0' ? arrPrices.reduce((total, amount) => total + amount) : '0';
  return `<section class="trip-main__trip-info  trip-info">
  <div class="trip-info__main">
    <h1 class="trip-info__title">${points.length > 1 ? displayDestinations(arrDestinations) : ''}</h1>
    <p class="trip-info__dates">${points.length > 1 ? (0,_utils_point_js__WEBPACK_IMPORTED_MODULE_1__.headerDate)(points[0].datetimeStart) + ' ' + '&mdash;' + ' ' + (0,_utils_point_js__WEBPACK_IMPORTED_MODULE_1__.headerDate)(points[points.length - 1].datetimeEnd) : ''}</p>
  </div>
  <p class="trip-info__cost">
  Total: &euro;&nbsp;<span class="trip-info__cost-value">${arrPrices}</span>
</p>
</section>`;
};

var _points = /*#__PURE__*/new WeakMap();

class RouteInfoView extends _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(points) {
    super();

    _classPrivateFieldInitSpec(this, _points, {
      writable: true,
      value: []
    });

    _classPrivateFieldSet(this, _points, points);
  }

  get template() {
    return createRouteInfoTemplate(_classPrivateFieldGet(this, _points));
  }

}

/***/ }),

/***/ "./src/view/site-menu-view.js":
/*!************************************!*\
  !*** ./src/view/site-menu-view.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SiteMenuView)
/* harmony export */ });
/* harmony import */ var _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view.js */ "./src/view/abstract-view.js");


const createSiteMenuTemplate = () => {
  return `<div class="trip-controls__navigation">
  <h2 class="visually-hidden">Switch trip view</h2>
  <nav class="trip-controls__trip-tabs  trip-tabs">
    <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
    <a class="trip-tabs__btn" href="#">Stats</a>
  </nav>
</div>`;
};

class SiteMenuView extends _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get template() {
    return createSiteMenuTemplate();
  }

}

/***/ }),

/***/ "./src/view/smart-view.js":
/*!********************************!*\
  !*** ./src/view/smart-view.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SmartView)
/* harmony export */ });
/* harmony import */ var _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view.js */ "./src/view/abstract-view.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class SmartView extends _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_data", {});

    _defineProperty(this, "updateData", (update, justDataUpdating) => {
      if (!update) {
        return;
      }

      this._data = { ...this._data,
        ...update
      };

      if (justDataUpdating) {
        return;
      }

      this.updateElement();
    });

    _defineProperty(this, "updateElement", () => {
      const prevElement = this.element;
      const parent = prevElement.parentElement;
      this.removeElement();
      const newElement = this.element;
      parent.replaceChild(newElement, prevElement);
      this.restoreHandlers();
    });

    _defineProperty(this, "restoreHandlers", () => {
      throw new Error('Abstract method not implemented: restoreHandlers');
    });
  }

}

/***/ }),

/***/ "./src/view/sort-view.js":
/*!*******************************!*\
  !*** ./src/view/sort-view.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SortView)
/* harmony export */ });
/* harmony import */ var _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view.js */ "./src/view/abstract-view.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const.js */ "./src/const.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }




const createSortingTemplate = (currentSortType, sorts) => `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
  ${sorts.map(sort => `<div class="trip-sort__item  trip-sort__item--${sort.type}">
  <input id="sort-${sort.type}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${sort.type}" ${sort.type === _const_js__WEBPACK_IMPORTED_MODULE_1__.SortType.DAY ? 'checked' : ''} ${sort.type === _const_js__WEBPACK_IMPORTED_MODULE_1__.SortType.EVENT || sort.type === _const_js__WEBPACK_IMPORTED_MODULE_1__.SortType.OFFERS ? 'disabled' : ''}>
  <label class="trip-sort__btn" for="sort-${sort.type}">${sort.type}</label>
</div>`).join('')}
    </form>`;

var _currentSortType = /*#__PURE__*/new WeakMap();

var _getSorts = /*#__PURE__*/new WeakMap();

var _sortTypeChangeHandler = /*#__PURE__*/new WeakMap();

class SortView extends _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(currentSortType) {
    super();

    _classPrivateFieldInitSpec(this, _currentSortType, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _getSorts, {
      writable: true,
      value: () => [{
        type: _const_js__WEBPACK_IMPORTED_MODULE_1__.SortType.DAY
      }, {
        type: _const_js__WEBPACK_IMPORTED_MODULE_1__.SortType.EVENT
      }, {
        type: _const_js__WEBPACK_IMPORTED_MODULE_1__.SortType.TIME
      }, {
        type: _const_js__WEBPACK_IMPORTED_MODULE_1__.SortType.PRICE
      }, {
        type: _const_js__WEBPACK_IMPORTED_MODULE_1__.SortType.OFFERS
      }]
    });

    _defineProperty(this, "setSortTypeChangeHandler", callback => {
      this._callback.sortTypeChange = callback;
      this.element.addEventListener('change', _classPrivateFieldGet(this, _sortTypeChangeHandler));
    });

    _classPrivateFieldInitSpec(this, _sortTypeChangeHandler, {
      writable: true,
      value: evt => {
        if (evt.target.tagName !== 'INPUT') {
          return;
        }

        evt.preventDefault();

        _classPrivateFieldSet(this, _currentSortType, evt.target.id);

        this._callback.sortTypeChange(evt.target.id);
      }
    });

    _classPrivateFieldSet(this, _currentSortType, currentSortType);

    console.log(_classPrivateFieldGet(this, _currentSortType));
  }

  get template() {
    return createSortingTemplate(_classPrivateFieldGet(this, _currentSortType), _classPrivateFieldGet(this, _getSorts).call(this));
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
/* harmony import */ var _view_site_menu_view_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/site-menu-view.js */ "./src/view/site-menu-view.js");
/* harmony import */ var _view_route_info_view_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/route-info-view.js */ "./src/view/route-info-view.js");
/* harmony import */ var _view_filters_view_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/filters-view.js */ "./src/view/filters-view.js");
/* harmony import */ var _presenter_trip_presenter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./presenter/trip-presenter.js */ "./src/presenter/trip-presenter.js");


dayjs__WEBPACK_IMPORTED_MODULE_0___default().extend(dayjs_plugin_isSameOrAfter__WEBPACK_IMPORTED_MODULE_1__);






const POINT_COUNT = 5;
const points = Array.from({
  length: POINT_COUNT
}, _mock_point_js__WEBPACK_IMPORTED_MODULE_3__.generatePoint);
const routeInfoComponent = new _view_route_info_view_js__WEBPACK_IMPORTED_MODULE_5__["default"](points);
const siteMenuComponent = new _view_site_menu_view_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
const filtersComponent = new _view_filters_view_js__WEBPACK_IMPORTED_MODULE_6__["default"]();
const siteHeaderContainerElement = document.querySelector('.page-header__container');
const siteTripInfoElement = siteHeaderContainerElement.querySelector('.trip-main');
const siteNavigationElement = siteHeaderContainerElement.querySelector('.trip-controls__navigation');
const siteFiltersElement = siteHeaderContainerElement.querySelector('.trip-controls__filters');
const siteMainElement = document.querySelector('.page-main');
const siteTripEventsElement = siteMainElement.querySelector('.trip-events');
(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)(siteTripInfoElement, routeInfoComponent.element, _utils_render_js__WEBPACK_IMPORTED_MODULE_2__.RenderPosition.AFTERBEGIN);
(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)(siteNavigationElement, siteMenuComponent.element, _utils_render_js__WEBPACK_IMPORTED_MODULE_2__.RenderPosition.AFTERBEGIN);
(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)(siteFiltersElement, filtersComponent.element, _utils_render_js__WEBPACK_IMPORTED_MODULE_2__.RenderPosition.AFTERBEGIN);
const tripPresenter = new _presenter_trip_presenter_js__WEBPACK_IMPORTED_MODULE_7__["default"](siteTripEventsElement);
tripPresenter.init(points);
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map