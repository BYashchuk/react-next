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
  }, "ul.jsx-2385454037{list-style:none;background-color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib2hkYW55YXNoY2h1ay9EZXNrdG9wL1JlYWN0L05FWFQvQ29tcG9uZW50cy9NYWluL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCa0IsQUFHOEIsZ0JBQ00sdUJBQ3pCIiwiZmlsZSI6Ii9Vc2Vycy9ib2hkYW55YXNoY2h1ay9EZXNrdG9wL1JlYWN0L05FWFQvQ29tcG9uZW50cy9NYWluL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEl0ZW0gZnJvbSAnLi4vSXRlbSdcbmltcG9ydCBEZXRhaWxzIGZyb20gJy4uL0RldGFpbHMnXG5cbmNvbnN0IE1haW4gPSAoe1xuICBjb2luc0RhdGEsXG4gIGdldENvaW5EZXRhaWxzLFxuICBpc1Nob3dEZXRhaWxzLFxuICBpc0hpZGVDb2luRGV0YWlscyxcbiAgc2VsZWN0Q29pbklEXG59KSA9PiB7XG5cbiAgbGV0IGNvaW5OdW1iZXIgPSAxXG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG5cblxuICAgICAge2lzU2hvd0RldGFpbHMgP1xuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDx0YWJsZSBib3JkZXI9XCIxXCI+XG4gICA8Y2FwdGlvbj7QotCw0LHQu9C40YbQsCDRgNCw0LfQvNC10YDQvtCyINC+0LHRg9Cy0Lg8L2NhcHRpb24+XG4gICA8dHI+XG4gICAgPHRoPtCg0L7RgdGB0LjRjzwvdGg+XG4gICAgPHRoPtCS0LXQu9C40LrQvtCx0YDQuNGC0LDQvdC40Y88L3RoPlxuICAgIDx0aD7QldCy0YDQvtC/0LA8L3RoPlxuICAgIDx0aD7QlNC70LjQvdCwINGB0YLRg9C/0L3QuCwg0YHQvDwvdGg+XG4gICA8L3RyPlxuICAgICAgICAgICAge2NvaW5zRGF0YS5sZW5ndGggIT09IDAgP1xuICAgICAgICAgICAgICBjb2luc0RhdGEubWFwKChkYXRhSXRlbSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29pblByb3BzID0ge1xuICAgICAgICAgICAgICAgICAgY29pbk51bWJlcjogY29pbk51bWJlcisrLFxuICAgICAgICAgICAgICAgICAgZ2V0Q29pbkRldGFpbHMsXG4gICAgICAgICAgICAgICAgICBkYXRhSXRlbVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgICAgPEl0ZW0gey4uLmNvaW5Qcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICA6IDxoMz5ObyBDb2luPC9oMz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA6XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBpc0hpZGVDb2luRGV0YWlscygpfT5vazwvYnV0dG9uPlxuICAgICAgICAgIHtjb2luc0RhdGEubGVuZ3RoICE9PSAwID9cbiAgICAgICAgICAgIGNvaW5zRGF0YVxuICAgICAgICAgICAgICAuZmlsdGVyKGRhdGFJdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0Q29pbklEICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFJdGVtLkNvaW5JbmZvLklkID09PSBzZWxlY3RDb2luSURcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YUl0ZW1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLm1hcCgoZGF0YUl0ZW0sIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8RGV0YWlscyBrZXk9e2tleX0gZGF0YUl0ZW09e2RhdGFJdGVtfSAvPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogPGgzPk5vIENvaW48L2gzPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICB9XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluIl19 */\n/*@ sourceURL=/Users/bohdanyashchuk/Desktop/React/NEXT/Components/Main/index.js */"), isShowDetails ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
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
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("caption", {
    className: "jsx-2385454037",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "\u0422\u0430\u0431\u043B\u0438\u0446\u0430 \u0440\u0430\u0437\u043C\u0435\u0440\u043E\u0432 \u043E\u0431\u0443\u0432\u0438"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
    className: "jsx-2385454037",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    className: "jsx-2385454037",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "\u0420\u043E\u0441\u0441\u0438\u044F"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    className: "jsx-2385454037",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "\u0412\u0435\u043B\u0438\u043A\u043E\u0431\u0440\u0438\u0442\u0430\u043D\u0438\u044F"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    className: "jsx-2385454037",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "\u0415\u0432\u0440\u043E\u043F\u0430"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    className: "jsx-2385454037",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "\u0414\u043B\u0438\u043D\u0430 \u0441\u0442\u0443\u043F\u043D\u0438, \u0441\u043C")), coinsData.length !== 0 ? coinsData.map(function (dataItem, key) {
    var coinProps = {
      coinNumber: coinNumber++,
      getCoinDetails: getCoinDetails,
      dataItem: dataItem
    };
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Item__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, coinProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    })));
  }) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    className: "jsx-2385454037",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "No Coin"))) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2385454037",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: function onClick() {
      return isHideCoinDetails();
    },
    className: "jsx-2385454037",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
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
        lineNumber: 68
      },
      __self: this
    });
  }) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    className: "jsx-2385454037",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "No Coin")));
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ })

})
//# sourceMappingURL=index.js.232eb517c52f0e33028d.hot-update.js.map