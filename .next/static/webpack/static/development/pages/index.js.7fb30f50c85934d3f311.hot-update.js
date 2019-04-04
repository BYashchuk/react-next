webpackHotUpdate("static/development/pages/index.js",{

/***/ "./Components/Main/index.js":
/*!**********************************!*\
  !*** ./Components/Main/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Item */ "./Components/Item/index.js");
/* harmony import */ var _Details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Details */ "./Components/Details/index.js");

var _jsxFileName = "/Users/bohdanyashchuk/Desktop/React/NEXT/Components/Main/index.js";





var Main = function Main(_ref) {
  var coinsData = _ref.coinsData,
      getCoinDetails = _ref.getCoinDetails,
      isShowDetails = _ref.isShowDetails,
      isHideCoinDetails = _ref.isHideCoinDetails,
      selectCoinID = _ref.selectCoinID;
  var coinNumber = 1;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3782299136",
    __self: this
  }, "table.jsx-3782299136{width:100%;}tr.jsx-3782299136{text-align:center;border:1px solid black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib2hkYW55YXNoY2h1ay9EZXNrdG9wL1JlYWN0L05FWFQvQ29tcG9uZW50cy9NYWluL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCa0IsQUFHdUIsQUFJUSxXQUhwQixPQUl5Qix1QkFDM0IiLCJmaWxlIjoiL1VzZXJzL2JvaGRhbnlhc2hjaHVrL0Rlc2t0b3AvUmVhY3QvTkVYVC9Db21wb25lbnRzL01haW4vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSXRlbSBmcm9tICcuLi9JdGVtJ1xuaW1wb3J0IERldGFpbHMgZnJvbSAnLi4vRGV0YWlscydcblxuY29uc3QgTWFpbiA9ICh7XG4gIGNvaW5zRGF0YSxcbiAgZ2V0Q29pbkRldGFpbHMsXG4gIGlzU2hvd0RldGFpbHMsXG4gIGlzSGlkZUNvaW5EZXRhaWxzLFxuICBzZWxlY3RDb2luSURcbn0pID0+IHtcblxuICBsZXQgY29pbk51bWJlciA9IDFcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIHRhYmxlIHtcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdHIge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG5cblxuICAgICAge2lzU2hvd0RldGFpbHMgP1xuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRoPiYjODQ3MDs8L3RoPlxuICAgICAgICAgICAgICA8dGg+SUNPTjwvdGg+XG4gICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cbiAgICAgICAgICAgICAgPHRoPkZ1bGxOYW1lPC90aD5cbiAgICAgICAgICAgICAgPHRoPlBSSUNFPC90aD5cbiAgICAgICAgICAgICAgPHRoPlZPTFVNRTI0SE9VUlRPPC90aD5cbiAgICAgICAgICAgICAgPHRoPlRPVEFMVk9MVU1FMjRIVE88L3RoPlxuICAgICAgICAgICAgICA8dGg+Q0hBTkdFUENUMjRIT1VSPC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICB7Y29pbnNEYXRhLmxlbmd0aCAhPT0gMCA/XG4gICAgICAgICAgICAgIGNvaW5zRGF0YS5tYXAoKGRhdGFJdGVtLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2luUHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgICBjb2luTnVtYmVyOiBjb2luTnVtYmVyKyssXG4gICAgICAgICAgICAgICAgICBnZXRDb2luRGV0YWlscyxcbiAgICAgICAgICAgICAgICAgIGRhdGFJdGVtXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICA8SXRlbSB7Li4uY29pblByb3BzfSAvPlxuICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIDogPGgzPk5vIENvaW48L2gzPlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDpcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGlzSGlkZUNvaW5EZXRhaWxzKCl9Pm9rPC9idXR0b24+XG4gICAgICAgICAge2NvaW5zRGF0YS5sZW5ndGggIT09IDAgP1xuICAgICAgICAgICAgY29pbnNEYXRhXG4gICAgICAgICAgICAgIC5maWx0ZXIoZGF0YUl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RDb2luSUQgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YUl0ZW0uQ29pbkluZm8uSWQgPT09IHNlbGVjdENvaW5JRFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhSXRlbVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAubWFwKChkYXRhSXRlbSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxEZXRhaWxzIGtleT17a2V5fSBkYXRhSXRlbT17ZGF0YUl0ZW19IC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiA8aDM+Tm8gQ29pbjwvaDM+XG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIH1cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW4iXX0= */\n/*@ sourceURL=/Users/bohdanyashchuk/Desktop/React/NEXT/Components/Main/index.js */"), isShowDetails ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3782299136",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("table", {
    className: "jsx-3782299136",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
    className: "jsx-3782299136",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    className: "jsx-3782299136",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "\u2116"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    className: "jsx-3782299136",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "ICON"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    className: "jsx-3782299136",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Name"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    className: "jsx-3782299136",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "FullName"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    className: "jsx-3782299136",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "PRICE"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    className: "jsx-3782299136",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "VOLUME24HOURTO"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    className: "jsx-3782299136",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "TOTALVOLUME24HTO"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    className: "jsx-3782299136",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "CHANGEPCT24HOUR")), coinsData.length !== 0 ? coinsData.map(function (dataItem, key) {
    var coinProps = {
      coinNumber: coinNumber++,
      getCoinDetails: getCoinDetails,
      dataItem: dataItem
    };
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Item__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, coinProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    })));
  }) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    className: "jsx-3782299136",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "No Coin"))) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3782299136",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: function onClick() {
      return isHideCoinDetails();
    },
    className: "jsx-3782299136",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "ok"), coinsData.length !== 0 ? coinsData.filter(function (dataItem) {
    if (selectCoinID !== '') {
      return dataItem.CoinInfo.Id === selectCoinID;
    }

    return dataItem;
  }).map(function (dataItem, key) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Details__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: key,
      dataItem: dataItem,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    });
  }) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    className: "jsx-3782299136",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "No Coin")));
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ })

})
//# sourceMappingURL=index.js.7fb30f50c85934d3f311.hot-update.js.map