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
    id: "2385454037",
    __self: this
  }, "ul.jsx-2385454037{list-style:none;background-color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib2hkYW55YXNoY2h1ay9EZXNrdG9wL1JlYWN0L05FWFQvQ29tcG9uZW50cy9NYWluL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCa0IsQUFHOEIsZ0JBQ00sdUJBQ3pCIiwiZmlsZSI6Ii9Vc2Vycy9ib2hkYW55YXNoY2h1ay9EZXNrdG9wL1JlYWN0L05FWFQvQ29tcG9uZW50cy9NYWluL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEl0ZW0gZnJvbSAnLi4vSXRlbSdcbmltcG9ydCBEZXRhaWxzIGZyb20gJy4uL0RldGFpbHMnXG5cbmNvbnN0IE1haW4gPSAoe1xuICBjb2luc0RhdGEsXG4gIGdldENvaW5EZXRhaWxzLFxuICBpc1Nob3dEZXRhaWxzLFxuICBpc0hpZGVDb2luRGV0YWlscyxcbiAgc2VsZWN0Q29pbklEXG59KSA9PiB7XG5cbiAgbGV0IGNvaW5OdW1iZXIgPSAxXG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG5cblxuICAgICAge2lzU2hvd0RldGFpbHMgP1xuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDx0YWJsZSBib3JkZXI9XCIxXCI+XG4gICA8dGJvZHk+XG5cbiAgIDx0cj5cbiAgICA8dGg+Y29pbk51bWJlcjwvdGg+XG5cbiAgICA8dGg+SW1hZ2VVcmw8L3RoPlxuICAgIDx0aD5OYW1lPC90aD5cbiAgICA8dGg+RnVsbE5hbWU8L3RoPlxuICAgIDx0aD5QUklDRTwvdGg+XG4gICAgPHRoPlZPTFVNRTI0SE9VUlRPPC90aD5cbiAgICA8dGg+VE9UQUxWT0xVTUUyNEhUTzwvdGg+XG4gICAgPHRoPkNIQU5HRVBDVDI0SE9VUjwvdGg+XG4gICA8L3RyPlxuICAgICAgICAgICAge2NvaW5zRGF0YS5sZW5ndGggIT09IDAgP1xuICAgICAgICAgICAgICBjb2luc0RhdGEubWFwKChkYXRhSXRlbSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29pblByb3BzID0ge1xuICAgICAgICAgICAgICAgICAgY29pbk51bWJlcjogY29pbk51bWJlcisrLFxuICAgICAgICAgICAgICAgICAgZ2V0Q29pbkRldGFpbHMsXG4gICAgICAgICAgICAgICAgICBkYXRhSXRlbVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8SXRlbSBrZXk9e2tleX0gey4uLmNvaW5Qcm9wc30gLz5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIDogPGRpdj5ObyBDb2luPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDpcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGlzSGlkZUNvaW5EZXRhaWxzKCl9Pm9rPC9idXR0b24+XG4gICAgICAgICAge2NvaW5zRGF0YS5sZW5ndGggIT09IDAgP1xuICAgICAgICAgICAgY29pbnNEYXRhXG4gICAgICAgICAgICAgIC5maWx0ZXIoZGF0YUl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RDb2luSUQgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YUl0ZW0uQ29pbkluZm8uSWQgPT09IHNlbGVjdENvaW5JRFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhSXRlbVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAubWFwKChkYXRhSXRlbSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxEZXRhaWxzIGtleT17a2V5fSBkYXRhSXRlbT17ZGF0YUl0ZW19IC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiA8ZGl2Pk5vIENvaW48L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbiJdfQ== */\n/*@ sourceURL=/Users/bohdanyashchuk/Desktop/React/NEXT/Components/Main/index.js */"), isShowDetails ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2385454037",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("table", {
    border: "1",
    className: "jsx-2385454037",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tbody", {
    className: "jsx-2385454037",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
    className: "jsx-2385454037",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    className: "jsx-2385454037",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "coinNumber"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    className: "jsx-2385454037",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "ImageUrl"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    className: "jsx-2385454037",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Name"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    className: "jsx-2385454037",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "FullName"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    className: "jsx-2385454037",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "PRICE"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    className: "jsx-2385454037",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "VOLUME24HOURTO"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    className: "jsx-2385454037",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "TOTALVOLUME24HTO"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    className: "jsx-2385454037",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "CHANGEPCT24HOUR")), coinsData.length !== 0 ? coinsData.map(function (dataItem, key) {
    var coinProps = {
      coinNumber: coinNumber++,
      getCoinDetails: getCoinDetails,
      dataItem: dataItem
    };
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Item__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: key
    }, coinProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }));
  }) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2385454037",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "No Coin")))) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2385454037",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: function onClick() {
      return isHideCoinDetails();
    },
    className: "jsx-2385454037",
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
  }) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2385454037",
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
//# sourceMappingURL=index.js.56494c736a587e77e237.hot-update.js.map