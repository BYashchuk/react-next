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
    className: "jsx-3349550247",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-3349550247" + " " + 'coinNumber',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, props.coinNumber), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-3349550247",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "https://www.cryptocompare.com".concat(props.dataItem.CoinInfo.ImageUrl),
    className: "jsx-3349550247",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-3349550247",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, " ", props.dataItem.CoinInfo.Name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-3349550247",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, " ", props.dataItem.CoinInfo.FullName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-3349550247",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, " ", props.dataItem.DISPLAY.USD.PRICE), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-3349550247",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, " ", props.dataItem.DISPLAY.USD.VOLUME24HOURTO), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-3349550247",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, " ", props.dataItem.DISPLAY.USD.TOTALVOLUME24HTO), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-3349550247",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, " ", props.dataItem.DISPLAY.USD.CHANGEPCT24HOUR), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3349550247",
    __self: this
  }, "img.jsx-3349550247{width:45px;}.coinNumber.jsx-3349550247{font-size:16px;border:1px solid black;width:45px;text-align:center;line-height:4;}li.jsx-3349550247 td.jsx-3349550247{height:100%;line-height:4;}li.jsx-3349550247{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:65px;border:1px solid black;}li.jsx-3349550247 div.jsx-3349550247{margin:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib2hkYW55YXNoY2h1ay9EZXNrdG9wL1JlYWN0L05FWFQvQ29tcG9uZW50cy9JdGVtL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCdUIsQUFHc0IsQUFJTSxBQU9ILEFBTUMsQUFRbEIsV0F4QkMsQ0FXa0IsQUFhbEIsR0FwQjJCLFdBUzNCLFlBUmUsV0FDTyxrQkFDSixPQVVLLE9BVHZCLHNGQVVnQixZQUNXLHVCQUMzQiIsImZpbGUiOiIvVXNlcnMvYm9oZGFueWFzaGNodWsvRGVza3RvcC9SZWFjdC9ORVhUL0NvbXBvbmVudHMvSXRlbS9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgSXRlbSA9IChwcm9wcykgPT4ge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgXG4gICAgICAgIDx0ciBvbkNsaWNrPXsgKCk9PnsgcHJvcHMuZ2V0Q29pbkRldGFpbHMocHJvcHMuZGF0YUl0ZW0uQ29pbkluZm8uSWQpfX0+XG5cbiAgICAgICBcbiAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0nY29pbk51bWJlcic+e3Byb3BzLmNvaW5OdW1iZXJ9PC90ZD4gXG4gICAgICAgICAgIDx0ZD4gPGltZyBzcmM9e2BodHRwczovL3d3dy5jcnlwdG9jb21wYXJlLmNvbSR7cHJvcHMuZGF0YUl0ZW0uQ29pbkluZm8uSW1hZ2VVcmx9YH0gLz48L3RkPiBcbiAgICAgICAgICAgXG4gICAgICAgICAgIHsvKiA8dGQ+IHtwcm9wcy5kYXRhSXRlbS5Db2luSW5mby5JZH08L3RkPiAgKi99XG4gICAgICAgICAgIDx0ZD4ge3Byb3BzLmRhdGFJdGVtLkNvaW5JbmZvLk5hbWV9PC90ZD4gXG4gICAgICAgICAgIDx0ZD4ge3Byb3BzLmRhdGFJdGVtLkNvaW5JbmZvLkZ1bGxOYW1lfTwvdGQ+IFxuXG4gICAgICAgICAgIDx0ZD4ge3Byb3BzLmRhdGFJdGVtLkRJU1BMQVkuVVNELlBSSUNFfTwvdGQ+IFxuICAgICAgICAgICA8dGQ+IHtwcm9wcy5kYXRhSXRlbS5ESVNQTEFZLlVTRC5WT0xVTUUyNEhPVVJUT308L3RkPiBcbiAgICAgICAgICAgPHRkPiB7cHJvcHMuZGF0YUl0ZW0uRElTUExBWS5VU0QuVE9UQUxWT0xVTUUyNEhUT308L3RkPiBcbiAgICAgICAgICAgPHRkPiB7cHJvcHMuZGF0YUl0ZW0uRElTUExBWS5VU0QuQ0hBTkdFUENUMjRIT1VSfTwvdGQ+IFxuXG4gICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaW1ne1xuICAgICAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvaW5OdW1iZXJ7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQ7XG4gICAgICAgIH1cbiAgICAgICAgbGkgdGQge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQ7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIGxpe1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDY1cHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpIGRpdiB7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHhcbiAgICAgICAgfVxuICAgICAgICAgXG4gICAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgICAgICBcblxuICAgICAgICA8L3RyPlxuICAgIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBJdGVtIl19 */\n/*@ sourceURL=/Users/bohdanyashchuk/Desktop/React/NEXT/Components/Item/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Item);

/***/ })

})
//# sourceMappingURL=index.js.dce07dfde3e51c659400.hot-update.js.map