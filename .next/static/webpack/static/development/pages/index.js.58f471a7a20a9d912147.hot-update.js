webpackHotUpdate("static/development/pages/index.js",{

/***/ "./Components/Item/index.js":
/*!**********************************!*\
  !*** ./Components/Item/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/bohdanyashchuk/Desktop/React/NEXT/Components/Item/index.js";



var Item = function Item(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    onClick: function onClick() {
      props.getCoinDetails(props.dataItem.CoinInfo.Id);
    },
    className: "jsx-3239712091",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-3239712091" + " " + 'coinNumber',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, props.coinNumber), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-3239712091",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "https://www.cryptocompare.com".concat(props.dataItem.CoinInfo.ImageUrl),
    className: "jsx-3239712091",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-3239712091",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, " ", props.dataItem.CoinInfo.Name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-3239712091",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, " ", props.dataItem.CoinInfo.FullName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-3239712091",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, " ", props.dataItem.DISPLAY.USD.PRICE), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-3239712091",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, " ", props.dataItem.DISPLAY.USD.VOLUME24HOURTO), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-3239712091",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, " ", props.dataItem.DISPLAY.USD.TOTALVOLUME24HTO), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-3239712091",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, " ", props.dataItem.DISPLAY.USD.CHANGEPCT24HOUR), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3239712091",
    __self: this
  }, "img.jsx-3239712091{width:45px;}.coinNumber.jsx-3239712091{font-size:16px;border:1px solid black;width:45px;text-align:center;line-height:4;}li.jsx-3239712091 span.jsx-3239712091{height:100%;}li.jsx-3239712091{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:65px;border:1px solid black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib2hkYW55YXNoY2h1ay9EZXNrdG9wL1JlYWN0L05FWFQvQ29tcG9uZW50cy9JdGVtL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCdUIsQUFHc0IsQUFJTSxBQU9ILEFBS0MsV0FmakIsQ0FZQSxHQVIyQix1QkFDWixXQUNPLGtCQUNKLE9BU0ssT0FSdkIsc0ZBU2dCLFlBQ1csdUJBQzNCIiwiZmlsZSI6Ii9Vc2Vycy9ib2hkYW55YXNoY2h1ay9EZXNrdG9wL1JlYWN0L05FWFQvQ29tcG9uZW50cy9JdGVtL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBJdGVtID0gKHByb3BzKSA9PiB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICBcbiAgICAgICAgPGxpIG9uQ2xpY2s9eyAoKT0+eyBwcm9wcy5nZXRDb2luRGV0YWlscyhwcm9wcy5kYXRhSXRlbS5Db2luSW5mby5JZCl9fT5cblxuICAgICAgIFxuICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2NvaW5OdW1iZXInPntwcm9wcy5jb2luTnVtYmVyfTwvc3Bhbj4gXG4gICAgICAgICAgIDxzcGFuPiA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmNyeXB0b2NvbXBhcmUuY29tJHtwcm9wcy5kYXRhSXRlbS5Db2luSW5mby5JbWFnZVVybH1gfSAvPjwvc3Bhbj4gXG4gICAgICAgICAgIFxuICAgICAgICAgICB7LyogPHNwYW4+IHtwcm9wcy5kYXRhSXRlbS5Db2luSW5mby5JZH08L3NwYW4+ICAqL31cbiAgICAgICAgICAgPHNwYW4+IHtwcm9wcy5kYXRhSXRlbS5Db2luSW5mby5OYW1lfTwvc3Bhbj4gXG4gICAgICAgICAgIDxzcGFuPiB7cHJvcHMuZGF0YUl0ZW0uQ29pbkluZm8uRnVsbE5hbWV9PC9zcGFuPiBcblxuICAgICAgICAgICA8c3Bhbj4ge3Byb3BzLmRhdGFJdGVtLkRJU1BMQVkuVVNELlBSSUNFfTwvc3Bhbj4gXG4gICAgICAgICAgIDxzcGFuPiB7cHJvcHMuZGF0YUl0ZW0uRElTUExBWS5VU0QuVk9MVU1FMjRIT1VSVE99PC9zcGFuPiBcbiAgICAgICAgICAgPHNwYW4+IHtwcm9wcy5kYXRhSXRlbS5ESVNQTEFZLlVTRC5UT1RBTFZPTFVNRTI0SFRPfTwvc3Bhbj4gXG4gICAgICAgICAgIDxzcGFuPiB7cHJvcHMuZGF0YUl0ZW0uRElTUExBWS5VU0QuQ0hBTkdFUENUMjRIT1VSfTwvc3Bhbj4gXG5cbiAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBpbWd7XG4gICAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY29pbk51bWJlcntcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDtcbiAgICAgICAgfVxuICAgICAgICBsaSBzcGFuIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgbGl7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogNjVweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICB9XG4gICAgICAgICBcbiAgICAgICAgYH08L3N0eWxlPlxuXG4gICAgICAgICAgIFxuXG4gICAgICAgIDwvbGk+XG4gICAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW0iXX0= */\n/*@ sourceURL=/Users/bohdanyashchuk/Desktop/React/NEXT/Components/Item/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Item);

/***/ })

})
//# sourceMappingURL=index.js.58f471a7a20a9d912147.hot-update.js.map