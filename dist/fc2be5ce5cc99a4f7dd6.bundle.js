/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.tsx":
/*!*********************!*\
  !*** ./src/app.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var React = __webpack_require__(/*! react */ "react");
var useState = React.useState, useEffect = React.useEffect;
var hello_1 = __webpack_require__(/*! ./components/hello */ "./src/components/hello.tsx");
var APP = function () {
    return (React.createElement("div", null,
        React.createElement(hello_1.default, { name: "react", title: "ts" })));
};
exports["default"] = APP;


/***/ }),

/***/ "./src/components/hello.tsx":
/*!**********************************!*\
  !*** ./src/components/hello.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var React = __webpack_require__(/*! react */ "react");
var useState = React.useState, useEffect = React.useEffect;
var Hello = function (props) {
    var _a = useState(''), showName = _a[0], setName = _a[1];
    var _b = useState(''), showTitle = _b[0], setTitle = _b[1];
    useEffect(function () {
        setName(props.name);
        setTitle(props.title);
    }, [props]);
    return (React.createElement("h1", null,
        "Hello ",
        showName,
        " and ",
        showTitle));
};
exports["default"] = Hello;


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = ReactDOM;

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var React = __webpack_require__(/*! react */ "react");
var ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
var app_1 = __webpack_require__(/*! ./app */ "./src/app.tsx");
ReactDOM.render(React.createElement(app_1.default, null), document.getElementById('app'));

})();

/******/ })()
;
//# sourceMappingURL=fc2be5ce5cc99a4f7dd6.bundle.js.map