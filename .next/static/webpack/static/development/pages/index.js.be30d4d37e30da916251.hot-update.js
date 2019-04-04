webpackHotUpdate("static/development/pages/index.js",{

/***/ "./Components/Item/index.js":
/*!**********************************!*\
  !*** ./Components/Item/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/bohdanyashchuk/Desktop/React/NEXT/Components/Item/index.js";


var Item = function Item(_ref) {
  var dataItem = _ref.dataItem,
      onGetCoinDetails = _ref.onGetCoinDetails,
      coinNumber = _ref.coinNumber,
      isShowCoinDetails = _ref.isShowCoinDetails;

  var run = function run() {
    var selectCoinID = dataItem.CoinInfo.Id;
    isShowCoinDetails();
    debugger;
    onGetCoinDetails(selectCoinID);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    onClick: function onClick() {
      return run();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, coinNumber, dataItem.CoinInfo.Id, dataItem.CoinInfo.Name, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://www.cryptocompare.com".concat(dataItem.CoinInfo.ImageUrl),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Item);

/***/ })

})
//# sourceMappingURL=index.js.be30d4d37e30da916251.hot-update.js.map