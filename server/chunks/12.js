exports.id = 12;
exports.ids = [12];
exports.modules = {

/***/ 3522:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 52987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 56926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 44282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 16505, 23))

/***/ }),

/***/ 46038:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 46887, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 16210))

/***/ }),

/***/ 16210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AppsLayout_Header)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
;// CONCATENATED MODULE: ./src/helper/String.helper.ts
function UpperCaseEachWord(words) {
    let splitStr = words.toLowerCase().split(" ");
    for(let i = 0; i < splitStr.length; i++){
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(" ");
}

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(11440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/cjs/Container.js
var Container = __webpack_require__(46887);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/cjs/Nav.js
var Nav = __webpack_require__(72581);
var Nav_default = /*#__PURE__*/__webpack_require__.n(Nav);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/cjs/Navbar.js
var Navbar = __webpack_require__(51293);
var Navbar_default = /*#__PURE__*/__webpack_require__.n(Navbar);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/cjs/Offcanvas.js
var Offcanvas = __webpack_require__(10242);
var Offcanvas_default = /*#__PURE__*/__webpack_require__.n(Offcanvas);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(57114);
;// CONCATENATED MODULE: ./src/modules/AppsLayout/Header.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 








const Header = ()=>{
    const [page, setPage] = (0,react_.useState)("/home");
    const pathname = (0,navigation.usePathname)();
    (0,react_.useEffect)(()=>{
        setPage(pathname);
    }, [
        pathname
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx((Navbar_default()), {
            expand: "xs",
            className: "navbar navbar-expand-sm",
            bg: "dark",
            "data-bs-theme": "dark",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Navbar_default()).Toggle, {
                        "aria-controls": `offcanvasNavbar-expand`
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Navbar_default()).Offcanvas, {
                        id: `offcanvasNavbar-expand`,
                        "aria-labelledby": `offcanvasNavbarLabel-expand`,
                        placement: "start",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Offcanvas_default()).Header, {
                                closeButton: true,
                                className: "border-bottom",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Offcanvas_default()).Title, {
                                    id: `offcanvasNavbarLabel-expand`,
                                    children: "Menu"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Offcanvas_default()).Body, {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Nav_default()), {
                                    className: "justify-content-start flex-grow-1 pe-3",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            className: `nav-link me-1 ${page == "/" ? "active" : ""}`,
                                            children: UpperCaseEachWord("Home")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/user",
                                            className: `nav-link  me-1 ${page == "/user" ? "active" : ""}`,
                                            children: UpperCaseEachWord("User")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/category",
                                            className: `nav-link  me-1 ${page == "/category" ? "active" : ""}`,
                                            children: UpperCaseEachWord("Category")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/product",
                                            className: `nav-link  me-1 ${page == "/product" ? "active" : ""}`,
                                            children: UpperCaseEachWord("Product")
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const AppsLayout_Header = (Header);


/***/ }),

/***/ 66234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/cjs/Container.js
var Container = __webpack_require__(80062);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container);
// EXTERNAL MODULE: ./src/styles/index.scss
var styles = __webpack_require__(49406);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./src/modules/AppsLayout/Header.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Project\Next JS\learning-next-js\src\modules\AppsLayout\Header.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Header = (__default__);
;// CONCATENATED MODULE: ./src/app/layout.tsx

const metadata = {
    title: "Procduct",
    description: "Data Product"
};



function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
                /*#__PURE__*/ jsx_runtime_.jsx((Container_default()), {
                    children: children
                })
            ]
        })
    });
}


/***/ }),

/***/ 73881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80085);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"16x16"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 49406:
/***/ (() => {



/***/ })

};
;