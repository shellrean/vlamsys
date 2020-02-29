(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/banksoal/DataBanksoal.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/banksoal/DataBanksoal.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-select/dist/vue-select.css */ "./node_modules/vue-select/dist/vue-select.css");
/* harmony import */ var vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_2__);
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
//
//
//
//
//
//
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
  name: 'DataBanksoal',
  components: {
    'v-select': vue_select__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  created: function created() {
    var _this = this;

    this.getBanksoals().then(function () {
      _this.isBusy = false;
    });
    this.getAllMatpels();
    this.getServers();
  },
  data: function data() {
    return {
      fields: [{
        key: 'show_details',
        label: 'Detail'
      }, {
        key: 'kode_banksoal',
        label: 'Kode banksoal'
      }, {
        key: 'matpel.nama',
        label: 'Mata pelajaran'
      }, {
        key: 'actions',
        label: 'Aksi'
      }],
      search: '',
      data: {
        kode_banksoal: '',
        matpel_id: '',
        jumlah_soal: '',
        jumlah_pilihan: 5,
        server_name: '',
        jumlah_soal_esay: ''
      },
      selected: '',
      isBusy: true,
      update: 0
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(['errors']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('banksoal', {
    banksoals: function banksoals(state) {
      return state.banksoals;
    }
  }), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('matpel', {
    matpels: function matpels(state) {
      return state.allMatpels;
    }
  }), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('server', {
    servers: function servers(state) {
      return state.servers;
    }
  }), {
    page: {
      get: function get() {
        return this.$store.state.banksoal.page;
      },
      set: function set(val) {
        this.$store.commit('banksoal/SET_PAGE', val);
      }
    }
  }),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('server', ['getServers']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('banksoal', ['getBanksoals', 'addBanksoal', 'removeBanksoal', 'getDataById', 'updateDataBanksoal']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('matpel', ['getAllMatpels']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])(['CLEAR_ERRORS', 'SET_LOADING']), {
    postBanksoal: function postBanksoal() {
      var _this2 = this;

      this.addBanksoal({
        name_server: this.data.server_name.server_name,
        kode_banksoal: this.data.kode_banksoal,
        matpel_id: this.data.matpel_id.id,
        jumlah_soal: this.data.jumlah_soal,
        jumlah_pilihan: this.data.jumlah_pilihan,
        jumlah_soal_esay: this.data.jumlah_soal_esay
      }).then(function (data) {
        _this2.$notify({
          group: 'foo',
          title: 'Sukses',
          type: 'success',
          text: 'Banksoal berhasil ditambah.'
        });

        _this2.getBanksoals();

        _this2.clearForm();

        _this2.CLEAR_ERRORS();

        _this2.$bvModal.hide('modal-scoped');
      });
    },
    updateBanksoal: function updateBanksoal() {
      var _this3 = this;

      this.updateDataBanksoal({
        id: this.update,
        data: this.data
      }).then(function () {
        _this3.$notify({
          group: 'foo',
          title: 'Sukses',
          type: 'success',
          text: 'Banksoal berhasil diubah.'
        });

        _this3.getBanksoals();

        _this3.clearForm();

        _this3.CLEAR_ERRORS();

        _this3.$bvModal.hide('modal-scoped');

        _this3.update = 0;
      });
    },
    deleteBanksoal: function deleteBanksoal(id) {
      var _this4 = this;

      this.$swal({
        title: 'Kamu Yakin?',
        text: "Tindakan ini akan menghapus banksoal & directory secara permanent!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Iya, Lanjutkan!'
      }).then(function (result) {
        if (result.value) {
          _this4.removeBanksoal(id);

          _this4.getBanksoals();
        }
      });
    },
    clearForm: function clearForm() {
      this.data = {
        kode_banksoal: ''
      };
    },
    getDataId: function getDataId(id) {
      var _this5 = this;

      this.getDataById(id).then(function (response) {
        _this5.data = {
          kode_banksoal: response.data.kode_banksoal,
          matpel_id: response.data.matpel.nama,
          jumlah_soal: response.data.jumlah_soal,
          jumlah_pilihan: response.data.jumlah_pilihan,
          server_name: response.data.server_name,
          jumlah_soal_esay: response.data.jumlah_soal_esay
        };
        _this5.update = response.data.id;

        _this5.$bvModal.show('modal-scoped');
      });
    }
  }),
  watch: {
    page: function page() {
      this.getBanksoals();
    },
    search: function search() {
      this.getBanksoals(this.search);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/banksoal/DataBanksoal.vue?vue&type=template&id=620f6b40&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/banksoal/DataBanksoal.vue?vue&type=template&id=620f6b40& ***!
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
  return _c(
    "div",
    { staticClass: "row" },
    [
      _c("div", { staticClass: "col-lg-12" }, [
        _c("div", { staticClass: "card" }, [
          _c(
            "div",
            { staticClass: "card-header" },
            [
              _c(
                "b-button",
                {
                  attrs: { size: "sm", variant: "primary" },
                  on: {
                    click: function($event) {
                      return _vm.$bvModal.show("modal-scoped")
                    }
                  }
                },
                [_vm._v("Tambah")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card-body" },
            [
              _vm._m(0),
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
                  items: _vm.banksoals.data,
                  "show-empty": ""
                },
                scopedSlots: _vm._u([
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
                            _c("font-awesome-icon", {
                              attrs: {
                                icon: row.detailsShowing
                                  ? "chevron-circle-up"
                                  : "chevron-circle-down"
                              }
                            })
                          ],
                          1
                        )
                      ]
                    }
                  },
                  {
                    key: "row-details",
                    fn: function(row) {
                      return [
                        _c("b-card", [
                          _c(
                            "table",
                            { staticClass: "table table-borderless" },
                            [
                              _c("tr", [
                                _c("td", { attrs: { width: "150px" } }, [
                                  _vm._v("Pembuat")
                                ]),
                                _c("td", {
                                  domProps: {
                                    textContent: _vm._s(row.item.user.name)
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [_vm._v("Jumlah soal")]),
                                _c("td", {
                                  domProps: {
                                    textContent: _vm._s(row.item.jumlah_soal)
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [_vm._v("Jumlah pilihan")]),
                                _c("td", {
                                  domProps: {
                                    textContent: _vm._s(row.item.jumlah_pilihan)
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [_vm._v("Jumlah esay")]),
                                _c("td", {
                                  domProps: {
                                    textContent: _vm._s(
                                      row.item.jumlah_soal_esay
                                    )
                                  }
                                })
                              ])
                            ]
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
                            staticClass: "btn btn-success btn-sm",
                            attrs: {
                              to: {
                                name: "banksoal.soal",
                                params: { banksoal_id: row.item.id }
                              }
                            }
                          },
                          [
                            _c("font-awesome-icon", {
                              attrs: { icon: "list" }
                            }),
                            _vm._v(" Soal")
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-button",
                          {
                            attrs: { size: "sm", variant: "warning" },
                            on: {
                              click: function($event) {
                                return _vm.getDataId(row.item.id)
                              }
                            }
                          },
                          [
                            _c("font-awesome-icon", {
                              attrs: { icon: "edit" }
                            }),
                            _vm._v(" Edit")
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-danger btn-sm",
                            on: {
                              click: function($event) {
                                return _vm.deleteBanksoal(row.item.id)
                              }
                            }
                          },
                          [
                            _c("font-awesome-icon", {
                              attrs: { icon: "trash" }
                            }),
                            _vm._v(" Hapus")
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
                  _vm.banksoals.data
                    ? _c("p", [
                        _c("i", { staticClass: "fa fa-bars" }),
                        _vm._v(
                          " " +
                            _vm._s(_vm.banksoals.data.length) +
                            " item dari " +
                            _vm._s(_vm.banksoals.meta.total) +
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
                      _vm.banksoals.data && _vm.banksoals.data.length > 0
                        ? _c("b-pagination", {
                            attrs: {
                              size: "sm",
                              "total-rows": _vm.banksoals.meta.total,
                              "per-page": _vm.banksoals.meta.per_page,
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
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: { id: "modal-scoped", size: "md", hideBackdrop: "" },
          scopedSlots: _vm._u([
            {
              key: "modal-header",
              fn: function(ref) {
                var close = ref.close
                return [_c("h5", [_vm._v("Tambah banksoal")])]
              }
            },
            {
              key: "modal-footer",
              fn: function(ref) {
                var ok = ref.ok
                var cancel = ref.cancel
                return [
                  _c(
                    "b-button",
                    {
                      attrs: { variant: "primary", size: "sm", squared: "" },
                      on: {
                        click: function($event) {
                          !_vm.update
                            ? _vm.postBanksoal()
                            : _vm.updateBanksoal()
                        }
                      }
                    },
                    [_vm._v("Simpan")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      attrs: { variant: "secondary", size: "sm", squared: "" },
                      on: {
                        click: function($event) {
                          return cancel()
                        }
                      }
                    },
                    [_vm._v("\n            Cancel\n          ")]
                  )
                ]
              }
            }
          ])
        },
        [
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("label", [_vm._v("Mata pelajaran")]),
              _vm._v(" "),
              _c("v-select", {
                attrs: { label: "nama", options: _vm.matpels.data },
                model: {
                  value: _vm.data.matpel_id,
                  callback: function($$v) {
                    _vm.$set(_vm.data, "matpel_id", $$v)
                  },
                  expression: "data.matpel_id"
                }
              }),
              _vm._v(" "),
              _vm.errors.matpel_id
                ? _c("p", { staticClass: "text-danger" }, [
                    _vm._v(_vm._s(_vm.errors.matpel_id[0]))
                  ])
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", [_vm._v("Kode banksoal")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.data.kode_banksoal,
                  expression: "data.kode_banksoal"
                }
              ],
              staticClass: "form-control",
              class: { "is-invalid": _vm.errors.kode_banksoal },
              attrs: { type: "text", placeholder: "Kode banksoal" },
              domProps: { value: _vm.data.kode_banksoal },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.data, "kode_banksoal", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _vm.errors.kode_banksoal
              ? _c("p", { staticClass: "text-danger" }, [
                  _vm._v(_vm._s(_vm.errors.kode_banksoal[0]))
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", [_vm._v("Jumlah soal pilihan ganda")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.data.jumlah_soal,
                  expression: "data.jumlah_soal"
                }
              ],
              staticClass: "form-control",
              class: { "is-invalid": _vm.errors.jumlah_soal },
              attrs: {
                type: "number",
                placeholder: "Jumlah soal pilihan ganda"
              },
              domProps: { value: _vm.data.jumlah_soal },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.data, "jumlah_soal", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _vm.errors.jumlah_soal
              ? _c("p", { staticClass: "text-danger" }, [
                  _vm._v(_vm._s(_vm.errors.jumlah_soal[0]))
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", [_vm._v("Jumlah soal esay")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.data.jumlah_soal_esay,
                  expression: "data.jumlah_soal_esay"
                }
              ],
              staticClass: "form-control",
              class: { "is-invalid": _vm.errors.jumlah_soal_esay },
              attrs: { type: "number", placeholder: "Jumlah soal esay" },
              domProps: { value: _vm.data.jumlah_soal_esay },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.data, "jumlah_soal_esay", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _vm.errors.jumlah_soal_esay
              ? _c("p", { staticClass: "text-danger" }, [
                  _vm._v(_vm._s(_vm.errors.jumlah_soal_esay[0]))
                ])
              : _vm._e()
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-5" }, [
        _c("h4", { staticClass: "card-title mb-0", attrs: { id: "traffic" } }, [
          _vm._v("Manage Banksoal")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "small text-muted" }, [
          _vm._v("Buat hapus dan edit banksoal")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/banksoal/DataBanksoal.vue":
/*!******************************************************!*\
  !*** ./resources/js/pages/banksoal/DataBanksoal.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DataBanksoal_vue_vue_type_template_id_620f6b40___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataBanksoal.vue?vue&type=template&id=620f6b40& */ "./resources/js/pages/banksoal/DataBanksoal.vue?vue&type=template&id=620f6b40&");
/* harmony import */ var _DataBanksoal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataBanksoal.vue?vue&type=script&lang=js& */ "./resources/js/pages/banksoal/DataBanksoal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DataBanksoal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DataBanksoal_vue_vue_type_template_id_620f6b40___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DataBanksoal_vue_vue_type_template_id_620f6b40___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/banksoal/DataBanksoal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/banksoal/DataBanksoal.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/banksoal/DataBanksoal.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataBanksoal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DataBanksoal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/banksoal/DataBanksoal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataBanksoal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/banksoal/DataBanksoal.vue?vue&type=template&id=620f6b40&":
/*!*************************************************************************************!*\
  !*** ./resources/js/pages/banksoal/DataBanksoal.vue?vue&type=template&id=620f6b40& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataBanksoal_vue_vue_type_template_id_620f6b40___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DataBanksoal.vue?vue&type=template&id=620f6b40& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/banksoal/DataBanksoal.vue?vue&type=template&id=620f6b40&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataBanksoal_vue_vue_type_template_id_620f6b40___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataBanksoal_vue_vue_type_template_id_620f6b40___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);