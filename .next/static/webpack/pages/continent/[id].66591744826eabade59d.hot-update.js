/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/continent/[id]",{

/***/ "./src/pages/continent/[id].tsx":
/*!**************************************!*\
  !*** ./src/pages/continent/[id].tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Continent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _components_ContinentBanner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ContinentBanner */ \"./src/components/ContinentBanner/index.tsx\");\n/* harmony import */ var _components_ContinentSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ContinentSection */ \"./src/components/ContinentSection/index.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/home/luana/Projetos/ignite/ignite-worldtrip/src/pages/continent/[id].tsx\";\n\n\n\nvar __N_SSG = true;\nfunction Continent(_ref) {\n  var data = _ref.data;\n  // const router = useRouter();\n  // if (router.isFallback) {\n  //     return <Spinner />\n  // }\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n    w: \"100%\",\n    direction: \"column\",\n    align: \"center\",\n    justify: \"center\",\n    marginBottom: \"8\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ContinentBanner__WEBPACK_IMPORTED_MODULE_1__.ContinentBanner, {\n      name: data.name,\n      urlImg: data.urlImg\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n      direction: \"column\",\n      maxW: \"1160px\",\n      mx: \"auto\",\n      mb: \"10\",\n      px: \"1rem\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ContinentSection__WEBPACK_IMPORTED_MODULE_2__.ContinentSection, {\n        countries: data.countries,\n        languages: data.languages,\n        description: data.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 9\n  }, this);\n}\n_c = Continent;\n\nvar _c;\n\n$RefreshReg$(_c, \"Continent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NvbnRpbmVudC9baWRdLnRzeD80ODM4Il0sIm5hbWVzIjpbIkNvbnRpbmVudCIsImRhdGEiLCJuYW1lIiwidXJsSW1nIiwiY291bnRyaWVzIiwibGFuZ3VhZ2VzIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBQ0E7O0FBMEJlLFNBQVNBLFNBQVQsT0FBNkM7QUFBQSxNQUF4QkMsSUFBd0IsUUFBeEJBLElBQXdCO0FBRXhEO0FBRUE7QUFDQTtBQUNBO0FBRUEsc0JBQ0ksOERBQUMsa0RBQUQ7QUFBTSxLQUFDLEVBQUMsTUFBUjtBQUFlLGFBQVMsRUFBQyxRQUF6QjtBQUFrQyxTQUFLLEVBQUMsUUFBeEM7QUFBaUQsV0FBTyxFQUFDLFFBQXpEO0FBQWtFLGdCQUFZLEVBQUMsR0FBL0U7QUFBQSw0QkFFSSw4REFBQyx3RUFBRDtBQUFpQixVQUFJLEVBQUVBLElBQUksQ0FBQ0MsSUFBNUI7QUFBa0MsWUFBTSxFQUFFRCxJQUFJLENBQUNFO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixlQUlJLDhEQUFDLGtEQUFEO0FBQU0sZUFBUyxFQUFDLFFBQWhCO0FBQXlCLFVBQUksRUFBQyxRQUE5QjtBQUF1QyxRQUFFLEVBQUMsTUFBMUM7QUFBaUQsUUFBRSxFQUFDLElBQXBEO0FBQXlELFFBQUUsRUFBQyxNQUE1RDtBQUFBLDZCQUNJLDhEQUFDLDBFQUFEO0FBQ0ksaUJBQVMsRUFBRUYsSUFBSSxDQUFDRyxTQURwQjtBQUVJLGlCQUFTLEVBQUVILElBQUksQ0FBQ0ksU0FGcEI7QUFHSSxtQkFBVyxFQUFFSixJQUFJLENBQUNLO0FBSHRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFpSEg7S0F6SHVCTixTIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2NvbnRpbmVudC9baWRdLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgRmxleCwgSGVhZGluZywgSFN0YWNrLCBJbWFnZSBhcyBDaGFrcmFJbWFnZSwgU2ltcGxlR3JpZCwgVGV4dCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBHZXRTdGF0aWNQYXRocywgR2V0U3RhdGljUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBDb250aW5lbnRCYW5uZXIgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Db250aW5lbnRCYW5uZXJcIjtcbmltcG9ydCB7IENvbnRpbmVudFNlY3Rpb24gfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Db250aW5lbnRTZWN0aW9uXCI7XG5pbXBvcnQgeyBhcGkgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXBpXCI7XG5cblxuLy8gaW50ZXJmYWNlIEh1bmRyZWFkUGx1c1Byb3BzIHtcbi8vICAgICBpZDogc3RyaW5nLFxuLy8gICAgIG5hbWU6IHN0cmluZyxcbi8vICAgICBjb3VudHJ5OiBzdHJpbmcsXG4vLyAgICAgaW1hZ2U6IHN0cmluZyxcbi8vICAgICBjb3VudHJ5SWNvbjogc3RyaW5nXG4vLyB9XG5cbmludGVyZmFjZSBDb250aW5lbnRQcm9wcyB7XG4gICAgZGF0YToge1xuICAgICAgICBpZDogc3RyaW5nLFxuICAgICAgICBuYW1lOiBzdHJpbmcsXG4gICAgICAgIHRpdGxlOiBzdHJpbmcsXG4gICAgICAgIHVybEltZzogc3RyaW5nO1xuICAgICAgICBkZXNjcmlwdGlvbjogc3RyaW5nLFxuICAgICAgICBjb3VudHJpZXM6IG51bWJlcixcbiAgICAgICAgbGFuZ3VhZ2VzOiBudW1iZXIsXG4gICAgICAgIC8vICBodW5kcmVhZFBsdXM6IEh1bmRyZWFkUGx1c1Byb3BzW11cbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGluZW50KHsgZGF0YSB9OiBDb250aW5lbnRQcm9wcykge1xuXG4gICAgLy8gY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICAvLyBpZiAocm91dGVyLmlzRmFsbGJhY2spIHtcbiAgICAvLyAgICAgcmV0dXJuIDxTcGlubmVyIC8+XG4gICAgLy8gfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZsZXggdz1cIjEwMCVcIiBkaXJlY3Rpb249XCJjb2x1bW5cIiBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnk9XCJjZW50ZXJcIiBtYXJnaW5Cb3R0b209XCI4XCI+XG5cbiAgICAgICAgICAgIDxDb250aW5lbnRCYW5uZXIgbmFtZT17ZGF0YS5uYW1lfSB1cmxJbWc9e2RhdGEudXJsSW1nfSAvPlxuXG4gICAgICAgICAgICA8RmxleCBkaXJlY3Rpb249XCJjb2x1bW5cIiBtYXhXPVwiMTE2MHB4XCIgbXg9XCJhdXRvXCIgbWI9XCIxMFwiIHB4PVwiMXJlbVwiPlxuICAgICAgICAgICAgICAgIDxDb250aW5lbnRTZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgIGNvdW50cmllcz17ZGF0YS5jb3VudHJpZXN9XG4gICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlcz17ZGF0YS5sYW5ndWFnZXN9XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtkYXRhLmRlc2NyaXB0aW9ufSAvPlxuXG4gICAgICAgICAgICA8L0ZsZXg+XG5cblxuICAgICAgICAgICAgey8qIDxGbGV4XG4gICAgICAgICAgICAgICAgYXM9XCJzZWN0aW9uXCJcbiAgICAgICAgICAgICAgICBmbGV4RGlyPXtbXCJjb2x1bW5cIiwgXCJyb3dcIl19XG4gICAgICAgICAgICAgICAgdz1cIjEwMCVcIlxuICAgICAgICAgICAgICAgIG1heFc9ezExNjB9XG4gICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgICBweT17W1wiNlwiLCBcIjIwXCJdfVxuICAgICAgICAgICAgICAgIHB4PXtbXCI0XCIsIFwiMFwiXX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICBhcz1cInBcIlxuICAgICAgICAgICAgICAgICAgICBtYXhXPVwiNjAwXCJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9e1tcIjE0XCIsIFwiMjRcIl19XG4gICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ9XCIxNjAlXCJcbiAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduPVwianVzdGlmeVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPEhTdGFjayBzcGFjaW5nPXtbXCI2XCIsIFwiMTBcIl19IGFsaWduPVwiY2VudGVyXCIganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIiBteT17W1wiNlwiLCBcIjBcIl19PlxuICAgICAgICAgICAgICAgICAgICA8Qm94IGFsaWduPXtbXCJzdGFydFwiLCBcImNlbnRlclwiXX0ganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9e1syNCwgNDhdfSBmb250V2VpZ2h0PVwic2VtaWJvbGRcIiBjb2xvcj1cImhpZ2hsaWdodC5oaWdobGlnaHRcIj57ZGF0YS5jb3VudHJpZXN9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgbXQ9e1tcIjFcIiwgXCI4XCJdfSBmb250U2l6ZT17W1wiMThcIiwgXCIyNFwiXX0gZm9udFdlaWdodD1cInNlbWlib2xkXCI+cGHDrXNlczwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgIDxCb3ggYWxpZ249e1tcInN0YXJ0XCIsIFwiY2VudGVyXCJdfSBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT17WzI0LCA0OF19IGZvbnRXZWlnaHQ9XCJzZW1pYm9sZFwiIGNvbG9yPVwiaGlnaGxpZ2h0LmhpZ2hsaWdodFwiPntkYXRhLmxhbmd1YWdlc308L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBtdD17W1wiMVwiLCBcIjhcIl19IGZvbnRTaXplPXtbXCIxOFwiLCBcIjI0XCJdfSBmb250V2VpZ2h0PVwic2VtaWJvbGRcIj5sw61uZ3VhczwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgIDxCb3ggYWxpZ249e1tcInN0YXJ0XCIsIFwiY2VudGVyXCJdfSBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT17WzI0LCA0OF19IGZvbnRXZWlnaHQ9XCJzZW1pYm9sZFwiIGNvbG9yPVwiaGlnaGxpZ2h0LmhpZ2hsaWdodFwiPjI3PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgbXQ9e1tcIjFcIiwgXCI4XCJdfSBmb250U2l6ZT17W1wiMThcIiwgXCIyNFwiXX0gZm9udFdlaWdodD1cInNlbWlib2xkXCI+Y2lkYWRlcyArMTAwPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8L0hTdGFjaz5cbiAgICAgICAgICAgIDwvRmxleD5cblxuICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgICAgICBhcz1cInNlY3Rpb25cIlxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgICAgICAgICAgdz1cIjEwMCVcIlxuICAgICAgICAgICAgICAgIG1heFc9ezExNjB9XG4gICAgICAgICAgICAgICAgYWxpZ249XCJsZWZ0XCJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8SGVhZGluZyB0ZXh0QWxpZ249XCJsZWZ0XCIgbWI9XCIxMlwiIGZvbnRTaXplPXtbXCIyNFwiLCBcIjMwXCJdfSBmb250V2VpZ2h0PVwibWVkaXVtXCIgcHg9e1tcIjRcIiwgXCIwXCJdfT5cbiAgICAgICAgICAgICAgICAgICAgQ2lkYWRlcyArMTAwXG4gICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxuXG4gICAgICAgICAgICAgICAgPFNpbXBsZUdyaWQgY29sdW1ucz17WzEsIDIsIDRdfSBzcGFjaW5nPXs0Nn0gbXg9XCJhdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLmh1bmRyZWFkUGx1cy5tYXAoY2l0eSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjaXR5LmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHc9ezI1Nn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoPXsyNzl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmc9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg9XCIxcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cImxnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcj1cImhpZ2hsaWdodC5oaWdobGlnaHQuMjAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdz1cImhpZGRlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoYWtyYUltYWdlIHNyYz17Y2l0eS5pbWFnZX0gYWx0PVwiXCIgdz1cIjEwMCVcIiBoPVwiNjAlXCIgb2JqZWN0Rml0PVwiY292ZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4IHA9XCI2XCIgZmxleERpcj1cInJvd1wiIGFsaWduPVwiY2VudGVyXCIganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5PVwiYmFybG93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT1cIjIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwic2VtaWJvbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPVwiaDRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ9XCJ0aWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNUcnVuY2F0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2l0eS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXQ9XCIzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5PVwiYmFybG93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwibWVkaXVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImRhcmsuaW5mb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9XCJoNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodD1cInRpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1RydW5jYXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaXR5LmNvdW50cnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGFrcmFJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtjaXR5LmNvdW50cnlJY29ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtgQmFuZGVpcmEgJHtjaXR5Lm5hbWV9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHc9ezMwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaD17MzB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9ezMwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L1NpbXBsZUdyaWQ+IFxuICAgICAgICA8L0ZsZXg+Ki99XG4gICAgICAgIDwvRmxleCA+XG4gICAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzOiBHZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQoJy9jb250aW5lbnRzJylcbiAgICBjb25zdCBjb250aW5lbnRzID0gcmVzcG9uc2UuZGF0YVxuXG4gICAgY29uc3QgcGF0aHMgPSBjb250aW5lbnRzLm1hcCgoY29udGluZW50KSA9PiAoe1xuICAgICAgICBwYXJhbXM6IHsgaWQ6IGNvbnRpbmVudC5pZCB9XG4gICAgfSkpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGF0aHMsXG4gICAgICAgIGZhbGxiYWNrOiB0cnVlLFxuICAgIH07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgICBjb25zdCB7IGlkIH0gPSBwYXJhbXM7XG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBhcGkuZ2V0KGAvY29udGluZW50cy8ke2lkfWApO1xuXG4gICAgY29uc29sZS5sb2coZGF0YSlcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgZGF0YVxuICAgICAgICB9XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/continent/[id].tsx\n");

/***/ })

});