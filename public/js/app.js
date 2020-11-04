(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/app"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layout.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layout.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../router */ "./resources/js/router.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ "./resources/js/store.js");
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
  methods: {
    getUser: function getUser() {
      axios.get('/api/user').then(function (response) {
        if (response && response.data) {
          _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch("setUser", response.data);
          _router__WEBPACK_IMPORTED_MODULE_0__["default"].push({
            name: 'dashboard'
          });
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    logout: function logout() {
      axios.post('/api/logout').then(function (response) {
        _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch("logout");
        _router__WEBPACK_IMPORTED_MODULE_0__["default"].push({
          name: 'login'
        });
      })["catch"](function (error) {});
    }
  },
  mounted: function mounted() {
    this.getUser();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/dashboard.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/dashboard.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/login.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/login.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../router */ "./resources/js/router.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store */ "./resources/js/store.js");
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
          _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch("login", response.data);
          _router__WEBPACK_IMPORTED_MODULE_0__["default"].push({
            name: 'dashboard'
          });
        })["catch"](function (error) {
          console.log(error);
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/not-found.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/not-found.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/products.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/products.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/register.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/register.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
    };
  },
  methods: {
    login: function login() {
      var _this = this;

      axios.get('/sanctum/csrf-cookie').then(function (response) {
        axios.post('/api/register', _this.form).then(function (response) {
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
  return _c(
    "b-container",
    { attrs: { fluid: "" } },
    [
      _c(
        "b-row",
        { staticClass: "height-55 bg-theme navbar sticky-top" },
        [
          _c(
            "router-link",
            { staticClass: "h-100 bg-transparent", attrs: { to: "/" } },
            [
              _c("img", {
                staticClass: "width-230 h-100 d-none d-md-inline",
                attrs: { src: "/assets/logo-bold.png" }
              })
            ]
          ),
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
                  attrs: {
                    width: "25px",
                    height: "25px",
                    viewBox: "0 0 100 100"
                  }
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
          _c("div", { staticClass: "input-group w-100 mx-md-5 col" }, [
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
          ]),
          _vm._v(" "),
          !_vm.$store.state.isLoggedin
            ? _c(
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
                              "M420.75,178.5h-25.5v-51c0-71.4-56.1-127.5-127.5-127.5c-71.4,0-127.5,56.1-127.5,127.5v51h-25.5c-28.05,0-51,22.95-51,51\n\t\t\t\t\t\t\tv255c0,28.05,22.95,51,51,51h306c28.05,0,51-22.95,51-51v-255C471.75,201.45,448.8,178.5,420.75,178.5z M267.75,408\n\t\t\t\t\t\t\tc-28.05,0-51-22.95-51-51s22.95-51,51-51s51,22.95,51,51S295.8,408,267.75,408z M346.8,178.5H188.7v-51\n\t\t\t\t\t\t\tc0-43.35,35.7-79.05,79.05-79.05c43.35,0,79.05,35.7,79.05,79.05V178.5z"
                          }
                        })
                      ])
                    ]
                  ),
                  _vm._v("\n                Login\n            ")
                ]
              )
            : _c(
                "a",
                {
                  staticClass: "text-dark",
                  attrs: { href: "/logout" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.logout()
                    }
                  }
                },
                [
                  _c(
                    "svg",
                    { attrs: { viewBox: "0 0 512 512", height: "14" } },
                    [
                      _c("path", {
                        attrs: {
                          fill: "currentColor",
                          d:
                            "M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"
                        }
                      })
                    ]
                  ),
                  _vm._v("\n                Logout\n            ")
                ]
              )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c("div", { attrs: { id: "left-menu" } }, [
            _c("div", { staticClass: "border" }, [
              _c(
                "div",
                { staticClass: "display-6 p-3" },
                [
                  _c(
                    "router-link",
                    { staticClass: "logo", attrs: { to: "/offers" } },
                    [_vm._v("Offers")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "list-group list-group-flush" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "list-group-item list-group-item-action",
                      attrs: { to: "/nctb" }
                    },
                    [_vm._v("NCTB")]
                  ),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "list-group-item list-group-item-action",
                      attrs: { to: "/job" }
                    },
                    [_vm._v("Job")]
                  ),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "list-group-item list-group-item-action",
                      attrs: { to: "/literature" }
                    },
                    [_vm._v("Literature\n                        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "list-group-item list-group-item-action",
                      attrs: { to: "/higher-study" }
                    },
                    [_vm._v("Higher Study\n                        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "list-group-item list-group-item-action",
                      attrs: { to: "/academic" }
                    },
                    [_vm._v("Academic\n                        ")]
                  )
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "b-container",
            { staticClass: "content-wrapper", attrs: { fluid: "" } },
            [
              _c("b-row", [_c("router-view")], 1),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "bg-light text-center border mt-5" },
                [
                  _c("b-col", { attrs: { cols: "12", md: "4" } }, [
                    _c(
                      "div",
                      { staticClass: "list-group" },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass:
                              "list-group-item border-0 py-1 bg-transparent text-theme",
                            attrs: { to: "/register" }
                          },
                          [
                            _vm._v(
                              "\n                                Sign-up\n                            "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "router-link",
                          {
                            staticClass:
                              "list-group-item border-0 py-1 bg-transparent text-theme",
                            attrs: { to: "/about-us" }
                          },
                          [
                            _vm._v(
                              "\n                                About Us\n                            "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "router-link",
                          {
                            staticClass:
                              "list-group-item border-0 py-1 bg-transparent text-theme",
                            attrs: { to: "/terms-of-services" }
                          },
                          [
                            _vm._v(
                              "Terms of\n                                Services\n                            "
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("b-col", { attrs: { cols: "12", md: "4" } }, [
                    _c(
                      "div",
                      { staticClass: "list-group" },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass:
                              "list-group-item border-0 py-1 bg-transparent text-theme",
                            attrs: { to: "tel:8801924974960" }
                          },
                          [
                            _c(
                              "svg",
                              {
                                attrs: {
                                  viewBox: "0 -256 1792 1792",
                                  height: "14"
                                }
                              },
                              [
                                _c(
                                  "g",
                                  {
                                    attrs: {
                                      transform:
                                        "matrix(1,0,0,-1,159.45763,1293.0169)"
                                    }
                                  },
                                  [
                                    _c("path", {
                                      staticStyle: { fill: "currentColor" },
                                      attrs: {
                                        d:
                                          "m 1408,296 q 0,-27 -10,-70.5 Q 1388,182 1377,157 1356,107 1255,51 1161,0 1069,0 1042,0 1016.5,3.5 991,7 959,16 927,25 911.5,30.5 896,36 856,51 816,66 807,69 709,104 632,152 504,231 367.5,367.5 231,504 152,632 104,709 69,807 66,816 51,856 36,896 30.5,911.5 25,927 16,959 7,991 3.5,1016.5 0,1042 0,1069 q 0,92 51,186 56,101 106,122 25,11 68.5,21 43.5,10 70.5,10 14,0 21,-3 18,-6 53,-76 11,-19 30,-54 19,-35 35,-63.5 16,-28.5 31,-53.5 3,-4 17.5,-25 14.5,-21 21.5,-35.5 7,-14.5 7,-28.5 0,-20 -28.5,-50 -28.5,-30 -62,-55 -33.5,-25 -62,-53 -28.5,-28 -28.5,-46 0,-9 5,-22.5 5,-13.5 8.5,-20.5 3.5,-7 14,-24 10.5,-17 11.5,-19 76,-137 174,-235 98,-98 235,-174 2,-1 19,-11.5 17,-10.5 24,-14 7,-3.5 20.5,-8.5 13.5,-5 22.5,-5 18,0 46,28.5 28,28.5 53,62 25,33.5 55,62 30,28.5 50,28.5 14,0 28.5,-7 14.5,-7 35.5,-21.5 21,-14.5 25,-17.5 25,-15 53.5,-31 28.5,-16 63.5,-35 35,-19 54,-30 70,-35 76,-53 3,-7 3,-21 z",
                                        "inkscape:connector-curvature": "0"
                                      }
                                    })
                                  ]
                                )
                              ]
                            ),
                            _vm._v(
                              "\n                                01924974960\n                            "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "router-link",
                          {
                            staticClass:
                              "list-group-item border-0 py-1 bg-transparent text-theme",
                            attrs: { to: "mailto:rejauldu@gmail.com" }
                          },
                          [
                            _c(
                              "svg",
                              {
                                attrs: { viewBox: "0 0 512 512", height: "14" }
                              },
                              [
                                _c("path", {
                                  attrs: {
                                    fill: "currentColor",
                                    d:
                                      "M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                                  }
                                })
                              ]
                            ),
                            _vm._v(
                              "\n                                rejauldu@gmail.com\n                            "
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { cols: "12", md: "4" } },
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            {
                              staticClass: "text-xl-right py-1 py-xl-3",
                              attrs: { cols: "12", xl: "6" }
                            },
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass:
                                    "height-50 border rounded d-flex p-1 text-left text-light bg-dark-transparent text-decoration-none width-150",
                                  attrs: { to: "/google" }
                                },
                                [
                                  _c(
                                    "svg",
                                    {
                                      attrs: {
                                        viewBox: "0 0 512 512",
                                        height: "40"
                                      }
                                    },
                                    [
                                      _c("path", {
                                        attrs: {
                                          fill: "currentColor",
                                          d:
                                            "M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "height-40 w-100 ml-2" },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "line-height-10 height-10 font-10"
                                        },
                                        [_vm._v("Android App on")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "height-16 line-height-16 font-weight-bold"
                                        },
                                        [_vm._v("Google paly")]
                                      )
                                    ]
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            {
                              staticClass: "text-xl-left py-1 py-xl-3",
                              attrs: { cols: "12", xl: "6" }
                            },
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass:
                                    "height-50 border rounded d-flex p-1 text-left text-light bg-dark-transparent text-decoration-none width-150",
                                  attrs: { to: "/apple" }
                                },
                                [
                                  _c(
                                    "svg",
                                    {
                                      attrs: {
                                        viewBox: "0 0 384 512",
                                        height: "40"
                                      }
                                    },
                                    [
                                      _c("path", {
                                        attrs: {
                                          fill: "currentColor",
                                          d:
                                            "M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "height-40 w-100 ml-2" },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "line-height-10 height-10 font-10"
                                        },
                                        [_vm._v("Available on")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "height-16 line-height-16 font-weight-bold"
                                        },
                                        [_vm._v("App Store")]
                                      )
                                    ]
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/dashboard.vue?vue&type=template&id=2a8e0b38&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/dashboard.vue?vue&type=template&id=2a8e0b38& ***!
  \******************************************************************************************************************************************************************************************************************/
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
  return _c(
    "b-container",
    { attrs: { fluid: "" } },
    [
      _c(
        "b-row",
        [
          _c("b-col", { attrs: { cols: "12", sm: "6", lg: "3" } }, [
            _c("div", { staticClass: "card" }, [
              _c(
                "svg",
                {
                  staticClass: "alert-light bg-transparent",
                  attrs: { viewBox: "0 0 512 512" }
                },
                [
                  _c("path", {
                    attrs: {
                      fill: "currentColor",
                      d:
                        "M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"
                    }
                  })
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("h4", { staticClass: "card-title" }, [_vm._v("John Doe")]),
                _vm._v(" "),
                _c("p", { staticClass: "card-text" }, [
                  _vm._v(
                    "Some example text some example text. John Doe is an architect and engineer"
                  )
                ]),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "btn btn-theme stretched-link",
                    attrs: { href: "#" }
                  },
                  [_vm._v("See Profile")]
                )
              ])
            ])
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
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
  return _c(
    "b-container",
    { attrs: { fluid: "" } },
    [
      _c(
        "b-row",
        { staticClass: "bg-theme-light height-300 text-center py-2 py-md-5" },
        [
          _c(
            "b-col",
            { staticClass: "d-none d-md-block", attrs: { md: "4", lg: "6" } },
            [
              _c(
                "svg",
                {
                  staticClass: "alert-success bg-transparent",
                  attrs: { viewBox: "0 0 1200 1200", height: "200" }
                },
                [
                  _c("path", {
                    attrs: {
                      fill: "currentColor",
                      d:
                        "M95.358,704.766c14.014,22.475,16.093,76.802,15.044,80.659c-1.048,3.857-8.235,26.733-10.622,43.572\n\t\t\t\ts15.921,54.979,19.083,61.709c29.4,62.544,56.214,47.731,71.33,49.994c70.915,10.605,92.538-2.455,100.215-1.531\n\t\t\t\tc7.672,0.924,21.917,4.865,36.66,6.147c14.746,1.278,16.496-17.007,26.372-11.746c9.873,5.263,53.656,13.232,71.353,15.002\n\t\t\t\tc17.702,1.77,223.158-9.392,236.68-9.542c13.52-0.152,27.402,1.746,27.402,1.746s5.441,4.525,13.421,5.734\n\t\t\t\tc7.975,1.207,178.652,5.301,178.652,5.301s6.967-0.459,10.1,3.197c9.074,10.582,27.273,6.748,44.616-2.348\n\t\t\t\tc17.343-9.096,50.992-5.206,63.121-2.956c12.126,2.248,21.095-11.28,21.095-11.28s25.807,15.911,54.588,23.787\n\t\t\t\tc28.779,7.874,28.762-37.405,29.823-40.968c1.058-3.563,12.535-24.788,16.589-32.009c2.864-5.109,6.157-10.029,10.124-14.35\n\t\t\t\tc5.346-5.824,11.106-10.349,14.434-17.764c2.955-6.584,4.046-13.857,4.44-21.01c0.856-15.557-2.884-31.491-8.431-45.945\n\t\t\t\tc-3.21-8.364-8.379-16.232-11.115-24.735c-5.237-16.294-13.454-12.886-18.321-11.747c-16.048,3.762-10.568,23.002-10.879,26.82\n\t\t\t\tc-1.673,20.637-12.604,28.052-18.59,33.837c-5.981,5.784-42.121,41.201-49.822,40.743c-35.057-2.081-37.131,14.836-41.595,13.717\n\t\t\t\tc-26.941-6.76-42.339-8.9-42.339-8.9s-19.716-9.348-25.869-17.672c-6.151-8.324-29.648-7.553-29.648-7.553\n\t\t\t\ts-12.027,0.984-14.989-8.621c-2.961-9.606-20.05-1.695-23.563-1.283c-3.516,0.408-17.931-8.82-19.616-15.232\n\t\t\t\tc-1.68-6.412-18.844-0.852-21.847-2.811c-3.008-1.957-84.627-51.911-86.427-53.027c-1.802-1.115-35.93-19.696-40.549-26.01\n\t\t\t\tc-4.617-6.317-31.947-14.828-36.306-22.037c-4.352-7.208-23.769-11.058-28.135-15.246c-25.201-24.165-41.316-12.423-51.124-7.731\n\t\t\t\tc-35.605,17.049-60.825,19.055-60.825,19.055s-0.792-6.148-4.168-10.45c-3.377-4.301-25.553,0.842-35.092,5.857\n\t\t\t\tc-9.539,5.018-60.684,14.347-60.684,14.347s16.593-15.498,18.236-17.656c14.009-18.404,26.859-23.816,30.453-30.697\n\t\t\t\tc3.596-6.88,10.132-16.576,13.784-18.976c10.361-6.808,13.75-11.036,18.483-19.131c4.383-7.494,13.921-26.483,15.315-29.265\n\t\t\t\tc2.59-2.303,4.97-4.485,7.031-6.463c1.715-1.643,19.344-15.338,19.344-15.338s2.963-3.845,1.113-6.432\n\t\t\t\tc-1.85-2.584,24.123-37.619,24.123-37.619s-0.917-0.752-2.606-0.095l-8.41-10.678c0,0-21.947,20.898-24.365,24.507\n\t\t\t\tc-2.417,3.608,15.976-28.863,15.976-28.863l-1.542-1.604c0,0-15.276,18.214-18.887,24.376l14.586-27.762l-7.552-5.045\n\t\t\t\tc0,0-25.919,23.291-27.387,45.776c-0.114,1.76-52.979-15.129-58.056-11.874c-2.83,1.814-38.831,35.901-70.141,65.715\n\t\t\t\tc1.986-7.276,5.562-20.586,6.851-26.734c8.257-39.376-18.46-44.732-16.135-47.984c10.961-15.356,5.802-28.416,5.802-28.416\n\t\t\t\ts10.279-10.044,11.665-21.556c1.389-11.512-14.109-58.051-14.109-58.051c-1.626-9.21,4.766-20.949,8.499-23.214\n\t\t\t\tc12.291-7.46,13.561-16.765,11.35-30.363c-2.211-13.6-19.898-68.592-19.898-68.592c-3.085-9.726-18.565-24.158-23.012-29.235\n\t\t\t\tc-27.038-30.866-51.383-33.568-59.535-33.328c-52.654,1.554-63.938,27.241-69.072,32.043c-5.139,4.798-34.349,41.924-41.175,55.602\n\t\t\t\tc-6.828,13.675-30.625,54.593-40.43,64.839c-9.808,10.247-34.17,33.981-36.264,37.359c-2.094,3.377-1.608,18.135-1.608,18.135\n\t\t\t\ts-12.59,12.763-19.868,12.783c-7.278,0.018-15.428,5.226-15.724,11.397c-2.966,61.844,9.191,64.974,11.071,68.44\n\t\t\t\tc1.877,3.468-3.341,23.632-4.967,27.803c-1.629,4.17-8.616,8.479-11.757,18.027C42.041,610.959,90.653,697.224,95.358,704.766z\n\t\t\t\t M363.4,391.19c2.761-3.178,9.96-12.236,9.367-16.847c0,0,2.838,12.477-2.497,17.943c-5.334,5.47-7.831,9.962-7.986,11.95\n\t\t\t\tC362.13,406.227,360.634,394.368,363.4,391.19z M518.92,828.892c2.983-3.185,50.977-32.547,51.017-31.227\n\t\t\t\tc0.045,1.323,12.921,3.987,19.076,3.342c6.155-0.642,11.506-12.286,17.405-7.186c5.902,5.097,16.304-0.537,23.201,8.058\n\t\t\t\tc6.898,8.593,17.044,8.7,19.748,10.376c2.701,1.674,42.153,21.108,42.153,21.108s1.828,4.322-3.879,2.774\n\t\t\t\tc-50.734-13.77-67.661,7.958-78.068-0.08c-10.411-8.038-55.029,3.132-57.788-0.307C549.022,832.314,515.939,832.077,518.92,828.892z\n\t\t\t\t M528.831,566.804c0,0-0.164-0.156-0.455-0.399c4.353-6.882,10.623-16.446,16.433-24.057\n\t\t\t\tC537.852,552.684,528.831,566.804,528.831,566.804z"
                    }
                  })
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c("b-col", { attrs: { cols: "12", md: "8", lg: "6" } }, [
            _c(
              "div",
              {
                staticClass:
                  "font-family-playball display-4 text-theme-gradient"
              },
              [_vm._v("Feed the mind")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "text-theme font-12" }, [
              _vm._v("Because knowledge can never be snatched away")
            ])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c("b-col", { attrs: { cols: "12", sm: "6", lg: "3" } }, [
            _c("div", { staticClass: "card" }, [
              _c("svg", { attrs: { viewBox: "0 0 58 58" } }, [
                _c("g", [
                  _c("path", {
                    attrs: {
                      id: "Shape",
                      d:
                        "m5.72 52.21-5.55-31.51c-.05359011-.3041252-.08699643-.6114633-.1-.92-.08248096-3.5724087 2.48267266-6.6582757 6.01-7.23l10.71-1.89-.29 41.55z",
                      fill: "#35495e"
                    }
                  }),
                  _vm._v(" "),
                  _c("path", {
                    attrs: {
                      id: "Shape",
                      d:
                        "m46.94 50.83c-.1857191.771023-.8094746 1.3594717-1.59 1.5l-31.52 5.56c-1.9867206.3468301-4.02657856-.1786842-5.59841615-1.4422808-1.57183758-1.2635966-2.52340318-3.1428808-2.61158385-5.1577192-.07876599-3.4155632 2.27277316-6.4084312 5.61-7.14l8.83 2.48h-.01l-7.95 1.41c-.8866555.1558432-1.656734.7009972-2.0983662 1.4854753-.44163213.7844782-.50828985 1.7256321-.1816338 2.5645247.5656214 1.3511449 2.0021594 2.1195258 3.44 1.84l24.09-4.25z",
                      fill: "#2c3e50"
                    }
                  }),
                  _vm._v(" "),
                  _c("path", {
                    attrs: {
                      id: "Shape",
                      d:
                        "m20.05 46.63-7.95 1.41c-.8866555.1558432-1.656734.7009972-2.0983662 1.4854753-.44163213.7844782-.50828985 1.7256321-.1816338 2.5645247.5656214 1.3511449 2.0021594 2.1195258 3.44 1.84l24.09-4.25z",
                      fill: "#f9eab0"
                    }
                  }),
                  _vm._v(" "),
                  _c("path", {
                    attrs: {
                      id: "Shape",
                      d:
                        "m12.826 33.171 5.557-31.514c.1989194-1.08324679 1.2310871-1.80580869 2.317-1.622l31.277 5.515c3.5298611.57216709 6.0970156 3.66000793 6.015 7.235-.0136036.3071659-.0470063.6131344-.1.916l-5.557 31.514z",
                      fill: "#e64c3c"
                    }
                  }),
                  _vm._v(" "),
                  _c("path", {
                    attrs: {
                      id: "Shape",
                      d:
                        "m45.438 10.474c-.0586532-.0000276-.1171977-.0050457-.175-.015l-22.651-3.994c-.5111685-.12606546-.837041-.62687769-.7452297-1.14529488.0918113-.5184172.5698565-.87685619 1.0932297-.81970512l22.65 3.989c.5108329.08948831.8684834.55465053.8237134 1.07132656-.0447699.51667604-.4771014.91338644-.9957134.91367344z",
                      fill: "#3f5c6c"
                    }
                  }),
                  _vm._v(" "),
                  _c("path", {
                    attrs: {
                      id: "Shape",
                      d:
                        "m40.63 14.7c-.0587024.0000849-.1172863-.0052713-.175-.016l-14.772-2.601c-.5314773-.1077828-.8801906-.6195404-.7860712-1.1536068.0941194-.5340663.5967671-.8957872 1.1330712-.8153932l14.773 2.6c.5138125.0868279.8748237.55367.8296023 1.0728015-.0452214.5191314-.4815156.9165204-1.0026023.9131985z",
                      fill: "#3f5c6c"
                    }
                  }),
                  _vm._v(" "),
                  _c("rect", {
                    attrs: {
                      id: "Rectangle-path",
                      fill: "#ecf0f1",
                      height: "12",
                      rx: "1",
                      transform: "matrix(.985 .174 -.174 .985 4.511 -5.088)",
                      width: "23",
                      x: "19.833",
                      y: "17.234"
                    }
                  }),
                  _vm._v(" "),
                  _c("path", {
                    attrs: {
                      id: "Shape",
                      d:
                        "m57.99 12.78c-.0119064.3086184-.0453208.6160308-.1.92l-5.56 31.51-7.71-2.35 4.47-25.34 1.06-5.98 1.08-6.12.75.13c3.5257169.57454224 6.0894162 3.6586597 6.01 7.23z",
                      fill: "#c03a2b"
                    }
                  }),
                  _vm._v(" "),
                  _c("path", {
                    attrs: {
                      id: "Shape",
                      d:
                        "m46.42 37.06-31.28-5.51c-.1156046-.0199087-.2326936-.0299449-.35-.03-1.0364668.0026285-1.8991916.7966438-1.9876335 1.8293337-.088442 1.0326898.6267071 1.9618379 1.6476335 2.1406663l31.51 5.55c.8858791.1604248 1.6536061.708589 2.0929592 1.4943923.439353.7858033.5042941 1.7269044.1770408 2.5656077-.5625614 1.3481553-1.9969395 2.1134358-3.43 1.83l-31.39-5.53c-.1156046-.0199087-.2326936-.0299449-.35-.03-1.0383851-.0025575-1.9060067.7899765-1.9971986 1.8243528-.0911918 1.0343762.624383 1.9664868 1.6471986 2.1456472l31.52 5.55c1.9852737.3480364 4.0242759-.1756778 5.5960992-1.4373484 1.5718232-1.2616705 2.5242277-3.1390976 2.6139008-5.1526516.0784876-3.576507-2.4892143-6.6645738-6.02-7.24z",
                      fill: "#802f34"
                    }
                  }),
                  _vm._v(" "),
                  _c("path", {
                    attrs: {
                      id: "Shape",
                      d:
                        "m48.23 45.1c-.5625614 1.3481553-1.9969395 2.1134358-3.43 1.83l-31.39-5.53 1.04-5.91 31.51 5.55c.8858791.1604248 1.6536061.708589 2.0929592 1.4943923.439353.7858033.5042941 1.7269044.1770408 2.5656077z",
                      fill: "#f9eab0"
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("h4", { staticClass: "card-title" }, [_vm._v("John Doe")]),
                _vm._v(" "),
                _c("p", { staticClass: "card-text" }, [
                  _vm._v(
                    "Some example text some example text. John Doe is an architect and engineer"
                  )
                ]),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "btn btn-theme stretched-link",
                    attrs: { href: "#" }
                  },
                  [_vm._v("See Profile")]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("b-col", { attrs: { cols: "12", sm: "6", lg: "3" } }, [
            _c("div", { staticClass: "card" }, [
              _c(
                "svg",
                {
                  staticClass: "alert-light bg-transparent",
                  attrs: { viewBox: "0 0 512 512" }
                },
                [
                  _c("path", {
                    attrs: {
                      fill: "currentColor",
                      d:
                        "M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"
                    }
                  })
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("h4", { staticClass: "card-title" }, [_vm._v("John Doe")]),
                _vm._v(" "),
                _c("p", { staticClass: "card-text" }, [
                  _vm._v(
                    "Some example text some example text. John Doe is an architect and engineer"
                  )
                ]),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "btn btn-theme stretched-link",
                    attrs: { href: "#" }
                  },
                  [_vm._v("See Profile")]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("b-col", { attrs: { cols: "12", sm: "6", lg: "3" } }, [
            _c("div", { staticClass: "card" }, [
              _c(
                "svg",
                { attrs: { viewBox: "0 0 512 512" } },
                [
                  _c(
                    "linearGradient",
                    {
                      attrs: {
                        gradientUnits: "userSpaceOnUse",
                        x1: "256",
                        x2: "256",
                        y1: "481",
                        y2: "16"
                      }
                    },
                    [
                      _c("stop", {
                        attrs: { offset: "0", "stop-color": "#a93aff" }
                      }),
                      _c("stop", {
                        attrs: { offset: "1", "stop-color": "#ff81ff" }
                      })
                    ],
                    1
                  ),
                  _c(
                    "linearGradient",
                    {
                      attrs: {
                        id: "SVGID_2_",
                        gradientUnits: "userSpaceOnUse",
                        x1: "256",
                        x2: "256",
                        y1: "496",
                        y2: "211"
                      }
                    },
                    [
                      _c("stop", {
                        attrs: { offset: "0", "stop-color": "#ffbef9" }
                      }),
                      _c("stop", {
                        attrs: { offset: "1", "stop-color": "#fff1ff" }
                      })
                    ],
                    1
                  ),
                  _c("g", [
                    _c("g", [
                      _c("g", [
                        _c("path", {
                          attrs: {
                            d:
                              "m376 136h15v15c0 8.291 6.709 15 15 15s15-6.709 15-15v-15h15c8.291 0 15-6.709 15-15s-6.709-15-15-15h-15v-15c0-8.291-6.709-15-15-15s-15 6.709-15 15v15h-15c-8.291 0-15 6.709-15 15s6.709 15 15 15zm-150-60h15v15c0 8.291 6.709 15 15 15s15-6.709 15-15v-15h15c8.291 0 15-6.709 15-15s-6.709-15-15-15h-15v-15c0-8.291-6.709-15-15-15s-15 6.709-15 15v15h-15c-8.291 0-15 6.709-15 15s6.709 15 15 15zm-150 270h60l30-15c0-66.167 23.833-90 90-90s90 23.833 90 90l30 15h60c8.291 0 15-6.709 15-15 0-107.52-87.48-195-195-195s-195 87.48-195 195c0 8.291 6.709 15 15 15zm419.5 98.401-30-60c-2.7-5.101-7.8-8.401-13.5-8.401h-123.701c-26.1 0-51.899 9-72.299 24.901-20.4-15.901-46.199-24.901-72.299-24.901h-123.701c-5.7 0-10.8 3.3-13.5 8.401l-30 60c-.899 2.098-1.5 4.199-1.5 6.599h181c3.9 0 7.8 1.5 10.499 4.501l25.802 25.499h47.398l25.802-25.499c2.699-3.001 6.599-4.501 10.499-4.501h181c0-2.401-.601-4.501-1.5-6.599zm-419.5-308.401h15v15c0 8.291 6.709 15 15 15s15-6.709 15-15v-15h15c8.291 0 15-6.709 15-15s-6.709-15-15-15h-15v-15c0-8.291-6.709-15-15-15s-15 6.709-15 15v15h-15c-8.291 0-15 6.709-15 15s6.709 15 15 15z",
                            fill: "url(#SVGID_1_)"
                          }
                        })
                      ])
                    ]),
                    _c("g", [
                      _c("g", [
                        _c("path", {
                          attrs: {
                            d:
                              "m211 331c0-24.814 20.186-45 45-45s45 20.186 45 45c0 8.291 6.709 15 15 15h60v-15c0-66.167-53.833-120-120-120s-120 53.833-120 120v15h60c8.291 0 15-6.709 15-15zm286 105h-181c-3.984 0-7.793 1.582-10.605 4.395l-25.606 25.605h-47.578l-25.605-25.605c-2.813-2.813-6.622-4.395-10.606-4.395h-181c-8.291 0-15 6.709-15 15s6.709 15 15 15h174.789l25.605 25.605c2.813 2.813 6.622 4.395 10.606 4.395h60c3.984 0 7.793-1.582 10.605-4.395l25.606-25.605h174.789c8.291 0 15-6.709 15-15s-6.709-15-15-15z",
                            fill: "url(#SVGID_2_)"
                          }
                        })
                      ])
                    ])
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("h4", { staticClass: "card-title" }, [_vm._v("John Doe")]),
                _vm._v(" "),
                _c("p", { staticClass: "card-text" }, [
                  _vm._v(
                    "Some example text some example text. John Doe is an architect and engineer"
                  )
                ]),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "btn btn-theme stretched-link",
                    attrs: { href: "#" }
                  },
                  [_vm._v("See Profile")]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("b-col", { attrs: { cols: "12", sm: "6", lg: "3" } }, [
            _c("div", { staticClass: "card" }, [
              _c("svg", { attrs: { viewBox: "0 0 512 512" } }, [
                _c("g", [
                  _c("g", [
                    _c("path", {
                      attrs: {
                        d: "m286 444 223-48v-300l-233 40-3 133z",
                        fill: "#9c6750"
                      }
                    }),
                    _c("path", {
                      attrs: {
                        d: "m3 411 224 33 19-181-10-125-233-33z",
                        fill: "#9c6750"
                      }
                    }),
                    _c("path", {
                      attrs: { d: "m227 444h59l-10-308-40 2z", fill: "#844f3e" }
                    })
                  ]),
                  _c("g", { attrs: { fill: "#f3d544" } }, [
                    _c("path", {
                      attrs: { d: "m484 406 28-7v-33l-8 1-3 20-17 7z" }
                    }),
                    _c("path", {
                      attrs: { d: "m489 96 23-4v29l-7-1-1-16-13-2z" }
                    }),
                    _c("path", {
                      attrs: { d: "m0 129v-28l26 4-2 8-15 1-3 14z" }
                    })
                  ]),
                  _c("g", [
                    _c("path", {
                      attrs: {
                        d: "m256 159-226-103-7 337 239 43z",
                        fill: "#e7e2d5"
                      }
                    }),
                    _c("path", {
                      attrs: {
                        d: "m256 159 221-107 12 328-227 56z",
                        fill: "#e7e2d5"
                      }
                    }),
                    _c("path", {
                      attrs: {
                        d: "m50 356 33-328 173 131 6 277z",
                        fill: "#f4efe3"
                      }
                    }),
                    _c("path", {
                      attrs: {
                        d: "m147 0 109 159 6 277-176-121z",
                        fill: "#fdf9f2"
                      }
                    }),
                    _c("path", {
                      attrs: {
                        d: "m256 159 167-130 35 315-196 92z",
                        fill: "#f4efe3"
                      }
                    }),
                    _c("path", {
                      attrs: {
                        d: "m256 159 104-159 60 311-158 125z",
                        fill: "#fdf9f2"
                      }
                    }),
                    _c("path", {
                      attrs: { d: "m252 151h8l6 361h-20z", fill: "#d68034" }
                    }),
                    _c("g", { attrs: { fill: "#e7e2d5" } }, [
                      _c("g", [
                        _c("path", {
                          attrs: { d: "m156 56 82 100-3 87-98-92z" }
                        }),
                        _c("path", {
                          attrs: { d: "m131 172 102 85-2 13-103-88z" }
                        }),
                        _c("path", {
                          attrs: { d: "m125 203 92 69-2 10-93-70z" }
                        }),
                        _c("path", {
                          attrs: { d: "m120 228 106 73-2 12-106-75z" }
                        }),
                        _c("path", {
                          attrs: { d: "m115 254 115 76v16l-118-82z" }
                        }),
                        _c("path", {
                          attrs: { d: "m107 282 105 66-4 14-103-69z" }
                        })
                      ]),
                      _c("g", [
                        _c("path", {
                          attrs: { d: "m271 162 81-116 3 12-82 118z" }
                        }),
                        _c("path", {
                          attrs: { d: "m274 189 86-113 3 14-87.653 108.426z" }
                        }),
                        _c("path", {
                          attrs: { d: "m279 218 84-92 3 14-87 92z" }
                        }),
                        _c("path", {
                          attrs: { d: "m279 246 82-81 2 14-84 79z" }
                        }),
                        _c("path", {
                          attrs: { d: "m386 320 17-14-7-18-13 10z" }
                        })
                      ])
                    ])
                  ]),
                  _c("path", {
                    attrs: {
                      d: "m34 420-34-6v-42l11 3 2 21 20 13z",
                      fill: "#f3d544"
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("h4", { staticClass: "card-title" }, [_vm._v("John Doe")]),
                _vm._v(" "),
                _c("p", { staticClass: "card-text" }, [
                  _vm._v(
                    "Some example text some example text. John Doe is an architect and engineer"
                  )
                ]),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "btn btn-theme stretched-link",
                    attrs: { href: "#" }
                  },
                  [_vm._v("See Profile")]
                )
              ])
            ])
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
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
    _c("div", { staticClass: "row justify-content-center text-theme" }, [
      _c("div", { staticClass: "col-md-8 vh-55" }, [
        _c("div", { staticClass: "position-center-v left-0 right-0" }, [
          _c("div", { staticClass: "card" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "card-body bg-theme-light" }, [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.login()
                    }
                  }
                },
                [
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
                        staticClass: "form-control focus-theme border-theme",
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
                        staticClass: "form-control focus-theme border-theme",
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
                  _vm._m(1),
                  _vm._v(" "),
                  _vm._m(2)
                ]
              )
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
    return _c("div", { staticClass: "card-header bg-theme text-light" }, [
      _c("strong", [_vm._v("Login")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group row" }, [
      _c("div", { staticClass: "col-md-6 offset-md-4" }, [
        _c("div", { staticClass: "form-check" }, [
          _c("input", {
            staticClass: "form-check-input focus-theme",
            attrs: { type: "checkbox", name: "remember", id: "remember" }
          }),
          _vm._v(" "),
          _c(
            "label",
            { staticClass: "form-check-label", attrs: { for: "remember" } },
            [
              _vm._v(
                "\n                                        Remember Me\n                                    "
              )
            ]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group row mb-0" }, [
      _c("div", { staticClass: "col-md-8 offset-md-4" }, [
        _c(
          "button",
          { staticClass: "btn btn-theme", attrs: { type: "submit" } },
          [
            _vm._v(
              "\n                                    Login\n                                "
            )
          ]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/not-found.vue?vue&type=template&id=c8d41aa8&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/not-found.vue?vue&type=template&id=c8d41aa8& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    return _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row justify-content-center" }, [
        _c("div", { staticClass: "col-md-8 vh-55" }, [
          _c("div", { staticClass: "position-center-v left-0 right-0" }, [
            _c("p", { staticClass: "text-center display-5" }, [
              _vm._v("404 | Page Not Found")
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/products.vue?vue&type=template&id=a8f3af20&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/products.vue?vue&type=template&id=a8f3af20& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
  return _c(
    "b-container",
    { attrs: { fluid: "" } },
    [
      _c(
        "b-row",
        [
          _c("b-col", { attrs: { cols: "12", sm: "6", lg: "3" } }, [
            _c("div", { staticClass: "card" }, [
              _c(
                "svg",
                {
                  staticClass: "alert-light bg-transparent",
                  attrs: { viewBox: "0 0 512 512" }
                },
                [
                  _c("path", {
                    attrs: {
                      fill: "currentColor",
                      d:
                        "M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"
                    }
                  })
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("h4", { staticClass: "card-title" }, [_vm._v("John Doe")]),
                _vm._v(" "),
                _c("p", { staticClass: "card-text" }, [
                  _vm._v(
                    "Some example text some example text. John Doe is an architect and engineer"
                  )
                ]),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "btn btn-theme stretched-link",
                    attrs: { href: "#" }
                  },
                  [_vm._v("See Profile")]
                )
              ])
            ])
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/register.vue?vue&type=template&id=0837ce2f&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/register.vue?vue&type=template&id=0837ce2f& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
    return _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row justify-content-center text-theme" }, [
        _c("div", { staticClass: "col-md-8 vh-55" }, [
          _c("div", { staticClass: "position-center-v left-0 right-0" }, [
            _c("div", { staticClass: "card" }, [
              _c(
                "div",
                {
                  staticClass:
                    "card-header bg-theme text-light font-weight-bold"
                },
                [_vm._v("Register")]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "card-body bg-theme-light text-theme" },
                [
                  _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "label",
                      {
                        staticClass: "col-md-4 col-form-label text-md-right",
                        attrs: { for: "name" }
                      },
                      [_vm._v("Name")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("input", {
                        staticClass: "form-control focus-theme",
                        attrs: {
                          id: "name",
                          type: "text",
                          name: "name",
                          required: "",
                          autocomplete: "name",
                          autofocus: ""
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
                        attrs: { for: "email" }
                      },
                      [_vm._v("E-Mail Address")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("input", {
                        staticClass: "form-control focus-theme",
                        attrs: {
                          id: "email",
                          type: "email",
                          name: "email",
                          required: "",
                          autocomplete: "email"
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
                        staticClass: "form-control focus-theme",
                        attrs: {
                          id: "password",
                          type: "password",
                          name: "password",
                          required: "",
                          autocomplete: "new-password"
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
                        attrs: { for: "password-confirm" }
                      },
                      [_vm._v("Confirm Password")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("input", {
                        staticClass: "form-control focus-theme",
                        attrs: {
                          id: "password-confirm",
                          type: "password",
                          name: "password_confirmation",
                          required: "",
                          autocomplete: "new-password"
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row mb-0" }, [
                    _c("div", { staticClass: "col-md-6 offset-md-4" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-theme",
                          attrs: { type: "submit" }
                        },
                        [
                          _vm._v(
                            "\n                                    Register\n                                "
                          )
                        ]
                      )
                    ])
                  ])
                ]
              )
            ])
          ])
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
/* harmony import */ var _layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.vue?vue&type=script&lang=js& */ "./resources/js/components/layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
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

/***/ "./resources/js/components/layout.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/layout.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./layout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/components/views/dashboard.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/views/dashboard.vue ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dashboard_vue_vue_type_template_id_2a8e0b38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.vue?vue&type=template&id=2a8e0b38& */ "./resources/js/components/views/dashboard.vue?vue&type=template&id=2a8e0b38&");
/* harmony import */ var _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.vue?vue&type=script&lang=js& */ "./resources/js/components/views/dashboard.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dashboard_vue_vue_type_template_id_2a8e0b38___WEBPACK_IMPORTED_MODULE_0__["render"],
  _dashboard_vue_vue_type_template_id_2a8e0b38___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/views/dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/views/dashboard.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/views/dashboard.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/dashboard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/views/dashboard.vue?vue&type=template&id=2a8e0b38&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/views/dashboard.vue?vue&type=template&id=2a8e0b38& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_2a8e0b38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=template&id=2a8e0b38& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/dashboard.vue?vue&type=template&id=2a8e0b38&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_2a8e0b38___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_2a8e0b38___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/components/views/not-found.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/views/not-found.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _not_found_vue_vue_type_template_id_c8d41aa8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found.vue?vue&type=template&id=c8d41aa8& */ "./resources/js/components/views/not-found.vue?vue&type=template&id=c8d41aa8&");
/* harmony import */ var _not_found_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not-found.vue?vue&type=script&lang=js& */ "./resources/js/components/views/not-found.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _not_found_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _not_found_vue_vue_type_template_id_c8d41aa8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _not_found_vue_vue_type_template_id_c8d41aa8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/views/not-found.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/views/not-found.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/views/not-found.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_not_found_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./not-found.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/not-found.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_not_found_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/views/not-found.vue?vue&type=template&id=c8d41aa8&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/views/not-found.vue?vue&type=template&id=c8d41aa8& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_not_found_vue_vue_type_template_id_c8d41aa8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./not-found.vue?vue&type=template&id=c8d41aa8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/not-found.vue?vue&type=template&id=c8d41aa8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_not_found_vue_vue_type_template_id_c8d41aa8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_not_found_vue_vue_type_template_id_c8d41aa8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/views/products.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/views/products.vue ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _products_vue_vue_type_template_id_a8f3af20___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products.vue?vue&type=template&id=a8f3af20& */ "./resources/js/components/views/products.vue?vue&type=template&id=a8f3af20&");
/* harmony import */ var _products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products.vue?vue&type=script&lang=js& */ "./resources/js/components/views/products.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _products_vue_vue_type_template_id_a8f3af20___WEBPACK_IMPORTED_MODULE_0__["render"],
  _products_vue_vue_type_template_id_a8f3af20___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/views/products.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/views/products.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/views/products.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./products.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/products.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/views/products.vue?vue&type=template&id=a8f3af20&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/views/products.vue?vue&type=template&id=a8f3af20& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_template_id_a8f3af20___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./products.vue?vue&type=template&id=a8f3af20& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/products.vue?vue&type=template&id=a8f3af20&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_template_id_a8f3af20___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_template_id_a8f3af20___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/views/register.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/views/register.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_vue_vue_type_template_id_0837ce2f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.vue?vue&type=template&id=0837ce2f& */ "./resources/js/components/views/register.vue?vue&type=template&id=0837ce2f&");
/* harmony import */ var _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.vue?vue&type=script&lang=js& */ "./resources/js/components/views/register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _register_vue_vue_type_template_id_0837ce2f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _register_vue_vue_type_template_id_0837ce2f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/views/register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/views/register.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/views/register.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/views/register.vue?vue&type=template&id=0837ce2f&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/views/register.vue?vue&type=template&id=0837ce2f& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_0837ce2f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=template&id=0837ce2f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/register.vue?vue&type=template&id=0837ce2f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_0837ce2f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_0837ce2f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/middleware/auth.js":
/*!*****************************************!*\
  !*** ./resources/js/middleware/auth.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return auth; });
function auth(_ref) {
  var next = _ref.next,
      store = _ref.store;

  if (!store.getters.isLoggedin) {
    return next({
      name: 'login'
    });
  }

  return next();
}

/***/ }),

/***/ "./resources/js/middleware/guest.js":
/*!******************************************!*\
  !*** ./resources/js/middleware/guest.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return guest; });
function guest(_ref) {
  var next = _ref.next,
      store = _ref.store;

  if (store.getters.isLoggedin) {
    return next({
      name: 'dashboard'
    });
  }

  return next();
}

/***/ }),

/***/ "./resources/js/middleware/middlewarePipeline.js":
/*!*******************************************************!*\
  !*** ./resources/js/middleware/middlewarePipeline.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function middlewarePipeline(context, middleware, index) {
  var nextMiddleware = middleware[index];

  if (!nextMiddleware) {
    return context.next;
  }

  return function () {
    var nextPipeline = middlewarePipeline(context, middleware, index + 1);
    nextMiddleware(_objectSpread(_objectSpread({}, context), {}, {
      next: nextPipeline
    }));
  };
}

/* harmony default export */ __webpack_exports__["default"] = (middlewarePipeline);

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
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ "./resources/js/store.js");
/* harmony import */ var _middleware_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./middleware/auth */ "./resources/js/middleware/auth.js");
/* harmony import */ var _middleware_guest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./middleware/guest */ "./resources/js/middleware/guest.js");
/* harmony import */ var _middleware_middlewarePipeline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./middleware/middlewarePipeline */ "./resources/js/middleware/middlewarePipeline.js");
/* harmony import */ var _components_views_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/views/index */ "./resources/js/components/views/index.vue");
/* harmony import */ var _components_views_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/views/login */ "./resources/js/components/views/login.vue");
/* harmony import */ var _components_views_register__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/views/register */ "./resources/js/components/views/register.vue");
/* harmony import */ var _components_views_products__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/views/products */ "./resources/js/components/views/products.vue");
/* harmony import */ var _components_views_dashboard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/views/dashboard */ "./resources/js/components/views/dashboard.vue");
/* harmony import */ var _components_views_not_found__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/views/not-found */ "./resources/js/components/views/not-found.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]);






var routes = [{
  path: '/',
  name: 'index',
  component: _components_views_index__WEBPACK_IMPORTED_MODULE_6__["default"]
}, {
  path: '/login',
  name: 'login',
  component: _components_views_login__WEBPACK_IMPORTED_MODULE_7__["default"],
  meta: {
    middleware: [_middleware_guest__WEBPACK_IMPORTED_MODULE_4__["default"]]
  }
}, {
  path: '/register',
  name: 'register',
  component: _components_views_register__WEBPACK_IMPORTED_MODULE_8__["default"],
  meta: {
    middleware: [_middleware_guest__WEBPACK_IMPORTED_MODULE_4__["default"]]
  }
}, {
  path: '/dashboard',
  name: 'dashboard',
  component: _components_views_dashboard__WEBPACK_IMPORTED_MODULE_10__["default"],
  meta: {
    middleware: [_middleware_auth__WEBPACK_IMPORTED_MODULE_3__["default"]]
  }
}, {
  path: '/offers',
  component: _components_views_products__WEBPACK_IMPORTED_MODULE_9__["default"]
}, {
  path: '/nctb',
  component: _components_views_products__WEBPACK_IMPORTED_MODULE_9__["default"]
}, {
  path: '/job',
  component: _components_views_products__WEBPACK_IMPORTED_MODULE_9__["default"]
}, {
  path: '/literature',
  component: _components_views_products__WEBPACK_IMPORTED_MODULE_9__["default"]
}, {
  path: '/higher-study',
  component: _components_views_products__WEBPACK_IMPORTED_MODULE_9__["default"]
}, {
  path: '/academic',
  component: _components_views_products__WEBPACK_IMPORTED_MODULE_9__["default"]
}, {
  path: '/search',
  component: _components_views_products__WEBPACK_IMPORTED_MODULE_9__["default"]
}, {
  path: '/about-us',
  component: _components_views_products__WEBPACK_IMPORTED_MODULE_9__["default"]
}, {
  path: '/terms-of-services',
  component: _components_views_products__WEBPACK_IMPORTED_MODULE_9__["default"]
}, {
  path: '*',
  component: _components_views_not_found__WEBPACK_IMPORTED_MODULE_11__["default"]
}];
var router = new vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]({
  mode: 'history',
  linkActiveClass: 'active',
  routes: routes
});
router.beforeEach(function (to, from, next) {
  if (!to.meta.middleware) {
    return next();
  }

  var middleware = to.meta.middleware;
  var context = {
    to: to,
    from: from,
    next: next,
    store: _store__WEBPACK_IMPORTED_MODULE_2__["default"]
  };
  return middleware[0](_objectSpread(_objectSpread({}, context), {}, {
    next: Object(_middleware_middlewarePipeline__WEBPACK_IMPORTED_MODULE_5__["default"])(context, middleware, 1)
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (router);

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
    user: {},
    isError: false,
    errorMessage: '',
    isSuccess: false,
    successMessage: ''
  },
  getters: {
    isLoggedin: function isLoggedin(state, getters) {
      return state.isLoggedin;
    },
    user: function user(state, getters) {
      return state.user;
    }
  },
  actions: {
    login: function login(context, data) {
      context.commit("login", data);
    },
    logout: function logout(context) {
      context.commit("logout");
    },
    setUser: function setUser(context, data) {
      context.commit("setUser", data);
    }
  },
  mutations: {
    setUser: function setUser(state, data) {
      state.isLoggedin = true;
      state.user = data;
    },
    login: function login(state, data) {
      state.isLoggedin = true;
      state.user = data;
    },
    logout: function logout(state) {
      state.isLoggedin = false;
      state.user = {};
    }
  }
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