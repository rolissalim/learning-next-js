"use strict";
exports.id = 897;
exports.ids = [897];
exports.modules = {

/***/ 86617:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ CardComponent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97886);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__);



function CardComponent({ hideHeader = true, title = "", children, variant = "", className = "mb-1", classNameHeader = "", classNameBody = "", styleHeader }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default()), {
            bg: variant,
            className: `${className}`,
            children: [
                !hideHeader && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default().Header), {
                    style: styleHeader,
                    className: `${classNameHeader}`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default().Title), {
                        children: title
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default().Body), {
                    className: classNameBody,
                    children: children
                })
            ]
        })
    });
}


/***/ }),

/***/ 22599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ API_PATH)
/* harmony export */ });
const API_PATH = ()=>{
    return {
        category: "products/categories",
        product: {
            data: "product",
            category: "products/category"
        },
        user: "user"
    };
};


/***/ }),

/***/ 20776:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  qY: () => (/* binding */ getAllByPath)
});

// UNUSED EXPORTS: deleteByPath, getByIdPath, postByIdPath, postByPath, putByPath

// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 46 modules
var axios = __webpack_require__(93258);
// EXTERNAL MODULE: ./node_modules/lodash/pick.js
var pick = __webpack_require__(65710);
var pick_default = /*#__PURE__*/__webpack_require__.n(pick);
;// CONCATENATED MODULE: ./src/services/api.service.ts


const api_service_requestApi = (responseFields = null, baseUrl = undefined, token = false)=>{
    let sourceRequest = {};
    /** CREATE AXIOS INSTANCE */ const axiosInstance = axios/* default */.Z.create({
        baseURL: baseUrl ? baseUrl : process.env.API_BASE_URL
    });
    /** HANDLE AXIOS REQUEST */ axiosInstance.interceptors.request.use(async (config)=>{
        return config;
    });
    axiosInstance.interceptors.request.use((request)=>{
        // // If the application exists cancel
        if (sourceRequest[request.url]) {
            sourceRequest[request.url].cancel("Automatic cancellation");
        }
        return request;
    });
    /** HANDLE AXIOS RESPONSE */ axiosInstance.interceptors.response.use((resp)=>{
        if (responseFields) return pick_default()(resp, responseFields);
        return resp?.data;
    }, async (error)=>{
        const originalConfig = error.config;
        if (originalConfig?.url !== process.env.API_MAIN_SERVICE + "/auth/login" && error.response) {
        // Access Token was expired
        }
        return Promise.reject(error);
    });
    return axiosInstance;
};
/* harmony default export */ const api_service = (api_service_requestApi);

;// CONCATENATED MODULE: ./src/services/main.service.ts


const getByIdPath = (path, id, sourceToken, params = {})=>{
    return requestApi().request({
        url: path.includes("http") ? path : `${process.env.API_MAIN_SERVICE}/${path}/${id}`,
        method: "GET",
        params: params,
        cancelToken: sourceToken
    });
};
const getAllByPath = (path = "", params = {
    page: 1,
    limit: 1000
}, sourceToken, baseUrl = undefined, token = false)=>{
    const rest_api = "https://dummyjson.com";
    return api_service(null, baseUrl, token).request({
        url: `${process.env.API_MAIN_SERVICE ? process.env.API_MAIN_SERVICE : rest_api}/${path}`,
        method: "GET",
        params: params,
        cancelToken: sourceToken
    });
};
const postByPath = (path = "", params, sourceToken, usePayloadParam = false)=>{
    let formData = formDataParams(params);
    return requestApi().post(`${process.env.API_MAIN_SERVICE}/${path}`, usePayloadParam ? formData : params, {
        cancelToken: sourceToken
    } // <-- IMPORTANT!
    );
};
const postByIdPath = (path = "", params, id, sourceToken)=>{
    return requestApi().post(`${process.env.API_MAIN_SERVICE}/${path}/${id}`, JSON.stringify(params), {
        cancelToken: sourceToken,
        headers: {
            "content-type": "application/json"
        }
    } // <-- IMPORTANT!
    );
};
const putByPath = (path = "", params, id, sourceToken)=>{
    return requestApi().put(`${process.env.API_MAIN_SERVICE}/${path}${id ? "/" + id : ""}`, params, {
        cancelToken: sourceToken
    } // <-- IMPORTANT!
    );
};
const deleteByPath = (path = "", id, sourceToken)=>{
    return requestApi().request({
        url: `${process.env.API_MAIN_SERVICE}/${path}${id ? "/" + id : ""}`,
        method: "DELETE",
        params: {},
        cancelToken: sourceToken
    });
};



/***/ }),

/***/ 60778:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62947);


function TitlePage({ title }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                className: "mt-2",
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {})
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TitlePage);


/***/ })

};
;