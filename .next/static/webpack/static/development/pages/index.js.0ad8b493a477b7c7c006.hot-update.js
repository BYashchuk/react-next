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
        className: "jsx-2609665382",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "2609665382",
        __self: this
      }, "h1.jsx-2609665382{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib2hkYW55YXNoY2h1ay9EZXNrdG9wL1JlYWN0L05FWFQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0NvQixBQUdtQixrQkFDUiIsImZpbGUiOiIvVXNlcnMvYm9oZGFueWFzaGNodWsvRGVza3RvcC9SZWFjdC9ORVhUL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHtcbiAgc2VydmVyQ29pbnNEYXRhLFxuICBnZXRDb2luRGV0YWlscyxcbiAgaXNIaWRlQ29pbkRldGFpbHNcbn0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucydcbmltcG9ydCBNYWluIGZyb20gJy4uL0NvbXBvbmVudHMvTWFpbidcblxuXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmdldENvaW5JbmZvKClcbiAgfVxuXG4gIGdldENvaW5JbmZvID0gKCkgPT4ge1xuICAgIGZldGNoKGBodHRwczovL21pbi1hcGkuY3J5cHRvY29tcGFyZS5jb20vZGF0YS90b3AvbWt0Y2FwZnVsbD9saW1pdD0xMCZ0c3ltPVVTRCZhcGlfa2V5PThiOTA2MDI2MDM3ZGNkZjA2ODliYjIxYTUzZDFhNzIwOWMxNjIxNzdlMjg4NzE4NjcyMTFjNzBmZDNkMzg1ZTFgKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oZGF0YSA9PiB0aGlzLnByb3BzLm9uU2VydmVyQ29pbnNEYXRhKGRhdGEuRGF0YSkpXG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICBjb25zdCBjb2luc0RhdGFQcm9wcyA9IHtcbiAgICAgIGNvaW5zRGF0YTogdGhpcy5wcm9wcy5jb2luc0RhdGEsXG4gICAgICBnZXRDb2luRGV0YWlsczogdGhpcy5wcm9wcy5nZXRDb2luRGV0YWlscyxcbiAgICAgIGlzU2hvd0RldGFpbHM6IHRoaXMucHJvcHMuaXNTaG93RGV0YWlscyxcbiAgICAgIGlzSGlkZUNvaW5EZXRhaWxzOiB0aGlzLnByb3BzLmlzSGlkZUNvaW5EZXRhaWxzLFxuICAgICAgc2VsZWN0Q29pbklEOiB0aGlzLnByb3BzLnNlbGVjdENvaW5JRFxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBoMSB7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8aDE+0KLQvtC/0LvQuNGB0YIg0L/QviDRgNGL0L3QvtGH0L3QvtC5INC60LDQv9C40YLQsNC70LjQt9Cw0YbQuNC4INCf0L7Qu9C90YvQtSDQtNCw0L3QvdGL0LU8L2gxPlxuICAgICAgICA8TWFpbiB7Li4uY29pbnNEYXRhUHJvcHN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG5cbiAgfVxufVxuXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIGNvaW5zRGF0YTogc3RhdGUucm9vdFN0YXRlLmNvaW5zRGF0YSxcbiAgc2VsZWN0Q29pbklEOiBzdGF0ZS5yb290U3RhdGUuc2VsZWN0Q29pbklELFxuICBpc1Nob3dEZXRhaWxzOiBzdGF0ZS5yb290U3RhdGUuaXNTaG93RGV0YWlsc1xufSlcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgb25TZXJ2ZXJDb2luc0RhdGE6IGFsbENvaW5zID0+IGRpc3BhdGNoKHNlcnZlckNvaW5zRGF0YShhbGxDb2lucykpLFxuICBnZXRDb2luRGV0YWlsczogc2VsZWN0Q29pbklEID0+IGRpc3BhdGNoKGdldENvaW5EZXRhaWxzKHNlbGVjdENvaW5JRCkpLFxuICBpc0hpZGVDb2luRGV0YWlsczogKCkgPT4gZGlzcGF0Y2goaXNIaWRlQ29pbkRldGFpbHMoKSksXG59KVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEluZGV4KSJdfQ== */\n/*@ sourceURL=/Users/bohdanyashchuk/Desktop/React/NEXT/pages/index.js */"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h1", {
        className: "jsx-2609665382",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "\u0422\u043E\u043F\u043B\u0438\u0441\u0442 \u043F\u043E \u0440\u044B\u043D\u043E\u0447\u043D\u043E\u0439 \u043A\u0430\u043F\u0438\u0442\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u041F\u043E\u043B\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Components_Main__WEBPACK_IMPORTED_MODULE_12__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, coinsDataProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
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
//# sourceMappingURL=index.js.0ad8b493a477b7c7c006.hot-update.js.map