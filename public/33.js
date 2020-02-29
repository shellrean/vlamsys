(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/sekolah/Sekolah.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/sekolah/Sekolah.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DataSekolah',
  created: function created() {
    this.getSekolah();
  },
  data: function data() {
    return {
      fields: [{
        key: 'nis',
        label: 'No Induk sekolah'
      }, {
        key: 'nama',
        label: 'Nama sekolah'
      }, {
        key: 'alamat',
        label: 'Alamat'
      }, {
        key: 'actions',
        label: 'Aksi'
      }],
      search: '',
      isBusy: true
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('sekolah', {
    sekolah: function sekolah(state) {
      return state.sekolah;
    }
  }), {
    page: {
      get: function get() {
        return this.$store.state.server.page;
      },
      set: function set(val) {
        this.$store.commit('sekolah/SET_PAGE', val);
      }
    }
  }),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('sekolah', ['getSekolah', 'removeSekolah']), {
    deleteSekolah: function deleteSekolah(id) {
      var _this = this;

      this.$swal({
        title: 'Kamu Yakin?',
        text: 'Tindakan ini akan menghapus secara permanent!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Iya, Lanjutkan!'
      }).then(function (result) {
        if (result.value) {
          _this.removeSekolah(id);
        }
      });
    }
  }),
  watch: {
    page: function page() {
      this.getSekolah();
    },
    search: function search() {
      this.getSekolah(this.search);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/sekolah/Sekolah.vue?vue&type=template&id=505f5932&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/sekolah/Sekolah.vue?vue&type=template&id=505f5932& ***!
  \*************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "col-md-12" }, [
      _c("div", { staticClass: "card" }, [
        _c(
          "div",
          { staticClass: "card-header" },
          [
            _c(
              "router-link",
              {
                staticClass: "btn btn-primary btn-sm rounded-0",
                attrs: { to: { name: "sekolah.add" } }
              },
              [_vm._v("Tambah sekolah")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "float-right" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.search,
                    expression: "search"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", placeholder: "Cari sekolah..." },
                domProps: { value: _vm.search },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.search = $event.target.value
                  }
                }
              })
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "card-body" },
          [
            _c("b-table", {
              attrs: {
                striped: "",
                hover: "",
                bordered: "",
                small: "",
                fields: _vm.fields,
                items: _vm.sekolah.data,
                "show-empty": ""
              },
              scopedSlots: _vm._u([
                {
                  key: "cell(actions)",
                  fn: function(row) {
                    return [
                      _c(
                        "router-link",
                        {
                          staticClass: "btn btn-warning btn-sm rounded-0",
                          attrs: {
                            to: {
                              name: "sekolah.edit",
                              params: { id: row.item.id }
                            }
                          }
                        },
                        [
                          _c("font-awesome-icon", { attrs: { icon: "edit" } }),
                          _vm._v(" Edit\n\t\t\t\t\t\t\t")
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          attrs: { variant: "danger", squared: "", size: "sm" },
                          on: {
                            click: function($event) {
                              return _vm.deleteSekolah(row.item.id)
                            }
                          }
                        },
                        [
                          _c("font-awesome-icon", { attrs: { icon: "trash" } }),
                          _vm._v(" Hapus\n\t\t\t\t\t\t\t")
                        ],
                        1
                      )
                    ]
                  }
                }
              ])
            }),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-6" }, [
                _vm.sekolah.data
                  ? _c("p", [
                      _c("i", { staticClass: "fa fa-bars" }),
                      _vm._v(
                        " " +
                          _vm._s(_vm.sekolah.data.length) +
                          " item dari " +
                          _vm._s(_vm.sekolah.meta.total) +
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
                    _vm.sekolah.data && _vm.sekolah.data.length > 0
                      ? _c("b-pagination", {
                          attrs: {
                            "total-rows": _vm.sekolah.meta.total,
                            "per-page": _vm.sekolah.meta.per_page,
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
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/sekolah/Sekolah.vue":
/*!************************************************!*\
  !*** ./resources/js/pages/sekolah/Sekolah.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sekolah_vue_vue_type_template_id_505f5932___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sekolah.vue?vue&type=template&id=505f5932& */ "./resources/js/pages/sekolah/Sekolah.vue?vue&type=template&id=505f5932&");
/* harmony import */ var _Sekolah_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sekolah.vue?vue&type=script&lang=js& */ "./resources/js/pages/sekolah/Sekolah.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Sekolah_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sekolah_vue_vue_type_template_id_505f5932___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Sekolah_vue_vue_type_template_id_505f5932___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/sekolah/Sekolah.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/sekolah/Sekolah.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/sekolah/Sekolah.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sekolah_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Sekolah.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/sekolah/Sekolah.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sekolah_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/sekolah/Sekolah.vue?vue&type=template&id=505f5932&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/sekolah/Sekolah.vue?vue&type=template&id=505f5932& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sekolah_vue_vue_type_template_id_505f5932___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Sekolah.vue?vue&type=template&id=505f5932& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/sekolah/Sekolah.vue?vue&type=template&id=505f5932&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sekolah_vue_vue_type_template_id_505f5932___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sekolah_vue_vue_type_template_id_505f5932___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);