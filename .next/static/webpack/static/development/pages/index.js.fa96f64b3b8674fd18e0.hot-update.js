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
    className: "jsx-2676830024",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2676830024" + " " + 'coinNumber',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, props.coinNumber), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2676830024",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "https://www.cryptocompare.com".concat(props.dataItem.CoinInfo.ImageUrl),
    className: "jsx-2676830024",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2676830024",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, " ", props.dataItem.CoinInfo.Name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2676830024",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, " ", props.dataItem.CoinInfo.FullName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2676830024",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, " ", props.dataItem.DISPLAY.USD.PRICE), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2676830024",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, " ", props.dataItem.DISPLAY.USD.VOLUME24HOURTO), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2676830024",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, " ", props.dataItem.DISPLAY.USD.TOTALVOLUME24HTO), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2676830024",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, " ", props.dataItem.DISPLAY.USD.CHANGEPCT24HOUR), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2676830024",
    __self: this
  }, "img.jsx-2676830024{width:45px;}.coinNumber.jsx-2676830024{font-size:16px;border:1px solid black;}li.jsx-2676830024{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:65px;border:1px solid black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib2hkYW55YXNoY2h1ay9EZXNrdG9wL1JlYWN0L05FWFQvQ29tcG9uZW50cy9JdGVtL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCdUIsQUFHc0IsQUFJTSxBQU1GLFdBVGpCLElBSTJCLHVCQUUzQixvQ0FJdUIsNkZBQ1AsWUFDVyx1QkFDM0IiLCJmaWxlIjoiL1VzZXJzL2JvaGRhbnlhc2hjaHVrL0Rlc2t0b3AvUmVhY3QvTkVYVC9Db21wb25lbnRzL0l0ZW0vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IEl0ZW0gPSAocHJvcHMpID0+IHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIFxuICAgICAgICA8bGkgb25DbGljaz17ICgpPT57IHByb3BzLmdldENvaW5EZXRhaWxzKHByb3BzLmRhdGFJdGVtLkNvaW5JbmZvLklkKX19PlxuXG4gICAgICAgXG4gICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY29pbk51bWJlcic+e3Byb3BzLmNvaW5OdW1iZXJ9PC9zcGFuPiBcbiAgICAgICAgICAgPHNwYW4+IDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuY3J5cHRvY29tcGFyZS5jb20ke3Byb3BzLmRhdGFJdGVtLkNvaW5JbmZvLkltYWdlVXJsfWB9IC8+PC9zcGFuPiBcbiAgICAgICAgICAgXG4gICAgICAgICAgIHsvKiA8c3Bhbj4ge3Byb3BzLmRhdGFJdGVtLkNvaW5JbmZvLklkfTwvc3Bhbj4gICovfVxuICAgICAgICAgICA8c3Bhbj4ge3Byb3BzLmRhdGFJdGVtLkNvaW5JbmZvLk5hbWV9PC9zcGFuPiBcbiAgICAgICAgICAgPHNwYW4+IHtwcm9wcy5kYXRhSXRlbS5Db2luSW5mby5GdWxsTmFtZX08L3NwYW4+IFxuXG4gICAgICAgICAgIDxzcGFuPiB7cHJvcHMuZGF0YUl0ZW0uRElTUExBWS5VU0QuUFJJQ0V9PC9zcGFuPiBcbiAgICAgICAgICAgPHNwYW4+IHtwcm9wcy5kYXRhSXRlbS5ESVNQTEFZLlVTRC5WT0xVTUUyNEhPVVJUT308L3NwYW4+IFxuICAgICAgICAgICA8c3Bhbj4ge3Byb3BzLmRhdGFJdGVtLkRJU1BMQVkuVVNELlRPVEFMVk9MVU1FMjRIVE99PC9zcGFuPiBcbiAgICAgICAgICAgPHNwYW4+IHtwcm9wcy5kYXRhSXRlbS5ESVNQTEFZLlVTRC5DSEFOR0VQQ1QyNEhPVVJ9PC9zcGFuPiBcblxuICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGltZ3tcbiAgICAgICAgICB3aWR0aDogNDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb2luTnVtYmVye1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGxpe1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDY1cHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgfVxuICAgICAgICAgXG4gICAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgICAgICBcblxuICAgICAgICA8L2xpPlxuICAgIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBJdGVtIl19 */\n/*@ sourceURL=/Users/bohdanyashchuk/Desktop/React/NEXT/Components/Item/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Item);

/***/ })

})
//# sourceMappingURL=index.js.fa96f64b3b8674fd18e0.hot-update.js.map