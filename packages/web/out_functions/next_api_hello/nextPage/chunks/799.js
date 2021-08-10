exports.id = 799;
exports.ids = [799];
exports.modules = {

/***/ 75192:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52322);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97729);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const MyApp = ({
  Component,
  pageProps
}) => {
  // createPageProgressBar();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_head__WEBPACK_IMPORTED_MODULE_1__.default, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no,user-scalable=0"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, _objectSpread({}, pageProps))]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp); // /* eslint-disable @typescript-eslint/ban-ts-comment */
// import Head from "next/head";
// import "../styles/globals.css";
// import "../styles/index.css";
// // if (process.env.NODE_ENV === "production")
// //   // @ts-ignore
// //   import("../styles/tailwind.css");
// const MyApp = ({ Component, pageProps }) => {
//   // createPageProgressBar();
//   return (
//     <>
//       <Head>
//         <meta
//           name="viewport"
//           content="width=device-width,initial-scale=1,user-scalable=no,user-scalable=0"
//         />
//       </Head>
//       <Component {...pageProps} />
//     </>
//   );
// };
// export default MyApp;
// name: Deploy Frontend Production
// on:
//   push:
//     branches: [ prod ]
// jobs:
//   Deploy-Frontend-Prod:
//     runs-on: ubuntu-latest
//     steps:
//       - uses: actions/checkout@v2
//       - run: yarn install
//       - run: npm run build
//       - name: Deploy to Netlify
//         uses: nwtgck/actions-netlify@v1.2
//         with:
//           publish-dir: 'packages/web/out'
//           functions-dir: 'packages/web/out_functions'
//           # netlify-config-path: './netlify.toml'
//           production-branch: master
//           production-deploy: true
//           github-token: ${{ secrets.GITHUB_TOKEN }}
//           deploy-message: "Deploy from GitHub Actions"
//           enable-pull-request-comment: false
//           enable-commit-comment: true
//           overwrites-pull-request-comment: true
//         env:
//           NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_TOKEN }}
//           NETLIFY_SITE_ID: ${{ secrets.SITE_ID }}
//         timeout-minutes: 1

/***/ }),

/***/ 32738:
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"polyfillFiles":["static/chunks/polyfills-cf519ab7dd9a5a4fd835.js"],"devFiles":[],"ampDevFiles":[],"lowPriorityFiles":["static/3-YmwFD8OxiPPpK8TwNuk/_buildManifest.js","static/3-YmwFD8OxiPPpK8TwNuk/_ssgManifest.js"],"pages":{"/":["static/chunks/webpack-881633739544613be7c1.js","static/chunks/framework-e7644ca443da4d182644.js","static/chunks/main-8485358b76258d54cfd6.js","static/chunks/170-535fe368a6977488ae59.js","static/chunks/pages/index-2f71cec45eddb636b346.js"],"/[testId]":["static/chunks/webpack-881633739544613be7c1.js","static/chunks/framework-e7644ca443da4d182644.js","static/chunks/main-8485358b76258d54cfd6.js","static/chunks/pages/[testId]-29e3bf2f40b62c6ca39b.js"],"/_app":["static/chunks/webpack-881633739544613be7c1.js","static/chunks/framework-e7644ca443da4d182644.js","static/chunks/main-8485358b76258d54cfd6.js","static/css/6cdf2f5906dfcd401718.css","static/chunks/pages/_app-cddb61138b8a54754e30.js"],"/_error":["static/chunks/webpack-881633739544613be7c1.js","static/chunks/framework-e7644ca443da4d182644.js","static/chunks/main-8485358b76258d54cfd6.js","static/chunks/pages/_error-f0c8671670e02d5c5929.js"],"/register":["static/chunks/webpack-881633739544613be7c1.js","static/chunks/framework-e7644ca443da4d182644.js","static/chunks/main-8485358b76258d54cfd6.js","static/chunks/170-535fe368a6977488ae59.js","static/chunks/660-645bc1d5dc80db6e5f22.js","static/chunks/pages/register-873777373d406a759e5d.js"]},"ampFirstPages":[]}');

/***/ }),

/***/ 19392:
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"..\\\\..\\\\..\\\\..\\\\node_modules\\\\next-apollo\\\\dist\\\\index.es.js -> @apollo/client/react/ssr":{"id":4030,"files":["static/chunks/framework-e7644ca443da4d182644.js","static/chunks/30.8df1efc40208a4c998c0.js"]}}');

/***/ })

};
;