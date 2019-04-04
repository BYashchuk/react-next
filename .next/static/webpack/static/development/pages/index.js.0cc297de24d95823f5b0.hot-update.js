webpackHotUpdate("static/development/pages/index.js",{

/***/ "./redux/actions.js":
/*!**************************!*\
  !*** ./redux/actions.js ***!
  \**************************/
/*! exports provided: serverCoinsData, getCoinDetails, isShowCoinDetails, isHideCoinDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serverCoinsData", function() { return serverCoinsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCoinDetails", function() { return getCoinDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isShowCoinDetails", function() { return isShowCoinDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHideCoinDetails", function() { return isHideCoinDetails; });
/* harmony import */ var _constans__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constans */ "./redux/constans.js");

var serverCoinsData = function serverCoinsData(coinsData) {
  return function (dispatch) {
    return dispatch({
      type: _constans__WEBPACK_IMPORTED_MODULE_0__["default"].COINS_DATA,
      coinsData: coinsData
    });
  };
};
var getCoinDetails = function getCoinDetails(selectCoinID) {
  return function (dispatch) {
    return dispatch({
      type: _constans__WEBPACK_IMPORTED_MODULE_0__["default"].GET_COIN_DETAILS,
      selectCoinID: selectCoinID
    });
  };
};
var isShowCoinDetails = function isShowCoinDetails() {
  return function (dispatch) {
    return dispatch({
      type: _constans__WEBPACK_IMPORTED_MODULE_0__["default"].SHOW_COIN_DETAILS
    });
  };
};
var isHideCoinDetails = function isHideCoinDetails() {
  return function (dispatch) {
    return dispatch({
      type: _constans__WEBPACK_IMPORTED_MODULE_0__["default"].HIDE_COIN_DETAILS
    });
  };
};

/***/ })

})
//# sourceMappingURL=index.js.0cc297de24d95823f5b0.hot-update.js.map