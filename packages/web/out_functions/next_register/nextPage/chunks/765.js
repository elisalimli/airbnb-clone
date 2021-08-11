exports.id = 765;
exports.ids = [765];
exports.modules = {

/***/ 49532:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52322);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2784);


const sizes = {
  "2": "h-2 w-2",
  "4": "h-4 w-4",
  "5": "h-5 w-5"
};

const Spinner = ({
  size = "4",
  center,
  color = "text-black"
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: `${center ? "flex items-center justify-center min-h-full" : ""}`,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
      className: `animate-spin ${color} ${sizes[size]}`,
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
        fill: "currentColor",
        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      })
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (Spinner);

/***/ }),

/***/ 29258:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "C": function() { return /* binding */ withApollo; }
});

// EXTERNAL MODULE: ../../node_modules/@apollo/client/main.cjs.js
var main_cjs = __webpack_require__(47528);
;// CONCATENATED MODULE: ./src/utils/isServer.ts
const isServer = true;
// EXTERNAL MODULE: ../../node_modules/next-apollo/dist/index.js
var dist = __webpack_require__(77251);
;// CONCATENATED MODULE: ./src/utils/withApollo.ts




const createClient = ctx => {
  var _ctx$req;

  console.log("url", "http://167.71.64.47/graphql");
  return new main_cjs.ApolloClient({
    uri: "http://167.71.64.47/graphql",
    credentials: "include",
    headers: {
      cookie: isServer ? ctx === null || ctx === void 0 ? void 0 : (_ctx$req = ctx.req) === null || _ctx$req === void 0 ? void 0 : _ctx$req.headers.cookie : undefined
    },
    cache: new main_cjs.InMemoryCache()
  });
};

const withApollo = (0,dist/* withApollo */.C)(createClient);

/***/ }),

/***/ 26045:
/***/ (function() {

/* (ignored) */

/***/ })

};
;