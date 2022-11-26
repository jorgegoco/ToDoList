/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font-style: normal;\r\n}\r\n\r\nbody {\r\n  background-color: rgb(235, 235, 235);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.container {\r\n  background-color: rgb(250, 250, 250);\r\n  width: 80%;\r\n  height: 70vh;\r\n  margin-top: 100px;\r\n  display: grid;\r\n  grid-template-rows: 1fr 1fr 3fr 1fr;\r\n  justify-items: start;\r\n  align-items: center;\r\n  box-shadow:\r\n    0 8px 10px lightgray,\r\n    -10px 8px 15px lightgray,\r\n    10px 8px 15px lightgray;\r\n}\r\n\r\n.title,\r\n.addTask,\r\n.items,\r\n.footer,\r\n.task {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-bottom: 2px solid rgb(235, 235, 235);\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.items {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.items:nth-child(3n+0) {\r\n  border-bottom: none;\r\n}\r\n\r\n.titleText,\r\n.addTaskText,\r\n.footerText {\r\n  padding-left: 2%;\r\n  font-size: 22px;\r\n}\r\n\r\n.fa-refresh {\r\n  margin-left: auto;\r\n  margin-bottom: 15px;\r\n  padding-left: 4%;\r\n  color: rgb(146, 146, 146);\r\n  transform: rotate(90deg);\r\n}\r\n\r\n.addTaskText {\r\n  width: 90%;\r\n  line-height: 200%;\r\n  font-style: italic;\r\n  background-color: transparent;\r\n}\r\n\r\n.addTaskText:focus {\r\n  outline: none;\r\n}\r\n\r\n.fa-level-down {\r\n  margin-left: auto;\r\n  margin-bottom: 20px;\r\n  padding-left: 4%;\r\n  color: lightgray;\r\n  transform: rotate(90deg);\r\n}\r\n\r\n.task {\r\n  padding: 0 2%;\r\n  font-size: 22px;\r\n  flex: 0 0 33.33%;\r\n  column-gap: 2%;\r\n}\r\n\r\n.highlightedTask {\r\n  background-color: rgb(255, 255, 200);\r\n}\r\n\r\n.checkbox {\r\n  width: 22px;\r\n  height: 22px;\r\n  border: 2px;\r\n}\r\n\r\n.taskToDo {\r\n  width: 100%;\r\n  line-height: 200%;\r\n  background-color: transparent;\r\n  font-size: 22px;\r\n}\r\n\r\n.taskToDoChecked {\r\n  text-decoration: line-through;\r\n  color: rgb(175, 175, 175);\r\n}\r\n\r\n.taskToDo:focus {\r\n  outline: none;\r\n}\r\n\r\n.fa-ellipsis-v {\r\n  color: lightgray;\r\n  cursor: move;\r\n}\r\n\r\n.fa-trash-o {\r\n  color: rgb(160, 159, 159);\r\n  cursor: pointer;\r\n}\r\n\r\n.footer {\r\n  background-color: rgb(242, 242, 242);\r\n  justify-content: center;\r\n}\r\n\r\n.footerText {\r\n  color: rgb(169, 167, 167);\r\n  cursor: pointer;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;EACV,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,oCAAoC;EACpC,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,oCAAoC;EACpC,UAAU;EACV,YAAY;EACZ,iBAAiB;EACjB,aAAa;EACb,mCAAmC;EACnC,oBAAoB;EACpB,mBAAmB;EACnB;;;2BAGyB;AAC3B;;AAEA;;;;;EAKE,WAAW;EACX,YAAY;EACZ,2CAA2C;EAC3C,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;;;EAGE,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,gBAAgB;EAChB,yBAAyB;EACzB,wBAAwB;AAC1B;;AAEA;EACE,UAAU;EACV,iBAAiB;EACjB,kBAAkB;EAClB,6BAA6B;AAC/B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,gBAAgB;EAChB,gBAAgB;EAChB,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,eAAe;EACf,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;EACE,6BAA6B;EAC7B,yBAAyB;AAC3B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,eAAe;AACjB;;AAEA;EACE,oCAAoC;EACpC,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;EACzB,eAAe;AACjB","sourcesContent":["* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font-style: normal;\r\n}\r\n\r\nbody {\r\n  background-color: rgb(235, 235, 235);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.container {\r\n  background-color: rgb(250, 250, 250);\r\n  width: 80%;\r\n  height: 70vh;\r\n  margin-top: 100px;\r\n  display: grid;\r\n  grid-template-rows: 1fr 1fr 3fr 1fr;\r\n  justify-items: start;\r\n  align-items: center;\r\n  box-shadow:\r\n    0 8px 10px lightgray,\r\n    -10px 8px 15px lightgray,\r\n    10px 8px 15px lightgray;\r\n}\r\n\r\n.title,\r\n.addTask,\r\n.items,\r\n.footer,\r\n.task {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-bottom: 2px solid rgb(235, 235, 235);\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.items {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.items:nth-child(3n+0) {\r\n  border-bottom: none;\r\n}\r\n\r\n.titleText,\r\n.addTaskText,\r\n.footerText {\r\n  padding-left: 2%;\r\n  font-size: 22px;\r\n}\r\n\r\n.fa-refresh {\r\n  margin-left: auto;\r\n  margin-bottom: 15px;\r\n  padding-left: 4%;\r\n  color: rgb(146, 146, 146);\r\n  transform: rotate(90deg);\r\n}\r\n\r\n.addTaskText {\r\n  width: 90%;\r\n  line-height: 200%;\r\n  font-style: italic;\r\n  background-color: transparent;\r\n}\r\n\r\n.addTaskText:focus {\r\n  outline: none;\r\n}\r\n\r\n.fa-level-down {\r\n  margin-left: auto;\r\n  margin-bottom: 20px;\r\n  padding-left: 4%;\r\n  color: lightgray;\r\n  transform: rotate(90deg);\r\n}\r\n\r\n.task {\r\n  padding: 0 2%;\r\n  font-size: 22px;\r\n  flex: 0 0 33.33%;\r\n  column-gap: 2%;\r\n}\r\n\r\n.highlightedTask {\r\n  background-color: rgb(255, 255, 200);\r\n}\r\n\r\n.checkbox {\r\n  width: 22px;\r\n  height: 22px;\r\n  border: 2px;\r\n}\r\n\r\n.taskToDo {\r\n  width: 100%;\r\n  line-height: 200%;\r\n  background-color: transparent;\r\n  font-size: 22px;\r\n}\r\n\r\n.taskToDoChecked {\r\n  text-decoration: line-through;\r\n  color: rgb(175, 175, 175);\r\n}\r\n\r\n.taskToDo:focus {\r\n  outline: none;\r\n}\r\n\r\n.fa-ellipsis-v {\r\n  color: lightgray;\r\n  cursor: move;\r\n}\r\n\r\n.fa-trash-o {\r\n  color: rgb(160, 159, 159);\r\n  cursor: pointer;\r\n}\r\n\r\n.footer {\r\n  background-color: rgb(242, 242, 242);\r\n  justify-content: center;\r\n}\r\n\r\n.footerText {\r\n  color: rgb(169, 167, 167);\r\n  cursor: pointer;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/dynamic.js":
/*!********************************!*\
  !*** ./src/modules/dynamic.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDynamicElements)
/* harmony export */ });
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities.js */ "./src/modules/utilities.js");


const items = document.querySelector('.items');
let current = null;

const addDynamicElements = (toDoList, i) => {
  const div = document.createElement('div');
  div.className = 'task';
  div.id = `task${i + 1}`;
  const box = document.createElement('input');
  box.type = 'checkbox';
  box.className = 'checkbox';
  box.checked = toDoList.arrayTasks[i].completed;
  div.appendChild(box);
  const taskToDo = document.createElement('input');
  taskToDo.className = 'taskToDo';
  taskToDo.value = toDoList.arrayTasks[i].description;
  if (box.checked) {
    taskToDo.classList.add('taskToDoChecked');
  } else {
    taskToDo.classList.remove('taskToDoChecked');
  }
  div.appendChild(taskToDo);
  const ellipsis = document.createElement('i');
  ellipsis.className = 'fa fa-ellipsis-v';
  div.appendChild(ellipsis);
  items.appendChild(div);
  if (!taskToDo.parentNode.classList.contains('highlightedTask')) {
    taskToDo.addEventListener('click', () => {
      taskToDo.parentNode.classList.add('highlightedTask');
      taskToDo.nextElementSibling.className = 'fa fa-trash-o fa-lg';
    });
  }

  taskToDo.addEventListener('input', (e) => toDoList.updateTask((0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.idNumber)(taskToDo.parentNode.id), e.target.value));
  document.addEventListener('click', (e) => {
    if (taskToDo.parentNode.classList.contains('highlightedTask') && e.target !== taskToDo && e.target !== taskToDo.nextElementSibling) {
      taskToDo.parentNode.classList.remove('highlightedTask');
      taskToDo.nextElementSibling.className = 'fa fa-ellipsis-v';
    }
  });
  ellipsis.addEventListener('click', () => {
    if (ellipsis.className === 'fa fa-trash-o fa-lg') {
      ellipsis.parentNode.classList.remove('highlightedTask');
      ellipsis.className = 'fa fa-ellipsis-v';
      toDoList.removeTask((0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.idNumber)(ellipsis.parentNode.id));
      ellipsis.parentNode.remove();
      (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.renameIds)();
    }
  });
  box.addEventListener('change', () => {
    const checkboxIndex = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.idNumber)(box.parentNode.id);
    if (box.checked) {
      toDoList.updateCheckbox(checkboxIndex, true);
      box.nextElementSibling.classList.add('taskToDoChecked');
    } else {
      toDoList.updateCheckbox(checkboxIndex, false);
      box.nextElementSibling.classList.remove('taskToDoChecked');
    }
  });

  document.querySelector('.footerText').addEventListener('click', () => {
    toDoList.deleteChecked();
    items.querySelectorAll('.task').forEach((element) => {
      if (element.firstChild.checked) {
        element.remove();
      }
    });
    (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.renameIds)();
  });

  taskToDo.draggable = true;

  taskToDo.addEventListener('dragstart', () => {
    current = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.idNumber)(taskToDo.parentNode.id);
  });

  taskToDo.addEventListener('dragover', (e) => e.preventDefault());

  taskToDo.addEventListener('drop', (e) => {
    e.preventDefault();
    const dropValue = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.idNumber)(taskToDo.parentNode.id);
    if (dropValue !== current) {
      toDoList.swapTasks(current - 1, dropValue - 1);
      if (current < dropValue) {
        document.getElementById(`task${dropValue}`).after(document.getElementById(`task${current}`));
      } else {
        document.getElementById(`task${dropValue}`).before(document.getElementById(`task${current}`));
      }
      (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.renameIds)();
    }
  });
};



/***/ }),

/***/ "./src/modules/tasksclass.js":
/*!***********************************!*\
  !*** ./src/modules/tasksclass.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Tasks)
/* harmony export */ });
class Tasks {
  constructor() {
    this.arrayTasks = JSON.parse(localStorage.getItem('tasksData')) || [];
  }

  addTask = (description, completed = false, index = this.arrayTasks.length + 1) => {
    if (!this.showDescriptions().find((element) => element === description)) {
      this.arrayTasks.push({ description, completed, index });
      localStorage.setItem('tasksData', JSON.stringify(this.arrayTasks));
      return true;
    }
    return false;
  }

  removeTask = (pos) => {
    for (let i = 0; i < this.arrayTasks.length; i += 1) {
      if (this.arrayTasks[i].index === pos) {
        this.arrayTasks.splice(i, 1);
        for (let j = i; j < this.arrayTasks.length; j += 1) {
          this.arrayTasks[j].index = j + 1;
        }
      }
    }
    localStorage.setItem('tasksData', JSON.stringify(this.arrayTasks));
  }

  updateTask = (index, description) => {
    this.arrayTasks[index - 1].description = description;
    localStorage.setItem('tasksData', JSON.stringify(this.arrayTasks));
  }

  updateCheckbox = (index, condition) => {
    this.arrayTasks[index - 1].completed = condition;
    localStorage.setItem('tasksData', JSON.stringify(this.arrayTasks));
  }

  deleteChecked = () => {
    this.arrayTasks = this.arrayTasks.filter((task) => task.completed === false);
    for (let i = 0; i < this.arrayTasks.length; i += 1) {
      this.arrayTasks[i].index = i + 1;
    }
    localStorage.setItem('tasksData', JSON.stringify(this.arrayTasks));
  }

  swapTasks = (currentpos, droppedpos) => {
    if (currentpos < droppedpos) {
      for (let i = currentpos; i < droppedpos; i += 1) {
        const temp = this.arrayTasks[i];
        this.arrayTasks[i] = this.arrayTasks[i + 1];
        this.arrayTasks[i + 1] = temp;
      }
      for (let i = 0; i < this.arrayTasks.length; i += 1) {
        this.arrayTasks[i].index = i + 1;
      }
    } else {
      for (let i = currentpos; i > droppedpos; i -= 1) {
        const temp = this.arrayTasks[i];
        this.arrayTasks[i] = this.arrayTasks[i - 1];
        this.arrayTasks[i - 1] = temp;
      }
      for (let i = 0; i < this.arrayTasks.length; i += 1) {
        this.arrayTasks[i].index = i + 1;
      }
    }
    localStorage.setItem('tasksData', JSON.stringify(this.arrayTasks));
  }

  showDescriptions = () => {
    const descriptions = [];
    for (let i = 0; i < this.arrayTasks.length; i += 1) {
      descriptions.push(this.arrayTasks[i].description);
    }
    return descriptions.reverse();
  }
}


/***/ }),

/***/ "./src/modules/utilities.js":
/*!**********************************!*\
  !*** ./src/modules/utilities.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "idNumber": () => (/* binding */ idNumber),
/* harmony export */   "renameIds": () => (/* binding */ renameIds)
/* harmony export */ });
const idNumber = (str) => Number(str.replace(/\D/g, ''));

const renameIds = () => {
  const divs = Array.from(document.querySelectorAll('.task')) || [];
  if (divs.length > 0) {
    for (let i = 0; i < divs.length; i += 1) {
      divs[i].id = `task${i + 1}`;
    }
  }
};

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_tasksclass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/tasksclass.js */ "./src/modules/tasksclass.js");
/* harmony import */ var _modules_dynamic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/dynamic.js */ "./src/modules/dynamic.js");




const toDoList = new _modules_tasksclass_js__WEBPACK_IMPORTED_MODULE_1__["default"]();

for (let i = 0; i < toDoList.arrayTasks.length; i += 1) {
  (0,_modules_dynamic_js__WEBPACK_IMPORTED_MODULE_2__["default"])(toDoList, i);
}

document.querySelector('.addTaskText').addEventListener('change', (e) => {
  const addElement = toDoList.addTask(e.target.value);
  e.target.value = '';
  if (addElement) (0,_modules_dynamic_js__WEBPACK_IMPORTED_MODULE_2__["default"])(toDoList, toDoList.arrayTasks.length - 1);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LCtCQUErQixnQkFBZ0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNEJBQTRCO0FBQ2xEO0FBQ0E7QUFDQSxNQUFNO0FBQ04sK0JBQStCLGdCQUFnQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw0QkFBNEI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUVPOztBQUVBO0FBQ1A7QUFDQTtBQUNBLG9CQUFvQixpQkFBaUI7QUFDckMsMEJBQTBCLE1BQU07QUFDaEM7QUFDQTtBQUNBOzs7Ozs7VUNUQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDdUI7QUFDVTs7QUFFdEQscUJBQXFCLDhEQUFLOztBQUUxQixnQkFBZ0IsZ0NBQWdDO0FBQ2hELEVBQUUsK0RBQWtCO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiwrREFBa0I7QUFDcEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvZHluYW1pYy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2R1bGVzL3Rhc2tzY2xhc3MuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy91dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgMjUwLCAyNTApO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGhlaWdodDogNzB2aDtcXHJcXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAzZnIgMWZyO1xcclxcbiAganVzdGlmeS1pdGVtczogc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm94LXNoYWRvdzpcXHJcXG4gICAgMCA4cHggMTBweCBsaWdodGdyYXksXFxyXFxuICAgIC0xMHB4IDhweCAxNXB4IGxpZ2h0Z3JheSxcXHJcXG4gICAgMTBweCA4cHggMTVweCBsaWdodGdyYXk7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSxcXHJcXG4uYWRkVGFzayxcXHJcXG4uaXRlbXMsXFxyXFxuLmZvb3RlcixcXHJcXG4udGFzayB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2IoMjM1LCAyMzUsIDIzNSk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW1zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi5pdGVtczpudGgtY2hpbGQoM24rMCkge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlVGV4dCxcXHJcXG4uYWRkVGFza1RleHQsXFxyXFxuLmZvb3RlclRleHQge1xcclxcbiAgcGFkZGluZy1sZWZ0OiAyJTtcXHJcXG4gIGZvbnQtc2l6ZTogMjJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLXJlZnJlc2gge1xcclxcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiA0JTtcXHJcXG4gIGNvbG9yOiByZ2IoMTQ2LCAxNDYsIDE0Nik7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxyXFxufVxcclxcblxcclxcbi5hZGRUYXNrVGV4dCB7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgbGluZS1oZWlnaHQ6IDIwMCU7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZFRhc2tUZXh0OmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5mYS1sZXZlbC1kb3duIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogNCU7XFxyXFxuICBjb2xvcjogbGlnaHRncmF5O1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayB7XFxyXFxuICBwYWRkaW5nOiAwIDIlO1xcclxcbiAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgZmxleDogMCAwIDMzLjMzJTtcXHJcXG4gIGNvbHVtbi1nYXA6IDIlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlnaGxpZ2h0ZWRUYXNrIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94IHtcXHJcXG4gIHdpZHRoOiAyMnB4O1xcclxcbiAgaGVpZ2h0OiAyMnB4O1xcclxcbiAgYm9yZGVyOiAycHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrVG9EbyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBmb250LXNpemU6IDIycHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrVG9Eb0NoZWNrZWQge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxuICBjb2xvcjogcmdiKDE3NSwgMTc1LCAxNzUpO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza1RvRG86Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWVsbGlwc2lzLXYge1xcclxcbiAgY29sb3I6IGxpZ2h0Z3JheTtcXHJcXG4gIGN1cnNvcjogbW92ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLXRyYXNoLW8ge1xcclxcbiAgY29sb3I6IHJnYigxNjAsIDE1OSwgMTU5KTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQyLCAyNDIsIDI0Mik7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlclRleHQge1xcclxcbiAgY29sb3I6IHJnYigxNjksIDE2NywgMTY3KTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVTtFQUNWLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsVUFBVTtFQUNWLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1DQUFtQztFQUNuQyxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25COzs7MkJBR3lCO0FBQzNCOztBQUVBOzs7OztFQUtFLFdBQVc7RUFDWCxZQUFZO0VBQ1osMkNBQTJDO0VBQzNDLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7OztFQUdFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgMjUwLCAyNTApO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGhlaWdodDogNzB2aDtcXHJcXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAzZnIgMWZyO1xcclxcbiAganVzdGlmeS1pdGVtczogc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm94LXNoYWRvdzpcXHJcXG4gICAgMCA4cHggMTBweCBsaWdodGdyYXksXFxyXFxuICAgIC0xMHB4IDhweCAxNXB4IGxpZ2h0Z3JheSxcXHJcXG4gICAgMTBweCA4cHggMTVweCBsaWdodGdyYXk7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSxcXHJcXG4uYWRkVGFzayxcXHJcXG4uaXRlbXMsXFxyXFxuLmZvb3RlcixcXHJcXG4udGFzayB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2IoMjM1LCAyMzUsIDIzNSk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW1zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi5pdGVtczpudGgtY2hpbGQoM24rMCkge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlVGV4dCxcXHJcXG4uYWRkVGFza1RleHQsXFxyXFxuLmZvb3RlclRleHQge1xcclxcbiAgcGFkZGluZy1sZWZ0OiAyJTtcXHJcXG4gIGZvbnQtc2l6ZTogMjJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLXJlZnJlc2gge1xcclxcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiA0JTtcXHJcXG4gIGNvbG9yOiByZ2IoMTQ2LCAxNDYsIDE0Nik7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxyXFxufVxcclxcblxcclxcbi5hZGRUYXNrVGV4dCB7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgbGluZS1oZWlnaHQ6IDIwMCU7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZFRhc2tUZXh0OmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5mYS1sZXZlbC1kb3duIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogNCU7XFxyXFxuICBjb2xvcjogbGlnaHRncmF5O1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayB7XFxyXFxuICBwYWRkaW5nOiAwIDIlO1xcclxcbiAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgZmxleDogMCAwIDMzLjMzJTtcXHJcXG4gIGNvbHVtbi1nYXA6IDIlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlnaGxpZ2h0ZWRUYXNrIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94IHtcXHJcXG4gIHdpZHRoOiAyMnB4O1xcclxcbiAgaGVpZ2h0OiAyMnB4O1xcclxcbiAgYm9yZGVyOiAycHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrVG9EbyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBmb250LXNpemU6IDIycHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrVG9Eb0NoZWNrZWQge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxuICBjb2xvcjogcmdiKDE3NSwgMTc1LCAxNzUpO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza1RvRG86Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWVsbGlwc2lzLXYge1xcclxcbiAgY29sb3I6IGxpZ2h0Z3JheTtcXHJcXG4gIGN1cnNvcjogbW92ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLXRyYXNoLW8ge1xcclxcbiAgY29sb3I6IHJnYigxNjAsIDE1OSwgMTU5KTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQyLCAyNDIsIDI0Mik7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlclRleHQge1xcclxcbiAgY29sb3I6IHJnYigxNjksIDE2NywgMTY3KTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgaWROdW1iZXIsIHJlbmFtZUlkcyB9IGZyb20gJy4vdXRpbGl0aWVzLmpzJztcblxuY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbXMnKTtcbmxldCBjdXJyZW50ID0gbnVsbDtcblxuY29uc3QgYWRkRHluYW1pY0VsZW1lbnRzID0gKHRvRG9MaXN0LCBpKSA9PiB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuY2xhc3NOYW1lID0gJ3Rhc2snO1xuICBkaXYuaWQgPSBgdGFzayR7aSArIDF9YDtcbiAgY29uc3QgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgYm94LnR5cGUgPSAnY2hlY2tib3gnO1xuICBib3guY2xhc3NOYW1lID0gJ2NoZWNrYm94JztcbiAgYm94LmNoZWNrZWQgPSB0b0RvTGlzdC5hcnJheVRhc2tzW2ldLmNvbXBsZXRlZDtcbiAgZGl2LmFwcGVuZENoaWxkKGJveCk7XG4gIGNvbnN0IHRhc2tUb0RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdGFza1RvRG8uY2xhc3NOYW1lID0gJ3Rhc2tUb0RvJztcbiAgdGFza1RvRG8udmFsdWUgPSB0b0RvTGlzdC5hcnJheVRhc2tzW2ldLmRlc2NyaXB0aW9uO1xuICBpZiAoYm94LmNoZWNrZWQpIHtcbiAgICB0YXNrVG9Eby5jbGFzc0xpc3QuYWRkKCd0YXNrVG9Eb0NoZWNrZWQnKTtcbiAgfSBlbHNlIHtcbiAgICB0YXNrVG9Eby5jbGFzc0xpc3QucmVtb3ZlKCd0YXNrVG9Eb0NoZWNrZWQnKTtcbiAgfVxuICBkaXYuYXBwZW5kQ2hpbGQodGFza1RvRG8pO1xuICBjb25zdCBlbGxpcHNpcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgZWxsaXBzaXMuY2xhc3NOYW1lID0gJ2ZhIGZhLWVsbGlwc2lzLXYnO1xuICBkaXYuYXBwZW5kQ2hpbGQoZWxsaXBzaXMpO1xuICBpdGVtcy5hcHBlbmRDaGlsZChkaXYpO1xuICBpZiAoIXRhc2tUb0RvLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWdobGlnaHRlZFRhc2snKSkge1xuICAgIHRhc2tUb0RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGFza1RvRG8ucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHRlZFRhc2snKTtcbiAgICAgIHRhc2tUb0RvLm5leHRFbGVtZW50U2libGluZy5jbGFzc05hbWUgPSAnZmEgZmEtdHJhc2gtbyBmYS1sZyc7XG4gICAgfSk7XG4gIH1cblxuICB0YXNrVG9Eby5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB0b0RvTGlzdC51cGRhdGVUYXNrKGlkTnVtYmVyKHRhc2tUb0RvLnBhcmVudE5vZGUuaWQpLCBlLnRhcmdldC52YWx1ZSkpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKHRhc2tUb0RvLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWdobGlnaHRlZFRhc2snKSAmJiBlLnRhcmdldCAhPT0gdGFza1RvRG8gJiYgZS50YXJnZXQgIT09IHRhc2tUb0RvLm5leHRFbGVtZW50U2libGluZykge1xuICAgICAgdGFza1RvRG8ucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWdobGlnaHRlZFRhc2snKTtcbiAgICAgIHRhc2tUb0RvLm5leHRFbGVtZW50U2libGluZy5jbGFzc05hbWUgPSAnZmEgZmEtZWxsaXBzaXMtdic7XG4gICAgfVxuICB9KTtcbiAgZWxsaXBzaXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKGVsbGlwc2lzLmNsYXNzTmFtZSA9PT0gJ2ZhIGZhLXRyYXNoLW8gZmEtbGcnKSB7XG4gICAgICBlbGxpcHNpcy5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodGVkVGFzaycpO1xuICAgICAgZWxsaXBzaXMuY2xhc3NOYW1lID0gJ2ZhIGZhLWVsbGlwc2lzLXYnO1xuICAgICAgdG9Eb0xpc3QucmVtb3ZlVGFzayhpZE51bWJlcihlbGxpcHNpcy5wYXJlbnROb2RlLmlkKSk7XG4gICAgICBlbGxpcHNpcy5wYXJlbnROb2RlLnJlbW92ZSgpO1xuICAgICAgcmVuYW1lSWRzKCk7XG4gICAgfVxuICB9KTtcbiAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICBjb25zdCBjaGVja2JveEluZGV4ID0gaWROdW1iZXIoYm94LnBhcmVudE5vZGUuaWQpO1xuICAgIGlmIChib3guY2hlY2tlZCkge1xuICAgICAgdG9Eb0xpc3QudXBkYXRlQ2hlY2tib3goY2hlY2tib3hJbmRleCwgdHJ1ZSk7XG4gICAgICBib3gubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ3Rhc2tUb0RvQ2hlY2tlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0b0RvTGlzdC51cGRhdGVDaGVja2JveChjaGVja2JveEluZGV4LCBmYWxzZSk7XG4gICAgICBib3gubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2tUb0RvQ2hlY2tlZCcpO1xuICAgIH1cbiAgfSk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3RlclRleHQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0b0RvTGlzdC5kZWxldGVDaGVja2VkKCk7XG4gICAgaXRlbXMucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBpZiAoZWxlbWVudC5maXJzdENoaWxkLmNoZWNrZWQpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZW5hbWVJZHMoKTtcbiAgfSk7XG5cbiAgdGFza1RvRG8uZHJhZ2dhYmxlID0gdHJ1ZTtcblxuICB0YXNrVG9Eby5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoKSA9PiB7XG4gICAgY3VycmVudCA9IGlkTnVtYmVyKHRhc2tUb0RvLnBhcmVudE5vZGUuaWQpO1xuICB9KTtcblxuICB0YXNrVG9Eby5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCkpO1xuXG4gIHRhc2tUb0RvLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkcm9wVmFsdWUgPSBpZE51bWJlcih0YXNrVG9Eby5wYXJlbnROb2RlLmlkKTtcbiAgICBpZiAoZHJvcFZhbHVlICE9PSBjdXJyZW50KSB7XG4gICAgICB0b0RvTGlzdC5zd2FwVGFza3MoY3VycmVudCAtIDEsIGRyb3BWYWx1ZSAtIDEpO1xuICAgICAgaWYgKGN1cnJlbnQgPCBkcm9wVmFsdWUpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRhc2ske2Ryb3BWYWx1ZX1gKS5hZnRlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdGFzayR7Y3VycmVudH1gKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdGFzayR7ZHJvcFZhbHVlfWApLmJlZm9yZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdGFzayR7Y3VycmVudH1gKSk7XG4gICAgICB9XG4gICAgICByZW5hbWVJZHMoKTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgYWRkRHluYW1pY0VsZW1lbnRzIGFzIGRlZmF1bHQgfTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYXJyYXlUYXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzRGF0YScpKSB8fCBbXTtcbiAgfVxuXG4gIGFkZFRhc2sgPSAoZGVzY3JpcHRpb24sIGNvbXBsZXRlZCA9IGZhbHNlLCBpbmRleCA9IHRoaXMuYXJyYXlUYXNrcy5sZW5ndGggKyAxKSA9PiB7XG4gICAgaWYgKCF0aGlzLnNob3dEZXNjcmlwdGlvbnMoKS5maW5kKChlbGVtZW50KSA9PiBlbGVtZW50ID09PSBkZXNjcmlwdGlvbikpIHtcbiAgICAgIHRoaXMuYXJyYXlUYXNrcy5wdXNoKHsgZGVzY3JpcHRpb24sIGNvbXBsZXRlZCwgaW5kZXggfSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3NEYXRhJywgSlNPTi5zdHJpbmdpZnkodGhpcy5hcnJheVRhc2tzKSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmVtb3ZlVGFzayA9IChwb3MpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyYXlUYXNrcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHRoaXMuYXJyYXlUYXNrc1tpXS5pbmRleCA9PT0gcG9zKSB7XG4gICAgICAgIHRoaXMuYXJyYXlUYXNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGZvciAobGV0IGogPSBpOyBqIDwgdGhpcy5hcnJheVRhc2tzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgdGhpcy5hcnJheVRhc2tzW2pdLmluZGV4ID0gaiArIDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzRGF0YScsIEpTT04uc3RyaW5naWZ5KHRoaXMuYXJyYXlUYXNrcykpO1xuICB9XG5cbiAgdXBkYXRlVGFzayA9IChpbmRleCwgZGVzY3JpcHRpb24pID0+IHtcbiAgICB0aGlzLmFycmF5VGFza3NbaW5kZXggLSAxXS5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrc0RhdGEnLCBKU09OLnN0cmluZ2lmeSh0aGlzLmFycmF5VGFza3MpKTtcbiAgfVxuXG4gIHVwZGF0ZUNoZWNrYm94ID0gKGluZGV4LCBjb25kaXRpb24pID0+IHtcbiAgICB0aGlzLmFycmF5VGFza3NbaW5kZXggLSAxXS5jb21wbGV0ZWQgPSBjb25kaXRpb247XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzRGF0YScsIEpTT04uc3RyaW5naWZ5KHRoaXMuYXJyYXlUYXNrcykpO1xuICB9XG5cbiAgZGVsZXRlQ2hlY2tlZCA9ICgpID0+IHtcbiAgICB0aGlzLmFycmF5VGFza3MgPSB0aGlzLmFycmF5VGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmNvbXBsZXRlZCA9PT0gZmFsc2UpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJheVRhc2tzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICB0aGlzLmFycmF5VGFza3NbaV0uaW5kZXggPSBpICsgMTtcbiAgICB9XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzRGF0YScsIEpTT04uc3RyaW5naWZ5KHRoaXMuYXJyYXlUYXNrcykpO1xuICB9XG5cbiAgc3dhcFRhc2tzID0gKGN1cnJlbnRwb3MsIGRyb3BwZWRwb3MpID0+IHtcbiAgICBpZiAoY3VycmVudHBvcyA8IGRyb3BwZWRwb3MpIHtcbiAgICAgIGZvciAobGV0IGkgPSBjdXJyZW50cG9zOyBpIDwgZHJvcHBlZHBvczsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IHRlbXAgPSB0aGlzLmFycmF5VGFza3NbaV07XG4gICAgICAgIHRoaXMuYXJyYXlUYXNrc1tpXSA9IHRoaXMuYXJyYXlUYXNrc1tpICsgMV07XG4gICAgICAgIHRoaXMuYXJyYXlUYXNrc1tpICsgMV0gPSB0ZW1wO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFycmF5VGFza3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgdGhpcy5hcnJheVRhc2tzW2ldLmluZGV4ID0gaSArIDE7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSBjdXJyZW50cG9zOyBpID4gZHJvcHBlZHBvczsgaSAtPSAxKSB7XG4gICAgICAgIGNvbnN0IHRlbXAgPSB0aGlzLmFycmF5VGFza3NbaV07XG4gICAgICAgIHRoaXMuYXJyYXlUYXNrc1tpXSA9IHRoaXMuYXJyYXlUYXNrc1tpIC0gMV07XG4gICAgICAgIHRoaXMuYXJyYXlUYXNrc1tpIC0gMV0gPSB0ZW1wO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFycmF5VGFza3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgdGhpcy5hcnJheVRhc2tzW2ldLmluZGV4ID0gaSArIDE7XG4gICAgICB9XG4gICAgfVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrc0RhdGEnLCBKU09OLnN0cmluZ2lmeSh0aGlzLmFycmF5VGFza3MpKTtcbiAgfVxuXG4gIHNob3dEZXNjcmlwdGlvbnMgPSAoKSA9PiB7XG4gICAgY29uc3QgZGVzY3JpcHRpb25zID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFycmF5VGFza3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGRlc2NyaXB0aW9ucy5wdXNoKHRoaXMuYXJyYXlUYXNrc1tpXS5kZXNjcmlwdGlvbik7XG4gICAgfVxuICAgIHJldHVybiBkZXNjcmlwdGlvbnMucmV2ZXJzZSgpO1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgaWROdW1iZXIgPSAoc3RyKSA9PiBOdW1iZXIoc3RyLnJlcGxhY2UoL1xcRC9nLCAnJykpO1xuXG5leHBvcnQgY29uc3QgcmVuYW1lSWRzID0gKCkgPT4ge1xuICBjb25zdCBkaXZzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzaycpKSB8fCBbXTtcbiAgaWYgKGRpdnMubGVuZ3RoID4gMCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGl2cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgZGl2c1tpXS5pZCA9IGB0YXNrJHtpICsgMX1gO1xuICAgIH1cbiAgfVxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBUYXNrcyBmcm9tICcuL21vZHVsZXMvdGFza3NjbGFzcy5qcyc7XG5pbXBvcnQgYWRkRHluYW1pY0VsZW1lbnRzIGZyb20gJy4vbW9kdWxlcy9keW5hbWljLmpzJztcblxuY29uc3QgdG9Eb0xpc3QgPSBuZXcgVGFza3MoKTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCB0b0RvTGlzdC5hcnJheVRhc2tzLmxlbmd0aDsgaSArPSAxKSB7XG4gIGFkZER5bmFtaWNFbGVtZW50cyh0b0RvTGlzdCwgaSk7XG59XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRUYXNrVGV4dCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gIGNvbnN0IGFkZEVsZW1lbnQgPSB0b0RvTGlzdC5hZGRUYXNrKGUudGFyZ2V0LnZhbHVlKTtcbiAgZS50YXJnZXQudmFsdWUgPSAnJztcbiAgaWYgKGFkZEVsZW1lbnQpIGFkZER5bmFtaWNFbGVtZW50cyh0b0RvTGlzdCwgdG9Eb0xpc3QuYXJyYXlUYXNrcy5sZW5ndGggLSAxKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9