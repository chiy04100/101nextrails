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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n//ページネーション\nconst ITEMS_PER_PAGE = 10;\nfunction Check(param) {\n    let { initialData  } = param;\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialData);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1); // 現在表示しているページ番号\n    const totalPages = Math.ceil(initialData.length / ITEMS_PER_PAGE); // 総ページ数\n    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE; // 現在表示するページの先頭アイテムのインデックス\n    const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, initialData.length); // 現在表示するページの末尾アイテムのインデックス\n    // 現在表示するページのデータを取得(ページネーション)\n    const currentPageData = initialData.slice(startIndex, endIndex);\n    const pagination = [];\n    for(let i = 1; i <= totalPages; i++){\n        pagination.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: ()=>handlePageChange(i),\n            children: i\n        }, i, false, {\n            fileName: \"/usr/src/app/pages/check.js\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, this));\n    }\n    const items = [];\n    for(let i = 0; i < currentPageData.length; i++){\n        const item = currentPageData[i];\n        items.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: item.id\n                }, void 0, false, {\n                    fileName: \"/usr/src/app/pages/check.js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: item.itemname\n                }, void 0, false, {\n                    fileName: \"/usr/src/app/pages/check.js\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: item.itemdescription\n                }, void 0, false, {\n                    fileName: \"/usr/src/app/pages/check.js\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: item.price\n                }, void 0, false, {\n                    fileName: \"/usr/src/app/pages/check.js\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this),\n                \"x\",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    href: \"/update/\".concat(item.id),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"更新\"\n                    }, void 0, false, {\n                        fileName: \"/usr/src/app/pages/check.js\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/usr/src/app/pages/check.js\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>handleDelete(item.id),\n                    children: \"削除\"\n                }, void 0, false, {\n                    fileName: \"/usr/src/app/pages/check.js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, item.id, true, {\n            fileName: \"/usr/src/app/pages/check.js\",\n            lineNumber: 40,\n            columnNumber: 7\n        }, this));\n    }\n    // ページ番号が変更された場合に呼ばれる関数\n    const handlePageChange = (pageNumber)=>{\n        setCurrentPage(pageNumber);\n    };\n    async function handleUpdate(id, uddatedData) {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"http://api:3000/items/${id}\", uddatedData);\n        setData(response.data);\n    }\n    //削除機能\n    const handleDelete = async (id)=>{\n        try {\n            // DELETEリクエストを送信\n            const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"][\"delete\"](\"http://localhost:3000/items/\".concat(id));\n            //リロードせずに表示\n            setData((prevData)=>prevData.filter((item)=>item.id !== id));\n            // レスポンスを処理する\n            console.log(response.data);\n        } catch (error) {\n            // エラーを処理する\n            console.error(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/usr/src/app/pages/check.js\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/usr/src/app/pages/check.js\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/usr/src/app/pages/check.js\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/usr/src/app/pages/check.js\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/usr/src/app/pages/check.js\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().s),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().a),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                        href: \"/\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"トップ\"\n                                        }, void 0, false, {\n                                            fileName: \"/usr/src/app/pages/check.js\",\n                                            lineNumber: 95,\n                                            columnNumber: 14\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/usr/src/app/pages/check.js\",\n                                        lineNumber: 94,\n                                        columnNumber: 13\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/usr/src/app/pages/check.js\",\n                                    lineNumber: 93,\n                                    columnNumber: 12\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                        href: \"/post\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"登録\"\n                                        }, void 0, false, {\n                                            fileName: \"/usr/src/app/pages/check.js\",\n                                            lineNumber: 100,\n                                            columnNumber: 14\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/usr/src/app/pages/check.js\",\n                                        lineNumber: 99,\n                                        columnNumber: 13\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/usr/src/app/pages/check.js\",\n                                    lineNumber: 98,\n                                    columnNumber: 12\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                        href: \"/check\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"管理\"\n                                        }, void 0, false, {\n                                            fileName: \"/usr/src/app/pages/check.js\",\n                                            lineNumber: 105,\n                                            columnNumber: 14\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/usr/src/app/pages/check.js\",\n                                        lineNumber: 104,\n                                        columnNumber: 13\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/usr/src/app/pages/check.js\",\n                                    lineNumber: 103,\n                                    columnNumber: 12\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                        href: \"/confirmation\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"ユーザー\"\n                                        }, void 0, false, {\n                                            fileName: \"/usr/src/app/pages/check.js\",\n                                            lineNumber: 110,\n                                            columnNumber: 14\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/usr/src/app/pages/check.js\",\n                                        lineNumber: 109,\n                                        columnNumber: 13\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/usr/src/app/pages/check.js\",\n                                    lineNumber: 108,\n                                    columnNumber: 12\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/usr/src/app/pages/check.js\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/usr/src/app/pages/check.js\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"商品一覧\"\n                            }, void 0, false, {\n                                fileName: \"/usr/src/app/pages/check.js\",\n                                lineNumber: 116,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                href: \"/categorycheck\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"カテゴリー一覧ページへ\"\n                                }, void 0, false, {\n                                    fileName: \"/usr/src/app/pages/check.js\",\n                                    lineNumber: 118,\n                                    columnNumber: 11\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/usr/src/app/pages/check.js\",\n                                lineNumber: 117,\n                                columnNumber: 9\n                            }, this),\n                            items,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: pagination\n                            }, void 0, false, {\n                                fileName: \"/usr/src/app/pages/check.js\",\n                                lineNumber: 121,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/usr/src/app/pages/check.js\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/usr/src/app/pages/check.js\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Check, \"gXM64n1vTLB1PH0LtDb9WjuAVZs=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Check;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Check);\nvar _c;\n$RefreshReg$(_c, \"Check\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBV0MsU0FBUTs7Ozs7O2tDQUM5Qiw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9sQixNQUFLOzs7Ozs7Ozs7Ozs7MEJBRXhCLDhEQUFDTjtnQkFBSXlCLFdBQVd0RCxrRUFBUTs7a0NBQ3RCLDhEQUFDNkI7d0JBQUl5QixXQUFXdEQsa0VBQVE7a0NBQ3RCLDRFQUFDeUQ7OzhDQUNBLDhEQUFDQzs4Q0FDQSw0RUFBQ3pELGtEQUFJQTt3Q0FBQ2tDLE1BQUs7a0RBQ1YsNEVBQUNMO3NEQUFFOzs7Ozs7Ozs7Ozs7Ozs7OzhDQUdMLDhEQUFDNEI7OENBQ0EsNEVBQUN6RCxrREFBSUE7d0NBQUNrQyxNQUFLO2tEQUNWLDRFQUFDTDtzREFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FHTCw4REFBQzRCOzhDQUNBLDRFQUFDekQsa0RBQUlBO3dDQUFDa0MsTUFBSztrREFDViw0RUFBQ0w7c0RBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OENBR0wsOERBQUM0Qjs4Q0FDQSw0RUFBQ3pELGtEQUFJQTt3Q0FBQ2tDLE1BQUs7a0RBQ1YsNEVBQUNMO3NEQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBS1IsOERBQUNEOzswQ0FDRCw4REFBQzhCOzBDQUFHOzs7Ozs7MENBQ0osOERBQUMxRCxrREFBSUE7Z0NBQUNrQyxNQUFLOzBDQUNULDRFQUFDTDs4Q0FBRTs7Ozs7Ozs7Ozs7NEJBRUZIOzBDQUNELDhEQUFDRTswQ0FDRVI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWI7R0FqSFNoQjs7UUFFUUYsa0RBQVNBOzs7S0FGakJFOztBQTJIVCwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jaGVjay5qcz9lMTQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IEludGVyIH0gZnJvbSAnbmV4dC9mb250L2dvb2dsZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cblxuY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFsnbGF0aW4nXSB9KVxuLy/jg5rjg7zjgrjjg43jg7zjgrfjg6fjg7NcbmNvbnN0IElURU1TX1BFUl9QQUdFID0gMTA7XG5cbmZ1bmN0aW9uIENoZWNrKHtpbml0aWFsRGF0YX0pIHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoaW5pdGlhbERhdGEpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDEpOyAvLyDnj77lnKjooajnpLrjgZfjgabjgYTjgovjg5rjg7zjgrjnlarlj7dcbiAgY29uc3QgdG90YWxQYWdlcyA9IE1hdGguY2VpbChpbml0aWFsRGF0YS5sZW5ndGggLyBJVEVNU19QRVJfUEFHRSk7IC8vIOe3j+ODmuODvOOCuOaVsFxuICBjb25zdCBzdGFydEluZGV4ID0gKGN1cnJlbnRQYWdlIC0gMSkgKiBJVEVNU19QRVJfUEFHRTsgLy8g54++5Zyo6KGo56S644GZ44KL44Oa44O844K444Gu5YWI6aCt44Ki44Kk44OG44Og44Gu44Kk44Oz44OH44OD44Kv44K5XG4gIGNvbnN0IGVuZEluZGV4ID0gTWF0aC5taW4oc3RhcnRJbmRleCArIElURU1TX1BFUl9QQUdFLCBpbml0aWFsRGF0YS5sZW5ndGgpOyAvLyDnj77lnKjooajnpLrjgZnjgovjg5rjg7zjgrjjga7mnKvlsL7jgqLjgqTjg4bjg6Djga7jgqTjg7Pjg4fjg4Pjgq/jgrlcblxuICAvLyDnj77lnKjooajnpLrjgZnjgovjg5rjg7zjgrjjga7jg4fjg7zjgr/jgpLlj5blvpco44Oa44O844K444ON44O844K344On44OzKVxuICBjb25zdCBjdXJyZW50UGFnZURhdGEgPSBpbml0aWFsRGF0YS5zbGljZShzdGFydEluZGV4LCBlbmRJbmRleCk7XG5cbiAgY29uc3QgcGFnaW5hdGlvbiA9IFtdO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSB0b3RhbFBhZ2VzOyBpKyspIHtcbiAgICBwYWdpbmF0aW9uLnB1c2goXG4gICAgICA8YnV0dG9uIGtleT17aX0gb25DbGljaz17KCkgPT4gaGFuZGxlUGFnZUNoYW5nZShpKX0+XG4gICAgICAgIHtpfVxuICAgICAgPC9idXR0b24+XG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IGl0ZW1zID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFBhZ2VEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgaXRlbSA9IGN1cnJlbnRQYWdlRGF0YVtpXTtcbiAgICBpdGVtcy5wdXNoKFxuICAgICAgPGRpdiBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICA8cD57aXRlbS5pZH08L3A+XG4gICAgICAgIDxwPntpdGVtLml0ZW1uYW1lfTwvcD5cbiAgICAgICAgPHA+e2l0ZW0uaXRlbWRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPHA+e2l0ZW0ucHJpY2V9PC9wPnhcbiAgICAgICAgPExpbmsgaHJlZj17YC91cGRhdGUvJHtpdGVtLmlkfWB9PlxuICAgICAgICAgIDxidXR0b24+5pu05pawPC9idXR0b24+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGUoaXRlbS5pZCl9PuWJiumZpDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIC8vIOODmuODvOOCuOeVquWPt+OBjOWkieabtOOBleOCjOOBn+WgtOWQiOOBq+WRvOOBsOOCjOOCi+mWouaVsFxuICBjb25zdCBoYW5kbGVQYWdlQ2hhbmdlID0gKHBhZ2VOdW1iZXIpID0+IHtcbiAgICBzZXRDdXJyZW50UGFnZShwYWdlTnVtYmVyKTtcbiAgfTtcblxuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVVwZGF0ZShpZCwgdWRkYXRlZERhdGEpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2FwaTozMDAwL2l0ZW1zLyR7aWR9JywgdWRkYXRlZERhdGEpO1xuICAgIHNldERhdGEocmVzcG9uc2UuZGF0YSk7XG4gIH1cblxuICBcbiAgLy/liYrpmaTmqZ/og71cbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIERFTEVUReODquOCr+OCqOOCueODiOOCkumAgeS/oVxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5kZWxldGUoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9pdGVtcy8ke2lkfWApO1xuICAgICAgLy/jg6rjg63jg7zjg4njgZvjgZrjgavooajnpLpcbiAgICAgIHNldERhdGEoKHByZXZEYXRhKSA9PiBwcmV2RGF0YS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IGlkKSk7XG4gICAgICAvLyDjg6zjgrnjg53jg7PjgrnjgpLlh6bnkIbjgZnjgotcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyDjgqjjg6njg7zjgpLlh6bnkIbjgZnjgotcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICBcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hfT5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgPHA+44OI44OD44OXPC9wPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3Bvc3RcIj5cbiAgICAgICAgICAgICA8cD7nmbvpjLI8L3A+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2hlY2tcIj5cbiAgICAgICAgICAgICA8cD7nrqHnkIY8L3A+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29uZmlybWF0aW9uXCI+XG4gICAgICAgICAgICAgPHA+44Om44O844K244O8PC9wPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICA8aDE+5ZWG5ZOB5LiA6KanPC9oMT5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9jYXRlZ29yeWNoZWNrXCI+XG4gICAgICAgICAgPHA+44Kr44OG44K044Oq44O85LiA6Kan44Oa44O844K444G4PC9wPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgICAge2l0ZW1zfVxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7cGFnaW5hdGlvbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vYXBpOjMwMDAvaXRlbXM/cGFnZT0xJyk7XG4gIGNvbnN0IGluaXRpYWxEYXRhID0gcmVzcG9uc2UuZGF0YTtcbiAgcmV0dXJuIHsgcHJvcHM6IHsgaW5pdGlhbERhdGEgfSB9O1xufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2s7XG5cbiJdLCJuYW1lcyI6WyJpbnRlciIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIZWFkIiwiSW1hZ2UiLCJzdHlsZXMiLCJMaW5rIiwiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJJVEVNU19QRVJfUEFHRSIsIkNoZWNrIiwiaW5pdGlhbERhdGEiLCJkYXRhIiwic2V0RGF0YSIsInJvdXRlciIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJ0b3RhbFBhZ2VzIiwiTWF0aCIsImNlaWwiLCJsZW5ndGgiLCJzdGFydEluZGV4IiwiZW5kSW5kZXgiLCJtaW4iLCJjdXJyZW50UGFnZURhdGEiLCJzbGljZSIsInBhZ2luYXRpb24iLCJpIiwicHVzaCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoYW5kbGVQYWdlQ2hhbmdlIiwiaXRlbXMiLCJpdGVtIiwiZGl2IiwicCIsImlkIiwiaXRlbW5hbWUiLCJpdGVtZGVzY3JpcHRpb24iLCJwcmljZSIsImhyZWYiLCJoYW5kbGVEZWxldGUiLCJwYWdlTnVtYmVyIiwiaGFuZGxlVXBkYXRlIiwidWRkYXRlZERhdGEiLCJyZXNwb25zZSIsImdldCIsImRlbGV0ZSIsInByZXZEYXRhIiwiZmlsdGVyIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiY2xhc3NOYW1lIiwicyIsImEiLCJ1bCIsImxpIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/check.js\n"));

/***/ })

});