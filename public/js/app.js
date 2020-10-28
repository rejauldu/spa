(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/app"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/login.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/login.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      form: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    login: function login() {
      var _this = this;

      axios.get('/sanctum/csrf-cookie').then(function (response) {
        axios.post('/api/login', _this.form).then(function (response) {
          console.log(error);
        })["catch"](function (error) {
          console.log(error);
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layout.vue?vue&type=template&id=180b2835&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layout.vue?vue&type=template&id=180b2835& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "height-55 bg-theme navbar sticky-top" },
      [
        _c("router-link", { staticClass: "h-100", attrs: { to: "/" } }, [
          _c("img", {
            staticClass: "width-230 h-100 d-none d-md-inline",
            attrs: { src: "/assets/logo-bold.png" }
          })
        ]),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-sm ml-md-3 border border-info",
            attrs: { id: "left-menu-toggle" }
          },
          [
            _c(
              "svg",
              {
                staticStyle: {
                  fill: "#444444",
                  stroke: "#444444",
                  display: "inline-block",
                  "vertical-align": "middle"
                },
                attrs: { width: "25px", height: "25px", viewBox: "0 0 100 100" }
              },
              [
                _c("path", {
                  attrs: { d: "m12 20v8h76v-8zm0 26v8h76v-8zm0 26v8h76v-8z" }
                })
              ]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "form",
          {
            staticClass: "form-inline col",
            attrs: { action: "/action_page.php" }
          },
          [
            _c("div", { staticClass: "input-group w-100 mx-md-5" }, [
              _c("input", {
                staticClass:
                  "form-control border-right-0 bg-theme-light text-theme focus-theme",
                attrs: { type: "text", placeholder: "Search.." }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "input-group-append cursor-pointer" }, [
                _c(
                  "span",
                  {
                    staticClass:
                      "input-group-text border-left-0 bg-theme-light px-2 px-md-3 px-lg-4"
                  },
                  [
                    _c(
                      "svg",
                      {
                        staticStyle: {
                          fill: "#444444",
                          stroke: "#444444",
                          display: "inline-block",
                          "vertical-align": "middle"
                        },
                        attrs: {
                          width: "12px",
                          height: "12px",
                          x: "0px",
                          y: "0px",
                          viewBox: "0 0 100 100"
                        }
                      },
                      [
                        _c("path", {
                          attrs: {
                            d:
                              "M44.5,78.5c-18.8,0-34-15.3-34-34s15.3-34,34-34s34,15.3,34,34S63.3,78.5,44.5,78.5z M44.5,18.1  C30,18.1,18.2,30,18.2,44.5S30,70.8,44.5,70.8S70.9,59,70.9,44.5S59,18.1,44.5,18.1z"
                          }
                        }),
                        _c("path", {
                          attrs: {
                            d:
                              "M87.2,91c-1,0-2-0.4-2.7-1.1L63.1,68.5c-1.5-1.5-1.5-3.9,0-5.4s3.9-1.5,5.4,0l21.3,21.3  c1.5,1.5,1.5,3.9,0,5.4C89.2,90.6,88.2,91,87.2,91z"
                          }
                        })
                      ]
                    )
                  ]
                )
              ])
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "router-link",
          {
            staticClass: "btn border border-info mr-md-3",
            attrs: { to: "/login" }
          },
          [
            _c(
              "svg",
              {
                staticStyle: {
                  fill: "#444444",
                  stroke: "#444444",
                  display: "inline-block",
                  "vertical-align": "middle"
                },
                attrs: {
                  x: "0px",
                  y: "0px",
                  viewBox: "0 0 535.5 535.5",
                  width: "12px",
                  height: "12px"
                }
              },
              [
                _c("g", { attrs: { id: "lock" } }, [
                  _c("path", {
                    attrs: {
                      d:
                        "M420.75,178.5h-25.5v-51c0-71.4-56.1-127.5-127.5-127.5c-71.4,0-127.5,56.1-127.5,127.5v51h-25.5c-28.05,0-51,22.95-51,51\n\t\t\t\t\t\tv255c0,28.05,22.95,51,51,51h306c28.05,0,51-22.95,51-51v-255C471.75,201.45,448.8,178.5,420.75,178.5z M267.75,408\n\t\t\t\t\t\tc-28.05,0-51-22.95-51-51s22.95-51,51-51s51,22.95,51,51S295.8,408,267.75,408z M346.8,178.5H188.7v-51\n\t\t\t\t\t\tc0-43.35,35.7-79.05,79.05-79.05c43.35,0,79.05,35.7,79.05,79.05V178.5z"
                    }
                  })
                ])
              ]
            ),
            _vm._v(" Login\n\t\t")
          ]
        )
      ],
      1
    ),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "clearfix overflow-hidden" },
      [_c("router-view")],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "border", attrs: { id: "left-menu" } }, [
      _c("div", {})
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/index.vue?vue&type=template&id=6e7ee076&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/index.vue?vue&type=template&id=6e7ee076& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert bg-theme height-55" }, [
      _vm._v("\n\tHello\n\t"),
      _c("button", { attrs: { id: "left-menu-toggle" } }, [_vm._v("toggle")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/login.vue?vue&type=template&id=3826838d&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/login.vue?vue&type=template&id=3826838d& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-md-8 vh-55" }, [
        _c("div", { staticClass: "position-center-v left-0 right-0" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-header" }, [_vm._v("Login")]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "form-group row" }, [
                _c(
                  "label",
                  {
                    staticClass: "col-md-4 col-form-label text-md-right",
                    attrs: { for: "email" }
                  },
                  [_vm._v("E-Mail Address")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-6" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.email,
                        expression: "form.email"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      id: "email",
                      type: "email",
                      required: "",
                      autocomplete: "email",
                      autofocus: ""
                    },
                    domProps: { value: _vm.form.email },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "email", $event.target.value)
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group row" }, [
                _c(
                  "label",
                  {
                    staticClass: "col-md-4 col-form-label text-md-right",
                    attrs: { for: "password" }
                  },
                  [_vm._v("Password")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-6" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.password,
                        expression: "form.password"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      id: "password",
                      type: "password",
                      required: "",
                      autocomplete: "current-password"
                    },
                    domProps: { value: _vm.form.password },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "password", $event.target.value)
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "form-group row mb-0" }, [
                _c("div", { staticClass: "col-md-8 offset-md-4" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "submit" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.login()
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                                Login\n                            "
                      )
                    ]
                  )
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group row" }, [
      _c("div", { staticClass: "col-md-6 offset-md-4" }, [
        _c("div", { staticClass: "form-check" }, [
          _c("input", {
            staticClass: "form-check-input",
            attrs: { type: "checkbox", name: "remember", id: "remember" }
          }),
          _vm._v(" "),
          _c(
            "label",
            { staticClass: "form-check-label", attrs: { for: "remember" } },
            [
              _vm._v(
                "\n                                    Remember Me\n                                "
              )
            ]
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_vue_src_components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue/src/components/layout */ "./node_modules/bootstrap-vue/src/components/layout/index.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ "./resources/js/router.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ "./resources/js/store.js");
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");



vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(bootstrap_vue_src_components_layout__WEBPACK_IMPORTED_MODULE_1__["LayoutPlugin"]);


axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://spa';
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('layout', __webpack_require__(/*! ./components/layout.vue */ "./resources/js/components/layout.vue")["default"]);
var app = new vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  el: '#app',
  router: _router__WEBPACK_IMPORTED_MODULE_2__["default"],
  store: _store__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo';
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });

/***/ }),

/***/ "./resources/js/components/layout.vue":
/*!********************************************!*\
  !*** ./resources/js/components/layout.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout_vue_vue_type_template_id_180b2835___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.vue?vue&type=template&id=180b2835& */ "./resources/js/components/layout.vue?vue&type=template&id=180b2835&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _layout_vue_vue_type_template_id_180b2835___WEBPACK_IMPORTED_MODULE_0__["render"],
  _layout_vue_vue_type_template_id_180b2835___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layout.vue?vue&type=template&id=180b2835&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/layout.vue?vue&type=template&id=180b2835& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_template_id_180b2835___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./layout.vue?vue&type=template&id=180b2835& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layout.vue?vue&type=template&id=180b2835&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_template_id_180b2835___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_template_id_180b2835___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/views/index.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/views/index.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_6e7ee076___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=6e7ee076& */ "./resources/js/components/views/index.vue?vue&type=template&id=6e7ee076&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _index_vue_vue_type_template_id_6e7ee076___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_6e7ee076___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/views/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/views/index.vue?vue&type=template&id=6e7ee076&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/views/index.vue?vue&type=template&id=6e7ee076& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6e7ee076___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=6e7ee076& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/index.vue?vue&type=template&id=6e7ee076&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6e7ee076___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6e7ee076___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/views/login.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/views/login.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_vue_vue_type_template_id_3826838d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=3826838d& */ "./resources/js/components/views/login.vue?vue&type=template&id=3826838d&");
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ "./resources/js/components/views/login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_3826838d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _login_vue_vue_type_template_id_3826838d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/views/login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/views/login.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/views/login.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/views/login.vue?vue&type=template&id=3826838d&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/views/login.vue?vue&type=template&id=3826838d& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_3826838d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=template&id=3826838d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/login.vue?vue&type=template&id=3826838d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_3826838d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_3826838d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/router.js":
/*!********************************!*\
  !*** ./resources/js/router.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _components_views_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/views/index */ "./resources/js/components/views/index.vue");
/* harmony import */ var _components_views_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/views/login */ "./resources/js/components/views/login.vue");


vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]);


var routes = [{
  path: '/',
  component: _components_views_index__WEBPACK_IMPORTED_MODULE_2__["default"]
}, {
  path: '/login',
  component: _components_views_login__WEBPACK_IMPORTED_MODULE_3__["default"]
}];
/* harmony default export */ __webpack_exports__["default"] = (new vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]({
  mode: 'history',
  linkActiveClass: 'active',
  routes: routes
}));

/***/ }),

/***/ "./resources/js/store.js":
/*!*******************************!*\
  !*** ./resources/js/store.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vuex__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (new vuex__WEBPACK_IMPORTED_MODULE_1__["default"].Store({
  state: {
    isLoggedin: false,
    user: {}
  },
  getters: {},
  actions: {
    login: function login(context, form) {
      console.log(form);
    }
  },
  mutations: {}
}));

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\xampp\htdocs\spa\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! C:\xampp\htdocs\spa\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);