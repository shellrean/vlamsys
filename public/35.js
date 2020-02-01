(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/server/Server.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/server/Server.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'DataServer',
  created: function created() {
    this.getSekolah();
  },
  data: function data() {
    return {
      fields: [{
        key: 'show_details',
        label: 'Detail'
      }, {
        key: 'server_name',
        label: 'Server name'
      }, {
        key: 'description',
        label: 'Keterangan'
      }, {
        key: 'password.password',
        label: 'Password'
      }, {
        key: 'actions',
        label: 'Aksi'
      }],
      search: '',
      isBusy: true,
      sekolah: ''
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('server', {
    servers: function servers(state) {
      return state.servers;
    }
  }), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('sekolah', {
    sekolahs: function sekolahs(state) {
      return state.sekolah;
    }
  }), {
    page: {
      get: function get() {
        return this.$store.state.server.page;
      },
      set: function set(val) {
        this.$store.commit('server/SET_PAGE', val);
      }
    }
  }),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('server', ['getServers', 'removeServer', 'revertServer', 'resetSerial']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('sekolah', ['getSekolah']), {
    deleteServer: function deleteServer(id) {
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
          _this.removeServer(id);
        }
      });
    },
    reserveServer: function reserveServer($id) {
      var _this2 = this;

      this.revertServer($id).then(function () {
        _this2.$notify({
          group: 'foo',
          title: 'Sukses',
          type: 'success',
          text: 'Status server changed.'
        });
      });
    },
    getDataServers: function getDataServers() {
      this.getServers({
        sekolah: this.sekolah
      });
    }
  }),
  watch: {
    page: function page() {
      this.getServers({
        search: this.search,
        sekolah: this.sekolah
      });
    },
    search: function search() {
      this.getServers({
        search: this.search
      });
    },
    pesertas: function pesertas() {
      this.isBusy = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/server/Server.vue?vue&type=template&id=cad4b4d4&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/server/Server.vue?vue&type=template&id=cad4b4d4& ***!
  \***********************************************************************************************************************************************************************************************************/
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
                attrs: { to: { name: "server.add" } }
              },
              [_vm._v("Tambah server")]
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
                attrs: { type: "text", placeholder: "Cari nama..." },
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
                _vm._m(1)
              ])
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-5" }, [
                _c("div", { staticClass: "input-group mb-3" }, [
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.sekolah,
                          expression: "sekolah"
                        }
                      ],
                      staticClass: "form-control",
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.sekolah = $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        }
                      }
                    },
                    _vm._l(_vm.sekolahs.data, function(sekolah) {
                      return _c("option", {
                        key: sekolah.id,
                        domProps: {
                          value: sekolah.id,
                          textContent: _vm._s(sekolah.nama)
                        }
                      })
                    }),
                    0
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-group-append" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-outline-primary",
                        attrs: { type: "button" },
                        on: { click: _vm.getDataServers }
                      },
                      [_vm._v("Tampilkan")]
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("b-table", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.servers.data,
                  expression: "servers.data"
                }
              ],
              attrs: {
                striped: "",
                hover: "",
                bordered: "",
                small: "",
                fields: _vm.fields,
                items: _vm.servers.data,
                busy: _vm.isBusy,
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
                            variant: row.detailsShowing ? "danger" : "success",
                            squared: ""
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
                        _c("table", { staticClass: "table table-borderless" }, [
                          _c("tr", [
                            _c("td", { attrs: { width: "220px" } }, [
                              _vm._v("Status sinkron")
                            ]),
                            _c("td", {
                              domProps: {
                                textContent: _vm._s(
                                  row.item.sinkron == "1"
                                    ? "Berhasil"
                                    : "Belum sinkron"
                                )
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", [_vm._v("Status server")]),
                            _c("td", {
                              domProps: {
                                textContent: _vm._s(
                                  row.item.status == "1" ? "Aktif" : "Offline"
                                )
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", [_vm._v("Serial number")]),
                            _c("td", {
                              domProps: {
                                textContent: _vm._s(row.item.serial_number)
                              }
                            })
                          ])
                        ])
                      ])
                    ]
                  }
                },
                {
                  key: "cell(actions)",
                  fn: function(row) {
                    return [
                      _c(
                        "b-button",
                        {
                          attrs: {
                            variant: "success",
                            title: "Aktif/Matikan server",
                            squared: "",
                            size: "sm"
                          },
                          on: {
                            click: function($event) {
                              return _vm.reserveServer(row.item.id)
                            }
                          }
                        },
                        [
                          _c("font-awesome-icon", {
                            attrs: { icon: "dot-circle" }
                          }),
                          _vm._v(" Aktif/Matikan\n\t\t\t\t\t\t\t")
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          attrs: {
                            variant: "warning",
                            title: "Reset sync",
                            squared: "",
                            size: "sm"
                          }
                        },
                        [
                          _c("font-awesome-icon", { attrs: { icon: "sync" } }),
                          _vm._v(" Reset sync\n\t\t\t\t\t\t\t")
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          attrs: {
                            variant: "danger",
                            title: "Hapus Serial",
                            squared: "",
                            size: "sm"
                          },
                          on: {
                            click: function($event) {
                              return _vm.resetSerial(row.item.id)
                            }
                          }
                        },
                        [
                          _c("font-awesome-icon", { attrs: { icon: "sync" } }),
                          _vm._v(" Reset UUID\n\t\t\t\t\t\t\t")
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          attrs: {
                            variant: "danger",
                            title: "Hapus server",
                            squared: "",
                            size: "sm"
                          },
                          on: {
                            click: function($event) {
                              return _vm.deleteServer(row.item.id)
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
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.servers.data,
                    expression: "servers.data"
                  }
                ],
                staticClass: "row"
              },
              [
                _c("div", { staticClass: "col-md-6" }, [
                  _vm.servers.data
                    ? _c("p", [
                        _c("i", { staticClass: "fa fa-bars" }),
                        _vm._v(
                          " " +
                            _vm._s(_vm.servers.data.length) +
                            " item dari " +
                            _vm._s(_vm.servers.meta.total) +
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
                      _vm.servers.data && _vm.servers.data.length > 0
                        ? _c("b-pagination", {
                            attrs: {
                              "total-rows": _vm.servers.meta.total,
                              "per-page": _vm.servers.meta.per_page,
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
              ]
            )
          ],
          1
        )
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
        _vm._v("Manage Server")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "small text-muted" }, [_vm._v("Manage servers")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn float-right btn-primary btn-sm mx-1",
        attrs: { type: "button" }
      },
      [_c("i", { staticClass: "cil-print" })]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/server/Server.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/server/Server.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Server_vue_vue_type_template_id_cad4b4d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Server.vue?vue&type=template&id=cad4b4d4& */ "./resources/js/pages/server/Server.vue?vue&type=template&id=cad4b4d4&");
/* harmony import */ var _Server_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Server.vue?vue&type=script&lang=js& */ "./resources/js/pages/server/Server.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Server_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Server_vue_vue_type_template_id_cad4b4d4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Server_vue_vue_type_template_id_cad4b4d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/server/Server.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/server/Server.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/server/Server.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Server_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Server.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/server/Server.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Server_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/server/Server.vue?vue&type=template&id=cad4b4d4&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/server/Server.vue?vue&type=template&id=cad4b4d4& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Server_vue_vue_type_template_id_cad4b4d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Server.vue?vue&type=template&id=cad4b4d4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/server/Server.vue?vue&type=template&id=cad4b4d4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Server_vue_vue_type_template_id_cad4b4d4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Server_vue_vue_type_template_id_cad4b4d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);