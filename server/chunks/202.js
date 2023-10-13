exports.id = 202;
exports.ids = [202];
exports.modules = {

/***/ 81925:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8214))

/***/ }),

/***/ 8214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Prodcut_CardCatalogProduct)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./src/components/Product/Productname.tsx


const ProductName = ({ name })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("h5", {
        className: "card-title",
        children: name
    });
};
/* harmony default export */ const Productname = (ProductName);

;// CONCATENATED MODULE: ./src/components/Card/CardBodyCatalog.tsx



const CardBodyCatalog = ({ title, short_desc })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "card-body",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Productname, {
                name: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "card-text",
                children: short_desc
            })
        ]
    });
};
/* harmony default export */ const Card_CardBodyCatalog = (CardBodyCatalog);

// EXTERNAL MODULE: ./src/components/Card/CardComponent.tsx
var CardComponent = __webpack_require__(86617);
;// CONCATENATED MODULE: ./src/components/Card/CardImage.tsx


const CardImage = ({ image, height = "15rem", otherProps = {} })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: {
            height: height
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
            src: image,
            className: "card-img-top fit",
            alt: "...",
            ...otherProps
        })
    });
};
/* harmony default export */ const Card_CardImage = (CardImage);

;// CONCATENATED MODULE: ./src/helper/number.helper.ts
function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while(pattern.test(x))x = x.replace(pattern, "$1,$2");
    return x;
}

;// CONCATENATED MODULE: ./src/components/Price/Price.tsx



const Price = ({ text_color = "text-success", price = 0 })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: text_color,
        children: [
            " ",
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    "$",
                    numberWithCommas(price) || 0
                ]
            })
        ]
    });
};
/* harmony default export */ const Price_Price = (Price);

// EXTERNAL MODULE: ./src/services/_path.service.ts
var _path_service = __webpack_require__(22599);
// EXTERNAL MODULE: ./src/services/main.service.ts + 1 modules
var main_service = __webpack_require__(20776);
// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 46 modules
var axios = __webpack_require__(93258);
// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(73999);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/cjs/Col.js
var Col = __webpack_require__(57237);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/cjs/Row.js
var Row = __webpack_require__(44906);
var Row_default = /*#__PURE__*/__webpack_require__.n(Row);
;// CONCATENATED MODULE: ./src/modules/Prodcut/CardCatalogProduct.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 











const CardCatalogProduct = ({ slug, path = "products.data" })=>{
    const [data, setData] = (0,react_.useState)();
    const source = axios/* default */.Z.CancelToken.source();
    /** GET DATA PAGINATION */ const getAllData = async ()=>{
        await new Promise((resolve)=>setTimeout(resolve, 300));
        setData([]);
        try {
            let params = {};
            let req = await (0,main_service/* getAllByPath */.qY)(`${get_default()((0,_path_service/* API_PATH */.v)(), path)}${slug ? `/${slug}` : ""}`, params, source.token);
            setData(req?.products);
        } catch (err) {
            console.log("error", err);
            setData(null);
        }
    };
    (0,react_.useEffect)(()=>{
        getAllData();
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx((Row_default()), {
            children: data?.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(Col/* default */.ZP, {
                    className: "product mb-3 ",
                    lg: 3,
                    md: 4,
                    sm: 6,
                    xs: 12,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardComponent/* default */.Z, {
                        classNameBody: "p-0",
                        className: "shadow-sm",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Card_CardImage, {
                                image: item?.thumbnail
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Card_CardBodyCatalog, {
                                title: item?.title,
                                short_desc: item?.desc
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "card-footer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "d-flex justify-content-between",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Price_Price, {
                                        price: item?.price
                                    })
                                })
                            })
                        ]
                    })
                }, index))
        })
    });
};
/* harmony default export */ const Prodcut_CardCatalogProduct = (CardCatalogProduct);


/***/ }),

/***/ 16396:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Project\Next JS\learning-next-js\src\modules\Prodcut\CardCatalogProduct.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;