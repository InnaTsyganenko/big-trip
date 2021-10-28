/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",f="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,c=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},l={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:o,w:s,d:i,D:f,h:r,m:n,s:e,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=d;var m=function(t){return t instanceof S},D=function(t,e,n){var r;if(!t)return y;if("string"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else{var i=t.name;M[i]=t,r=i}return!n&&r&&(y=r),r||!n&&y},v=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},g=l;g.l=D,g.i=m,g.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function d(t){this.$L=D(t.locale,null,!0),this.parse(t)}var $=d.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return g},$.isValid=function(){return!("Invalid Date"===this.$d.toString())},$.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return v(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<v(t)},$.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,a){var h=this,c=!!g.u(a)||a,d=g.p(t),$=function(t,e){var n=g.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return c?n:n.endOf(i)},l=function(t,e){return g.w(h.toDate()[t].apply(h.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},y=this.$W,M=this.$M,m=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case o:return c?$(1,0):$(31,11);case u:return c?$(1,M):$(0,M+1);case s:var v=this.$locale().weekStart||0,S=(y<v?y+7:y)-v;return $(c?m-S:m+(6-S),M);case i:case f:return l(D+"Hours",0);case r:return l(D+"Minutes",1);case n:return l(D+"Seconds",2);case e:return l(D+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(s,a){var h,c=g.p(s),d="set"+(this.$u?"UTC":""),$=(h={},h[i]=d+"Date",h[f]=d+"Date",h[u]=d+"Month",h[o]=d+"FullYear",h[r]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[c],l=c===i?this.$D+(a-this.$W):a;if(c===u||c===o){var y=this.clone().set(f,1);y.$d[$](l),y.init(),this.$d=y.set(f,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[g.p(t)]()},$.add=function(t,a){var f,h=this;t=Number(t);var c=g.p(a),d=function(e){var n=v(h);return g.w(n.date(n.date()+Math.round(e*t)),h)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(f={},f[n]=6e4,f[r]=36e5,f[e]=1e3,f)[c]||1,l=this.$d.getTime()+t*$;return g.w(l,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(c,function(t,e){return e||l[t]||r.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(t,f,h){var c,d=g.p(f),$=v(t),l=6e4*($.utcOffset()-this.utcOffset()),y=this-$,M=g.m(this,$);return M=(c={},c[o]=M/12,c[u]=M,c[a]=M/3,c[s]=(y-l)/6048e5,c[i]=(y-l)/864e5,c[r]=y/36e5,c[n]=y/6e4,c[e]=y/1e3,c)[d]||y,h?M:g.a(M)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return g.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},d}(),p=S.prototype;return v.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",o],["$D",f]].forEach(function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),v.extend=function(t,e){return t(e,S,v),v},v.locale=D,v.isDayjs=m,v.unix=function(t){return v(1e3*t)},v.en=M[y],v.Ls=M,v.p={},v});


/***/ }),

/***/ "./node_modules/dayjs/plugin/isSameOrAfter.js":
/*!****************************************************!*\
  !*** ./node_modules/dayjs/plugin/isSameOrAfter.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";return function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}}});


/***/ }),

/***/ "./node_modules/nanoid/index.browser.js":
/*!**********************************************!*\
  !*** ./node_modules/nanoid/index.browser.js ***!
  \**********************************************/
/*! exports provided: nanoid, customAlphabet, customRandom, urlAlphabet, random */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nanoid", function() { return nanoid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customAlphabet", function() { return customAlphabet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customRandom", function() { return customRandom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony import */ var _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-alphabet/index.js */ "./node_modules/nanoid/url-alphabet/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "urlAlphabet", function() { return _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__["urlAlphabet"]; });

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
/*! exports provided: urlAlphabet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlAlphabet", function() { return urlAlphabet; });
// This alphabet uses `A-Za-z0-9_-` symbols. The genetic algorithm helped
// optimize the gzip compression for this alphabet.
let urlAlphabet =
  'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW'




/***/ }),

/***/ "./src/const.js":
/*!**********************!*\
  !*** ./src/const.js ***!
  \**********************/
/*! exports provided: POINT_COUNT, TYPES, DESTINATION, DESCRIPTION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POINT_COUNT", function() { return POINT_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPES", function() { return TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DESTINATION", function() { return DESTINATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DESCRIPTION", function() { return DESCRIPTION; });
const POINT_COUNT = 5;
const TYPES = ['Taxi', 'Bus', 'Train', 'Ship', 'Transport', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant'];
const DESTINATION = ['Amsterdam', 'Geneva', 'Chamonix'];
const DESCRIPTION = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis.',
  'Aliquam erat volutpat.',
  'Nunc fermentum tortor ac porta dapibus.',
  'In rutrum ac purus sit amet tempus.',
];


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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


dayjs__WEBPACK_IMPORTED_MODULE_0___default.a.extend(dayjs_plugin_isSameOrAfter__WEBPACK_IMPORTED_MODULE_1__);







const siteHeaderContainerElement = document.querySelector('.page-header__container');
const siteTripInfoElement = siteHeaderContainerElement.querySelector('.trip-main');
const siteNavigationElement = siteHeaderContainerElement.querySelector('.trip-controls__navigation');
const siteFiltersElement = siteHeaderContainerElement.querySelector('.trip-controls__filters');

const siteMainElement = document.querySelector('.page-main');
const siteTripEventsElement = siteMainElement.querySelector('.trip-events');

Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["render"])(siteTripInfoElement, new _view_route_info_js__WEBPACK_IMPORTED_MODULE_5__["default"]().getElement(), _utils_render_js__WEBPACK_IMPORTED_MODULE_2__["RenderPosition"].AFTERBEGIN);
Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["render"])(siteNavigationElement, new _view_site_menu_js__WEBPACK_IMPORTED_MODULE_4__["default"]().getElement(), _utils_render_js__WEBPACK_IMPORTED_MODULE_2__["RenderPosition"].AFTERBEGIN);
Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["render"])(siteFiltersElement, new _view_filters_js__WEBPACK_IMPORTED_MODULE_6__["default"]().getElement(), _utils_render_js__WEBPACK_IMPORTED_MODULE_2__["RenderPosition"].AFTERBEGIN);

const tripEventsPresenter = new _presenter_trip_js__WEBPACK_IMPORTED_MODULE_7__["default"](siteTripEventsElement);
tripEventsPresenter.init(_mock_point_js__WEBPACK_IMPORTED_MODULE_3__["points"]);


/***/ }),

/***/ "./src/mock/point.js":
/*!***************************!*\
  !*** ./src/mock/point.js ***!
  \***************************/
/*! exports provided: options, generatePoint, points, addPointData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generatePoint", function() { return generatePoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "points", function() { return points; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPointData", function() { return addPointData; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/common.js */ "./src/utils/common.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../const.js */ "./src/const.js");





const options = [
  {
    id: 1,
    value: 'luggage',
    title: 'Add luggage',
    price: 30,
    isChecked: Boolean(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(0, 1)),
  }, {
    id: 2,
    value: 'comfort',
    title: 'Switch to comfort class',
    price: 100,
    isChecked: Boolean(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(0, 1)),
  }, {
    id: 3,
    value: 'meal',
    title: 'Add meal',
    price: 15,
    isChecked: Boolean(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(0, 1)),
  }, {
    id: 4,
    value: 'seats',
    title: 'Choose seats',
    price: 5,
    isChecked: Boolean(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(0, 1)),
  }, {
    id: 5,
    value: 'train',
    title: 'Travel by train',
    price: 40,
    isChecked: Boolean(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(0, 1)),
  },
];

const generatePoint = () => {
  const datetimeStart = dayjs__WEBPACK_IMPORTED_MODULE_0___default()().add(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(-3000, 3000), 'm');
  const datetimeEnd = datetimeStart.add(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(100, 3000), 'm');
  const duration = datetimeEnd.diff(datetimeStart, 'm');

  return {
    id: Object(nanoid__WEBPACK_IMPORTED_MODULE_1__["nanoid"])(),
    type: _const_js__WEBPACK_IMPORTED_MODULE_3__["TYPES"][Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(0, _const_js__WEBPACK_IMPORTED_MODULE_3__["TYPES"].length - 1)],
    destination: _const_js__WEBPACK_IMPORTED_MODULE_3__["DESTINATION"][Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(0, _const_js__WEBPACK_IMPORTED_MODULE_3__["DESTINATION"].length - 1)],
    datetimeStart,
    datetimeEnd,
    duration,
    price: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(20, 200),
    description: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["getRandomArrayElements"])(_const_js__WEBPACK_IMPORTED_MODULE_3__["DESCRIPTION"], 1),
    photos: 'http://picsum.photos/248/152?r=',
    offers: [1, 2, 3],
    isFavorite: Boolean(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(0, 1)),
  };
};

const points = new Array(_const_js__WEBPACK_IMPORTED_MODULE_3__["POINT_COUNT"]).fill().map(generatePoint).sort((a, b) => a.datetimeStart - b.datetimeStart).slice(1);
const addPointData = new Array(1).fill().map(generatePoint);


/***/ }),

/***/ "./src/presenter/add-point.js":
/*!************************************!*\
  !*** ./src/presenter/add-point.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddPoint; });
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common.js */ "./src/utils/common.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");
/* harmony import */ var _mock_point_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mock/point.js */ "./src/mock/point.js");
/* harmony import */ var _view_no_point_list_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/no-point-list.js */ "./src/view/no-point-list.js");
/* harmony import */ var _view_add_point_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view/add-point.js */ "./src/view/add-point.js");






const ModeAddPoint = {
  DEFAULT: 'DEFAULT',
  SHOW: 'SHOW',
};

class AddPoint {
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
      ((this._pointListContainer.getElement().querySelector('.event--edit'))) ?
        this._pointListContainer.getElement().querySelector('.event--edit').querySelector('.event__rollup-btn').click() : false;
      (this._body.querySelector('.trip-events__msg')) ?
        this._body.querySelector('.trip-events__msg').style = 'display: none;' : false;
      this._sortDayInput.checked = true;
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["render"])(this._pointListContainer, this._addPointComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].AFTERBEGIN);
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
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["render"])(this._siteTripEventsElement, new _view_no_point_list_js__WEBPACK_IMPORTED_MODULE_3__["default"]().getElement(), _utils_render_js__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].BEFOREEND);
    }
    this._body.removeEventListener('keydown', this._escKeyDownHandler);
  }

  _closeAddForm() {
    if (this._mode == ModeAddPoint.SHOW) {
      this._mode = ModeAddPoint.DEFAULT;
      this._pointListContainer.getElement().querySelector('.trip-events__item').remove();
      this._addPointButton.disabled = false;
      (_mock_point_js__WEBPACK_IMPORTED_MODULE_2__["points"].length === 0) ?
        this._siteMainElement.querySelector('.trip-events__msg').style = 'display: block;' : false;
    }
  }

  _escKeyDownHandler(evt) {
    if (Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["isEscEvent"])(evt)) {
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Point; });
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common.js */ "./src/utils/common.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");
/* harmony import */ var _view_no_point_list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/no-point-list.js */ "./src/view/no-point-list.js");
/* harmony import */ var _view_point_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/point.js */ "./src/view/point.js");
/* harmony import */ var _view_edit_point_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view/edit-point.js */ "./src/view/edit-point.js");






const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
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
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["render"])(this._pointListContainer, this._pointComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].BEFOREEND);
      return;
    }

    if (this._mode === Mode.DEFAULT) {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["replace"])(this._pointComponent, prevPointComponent);
    }

    if (this._mode === Mode.EDITING) {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["replace"])(this._pointEditComponent, prevPointEditComponent);
    }

    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["remove"])(prevPointComponent);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["remove"])(prevPointEditComponent);
  }

  resetView() {
    if (this._mode !== Mode.DEFAULT) {
      this._replaceFormToCard();
    }
  }

  destroy() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["remove"])(this._pointComponent);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["remove"])(this._pointEditComponent);
  }

  _replaceCardToForm() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["replace"])(this._pointEditComponent, this._pointComponent);
    this._changeMode();
    this._mode = Mode.EDITING;
    this._body.addEventListener('keydown', this._escKeyDownHandler);
  }

  _replaceFormToCard() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["replace"])(this._pointComponent, this._pointEditComponent);
    this._mode = Mode.DEFAULT;
    this._body.removeEventListener('keydown', this._escKeyDownHandler);
  }

  _escKeyDownHandler(evt) {
    if (Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["isEscEvent"])(evt)) {
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
    this._changeData(
      Object.assign(
        {},
        this._point,
        {
          isFavorite: !this._point.isFavorite,
        },
      ),
    );
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
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["remove"])(this._pointEditComponent);
    if (this._pointListContainer.getElement().querySelector('.trip-events__item') === null) {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["render"])(this._siteTripEventsElement, new _view_no_point_list_js__WEBPACK_IMPORTED_MODULE_2__["default"]().getElement(), _utils_render_js__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].BEFOREEND);
    }
    this._body.removeEventListener('keydown', this._escKeyDownHandler);
  }
}


/***/ }),

/***/ "./src/presenter/trip.js":
/*!*******************************!*\
  !*** ./src/presenter/trip.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TripEvents; });
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
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["render"])(this._siteTripEventsElement, this._pointListComponent.getElement(), _utils_render_js__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].BEFOREEND);
    this._renderTripEvents();
  }

  _handlePointChange(updatedPoint) {
    this._tripEvents = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["updateItem"])(this._tripEvents, updatedPoint);
    this._sourcedTripEvents = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["updateItem"])(this._tripEvents, updatedPoint);
    this._pointPresenter[updatedPoint.id].init(updatedPoint);
  }

  _handleModeChange() {
    Object
      .values(this._pointPresenter)
      .forEach((presenter) => presenter.resetView());
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
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["render"])(this._siteTripEventsElement, this._sortingComponent.getElement(), _utils_render_js__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].AFTERBEGIN);
    this._sortingComponent.setSortTypeChangeHandler(this._handleSortTypeChange);
  }

  _renderNoPointsList() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["render"])(this._siteTripEventsElement, this._noPointListComponent.getElement(), _utils_render_js__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].BEFOREEND);
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
    this._tripEvents.forEach((tripEvent) => this._renderPoint(tripEvent));
  }

  _renderTripEvents() {
    this._renderSorting();
    (_mock_point_js__WEBPACK_IMPORTED_MODULE_2__["points"].length === 0) ? this._renderNoPointsList()
      : this._renderPoints();
    this._renderAddPoint(_mock_point_js__WEBPACK_IMPORTED_MODULE_2__["addPointData"][0]);
  }

  _clearPointList() {
    Object
      .values(this._pointPresenter)
      .forEach((presenter) => presenter.destroy());
    this._pointPresenter = {};
  }
}


/***/ }),

/***/ "./src/utils/common.js":
/*!*****************************!*\
  !*** ./src/utils/common.js ***!
  \*****************************/
/*! exports provided: getRandomInteger, getRandomArrayElements, isEscEvent, isInPage, updateItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInteger", function() { return getRandomInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomArrayElements", function() { return getRandomArrayElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEscEvent", function() { return isEscEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInPage", function() { return isInPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateItem", function() { return updateItem; });
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
  return (shuffledArr.slice(min));
};

const isEscEvent = (evt) => {
  return evt.key === ('Escape' || false);
};

const isInPage = (node) => {
  return (node === document.body) ? false : document.body.contains(node);
};

const updateItem = (items, update) => {
  const index = items.findIndex((item) => item.id === update.id);

  if (index === -1) {
    return items;
  }

  return [
    ...items.slice(0, index),
    update,
    ...items.slice(index + 1),
  ];
};


/***/ }),

/***/ "./src/utils/point.js":
/*!****************************!*\
  !*** ./src/utils/point.js ***!
  \****************************/
/*! exports provided: headerDate, newPointDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerDate", function() { return headerDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newPointDate", function() { return newPointDate; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);


const headerDate = (date) => {
  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).format('DD MMM');
};

const newPointDate = (date) => {
  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).format('DD/MM/YY HH:mm');
};


/***/ }),

/***/ "./src/utils/render.js":
/*!*****************************!*\
  !*** ./src/utils/render.js ***!
  \*****************************/
/*! exports provided: RenderPosition, render, makeElement, replace, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPosition", function() { return RenderPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeElement", function() { return makeElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return replace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony import */ var _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/abstract.js */ "./src/view/abstract.js");


const RenderPosition = {
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
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

const makeElement = (template) => {
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

const remove = (component) => {
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AbstractView; });
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
      this._element = Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_0__["makeElement"])(this.getTemplate());
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddPointView; });
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
  isFavorite: '',
};

const createAddPointTemplate = (point = {}) => {
  const {type, destination, datetimeStart, datetimeEnd, price, description, photos, offers} = point;

  const typesTemplate = Object(_point_types_js__WEBPACK_IMPORTED_MODULE_3__["createPointTypesTemplate"])(type);
  const offersTemplate = Object(_point_options_js__WEBPACK_IMPORTED_MODULE_4__["createPointAvailableOptionsTemplate"])(offers);
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
      <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${Object(_utils_point_js__WEBPACK_IMPORTED_MODULE_2__["newPointDate"])(datetimeStart)}">
      &mdash;
      <label class="visually-hidden" for="event-end-time-1">To</label>
      <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${Object(_utils_point_js__WEBPACK_IMPORTED_MODULE_2__["newPointDate"])(datetimeEnd)}">
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
  ${_point_options_js__WEBPACK_IMPORTED_MODULE_4__["randomAvailableOptions"].length !== 0 ? `<section class="event__section  event__section--offers">
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
          <img class="event__photo" src="${photos + Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1, 15)}" alt="Event photo">
          <img class="event__photo" src="${photos + Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1, 15)}" alt="Event photo">
          <img class="event__photo" src="${photos + Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1, 15)}" alt="Event photo">
          <img class="event__photo" src="${photos + Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1, 15)}" alt="Event photo">
          <img class="event__photo" src="${photos + Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1, 15)}" alt="Event photo">
        </div>
      </div>
    </section>` : ''}
  </section>
</form>
</li>`;
};

class AddPointView extends _abstract_js__WEBPACK_IMPORTED_MODULE_1__["default"]{
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditPointView; });
/* harmony import */ var _point_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point-types.js */ "./src/view/point-types.js");
/* harmony import */ var _point_options_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./point-options.js */ "./src/view/point-options.js");
/* harmony import */ var _utils_point_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/point.js */ "./src/utils/point.js");
/* harmony import */ var _smart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./smart.js */ "./src/view/smart.js");





const createEditPointTemplate = (data) => {
  const {type, destination, datetimeStart, datetimeEnd, price, description, offers} = data;

  const typePointsTemplate = Object(_point_types_js__WEBPACK_IMPORTED_MODULE_0__["createPointTypesTemplate"])(type);
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
      <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${Object(_utils_point_js__WEBPACK_IMPORTED_MODULE_2__["newPointDate"])(datetimeStart)}">
      &mdash;
      <label class="visually-hidden" for="event-end-time-1">To</label>
      <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${Object(_utils_point_js__WEBPACK_IMPORTED_MODULE_2__["newPointDate"])(datetimeEnd)}">
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
    ${_point_options_js__WEBPACK_IMPORTED_MODULE_1__["randomAvailableOptions"].length !== 0 ? `<section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>
        <div class="event__available-offers">
          ${Object(_point_options_js__WEBPACK_IMPORTED_MODULE_1__["createPointAvailableOptionsTemplate"])(offers)}
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

class EditPointView extends _smart_js__WEBPACK_IMPORTED_MODULE_3__["default"]{
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
    this.updateData(
      EditPointView.parsePointToData(point),
    );
  }

  getTemplate() {
    return createEditPointTemplate(this._data);
  }

  updateData(update) {
    if (!update) {
      return;
    }

    this._data = Object.assign(
      {},
      this._data,
      update,
    );

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
    this.getElement()
      .querySelector('.event__type-group')
      .addEventListener('change', this._typePointToggleHandler);
  }

  _typePointToggleHandler(evt) {
    evt.preventDefault();
    this.updateData({
      type: evt.target.value,
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
    return Object.assign(
      {},
      point,
      {
      },
    );
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FiltersView; });
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

class FiltersView extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]{
  getTemplate() {
    return createFiltersTemplate();
  }
}


/***/ }),

/***/ "./src/view/no-point-list.js":
/*!***********************************!*\
  !*** ./src/view/no-point-list.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NoPointListView; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createNoPointListTemplate = () => {
  return '<p class="trip-events__msg">Click New Event to create your first point</p>';
};

class NoPointListView extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]{
  getTemplate() {
    return createNoPointListTemplate();
  }
}


/***/ }),

/***/ "./src/view/point-list.js":
/*!********************************!*\
  !*** ./src/view/point-list.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PointListView; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createPointListTemplate = () => {
  return '<ul class="trip-events__list"></ul>';
};

class PointListView extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]{
  getTemplate() {
    return createPointListTemplate();
  }
}


/***/ }),

/***/ "./src/view/point-options.js":
/*!***********************************!*\
  !*** ./src/view/point-options.js ***!
  \***********************************/
/*! exports provided: randomAvailableOptions, createPointAvailableOptionsTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomAvailableOptions", function() { return randomAvailableOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPointAvailableOptionsTemplate", function() { return createPointAvailableOptionsTemplate; });
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common.js */ "./src/utils/common.js");
/* harmony import */ var _mock_point_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mock/point.js */ "./src/mock/point.js");



const randomAvailableOptions = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomArrayElements"])(_mock_point_js__WEBPACK_IMPORTED_MODULE_1__["options"], 0);
const createPointAvailableOptionsTemplate = () => {
  return randomAvailableOptions.map((option) => `<div class="event__offer-selector">
  <input class="event__offer-checkbox  visually-hidden" id="event-offer-${option.value}-1" type="checkbox" name="event-offer-${option.value}" ${(option.isChecked) ? 'checked' : ''}>
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
/*! exports provided: createPointTypesTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPointTypesTemplate", function() { return createPointTypesTemplate; });
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const.js */ "./src/const.js");


const createPointTypesTemplate = (currentType) => {
  return _const_js__WEBPACK_IMPORTED_MODULE_0__["TYPES"].map((type) => `<div class="event__type-item">
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PointView; });
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common.js */ "./src/utils/common.js");
/* harmony import */ var _mock_point_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mock/point.js */ "./src/mock/point.js");
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");




const createPointOptionsTemplate = () => {
  const randomOffers = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomArrayElements"])(_mock_point_js__WEBPACK_IMPORTED_MODULE_1__["options"], 0);
  return randomOffers.map((option) => `<li class="event__offer">
  <span class="event__offer-title"style="white-space: pre;">${option.title}</span>&plus;&euro;&nbsp;
  <span class="event__offer-price">${option.price}</span>
  </li>`).join('\n');
};

const createPointTemplate = (point) => {
  const {type, destination, datetimeStart, datetimeEnd, duration, price, isFavorite} = point;

  const calcDuration = () => {
    let result = duration + 'M';
    if (duration >= 60 & duration < 1440) {
      const hours = Math.floor(duration / 60).toString();
      const minutes = (duration % 60).toString();
      result = (hours.length === 1 ? '0' : '') + hours + 'H ' + (minutes.length === 1 ? '0' : '') + minutes + 'M';
    } else if (duration > 1440) {
      const days = Math.floor(duration / 1440).toString();
      const hours = Math.floor(duration % 1440 / 60).toString();
      const minutes = ((duration % 1440 % 60)).toString();
      result = (days.length === 1 ? '0' : '') + days + 'D ' + (hours.length === 1 ? '0' : '') + hours + 'H ' + (minutes.length === 1 ? '0' : '') + minutes + 'M';
    }
    return result;
  };

  const favoriteClassName = isFavorite
    ? 'event__favorite-btn event__favorite-btn--active'
    : 'event__favorite-btn';

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

class PointView extends _abstract_js__WEBPACK_IMPORTED_MODULE_2__["default"]{
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RouteInfoView; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");
/* harmony import */ var _utils_point_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/point.js */ "./src/utils/point.js");
/* harmony import */ var _mock_point_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mock/point.js */ "./src/mock/point.js");





const displayDestinations = (dest) => {
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
  for (let i = 0; i < _mock_point_js__WEBPACK_IMPORTED_MODULE_2__["points"].length; i++) {
    arrDestinations.push(_mock_point_js__WEBPACK_IMPORTED_MODULE_2__["points"][i].destination);
    arrPrices.push(_mock_point_js__WEBPACK_IMPORTED_MODULE_2__["points"][i].price);
  }

  arrPrices = arrPrices > '0' ? arrPrices.reduce((total, amount) => total + amount) : '0';
  return `<section class="trip-main__trip-info  trip-info">
  <div class="trip-info__main">
    <h1 class="trip-info__title">${_mock_point_js__WEBPACK_IMPORTED_MODULE_2__["points"].length > 1 ? displayDestinations(arrDestinations) : ''}</h1>
    <p class="trip-info__dates">${_mock_point_js__WEBPACK_IMPORTED_MODULE_2__["points"].length > 1 ? Object(_utils_point_js__WEBPACK_IMPORTED_MODULE_1__["headerDate"])(_mock_point_js__WEBPACK_IMPORTED_MODULE_2__["points"][0].datetimeStart) + ' ' + '&mdash;' + ' ' + Object(_utils_point_js__WEBPACK_IMPORTED_MODULE_1__["headerDate"])(_mock_point_js__WEBPACK_IMPORTED_MODULE_2__["points"][_mock_point_js__WEBPACK_IMPORTED_MODULE_2__["points"].length - 1].datetimeEnd) : ''}</p>
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SiteMenuView; });
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

class SiteMenuView extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]{
  getTemplate() {
    return createSiteMenuTemplate();
  }
}


/***/ }),

/***/ "./src/view/smart.js":
/*!***************************!*\
  !*** ./src/view/smart.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SmartView; });
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

    this._data = Object.assign(
      {},
      this._data,
      update,
    );

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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SortingView; });
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

class SortingView extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
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


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map