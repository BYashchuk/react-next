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
    id: "2970019123",
    __self: this
  }, "table.jsx-2970019123{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib2hkYW55YXNoY2h1ay9EZXNrdG9wL1JlYWN0L05FWFQvQ29tcG9uZW50cy9NYWluL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCa0IsQUFHdUIsV0FDWiIsImZpbGUiOiIvVXNlcnMvYm9oZGFueWFzaGNodWsvRGVza3RvcC9SZWFjdC9ORVhUL0NvbXBvbmVudHMvTWFpbi9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBJdGVtIGZyb20gJy4uL0l0ZW0nXG5pbXBvcnQgRGV0YWlscyBmcm9tICcuLi9EZXRhaWxzJ1xuXG5jb25zdCBNYWluID0gKHtcbiAgY29pbnNEYXRhLFxuICBnZXRDb2luRGV0YWlscyxcbiAgaXNTaG93RGV0YWlscyxcbiAgaXNIaWRlQ29pbkRldGFpbHMsXG4gIHNlbGVjdENvaW5JRFxufSkgPT4ge1xuXG4gIGxldCBjb2luTnVtYmVyID0gMVxuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgdGFibGUge1xuICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBcbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG5cblxuICAgICAge2lzU2hvd0RldGFpbHMgP1xuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDx0YWJsZSBib3JkZXI9JzEnPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGg+JiM4NDcwOzwvdGg+XG4gICAgICAgICAgICAgIDx0aD5JQ09OPC90aD5cbiAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxuICAgICAgICAgICAgICA8dGg+RnVsbE5hbWU8L3RoPlxuICAgICAgICAgICAgICA8dGg+UFJJQ0U8L3RoPlxuICAgICAgICAgICAgICA8dGg+Vk9MVU1FMjRIT1VSVE88L3RoPlxuICAgICAgICAgICAgICA8dGg+VE9UQUxWT0xVTUUyNEhUTzwvdGg+XG4gICAgICAgICAgICAgIDx0aD5DSEFOR0VQQ1QyNEhPVVI8L3RoPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIHtjb2luc0RhdGEubGVuZ3RoICE9PSAwID9cbiAgICAgICAgICAgICAgY29pbnNEYXRhLm1hcCgoZGF0YUl0ZW0sIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvaW5Qcm9wcyA9IHtcbiAgICAgICAgICAgICAgICAgIGNvaW5OdW1iZXI6IGNvaW5OdW1iZXIrKyxcbiAgICAgICAgICAgICAgICAgIGdldENvaW5EZXRhaWxzLFxuICAgICAgICAgICAgICAgICAgZGF0YUl0ZW1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2tleX0+XG4gICAgICAgICAgICAgICAgICAgIDxJdGVtIHsuLi5jb2luUHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgOiA8dHI+Tm8gQ29pbjwvdHI+XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgOlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaXNIaWRlQ29pbkRldGFpbHMoKX0+b2s8L2J1dHRvbj5cbiAgICAgICAgICB7Y29pbnNEYXRhLmxlbmd0aCAhPT0gMCA/XG4gICAgICAgICAgICBjb2luc0RhdGFcbiAgICAgICAgICAgICAgLmZpbHRlcihkYXRhSXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdENvaW5JRCAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhSXRlbS5Db2luSW5mby5JZCA9PT0gc2VsZWN0Q29pbklEXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFJdGVtXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5tYXAoKGRhdGFJdGVtLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPERldGFpbHMga2V5PXtrZXl9IGRhdGFJdGVtPXtkYXRhSXRlbX0gLz5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IDx0cj5ObyBDb2luPC90cj5cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbiJdfQ== */\n/*@ sourceURL=/Users/bohdanyashchuk/Desktop/React/NEXT/Components/Main/index.js */"), isShowDetails ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2970019123",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("table", {
    border: "1",
    className: "jsx-2970019123",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
    className: "jsx-2970019123",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    className: "jsx-2970019123",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "\u2116"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    className: "jsx-2970019123",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "ICON"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    className: "jsx-2970019123",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Name"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    className: "jsx-2970019123",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "FullName"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    className: "jsx-2970019123",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "PRICE"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    className: "jsx-2970019123",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "VOLUME24HOURTO"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    className: "jsx-2970019123",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "TOTALVOLUME24HTO"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    className: "jsx-2970019123",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
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
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Item__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, coinProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    })));
  }) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
    className: "jsx-2970019123",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "No Coin"))) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2970019123",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: function onClick() {
      return isHideCoinDetails();
    },
    className: "jsx-2970019123",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
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
        lineNumber: 73
      },
      __self: this
    });
  }) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
    className: "jsx-2970019123",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "No Coin")));
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ })

})
//# sourceMappingURL=index.js.23c7c880d1412f8bf1e0.hot-update.js.map