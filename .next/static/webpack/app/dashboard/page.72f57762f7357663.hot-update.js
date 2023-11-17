"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./app/components/dashboard/NavLinks.tsx":
/*!***********************************************!*\
  !*** ./app/components/dashboard/NavLinks.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NavLinks; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_DocumentDuplicateIcon_HomeIcon_UserGroupIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=DocumentDuplicateIcon,HomeIcon,UserGroupIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/HomeIcon.js\");\n/* harmony import */ var _barrel_optimize_names_DocumentDuplicateIcon_HomeIcon_UserGroupIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=DocumentDuplicateIcon,HomeIcon,UserGroupIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/DocumentDuplicateIcon.js\");\n/* harmony import */ var _barrel_optimize_names_DocumentDuplicateIcon_HomeIcon_UserGroupIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=DocumentDuplicateIcon,HomeIcon,UserGroupIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/UserGroupIcon.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ \"(app-pages-browser)/./node_modules/clsx/dist/clsx.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst links = [\n    {\n        name: \"Home\",\n        href: \"/dashboard\",\n        icon: _barrel_optimize_names_DocumentDuplicateIcon_HomeIcon_UserGroupIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    },\n    {\n        name: \"Department\",\n        href: \"/dashboard/department\",\n        icon: _barrel_optimize_names_DocumentDuplicateIcon_HomeIcon_UserGroupIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    },\n    {\n        name: \"Results\",\n        href: \"/dashboard/result\",\n        icon: _barrel_optimize_names_DocumentDuplicateIcon_HomeIcon_UserGroupIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    },\n    {\n        name: \"Rank\",\n        href: \"/dashboard/rank\",\n        icon: _barrel_optimize_names_DocumentDuplicateIcon_HomeIcon_UserGroupIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    }\n];\nfunction NavLinks(param) {\n    let { userRole } = param;\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: links.map((link)=>{\n            const LinkIcon = link.icon;\n            let linkHref = link.href; // Set the default link to the link's href\n            // If it's the Department link, check the user's role\n            if (link.name === \"Department\") {\n                if (userRole === \"admin\") {\n                    linkHref = \"/dashboard/department\"; // Admins go to the department page\n                } else {\n                    linkHref = \"/dashboard/error\"; // Others go to an error page\n                }\n            }\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: linkHref,\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-green-100 hover:text-green-600 md:flex-none md:justify-start md:p-2 md:px-3\", {\n                    \"bg-green-100 text-green-600\": pathname === linkHref\n                }),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkIcon, {\n                        className: \"w-6\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\projects\\\\CTS\\\\thefinal\\\\CtsProject\\\\EducationSite\\\\client\\\\app\\\\components\\\\dashboard\\\\NavLinks.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"hidden md:block\",\n                        children: link.name\n                    }, void 0, false, {\n                        fileName: \"D:\\\\projects\\\\CTS\\\\thefinal\\\\CtsProject\\\\EducationSite\\\\client\\\\app\\\\components\\\\dashboard\\\\NavLinks.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, link.name, true, {\n                fileName: \"D:\\\\projects\\\\CTS\\\\thefinal\\\\CtsProject\\\\EducationSite\\\\client\\\\app\\\\components\\\\dashboard\\\\NavLinks.tsx\",\n                lineNumber: 53,\n                columnNumber: 11\n            }, this);\n        })\n    }, void 0, false);\n}\n_s(NavLinks, \"xbyQPtUVMO7MNj7WjJlpdWqRcTo=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname\n    ];\n});\n_c = NavLinks;\nvar _c;\n$RefreshReg$(_c, \"NavLinks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9OYXZMaW5rcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBS3FDO0FBQ1I7QUFDaUI7QUFDdEI7QUFFeEIsTUFBTU0sUUFBUTtJQUNaO1FBQUVDLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxNQUFNUixzSUFBUUE7SUFBQztJQUNqQjtRQUNFTSxNQUFNO1FBQ05DLE1BQU07UUFDTkMsTUFBTVAsc0lBQXFCQTtJQUM3QjtJQUNBO1FBQUVLLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxNQUFNVCxzSUFBYUE7SUFDckI7SUFDQTtRQUFFTyxNQUFNO1FBQ05DLE1BQU07UUFDTkMsTUFBTVQsc0lBQWFBO0lBQ3JCO0NBQ0Q7QUFNYyxTQUFTVSxTQUFTLEtBQTJCO1FBQTNCLEVBQUVDLFFBQVEsRUFBaUIsR0FBM0I7O0lBQy9CLE1BQU1DLFdBQVdSLDREQUFXQTtJQUU1QixxQkFDRTtrQkFDR0UsTUFBTU8sR0FBRyxDQUFDLENBQUNDO1lBQ1YsTUFBTUMsV0FBV0QsS0FBS0wsSUFBSTtZQUMxQixJQUFJTyxXQUFXRixLQUFLTixJQUFJLEVBQUUsMENBQTBDO1lBRXBFLHFEQUFxRDtZQUNyRCxJQUFJTSxLQUFLUCxJQUFJLEtBQUssY0FBYztnQkFDOUIsSUFBSUksYUFBYSxTQUFTO29CQUN4QkssV0FBVyx5QkFBeUIsbUNBQW1DO2dCQUN6RSxPQUFPO29CQUNMQSxXQUFXLG9CQUFvQiw2QkFBNkI7Z0JBQzlEO1lBQ0Y7WUFFQSxxQkFDRSw4REFBQ2Isa0RBQUlBO2dCQUVISyxNQUFNUTtnQkFDTkMsV0FBV1osZ0RBQUlBLENBQ2IsMkxBQ0E7b0JBQ0UsK0JBQStCTyxhQUFhSTtnQkFDOUM7O2tDQUdGLDhEQUFDRDt3QkFBU0UsV0FBVTs7Ozs7O2tDQUNwQiw4REFBQ0M7d0JBQUVELFdBQVU7a0NBQW1CSCxLQUFLUCxJQUFJOzs7Ozs7O2VBVnBDTyxLQUFLUCxJQUFJOzs7OztRQWFwQjs7QUFHTjtHQXBDd0JHOztRQUNMTix3REFBV0E7OztLQUROTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvTmF2TGlua3MudHN4PzQ4ZDgiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCB7XHJcbiAgVXNlckdyb3VwSWNvbixcclxuICBIb21lSWNvbixcclxuICBEb2N1bWVudER1cGxpY2F0ZUljb24sXHJcbn0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC8yNC9vdXRsaW5lJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlUGF0aG5hbWUgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuXHJcbmNvbnN0IGxpbmtzID0gW1xyXG4gIHsgbmFtZTogJ0hvbWUnLCBcclxuICAgIGhyZWY6ICcvZGFzaGJvYXJkJywgXHJcbiAgICBpY29uOiBIb21lSWNvbiB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdEZXBhcnRtZW50JyxcclxuICAgIGhyZWY6ICcvZGFzaGJvYXJkL2RlcGFydG1lbnQnLFxyXG4gICAgaWNvbjogRG9jdW1lbnREdXBsaWNhdGVJY29uLFxyXG4gIH0sXHJcbiAgeyBuYW1lOiAnUmVzdWx0cycsIFxyXG4gICAgaHJlZjogJy9kYXNoYm9hcmQvcmVzdWx0JywgXHJcbiAgICBpY29uOiBVc2VyR3JvdXBJY29uIFxyXG4gIH0sXHJcbiAgeyBuYW1lOiAnUmFuaycsIFxyXG4gICAgaHJlZjogJy9kYXNoYm9hcmQvcmFuaycsIFxyXG4gICAgaWNvbjogVXNlckdyb3VwSWNvbiBcclxuICB9XHJcbl07XHJcblxyXG5pbnRlcmZhY2UgTmF2TGlua3NQcm9wcyB7XHJcbiAgdXNlclJvbGU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2TGlua3MoeyB1c2VyUm9sZSB9OiBOYXZMaW5rc1Byb3BzKSB7XHJcbiAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge2xpbmtzLm1hcCgobGluaykgPT4ge1xyXG4gICAgICAgIGNvbnN0IExpbmtJY29uID0gbGluay5pY29uO1xyXG4gICAgICAgIGxldCBsaW5rSHJlZiA9IGxpbmsuaHJlZjsgLy8gU2V0IHRoZSBkZWZhdWx0IGxpbmsgdG8gdGhlIGxpbmsncyBocmVmXHJcblxyXG4gICAgICAgIC8vIElmIGl0J3MgdGhlIERlcGFydG1lbnQgbGluaywgY2hlY2sgdGhlIHVzZXIncyByb2xlXHJcbiAgICAgICAgaWYgKGxpbmsubmFtZSA9PT0gJ0RlcGFydG1lbnQnKSB7XHJcbiAgICAgICAgICBpZiAodXNlclJvbGUgPT09ICdhZG1pbicpIHtcclxuICAgICAgICAgICAgbGlua0hyZWYgPSAnL2Rhc2hib2FyZC9kZXBhcnRtZW50JzsgLy8gQWRtaW5zIGdvIHRvIHRoZSBkZXBhcnRtZW50IHBhZ2VcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxpbmtIcmVmID0gJy9kYXNoYm9hcmQvZXJyb3InOyAvLyBPdGhlcnMgZ28gdG8gYW4gZXJyb3IgcGFnZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAga2V5PXtsaW5rLm5hbWV9XHJcbiAgICAgICAgICAgIGhyZWY9e2xpbmtIcmVmfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICAgICAgJ2ZsZXggaC1bNDhweF0gZ3JvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTIgcm91bmRlZC1tZCBiZy1ncmF5LTUwIHAtMyB0ZXh0LXNtIGZvbnQtbWVkaXVtIGhvdmVyOmJnLWdyZWVuLTEwMCBob3Zlcjp0ZXh0LWdyZWVuLTYwMCBtZDpmbGV4LW5vbmUgbWQ6anVzdGlmeS1zdGFydCBtZDpwLTIgbWQ6cHgtMycsXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJ2JnLWdyZWVuLTEwMCB0ZXh0LWdyZWVuLTYwMCc6IHBhdGhuYW1lID09PSBsaW5rSHJlZixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TGlua0ljb24gY2xhc3NOYW1lPVwidy02XCIgLz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmJsb2NrXCI+e2xpbmsubmFtZX08L3A+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJVc2VyR3JvdXBJY29uIiwiSG9tZUljb24iLCJEb2N1bWVudER1cGxpY2F0ZUljb24iLCJMaW5rIiwidXNlUGF0aG5hbWUiLCJjbHN4IiwibGlua3MiLCJuYW1lIiwiaHJlZiIsImljb24iLCJOYXZMaW5rcyIsInVzZXJSb2xlIiwicGF0aG5hbWUiLCJtYXAiLCJsaW5rIiwiTGlua0ljb24iLCJsaW5rSHJlZiIsImNsYXNzTmFtZSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/dashboard/NavLinks.tsx\n"));

/***/ })

});