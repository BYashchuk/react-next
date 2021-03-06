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
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    onClick: function onClick() {
      props.getCoinDetails(props.dataItem.CoinInfo.Id);
    },
    className: "jsx-73811840",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-73811840" + " " + 'coinNumber',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, props.coinNumber), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-73811840",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "https://www.cryptocompare.com".concat(props.dataItem.CoinInfo.ImageUrl),
    className: "jsx-73811840",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-73811840",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, " ", props.dataItem.CoinInfo.Name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-73811840",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, " ", props.dataItem.CoinInfo.FullName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-73811840",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, " ", props.dataItem.DISPLAY.USD.PRICE), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-73811840",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, " ", props.dataItem.DISPLAY.USD.VOLUME24HOURTO), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-73811840",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, " ", props.dataItem.DISPLAY.USD.TOTALVOLUME24HTO), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-73811840",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, " ", props.dataItem.DISPLAY.USD.CHANGEPCT24HOUR), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "73811840",
    __self: this
  }, "img.jsx-73811840{width:45px;}tr.jsx-73811840{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib2hkYW55YXNoY2h1ay9EZXNrdG9wL1JlYWN0L05FWFQvQ29tcG9uZW50cy9JdGVtL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9CdUIsQUFHc0IsQUFHUyxXQUZ0QixPQUlBIiwiZmlsZSI6Ii9Vc2Vycy9ib2hkYW55YXNoY2h1ay9EZXNrdG9wL1JlYWN0L05FWFQvQ29tcG9uZW50cy9JdGVtL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBJdGVtID0gKHByb3BzKSA9PiB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICBcbiAgICAgICAgPHRyIG9uQ2xpY2s9eyAoKT0+eyBwcm9wcy5nZXRDb2luRGV0YWlscyhwcm9wcy5kYXRhSXRlbS5Db2luSW5mby5JZCl9fT5cblxuICAgICAgIFxuICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSdjb2luTnVtYmVyJz57cHJvcHMuY29pbk51bWJlcn08L3RkPiBcbiAgICAgICAgICAgPHRkPiA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmNyeXB0b2NvbXBhcmUuY29tJHtwcm9wcy5kYXRhSXRlbS5Db2luSW5mby5JbWFnZVVybH1gfSAvPjwvdGQ+IFxuICAgICAgICAgICBcbiAgICAgICAgICAgPHRkPiB7cHJvcHMuZGF0YUl0ZW0uQ29pbkluZm8uTmFtZX08L3RkPiBcbiAgICAgICAgICAgPHRkPiB7cHJvcHMuZGF0YUl0ZW0uQ29pbkluZm8uRnVsbE5hbWV9PC90ZD4gXG5cbiAgICAgICAgICAgPHRkPiB7cHJvcHMuZGF0YUl0ZW0uRElTUExBWS5VU0QuUFJJQ0V9PC90ZD4gXG4gICAgICAgICAgIDx0ZD4ge3Byb3BzLmRhdGFJdGVtLkRJU1BMQVkuVVNELlZPTFVNRTI0SE9VUlRPfTwvdGQ+IFxuICAgICAgICAgICA8dGQ+IHtwcm9wcy5kYXRhSXRlbS5ESVNQTEFZLlVTRC5UT1RBTFZPTFVNRTI0SFRPfTwvdGQ+IFxuICAgICAgICAgICA8dGQ+IHtwcm9wcy5kYXRhSXRlbS5ESVNQTEFZLlVTRC5DSEFOR0VQQ1QyNEhPVVJ9PC90ZD4gXG5cbiAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBpbWd7XG4gICAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgIH1cbiAgICAgICAgdHIge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuXG4gICAgICAgICAgIFxuXG4gICAgICAgIDwvdHI+XG4gICAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW0iXX0= */\n/*@ sourceURL=/Users/bohdanyashchuk/Desktop/React/NEXT/Components/Item/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Item);

/***/ })

})
//# sourceMappingURL=index.js.c1b76f927039318e85c4.hot-update.js.map