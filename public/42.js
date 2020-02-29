(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/ujian/PesertaUjian.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/ujian/PesertaUjian.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'PesertaUjian',
  created: function created() {
    this.getPesertas(this.$route.params.ujian_id);
  },
  data: function data() {
    return {
      fields: [{
        key: 'peserta.no_ujian',
        label: 'No ujian'
      }, {
        key: 'peserta.nama',
        label: 'Nama peserta'
      }, {
        key: 'status',
        label: 'Status'
      }, {
        key: 'sisa',
        label: 'Sisa waktu'
      }],
      isBusy: true
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('ujian', {
    pesertas: function pesertas(state) {
      return state.pesertas;
    }
  })),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('ujian', ['getPesertas']), {
    refreshTable: function refreshTable() {
      this.getPesertas(this.$route.params.ujian_id);
    }
  }),
  watch: {
    pesertas: function pesertas() {
      this.isBusy = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/ujian/PesertaUjian.vue?vue&type=template&id=bff8ec00&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/ujian/PesertaUjian.vue?vue&type=template&id=bff8ec00& ***!
  \****************************************************************************************************************************************************************************************************************/
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
                staticClass: "btn btn-warning btn-sm rounded-0",
                attrs: { to: { name: "ujian.data" } }
              },
              [_vm._v("Kembali ")]
            ),
            _vm._v(" "),
            _c(
              "b-button",
              {
                attrs: { variant: "info", size: "sm", squared: "" },
                on: { click: _vm.refreshTable }
              },
              [_vm._v("Refresh")]
            )
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
                busy: _vm.isBusy,
                small: "",
                fields: _vm.fields,
                items: _vm.pesertas.data,
                "show-empty": ""
              },
              scopedSlots: _vm._u([
                {
                  key: "table-busy",
                  fn: function() {
                    return [
                      _c(
                        "div",
                        { staticClass: "text-center text-warning my-2" },
                        [
                          _c("b-spinner", { staticClass: "align-middle" }),
                          _vm._v(" "),
                          _c("strong", [_vm._v("Loading...")])
                        ],
                        1
                      )
                    ]
                  },
                  proxy: true
                },
                {
                  key: "cell(status)",
                  fn: function(row) {
                    return [
                      _vm._v(
                        "\n                            " +
                          _vm._s(
                            row.item.status_ujian == "0"
                              ? "Masih mengerjakan"
                              : "Selesai"
                          ) +
                          "\n                        "
                      )
                    ]
                  }
                },
                {
                  key: "cell(sisa)",
                  fn: function(row) {
                    return [
                      _vm._v(
                        "\n                        \t" +
                          _vm._s(
                            Math.floor(row.item.sisa_waktu / 60) + " Menit"
                          ) +
                          "\n                        "
                      )
                    ]
                  }
                }
              ])
            })
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "card-footer" })
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/ujian/PesertaUjian.vue":
/*!***************************************************!*\
  !*** ./resources/js/pages/ujian/PesertaUjian.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PesertaUjian_vue_vue_type_template_id_bff8ec00___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PesertaUjian.vue?vue&type=template&id=bff8ec00& */ "./resources/js/pages/ujian/PesertaUjian.vue?vue&type=template&id=bff8ec00&");
/* harmony import */ var _PesertaUjian_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PesertaUjian.vue?vue&type=script&lang=js& */ "./resources/js/pages/ujian/PesertaUjian.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PesertaUjian_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PesertaUjian_vue_vue_type_template_id_bff8ec00___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PesertaUjian_vue_vue_type_template_id_bff8ec00___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/ujian/PesertaUjian.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/ujian/PesertaUjian.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/ujian/PesertaUjian.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PesertaUjian_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PesertaUjian.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/ujian/PesertaUjian.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PesertaUjian_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/ujian/PesertaUjian.vue?vue&type=template&id=bff8ec00&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/ujian/PesertaUjian.vue?vue&type=template&id=bff8ec00& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PesertaUjian_vue_vue_type_template_id_bff8ec00___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PesertaUjian.vue?vue&type=template&id=bff8ec00& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/ujian/PesertaUjian.vue?vue&type=template&id=bff8ec00&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PesertaUjian_vue_vue_type_template_id_bff8ec00___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PesertaUjian_vue_vue_type_template_id_bff8ec00___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);