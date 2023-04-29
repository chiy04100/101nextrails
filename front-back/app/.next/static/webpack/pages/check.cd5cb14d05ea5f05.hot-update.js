"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/check",{

/***/ "./pages/check.js":
/*!************************!*\
  !*** ./pages/check.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n//ページネーション\nconst ITEMS_PER_PAGE = 10;\nfunction Check(param) {\n    let { initialData  } = param;\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialData);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1); // 現在表示しているページ番号\n    const totalPages = Math.ceil(initialData.length / ITEMS_PER_PAGE); // 総ページ数\n    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE; // 現在表示するページの先頭アイテムのインデックス\n    const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, initialData.length); // 現在表示するページの末尾アイテムのインデックス\n    // 現在表示するページのデータを取得(ページネーション)\n    const currentPageData = initialData.slice(startIndex, endIndex);\n    const pagination = [];\n    for(let i = 1; i <= totalPages; i++){\n        pagination.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: ()=>handlePageChange(i),\n            children: i\n        }, i, false, {\n            fileName: \"/usr/src/app/pages/check.js\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, this));\n    }\n    const items = [];\n    for(let i = 0; i < currentPageData.length; i++){\n        const item = currentPageData[i];\n        items.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"商品ID\",\n                        item.id\n                    ]\n                }, void 0, true, {\n                    fileName: \"/usr/src/app/pages/check.js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: item.itemname\n                }, void 0, false, {\n                    fileName: \"/usr/src/app/pages/check.js\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"画像\"\n                }, void 0, false, {\n                    fileName: \"/usr/src/app/pages/check.js\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    href: \"/update/\".concat(item.id),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"更新\"\n                    }, void 0, false, {\n                        fileName: \"/usr/src/app/pages/check.js\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/usr/src/app/pages/check.js\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>handleDelete(item.id),\n                    children: \"削除\"\n                }, void 0, false, {\n                    fileName: \"/usr/src/app/pages/check.js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, item.id, true, {\n            fileName: \"/usr/src/app/pages/check.js\",\n            lineNumber: 40,\n            columnNumber: 7\n        }, this));\n    }\n    // ページ番号が変更された場合に呼ばれる関数\n    const handlePageChange = (pageNumber)=>{\n        setCurrentPage(pageNumber);\n    };\n    async function handleUpdate(id, uddatedData) {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"http://api:3000/items/${id}\", uddatedData);\n        setData(response.data);\n    }\n    //削除機能\n    const handleDelete = async (id)=>{\n        try {\n            // DELETEリクエストを送信\n            const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"][\"delete\"](\"http://localhost:3000/items/\".concat(id));\n            //リロードせずに表示\n            setData((prevData)=>prevData.filter((item)=>item.id !== id));\n            // レスポンスを処理する\n            console.log(response.data);\n        } catch (error) {\n            // エラーを処理する\n            console.error(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/usr/src/app/pages/check.js\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/usr/src/app/pages/check.js\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/usr/src/app/pages/check.js\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/usr/src/app/pages/check.js\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/usr/src/app/pages/check.js\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().s),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().a),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                        href: \"/\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"トップ\"\n                                        }, void 0, false, {\n                                            fileName: \"/usr/src/app/pages/check.js\",\n                                            lineNumber: 95,\n                                            columnNumber: 14\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/usr/src/app/pages/check.js\",\n                                        lineNumber: 94,\n                                        columnNumber: 13\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/usr/src/app/pages/check.js\",\n                                    lineNumber: 93,\n                                    columnNumber: 12\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                        href: \"/post\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"登録\"\n                                        }, void 0, false, {\n                                            fileName: \"/usr/src/app/pages/check.js\",\n                                            lineNumber: 100,\n                                            columnNumber: 14\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/usr/src/app/pages/check.js\",\n                                        lineNumber: 99,\n                                        columnNumber: 13\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/usr/src/app/pages/check.js\",\n                                    lineNumber: 98,\n                                    columnNumber: 12\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                        href: \"/check\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"管理\"\n                                        }, void 0, false, {\n                                            fileName: \"/usr/src/app/pages/check.js\",\n                                            lineNumber: 105,\n                                            columnNumber: 14\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/usr/src/app/pages/check.js\",\n                                        lineNumber: 104,\n                                        columnNumber: 13\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/usr/src/app/pages/check.js\",\n                                    lineNumber: 103,\n                                    columnNumber: 12\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                        href: \"/confirmation\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"ユーザー\"\n                                        }, void 0, false, {\n                                            fileName: \"/usr/src/app/pages/check.js\",\n                                            lineNumber: 110,\n                                            columnNumber: 14\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/usr/src/app/pages/check.js\",\n                                        lineNumber: 109,\n                                        columnNumber: 13\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/usr/src/app/pages/check.js\",\n                                    lineNumber: 108,\n                                    columnNumber: 12\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/usr/src/app/pages/check.js\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/usr/src/app/pages/check.js\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"商品一覧\"\n                            }, void 0, false, {\n                                fileName: \"/usr/src/app/pages/check.js\",\n                                lineNumber: 116,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                href: \"/categorycheck\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"カテゴリー一覧ページへ\"\n                                }, void 0, false, {\n                                    fileName: \"/usr/src/app/pages/check.js\",\n                                    lineNumber: 118,\n                                    columnNumber: 11\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/usr/src/app/pages/check.js\",\n                                lineNumber: 117,\n                                columnNumber: 9\n                            }, this),\n                            items,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: pagination\n                            }, void 0, false, {\n                                fileName: \"/usr/src/app/pages/check.js\",\n                                lineNumber: 121,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/usr/src/app/pages/check.js\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/usr/src/app/pages/check.js\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Check, \"gXM64n1vTLB1PH0LtDb9WjuAVZs=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Check;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Check);\nvar _c;\n$RefreshReg$(_c, \"Check\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQUs7Ozs7Ozs7Ozs7OzswQkFFeEIsOERBQUNKO2dCQUFJdUIsV0FBV3BELGtFQUFROztrQ0FDdEIsOERBQUM2Qjt3QkFBSXVCLFdBQVdwRCxrRUFBUTtrQ0FDdEIsNEVBQUN1RDs7OENBQ0EsOERBQUNDOzhDQUNBLDRFQUFDdkQsa0RBQUlBO3dDQUFDZ0MsTUFBSztrREFDViw0RUFBQ0g7c0RBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OENBR0wsOERBQUMwQjs4Q0FDQSw0RUFBQ3ZELGtEQUFJQTt3Q0FBQ2dDLE1BQUs7a0RBQ1YsNEVBQUNIO3NEQUFFOzs7Ozs7Ozs7Ozs7Ozs7OzhDQUdMLDhEQUFDMEI7OENBQ0EsNEVBQUN2RCxrREFBSUE7d0NBQUNnQyxNQUFLO2tEQUNWLDRFQUFDSDtzREFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FHTCw4REFBQzBCOzhDQUNBLDRFQUFDdkQsa0RBQUlBO3dDQUFDZ0MsTUFBSztrREFDViw0RUFBQ0g7c0RBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FLUiw4REFBQ0Q7OzBDQUNELDhEQUFDNEI7MENBQUc7Ozs7OzswQ0FDSiw4REFBQ3hELGtEQUFJQTtnQ0FBQ2dDLE1BQUs7MENBQ1QsNEVBQUNIOzhDQUFFOzs7Ozs7Ozs7Ozs0QkFFRkg7MENBQ0QsOERBQUNFOzBDQUNFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNYjtHQWpIU2hCOztRQUVRRixrREFBU0E7OztLQUZqQkU7O0FBMkhULCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NoZWNrLmpzP2UxNDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgSW50ZXIgfSBmcm9tICduZXh0L2ZvbnQvZ29vZ2xlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuXG5jb25zdCBpbnRlciA9IEludGVyKHsgc3Vic2V0czogWydsYXRpbiddIH0pXG4vL+ODmuODvOOCuOODjeODvOOCt+ODp+ODs1xuY29uc3QgSVRFTVNfUEVSX1BBR0UgPSAxMDtcblxuZnVuY3Rpb24gQ2hlY2soe2luaXRpYWxEYXRhfSkge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShpbml0aWFsRGF0YSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoMSk7IC8vIOePvuWcqOihqOekuuOBl+OBpuOBhOOCi+ODmuODvOOCuOeVquWPt1xuICBjb25zdCB0b3RhbFBhZ2VzID0gTWF0aC5jZWlsKGluaXRpYWxEYXRhLmxlbmd0aCAvIElURU1TX1BFUl9QQUdFKTsgLy8g57eP44Oa44O844K45pWwXG4gIGNvbnN0IHN0YXJ0SW5kZXggPSAoY3VycmVudFBhZ2UgLSAxKSAqIElURU1TX1BFUl9QQUdFOyAvLyDnj77lnKjooajnpLrjgZnjgovjg5rjg7zjgrjjga7lhYjpoK3jgqLjgqTjg4bjg6Djga7jgqTjg7Pjg4fjg4Pjgq/jgrlcbiAgY29uc3QgZW5kSW5kZXggPSBNYXRoLm1pbihzdGFydEluZGV4ICsgSVRFTVNfUEVSX1BBR0UsIGluaXRpYWxEYXRhLmxlbmd0aCk7IC8vIOePvuWcqOihqOekuuOBmeOCi+ODmuODvOOCuOOBruacq+WwvuOCouOCpOODhuODoOOBruOCpOODs+ODh+ODg+OCr+OCuVxuXG4gIC8vIOePvuWcqOihqOekuuOBmeOCi+ODmuODvOOCuOOBruODh+ODvOOCv+OCkuWPluW+lyjjg5rjg7zjgrjjg43jg7zjgrfjg6fjg7MpXG4gIGNvbnN0IGN1cnJlbnRQYWdlRGF0YSA9IGluaXRpYWxEYXRhLnNsaWNlKHN0YXJ0SW5kZXgsIGVuZEluZGV4KTtcblxuICBjb25zdCBwYWdpbmF0aW9uID0gW107XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IHRvdGFsUGFnZXM7IGkrKykge1xuICAgIHBhZ2luYXRpb24ucHVzaChcbiAgICAgIDxidXR0b24ga2V5PXtpfSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQYWdlQ2hhbmdlKGkpfT5cbiAgICAgICAge2l9XG4gICAgICA8L2J1dHRvbj5cbiAgICApO1xuICB9XG5cbiAgY29uc3QgaXRlbXMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50UGFnZURhdGEubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBpdGVtID0gY3VycmVudFBhZ2VEYXRhW2ldO1xuICAgIGl0ZW1zLnB1c2goXG4gICAgICA8ZGl2IGtleT17aXRlbS5pZH0+XG4gICAgICAgIDxwPuWVhuWTgUlEe2l0ZW0uaWR9PC9wPlxuICAgICAgICA8cD57aXRlbS5pdGVtbmFtZX08L3A+XG4gICAgICAgIDxwPueUu+WDjzwvcD5cblxuICAgICAgICA8TGluayBocmVmPXtgL3VwZGF0ZS8ke2l0ZW0uaWR9YH0+XG4gICAgICAgICAgPGJ1dHRvbj7mm7TmlrA8L2J1dHRvbj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZShpdGVtLmlkKX0+5YmK6ZmkPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgLy8g44Oa44O844K455Wq5Y+344GM5aSJ5pu044GV44KM44Gf5aC05ZCI44Gr5ZG844Gw44KM44KL6Zai5pWwXG4gIGNvbnN0IGhhbmRsZVBhZ2VDaGFuZ2UgPSAocGFnZU51bWJlcikgPT4ge1xuICAgIHNldEN1cnJlbnRQYWdlKHBhZ2VOdW1iZXIpO1xuICB9O1xuXG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlVXBkYXRlKGlkLCB1ZGRhdGVkRGF0YSkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vYXBpOjMwMDAvaXRlbXMvJHtpZH0nLCB1ZGRhdGVkRGF0YSk7XG4gICAgc2V0RGF0YShyZXNwb25zZS5kYXRhKTtcbiAgfVxuXG4gIFxuICAvL+WJiumZpOapn+iDvVxuICBjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAoaWQpID0+IHtcbiAgICB0cnkge1xuICAgICAgLy8gREVMRVRF44Oq44Kv44Ko44K544OI44KS6YCB5L+hXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmRlbGV0ZShgaHR0cDovL2xvY2FsaG9zdDozMDAwL2l0ZW1zLyR7aWR9YCk7XG4gICAgICAvL+ODquODreODvOODieOBm+OBmuOBq+ihqOekulxuICAgICAgc2V0RGF0YSgocHJldkRhdGEpID0+IHByZXZEYXRhLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gaWQpKTtcbiAgICAgIC8vIOODrOOCueODneODs+OCueOCkuWHpueQhuOBmeOCi1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIOOCqOODqeODvOOCkuWHpueQhuOBmeOCi1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIFxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF9PlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICA8cD7jg4jjg4Pjg5c8L3A+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9zdFwiPlxuICAgICAgICAgICAgIDxwPueZu+mMsjwvcD5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jaGVja1wiPlxuICAgICAgICAgICAgIDxwPueuoeeQhjwvcD5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb25maXJtYXRpb25cIj5cbiAgICAgICAgICAgICA8cD7jg6bjg7zjgrbjg7w8L3A+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgIDxoMT7llYblk4HkuIDopqc8L2gxPlxuICAgICAgICA8TGluayBocmVmPVwiL2NhdGVnb3J5Y2hlY2tcIj5cbiAgICAgICAgICA8cD7jgqvjg4bjgrTjg6rjg7zkuIDopqfjg5rjg7zjgrjjgbg8L3A+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgICB7aXRlbXN9XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtwYWdpbmF0aW9ufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9hcGk6MzAwMC9pdGVtcz9wYWdlPTEnKTtcbiAgY29uc3QgaW5pdGlhbERhdGEgPSByZXNwb25zZS5kYXRhO1xuICByZXR1cm4geyBwcm9wczogeyBpbml0aWFsRGF0YSB9IH07XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBDaGVjaztcblxuIl0sIm5hbWVzIjpbImludGVyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhlYWQiLCJJbWFnZSIsInN0eWxlcyIsIkxpbmsiLCJheGlvcyIsInVzZVJvdXRlciIsIklURU1TX1BFUl9QQUdFIiwiQ2hlY2siLCJpbml0aWFsRGF0YSIsImRhdGEiLCJzZXREYXRhIiwicm91dGVyIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsInRvdGFsUGFnZXMiLCJNYXRoIiwiY2VpbCIsImxlbmd0aCIsInN0YXJ0SW5kZXgiLCJlbmRJbmRleCIsIm1pbiIsImN1cnJlbnRQYWdlRGF0YSIsInNsaWNlIiwicGFnaW5hdGlvbiIsImkiLCJwdXNoIiwiYnV0dG9uIiwib25DbGljayIsImhhbmRsZVBhZ2VDaGFuZ2UiLCJpdGVtcyIsIml0ZW0iLCJkaXYiLCJwIiwiaWQiLCJpdGVtbmFtZSIsImhyZWYiLCJoYW5kbGVEZWxldGUiLCJwYWdlTnVtYmVyIiwiaGFuZGxlVXBkYXRlIiwidWRkYXRlZERhdGEiLCJyZXNwb25zZSIsImdldCIsImRlbGV0ZSIsInByZXZEYXRhIiwiZmlsdGVyIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiY2xhc3NOYW1lIiwicyIsImEiLCJ1bCIsImxpIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/check.js\n"));

/***/ })

});