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
    className: "jsx-3687510694",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-3687510694" + " " + 'coinNumber',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, props.coinNumber), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-3687510694",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "https://www.cryptocompare.com".concat(props.dataItem.CoinInfo.ImageUrl),
    className: "jsx-3687510694",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-3687510694",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, " ", props.dataItem.CoinInfo.Name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-3687510694",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, " ", props.dataItem.CoinInfo.FullName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-3687510694",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, " ", props.dataItem.DISPLAY.USD.PRICE), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-3687510694",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, " ", props.dataItem.DISPLAY.USD.VOLUME24HOURTO), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-3687510694",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, " ", props.dataItem.DISPLAY.USD.TOTALVOLUME24HTO), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-3687510694",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, " ", props.dataItem.DISPLAY.USD.CHANGEPCT24HOUR), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3687510694",
    __self: this
  }, "img.jsx-3687510694{width:45px;}tr.jsx-3687510694{text-align:center;outline:1px solid black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib2hkYW55YXNoY2h1ay9EZXNrdG9wL1JlYWN0L05FWFQvQ29tcG9uZW50cy9JdGVtL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCdUIsQUFHc0IsQUFXUyxXQVZ0QixPQVc0Qix3QkFDNUIiLCJmaWxlIjoiL1VzZXJzL2JvaGRhbnlhc2hjaHVrL0Rlc2t0b3AvUmVhY3QvTkVYVC9Db21wb25lbnRzL0l0ZW0vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IEl0ZW0gPSAocHJvcHMpID0+IHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIFxuICAgICAgICA8dHIgb25DbGljaz17ICgpPT57IHByb3BzLmdldENvaW5EZXRhaWxzKHByb3BzLmRhdGFJdGVtLkNvaW5JbmZvLklkKX19PlxuXG4gICAgICAgXG4gICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J2NvaW5OdW1iZXInPntwcm9wcy5jb2luTnVtYmVyfTwvdGQ+IFxuICAgICAgICAgICA8dGQ+IDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuY3J5cHRvY29tcGFyZS5jb20ke3Byb3BzLmRhdGFJdGVtLkNvaW5JbmZvLkltYWdlVXJsfWB9IC8+PC90ZD4gXG4gICAgICAgICAgIFxuICAgICAgICAgICB7LyogPHRkPiB7cHJvcHMuZGF0YUl0ZW0uQ29pbkluZm8uSWR9PC90ZD4gICovfVxuICAgICAgICAgICA8dGQ+IHtwcm9wcy5kYXRhSXRlbS5Db2luSW5mby5OYW1lfTwvdGQ+IFxuICAgICAgICAgICA8dGQ+IHtwcm9wcy5kYXRhSXRlbS5Db2luSW5mby5GdWxsTmFtZX08L3RkPiBcblxuICAgICAgICAgICA8dGQ+IHtwcm9wcy5kYXRhSXRlbS5ESVNQTEFZLlVTRC5QUklDRX08L3RkPiBcbiAgICAgICAgICAgPHRkPiB7cHJvcHMuZGF0YUl0ZW0uRElTUExBWS5VU0QuVk9MVU1FMjRIT1VSVE99PC90ZD4gXG4gICAgICAgICAgIDx0ZD4ge3Byb3BzLmRhdGFJdGVtLkRJU1BMQVkuVVNELlRPVEFMVk9MVU1FMjRIVE99PC90ZD4gXG4gICAgICAgICAgIDx0ZD4ge3Byb3BzLmRhdGFJdGVtLkRJU1BMQVkuVVNELkNIQU5HRVBDVDI0SE9VUn08L3RkPiBcblxuICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGltZ3tcbiAgICAgICAgICB3aWR0aDogNDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIC5jb2luTnVtYmVye1xuICAgICAgICAvLyAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAvLyAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgIC8vICAgICB3aWR0aDogNDVweDtcbiAgICAgICAgLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLy8gICAgIGxpbmUtaGVpZ2h0OiA0O1xuICAgICAgICAvLyB9XG4gICAgICAgIHRyIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgfVxuXG4gICAgICAgIFxuICAgICAgICAgXG4gICAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgICAgICBcblxuICAgICAgICA8L3RyPlxuICAgIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBJdGVtIl19 */\n/*@ sourceURL=/Users/bohdanyashchuk/Desktop/React/NEXT/Components/Item/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Item);

/***/ })

})
//# sourceMappingURL=index.js.46ffebbb2f2756decd38.hot-update.js.map