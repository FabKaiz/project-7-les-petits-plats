/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/arrow-d.svg */ "./src/assets/arrow-d.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/search.svg */ "./src/assets/search.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/remove.svg */ "./src/assets/remove.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=DM+Sans:wght@700&family=Lato:wght@400;700&family=Roboto&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\nhtml,\nbody {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: \"Lato\", sans-serif; }\n\nhtml {\n  scroll-behavior: smooth; }\n\nbody {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column; }\n\na {\n  text-decoration: none;\n  color: inherit; }\n\nul,\nli {\n  list-style: none; }\n\nh1, .h1-style {\n  font-family: \"DM Sans\", sans-serif;\n  color: #D04F4F; }\n\nmain {\n  max-width: 1240px;\n  margin: 0 auto;\n  width: 100%; }\n\n.hidden {\n  position: absolute !important;\n  width: 1px !important;\n  height: 1px !important;\n  padding: 0 !important;\n  margin: -1px !important;\n  overflow: hidden !important;\n  clip: rect(0, 0, 0, 0) !important;\n  white-space: nowrap !important;\n  border: 0 !important; }\n\nsection {\n  padding: 0 24px; }\n  @media only screen and (min-width: 1288px) {\n    section {\n      padding: 0; } }\n\n.filters__container {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 20px; }\n  .filters__container .custom__select {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 10px;\n    position: relative;\n    padding: 23px 10px 23px 15px;\n    border-radius: 5px;\n    cursor: pointer; }\n    .filters__container .custom__select:has(input[value=\"ingredients\"]) {\n      background-color: #3282F7; }\n    .filters__container .custom__select:has(input[value=\"appareils\"]) {\n      background-color: #68D9A4; }\n    .filters__container .custom__select:has(input[value=\"ustensiles\"]) {\n      background-color: #ED6454; }\n    .filters__container .custom__select input {\n      cursor: pointer;\n      border: none;\n      background: inherit;\n      font-weight: 700;\n      font-size: 18px;\n      line-height: 22px;\n      text-transform: capitalize;\n      color: #FFFFFF; }\n    .filters__container .custom__select .custom__select-arrow {\n      background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center;\n      width: 20px;\n      height: 20px;\n      transition: transform .3s ease-in-out; }\n      .filters__container .custom__select .custom__select-arrow.active {\n        transform: rotate(180deg); }\n\n.cards__container {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 25px auto;\n  gap: 25px; }\n  @media only screen and (min-width: 1024px) {\n    .cards__container {\n      gap: 50px; } }\n\n.card {\n  background: #E7E7E7;\n  border-radius: 5px;\n  min-width: 350px;\n  width: 100%; }\n  @media only screen and (min-width: 1024px) {\n    .card {\n      width: calc((100% / 3) - 34px); } }\n  .card .card__image-container {\n    background: #C7BEBE;\n    height: 178px;\n    border-radius: 5px 5px 0 0; }\n  .card .card__content-container {\n    border-radius: 5px;\n    padding: 20px; }\n    .card .card__content-container .card__header {\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      align-items: center;\n      margin-bottom: 20px; }\n      .card .card__content-container .card__header .card__header__title {\n        font-style: normal;\n        font-weight: 400;\n        font-size: 18px;\n        line-height: 22px; }\n      .card .card__content-container .card__header .recipe__time {\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n        align-items: center;\n        gap: 5px;\n        font-weight: 700;\n        font-size: 18px;\n        line-height: 22px; }\n  .card .card__content {\n    display: flex; }\n    .card .card__content .ingredients__container {\n      width: 50%; }\n      .card .card__content .ingredients__container li {\n        font-weight: 400;\n        font-size: 12px;\n        line-height: 14px;\n        color: #000000; }\n    .card .card__content .description__container {\n      width: 50%;\n      font-family: \"Roboto\", sans-serif;\n      font-weight: 400;\n      font-size: 12px;\n      line-height: 100%;\n      color: #000000; }\n\n.search__container {\n  margin-bottom: 25px;\n  width: 100%;\n  position: relative;\n  /*\t&:after {\r\n\t\tcontent: '';\r\n\t\tposition: absolute;\r\n\t\ttop: 50%;\r\n\t\tright: 37px;\r\n\t\ttransform: translateY(-50%);\r\n\t\twidth: 26px;\r\n\t\theight: 26px;\r\n\t\tbackground-image: url('../assets/search.svg');\r\n\t\tbackground-repeat: no-repeat;\r\n\t\tbackground-position: center;\r\n\t\tbackground-size: cover;\r\n\t\ttransition: all 0.3s ease-in-out;\r\n\t}*/ }\n  .search__container .search__button {\n    content: '';\n    position: absolute;\n    top: 50%;\n    right: 37px;\n    transform: translateY(-50%);\n    width: 26px;\n    height: 26px;\n    background-color: transparent;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    border: none;\n    cursor: pointer;\n    transition: all 0.3s ease-in-out; }\n  .search__container input[type=\"search\"] {\n    width: 100%;\n    height: 69px;\n    padding: 24px;\n    border-radius: 5px;\n    border: none;\n    font-weight: 400;\n    font-size: 18px;\n    line-height: 22px;\n    color: #000000;\n    background-color: #E7E7E7;\n    transition: all 0.3s ease-in-out; }\n    .search__container input[type=\"search\"]:focus {\n      outline: none;\n      box-shadow: 0 0 10px rgba(0, 0, 0, 0.25); }\n      .search__container input[type=\"search\"]:focus + .search__button {\n        transform: translateY(-50%) rotate(360deg); }\n      .search__container input[type=\"search\"]:focus::placeholder {\n        color: transparent; }\n\n.tags__container {\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 15px;\n  min-height: 40px; }\n  .tags__container .tag {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    border-radius: 5px;\n    padding: 10px 20px;\n    gap: 13px;\n    color: #FFFFFF;\n    font-weight: 700;\n    font-size: 14px;\n    line-height: 17px;\n    background-color: #E7E7E7; }\n    .tags__container .tag .remove {\n      width: 20px;\n      height: 20px;\n      border: none;\n      cursor: pointer;\n      background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat center; }\n    .tags__container .tag:not(:last-child) {\n      margin-right: 0.5rem; }\n\nheader {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 42px 0 17px; }\n", "",{"version":3,"sources":["webpack://./src/styles/global/_base.scss","webpack://./src/styles/global/_fonts.scss","webpack://./src/styles/global/_colors.scss","webpack://./src/styles/global/_mixins.scss","webpack://./src/styles/components/_filters.scss","webpack://./src/styles/components/_cards.scss","webpack://./src/styles/components/_search.scss","webpack://./src/styles/main.scss","webpack://./src/styles/components/_tags.scss","webpack://./src/styles/layouts/_header.scss"],"names":[],"mappings":"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","sourcesContent":["@import './fonts';\r\n@import \"../global/helpers\";\r\n\r\n$max-content-width: 1240px;\r\n\r\n*,\r\nhtml,\r\nbody {\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tbox-sizing: border-box;\r\n\tfont-family: $font-base;\r\n}\r\n\r\nhtml {\r\n\tscroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n\tmin-height: 100vh;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n}\r\n\r\na {\r\n\ttext-decoration: none;\r\n\tcolor: inherit;\r\n}\r\n\r\nul,\r\nli {\r\n\tlist-style: none;\r\n}\r\n\r\nh1, .h1-style {\r\n\tfont-family: $font-title;\r\n\tcolor: $title-color;\r\n}\r\n\r\nmain {\r\n\tmax-width: $max-content-width;\r\n\tmargin: 0 auto;\r\n\twidth: 100%;\r\n}\r\n\r\n.hidden {\r\n\tposition: absolute !important;\r\n\twidth: 1px !important;\r\n\theight: 1px !important;\r\n\tpadding: 0 !important;\r\n\tmargin: -1px !important;\r\n\toverflow: hidden !important;\r\n\tclip: rect(0,0,0,0) !important;\r\n\twhite-space: nowrap !important;\r\n\tborder: 0 !important;\r\n}\r\n\r\nsection {\r\n\tpadding: 0 24px;\r\n\r\n\t@include media(max-content-width) {\r\n\t\tpadding: 0;\r\n\t}\r\n}","@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@700&family=Lato:wght@400;700&family=Roboto&display=swap');\r\n\r\n$font-base: 'Lato', sans-serif;\r\n$font-title: 'DM Sans', sans-serif;\r\n$font-description: 'Roboto', sans-serif;\r\n","// header\r\n$title-color: #D04F4F;\r\n\r\n// search\r\n$ingredients-color: #3282F7;\r\n$appareils-color: #68D9A4;\r\n$ustensiles-color: #ED6454;\r\n\r\n// cards\r\n$card-img-background-color: #C7BEBE;\r\n\r\n// all\r\n$grey-background-color: #E7E7E7;\r\n$black: #000000;\r\n$white: #FFFFFF;\r\n","// flex\r\n@mixin flex($direction, $justify, $align) {\r\n\tdisplay: flex;\r\n\tflex-direction: $direction;\r\n\tjustify-content: $justify;\r\n\talign-items: $align;\r\n}\r\n\r\n// media queries\r\n@mixin media($breakpoint) {\r\n\t@if $breakpoint == phone {\r\n\t\t@media only screen and (max-width: 767px) {\r\n\t\t\t@content;\r\n\t\t}\r\n\t}\r\n\t@if $breakpoint == tablet {\r\n\t\t@media only screen and (min-width: 768px) and (max-width: 1023px) {\r\n\t\t\t@content;\r\n\t\t}\r\n\t}\r\n\t@if $breakpoint == desktop {\r\n\t\t@media only screen and (min-width: 1024px) {\r\n\t\t\t@content;\r\n\t\t}\r\n\t}\r\n\t@if $breakpoint == max-content-width {\r\n\t\t@media only screen and (min-width: $max-content-width + 48px) {\r\n\t\t\t@content;\r\n\t\t}\r\n\t}\r\n}","@import '../global/helpers';\r\n\r\n\r\n.filters__container {\r\n\t@include flex(row, flex-start, center);\r\n\tgap: 20px;\r\n\r\n\t.custom__select {\r\n\t\t@include flex(row, flex-start, center);\r\n\t\tgap: 10px;\r\n\t\tposition: relative;\r\n\t\tpadding: 23px 10px 23px 15px;\r\n\t\tborder-radius: 5px;\r\n\t\tcursor: pointer;\r\n\r\n\t\t&:has(input[value=\"ingredients\"]) {\r\n\t\t\tbackground-color: $ingredients-color;\r\n\t\t}\r\n\r\n\t\t&:has(input[value=\"appareils\"]) {\r\n\t\t\tbackground-color: $appareils-color;\r\n\t\t}\r\n\r\n\t\t&:has(input[value=\"ustensiles\"]) {\r\n\t\t\tbackground-color: $ustensiles-color;\r\n\t\t}\r\n\r\n\t\tinput {\r\n\t\t\tcursor: pointer;\r\n\t\t\tborder: none;\r\n\t\t\tbackground: inherit;\r\n\t\t\tfont-weight: 700;\r\n\t\t\tfont-size: 18px;\r\n\t\t\tline-height: 22px;\r\n\t\t\ttext-transform: capitalize;\r\n\t\t\tcolor: $white;\r\n\t\t}\r\n\r\n\t\t.custom__select-arrow {\r\n\t\t\tbackground: url(../assets/arrow-d.svg) no-repeat center;\r\n\t\t\twidth: 20px;\r\n\t\t\theight: 20px;\r\n\t\t\ttransition: transform .3s ease-in-out;\r\n\r\n\t\t\t&.active {\r\n\t\t\t\ttransform: rotate(180deg);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}","@import '../global/helpers';\r\n\r\n.cards__container {\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n\tmargin: 25px auto;\r\n\tgap: 25px;\r\n\r\n\t@include media(desktop) {\r\n\t\tgap: 50px;\r\n\t}\r\n}\r\n\r\n.card {\r\n\tbackground: $grey-background-color;\r\n\tborder-radius: 5px;\r\n\tmin-width: 350px;\r\n\twidth: 100%;\r\n\r\n\t@include media(desktop) {\r\n\t\twidth: calc((100% / 3) - 34px);\r\n\t}\r\n\r\n\t.card__image-container {\r\n\t\tbackground: $card-img-background-color;\r\n\t\theight: 178px;\r\n\t\tborder-radius: 5px 5px 0 0;\r\n\t}\r\n\r\n\t.card__content-container {\r\n\t\tborder-radius: 5px;\r\n\t\tpadding: 20px;\r\n\r\n\t\t.card__header {\r\n\t\t\t@include flex(row, space-between, center);\r\n\t\t\tmargin-bottom: 20px;\r\n\r\n\t\t\t.card__header__title {\r\n\t\t\t\tfont-style: normal;\r\n\t\t\t\tfont-weight: 400;\r\n\t\t\t\tfont-size: 18px;\r\n\t\t\t\tline-height: 22px;\r\n\t\t\t}\r\n\r\n\t\t\t.recipe__time {\r\n\t\t\t\t@include flex(row, space-between, center);\r\n\t\t\t\tgap: 5px;\r\n\t\t\t\tfont-weight: 700;\r\n\t\t\t\tfont-size: 18px;\r\n\t\t\t\tline-height: 22px;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t.card__content {\r\n\t\tdisplay: flex;\r\n\r\n\t\t.ingredients__container {\r\n\t\t\twidth: 50%;\r\n\r\n\t\t\tli {\r\n\t\t\t\tfont-weight: 400;\r\n\t\t\t\tfont-size: 12px;\r\n\t\t\t\tline-height: 14px;\r\n\t\t\t\tcolor: #000000;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t.description__container {\r\n\t\t\twidth: 50%;\r\n\t\t\tfont-family: $font-description;\r\n\t\t\tfont-weight: 400;\r\n\t\t\tfont-size: 12px;\r\n\t\t\tline-height: 100%;\r\n\t\t\tcolor: #000000;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n","@import '../global/_helpers';\r\n\r\n.search__container {\r\n\tmargin-bottom: 25px;\r\n\twidth: 100%;\r\n\tposition: relative;\r\n\r\n/*\t&:after {\r\n\t\tcontent: '';\r\n\t\tposition: absolute;\r\n\t\ttop: 50%;\r\n\t\tright: 37px;\r\n\t\ttransform: translateY(-50%);\r\n\t\twidth: 26px;\r\n\t\theight: 26px;\r\n\t\tbackground-image: url('../assets/search.svg');\r\n\t\tbackground-repeat: no-repeat;\r\n\t\tbackground-position: center;\r\n\t\tbackground-size: cover;\r\n\t\ttransition: all 0.3s ease-in-out;\r\n\t}*/\r\n\r\n\t.search__button {\r\n\t\tcontent: '';\r\n\t\tposition: absolute;\r\n\t\ttop: 50%;\r\n\t\tright: 37px;\r\n\t\ttransform: translateY(-50%);\r\n\t\twidth: 26px;\r\n\t\theight: 26px;\r\n\t\tbackground-color: transparent;\r\n\t\tbackground-image: url('../assets/search.svg');\r\n\t\tbackground-repeat: no-repeat;\r\n\t\tbackground-position: center;\r\n\t\tbackground-size: cover;\r\n\t\tborder: none;\r\n\t\tcursor: pointer;\r\n\t\ttransition: all 0.3s ease-in-out;\r\n\t}\r\n\r\n\tinput[type=\"search\"] {\r\n\t\twidth: 100%;\r\n\t\theight: 69px;\r\n\t\tpadding: 24px;\r\n\t\tborder-radius: 5px;\r\n\t\tborder: none;\r\n\t\tfont-weight: 400;\r\n\t\tfont-size: 18px;\r\n\t\tline-height: 22px;\r\n\t\tcolor: $black;\r\n\t\tbackground-color: $grey-background-color;\r\n\t\ttransition: all 0.3s ease-in-out;\r\n\r\n\t\t&:focus {\r\n\t\t\toutline: none;\r\n\t\t\tbox-shadow: 0 0 10px rgba(0, 0, 0, 0.25);\r\n\r\n\t\t\t+.search__button {\r\n\t\t\t\ttransform: translateY(-50%) rotate(360deg);\r\n\t\t\t}\r\n\r\n\t\t\t&::placeholder {\r\n\t\t\t\tcolor: transparent;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}","@import './global/base';\r\n\r\n@import './components/filters';\r\n@import './components/cards';\r\n@import './components/search';\r\n@import './components/tags';\r\n\r\n@import './layouts/header';\r\n","@import '../global/helpers';\r\n\r\n.tags__container {\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n\tmargin-bottom: 15px;\r\n\tmin-height: 40px;\r\n\r\n\t.tag {\r\n\t\t@include flex(row, center, center);\r\n\t\tborder-radius: 5px;\r\n\t\tpadding: 10px 20px;\r\n\t\tgap: 13px;\r\n\t\tcolor: $white;\r\n\t\tfont-weight: 700;\r\n\t\tfont-size: 14px;\r\n\t\tline-height: 17px;\r\n\t\tbackground-color: $grey-background-color;\r\n\r\n\t\t.remove {\r\n\t\t\twidth: 20px;\r\n\t\t\theight: 20px;\r\n\t\t\tborder: none;\r\n\t\t\tcursor: pointer;\r\n\t\t\tbackground: url(../assets/remove.svg) no-repeat center;\r\n\t\t}\r\n\r\n\t\t&:not(:last-child) {\r\n\t\t\tmargin-right: 0.5rem;\r\n\t\t}\r\n\t}\r\n}","@import '../global/helpers';\r\n\r\nheader {\r\n\t@include flex(column, center, center);\r\n\tmargin: 42px 0 17px;\r\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/assets/arrow-d.svg":
/*!********************************!*\
  !*** ./src/assets/arrow-d.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "arrow-d.svg";

/***/ }),

/***/ "./src/assets/remove.svg":
/*!*******************************!*\
  !*** ./src/assets/remove.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "remove.svg";

/***/ }),

/***/ "./src/assets/search.svg":
/*!*******************************!*\
  !*** ./src/assets/search.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "search.svg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");

})();

/******/ })()
;
//# sourceMappingURL=bundle0b1210716ca3e7474583.js.map