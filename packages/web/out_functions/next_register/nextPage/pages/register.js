/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 19098:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ register; }
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(52322);
// EXTERNAL MODULE: ../../node_modules/react/index.js
var react = __webpack_require__(2784);
// EXTERNAL MODULE: ../controller/node_modules/@apollo/client/main.cjs.js
var main_cjs = __webpack_require__(61480);
;// CONCATENATED MODULE: ../controller/dist/generated/graphql.js
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


var defaultOptions = {};
var ErrorFragmentFragmentDoc = (0,main_cjs.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  fragment ErrorFragment on FieldError {\n    field\n    message\n  }\n"], ["\n  fragment ErrorFragment on FieldError {\n    field\n    message\n  }\n"])));
var UserFragmentFragmentDoc = (0,main_cjs.gql)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  fragment UserFragment on User {\n    id\n    username\n  }\n"], ["\n  fragment UserFragment on User {\n    id\n    username\n  }\n"])));
var RegistrationFragmentFragmentDoc = (0,main_cjs.gql)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  fragment RegistrationFragment on RegistrationResponse {\n    ok\n    errors {\n      ...ErrorFragment\n    }\n    user {\n      ...UserFragment\n    }\n  }\n  ", "\n  ", "\n"], ["\n  fragment RegistrationFragment on RegistrationResponse {\n    ok\n    errors {\n      ...ErrorFragment\n    }\n    user {\n      ...UserFragment\n    }\n  }\n  ", "\n  ", "\n"])), ErrorFragmentFragmentDoc, UserFragmentFragmentDoc);
var RegisterDocument = (0,main_cjs.gql)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  mutation Register($input: RegisterInput!) {\n    register(input: $input) {\n      ...RegistrationFragment\n    }\n  }\n  ", "\n"], ["\n  mutation Register($input: RegisterInput!) {\n    register(input: $input) {\n      ...RegistrationFragment\n    }\n  }\n  ", "\n"])), RegistrationFragmentFragmentDoc);
/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useRegisterMutation(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(RegisterDocument, options);
}
var MeDocument = (0,main_cjs.gql)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  query Me {\n    me {\n      ...UserFragment\n    }\n  }\n  ", "\n"], ["\n  query Me {\n    me {\n      ...UserFragment\n    }\n  }\n  ", "\n"])), UserFragmentFragmentDoc);
/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
function useMeQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(MeDocument, options);
}
function useMeLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(MeDocument, options);
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=graphql.js.map
;// CONCATENATED MODULE: ../controller/dist/utils/toErrorMap.js
var toErrorMap = function (errors) {
    var errorMap = {};
    errors.forEach(function (_a) {
        var field = _a.field, message = _a.message;
        errorMap[field] = message;
    });
    return errorMap;
};
//# sourceMappingURL=toErrorMap.js.map
;// CONCATENATED MODULE: ../controller/dist/modules/RegisterController/index.js
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var RegisterController = function (_a) {
    var children = _a.children, register = _a.register;
    var submit = function (values, _a) {
        var setErrors = _a.setErrors, setSubmitting = _a.setSubmitting;
        return __awaiter(void 0, void 0, void 0, function () {
            var res, errors;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, register({
                            variables: { input: values },
                            update: function (cache, _a) {
                                var _b;
                                var data = _a.data;
                                // @ts-ignore
                                cache.writeQuery({
                                    query: MeDocument,
                                    data: { me: (_b = data === null || data === void 0 ? void 0 : data.register) === null || _b === void 0 ? void 0 : _b.user },
                                });
                            },
                        })];
                    case 1:
                        res = _c.sent();
                        errors = (_b = res === null || res === void 0 ? void 0 : res.data) === null || _b === void 0 ? void 0 : _b.register.errors;
                        console.log(errors);
                        setSubmitting(false);
                        if (errors) {
                            setErrors(toErrorMap(errors));
                            return [2 /*return*/, false];
                        }
                        // @todo route some page
                        return [2 /*return*/, true];
                }
            });
        });
    };
    return children(submit);
};
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../controller/dist/index.js


//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ../../node_modules/@apollo/client/main.cjs.js
var client_main_cjs = __webpack_require__(47528);
;// CONCATENATED MODULE: ./src/generated/graphql.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const graphql_defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */

const graphql_ErrorFragmentFragmentDoc = client_main_cjs.gql`
    fragment ErrorFragment on FieldError {
  field
  message
}
    `;
const graphql_UserFragmentFragmentDoc = client_main_cjs.gql`
    fragment UserFragment on User {
  id
  username
}
    `;
const graphql_RegistrationFragmentFragmentDoc = client_main_cjs.gql`
    fragment RegistrationFragment on RegistrationResponse {
  ok
  errors {
    ...ErrorFragment
  }
  user {
    ...UserFragment
  }
}
    ${graphql_ErrorFragmentFragmentDoc}
${graphql_UserFragmentFragmentDoc}`;
const graphql_RegisterDocument = client_main_cjs.gql`
    mutation Register($input: RegisterInput!) {
  register(input: $input) {
    ...RegistrationFragment
  }
}
    ${graphql_RegistrationFragmentFragmentDoc}`;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function graphql_useRegisterMutation(baseOptions) {
  const options = _objectSpread(_objectSpread({}, graphql_defaultOptions), baseOptions);

  return client_main_cjs.useMutation(graphql_RegisterDocument, options);
}
const graphql_MeDocument = client_main_cjs.gql`
    query Me {
  me {
    ...UserFragment
  }
}
    ${graphql_UserFragmentFragmentDoc}`;
/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */

function graphql_useMeQuery(baseOptions) {
  const options = _objectSpread(_objectSpread({}, graphql_defaultOptions), baseOptions);

  return client_main_cjs.useQuery(graphql_MeDocument, options);
}
function graphql_useMeLazyQuery(baseOptions) {
  const options = _objectSpread(_objectSpread({}, graphql_defaultOptions), baseOptions);

  return Apollo.useLazyQuery(graphql_MeDocument, options);
}
// EXTERNAL MODULE: ../../node_modules/formik/dist/index.js
var dist = __webpack_require__(11625);
// EXTERNAL MODULE: ../../node_modules/next/head.js
var head = __webpack_require__(97729);
// EXTERNAL MODULE: ./src/ui/Spinner.tsx
var Spinner = __webpack_require__(49532);
;// CONCATENATED MODULE: ./src/ui/Button.tsx



function Button_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Button_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Button_ownKeys(Object(source), true).forEach(function (key) { Button_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Button_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Button_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const sizeClassnames = {
  big: "py-2 px-6 text-sm rounded-lg",
  small: "px-2 py-1 text-xs rounded-md"
};
const styles = {
  general: "text-button rounded-5 font-semibold transition-colors duration-300 select-none focus:ring-4 outline-no-chrome",
  variants: {
    primary: "bg-primary hover:bg-primary-hover disabled:bg-primary-disabled focus:ring-primary"
  },
  center: "flex items-center justify-center"
};

const Button = (_ref) => {
  let {
    isLoading,
    centered,
    size,
    variant = "primary",
    wrapperClassname = "",
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["isLoading", "centered", "size", "variant", "wrapperClassname", "children"]);

  const buttonStyles = {
    //  useMemo(
    // () => ({
    wrapper: `${centered && "flex justify-center"} ${wrapperClassname}`,
    button: `${styles.general} ${styles.variants[variant]} ${styles.center} ${sizeClassnames[size]}`,
    loading: isLoading ? "opacity-0" : null // }),
    // [isLoading]
    // );

  };
  return /*#__PURE__*/jsx_runtime.jsx("div", {
    className: buttonStyles.wrapper,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("button", Button_objectSpread(Button_objectSpread({
      className: buttonStyles.button,
      disabled: isLoading,
      type: "button"
    }, props), {}, {
      children: [/*#__PURE__*/jsx_runtime.jsx("span", {
        className: buttonStyles.loading,
        children: children
      }), isLoading ? /*#__PURE__*/jsx_runtime.jsx("span", {
        className: "absolute",
        children: /*#__PURE__*/jsx_runtime.jsx(Spinner/* default */.Z, {})
      }) : null]
    }))
  });
};

/* harmony default export */ var ui_Button = (Button);
;// CONCATENATED MODULE: ./src/ui/Form/Input/Label.tsx


function Label_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Label_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Label_ownKeys(Object(source), true).forEach(function (key) { Label_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Label_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Label_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Label_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Label_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Label_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Label = (_ref) => {
  let {
    children
  } = _ref,
      props = Label_objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/jsx_runtime.jsx("label", Label_objectSpread(Label_objectSpread({
    className: textFieldStyle.label
  }, props), {}, {
    children: children
  }));
};

/* harmony default export */ var Input_Label = (Label);
;// CONCATENATED MODULE: ./src/ui/Form/Input/InputField.tsx




function InputField_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function InputField_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { InputField_ownKeys(Object(source), true).forEach(function (key) { InputField_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { InputField_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function InputField_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function InputField_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = InputField_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function InputField_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const textFieldStyle = {
  error: "text-secondary-washed-out mt-1 ml-0.5 text-sm",
  label: ""
};

const InputField = (_ref) => {
  let {
    label,
    wrapperClassName,
    children
  } = _ref,
      props = InputField_objectWithoutProperties(_ref, ["label", "wrapperClassName", "children"]);

  const [field, {
    error,
    touched
  }] = (0,dist.useField)(props);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [label ? /*#__PURE__*/jsx_runtime.jsx(Input_Label, {
      htmlFor: field.name,
      children: label
    }) : null, /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: wrapperClassName,
      children: [/*#__PURE__*/jsx_runtime.jsx("input", InputField_objectSpread(InputField_objectSpread(InputField_objectSpread({
        className: "w-full border-default border-gray-200 rounded-8 p-2 focus:border-transparent focus:ring-2 ring-pink focus:ring-primary outline-no-chrome"
      }, field), props), {}, {
        id: field.name
      })), children]
    }), error && touched ? /*#__PURE__*/jsx_runtime.jsx("div", {
      className: "text-primary mt-1 ml-0.5 text-sm",
      children: error
    }) : null]
  });
};

/* harmony default export */ var Input_InputField = (InputField);
// EXTERNAL MODULE: ../common/dist/index.js
var common_dist = __webpack_require__(10194);
// EXTERNAL MODULE: ../../node_modules/next/router.js
var next_router = __webpack_require__(5632);
;// CONCATENATED MODULE: ./src/modules/register/views/RegisterView.tsx










const RegisterView = ({
  handleSubmit
}) => {
  const router = (0,next_router.useRouter)();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime.jsx(head.default, {
      children: /*#__PURE__*/jsx_runtime.jsx("title", {
        children: "Sign up | Daily"
      })
    }), /*#__PURE__*/jsx_runtime.jsx("div", {
      style: {
        maxWidth: 300
      },
      className: "mx-auto",
      children: /*#__PURE__*/jsx_runtime.jsx(dist.Formik, {
        initialValues: {
          username: "",
          email: "",
          password: ""
        } // i am saying any,because i don't need this type definitions
        ,
        onSubmit: async (...props) => {
          const res = await handleSubmit(...props);
          console.log(res);
          if (res) router.push("/");
        },
        validationSchema: common_dist.registerSchema,
        children: ({
          isSubmitting,
          errors
        }) => /*#__PURE__*/(0,jsx_runtime.jsxs)(dist.Form, {
          noValidate: true,
          children: [/*#__PURE__*/jsx_runtime.jsx(Input_InputField, {
            name: "username",
            placeholder: "username",
            label: "Username"
          }), /*#__PURE__*/jsx_runtime.jsx(Input_InputField, {
            name: "email",
            placeholder: "email",
            label: "Email",
            type: "email"
          }), /*#__PURE__*/jsx_runtime.jsx(Input_InputField, {
            name: "password",
            placeholder: "password",
            label: "Password",
            type: "password"
          }), /*#__PURE__*/jsx_runtime.jsx("div", {
            className: "text-primary mt-1 ml-0.5 text-sm",
            children: errors["general"]
          }), /*#__PURE__*/jsx_runtime.jsx("div", {
            children: "dsadsad"
          }), /*#__PURE__*/jsx_runtime.jsx(ui_Button, {
            size: "big",
            wrapperClassname: "mt-4",
            variant: "primary",
            centered: true,
            type: "submit",
            isLoading: isSubmitting,
            children: "Register"
          })]
        })
      })
    })]
  });
};

/* harmony default export */ var views_RegisterView = (RegisterView);
;// CONCATENATED MODULE: ./src/modules/register/RegisterConnector.tsx






const RegisterConnector = () => {
  const [register] = graphql_useRegisterMutation();
  return /*#__PURE__*/jsx_runtime.jsx(RegisterController, {
    register: register,
    children: submit => /*#__PURE__*/jsx_runtime.jsx(views_RegisterView, {
      handleSubmit: submit
    })
  });
};

/* harmony default export */ var register_RegisterConnector = (RegisterConnector);
;// CONCATENATED MODULE: ./src/ui/utils/UnprotectedRoute.tsx







const UnprotectedRoute = ({
  children
}) => {
  const router = (0,next_router.useRouter)();
  const {
    data,
    loading
  } = graphql_useMeQuery();
  const user = data === null || data === void 0 ? void 0 : data.me;
  (0,react.useEffect)(() => {
    // @todo add dynamic routing
    // user don't always redirect to home page
    // get last path and redirect there
    if (user) router.replace("/");
  }, [loading, user]);
  if (!user) return children;
  return /*#__PURE__*/jsx_runtime.jsx(Spinner/* default */.Z, {
    center: true,
    size: "5"
  });
};

/* harmony default export */ var utils_UnprotectedRoute = (UnprotectedRoute);
// EXTERNAL MODULE: ./src/utils/withApollo.ts + 1 modules
var withApollo = __webpack_require__(29258);
;// CONCATENATED MODULE: ./src/pages/register.tsx






const Register = () => {
  return /*#__PURE__*/jsx_runtime.jsx(utils_UnprotectedRoute, {
    children: /*#__PURE__*/jsx_runtime.jsx(register_RegisterConnector, {})
  });
};

/* harmony default export */ var register = ((0,withApollo/* withApollo */.C)({
  ssr: true
})(Register));

/***/ }),

/***/ 26560:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; },
/* harmony export */   "getStaticPaths": function() { return /* binding */ getStaticPaths; },
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; },
/* harmony export */   "unstable_getStaticParams": function() { return /* binding */ unstable_getStaticParams; },
/* harmony export */   "unstable_getStaticProps": function() { return /* binding */ unstable_getStaticProps; },
/* harmony export */   "unstable_getStaticPaths": function() { return /* binding */ unstable_getStaticPaths; },
/* harmony export */   "unstable_getServerProps": function() { return /* binding */ unstable_getServerProps; },
/* harmony export */   "config": function() { return /* binding */ config; },
/* harmony export */   "_app": function() { return /* binding */ _app; },
/* harmony export */   "renderReqToHTML": function() { return /* binding */ renderReqToHTML; },
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39407);
/* harmony import */ var next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35706);
/* harmony import */ var private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32738);
/* harmony import */ var private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19392);
/* harmony import */ var next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57194);

      
      
      
      

      
      const { processEnv } = __webpack_require__(50782)
      processEnv([{"path":".env.production","contents":"NEXT_PUBLIC_API_URL=http://167.71.64.47/graphql"}])
    
      
      const runtimeConfig = {}
      ;

      const documentModule = __webpack_require__(68157)

      const appMod = __webpack_require__(75192)
      let App = appMod.default || appMod.then && appMod.then(mod => mod.default);

      const compMod = __webpack_require__(19098)

      const Component = compMod.default || compMod.then && compMod.then(mod => mod.default)
      /* harmony default export */ __webpack_exports__["default"] = (Component);
      const getStaticProps = compMod['getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['getStaticProp' + 's'])
      const getStaticPaths = compMod['getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['getStaticPath' + 's'])
      const getServerSideProps = compMod['getServerSideProp' + 's'] || compMod.then && compMod.then(mod => mod['getServerSideProp' + 's'])

      // kept for detecting legacy exports
      const unstable_getStaticParams = compMod['unstable_getStaticParam' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticParam' + 's'])
      const unstable_getStaticProps = compMod['unstable_getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticProp' + 's'])
      const unstable_getStaticPaths = compMod['unstable_getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticPath' + 's'])
      const unstable_getServerProps = compMod['unstable_getServerProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getServerProp' + 's'])

      let config = compMod['confi' + 'g'] || (compMod.then && compMod.then(mod => mod['confi' + 'g'])) || {}
      const _app = App

      const combinedRewrites = Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)
        ? private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg
        : []

      if (!Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)) {
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.beforeFiles */ .Dg.beforeFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.afterFiles */ .Dg.afterFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.fallback */ .Dg.fallback)
      }

      const { renderReqToHTML, render } = (0,next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__/* .getPageHandler */ .u)({
        pageModule: compMod,
        pageComponent: Component,
        pageConfig: config,
        appModule: App,
        documentModule: documentModule,
        errorModule: __webpack_require__(40597),
        notFoundModule: undefined,
        pageGetStaticProps: getStaticProps,
        pageGetStaticPaths: getStaticPaths,
        pageGetServerSideProps: getServerSideProps,

        assetPrefix: "",
        canonicalBase: "",
        generateEtags: true,
        poweredByHeader: true,

        runtimeConfig,
        buildManifest: private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__,
        reactLoadableManifest: private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__,

        rewrites: combinedRewrites,
        i18n: undefined,
        page: "/register",
        buildId: "DLHakAg9Pd1fv7ZVtMaT4",
        escapedBuildId: "DLHakAg9Pd1fv7ZVtMaT4",
        basePath: "",
        pageIsDynamic: false,
        encodedPreviewProps: {previewModeId:"ff3ab03ed2998b5a8ce4b5e39404bf10",previewModeSigningKey:"ac2371e77db3bee3da702ebc657ec385637d02074258407b21a7c8f9ca20f058",previewModeEncryptionKey:"b4f078f478c234b168ec7864164030b7dd65a0ddc0fb739a8bc662a7f627caef"}
      })
      
    

/***/ }),

/***/ 10194:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(33641), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 33641:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.registerSchema = void 0;
const yup = __webpack_require__(56385);
const registerError = {
    shortEmail: "must be greater than 2 characters",
    longEmail: "must be less than 50 characters",
    shortUsername: "must be at least 2 characters",
    longUsername: "must be less than 30 characters",
    shortPassword: "must be at least 3 characters",
    longPassword: "must be less than 255 characters",
    invalidEmail: "Invalid email",
};
exports.registerSchema = yup.object().shape({
    username: yup
        .string()
        .min(2, registerError.shortEmail)
        .max(30, registerError.longUsername)
        .required(),
    email: yup
        .string()
        .max(50, registerError.longEmail)
        .email(registerError.invalidEmail)
        .required(),
    password: yup
        .string()
        .min(3, registerError.shortPassword)
        .max(255, registerError.longPassword)
        .required(),
});
//# sourceMappingURL=user.js.map

/***/ }),

/***/ 64293:
/***/ (function(module) {

module.exports = require("buffer");;

/***/ }),

/***/ 45532:
/***/ (function(module) {

module.exports = require("critters");;

/***/ }),

/***/ 76417:
/***/ (function(module) {

module.exports = require("crypto");;

/***/ }),

/***/ 28614:
/***/ (function(module) {

module.exports = require("events");;

/***/ }),

/***/ 35747:
/***/ (function(module) {

module.exports = require("fs");;

/***/ }),

/***/ 98605:
/***/ (function(module) {

module.exports = require("http");;

/***/ }),

/***/ 57211:
/***/ (function(module) {

module.exports = require("https");;

/***/ }),

/***/ 33700:
/***/ (function(module) {

module.exports = require("next/dist/compiled/@ampproject/toolbox-optimizer");;

/***/ }),

/***/ 12087:
/***/ (function(module) {

module.exports = require("os");;

/***/ }),

/***/ 85622:
/***/ (function(module) {

module.exports = require("path");;

/***/ }),

/***/ 71191:
/***/ (function(module) {

module.exports = require("querystring");;

/***/ }),

/***/ 92413:
/***/ (function(module) {

module.exports = require("stream");;

/***/ }),

/***/ 24304:
/***/ (function(module) {

module.exports = require("string_decoder");;

/***/ }),

/***/ 78835:
/***/ (function(module) {

module.exports = require("url");;

/***/ }),

/***/ 31669:
/***/ (function(module) {

module.exports = require("util");;

/***/ }),

/***/ 78761:
/***/ (function(module) {

module.exports = require("zlib");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = function() {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [749,281,632,251,855,102,799,765], function() { return __webpack_require__(26560); })
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	                // Font manifest declaration
/******/ 	                __webpack_require__.__NEXT_FONT_MANIFEST__ = [];
/******/ 	            // Enable feature:
/******/ 	            process.env.__NEXT_OPTIMIZE_FONTS = JSON.stringify(true);/* webpack/runtime/require chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			495: 1
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.require = function(chunkId) { return installedChunks[chunkId]; };
/******/ 		
/******/ 		var installChunk = function(chunk) {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 			__webpack_require__.O();
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = function(chunkId, promises) {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("../chunks/" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	!function() {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = function() {
/******/ 			__webpack_require__.e(749);
/******/ 			__webpack_require__.e(281);
/******/ 			__webpack_require__.e(632);
/******/ 			__webpack_require__.e(251);
/******/ 			__webpack_require__.e(855);
/******/ 			__webpack_require__.e(102);
/******/ 			__webpack_require__.e(799);
/******/ 			__webpack_require__.e(765);
/******/ 			return next();
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;