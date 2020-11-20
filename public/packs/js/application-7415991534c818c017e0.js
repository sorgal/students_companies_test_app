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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/application.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/channels sync recursive _channel\\.js$":
/*!****************************************************!*\
  !*** ./app/javascript/channels sync _channel\.js$ ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./app/javascript/channels sync recursive _channel\\.js$";

/***/ }),

/***/ "./app/javascript/channels/index.js":
/*!******************************************!*\
  !*** ./app/javascript/channels/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.
var channels = __webpack_require__("./app/javascript/channels sync recursive _channel\\.js$");

channels.keys().forEach(channels);

/***/ }),

/***/ "./app/javascript/components sync recursive ^\\.\\/.*$":
/*!*************************************************!*\
  !*** ./app/javascript/components sync ^\.\/.*$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./HelloWorld": "./app/javascript/components/HelloWorld.jsx",
	"./HelloWorld.jsx": "./app/javascript/components/HelloWorld.jsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./app/javascript/components sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./app/javascript/components/HelloWorld.jsx":
/*!**************************************************!*\
  !*** ./app/javascript/components/HelloWorld.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/sorgal/work/students_companies_test_app/app/javascript/components/HelloWorld.jsx";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var HelloWorld = /*#__PURE__*/function (_React$Component) {
  _inherits(HelloWorld, _React$Component);

  var _super = _createSuper(HelloWorld);

  function HelloWorld() {
    _classCallCheck(this, HelloWorld);

    return _super.apply(this, arguments);
  }

  _createClass(HelloWorld, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6,
          columnNumber: 7
        }
      }, "Greeting: ", this.props.greeting);
    }
  }]);

  return HelloWorld;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

HelloWorld.propTypes = {
  greeting: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (HelloWorld);

/***/ }),

/***/ "./app/javascript/packs/application.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/application.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
__webpack_require__(/*! @rails/ujs */ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js").start();

__webpack_require__(/*! @rails/activestorage */ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js").start();

__webpack_require__(/*! channels */ "./app/javascript/channels/index.js"); // Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
// Support component names relative to this directory:


var componentRequireContext = __webpack_require__("./app/javascript/components sync recursive ^\\.\\/.*$");

var ReactRailsUJS = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react_ujs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

ReactRailsUJS.useContext(componentRequireContext);

/***/ }),

/***/ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === "object" && typeof module !== "undefined" ? factory(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (exports) {
  "use strict";

  function createCommonjsModule(fn, module) {
    return module = {
      exports: {}
    }, fn(module, module.exports), module.exports;
  }

  var sparkMd5 = createCommonjsModule(function (module, exports) {
    (function (factory) {
      {
        module.exports = factory();
      }
    })(function (undefined) {
      var hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

      function md5cycle(x, k) {
        var a = x[0],
            b = x[1],
            c = x[2],
            d = x[3];
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
      }

      function md5blk(s) {
        var md5blks = [],
            i;

        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
        }

        return md5blks;
      }

      function md5blk_array(a) {
        var md5blks = [],
            i;

        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
        }

        return md5blks;
      }

      function md51(s) {
        var n = s.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk(s.substring(i - 64, i)));
        }

        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
        }

        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(state, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }

      function md51_array(a) {
        var n = a.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
        }

        a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= a[i] << (i % 4 << 3);
        }

        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(state, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }

      function rhex(n) {
        var s = "",
            j;

        for (j = 0; j < 4; j += 1) {
          s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15];
        }

        return s;
      }

      function hex(x) {
        var i;

        for (i = 0; i < x.length; i += 1) {
          x[i] = rhex(x[i]);
        }

        return x.join("");
      }

      if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") ;

      if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
        (function () {
          function clamp(val, length) {
            val = val | 0 || 0;

            if (val < 0) {
              return Math.max(val + length, 0);
            }

            return Math.min(val, length);
          }

          ArrayBuffer.prototype.slice = function (from, to) {
            var length = this.byteLength,
                begin = clamp(from, length),
                end = length,
                num,
                target,
                targetArray,
                sourceArray;

            if (to !== undefined) {
              end = clamp(to, length);
            }

            if (begin > end) {
              return new ArrayBuffer(0);
            }

            num = end - begin;
            target = new ArrayBuffer(num);
            targetArray = new Uint8Array(target);
            sourceArray = new Uint8Array(this, begin, num);
            targetArray.set(sourceArray);
            return target;
          };
        })();
      }

      function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
          str = unescape(encodeURIComponent(str));
        }

        return str;
      }

      function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length,
            buff = new ArrayBuffer(length),
            arr = new Uint8Array(buff),
            i;

        for (i = 0; i < length; i += 1) {
          arr[i] = str.charCodeAt(i);
        }

        return returnUInt8Array ? arr : buff;
      }

      function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff));
      }

      function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);
        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);
        return returnUInt8Array ? result : result.buffer;
      }

      function hexToBinaryString(hex) {
        var bytes = [],
            length = hex.length,
            x;

        for (x = 0; x < length - 1; x += 2) {
          bytes.push(parseInt(hex.substr(x, 2), 16));
        }

        return String.fromCharCode.apply(String, bytes);
      }

      function SparkMD5() {
        this.reset();
      }

      SparkMD5.prototype.append = function (str) {
        this.appendBinary(toUtf8(str));
        return this;
      };

      SparkMD5.prototype.appendBinary = function (contents) {
        this._buff += contents;
        this._length += contents.length;
        var length = this._buff.length,
            i;

        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
        }

        this._buff = this._buff.substring(i - 64);
        return this;
      };

      SparkMD5.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            i,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ret;

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3);
        }

        this._finish(tail, length);

        ret = hex(this._hash);

        if (raw) {
          ret = hexToBinaryString(ret);
        }

        this.reset();
        return ret;
      };

      SparkMD5.prototype.reset = function () {
        this._buff = "";
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };

      SparkMD5.prototype.getState = function () {
        return {
          buff: this._buff,
          length: this._length,
          hash: this._hash
        };
      };

      SparkMD5.prototype.setState = function (state) {
        this._buff = state.buff;
        this._length = state.length;
        this._hash = state.hash;
        return this;
      };

      SparkMD5.prototype.destroy = function () {
        delete this._hash;
        delete this._buff;
        delete this._length;
      };

      SparkMD5.prototype._finish = function (tail, length) {
        var i = length,
            tmp,
            lo,
            hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(this._hash, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = this._length * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this._hash, tail);
      };

      SparkMD5.hash = function (str, raw) {
        return SparkMD5.hashBinary(toUtf8(str), raw);
      };

      SparkMD5.hashBinary = function (content, raw) {
        var hash = md51(content),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };

      SparkMD5.ArrayBuffer = function () {
        this.reset();
      };

      SparkMD5.ArrayBuffer.prototype.append = function (arr) {
        var buff = concatenateArrayBuffers(this._buff.buffer, arr, true),
            length = buff.length,
            i;
        this._length += arr.byteLength;

        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
        }

        this._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this;
      };

      SparkMD5.ArrayBuffer.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            i,
            ret;

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff[i] << (i % 4 << 3);
        }

        this._finish(tail, length);

        ret = hex(this._hash);

        if (raw) {
          ret = hexToBinaryString(ret);
        }

        this.reset();
        return ret;
      };

      SparkMD5.ArrayBuffer.prototype.reset = function () {
        this._buff = new Uint8Array(0);
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };

      SparkMD5.ArrayBuffer.prototype.getState = function () {
        var state = SparkMD5.prototype.getState.call(this);
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state;
      };

      SparkMD5.ArrayBuffer.prototype.setState = function (state) {
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD5.prototype.setState.call(this, state);
      };

      SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
      SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;

      SparkMD5.ArrayBuffer.hash = function (arr, raw) {
        var hash = md51_array(new Uint8Array(arr)),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };

      return SparkMD5;
    });
  });

  var classCallCheck = function classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var fileSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;

  var FileChecksum = function () {
    createClass(FileChecksum, null, [{
      key: "create",
      value: function create(file, callback) {
        var instance = new FileChecksum(file);
        instance.create(callback);
      }
    }]);

    function FileChecksum(file) {
      classCallCheck(this, FileChecksum);
      this.file = file;
      this.chunkSize = 2097152;
      this.chunkCount = Math.ceil(this.file.size / this.chunkSize);
      this.chunkIndex = 0;
    }

    createClass(FileChecksum, [{
      key: "create",
      value: function create(callback) {
        var _this = this;

        this.callback = callback;
        this.md5Buffer = new sparkMd5.ArrayBuffer();
        this.fileReader = new FileReader();
        this.fileReader.addEventListener("load", function (event) {
          return _this.fileReaderDidLoad(event);
        });
        this.fileReader.addEventListener("error", function (event) {
          return _this.fileReaderDidError(event);
        });
        this.readNextChunk();
      }
    }, {
      key: "fileReaderDidLoad",
      value: function fileReaderDidLoad(event) {
        this.md5Buffer.append(event.target.result);

        if (!this.readNextChunk()) {
          var binaryDigest = this.md5Buffer.end(true);
          var base64digest = btoa(binaryDigest);
          this.callback(null, base64digest);
        }
      }
    }, {
      key: "fileReaderDidError",
      value: function fileReaderDidError(event) {
        this.callback("Error reading " + this.file.name);
      }
    }, {
      key: "readNextChunk",
      value: function readNextChunk() {
        if (this.chunkIndex < this.chunkCount || this.chunkIndex == 0 && this.chunkCount == 0) {
          var start = this.chunkIndex * this.chunkSize;
          var end = Math.min(start + this.chunkSize, this.file.size);
          var bytes = fileSlice.call(this.file, start, end);
          this.fileReader.readAsArrayBuffer(bytes);
          this.chunkIndex++;
          return true;
        } else {
          return false;
        }
      }
    }]);
    return FileChecksum;
  }();

  function getMetaValue(name) {
    var element = findElement(document.head, 'meta[name="' + name + '"]');

    if (element) {
      return element.getAttribute("content");
    }
  }

  function findElements(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }

    var elements = root.querySelectorAll(selector);
    return toArray$1(elements);
  }

  function findElement(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }

    return root.querySelector(selector);
  }

  function dispatchEvent(element, type) {
    var eventInit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var disabled = element.disabled;
    var bubbles = eventInit.bubbles,
        cancelable = eventInit.cancelable,
        detail = eventInit.detail;
    var event = document.createEvent("Event");
    event.initEvent(type, bubbles || true, cancelable || true);
    event.detail = detail || {};

    try {
      element.disabled = false;
      element.dispatchEvent(event);
    } finally {
      element.disabled = disabled;
    }

    return event;
  }

  function toArray$1(value) {
    if (Array.isArray(value)) {
      return value;
    } else if (Array.from) {
      return Array.from(value);
    } else {
      return [].slice.call(value);
    }
  }

  var BlobRecord = function () {
    function BlobRecord(file, checksum, url) {
      var _this = this;

      classCallCheck(this, BlobRecord);
      this.file = file;
      this.attributes = {
        filename: file.name,
        content_type: file.type || "application/octet-stream",
        byte_size: file.size,
        checksum: checksum
      };
      this.xhr = new XMLHttpRequest();
      this.xhr.open("POST", url, true);
      this.xhr.responseType = "json";
      this.xhr.setRequestHeader("Content-Type", "application/json");
      this.xhr.setRequestHeader("Accept", "application/json");
      this.xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      var csrfToken = getMetaValue("csrf-token");

      if (csrfToken != undefined) {
        this.xhr.setRequestHeader("X-CSRF-Token", csrfToken);
      }

      this.xhr.addEventListener("load", function (event) {
        return _this.requestDidLoad(event);
      });
      this.xhr.addEventListener("error", function (event) {
        return _this.requestDidError(event);
      });
    }

    createClass(BlobRecord, [{
      key: "create",
      value: function create(callback) {
        this.callback = callback;
        this.xhr.send(JSON.stringify({
          blob: this.attributes
        }));
      }
    }, {
      key: "requestDidLoad",
      value: function requestDidLoad(event) {
        if (this.status >= 200 && this.status < 300) {
          var response = this.response;
          var direct_upload = response.direct_upload;
          delete response.direct_upload;
          this.attributes = response;
          this.directUploadData = direct_upload;
          this.callback(null, this.toJSON());
        } else {
          this.requestDidError(event);
        }
      }
    }, {
      key: "requestDidError",
      value: function requestDidError(event) {
        this.callback('Error creating Blob for "' + this.file.name + '". Status: ' + this.status);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var result = {};

        for (var key in this.attributes) {
          result[key] = this.attributes[key];
        }

        return result;
      }
    }, {
      key: "status",
      get: function get$$1() {
        return this.xhr.status;
      }
    }, {
      key: "response",
      get: function get$$1() {
        var _xhr = this.xhr,
            responseType = _xhr.responseType,
            response = _xhr.response;

        if (responseType == "json") {
          return response;
        } else {
          return JSON.parse(response);
        }
      }
    }]);
    return BlobRecord;
  }();

  var BlobUpload = function () {
    function BlobUpload(blob) {
      var _this = this;

      classCallCheck(this, BlobUpload);
      this.blob = blob;
      this.file = blob.file;
      var _blob$directUploadDat = blob.directUploadData,
          url = _blob$directUploadDat.url,
          headers = _blob$directUploadDat.headers;
      this.xhr = new XMLHttpRequest();
      this.xhr.open("PUT", url, true);
      this.xhr.responseType = "text";

      for (var key in headers) {
        this.xhr.setRequestHeader(key, headers[key]);
      }

      this.xhr.addEventListener("load", function (event) {
        return _this.requestDidLoad(event);
      });
      this.xhr.addEventListener("error", function (event) {
        return _this.requestDidError(event);
      });
    }

    createClass(BlobUpload, [{
      key: "create",
      value: function create(callback) {
        this.callback = callback;
        this.xhr.send(this.file.slice());
      }
    }, {
      key: "requestDidLoad",
      value: function requestDidLoad(event) {
        var _xhr = this.xhr,
            status = _xhr.status,
            response = _xhr.response;

        if (status >= 200 && status < 300) {
          this.callback(null, response);
        } else {
          this.requestDidError(event);
        }
      }
    }, {
      key: "requestDidError",
      value: function requestDidError(event) {
        this.callback('Error storing "' + this.file.name + '". Status: ' + this.xhr.status);
      }
    }]);
    return BlobUpload;
  }();

  var id = 0;

  var DirectUpload = function () {
    function DirectUpload(file, url, delegate) {
      classCallCheck(this, DirectUpload);
      this.id = ++id;
      this.file = file;
      this.url = url;
      this.delegate = delegate;
    }

    createClass(DirectUpload, [{
      key: "create",
      value: function create(callback) {
        var _this = this;

        FileChecksum.create(this.file, function (error, checksum) {
          if (error) {
            callback(error);
            return;
          }

          var blob = new BlobRecord(_this.file, checksum, _this.url);
          notify(_this.delegate, "directUploadWillCreateBlobWithXHR", blob.xhr);
          blob.create(function (error) {
            if (error) {
              callback(error);
            } else {
              var upload = new BlobUpload(blob);
              notify(_this.delegate, "directUploadWillStoreFileWithXHR", upload.xhr);
              upload.create(function (error) {
                if (error) {
                  callback(error);
                } else {
                  callback(null, blob.toJSON());
                }
              });
            }
          });
        });
      }
    }]);
    return DirectUpload;
  }();

  function notify(object, methodName) {
    if (object && typeof object[methodName] == "function") {
      for (var _len = arguments.length, messages = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        messages[_key - 2] = arguments[_key];
      }

      return object[methodName].apply(object, messages);
    }
  }

  var DirectUploadController = function () {
    function DirectUploadController(input, file) {
      classCallCheck(this, DirectUploadController);
      this.input = input;
      this.file = file;
      this.directUpload = new DirectUpload(this.file, this.url, this);
      this.dispatch("initialize");
    }

    createClass(DirectUploadController, [{
      key: "start",
      value: function start(callback) {
        var _this = this;

        var hiddenInput = document.createElement("input");
        hiddenInput.type = "hidden";
        hiddenInput.name = this.input.name;
        this.input.insertAdjacentElement("beforebegin", hiddenInput);
        this.dispatch("start");
        this.directUpload.create(function (error, attributes) {
          if (error) {
            hiddenInput.parentNode.removeChild(hiddenInput);

            _this.dispatchError(error);
          } else {
            hiddenInput.value = attributes.signed_id;
          }

          _this.dispatch("end");

          callback(error);
        });
      }
    }, {
      key: "uploadRequestDidProgress",
      value: function uploadRequestDidProgress(event) {
        var progress = event.loaded / event.total * 100;

        if (progress) {
          this.dispatch("progress", {
            progress: progress
          });
        }
      }
    }, {
      key: "dispatch",
      value: function dispatch(name) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        detail.file = this.file;
        detail.id = this.directUpload.id;
        return dispatchEvent(this.input, "direct-upload:" + name, {
          detail: detail
        });
      }
    }, {
      key: "dispatchError",
      value: function dispatchError(error) {
        var event = this.dispatch("error", {
          error: error
        });

        if (!event.defaultPrevented) {
          alert(error);
        }
      }
    }, {
      key: "directUploadWillCreateBlobWithXHR",
      value: function directUploadWillCreateBlobWithXHR(xhr) {
        this.dispatch("before-blob-request", {
          xhr: xhr
        });
      }
    }, {
      key: "directUploadWillStoreFileWithXHR",
      value: function directUploadWillStoreFileWithXHR(xhr) {
        var _this2 = this;

        this.dispatch("before-storage-request", {
          xhr: xhr
        });
        xhr.upload.addEventListener("progress", function (event) {
          return _this2.uploadRequestDidProgress(event);
        });
      }
    }, {
      key: "url",
      get: function get$$1() {
        return this.input.getAttribute("data-direct-upload-url");
      }
    }]);
    return DirectUploadController;
  }();

  var inputSelector = "input[type=file][data-direct-upload-url]:not([disabled])";

  var DirectUploadsController = function () {
    function DirectUploadsController(form) {
      classCallCheck(this, DirectUploadsController);
      this.form = form;
      this.inputs = findElements(form, inputSelector).filter(function (input) {
        return input.files.length;
      });
    }

    createClass(DirectUploadsController, [{
      key: "start",
      value: function start(callback) {
        var _this = this;

        var controllers = this.createDirectUploadControllers();

        var startNextController = function startNextController() {
          var controller = controllers.shift();

          if (controller) {
            controller.start(function (error) {
              if (error) {
                callback(error);

                _this.dispatch("end");
              } else {
                startNextController();
              }
            });
          } else {
            callback();

            _this.dispatch("end");
          }
        };

        this.dispatch("start");
        startNextController();
      }
    }, {
      key: "createDirectUploadControllers",
      value: function createDirectUploadControllers() {
        var controllers = [];
        this.inputs.forEach(function (input) {
          toArray$1(input.files).forEach(function (file) {
            var controller = new DirectUploadController(input, file);
            controllers.push(controller);
          });
        });
        return controllers;
      }
    }, {
      key: "dispatch",
      value: function dispatch(name) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return dispatchEvent(this.form, "direct-uploads:" + name, {
          detail: detail
        });
      }
    }]);
    return DirectUploadsController;
  }();

  var processingAttribute = "data-direct-uploads-processing";
  var submitButtonsByForm = new WeakMap();
  var started = false;

  function start() {
    if (!started) {
      started = true;
      document.addEventListener("click", didClick, true);
      document.addEventListener("submit", didSubmitForm);
      document.addEventListener("ajax:before", didSubmitRemoteElement);
    }
  }

  function didClick(event) {
    var target = event.target;

    if ((target.tagName == "INPUT" || target.tagName == "BUTTON") && target.type == "submit" && target.form) {
      submitButtonsByForm.set(target.form, target);
    }
  }

  function didSubmitForm(event) {
    handleFormSubmissionEvent(event);
  }

  function didSubmitRemoteElement(event) {
    if (event.target.tagName == "FORM") {
      handleFormSubmissionEvent(event);
    }
  }

  function handleFormSubmissionEvent(event) {
    var form = event.target;

    if (form.hasAttribute(processingAttribute)) {
      event.preventDefault();
      return;
    }

    var controller = new DirectUploadsController(form);
    var inputs = controller.inputs;

    if (inputs.length) {
      event.preventDefault();
      form.setAttribute(processingAttribute, "");
      inputs.forEach(disable);
      controller.start(function (error) {
        form.removeAttribute(processingAttribute);

        if (error) {
          inputs.forEach(enable);
        } else {
          submitForm(form);
        }
      });
    }
  }

  function submitForm(form) {
    var button = submitButtonsByForm.get(form) || findElement(form, "input[type=submit], button[type=submit]");

    if (button) {
      var _button = button,
          disabled = _button.disabled;
      button.disabled = false;
      button.focus();
      button.click();
      button.disabled = disabled;
    } else {
      button = document.createElement("input");
      button.type = "submit";
      button.style.display = "none";
      form.appendChild(button);
      button.click();
      form.removeChild(button);
    }

    submitButtonsByForm["delete"](form);
  }

  function disable(input) {
    input.disabled = true;
  }

  function enable(input) {
    input.disabled = false;
  }

  function autostart() {
    if (window.ActiveStorage) {
      start();
    }
  }

  setTimeout(autostart, 1);
  exports.start = start;
  exports.DirectUpload = DirectUpload;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
});

/***/ }),

/***/ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js":
/*!******************************************************************!*\
  !*** ./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
Unobtrusive JavaScript
https://github.com/rails/rails/blob/master/actionview/app/assets/javascripts
Released under the MIT license
 */
;
(function () {
  var context = this;
  (function () {
    (function () {
      this.Rails = {
        linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]',
        buttonClickSelector: {
          selector: 'button[data-remote]:not([form]), button[data-confirm]:not([form])',
          exclude: 'form button'
        },
        inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',
        formSubmitSelector: 'form',
        formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',
        formDisableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',
        formEnableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',
        fileInputSelector: 'input[name][type=file]:not([disabled])',
        linkDisableSelector: 'a[data-disable-with], a[data-disable]',
        buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]'
      };
    }).call(this);
  }).call(context);
  var Rails = context.Rails;
  (function () {
    (function () {
      var nonce;
      nonce = null;

      Rails.loadCSPNonce = function () {
        var ref;
        return nonce = (ref = document.querySelector("meta[name=csp-nonce]")) != null ? ref.content : void 0;
      };

      Rails.cspNonce = function () {
        return nonce != null ? nonce : Rails.loadCSPNonce();
      };
    }).call(this);
    (function () {
      var expando, m;
      m = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector;

      Rails.matches = function (element, selector) {
        if (selector.exclude != null) {
          return m.call(element, selector.selector) && !m.call(element, selector.exclude);
        } else {
          return m.call(element, selector);
        }
      };

      expando = '_ujsData';

      Rails.getData = function (element, key) {
        var ref;
        return (ref = element[expando]) != null ? ref[key] : void 0;
      };

      Rails.setData = function (element, key, value) {
        if (element[expando] == null) {
          element[expando] = {};
        }

        return element[expando][key] = value;
      };

      Rails.$ = function (selector) {
        return Array.prototype.slice.call(document.querySelectorAll(selector));
      };
    }).call(this);
    (function () {
      var $, csrfParam, csrfToken;
      $ = Rails.$;

      csrfToken = Rails.csrfToken = function () {
        var meta;
        meta = document.querySelector('meta[name=csrf-token]');
        return meta && meta.content;
      };

      csrfParam = Rails.csrfParam = function () {
        var meta;
        meta = document.querySelector('meta[name=csrf-param]');
        return meta && meta.content;
      };

      Rails.CSRFProtection = function (xhr) {
        var token;
        token = csrfToken();

        if (token != null) {
          return xhr.setRequestHeader('X-CSRF-Token', token);
        }
      };

      Rails.refreshCSRFTokens = function () {
        var param, token;
        token = csrfToken();
        param = csrfParam();

        if (token != null && param != null) {
          return $('form input[name="' + param + '"]').forEach(function (input) {
            return input.value = token;
          });
        }
      };
    }).call(this);
    (function () {
      var CustomEvent, fire, matches, preventDefault;
      matches = Rails.matches;
      CustomEvent = window.CustomEvent;

      if (typeof CustomEvent !== 'function') {
        CustomEvent = function CustomEvent(event, params) {
          var evt;
          evt = document.createEvent('CustomEvent');
          evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
          return evt;
        };

        CustomEvent.prototype = window.Event.prototype;
        preventDefault = CustomEvent.prototype.preventDefault;

        CustomEvent.prototype.preventDefault = function () {
          var result;
          result = preventDefault.call(this);

          if (this.cancelable && !this.defaultPrevented) {
            Object.defineProperty(this, 'defaultPrevented', {
              get: function get() {
                return true;
              }
            });
          }

          return result;
        };
      }

      fire = Rails.fire = function (obj, name, data) {
        var event;
        event = new CustomEvent(name, {
          bubbles: true,
          cancelable: true,
          detail: data
        });
        obj.dispatchEvent(event);
        return !event.defaultPrevented;
      };

      Rails.stopEverything = function (e) {
        fire(e.target, 'ujs:everythingStopped');
        e.preventDefault();
        e.stopPropagation();
        return e.stopImmediatePropagation();
      };

      Rails.delegate = function (element, selector, eventType, handler) {
        return element.addEventListener(eventType, function (e) {
          var target;
          target = e.target;

          while (!(!(target instanceof Element) || matches(target, selector))) {
            target = target.parentNode;
          }

          if (target instanceof Element && handler.call(target, e) === false) {
            e.preventDefault();
            return e.stopPropagation();
          }
        });
      };
    }).call(this);
    (function () {
      var AcceptHeaders, CSRFProtection, createXHR, cspNonce, fire, prepareOptions, processResponse;
      cspNonce = Rails.cspNonce, CSRFProtection = Rails.CSRFProtection, fire = Rails.fire;
      AcceptHeaders = {
        '*': '*/*',
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript',
        script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
      };

      Rails.ajax = function (options) {
        var xhr;
        options = prepareOptions(options);
        xhr = createXHR(options, function () {
          var ref, response;
          response = processResponse((ref = xhr.response) != null ? ref : xhr.responseText, xhr.getResponseHeader('Content-Type'));

          if (Math.floor(xhr.status / 100) === 2) {
            if (typeof options.success === "function") {
              options.success(response, xhr.statusText, xhr);
            }
          } else {
            if (typeof options.error === "function") {
              options.error(response, xhr.statusText, xhr);
            }
          }

          return typeof options.complete === "function" ? options.complete(xhr, xhr.statusText) : void 0;
        });

        if (options.beforeSend != null && !options.beforeSend(xhr, options)) {
          return false;
        }

        if (xhr.readyState === XMLHttpRequest.OPENED) {
          return xhr.send(options.data);
        }
      };

      prepareOptions = function prepareOptions(options) {
        options.url = options.url || location.href;
        options.type = options.type.toUpperCase();

        if (options.type === 'GET' && options.data) {
          if (options.url.indexOf('?') < 0) {
            options.url += '?' + options.data;
          } else {
            options.url += '&' + options.data;
          }
        }

        if (AcceptHeaders[options.dataType] == null) {
          options.dataType = '*';
        }

        options.accept = AcceptHeaders[options.dataType];

        if (options.dataType !== '*') {
          options.accept += ', */*; q=0.01';
        }

        return options;
      };

      createXHR = function createXHR(options, done) {
        var xhr;
        xhr = new XMLHttpRequest();
        xhr.open(options.type, options.url, true);
        xhr.setRequestHeader('Accept', options.accept);

        if (typeof options.data === 'string') {
          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        }

        if (!options.crossDomain) {
          xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        }

        CSRFProtection(xhr);
        xhr.withCredentials = !!options.withCredentials;

        xhr.onreadystatechange = function () {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            return done(xhr);
          }
        };

        return xhr;
      };

      processResponse = function processResponse(response, type) {
        var parser, script;

        if (typeof response === 'string' && typeof type === 'string') {
          if (type.match(/\bjson\b/)) {
            try {
              response = JSON.parse(response);
            } catch (error) {}
          } else if (type.match(/\b(?:java|ecma)script\b/)) {
            script = document.createElement('script');
            script.setAttribute('nonce', cspNonce());
            script.text = response;
            document.head.appendChild(script).parentNode.removeChild(script);
          } else if (type.match(/\b(xml|html|svg)\b/)) {
            parser = new DOMParser();
            type = type.replace(/;.+/, '');

            try {
              response = parser.parseFromString(response, type);
            } catch (error) {}
          }
        }

        return response;
      };

      Rails.href = function (element) {
        return element.href;
      };

      Rails.isCrossDomain = function (url) {
        var e, originAnchor, urlAnchor;
        originAnchor = document.createElement('a');
        originAnchor.href = location.href;
        urlAnchor = document.createElement('a');

        try {
          urlAnchor.href = url;
          return !((!urlAnchor.protocol || urlAnchor.protocol === ':') && !urlAnchor.host || originAnchor.protocol + '//' + originAnchor.host === urlAnchor.protocol + '//' + urlAnchor.host);
        } catch (error) {
          e = error;
          return true;
        }
      };
    }).call(this);
    (function () {
      var matches, toArray;
      matches = Rails.matches;

      toArray = function toArray(e) {
        return Array.prototype.slice.call(e);
      };

      Rails.serializeElement = function (element, additionalParam) {
        var inputs, params;
        inputs = [element];

        if (matches(element, 'form')) {
          inputs = toArray(element.elements);
        }

        params = [];
        inputs.forEach(function (input) {
          if (!input.name || input.disabled) {
            return;
          }

          if (matches(input, 'fieldset[disabled] *')) {
            return;
          }

          if (matches(input, 'select')) {
            return toArray(input.options).forEach(function (option) {
              if (option.selected) {
                return params.push({
                  name: input.name,
                  value: option.value
                });
              }
            });
          } else if (input.checked || ['radio', 'checkbox', 'submit'].indexOf(input.type) === -1) {
            return params.push({
              name: input.name,
              value: input.value
            });
          }
        });

        if (additionalParam) {
          params.push(additionalParam);
        }

        return params.map(function (param) {
          if (param.name != null) {
            return encodeURIComponent(param.name) + "=" + encodeURIComponent(param.value);
          } else {
            return param;
          }
        }).join('&');
      };

      Rails.formElements = function (form, selector) {
        if (matches(form, 'form')) {
          return toArray(form.elements).filter(function (el) {
            return matches(el, selector);
          });
        } else {
          return toArray(form.querySelectorAll(selector));
        }
      };
    }).call(this);
    (function () {
      var allowAction, fire, stopEverything;
      fire = Rails.fire, stopEverything = Rails.stopEverything;

      Rails.handleConfirm = function (e) {
        if (!allowAction(this)) {
          return stopEverything(e);
        }
      };

      Rails.confirm = function (message, element) {
        return confirm(message);
      };

      allowAction = function allowAction(element) {
        var answer, callback, message;
        message = element.getAttribute('data-confirm');

        if (!message) {
          return true;
        }

        answer = false;

        if (fire(element, 'confirm')) {
          try {
            answer = Rails.confirm(message, element);
          } catch (error) {}

          callback = fire(element, 'confirm:complete', [answer]);
        }

        return answer && callback;
      };
    }).call(this);
    (function () {
      var disableFormElement, disableFormElements, disableLinkElement, enableFormElement, enableFormElements, enableLinkElement, formElements, getData, isXhrRedirect, matches, setData, stopEverything;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, stopEverything = Rails.stopEverything, formElements = Rails.formElements;

      Rails.handleDisabledElement = function (e) {
        var element;
        element = this;

        if (element.disabled) {
          return stopEverything(e);
        }
      };

      Rails.enableElement = function (e) {
        var element;

        if (e instanceof Event) {
          if (isXhrRedirect(e)) {
            return;
          }

          element = e.target;
        } else {
          element = e;
        }

        if (matches(element, Rails.linkDisableSelector)) {
          return enableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formEnableSelector)) {
          return enableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return enableFormElements(element);
        }
      };

      Rails.disableElement = function (e) {
        var element;
        element = e instanceof Event ? e.target : e;

        if (matches(element, Rails.linkDisableSelector)) {
          return disableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formDisableSelector)) {
          return disableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return disableFormElements(element);
        }
      };

      disableLinkElement = function disableLinkElement(element) {
        var replacement;

        if (getData(element, 'ujs:disabled')) {
          return;
        }

        replacement = element.getAttribute('data-disable-with');

        if (replacement != null) {
          setData(element, 'ujs:enable-with', element.innerHTML);
          element.innerHTML = replacement;
        }

        element.addEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', true);
      };

      enableLinkElement = function enableLinkElement(element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');

        if (originalText != null) {
          element.innerHTML = originalText;
          setData(element, 'ujs:enable-with', null);
        }

        element.removeEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', null);
      };

      disableFormElements = function disableFormElements(form) {
        return formElements(form, Rails.formDisableSelector).forEach(disableFormElement);
      };

      disableFormElement = function disableFormElement(element) {
        var replacement;

        if (getData(element, 'ujs:disabled')) {
          return;
        }

        replacement = element.getAttribute('data-disable-with');

        if (replacement != null) {
          if (matches(element, 'button')) {
            setData(element, 'ujs:enable-with', element.innerHTML);
            element.innerHTML = replacement;
          } else {
            setData(element, 'ujs:enable-with', element.value);
            element.value = replacement;
          }
        }

        element.disabled = true;
        return setData(element, 'ujs:disabled', true);
      };

      enableFormElements = function enableFormElements(form) {
        return formElements(form, Rails.formEnableSelector).forEach(enableFormElement);
      };

      enableFormElement = function enableFormElement(element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');

        if (originalText != null) {
          if (matches(element, 'button')) {
            element.innerHTML = originalText;
          } else {
            element.value = originalText;
          }

          setData(element, 'ujs:enable-with', null);
        }

        element.disabled = false;
        return setData(element, 'ujs:disabled', null);
      };

      isXhrRedirect = function isXhrRedirect(event) {
        var ref, xhr;
        xhr = (ref = event.detail) != null ? ref[0] : void 0;
        return (xhr != null ? xhr.getResponseHeader("X-Xhr-Redirect") : void 0) != null;
      };
    }).call(this);
    (function () {
      var stopEverything;
      stopEverything = Rails.stopEverything;

      Rails.handleMethod = function (e) {
        var csrfParam, csrfToken, form, formContent, href, link, method;
        link = this;
        method = link.getAttribute('data-method');

        if (!method) {
          return;
        }

        href = Rails.href(link);
        csrfToken = Rails.csrfToken();
        csrfParam = Rails.csrfParam();
        form = document.createElement('form');
        formContent = "<input name='_method' value='" + method + "' type='hidden' />";

        if (csrfParam != null && csrfToken != null && !Rails.isCrossDomain(href)) {
          formContent += "<input name='" + csrfParam + "' value='" + csrfToken + "' type='hidden' />";
        }

        formContent += '<input type="submit" />';
        form.method = 'post';
        form.action = href;
        form.target = link.target;
        form.innerHTML = formContent;
        form.style.display = 'none';
        document.body.appendChild(form);
        form.querySelector('[type="submit"]').click();
        return stopEverything(e);
      };
    }).call(this);
    (function () {
      var ajax,
          fire,
          getData,
          isCrossDomain,
          isRemote,
          matches,
          serializeElement,
          setData,
          stopEverything,
          slice = [].slice;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, fire = Rails.fire, stopEverything = Rails.stopEverything, ajax = Rails.ajax, isCrossDomain = Rails.isCrossDomain, serializeElement = Rails.serializeElement;

      isRemote = function isRemote(element) {
        var value;
        value = element.getAttribute('data-remote');
        return value != null && value !== 'false';
      };

      Rails.handleRemote = function (e) {
        var button, data, dataType, element, method, url, withCredentials;
        element = this;

        if (!isRemote(element)) {
          return true;
        }

        if (!fire(element, 'ajax:before')) {
          fire(element, 'ajax:stopped');
          return false;
        }

        withCredentials = element.getAttribute('data-with-credentials');
        dataType = element.getAttribute('data-type') || 'script';

        if (matches(element, Rails.formSubmitSelector)) {
          button = getData(element, 'ujs:submit-button');
          method = getData(element, 'ujs:submit-button-formmethod') || element.method;
          url = getData(element, 'ujs:submit-button-formaction') || element.getAttribute('action') || location.href;

          if (method.toUpperCase() === 'GET') {
            url = url.replace(/\?.*$/, '');
          }

          if (element.enctype === 'multipart/form-data') {
            data = new FormData(element);

            if (button != null) {
              data.append(button.name, button.value);
            }
          } else {
            data = serializeElement(element, button);
          }

          setData(element, 'ujs:submit-button', null);
          setData(element, 'ujs:submit-button-formmethod', null);
          setData(element, 'ujs:submit-button-formaction', null);
        } else if (matches(element, Rails.buttonClickSelector) || matches(element, Rails.inputChangeSelector)) {
          method = element.getAttribute('data-method');
          url = element.getAttribute('data-url');
          data = serializeElement(element, element.getAttribute('data-params'));
        } else {
          method = element.getAttribute('data-method');
          url = Rails.href(element);
          data = element.getAttribute('data-params');
        }

        ajax({
          type: method || 'GET',
          url: url,
          data: data,
          dataType: dataType,
          beforeSend: function beforeSend(xhr, options) {
            if (fire(element, 'ajax:beforeSend', [xhr, options])) {
              return fire(element, 'ajax:send', [xhr]);
            } else {
              fire(element, 'ajax:stopped');
              return false;
            }
          },
          success: function success() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:success', args);
          },
          error: function error() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:error', args);
          },
          complete: function complete() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:complete', args);
          },
          crossDomain: isCrossDomain(url),
          withCredentials: withCredentials != null && withCredentials !== 'false'
        });
        return stopEverything(e);
      };

      Rails.formSubmitButtonClick = function (e) {
        var button, form;
        button = this;
        form = button.form;

        if (!form) {
          return;
        }

        if (button.name) {
          setData(form, 'ujs:submit-button', {
            name: button.name,
            value: button.value
          });
        }

        setData(form, 'ujs:formnovalidate-button', button.formNoValidate);
        setData(form, 'ujs:submit-button-formaction', button.getAttribute('formaction'));
        return setData(form, 'ujs:submit-button-formmethod', button.getAttribute('formmethod'));
      };

      Rails.preventInsignificantClick = function (e) {
        var data, insignificantMetaClick, link, metaClick, method, nonPrimaryMouseClick;
        link = this;
        method = (link.getAttribute('data-method') || 'GET').toUpperCase();
        data = link.getAttribute('data-params');
        metaClick = e.metaKey || e.ctrlKey;
        insignificantMetaClick = metaClick && method === 'GET' && !data;
        nonPrimaryMouseClick = e.button != null && e.button !== 0;

        if (nonPrimaryMouseClick || insignificantMetaClick) {
          return e.stopImmediatePropagation();
        }
      };
    }).call(this);
    (function () {
      var $, CSRFProtection, delegate, disableElement, enableElement, fire, formSubmitButtonClick, getData, handleConfirm, handleDisabledElement, handleMethod, handleRemote, loadCSPNonce, preventInsignificantClick, refreshCSRFTokens;
      fire = Rails.fire, delegate = Rails.delegate, getData = Rails.getData, $ = Rails.$, refreshCSRFTokens = Rails.refreshCSRFTokens, CSRFProtection = Rails.CSRFProtection, loadCSPNonce = Rails.loadCSPNonce, enableElement = Rails.enableElement, disableElement = Rails.disableElement, handleDisabledElement = Rails.handleDisabledElement, handleConfirm = Rails.handleConfirm, preventInsignificantClick = Rails.preventInsignificantClick, handleRemote = Rails.handleRemote, formSubmitButtonClick = Rails.formSubmitButtonClick, handleMethod = Rails.handleMethod;

      if (typeof jQuery !== "undefined" && jQuery !== null && jQuery.ajax != null) {
        if (jQuery.rails) {
          throw new Error('If you load both jquery_ujs and rails-ujs, use rails-ujs only.');
        }

        jQuery.rails = Rails;
        jQuery.ajaxPrefilter(function (options, originalOptions, xhr) {
          if (!options.crossDomain) {
            return CSRFProtection(xhr);
          }
        });
      }

      Rails.start = function () {
        if (window._rails_loaded) {
          throw new Error('rails-ujs has already been loaded!');
        }

        window.addEventListener('pageshow', function () {
          $(Rails.formEnableSelector).forEach(function (el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
          return $(Rails.linkDisableSelector).forEach(function (el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
        });
        delegate(document, Rails.linkDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.linkDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.linkClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.linkClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.linkClickSelector, 'click', handleConfirm);
        delegate(document, Rails.linkClickSelector, 'click', disableElement);
        delegate(document, Rails.linkClickSelector, 'click', handleRemote);
        delegate(document, Rails.linkClickSelector, 'click', handleMethod);
        delegate(document, Rails.buttonClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.buttonClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleConfirm);
        delegate(document, Rails.buttonClickSelector, 'click', disableElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleRemote);
        delegate(document, Rails.inputChangeSelector, 'change', handleDisabledElement);
        delegate(document, Rails.inputChangeSelector, 'change', handleConfirm);
        delegate(document, Rails.inputChangeSelector, 'change', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', handleDisabledElement);
        delegate(document, Rails.formSubmitSelector, 'submit', handleConfirm);
        delegate(document, Rails.formSubmitSelector, 'submit', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', function (e) {
          return setTimeout(function () {
            return disableElement(e);
          }, 13);
        });
        delegate(document, Rails.formSubmitSelector, 'ajax:send', disableElement);
        delegate(document, Rails.formSubmitSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.formInputClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.formInputClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.formInputClickSelector, 'click', handleConfirm);
        delegate(document, Rails.formInputClickSelector, 'click', formSubmitButtonClick);
        document.addEventListener('DOMContentLoaded', refreshCSRFTokens);
        document.addEventListener('DOMContentLoaded', loadCSPNonce);
        return window._rails_loaded = true;
      };

      if (window.Rails === Rails && fire(document, 'rails:attachBindings')) {
        Rails.start();
      }
    }).call(this);
  }).call(this);

  if (( false ? undefined : _typeof(module)) === "object" && module.exports) {
    module.exports = Rails;
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (Rails),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
}).call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var printWarning = function printWarning() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */


function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + _typeof(typeSpecs[typeSpecName]) + '`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }

        if (error && !(error instanceof Error)) {
          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + _typeof(error) + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        }

        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;
          var stack = getStack ? getStack() : '';
          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
      }
    }
  }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */


checkPropTypes.resetWarningCache = function () {
  if (true) {
    loggedTypeFailures = {};
  }
};

module.exports = checkPropTypes;

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);

var printWarning = function printWarning() {};

if (true) {
  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function (isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */

  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);

    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }
  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */


  var ANONYMOUS = '<<anonymous>>'; // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.

  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),
    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };
  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */

  /*eslint-disable no-self-compare*/

  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */


  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  } // Make `instanceof Error` still work for returned errors.


  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }

    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;

          if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }

      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }

          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }

        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }

      var propValue = props[propName];

      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }

      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);

        if (error instanceof Error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }

      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);

        if (type === 'symbol') {
          return String(value);
        }

        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }

      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }

      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

          if (error instanceof Error) {
            return error;
          }
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];

      if (typeof checker !== 'function') {
        printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];

        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }

      for (var key in shapeTypes) {
        var checker = shapeTypes[key];

        if (!checker) {
          continue;
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      } // We need to check all keys in case some are required but missing from
      // props.


      var allKeys = assign({}, props[propName], shapeTypes);

      for (var key in allKeys) {
        var checker = shapeTypes[key];

        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (_typeof(propValue)) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;

      case 'boolean':
        return !propValue;

      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }

        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);

        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;

          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;

              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;

      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    } // falsy value can't be a Symbol


    if (!propValue) {
      return false;
    } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    } // Fallback for non-spec compliant Symbols which are polyfilled.


    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  } // Equivalent of `typeof` but with special handling for array and regexp.


  function getPropType(propValue) {
    var propType = _typeof(propValue);

    if (Array.isArray(propValue)) {
      return 'array';
    }

    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }

    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }

    return propType;
  } // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.


  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }

    var propType = getPropType(propValue);

    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }

    return propType;
  } // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"


  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);

    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;

      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;

      default:
        return type;
    }
  } // Returns class name of the object, if any.


  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }

    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js"); // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod


  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}

/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

if (true) {
  (function () {
    'use strict'; // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.

    var hasSymbol = typeof Symbol === 'function' && Symbol["for"];
    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol["for"]('react.element') : 0xeac7;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol["for"]('react.portal') : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol["for"]('react.fragment') : 0xeacb;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol["for"]('react.strict_mode') : 0xeacc;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol["for"]('react.profiler') : 0xead2;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol["for"]('react.provider') : 0xeacd;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol["for"]('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
    // (unstable) APIs that have been removed. Can we remove the symbols?

    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol["for"]('react.async_mode') : 0xeacf;
    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol["for"]('react.concurrent_mode') : 0xeacf;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol["for"]('react.forward_ref') : 0xead0;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol["for"]('react.suspense') : 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol["for"]('react.suspense_list') : 0xead8;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol["for"]('react.memo') : 0xead3;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol["for"]('react.lazy') : 0xead4;
    var REACT_BLOCK_TYPE = hasSymbol ? Symbol["for"]('react.block') : 0xead9;
    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol["for"]('react.fundamental') : 0xead5;
    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol["for"]('react.responder') : 0xead6;
    var REACT_SCOPE_TYPE = hasSymbol ? Symbol["for"]('react.scope') : 0xead7;

    function isValidElementType(type) {
      return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || _typeof(type) === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
    }

    function typeOf(object) {
      if (_typeof(object) === 'object' && object !== null) {
        var $$typeof = object.$$typeof;

        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            var type = object.type;

            switch (type) {
              case REACT_ASYNC_MODE_TYPE:
              case REACT_CONCURRENT_MODE_TYPE:
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
                return type;

              default:
                var $$typeofType = type && type.$$typeof;

                switch ($$typeofType) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_LAZY_TYPE:
                  case REACT_MEMO_TYPE:
                  case REACT_PROVIDER_TYPE:
                    return $$typeofType;

                  default:
                    return $$typeof;
                }

            }

          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }

      return undefined;
    } // AsyncMode is deprecated along with isAsyncMode


    var AsyncMode = REACT_ASYNC_MODE_TYPE;
    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
    var ContextConsumer = REACT_CONTEXT_TYPE;
    var ContextProvider = REACT_PROVIDER_TYPE;
    var Element = REACT_ELEMENT_TYPE;
    var ForwardRef = REACT_FORWARD_REF_TYPE;
    var Fragment = REACT_FRAGMENT_TYPE;
    var Lazy = REACT_LAZY_TYPE;
    var Memo = REACT_MEMO_TYPE;
    var Portal = REACT_PORTAL_TYPE;
    var Profiler = REACT_PROFILER_TYPE;
    var StrictMode = REACT_STRICT_MODE_TYPE;
    var Suspense = REACT_SUSPENSE_TYPE;
    var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

    function isAsyncMode(object) {
      {
        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
          hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

          console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
        }
      }
      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
    }

    function isConcurrentMode(object) {
      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
    }

    function isContextConsumer(object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    }

    function isContextProvider(object) {
      return typeOf(object) === REACT_PROVIDER_TYPE;
    }

    function isElement(object) {
      return _typeof(object) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }

    function isForwardRef(object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }

    function isFragment(object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    }

    function isLazy(object) {
      return typeOf(object) === REACT_LAZY_TYPE;
    }

    function isMemo(object) {
      return typeOf(object) === REACT_MEMO_TYPE;
    }

    function isPortal(object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    }

    function isProfiler(object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    }

    function isStrictMode(object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }

    function isSuspense(object) {
      return typeOf(object) === REACT_SUSPENSE_TYPE;
    }

    exports.AsyncMode = AsyncMode;
    exports.ConcurrentMode = ConcurrentMode;
    exports.ContextConsumer = ContextConsumer;
    exports.ContextProvider = ContextProvider;
    exports.Element = Element;
    exports.ForwardRef = ForwardRef;
    exports.Fragment = Fragment;
    exports.Lazy = Lazy;
    exports.Memo = Memo;
    exports.Portal = Portal;
    exports.Profiler = Profiler;
    exports.StrictMode = StrictMode;
    exports.Suspense = Suspense;
    exports.isAsyncMode = isAsyncMode;
    exports.isConcurrentMode = isConcurrentMode;
    exports.isContextConsumer = isContextConsumer;
    exports.isContextProvider = isContextProvider;
    exports.isElement = isElement;
    exports.isForwardRef = isForwardRef;
    exports.isFragment = isFragment;
    exports.isLazy = isLazy;
    exports.isMemo = isMemo;
    exports.isPortal = isPortal;
    exports.isProfiler = isProfiler;
    exports.isStrictMode = isStrictMode;
    exports.isSuspense = isSuspense;
    exports.isValidElementType = isValidElementType;
    exports.typeOf = typeOf;
  })();
}

/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}

/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.1
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

if (true) {
  (function () {
    'use strict';

    var _assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js"); // TODO: this is special because it gets imported during build.


    var ReactVersion = '17.0.1'; // ATTENTION
    // When adding new symbols to this file,
    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.

    var REACT_ELEMENT_TYPE = 0xeac7;
    var REACT_PORTAL_TYPE = 0xeaca;
    exports.Fragment = 0xeacb;
    exports.StrictMode = 0xeacc;
    exports.Profiler = 0xead2;
    var REACT_PROVIDER_TYPE = 0xeacd;
    var REACT_CONTEXT_TYPE = 0xeace;
    var REACT_FORWARD_REF_TYPE = 0xead0;
    exports.Suspense = 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = 0xead8;
    var REACT_MEMO_TYPE = 0xead3;
    var REACT_LAZY_TYPE = 0xead4;
    var REACT_BLOCK_TYPE = 0xead9;
    var REACT_SERVER_BLOCK_TYPE = 0xeada;
    var REACT_FUNDAMENTAL_TYPE = 0xead5;
    var REACT_SCOPE_TYPE = 0xead7;
    var REACT_OPAQUE_ID_TYPE = 0xeae0;
    var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
    var REACT_OFFSCREEN_TYPE = 0xeae2;
    var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

    if (typeof Symbol === 'function' && Symbol["for"]) {
      var symbolFor = Symbol["for"];
      REACT_ELEMENT_TYPE = symbolFor('react.element');
      REACT_PORTAL_TYPE = symbolFor('react.portal');
      exports.Fragment = symbolFor('react.fragment');
      exports.StrictMode = symbolFor('react.strict_mode');
      exports.Profiler = symbolFor('react.profiler');
      REACT_PROVIDER_TYPE = symbolFor('react.provider');
      REACT_CONTEXT_TYPE = symbolFor('react.context');
      REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
      exports.Suspense = symbolFor('react.suspense');
      REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
      REACT_MEMO_TYPE = symbolFor('react.memo');
      REACT_LAZY_TYPE = symbolFor('react.lazy');
      REACT_BLOCK_TYPE = symbolFor('react.block');
      REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
      REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
      REACT_SCOPE_TYPE = symbolFor('react.scope');
      REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
      REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
      REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
      REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
    }

    var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator';

    function getIteratorFn(maybeIterable) {
      if (maybeIterable === null || _typeof(maybeIterable) !== 'object') {
        return null;
      }

      var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

      if (typeof maybeIterator === 'function') {
        return maybeIterator;
      }

      return null;
    }
    /**
     * Keeps track of the current dispatcher.
     */


    var ReactCurrentDispatcher = {
      /**
       * @internal
       * @type {ReactComponent}
       */
      current: null
    };
    /**
     * Keeps track of the current batch's configuration such as how long an update
     * should suspend for if it needs to.
     */

    var ReactCurrentBatchConfig = {
      transition: 0
    };
    /**
     * Keeps track of the current owner.
     *
     * The current owner is the component who should own any components that are
     * currently being constructed.
     */

    var ReactCurrentOwner = {
      /**
       * @internal
       * @type {ReactComponent}
       */
      current: null
    };
    var ReactDebugCurrentFrame = {};
    var currentExtraStackFrame = null;

    function setExtraStackFrame(stack) {
      {
        currentExtraStackFrame = stack;
      }
    }

    {
      ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
        {
          currentExtraStackFrame = stack;
        }
      }; // Stack implementation injected by the current renderer.


      ReactDebugCurrentFrame.getCurrentStack = null;

      ReactDebugCurrentFrame.getStackAddendum = function () {
        var stack = ''; // Add an extra top frame while an element is being validated

        if (currentExtraStackFrame) {
          stack += currentExtraStackFrame;
        } // Delegate to the injected renderer-specific implementation


        var impl = ReactDebugCurrentFrame.getCurrentStack;

        if (impl) {
          stack += impl() || '';
        }

        return stack;
      };
    }
    /**
     * Used by act() to track whether you're inside an act() scope.
     */

    var IsSomeRendererActing = {
      current: false
    };
    var ReactSharedInternals = {
      ReactCurrentDispatcher: ReactCurrentDispatcher,
      ReactCurrentBatchConfig: ReactCurrentBatchConfig,
      ReactCurrentOwner: ReactCurrentOwner,
      IsSomeRendererActing: IsSomeRendererActing,
      // Used by renderers to avoid bundling object-assign twice in UMD bundles:
      assign: _assign
    };
    {
      ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
    } // by calls to these methods by a Babel plugin.
    //
    // In PROD (or in packages without access to React internals),
    // they are left as they are instead.

    function warn(format) {
      {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        printWarning('warn', format, args);
      }
    }

    function error(format) {
      {
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        printWarning('error', format, args);
      }
    }

    function printWarning(level, format, args) {
      // When changing this logic, you might want to also
      // update consoleWithStackDev.www.js as well.
      {
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        var stack = ReactDebugCurrentFrame.getStackAddendum();

        if (stack !== '') {
          format += '%s';
          args = args.concat([stack]);
        }

        var argsWithFormat = args.map(function (item) {
          return '' + item;
        }); // Careful: RN currently depends on this prefix

        argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
        // breaks IE9: https://github.com/facebook/react/issues/13610
        // eslint-disable-next-line react-internal/no-production-logging

        Function.prototype.apply.call(console[level], console, argsWithFormat);
      }
    }

    var didWarnStateUpdateForUnmountedComponent = {};

    function warnNoop(publicInstance, callerName) {
      {
        var _constructor = publicInstance.constructor;
        var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
        var warningKey = componentName + "." + callerName;

        if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
          return;
        }

        error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
        didWarnStateUpdateForUnmountedComponent[warningKey] = true;
      }
    }
    /**
     * This is the abstract API for an update queue.
     */


    var ReactNoopUpdateQueue = {
      /**
       * Checks whether or not this composite component is mounted.
       * @param {ReactClass} publicInstance The instance we want to test.
       * @return {boolean} True if mounted, false otherwise.
       * @protected
       * @final
       */
      isMounted: function isMounted(publicInstance) {
        return false;
      },

      /**
       * Forces an update. This should only be invoked when it is known with
       * certainty that we are **not** in a DOM transaction.
       *
       * You may want to call this when you know that some deeper aspect of the
       * component's state has changed but `setState` was not called.
       *
       * This will not invoke `shouldComponentUpdate`, but it will invoke
       * `componentWillUpdate` and `componentDidUpdate`.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {?function} callback Called after component is updated.
       * @param {?string} callerName name of the calling function in the public API.
       * @internal
       */
      enqueueForceUpdate: function enqueueForceUpdate(publicInstance, callback, callerName) {
        warnNoop(publicInstance, 'forceUpdate');
      },

      /**
       * Replaces all of the state. Always use this or `setState` to mutate state.
       * You should treat `this.state` as immutable.
       *
       * There is no guarantee that `this.state` will be immediately updated, so
       * accessing `this.state` after calling this method may return the old value.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {object} completeState Next state.
       * @param {?function} callback Called after component is updated.
       * @param {?string} callerName name of the calling function in the public API.
       * @internal
       */
      enqueueReplaceState: function enqueueReplaceState(publicInstance, completeState, callback, callerName) {
        warnNoop(publicInstance, 'replaceState');
      },

      /**
       * Sets a subset of the state. This only exists because _pendingState is
       * internal. This provides a merging strategy that is not available to deep
       * properties which is confusing. TODO: Expose pendingState or don't use it
       * during the merge.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {object} partialState Next partial state to be merged with state.
       * @param {?function} callback Called after component is updated.
       * @param {?string} Name of the calling function in the public API.
       * @internal
       */
      enqueueSetState: function enqueueSetState(publicInstance, partialState, callback, callerName) {
        warnNoop(publicInstance, 'setState');
      }
    };
    var emptyObject = {};
    {
      Object.freeze(emptyObject);
    }
    /**
     * Base class helpers for the updating state of a component.
     */

    function Component(props, context, updater) {
      this.props = props;
      this.context = context; // If a component has string refs, we will assign a different object later.

      this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
      // renderer.

      this.updater = updater || ReactNoopUpdateQueue;
    }

    Component.prototype.isReactComponent = {};
    /**
     * Sets a subset of the state. Always use this to mutate
     * state. You should treat `this.state` as immutable.
     *
     * There is no guarantee that `this.state` will be immediately updated, so
     * accessing `this.state` after calling this method may return the old value.
     *
     * There is no guarantee that calls to `setState` will run synchronously,
     * as they may eventually be batched together.  You can provide an optional
     * callback that will be executed when the call to setState is actually
     * completed.
     *
     * When a function is provided to setState, it will be called at some point in
     * the future (not synchronously). It will be called with the up to date
     * component arguments (state, props, context). These values can be different
     * from this.* because your function may be called after receiveProps but before
     * shouldComponentUpdate, and this new state, props, and context will not yet be
     * assigned to this.
     *
     * @param {object|function} partialState Next partial state or function to
     *        produce next partial state to be merged with current state.
     * @param {?function} callback Called after state is updated.
     * @final
     * @protected
     */

    Component.prototype.setState = function (partialState, callback) {
      if (!(_typeof(partialState) === 'object' || typeof partialState === 'function' || partialState == null)) {
        {
          throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        }
      }

      this.updater.enqueueSetState(this, partialState, callback, 'setState');
    };
    /**
     * Forces an update. This should only be invoked when it is known with
     * certainty that we are **not** in a DOM transaction.
     *
     * You may want to call this when you know that some deeper aspect of the
     * component's state has changed but `setState` was not called.
     *
     * This will not invoke `shouldComponentUpdate`, but it will invoke
     * `componentWillUpdate` and `componentDidUpdate`.
     *
     * @param {?function} callback Called after update is complete.
     * @final
     * @protected
     */


    Component.prototype.forceUpdate = function (callback) {
      this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
    };
    /**
     * Deprecated APIs. These APIs used to exist on classic React classes but since
     * we would like to deprecate them, we're not going to move them over to this
     * modern base class. Instead, we define a getter that warns if it's accessed.
     */


    {
      var deprecatedAPIs = {
        isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
        replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
      };

      var defineDeprecationWarning = function defineDeprecationWarning(methodName, info) {
        Object.defineProperty(Component.prototype, methodName, {
          get: function get() {
            warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
            return undefined;
          }
        });
      };

      for (var fnName in deprecatedAPIs) {
        if (deprecatedAPIs.hasOwnProperty(fnName)) {
          defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
        }
      }
    }

    function ComponentDummy() {}

    ComponentDummy.prototype = Component.prototype;
    /**
     * Convenience component with default shallow equality check for sCU.
     */

    function PureComponent(props, context, updater) {
      this.props = props;
      this.context = context; // If a component has string refs, we will assign a different object later.

      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }

    var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
    pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

    _assign(pureComponentPrototype, Component.prototype);

    pureComponentPrototype.isPureReactComponent = true; // an immutable object with a single mutable value

    function createRef() {
      var refObject = {
        current: null
      };
      {
        Object.seal(refObject);
      }
      return refObject;
    }

    function getWrappedName(outerType, innerType, wrapperName) {
      var functionName = innerType.displayName || innerType.name || '';
      return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
    }

    function getContextName(type) {
      return type.displayName || 'Context';
    }

    function getComponentName(type) {
      if (type == null) {
        // Host root, text node or just invalid type.
        return null;
      }

      {
        if (typeof type.tag === 'number') {
          error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
        }
      }

      if (typeof type === 'function') {
        return type.displayName || type.name || null;
      }

      if (typeof type === 'string') {
        return type;
      }

      switch (type) {
        case exports.Fragment:
          return 'Fragment';

        case REACT_PORTAL_TYPE:
          return 'Portal';

        case exports.Profiler:
          return 'Profiler';

        case exports.StrictMode:
          return 'StrictMode';

        case exports.Suspense:
          return 'Suspense';

        case REACT_SUSPENSE_LIST_TYPE:
          return 'SuspenseList';
      }

      if (_typeof(type) === 'object') {
        switch (type.$$typeof) {
          case REACT_CONTEXT_TYPE:
            var context = type;
            return getContextName(context) + '.Consumer';

          case REACT_PROVIDER_TYPE:
            var provider = type;
            return getContextName(provider._context) + '.Provider';

          case REACT_FORWARD_REF_TYPE:
            return getWrappedName(type, type.render, 'ForwardRef');

          case REACT_MEMO_TYPE:
            return getComponentName(type.type);

          case REACT_BLOCK_TYPE:
            return getComponentName(type._render);

          case REACT_LAZY_TYPE:
            {
              var lazyComponent = type;
              var payload = lazyComponent._payload;
              var init = lazyComponent._init;

              try {
                return getComponentName(init(payload));
              } catch (x) {
                return null;
              }
            }
        }
      }

      return null;
    }

    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var RESERVED_PROPS = {
      key: true,
      ref: true,
      __self: true,
      __source: true
    };
    var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
    {
      didWarnAboutStringRefs = {};
    }

    function hasValidRef(config) {
      {
        if (hasOwnProperty.call(config, 'ref')) {
          var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

          if (getter && getter.isReactWarning) {
            return false;
          }
        }
      }
      return config.ref !== undefined;
    }

    function hasValidKey(config) {
      {
        if (hasOwnProperty.call(config, 'key')) {
          var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

          if (getter && getter.isReactWarning) {
            return false;
          }
        }
      }
      return config.key !== undefined;
    }

    function defineKeyPropWarningGetter(props, displayName) {
      var warnAboutAccessingKey = function warnAboutAccessingKey() {
        {
          if (!specialPropKeyWarningShown) {
            specialPropKeyWarningShown = true;
            error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
          }
        }
      };

      warnAboutAccessingKey.isReactWarning = true;
      Object.defineProperty(props, 'key', {
        get: warnAboutAccessingKey,
        configurable: true
      });
    }

    function defineRefPropWarningGetter(props, displayName) {
      var warnAboutAccessingRef = function warnAboutAccessingRef() {
        {
          if (!specialPropRefWarningShown) {
            specialPropRefWarningShown = true;
            error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
          }
        }
      };

      warnAboutAccessingRef.isReactWarning = true;
      Object.defineProperty(props, 'ref', {
        get: warnAboutAccessingRef,
        configurable: true
      });
    }

    function warnIfStringRefCannotBeAutoConverted(config) {
      {
        if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
          var componentName = getComponentName(ReactCurrentOwner.current.type);

          if (!didWarnAboutStringRefs[componentName]) {
            error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
            didWarnAboutStringRefs[componentName] = true;
          }
        }
      }
    }
    /**
     * Factory method to create a new React element. This no longer adheres to
     * the class pattern, so do not use new to call it. Also, instanceof check
     * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
     * if something is a React Element.
     *
     * @param {*} type
     * @param {*} props
     * @param {*} key
     * @param {string|object} ref
     * @param {*} owner
     * @param {*} self A *temporary* helper to detect places where `this` is
     * different from the `owner` when React.createElement is called, so that we
     * can warn. We want to get rid of owner and replace string `ref`s with arrow
     * functions, and as long as `this` and owner are the same, there will be no
     * change in behavior.
     * @param {*} source An annotation object (added by a transpiler or otherwise)
     * indicating filename, line number, and/or other information.
     * @internal
     */


    var ReactElement = function ReactElement(type, key, ref, self, source, owner, props) {
      var element = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: REACT_ELEMENT_TYPE,
        // Built-in properties that belong on the element
        type: type,
        key: key,
        ref: ref,
        props: props,
        // Record the component responsible for creating this element.
        _owner: owner
      };
      {
        // The validation flag is currently mutative. We put it on
        // an external backing store so that we can freeze the whole object.
        // This can be replaced with a WeakMap once they are implemented in
        // commonly used development environments.
        element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
        // the validation flag non-enumerable (where possible, which should
        // include every environment we run tests in), so the test framework
        // ignores it.

        Object.defineProperty(element._store, 'validated', {
          configurable: false,
          enumerable: false,
          writable: true,
          value: false
        }); // self and source are DEV only properties.

        Object.defineProperty(element, '_self', {
          configurable: false,
          enumerable: false,
          writable: false,
          value: self
        }); // Two elements created in two different places should be considered
        // equal for testing purposes and therefore we hide it from enumeration.

        Object.defineProperty(element, '_source', {
          configurable: false,
          enumerable: false,
          writable: false,
          value: source
        });

        if (Object.freeze) {
          Object.freeze(element.props);
          Object.freeze(element);
        }
      }
      return element;
    };
    /**
     * Create and return a new ReactElement of the given type.
     * See https://reactjs.org/docs/react-api.html#createelement
     */


    function createElement(type, config, children) {
      var propName; // Reserved names are extracted

      var props = {};
      var key = null;
      var ref = null;
      var self = null;
      var source = null;

      if (config != null) {
        if (hasValidRef(config)) {
          ref = config.ref;
          {
            warnIfStringRefCannotBeAutoConverted(config);
          }
        }

        if (hasValidKey(config)) {
          key = '' + config.key;
        }

        self = config.__self === undefined ? null : config.__self;
        source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

        for (propName in config) {
          if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
            props[propName] = config[propName];
          }
        }
      } // Children can be more than one argument, and those are transferred onto
      // the newly allocated props object.


      var childrenLength = arguments.length - 2;

      if (childrenLength === 1) {
        props.children = children;
      } else if (childrenLength > 1) {
        var childArray = Array(childrenLength);

        for (var i = 0; i < childrenLength; i++) {
          childArray[i] = arguments[i + 2];
        }

        {
          if (Object.freeze) {
            Object.freeze(childArray);
          }
        }
        props.children = childArray;
      } // Resolve default props


      if (type && type.defaultProps) {
        var defaultProps = type.defaultProps;

        for (propName in defaultProps) {
          if (props[propName] === undefined) {
            props[propName] = defaultProps[propName];
          }
        }
      }

      {
        if (key || ref) {
          var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

          if (key) {
            defineKeyPropWarningGetter(props, displayName);
          }

          if (ref) {
            defineRefPropWarningGetter(props, displayName);
          }
        }
      }
      return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
    }

    function cloneAndReplaceKey(oldElement, newKey) {
      var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
      return newElement;
    }
    /**
     * Clone and return a new ReactElement using element as the starting point.
     * See https://reactjs.org/docs/react-api.html#cloneelement
     */


    function cloneElement(element, config, children) {
      if (!!(element === null || element === undefined)) {
        {
          throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
        }
      }

      var propName; // Original props are copied

      var props = _assign({}, element.props); // Reserved names are extracted


      var key = element.key;
      var ref = element.ref; // Self is preserved since the owner is preserved.

      var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
      // transpiler, and the original source is probably a better indicator of the
      // true owner.

      var source = element._source; // Owner will be preserved, unless ref is overridden

      var owner = element._owner;

      if (config != null) {
        if (hasValidRef(config)) {
          // Silently steal the ref from the parent.
          ref = config.ref;
          owner = ReactCurrentOwner.current;
        }

        if (hasValidKey(config)) {
          key = '' + config.key;
        } // Remaining properties override existing props


        var defaultProps;

        if (element.type && element.type.defaultProps) {
          defaultProps = element.type.defaultProps;
        }

        for (propName in config) {
          if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
            if (config[propName] === undefined && defaultProps !== undefined) {
              // Resolve default props
              props[propName] = defaultProps[propName];
            } else {
              props[propName] = config[propName];
            }
          }
        }
      } // Children can be more than one argument, and those are transferred onto
      // the newly allocated props object.


      var childrenLength = arguments.length - 2;

      if (childrenLength === 1) {
        props.children = children;
      } else if (childrenLength > 1) {
        var childArray = Array(childrenLength);

        for (var i = 0; i < childrenLength; i++) {
          childArray[i] = arguments[i + 2];
        }

        props.children = childArray;
      }

      return ReactElement(element.type, key, ref, self, source, owner, props);
    }
    /**
     * Verifies the object is a ReactElement.
     * See https://reactjs.org/docs/react-api.html#isvalidelement
     * @param {?object} object
     * @return {boolean} True if `object` is a ReactElement.
     * @final
     */


    function isValidElement(object) {
      return _typeof(object) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }

    var SEPARATOR = '.';
    var SUBSEPARATOR = ':';
    /**
     * Escape and wrap key so it is safe to use as a reactid
     *
     * @param {string} key to be escaped.
     * @return {string} the escaped key.
     */

    function escape(key) {
      var escapeRegex = /[=:]/g;
      var escaperLookup = {
        '=': '=0',
        ':': '=2'
      };
      var escapedString = key.replace(escapeRegex, function (match) {
        return escaperLookup[match];
      });
      return '$' + escapedString;
    }
    /**
     * TODO: Test that a single child and an array with one item have the same key
     * pattern.
     */


    var didWarnAboutMaps = false;
    var userProvidedKeyEscapeRegex = /\/+/g;

    function escapeUserProvidedKey(text) {
      return text.replace(userProvidedKeyEscapeRegex, '$&/');
    }
    /**
     * Generate a key string that identifies a element within a set.
     *
     * @param {*} element A element that could contain a manual key.
     * @param {number} index Index that is used if a manual key is not provided.
     * @return {string}
     */


    function getElementKey(element, index) {
      // Do some typechecking here since we call this blindly. We want to ensure
      // that we don't block potential future ES APIs.
      if (_typeof(element) === 'object' && element !== null && element.key != null) {
        // Explicit key
        return escape('' + element.key);
      } // Implicit key determined by the index in the set


      return index.toString(36);
    }

    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
      var type = _typeof(children);

      if (type === 'undefined' || type === 'boolean') {
        // All of the above are perceived as null.
        children = null;
      }

      var invokeCallback = false;

      if (children === null) {
        invokeCallback = true;
      } else {
        switch (type) {
          case 'string':
          case 'number':
            invokeCallback = true;
            break;

          case 'object':
            switch (children.$$typeof) {
              case REACT_ELEMENT_TYPE:
              case REACT_PORTAL_TYPE:
                invokeCallback = true;
            }

        }
      }

      if (invokeCallback) {
        var _child = children;
        var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
        // so that it's consistent if the number of children grows:

        var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

        if (Array.isArray(mappedChild)) {
          var escapedChildKey = '';

          if (childKey != null) {
            escapedChildKey = escapeUserProvidedKey(childKey) + '/';
          }

          mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
            return c;
          });
        } else if (mappedChild != null) {
          if (isValidElement(mappedChild)) {
            mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
            escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
          }

          array.push(mappedChild);
        }

        return 1;
      }

      var child;
      var nextName;
      var subtreeCount = 0; // Count of children found in the current subtree.

      var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

      if (Array.isArray(children)) {
        for (var i = 0; i < children.length; i++) {
          child = children[i];
          nextName = nextNamePrefix + getElementKey(child, i);
          subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
        }
      } else {
        var iteratorFn = getIteratorFn(children);

        if (typeof iteratorFn === 'function') {
          var iterableChildren = children;
          {
            // Warn about using Maps as children
            if (iteratorFn === iterableChildren.entries) {
              if (!didWarnAboutMaps) {
                warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
              }

              didWarnAboutMaps = true;
            }
          }
          var iterator = iteratorFn.call(iterableChildren);
          var step;
          var ii = 0;

          while (!(step = iterator.next()).done) {
            child = step.value;
            nextName = nextNamePrefix + getElementKey(child, ii++);
            subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
          }
        } else if (type === 'object') {
          var childrenString = '' + children;
          {
            {
              throw Error("Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). If you meant to render a collection of children, use an array instead.");
            }
          }
        }
      }

      return subtreeCount;
    }
    /**
     * Maps children that are typically specified as `props.children`.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrenmap
     *
     * The provided mapFunction(child, index) will be called for each
     * leaf child.
     *
     * @param {?*} children Children tree container.
     * @param {function(*, int)} func The map function.
     * @param {*} context Context for mapFunction.
     * @return {object} Object containing the ordered map of results.
     */


    function mapChildren(children, func, context) {
      if (children == null) {
        return children;
      }

      var result = [];
      var count = 0;
      mapIntoArray(children, result, '', '', function (child) {
        return func.call(context, child, count++);
      });
      return result;
    }
    /**
     * Count the number of children that are typically specified as
     * `props.children`.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrencount
     *
     * @param {?*} children Children tree container.
     * @return {number} The number of children.
     */


    function countChildren(children) {
      var n = 0;
      mapChildren(children, function () {
        n++; // Don't return anything
      });
      return n;
    }
    /**
     * Iterates through children that are typically specified as `props.children`.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
     *
     * The provided forEachFunc(child, index) will be called for each
     * leaf child.
     *
     * @param {?*} children Children tree container.
     * @param {function(*, int)} forEachFunc
     * @param {*} forEachContext Context for forEachContext.
     */


    function forEachChildren(children, forEachFunc, forEachContext) {
      mapChildren(children, function () {
        forEachFunc.apply(this, arguments); // Don't return anything.
      }, forEachContext);
    }
    /**
     * Flatten a children object (typically specified as `props.children`) and
     * return an array with appropriately re-keyed children.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
     */


    function toArray(children) {
      return mapChildren(children, function (child) {
        return child;
      }) || [];
    }
    /**
     * Returns the first child in a collection of children and verifies that there
     * is only one child in the collection.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrenonly
     *
     * The current implementation of this function assumes that a single child gets
     * passed without a wrapper, but the purpose of this helper function is to
     * abstract away the particular structure of children.
     *
     * @param {?object} children Child collection structure.
     * @return {ReactElement} The first and only `ReactElement` contained in the
     * structure.
     */


    function onlyChild(children) {
      if (!isValidElement(children)) {
        {
          throw Error("React.Children.only expected to receive a single React element child.");
        }
      }

      return children;
    }

    function createContext(defaultValue, calculateChangedBits) {
      if (calculateChangedBits === undefined) {
        calculateChangedBits = null;
      } else {
        {
          if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
            error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
          }
        }
      }

      var context = {
        $$typeof: REACT_CONTEXT_TYPE,
        _calculateChangedBits: calculateChangedBits,
        // As a workaround to support multiple concurrent renderers, we categorize
        // some renderers as primary and others as secondary. We only expect
        // there to be two concurrent renderers at most: React Native (primary) and
        // Fabric (secondary); React DOM (primary) and React ART (secondary).
        // Secondary renderers store their context values on separate fields.
        _currentValue: defaultValue,
        _currentValue2: defaultValue,
        // Used to track how many concurrent renderers this context currently
        // supports within in a single renderer. Such as parallel server rendering.
        _threadCount: 0,
        // These are circular
        Provider: null,
        Consumer: null
      };
      context.Provider = {
        $$typeof: REACT_PROVIDER_TYPE,
        _context: context
      };
      var hasWarnedAboutUsingNestedContextConsumers = false;
      var hasWarnedAboutUsingConsumerProvider = false;
      var hasWarnedAboutDisplayNameOnConsumer = false;
      {
        // A separate object, but proxies back to the original context object for
        // backwards compatibility. It has a different $$typeof, so we can properly
        // warn for the incorrect usage of Context as a Consumer.
        var Consumer = {
          $$typeof: REACT_CONTEXT_TYPE,
          _context: context,
          _calculateChangedBits: context._calculateChangedBits
        }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

        Object.defineProperties(Consumer, {
          Provider: {
            get: function get() {
              if (!hasWarnedAboutUsingConsumerProvider) {
                hasWarnedAboutUsingConsumerProvider = true;
                error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
              }

              return context.Provider;
            },
            set: function set(_Provider) {
              context.Provider = _Provider;
            }
          },
          _currentValue: {
            get: function get() {
              return context._currentValue;
            },
            set: function set(_currentValue) {
              context._currentValue = _currentValue;
            }
          },
          _currentValue2: {
            get: function get() {
              return context._currentValue2;
            },
            set: function set(_currentValue2) {
              context._currentValue2 = _currentValue2;
            }
          },
          _threadCount: {
            get: function get() {
              return context._threadCount;
            },
            set: function set(_threadCount) {
              context._threadCount = _threadCount;
            }
          },
          Consumer: {
            get: function get() {
              if (!hasWarnedAboutUsingNestedContextConsumers) {
                hasWarnedAboutUsingNestedContextConsumers = true;
                error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
              }

              return context.Consumer;
            }
          },
          displayName: {
            get: function get() {
              return context.displayName;
            },
            set: function set(displayName) {
              if (!hasWarnedAboutDisplayNameOnConsumer) {
                warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);
                hasWarnedAboutDisplayNameOnConsumer = true;
              }
            }
          }
        }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

        context.Consumer = Consumer;
      }
      {
        context._currentRenderer = null;
        context._currentRenderer2 = null;
      }
      return context;
    }

    var Uninitialized = -1;
    var Pending = 0;
    var Resolved = 1;
    var Rejected = 2;

    function lazyInitializer(payload) {
      if (payload._status === Uninitialized) {
        var ctor = payload._result;
        var thenable = ctor(); // Transition to the next state.

        var pending = payload;
        pending._status = Pending;
        pending._result = thenable;
        thenable.then(function (moduleObject) {
          if (payload._status === Pending) {
            var defaultExport = moduleObject["default"];
            {
              if (defaultExport === undefined) {
                error('lazy: Expected the result of a dynamic import() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
                'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
              }
            } // Transition to the next state.

            var resolved = payload;
            resolved._status = Resolved;
            resolved._result = defaultExport;
          }
        }, function (error) {
          if (payload._status === Pending) {
            // Transition to the next state.
            var rejected = payload;
            rejected._status = Rejected;
            rejected._result = error;
          }
        });
      }

      if (payload._status === Resolved) {
        return payload._result;
      } else {
        throw payload._result;
      }
    }

    function lazy(ctor) {
      var payload = {
        // We use these fields to store the result.
        _status: -1,
        _result: ctor
      };
      var lazyType = {
        $$typeof: REACT_LAZY_TYPE,
        _payload: payload,
        _init: lazyInitializer
      };
      {
        // In production, this would just set it on the object.
        var defaultProps;
        var propTypes; // $FlowFixMe

        Object.defineProperties(lazyType, {
          defaultProps: {
            configurable: true,
            get: function get() {
              return defaultProps;
            },
            set: function set(newDefaultProps) {
              error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
              defaultProps = newDefaultProps; // Match production behavior more closely:
              // $FlowFixMe

              Object.defineProperty(lazyType, 'defaultProps', {
                enumerable: true
              });
            }
          },
          propTypes: {
            configurable: true,
            get: function get() {
              return propTypes;
            },
            set: function set(newPropTypes) {
              error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
              propTypes = newPropTypes; // Match production behavior more closely:
              // $FlowFixMe

              Object.defineProperty(lazyType, 'propTypes', {
                enumerable: true
              });
            }
          }
        });
      }
      return lazyType;
    }

    function forwardRef(render) {
      {
        if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
          error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
        } else if (typeof render !== 'function') {
          error('forwardRef requires a render function but was given %s.', render === null ? 'null' : _typeof(render));
        } else {
          if (render.length !== 0 && render.length !== 2) {
            error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
          }
        }

        if (render != null) {
          if (render.defaultProps != null || render.propTypes != null) {
            error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
          }
        }
      }
      var elementType = {
        $$typeof: REACT_FORWARD_REF_TYPE,
        render: render
      };
      {
        var ownName;
        Object.defineProperty(elementType, 'displayName', {
          enumerable: false,
          configurable: true,
          get: function get() {
            return ownName;
          },
          set: function set(name) {
            ownName = name;

            if (render.displayName == null) {
              render.displayName = name;
            }
          }
        });
      }
      return elementType;
    } // Filter certain DOM attributes (e.g. src, href) if their values are empty strings.


    var enableScopeAPI = false; // Experimental Create Event Handle API.

    function isValidElementType(type) {
      if (typeof type === 'string' || typeof type === 'function') {
        return true;
      } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


      if (type === exports.Fragment || type === exports.Profiler || type === REACT_DEBUG_TRACING_MODE_TYPE || type === exports.StrictMode || type === exports.Suspense || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {
        return true;
      }

      if (_typeof(type) === 'object' && type !== null) {
        if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
          return true;
        }
      }

      return false;
    }

    function memo(type, compare) {
      {
        if (!isValidElementType(type)) {
          error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : _typeof(type));
        }
      }
      var elementType = {
        $$typeof: REACT_MEMO_TYPE,
        type: type,
        compare: compare === undefined ? null : compare
      };
      {
        var ownName;
        Object.defineProperty(elementType, 'displayName', {
          enumerable: false,
          configurable: true,
          get: function get() {
            return ownName;
          },
          set: function set(name) {
            ownName = name;

            if (type.displayName == null) {
              type.displayName = name;
            }
          }
        });
      }
      return elementType;
    }

    function resolveDispatcher() {
      var dispatcher = ReactCurrentDispatcher.current;

      if (!(dispatcher !== null)) {
        {
          throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
        }
      }

      return dispatcher;
    }

    function useContext(Context, unstable_observedBits) {
      var dispatcher = resolveDispatcher();
      {
        if (unstable_observedBits !== undefined) {
          error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://reactjs.org/link/rules-of-hooks' : '');
        } // TODO: add a more generic warning for invalid values.


        if (Context._context !== undefined) {
          var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
          // and nobody should be using this in existing code.

          if (realContext.Consumer === Context) {
            error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
          } else if (realContext.Provider === Context) {
            error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
          }
        }
      }
      return dispatcher.useContext(Context, unstable_observedBits);
    }

    function useState(initialState) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useState(initialState);
    }

    function useReducer(reducer, initialArg, init) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useReducer(reducer, initialArg, init);
    }

    function useRef(initialValue) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useRef(initialValue);
    }

    function useEffect(create, deps) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useEffect(create, deps);
    }

    function useLayoutEffect(create, deps) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useLayoutEffect(create, deps);
    }

    function useCallback(callback, deps) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useCallback(callback, deps);
    }

    function useMemo(create, deps) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useMemo(create, deps);
    }

    function useImperativeHandle(ref, create, deps) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useImperativeHandle(ref, create, deps);
    }

    function useDebugValue(value, formatterFn) {
      {
        var dispatcher = resolveDispatcher();
        return dispatcher.useDebugValue(value, formatterFn);
      }
    } // Helpers to patch console.logs to avoid logging during side-effect free
    // replaying on render function. This currently only patches the object
    // lazily which won't cover if the log function was extracted eagerly.
    // We could also eagerly patch the method.


    var disabledDepth = 0;
    var prevLog;
    var prevInfo;
    var prevWarn;
    var prevError;
    var prevGroup;
    var prevGroupCollapsed;
    var prevGroupEnd;

    function disabledLog() {}

    disabledLog.__reactDisabledLog = true;

    function disableLogs() {
      {
        if (disabledDepth === 0) {
          /* eslint-disable react-internal/no-production-logging */
          prevLog = console.log;
          prevInfo = console.info;
          prevWarn = console.warn;
          prevError = console.error;
          prevGroup = console.group;
          prevGroupCollapsed = console.groupCollapsed;
          prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

          var props = {
            configurable: true,
            enumerable: true,
            value: disabledLog,
            writable: true
          }; // $FlowFixMe Flow thinks console is immutable.

          Object.defineProperties(console, {
            info: props,
            log: props,
            warn: props,
            error: props,
            group: props,
            groupCollapsed: props,
            groupEnd: props
          });
          /* eslint-enable react-internal/no-production-logging */
        }

        disabledDepth++;
      }
    }

    function reenableLogs() {
      {
        disabledDepth--;

        if (disabledDepth === 0) {
          /* eslint-disable react-internal/no-production-logging */
          var props = {
            configurable: true,
            enumerable: true,
            writable: true
          }; // $FlowFixMe Flow thinks console is immutable.

          Object.defineProperties(console, {
            log: _assign({}, props, {
              value: prevLog
            }),
            info: _assign({}, props, {
              value: prevInfo
            }),
            warn: _assign({}, props, {
              value: prevWarn
            }),
            error: _assign({}, props, {
              value: prevError
            }),
            group: _assign({}, props, {
              value: prevGroup
            }),
            groupCollapsed: _assign({}, props, {
              value: prevGroupCollapsed
            }),
            groupEnd: _assign({}, props, {
              value: prevGroupEnd
            })
          });
          /* eslint-enable react-internal/no-production-logging */
        }

        if (disabledDepth < 0) {
          error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
        }
      }
    }

    var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
    var prefix;

    function describeBuiltInComponentFrame(name, source, ownerFn) {
      {
        if (prefix === undefined) {
          // Extract the VM specific prefix used by each line.
          try {
            throw Error();
          } catch (x) {
            var match = x.stack.trim().match(/\n( *(at )?)/);
            prefix = match && match[1] || '';
          }
        } // We use the prefix to ensure our stacks line up with native stack frames.


        return '\n' + prefix + name;
      }
    }

    var reentry = false;
    var componentFrameCache;
    {
      var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
      componentFrameCache = new PossiblyWeakMap();
    }

    function describeNativeComponentFrame(fn, construct) {
      // If something asked for a stack inside a fake render, it should get ignored.
      if (!fn || reentry) {
        return '';
      }

      {
        var frame = componentFrameCache.get(fn);

        if (frame !== undefined) {
          return frame;
        }
      }
      var control;
      reentry = true;
      var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

      Error.prepareStackTrace = undefined;
      var previousDispatcher;
      {
        previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
        // for warnings.

        ReactCurrentDispatcher$1.current = null;
        disableLogs();
      }

      try {
        // This should throw.
        if (construct) {
          // Something should be setting the props in the constructor.
          var Fake = function Fake() {
            throw Error();
          }; // $FlowFixMe


          Object.defineProperty(Fake.prototype, 'props', {
            set: function set() {
              // We use a throwing setter instead of frozen or non-writable props
              // because that won't throw in a non-strict mode function.
              throw Error();
            }
          });

          if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === 'object' && Reflect.construct) {
            // We construct a different control for this case to include any extra
            // frames added by the construct call.
            try {
              Reflect.construct(Fake, []);
            } catch (x) {
              control = x;
            }

            Reflect.construct(fn, [], Fake);
          } else {
            try {
              Fake.call();
            } catch (x) {
              control = x;
            }

            fn.call(Fake.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (x) {
            control = x;
          }

          fn();
        }
      } catch (sample) {
        // This is inlined manually because closure doesn't do it for us.
        if (sample && control && typeof sample.stack === 'string') {
          // This extracts the first frame from the sample that isn't also in the control.
          // Skipping one frame that we assume is the frame that calls the two.
          var sampleLines = sample.stack.split('\n');
          var controlLines = control.stack.split('\n');
          var s = sampleLines.length - 1;
          var c = controlLines.length - 1;

          while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
            // We expect at least one stack frame to be shared.
            // Typically this will be the root most one. However, stack frames may be
            // cut off due to maximum stack limits. In this case, one maybe cut off
            // earlier than the other. We assume that the sample is longer or the same
            // and there for cut off earlier. So we should find the root most frame in
            // the sample somewhere in the control.
            c--;
          }

          for (; s >= 1 && c >= 0; s--, c--) {
            // Next we find the first one that isn't the same which should be the
            // frame that called our sample function and the control.
            if (sampleLines[s] !== controlLines[c]) {
              // In V8, the first line is describing the message but other VMs don't.
              // If we're about to return the first line, and the control is also on the same
              // line, that's a pretty good indicator that our sample threw at same line as
              // the control. I.e. before we entered the sample frame. So we ignore this result.
              // This can happen if you passed a class to function component, or non-function.
              if (s !== 1 || c !== 1) {
                do {
                  s--;
                  c--; // We may still have similar intermediate frames from the construct call.
                  // The next one that isn't the same should be our match though.

                  if (c < 0 || sampleLines[s] !== controlLines[c]) {
                    // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                    var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                    {
                      if (typeof fn === 'function') {
                        componentFrameCache.set(fn, _frame);
                      }
                    } // Return the line we found.

                    return _frame;
                  }
                } while (s >= 1 && c >= 0);
              }

              break;
            }
          }
        }
      } finally {
        reentry = false;
        {
          ReactCurrentDispatcher$1.current = previousDispatcher;
          reenableLogs();
        }
        Error.prepareStackTrace = previousPrepareStackTrace;
      } // Fallback to just using the name if we couldn't make it throw.


      var name = fn ? fn.displayName || fn.name : '';
      var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
      {
        if (typeof fn === 'function') {
          componentFrameCache.set(fn, syntheticFrame);
        }
      }
      return syntheticFrame;
    }

    function describeFunctionComponentFrame(fn, source, ownerFn) {
      {
        return describeNativeComponentFrame(fn, false);
      }
    }

    function shouldConstruct(Component) {
      var prototype = Component.prototype;
      return !!(prototype && prototype.isReactComponent);
    }

    function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
      if (type == null) {
        return '';
      }

      if (typeof type === 'function') {
        {
          return describeNativeComponentFrame(type, shouldConstruct(type));
        }
      }

      if (typeof type === 'string') {
        return describeBuiltInComponentFrame(type);
      }

      switch (type) {
        case exports.Suspense:
          return describeBuiltInComponentFrame('Suspense');

        case REACT_SUSPENSE_LIST_TYPE:
          return describeBuiltInComponentFrame('SuspenseList');
      }

      if (_typeof(type) === 'object') {
        switch (type.$$typeof) {
          case REACT_FORWARD_REF_TYPE:
            return describeFunctionComponentFrame(type.render);

          case REACT_MEMO_TYPE:
            // Memo may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

          case REACT_BLOCK_TYPE:
            return describeFunctionComponentFrame(type._render);

          case REACT_LAZY_TYPE:
            {
              var lazyComponent = type;
              var payload = lazyComponent._payload;
              var init = lazyComponent._init;

              try {
                // Lazy may contain any component type so we recursively resolve it.
                return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
              } catch (x) {}
            }
        }
      }

      return '';
    }

    var loggedTypeFailures = {};
    var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

    function setCurrentlyValidatingElement(element) {
      {
        if (element) {
          var owner = element._owner;
          var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
          ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
        } else {
          ReactDebugCurrentFrame$1.setExtraStackFrame(null);
        }
      }
    }

    function checkPropTypes(typeSpecs, values, location, componentName, element) {
      {
        // $FlowFixMe This is okay but Flow doesn't know it.
        var has = Function.call.bind(Object.prototype.hasOwnProperty);

        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
            // fail the render phase where it didn't fail before. So we log it.
            // After these have been cleaned up, we'll let them throw.

            try {
              // This is intentionally an invariant that gets caught. It's the same
              // behavior as without this statement except with a better message.
              if (typeof typeSpecs[typeSpecName] !== 'function') {
                var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + _typeof(typeSpecs[typeSpecName]) + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                err.name = 'Invariant Violation';
                throw err;
              }

              error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
            } catch (ex) {
              error$1 = ex;
            }

            if (error$1 && !(error$1 instanceof Error)) {
              setCurrentlyValidatingElement(element);
              error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, _typeof(error$1));
              setCurrentlyValidatingElement(null);
            }

            if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
              // Only monitor this failure once because there tends to be a lot of the
              // same error.
              loggedTypeFailures[error$1.message] = true;
              setCurrentlyValidatingElement(element);
              error('Failed %s type: %s', location, error$1.message);
              setCurrentlyValidatingElement(null);
            }
          }
        }
      }
    }

    function setCurrentlyValidatingElement$1(element) {
      {
        if (element) {
          var owner = element._owner;
          var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
          setExtraStackFrame(stack);
        } else {
          setExtraStackFrame(null);
        }
      }
    }

    var propTypesMisspellWarningShown;
    {
      propTypesMisspellWarningShown = false;
    }

    function getDeclarationErrorAddendum() {
      if (ReactCurrentOwner.current) {
        var name = getComponentName(ReactCurrentOwner.current.type);

        if (name) {
          return '\n\nCheck the render method of `' + name + '`.';
        }
      }

      return '';
    }

    function getSourceInfoErrorAddendum(source) {
      if (source !== undefined) {
        var fileName = source.fileName.replace(/^.*[\\\/]/, '');
        var lineNumber = source.lineNumber;
        return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
      }

      return '';
    }

    function getSourceInfoErrorAddendumForProps(elementProps) {
      if (elementProps !== null && elementProps !== undefined) {
        return getSourceInfoErrorAddendum(elementProps.__source);
      }

      return '';
    }
    /**
     * Warn if there's no key explicitly set on dynamic arrays of children or
     * object keys are not valid. This allows us to keep track of children between
     * updates.
     */


    var ownerHasKeyUseWarning = {};

    function getCurrentComponentErrorInfo(parentType) {
      var info = getDeclarationErrorAddendum();

      if (!info) {
        var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

        if (parentName) {
          info = "\n\nCheck the top-level render call using <" + parentName + ">.";
        }
      }

      return info;
    }
    /**
     * Warn if the element doesn't have an explicit key assigned to it.
     * This element is in an array. The array could grow and shrink or be
     * reordered. All children that haven't already been validated are required to
     * have a "key" property assigned to it. Error statuses are cached so a warning
     * will only be shown once.
     *
     * @internal
     * @param {ReactElement} element Element that requires a key.
     * @param {*} parentType element's parent's type.
     */


    function validateExplicitKey(element, parentType) {
      if (!element._store || element._store.validated || element.key != null) {
        return;
      }

      element._store.validated = true;
      var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

      if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
        return;
      }

      ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
      // property, it may be the creator of the child that's responsible for
      // assigning it a key.

      var childOwner = '';

      if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
        // Give the component that originally created this child.
        childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
      }

      {
        setCurrentlyValidatingElement$1(element);
        error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
        setCurrentlyValidatingElement$1(null);
      }
    }
    /**
     * Ensure that every element either is passed in a static location, in an
     * array with an explicit keys property defined, or in an object literal
     * with valid key property.
     *
     * @internal
     * @param {ReactNode} node Statically passed child of any type.
     * @param {*} parentType node's parent's type.
     */


    function validateChildKeys(node, parentType) {
      if (_typeof(node) !== 'object') {
        return;
      }

      if (Array.isArray(node)) {
        for (var i = 0; i < node.length; i++) {
          var child = node[i];

          if (isValidElement(child)) {
            validateExplicitKey(child, parentType);
          }
        }
      } else if (isValidElement(node)) {
        // This element was passed in a valid location.
        if (node._store) {
          node._store.validated = true;
        }
      } else if (node) {
        var iteratorFn = getIteratorFn(node);

        if (typeof iteratorFn === 'function') {
          // Entry iterators used to provide implicit keys,
          // but now we print a separate warning for them later.
          if (iteratorFn !== node.entries) {
            var iterator = iteratorFn.call(node);
            var step;

            while (!(step = iterator.next()).done) {
              if (isValidElement(step.value)) {
                validateExplicitKey(step.value, parentType);
              }
            }
          }
        }
      }
    }
    /**
     * Given an element, validate that its props follow the propTypes definition,
     * provided by the type.
     *
     * @param {ReactElement} element
     */


    function validatePropTypes(element) {
      {
        var type = element.type;

        if (type === null || type === undefined || typeof type === 'string') {
          return;
        }

        var propTypes;

        if (typeof type === 'function') {
          propTypes = type.propTypes;
        } else if (_typeof(type) === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        type.$$typeof === REACT_MEMO_TYPE)) {
          propTypes = type.propTypes;
        } else {
          return;
        }

        if (propTypes) {
          // Intentionally inside to avoid triggering lazy initializers:
          var name = getComponentName(type);
          checkPropTypes(propTypes, element.props, 'prop', name, element);
        } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
          propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

          var _name = getComponentName(type);

          error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
        }

        if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
          error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
        }
      }
    }
    /**
     * Given a fragment, validate that it can only be provided with fragment props
     * @param {ReactElement} fragment
     */


    function validateFragmentProps(fragment) {
      {
        var keys = Object.keys(fragment.props);

        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];

          if (key !== 'children' && key !== 'key') {
            setCurrentlyValidatingElement$1(fragment);
            error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
            setCurrentlyValidatingElement$1(null);
            break;
          }
        }

        if (fragment.ref !== null) {
          setCurrentlyValidatingElement$1(fragment);
          error('Invalid attribute `ref` supplied to `React.Fragment`.');
          setCurrentlyValidatingElement$1(null);
        }
      }
    }

    function createElementWithValidation(type, props, children) {
      var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
      // succeed and there will likely be errors in render.

      if (!validType) {
        var info = '';

        if (type === undefined || _typeof(type) === 'object' && type !== null && Object.keys(type).length === 0) {
          info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
        }

        var sourceInfo = getSourceInfoErrorAddendumForProps(props);

        if (sourceInfo) {
          info += sourceInfo;
        } else {
          info += getDeclarationErrorAddendum();
        }

        var typeString;

        if (type === null) {
          typeString = 'null';
        } else if (Array.isArray(type)) {
          typeString = 'array';
        } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
          typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
          info = ' Did you accidentally export a JSX literal instead of a component?';
        } else {
          typeString = _typeof(type);
        }

        {
          error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
        }
      }

      var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
      // TODO: Drop this when these are no longer allowed as the type argument.

      if (element == null) {
        return element;
      } // Skip key warning if the type isn't valid since our key validation logic
      // doesn't expect a non-string/function type and can throw confusing errors.
      // We don't want exception behavior to differ between dev and prod.
      // (Rendering will throw with a helpful message and as soon as the type is
      // fixed, the key warnings will appear.)


      if (validType) {
        for (var i = 2; i < arguments.length; i++) {
          validateChildKeys(arguments[i], type);
        }
      }

      if (type === exports.Fragment) {
        validateFragmentProps(element);
      } else {
        validatePropTypes(element);
      }

      return element;
    }

    var didWarnAboutDeprecatedCreateFactory = false;

    function createFactoryWithValidation(type) {
      var validatedFactory = createElementWithValidation.bind(null, type);
      validatedFactory.type = type;
      {
        if (!didWarnAboutDeprecatedCreateFactory) {
          didWarnAboutDeprecatedCreateFactory = true;
          warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
        } // Legacy hook: remove it


        Object.defineProperty(validatedFactory, 'type', {
          enumerable: false,
          get: function get() {
            warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
            Object.defineProperty(this, 'type', {
              value: type
            });
            return type;
          }
        });
      }
      return validatedFactory;
    }

    function cloneElementWithValidation(element, props, children) {
      var newElement = cloneElement.apply(this, arguments);

      for (var i = 2; i < arguments.length; i++) {
        validateChildKeys(arguments[i], newElement.type);
      }

      validatePropTypes(newElement);
      return newElement;
    }

    {
      try {
        var frozenObject = Object.freeze({});
        /* eslint-disable no-new */

        new Map([[frozenObject, null]]);
        new Set([frozenObject]);
        /* eslint-enable no-new */
      } catch (e) {}
    }
    var createElement$1 = createElementWithValidation;
    var cloneElement$1 = cloneElementWithValidation;
    var createFactory = createFactoryWithValidation;
    var Children = {
      map: mapChildren,
      forEach: forEachChildren,
      count: countChildren,
      toArray: toArray,
      only: onlyChild
    };
    exports.Children = Children;
    exports.Component = Component;
    exports.PureComponent = PureComponent;
    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
    exports.cloneElement = cloneElement$1;
    exports.createContext = createContext;
    exports.createElement = createElement$1;
    exports.createFactory = createFactory;
    exports.createRef = createRef;
    exports.forwardRef = forwardRef;
    exports.isValidElement = isValidElement;
    exports.lazy = lazy;
    exports.memo = memo;
    exports.useCallback = useCallback;
    exports.useContext = useContext;
    exports.useDebugValue = useDebugValue;
    exports.useEffect = useEffect;
    exports.useImperativeHandle = useImperativeHandle;
    exports.useLayoutEffect = useLayoutEffect;
    exports.useMemo = useMemo;
    exports.useReducer = useReducer;
    exports.useRef = useRef;
    exports.useState = useState;
    exports.version = ReactVersion;
  })();
}

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ })

/******/ });
//# sourceMappingURL=application-7415991534c818c017e0.js.map