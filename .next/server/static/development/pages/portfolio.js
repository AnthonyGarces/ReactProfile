module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\antho\\ClassStuff\\HW\\wk20\\react-next-prof\\components\\footer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
function Footer() {
  return __jsx("div", {
    style: {
      verticalAlign: "baseline"
    },
    className: "jsx-2501902091" + " " + "mx-auto text-light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, "Copyright", __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2501902091",
    __self: this
  }, ".jsx-2501902091{width:100%;border-top:8px solid #4aaaa5;background-color:#666666;height:50px;padding:0px 0px 0px 0px;text-align:center;margin-top:40px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYW50aG9cXENsYXNzU3R1ZmZcXEhXXFx3azIwXFxyZWFjdC1uZXh0LXByb2ZcXGNvbXBvbmVudHNcXGZvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLd0IsQUFFNEIsV0FDa0IsNkJBQ0oseUJBQ2IsWUFDWSx3QkFDTixrQkFDRixnQkFDcEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxhbnRob1xcQ2xhc3NTdHVmZlxcSFdcXHdrMjBcXHJlYWN0LW5leHQtcHJvZlxcY29tcG9uZW50c1xcZm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byB0ZXh0LWxpZ2h0XCIgc3R5bGU9e3sgdmVydGljYWxBbGlnbjogXCJiYXNlbGluZVwiIH19PlxyXG4gICAgICAgICAgICBDb3B5cmlnaHRcclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogOHB4IHNvbGlkICM0YWFhYTU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2NjY2O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICApXHJcbn0iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\antho\\\\ClassStuff\\\\HW\\\\wk20\\\\react-next-prof\\\\components\\\\footer.js */"));
}

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav */ "./components/nav.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ "./components/footer.js");
var _jsxFileName = "C:\\Users\\antho\\ClassStuff\\HW\\wk20\\react-next-prof\\components\\layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // import background from '../public/images/light_honeycomb.png';
//background not loading properly style={{ backgroundImage:`url(${background})`}}

const Layout = props => {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "Esteban Garces"), __jsx("link", {
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",
    integrity: "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",
    crossorigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  })), __jsx(_nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }), props.children, __jsx(_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navbar; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Nav */ "react-bootstrap/Nav");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\antho\\ClassStuff\\HW\\wk20\\react-next-prof\\components\\nav.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Navbar() {
  return __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "navbar navbar-light bg-light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2860009515" + " " + 'bg-info text-white p-1 justify-content',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Esteban Garces"), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "justify-content-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default.a.Link, {
    eventKey: 1,
    href: "/",
    className: "nav-link list-group-item px-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "About Me")), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default.a.Link, {
    eventKey: 2,
    href: "/portfolio",
    className: "nav-link list-group-item px-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Portfolio")), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default.a.Link, {
    eventKey: 3,
    href: "/contact",
    className: "nav-link list-group-item px-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Contact"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2860009515",
    __self: this
  }, "div.jsx-2860009515{font-size:34px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYW50aG9cXENsYXNzU3R1ZmZcXEhXXFx3azIwXFxyZWFjdC1uZXh0LXByb2ZcXGNvbXBvbmVudHNcXG5hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQndCLEFBSWdCLGVBQUMiLCJmaWxlIjoiQzpcXFVzZXJzXFxhbnRob1xcQ2xhc3NTdHVmZlxcSFdcXHdrMjBcXHJlYWN0LW5leHQtcHJvZlxcY29tcG9uZW50c1xcbmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdiBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcigpe1xyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWxpZ2h0IGJnLWxpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZy1pbmZvIHRleHQtd2hpdGUgcC0xIGp1c3RpZnktY29udGVudCc+XHJcbiAgICAgICAgICAgICAgICBFc3RlYmFuIEdhcmNlc1xyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9J2p1c3RpZnktY29udGVudC1lbmQnPlxyXG4gICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT17MX0gaHJlZj0nLycgY2xhc3NOYW1lPSduYXYtbGluayBsaXN0LWdyb3VwLWl0ZW0gcHgtMic+QWJvdXQgTWU8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgIDxOYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9ezJ9IGhyZWY9Jy9wb3J0Zm9saW8nIGNsYXNzTmFtZT0nbmF2LWxpbmsgbGlzdC1ncm91cC1pdGVtIHB4LTInPlBvcnRmb2xpbzwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT17M30gaHJlZj0nL2NvbnRhY3QnIGNsYXNzTmFtZT0nbmF2LWxpbmsgbGlzdC1ncm91cC1pdGVtIHB4LTInPkNvbnRhY3Q8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzRweFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgKX1cclxuO1xyXG5cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\antho\\\\ClassStuff\\\\HW\\\\wk20\\\\react-next-prof\\\\components\\\\nav.js */"));
}
;

/***/ }),

/***/ "./pages/portfolio.js":
/*!****************************!*\
  !*** ./pages/portfolio.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
var _jsxFileName = "C:\\Users\\antho\\ClassStuff\\HW\\wk20\\react-next-prof\\pages\\portfolio.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Portfolio = () => __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, "Portfolio");

/* harmony default export */ __webpack_exports__["default"] = (Portfolio);

/***/ }),

/***/ 5:
/*!**********************************!*\
  !*** multi ./pages/portfolio.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\antho\ClassStuff\HW\wk20\react-next-prof\pages\portfolio.js */"./pages/portfolio.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap/Nav":
/*!**************************************!*\
  !*** external "react-bootstrap/Nav" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Nav");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=portfolio.js.map