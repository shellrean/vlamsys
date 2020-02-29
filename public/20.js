(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/banksoal/SoalBanksoal.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/banksoal/SoalBanksoal.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_AudioPlayer_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/AudioPlayer.vue */ "./resources/js/components/AudioPlayer.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'SoalBanksoal',
  components: {
    AudioPlayer: _components_AudioPlayer_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  created: function created() {
    this.getAllSoal();
  },
  data: function data() {
    return {
      fields: ['index', {
        key: 'show_details',
        label: 'Detail'
      }, {
        key: 'dibuat',
        label: 'Dibuat pada'
      }, {
        key: 'actions',
        label: 'Aksi'
      }],
      search: '',
      isBusy: true
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('soal', {
    soals: function soals(state) {
      return state.soals;
    }
  }), {
    page: {
      get: function get() {
        return this.$store.state.soal.page;
      },
      set: function set(val) {
        this.$store.commit('soal/SET_PAGE', val);
      }
    }
  }),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('soal', ['getSoals', 'removeSoal']), {
    getAllSoal: function getAllSoal() {
      var _this = this;

      this.getSoals({
        banksoal_id: this.$route.params.banksoal_id
      }).then(function () {
        _this.isBusy = false;
      });
    },
    deleteBanksoal: function deleteBanksoal(id) {
      var _this2 = this;

      this.$swal({
        title: 'Kamu Yakin?',
        text: "Tindakan ini akan menghapus secara permanent!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Iya, Lanjutkan!'
      }).then(function (result) {
        if (result.value) {
          _this2.removeSoal(id);

          _this2.getAllSoal();
        }
      });
    }
  }),
  watch: {
    page: function page() {
      this.getAllSoal();
    },
    search: function search() {
      this.getAllSoal(this.search);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/banksoal/SoalBanksoal.vue?vue&type=template&id=6caf6abd&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/banksoal/SoalBanksoal.vue?vue&type=template&id=6caf6abd& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-lg-12" }, [
      _c("div", { staticClass: "card" }, [
        _c(
          "div",
          { staticClass: "card-header" },
          [
            _c(
              "router-link",
              {
                staticClass: "btn btn-light btn-sm rounded-0",
                attrs: { to: { name: "banksoal.data" } }
              },
              [_vm._v("Kembali")]
            ),
            _vm._v(" "),
            _c(
              "router-link",
              {
                staticClass: "btn btn-primary btn-sm rounded-0",
                attrs: {
                  to: {
                    name: "banksoal.soal.tambah",
                    params: { banksoal_id: _vm.$route.params.banksoal_id }
                  }
                }
              },
              [_vm._v("Tambah pertanyaan")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "card-body" },
          [
            _c("div", { staticClass: "row" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "d-none d-md-block col-sm-7" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn float-right btn-primary btn-sm",
                    attrs: { type: "button" }
                  },
                  [_c("font-awesome-icon", { attrs: { icon: "file-word" } })],
                  1
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "btn float-right btn-primary btn-sm mx-1",
                    attrs: {
                      href: "/prev/banksoal/" + _vm.$route.params.banksoal_id,
                      target: "_blank"
                    }
                  },
                  [
                    _c("i", { staticClass: "cil-print" }),
                    _vm._v(
                      "\n                                Preview soal\n                            "
                    )
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("b-table", {
              attrs: {
                striped: "",
                hover: "",
                bordered: "",
                small: "",
                fields: _vm.fields,
                items: _vm.soals.data,
                "show-empty": ""
              },
              scopedSlots: _vm._u([
                {
                  key: "cell(index)",
                  fn: function(data) {
                    return [
                      _vm._v(
                        "\n\t\t\t\t        \t" +
                          _vm._s(data.index + 1) +
                          "\n\t\t\t\t      \t"
                      )
                    ]
                  }
                },
                {
                  key: "cell(dibuat)",
                  fn: function(row) {
                    return [
                      _vm._v(
                        "\n                            " +
                          _vm._s(row.item.created_at) +
                          "\n                        "
                      )
                    ]
                  }
                },
                {
                  key: "cell(show_details)",
                  fn: function(row) {
                    return [
                      _c(
                        "b-button",
                        {
                          attrs: {
                            size: "sm",
                            variant: row.detailsShowing ? "danger" : "info"
                          },
                          on: { click: row.toggleDetails }
                        },
                        [
                          _c("i", {
                            class: row.detailsShowing
                              ? "cil-chevron-top"
                              : "cil-chevron-bottom"
                          })
                        ]
                      )
                    ]
                  }
                },
                {
                  key: "row-details",
                  fn: function(row) {
                    return [
                      _c("b-card", [
                        _c("div", {
                          domProps: { innerHTML: _vm._s(row.item.pertanyaan) }
                        }),
                        _vm._v(" "),
                        row.item.audio != null
                          ? _c(
                              "div",
                              [
                                _c("audio-player", {
                                  attrs: {
                                    file: "/storage/audio/" + row.item.audio
                                  }
                                })
                              ],
                              1
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "table",
                          { staticClass: "table" },
                          _vm._l(row.item.jawabans, function(jawab) {
                            return _c("tr", [
                              _c(
                                "td",
                                { attrs: { width: "20px" } },
                                [
                                  _c("font-awesome-icon", {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: jawab.correct == "1",
                                        expression: "jawab.correct == '1'"
                                      }
                                    ],
                                    staticClass: "text-warning",
                                    attrs: { icon: "star" }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("td", [
                                _c("div", {
                                  domProps: {
                                    innerHTML: _vm._s(jawab.text_jawaban)
                                  }
                                })
                              ])
                            ])
                          }),
                          0
                        )
                      ])
                    ]
                  }
                },
                {
                  key: "cell(actions)",
                  fn: function(row) {
                    return [
                      _c(
                        "router-link",
                        {
                          staticClass: "btn btn-sm btn-warning rounded-0",
                          attrs: {
                            to: {
                              name: "banksoal.soal.edit",
                              params: {
                                soal_id: row.item.id,
                                banksoal_id: row.item.banksoal_id
                              }
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "cil-pencil" }),
                          _vm._v(" Edit\n                            ")
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-danger btn-sm rounded-0",
                          on: {
                            click: function($event) {
                              return _vm.deleteBanksoal(row.item.id)
                            }
                          }
                        },
                        [_c("i", { staticClass: "cil-trash" }), _vm._v("Hapus")]
                      )
                    ]
                  }
                }
              ])
            }),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-6" }, [
                _vm.soals.data
                  ? _c("p", [
                      _c("i", { staticClass: "fa fa-bars" }),
                      _vm._v(
                        " " +
                          _vm._s(_vm.soals.data.length) +
                          " item dari " +
                          _vm._s(_vm.soals.meta.total) +
                          " total data"
                      )
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-6" }, [
                _c(
                  "div",
                  { staticClass: "float-right" },
                  [
                    _vm.soals.data && _vm.soals.data.length > 0
                      ? _c("b-pagination", {
                          attrs: {
                            size: "sm",
                            "total-rows": _vm.soals.meta.total,
                            "per-page": _vm.soals.meta.per_page,
                            "aria-controls": "products"
                          },
                          model: {
                            value: _vm.page,
                            callback: function($$v) {
                              _vm.page = $$v
                            },
                            expression: "page"
                          }
                        })
                      : _vm._e()
                  ],
                  1
                )
              ])
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "card-footer" })
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-5" }, [
      _c("h4", { staticClass: "card-title mb-0", attrs: { id: "traffic" } }, [
        _vm._v("Manage Soal")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "small text-muted" }, [
        _vm._v("Manage soal from banksoal")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/banksoal/SoalBanksoal.vue":
/*!******************************************************!*\
  !*** ./resources/js/pages/banksoal/SoalBanksoal.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SoalBanksoal_vue_vue_type_template_id_6caf6abd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SoalBanksoal.vue?vue&type=template&id=6caf6abd& */ "./resources/js/pages/banksoal/SoalBanksoal.vue?vue&type=template&id=6caf6abd&");
/* harmony import */ var _SoalBanksoal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SoalBanksoal.vue?vue&type=script&lang=js& */ "./resources/js/pages/banksoal/SoalBanksoal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SoalBanksoal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SoalBanksoal_vue_vue_type_template_id_6caf6abd___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SoalBanksoal_vue_vue_type_template_id_6caf6abd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/banksoal/SoalBanksoal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/banksoal/SoalBanksoal.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/banksoal/SoalBanksoal.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SoalBanksoal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SoalBanksoal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/banksoal/SoalBanksoal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SoalBanksoal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/banksoal/SoalBanksoal.vue?vue&type=template&id=6caf6abd&":
/*!*************************************************************************************!*\
  !*** ./resources/js/pages/banksoal/SoalBanksoal.vue?vue&type=template&id=6caf6abd& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SoalBanksoal_vue_vue_type_template_id_6caf6abd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SoalBanksoal.vue?vue&type=template&id=6caf6abd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/banksoal/SoalBanksoal.vue?vue&type=template&id=6caf6abd&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SoalBanksoal_vue_vue_type_template_id_6caf6abd___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SoalBanksoal_vue_vue_type_template_id_6caf6abd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);