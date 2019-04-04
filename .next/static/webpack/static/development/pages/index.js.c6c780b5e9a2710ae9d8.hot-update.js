webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../redux/actions */ "./redux/actions.js");
/* harmony import */ var _Components_Main__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Components/Main */ "./Components/Main/index.js");








var _jsxFileName = "/Users/bohdanyashchuk/Desktop/React/NEXT/pages/index.js";






var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Index, _React$Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "getCoinInfo", function () {
      fetch("https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD&api_key=8b906026037dcdf0689bb21a53d1a7209c162177e28871867211c70fd3d385e1").then(function (response) {
        return response.json();
      }).then(function (data) {
        return _this.props.onServerCoinsData(data.Data);
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getCoinInfo();
    }
  }, {
    key: "render",
    value: function render() {
      var coinsDataProps = {
        coinsData: this.props.coinsData,
        getCoinDetails: this.props.getCoinDetails,
        isShowDetails: this.props.isShowDetails,
        isHideCoinDetails: this.props.isHideCoinDetails,
        selectCoinID: this.props.selectCoinID
      };
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-1911568109",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "1911568109",
        __self: this
      }, "img.jsx-1911568109{width:50px;}h1.jsx-1911568109{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib2hkYW55YXNoY2h1ay9EZXNrdG9wL1JlYWN0L05FWFQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0NvQixBQUlRLEFBRVcsV0FGVixPQUdFIiwiZmlsZSI6Ii9Vc2Vycy9ib2hkYW55YXNoY2h1ay9EZXNrdG9wL1JlYWN0L05FWFQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge1xuICBzZXJ2ZXJDb2luc0RhdGEsXG4gIGdldENvaW5EZXRhaWxzLFxuICBpc0hpZGVDb2luRGV0YWlsc1xufSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zJ1xuaW1wb3J0IE1haW4gZnJvbSAnLi4vQ29tcG9uZW50cy9NYWluJ1xuXG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZ2V0Q29pbkluZm8oKVxuICB9XG5cbiAgZ2V0Q29pbkluZm8gPSAoKSA9PiB7XG4gICAgZmV0Y2goYGh0dHBzOi8vbWluLWFwaS5jcnlwdG9jb21wYXJlLmNvbS9kYXRhL3RvcC9ta3RjYXBmdWxsP2xpbWl0PTEwJnRzeW09VVNEJmFwaV9rZXk9OGI5MDYwMjYwMzdkY2RmMDY4OWJiMjFhNTNkMWE3MjA5YzE2MjE3N2UyODg3MTg2NzIxMWM3MGZkM2QzODVlMWApXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHRoaXMucHJvcHMub25TZXJ2ZXJDb2luc0RhdGEoZGF0YS5EYXRhKSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIGNvbnN0IGNvaW5zRGF0YVByb3BzID0ge1xuICAgICAgY29pbnNEYXRhOiB0aGlzLnByb3BzLmNvaW5zRGF0YSxcbiAgICAgIGdldENvaW5EZXRhaWxzOiB0aGlzLnByb3BzLmdldENvaW5EZXRhaWxzLFxuICAgICAgaXNTaG93RGV0YWlsczogdGhpcy5wcm9wcy5pc1Nob3dEZXRhaWxzLFxuICAgICAgaXNIaWRlQ29pbkRldGFpbHM6IHRoaXMucHJvcHMuaXNIaWRlQ29pbkRldGFpbHMsXG4gICAgICBzZWxlY3RDb2luSUQ6IHRoaXMucHJvcHMuc2VsZWN0Q29pbklEXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBpbWd7XG4gICAgICAgICAgd2lkdGg6NTBweFxuICAgICAgICB9XG4gICAgICAgICAgaDEge1xudGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPGgxPtCi0L7Qv9C70LjRgdGCINC/0L4g0YDRi9C90L7Rh9C90L7QuSDQutCw0L/QuNGC0LDQu9C40LfQsNGG0LjQuCDQn9C+0LvQvdGL0LUg0LTQsNC90L3Ri9C1PC9oMT5cbiAgICAgICAgPE1haW4gey4uLmNvaW5zRGF0YVByb3BzfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuXG4gIH1cbn1cblxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBjb2luc0RhdGE6IHN0YXRlLnJvb3RTdGF0ZS5jb2luc0RhdGEsXG4gIHNlbGVjdENvaW5JRDogc3RhdGUucm9vdFN0YXRlLnNlbGVjdENvaW5JRCxcbiAgaXNTaG93RGV0YWlsczogc3RhdGUucm9vdFN0YXRlLmlzU2hvd0RldGFpbHNcbn0pXG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gIG9uU2VydmVyQ29pbnNEYXRhOiBhbGxDb2lucyA9PiBkaXNwYXRjaChzZXJ2ZXJDb2luc0RhdGEoYWxsQ29pbnMpKSxcbiAgZ2V0Q29pbkRldGFpbHM6IHNlbGVjdENvaW5JRCA9PiBkaXNwYXRjaChnZXRDb2luRGV0YWlscyhzZWxlY3RDb2luSUQpKSxcbiAgaXNIaWRlQ29pbkRldGFpbHM6ICgpID0+IGRpc3BhdGNoKGlzSGlkZUNvaW5EZXRhaWxzKCkpLFxufSlcblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShJbmRleCkiXX0= */\n/*@ sourceURL=/Users/bohdanyashchuk/Desktop/React/NEXT/pages/index.js */"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h1", {
        className: "jsx-1911568109",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "\u0422\u043E\u043F\u043B\u0438\u0441\u0442 \u043F\u043E \u0440\u044B\u043D\u043E\u0447\u043D\u043E\u0439 \u043A\u0430\u043F\u0438\u0442\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u041F\u043E\u043B\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Components_Main__WEBPACK_IMPORTED_MODULE_12__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, coinsDataProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      })));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    coinsData: state.rootState.coinsData,
    selectCoinID: state.rootState.selectCoinID,
    isShowDetails: state.rootState.isShowDetails
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onServerCoinsData: function onServerCoinsData(allCoins) {
      return dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_11__["serverCoinsData"])(allCoins));
    },
    getCoinDetails: function getCoinDetails(selectCoinID) {
      return dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_11__["getCoinDetails"])(selectCoinID));
    },
    isHideCoinDetails: function isHideCoinDetails() {
      return dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_11__["isHideCoinDetails"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, mapDispatchToProps)(Index));

/***/ })

})
//# sourceMappingURL=index.js.c6c780b5e9a2710ae9d8.hot-update.js.map