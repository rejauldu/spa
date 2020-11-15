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
//
//
//
//
//
//
//
//
//
//
//
//
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
        if (response.data && response.data.status_code == 200) {
          _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch("setUser", response.data);
        } else if (response.data && response.data.status_code == 401) {
          _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch("changeLogin", "1");
        } else {
          _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch("changeLogin", "0");
        }
      })["catch"](function (error) {
        _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch("changeLogin", "0");
      });
    },
    logout: function logout() {
      _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch("changeLoading", true);
      axios.post('/api/logout').then(function (response) {
        _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch("logout");
        _router__WEBPACK_IMPORTED_MODULE_0__["default"].push({
          name: 'login'
        });
      })["catch"](function (error) {
        _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch("changeLogin", "1");
        _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch("changeLoading", false);
      });
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-awesome-swiper */ "./node_modules/vue-awesome-swiper/dist/vue-awesome-swiper.js");
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_css_swiper_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/css/swiper.css */ "./node_modules/swiper/css/swiper.css");
/* harmony import */ var swiper_css_swiper_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swiper_css_swiper_css__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'carrousel',
  components: {
    Swiper: vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_0__["Swiper"],
    SwiperSlide: vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_0__["SwiperSlide"]
  },
  data: function data() {
    return {
      swiperOptions: {
        effect: 'flip',
        grabCursor: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        loop: true
      }
    };
  }
});

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
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      form: {
        email: '',
        password: ''
      },
      error: ''
    };
  },
  methods: {
    login: function login() {
      var _this2 = this;

      _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch("changeLoading", true);

      var _this = this;

      axios.get('/sanctum/csrf-cookie').then(function (response) {
        axios.post('/api/login', _this2.form).then(function (response) {
          _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch("changeLoading", false);

          if (response.data && response.data.status_code == 200) {
            _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch("login", response.data);
            _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch("changeEmailVerified", "1");
            _router__WEBPACK_IMPORTED_MODULE_0__["default"].push({
              name: 'dashboard'
            });
          } else if (response.data && response.data.status_code == 401) {
            _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch("login", "1");
            _router__WEBPACK_IMPORTED_MODULE_0__["default"].push({
              name: 'verify'
            });
          }
        })["catch"](function (error) {
          _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch("changeLoading", false);

          if (error.response && error.response.status == 400) {
            _this.error = error.response.deta.message;
          } else {
            _this.error = "An error occurred. Check your internet connection.";
          }
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
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store */ "./resources/js/store.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router */ "./resources/js/router.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      },
      error: ''
    };
  },
  methods: {
    register: function register() {
      var _this2 = this;

      var _this = this;

      _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch("changeLoading", true);
      axios.get('/sanctum/csrf-cookie').then(function (response) {
        axios.post('/api/register', _this2.form).then(function (response) {
          if (response.data.status_code == 201) {
            _router__WEBPACK_IMPORTED_MODULE_1__["default"].push({
              name: 'login'
            });
          }
        })["catch"](function (error) {
          _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch("changeLoading", false);

          if (error.response && error.response.status == 400) {
            _this.error = error.response.deta.message;
          } else if (error.response && error.response.status == 500) {
            _this.error = 'Registration successful. Please resend the verification email.';
          } else {
            _this.error = "An error occurred. Check your internet connection.";
          }
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/verify.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/verify.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store */ "./resources/js/store.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router */ "./resources/js/router.js");
//
//
//
//
//
//
//
//
//
//
//
//
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
      error: ''
    };
  },
  methods: {
    resend: function resend() {
      var _this2 = this;

      var _this = this;

      _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch("changeLoading", true);
      axios.get('/sanctum/csrf-cookie').then(function (response) {
        axios.post('/api/resend/email', _this2.form).then(function (response) {
          _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch("changeLoading", false);

          if (response.data.status_code == 200) {
            _this.error = response.data.message;
          } else if (response.data.status_code == 201) {
            _this.error = 'A fresh verification link has been sent to your email address.';
          } else {
            _this.error = 'Please login first';
          }
        })["catch"](function (error) {
          _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch("changeLoading", false);

          if (error.response && error.response.status == 500) {
            _this.error = "Sorry. We can't send the verification email right now. Please, try again later.";
          }
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/index.vue?vue&type=style&index=0&id=6e7ee076&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/index.vue?vue&type=style&index=0&id=6e7ee076&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.bg-home[data-v-6e7ee076] {\n    background-color: #c8d7e6;\n}\n.swiper[data-v-6e7ee076] {\n    width: 100%;\n    margin:2rem;\n}\n.swiper-slide[data-v-6e7ee076] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    font-weight: bold;\n    font-size:20px;\n    background-color: transparent;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/index.vue?vue&type=style&index=0&id=6e7ee076&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/index.vue?vue&type=style&index=0&id=6e7ee076&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=6e7ee076&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/index.vue?vue&type=style&index=0&id=6e7ee076&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

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
                      _vm._v(" "),
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
                              "M420.75,178.5h-25.5v-51c0-71.4-56.1-127.5-127.5-127.5c-71.4,0-127.5,56.1-127.5,127.5v51h-25.5c-28.05,0-51,22.95-51,51 v255c0,28.05,22.95,51,51,51h306c28.05,0,51-22.95,51-51v-255C471.75,201.45,448.8,178.5,420.75,178.5z M267.75,408 c-28.05,0-51-22.95-51-51s22.95-51,51-51s51,22.95,51,51S295.8,408,267.75,408z M346.8,178.5H188.7v-51 c0-43.35,35.7-79.05,79.05-79.05c43.35,0,79.05,35.7,79.05,79.05V178.5z"
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
                { staticClass: "text-center border" },
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
                              "list-group-item border-0 py-1 bg-transparent text-white",
                            attrs: { to: "tel:8801924974960" }
                          },
                          [
                            _c(
                              "svg",
                              {
                                attrs: {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  viewBox: "0 0 512 512",
                                  height: "14"
                                }
                              },
                              [
                                _c("path", {
                                  attrs: {
                                    fill: "currentColor",
                                    d:
                                      "M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                                  }
                                })
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
                              "list-group-item border-0 py-1 bg-transparent text-white",
                            attrs: { to: "mailto:rejauldu@gmail.com" }
                          },
                          [
                            _c(
                              "svg",
                              {
                                attrs: {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  viewBox: "0 0 512 512",
                                  height: "14"
                                }
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
                          _c("b-col", {
                            staticClass: "text-xl-right py-1 py-xl-3",
                            attrs: { cols: "12", xl: "6" }
                          }),
                          _vm._v(" "),
                          _c("b-col", {
                            staticClass: "text-xl-left py-1 py-xl-3",
                            attrs: { cols: "12", xl: "6" }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "bg-dark-transparent text-white py-4" },
                [
                  _c(
                    "b-col",
                    { attrs: { cols: "12", lg: "9" } },
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            {
                              staticClass: "py-3",
                              attrs: { cols: "12", lg: "6" }
                            },
                            [
                              _c(
                                "b-row",
                                [
                                  _c(
                                    "b-col",
                                    {
                                      staticClass: "pr-0",
                                      attrs: {
                                        cols: "4",
                                        sm: "2",
                                        md: "1",
                                        lg: "3",
                                        xl: "2"
                                      }
                                    },
                                    [
                                      _c("img", {
                                        staticClass: "w-100",
                                        attrs: {
                                          src: "assets/home/support.webp"
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    {
                                      attrs: {
                                        cols: "8",
                                        sm: "10",
                                        md: "11",
                                        lg: "9",
                                        xl: "10"
                                      }
                                    },
                                    [
                                      _c("h5", [
                                        _vm._v("NEED SUPPORT? CONTACT US")
                                      ]),
                                      _vm._v(" "),
                                      _c("div", [
                                        _vm._v("Our dedicated ONBIPONI"),
                                        _c("sup", [_c("small", [_vm._v("®")])]),
                                        _vm._v(" experts are here to help")
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        [
                                          _c(
                                            "svg",
                                            {
                                              attrs: {
                                                xmlns:
                                                  "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 512 512",
                                                height: "14"
                                              }
                                            },
                                            [
                                              _c("path", {
                                                attrs: {
                                                  fill: "currentColor",
                                                  d:
                                                    "M512 464c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V200.724a48 48 0 0 1 18.387-37.776c24.913-19.529 45.501-35.365 164.2-121.511C199.412 29.17 232.797-.347 256 .003c23.198-.354 56.596 29.172 73.413 41.433 118.687 86.137 139.303 101.995 164.2 121.512A48 48 0 0 1 512 200.724V464zm-65.666-196.605c-2.563-3.728-7.7-4.595-11.339-1.907-22.845 16.873-55.462 40.705-105.582 77.079-16.825 12.266-50.21 41.781-73.413 41.43-23.211.344-56.559-29.143-73.413-41.43-50.114-36.37-82.734-60.204-105.582-77.079-3.639-2.688-8.776-1.821-11.339 1.907l-9.072 13.196a7.998 7.998 0 0 0 1.839 10.967c22.887 16.899 55.454 40.69 105.303 76.868 20.274 14.781 56.524 47.813 92.264 47.573 35.724.242 71.961-32.771 92.263-47.573 49.85-36.179 82.418-59.97 105.303-76.868a7.998 7.998 0 0 0 1.839-10.967l-9.071-13.196z"
                                                }
                                              })
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "router-link",
                                            {
                                              staticClass: "text-white",
                                              attrs: { to: "/contact-us" }
                                            },
                                            [_vm._v("Contact Us")]
                                          )
                                        ],
                                        1
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            {
                              staticClass: "py-3",
                              attrs: { cols: "12", lg: "6" }
                            },
                            [
                              _c("h5", [
                                _vm._v("SUBSCRIBE TO ONBIPONI"),
                                _c("sup", [_c("small", [_vm._v("®")])]),
                                _vm._v(" SHOP EMAILS")
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "input-group" }, [
                                _c("input", {
                                  staticClass: "form-control height-40",
                                  attrs: {
                                    type: "text",
                                    placeholder: "Your Email"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "input-group-append" },
                                  [
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "input-group-text bg-white text-black height-40"
                                      },
                                      [_vm._v("Subscribe")]
                                    )
                                  ]
                                )
                              ])
                            ]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("hr", { staticClass: "w-100 border-light d-lg-none" }),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "py-3",
                      class: { "border-left": _vm.$store.state.width >= 992 },
                      attrs: { cols: "12", lg: "3" }
                    },
                    [
                      _c("h5", [_vm._v("FOLLOW US")]),
                      _vm._v(" "),
                      _c(
                        "p",
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "text-facebook mx-2",
                              attrs: { to: "https://facebook.com/onbiponi" }
                            },
                            [
                              _c(
                                "svg",
                                {
                                  attrs: {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 512 512",
                                    height: "30"
                                  }
                                },
                                [
                                  _c("path", {
                                    attrs: {
                                      fill: "currentColor",
                                      d:
                                        "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                                    }
                                  })
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "router-link",
                            {
                              staticClass: "text-twitter mx-2",
                              attrs: { to: "https://twitter.com/onbiponi" }
                            },
                            [
                              _c(
                                "svg",
                                {
                                  attrs: {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 512 512",
                                    height: "30"
                                  }
                                },
                                [
                                  _c("path", {
                                    attrs: {
                                      fill: "currentColor",
                                      d:
                                        "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                                    }
                                  })
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "router-link",
                            {
                              staticClass: "text-youtube mx-2",
                              attrs: { to: "https://youtube.com/onbiponi" }
                            },
                            [
                              _c(
                                "svg",
                                {
                                  attrs: {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 576 512",
                                    height: "30"
                                  }
                                },
                                [
                                  _c("path", {
                                    attrs: {
                                      fill: "currentColor",
                                      d:
                                        "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                                    }
                                  })
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "router-link",
                            {
                              staticClass: "text-instagram mx-2",
                              attrs: { to: "https://instagram.com/onbiponi" }
                            },
                            [
                              _c(
                                "svg",
                                {
                                  attrs: {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 448 512",
                                    height: "30"
                                  }
                                },
                                [
                                  _c("path", {
                                    attrs: {
                                      fill: "currentColor",
                                      d:
                                        "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                                    }
                                  })
                                ]
                              )
                            ]
                          )
                        ],
                        1
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
      ),
      _vm._v(" "),
      _vm.$store.getters.isLoading
        ? _c(
            "b-row",
            {
              staticClass:
                "vh overflow-hidden bg-dark-transparent position-fixed top-0 left-0 right-0 z-index-9999"
            },
            [
              _c("i", { staticClass: "position-center text-white" }, [
                _c(
                  "svg",
                  {
                    staticClass: "r-spin",
                    attrs: {
                      height: "100",
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "200px",
                      viewBox: "0 0 100 100",
                      preserveAspectRatio: "xMidYMid"
                    }
                  },
                  [
                    _c("path", {
                      attrs: {
                        fill: "currentColor",
                        d: "M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50"
                      }
                    })
                  ]
                )
              ]),
              _vm._v(" "),
              _c("i", { staticClass: "position-center text-white" }, [
                _c(
                  "svg",
                  { attrs: { viewBox: "0 0 535.5 535.5", width: "32px" } },
                  [
                    _c("g", { attrs: { id: "lock" } }, [
                      _c("path", {
                        attrs: {
                          fill: "currentColor",
                          d:
                            "M420.75,178.5h-25.5v-51c0-71.4-56.1-127.5-127.5-127.5c-71.4,0-127.5,56.1-127.5,127.5v51h-25.5c-28.05,0-51,22.95-51,51\n\t\t\t\t\t\t\tv255c0,28.05,22.95,51,51,51h306c28.05,0,51-22.95,51-51v-255C471.75,201.45,448.8,178.5,420.75,178.5z M267.75,408\n\t\t\t\t\t\t\tc-28.05,0-51-22.95-51-51s22.95-51,51-51s51,22.95,51,51S295.8,408,267.75,408z M346.8,178.5H188.7v-51\n\t\t\t\t\t\t\tc0-43.35,35.7-79.05,79.05-79.05c43.35,0,79.05,35.7,79.05,79.05V178.5z"
                        }
                      })
                    ])
                  ]
                )
              ])
            ]
          )
        : _vm._e()
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/index.vue?vue&type=template&id=6e7ee076&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/index.vue?vue&type=template&id=6e7ee076&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
      _c("b-row", { staticClass: "bg-home" }, [
        _c("div", { staticClass: "position-relative w-100" }, [
          _vm.$store.state.width >= 768
            ? _c("div", [
                _c("img", {
                  staticClass: "w-100",
                  attrs: { src: "assets/home/cover.webp" }
                })
              ])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "col-12 col-md-6 col-lg-5 col-xl-4",
              class: {
                "position-center-v ml-5": _vm.$store.state.width >= 768,
                "p-5 text-center": _vm.$store.state.width < 768
              }
            },
            [
              _c("h1", { staticClass: "display-5" }, [_vm._v("Trim the tree")]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "Get into the spirit with new Santa with new Reindeer mini-build ornaments"
                )
              ]),
              _vm._v(" "),
              _c("a", { staticClass: "btn btn-dark", attrs: { href: "#" } }, [
                _vm._v("Continue shopping "),
                _c(
                  "svg",
                  {
                    staticClass: "ml-3",
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "24",
                      height: "24"
                    }
                  },
                  [
                    _c("path", {
                      attrs: {
                        stroke: "currentColor",
                        d:
                          "M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
                      }
                    })
                  ]
                )
              ])
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("b-row", [
        _c(
          "div",
          { staticClass: "mx-auto mt-4" },
          [
            _c(
              "router-link",
              {
                staticClass: "width-80 d-inline-block mx-3",
                attrs: { to: "/new" }
              },
              [
                _c("img", {
                  attrs: { src: "assets/home/new.webp", alt: "Card image" }
                }),
                _c("br"),
                _vm._v(" "),
                _c(
                  "p",
                  { staticClass: "text-center font-11 mt-2 text-black" },
                  [_vm._v("New")]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "router-link",
              {
                staticClass: "width-80 d-inline-block mx-3",
                attrs: { to: "/exclusives" }
              },
              [
                _c("img", {
                  attrs: {
                    src: "assets/home/exclusives.webp",
                    alt: "Card image"
                  }
                }),
                _vm._v(" "),
                _c(
                  "p",
                  { staticClass: "text-center font-11 mt-2 text-black" },
                  [_vm._v("Exclusives")]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "router-link",
              {
                staticClass: "width-80 d-inline-block mx-3",
                attrs: { to: "/offers" }
              },
              [
                _c("img", {
                  attrs: { src: "assets/home/offers.webp", alt: "Card image" }
                }),
                _vm._v(" "),
                _c(
                  "p",
                  { staticClass: "text-center font-11 mt-2 text-black" },
                  [_vm._v("Offers")]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "router-link",
              {
                staticClass: "width-80 d-inline-block mx-3",
                attrs: { to: "/harry-potter" }
              },
              [
                _c("img", {
                  attrs: {
                    src: "assets/home/harry-potter.webp",
                    alt: "Card image"
                  }
                }),
                _vm._v(" "),
                _c(
                  "p",
                  { staticClass: "text-center font-11 mt-2 text-black" },
                  [
                    _vm._v("Harry Potter"),
                    _c("sup", [_c("small", [_vm._v("TM")])])
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "router-link",
              {
                staticClass: "width-80 d-inline-block mx-3",
                attrs: { to: "/technique" }
              },
              [
                _c("img", {
                  attrs: { src: "assets/home/new.webp", alt: "Card image" }
                }),
                _vm._v(" "),
                _c(
                  "p",
                  { staticClass: "text-center font-11 mt-2 text-black" },
                  [
                    _vm._v("Technique"),
                    _c("sup", [_c("small", [_vm._v("TM")])])
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "router-link",
              {
                staticClass: "width-80 d-inline-block mx-3",
                attrs: { to: "/learn-more" }
              },
              [
                _c("img", {
                  attrs: {
                    src: "assets/home/learn-more.webp",
                    alt: "Card image"
                  }
                }),
                _vm._v(" "),
                _c(
                  "p",
                  { staticClass: "text-center font-11 mt-2 text-black" },
                  [_vm._v("Learn more")]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "router-link",
              {
                staticClass: "width-80 d-inline-block mx-3",
                attrs: { to: "/pick-a-brick" }
              },
              [
                _c("img", {
                  attrs: {
                    src: "assets/home/pick-a-brick.webp",
                    alt: "Card image"
                  }
                }),
                _vm._v(" "),
                _c(
                  "p",
                  { staticClass: "text-center font-11 mt-2 text-black" },
                  [_vm._v("Pick a brick")]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "router-link",
              {
                staticClass: "width-80 d-inline-block mx-3",
                attrs: { to: "/vip" }
              },
              [
                _c("img", {
                  attrs: { src: "assets/home/vip.webp", alt: "Card image" }
                }),
                _vm._v(" "),
                _c(
                  "p",
                  { staticClass: "text-center font-11 mt-2 text-black" },
                  [_vm._v("VIP")]
                )
              ]
            )
          ],
          1
        )
      ])
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
  return _c("div", { staticClass: "bg-theme-light w-100" }, [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row justify-content-center" }, [
        _c("div", { staticClass: "col-md-9 col-lg-7 col-xl-5 vh-55" }, [
          _c("div", { staticClass: "position-center-v left-0 right-0" }, [
            _c(
              "div",
              { staticClass: "card" },
              [
                _vm._m(0),
                _vm._v(" "),
                _c("b-container", { staticClass: "card-body" }, [
                  _vm.error
                    ? _c(
                        "div",
                        { staticClass: "alert alert-danger fade show" },
                        [
                          _c("strong", [_vm._v("Wrong!")]),
                          _vm._v(" "),
                          _c("span", [_vm._v(_vm._s(_vm.error))])
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
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
                            staticClass:
                              "col-md-4 col-form-label text-md-right",
                            attrs: { for: "email" }
                          },
                          [_vm._v("E-Mail Address")]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-7" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.email,
                                expression: "form.email"
                              }
                            ],
                            staticClass:
                              "form-control focus-theme border-theme",
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
                            staticClass:
                              "col-md-4 col-form-label text-md-right",
                            attrs: { for: "password" }
                          },
                          [_vm._v("Password")]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-7" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.password,
                                expression: "form.password"
                              }
                            ],
                            staticClass:
                              "form-control focus-theme border-theme",
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
                                _vm.$set(
                                  _vm.form,
                                  "password",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group row" }, [
                        _c("div", { staticClass: "col-md-6 offset-md-4" }, [
                          _c("div", { staticClass: "form-check" }, [
                            _c("input", {
                              staticClass: "form-check-input focus-theme",
                              attrs: {
                                type: "checkbox",
                                name: "remember",
                                id: "remember"
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "label",
                              {
                                staticClass: "form-check-label",
                                attrs: { for: "remember" }
                              },
                              [
                                _vm._v(
                                  "\n                                                Remember Me\n                                            "
                                )
                              ]
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group row mb-0" }, [
                        _c("div", { staticClass: "col-md-8 offset-md-4" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-theme",
                              attrs: { type: "submit" }
                            },
                            [
                              _vm._v(
                                "\n                                            Login\n                                        "
                              )
                            ]
                          )
                        ])
                      ])
                    ]
                  )
                ])
              ],
              1
            )
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
    return _c(
      "div",
      {
        staticClass: "card-header bg-white border-0 text-center display-6 mt-2"
      },
      [_c("strong", [_vm._v("Login")])]
    )
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
  return _c("div", { staticClass: "bg-theme-light w-100" }, [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row justify-content-center" }, [
        _c("div", { staticClass: "col-md-9 col-lg-7 col-xl-5 vh-55" }, [
          _c("div", { staticClass: "position-center-v left-0 right-0" }, [
            _c("div", { staticClass: "card" }, [
              _c(
                "div",
                {
                  staticClass:
                    "card-header bg-white border-0 text-center display-6 mt-2"
                },
                [_vm._v("Register")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _vm.error
                  ? _c("div", { staticClass: "alert alert-danger" }, [
                      _c("strong", [_vm._v("Wrong!")]),
                      _vm._v(" "),
                      _c("span", [_vm._v(_vm._s(_vm.error))])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "form",
                  {
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.register()
                      }
                    }
                  },
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
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.name,
                              expression: "form.name"
                            }
                          ],
                          staticClass: "form-control focus-theme",
                          attrs: {
                            id: "name",
                            type: "text",
                            required: "",
                            autocomplete: "name",
                            autofocus: ""
                          },
                          domProps: { value: _vm.form.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "name", $event.target.value)
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
                          staticClass: "form-control focus-theme",
                          attrs: {
                            id: "email",
                            type: "email",
                            required: "",
                            autocomplete: "email"
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
                          staticClass: "form-control focus-theme",
                          attrs: {
                            id: "password",
                            type: "password",
                            required: "",
                            autocomplete: "new-password"
                          },
                          domProps: { value: _vm.form.password },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "password",
                                $event.target.value
                              )
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
                          attrs: { for: "password-confirm" }
                        },
                        [_vm._v("Confirm Password")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.password_confirmation,
                              expression: "form.password_confirmation"
                            }
                          ],
                          staticClass: "form-control focus-theme",
                          attrs: {
                            id: "password-confirm",
                            type: "password",
                            required: "",
                            autocomplete: "new-password"
                          },
                          domProps: { value: _vm.form.password_confirmation },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "password_confirmation",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _vm._m(0)
                  ]
                )
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
    return _c("div", { staticClass: "form-group row mb-0" }, [
      _c("div", { staticClass: "col-md-6 offset-md-4" }, [
        _c(
          "button",
          { staticClass: "btn btn-theme", attrs: { type: "submit" } },
          [
            _vm._v(
              "\n                                            Register\n                                        "
            )
          ]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/verify.vue?vue&type=template&id=0c3b4bf6&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/verify.vue?vue&type=template&id=0c3b4bf6& ***!
  \***************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "bg-theme-light w-100" }, [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row justify-content-center" }, [
        _c("div", { staticClass: "col-md-9 col-lg-7 col-xl-5 vh-55" }, [
          _c("div", { staticClass: "position-center-v left-0 right-0" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-body" }, [
                _vm.error
                  ? _c("div", { staticClass: "alert alert-success" }, [
                      _vm._v(
                        "\n                                " +
                          _vm._s(_vm.error) +
                          "\n                            "
                      )
                    ])
                  : _vm._e(),
                _vm._v(
                  "\n                            Before proceeding, please check your email for a verification link.\n                            If you did not receive the email, "
                ),
                _c(
                  "a",
                  {
                    staticClass: "btn-link",
                    attrs: { href: "#" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.resend()
                      }
                    }
                  },
                  [_vm._v("click here to request another")]
                )
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
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
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-awesome-swiper */ "./node_modules/vue-awesome-swiper/dist/vue-awesome-swiper.js");
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_css_swiper_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css/swiper.css */ "./node_modules/swiper/css/swiper.css");
/* harmony import */ var swiper_css_swiper_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_css_swiper_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./router */ "./resources/js/router.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store */ "./resources/js/store.js");
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");



vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(bootstrap_vue_src_components_layout__WEBPACK_IMPORTED_MODULE_1__["LayoutPlugin"]);
 // require styles


vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_2___default.a
/* { default global options } */
);


axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://spa';
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('layout', __webpack_require__(/*! ./components/layout.vue */ "./resources/js/components/layout.vue")["default"]);
var app = new vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  el: '#app',
  router: _router__WEBPACK_IMPORTED_MODULE_4__["default"],
  store: _store__WEBPACK_IMPORTED_MODULE_5__["default"]
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
/* harmony import */ var _index_vue_vue_type_template_id_6e7ee076_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=6e7ee076&scoped=true& */ "./resources/js/components/views/index.vue?vue&type=template&id=6e7ee076&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/views/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_6e7ee076_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=6e7ee076&scoped=true&lang=css& */ "./resources/js/components/views/index.vue?vue&type=style&index=0&id=6e7ee076&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_6e7ee076_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_6e7ee076_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6e7ee076",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/views/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/views/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/views/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/views/index.vue?vue&type=style&index=0&id=6e7ee076&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/views/index.vue?vue&type=style&index=0&id=6e7ee076&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6e7ee076_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=6e7ee076&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/index.vue?vue&type=style&index=0&id=6e7ee076&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6e7ee076_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6e7ee076_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6e7ee076_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6e7ee076_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6e7ee076_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/views/index.vue?vue&type=template&id=6e7ee076&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/views/index.vue?vue&type=template&id=6e7ee076&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6e7ee076_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=6e7ee076&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/index.vue?vue&type=template&id=6e7ee076&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6e7ee076_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6e7ee076_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/components/views/verify.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/views/verify.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _verify_vue_vue_type_template_id_0c3b4bf6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verify.vue?vue&type=template&id=0c3b4bf6& */ "./resources/js/components/views/verify.vue?vue&type=template&id=0c3b4bf6&");
/* harmony import */ var _verify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verify.vue?vue&type=script&lang=js& */ "./resources/js/components/views/verify.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _verify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _verify_vue_vue_type_template_id_0c3b4bf6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _verify_vue_vue_type_template_id_0c3b4bf6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/views/verify.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/views/verify.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/views/verify.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_verify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./verify.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/verify.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_verify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/views/verify.vue?vue&type=template&id=0c3b4bf6&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/views/verify.vue?vue&type=template&id=0c3b4bf6& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_verify_vue_vue_type_template_id_0c3b4bf6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./verify.vue?vue&type=template&id=0c3b4bf6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/verify.vue?vue&type=template&id=0c3b4bf6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_verify_vue_vue_type_template_id_0c3b4bf6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_verify_vue_vue_type_template_id_0c3b4bf6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/middleware/not-verified.js":
/*!*************************************************!*\
  !*** ./resources/js/middleware/not-verified.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return auth; });
function auth(_ref) {
  var next = _ref.next,
      store = _ref.store;

  if (store.getters.isEmailVerified) {
    return next({
      name: 'dashboard'
    });
  }

  return next();
}

/***/ }),

/***/ "./resources/js/middleware/verified.js":
/*!*********************************************!*\
  !*** ./resources/js/middleware/verified.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return auth; });
function auth(_ref) {
  var next = _ref.next,
      store = _ref.store;

  if (!store.getters.isEmailVerified) {
    return next({
      name: 'verify'
    });
  }

  return next();
}

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
/* harmony import */ var _middleware_verified__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./middleware/verified */ "./resources/js/middleware/verified.js");
/* harmony import */ var _middleware_not_verified__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./middleware/not-verified */ "./resources/js/middleware/not-verified.js");
/* harmony import */ var _middleware_guest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./middleware/guest */ "./resources/js/middleware/guest.js");
/* harmony import */ var _middleware_middlewarePipeline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./middleware/middlewarePipeline */ "./resources/js/middleware/middlewarePipeline.js");
/* harmony import */ var _components_views_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/views/index */ "./resources/js/components/views/index.vue");
/* harmony import */ var _components_views_login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/views/login */ "./resources/js/components/views/login.vue");
/* harmony import */ var _components_views_register__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/views/register */ "./resources/js/components/views/register.vue");
/* harmony import */ var _components_views_products__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/views/products */ "./resources/js/components/views/products.vue");
/* harmony import */ var _components_views_dashboard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/views/dashboard */ "./resources/js/components/views/dashboard.vue");
/* harmony import */ var _components_views_verify__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/views/verify */ "./resources/js/components/views/verify.vue");
/* harmony import */ var _components_views_not_found__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/views/not-found */ "./resources/js/components/views/not-found.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]);







var routes = [{
  path: '/',
  name: 'index',
  component: _components_views_index__WEBPACK_IMPORTED_MODULE_8__["default"]
}, {
  path: '/login',
  name: 'login',
  component: _components_views_login__WEBPACK_IMPORTED_MODULE_9__["default"],
  meta: {
    middleware: [_middleware_guest__WEBPACK_IMPORTED_MODULE_6__["default"]]
  }
}, {
  path: '/register',
  name: 'register',
  component: _components_views_register__WEBPACK_IMPORTED_MODULE_10__["default"],
  meta: {
    middleware: [_middleware_guest__WEBPACK_IMPORTED_MODULE_6__["default"]]
  }
}, {
  path: '/dashboard',
  name: 'dashboard',
  component: _components_views_dashboard__WEBPACK_IMPORTED_MODULE_12__["default"],
  meta: {
    middleware: [_middleware_auth__WEBPACK_IMPORTED_MODULE_3__["default"], _middleware_verified__WEBPACK_IMPORTED_MODULE_4__["default"]]
  }
}, {
  path: '/offers',
  component: _components_views_products__WEBPACK_IMPORTED_MODULE_11__["default"]
}, {
  path: '/nctb',
  component: _components_views_products__WEBPACK_IMPORTED_MODULE_11__["default"]
}, {
  path: '/job',
  component: _components_views_products__WEBPACK_IMPORTED_MODULE_11__["default"]
}, {
  path: '/literature',
  component: _components_views_products__WEBPACK_IMPORTED_MODULE_11__["default"]
}, {
  path: '/higher-study',
  component: _components_views_products__WEBPACK_IMPORTED_MODULE_11__["default"]
}, {
  path: '/academic',
  component: _components_views_products__WEBPACK_IMPORTED_MODULE_11__["default"]
}, {
  path: '/search',
  component: _components_views_products__WEBPACK_IMPORTED_MODULE_11__["default"]
}, {
  path: '/about-us',
  component: _components_views_products__WEBPACK_IMPORTED_MODULE_11__["default"]
}, {
  path: '/verify',
  name: 'verify',
  component: _components_views_verify__WEBPACK_IMPORTED_MODULE_13__["default"],
  meta: {
    middleware: [_middleware_auth__WEBPACK_IMPORTED_MODULE_3__["default"], _middleware_not_verified__WEBPACK_IMPORTED_MODULE_5__["default"]]
  }
}, {
  path: '/terms-of-services',
  component: _components_views_products__WEBPACK_IMPORTED_MODULE_11__["default"]
}, {
  path: '*',
  component: _components_views_not_found__WEBPACK_IMPORTED_MODULE_14__["default"]
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
    next: Object(_middleware_middlewarePipeline__WEBPACK_IMPORTED_MODULE_7__["default"])(context, middleware, 1)
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
    isLoggedin: JSON.parse(sessionStorage.isLoggedin || "false"),
    isEmailVerified: JSON.parse(sessionStorage.isEmailVerified || "false"),
    user: {},
    isError: false,
    errorMessage: '',
    isSuccess: false,
    successMessage: '',
    loading: false,
    width: window.innerWidth,
    height: window.innerheight
  },
  getters: {
    isLoggedin: function isLoggedin(state) {
      return state.isLoggedin;
    },
    isEmailVerified: function isEmailVerified(state) {
      return state.isEmailVerified;
    },
    user: function user(state) {
      return state.user;
    },
    isLoading: function isLoading(state) {
      return state.loading;
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
    },
    changeLogin: function changeLogin(context, data) {
      context.commit("changeLogin", data);
    },
    changeEmailVerified: function changeEmailVerified(context, data) {
      context.commit("changeEmailVerified", data);
    },
    changeLoading: function changeLoading(context, data) {
      context.commit("changeLoading", data);
    }
  },
  mutations: {
    setUser: function setUser(state, data) {
      state.isLoggedin = true;
      sessionStorage.isLoggedin = "1";
      state.isEmailVerified = true;
      sessionStorage.isEmailVerified = "1";
      state.user = data;
      state.loading = false;
    },
    login: function login(state, data) {
      state.isLoggedin = true;
      sessionStorage.isLoggedin = "1";
      state.user = data;
      state.loading = false;
    },
    logout: function logout(state) {
      state.isLoggedin = false;
      sessionStorage.isLoggedin = "0";
      state.isEmailVerified = false;
      sessionStorage.isEmailVerified = "0";
      state.user = {};
      state.loading = false;
    },
    changeLogin: function changeLogin(state, data) {
      state.isLoggedin = JSON.parse(data);
      sessionStorage.isLoggedin = JSON.parse(data);
      state.loading = false;
    },
    changeEmailVerified: function changeEmailVerified(state, data) {
      state.isEmailVerified = JSON.parse(data);
      sessionStorage.isEmailVerified = JSON.parse(data);
      state.loading = false;
    },
    changeLoading: function changeLoading(state, data) {
      state.loading = data;
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