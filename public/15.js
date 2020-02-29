(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/filemedia/dd.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/filemedia/dd.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var tiptap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tiptap */ "./node_modules/tiptap/dist/tiptap.esm.js");
/* harmony import */ var tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tiptap-extensions */ "./node_modules/tiptap-extensions/dist/extensions.esm.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  created: function created() {
    this.getBanksoal(this.$route.params.banksoal_id);
    this.getDirectories();
    this.getContentFile();
  },
  components: {
    EditorContent: tiptap__WEBPACK_IMPORTED_MODULE_1__["EditorContent"],
    EditorFloatingMenu: tiptap__WEBPACK_IMPORTED_MODULE_1__["EditorFloatingMenu"],
    EditorMenuBar: tiptap__WEBPACK_IMPORTED_MODULE_1__["EditorMenuBar"]
  },
  data: function data() {
    return {
      correct: '',
      question: new tiptap__WEBPACK_IMPORTED_MODULE_1__["Editor"]({
        extensions: [new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["Blockquote"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["Image"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["BulletList"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["CodeBlock"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["HardBreak"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["Heading"]({
          levels: [1, 2, 3]
        }), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["ListItem"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["OrderedList"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["TodoItem"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["TodoList"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["Link"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["Bold"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["Code"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["Italic"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["Strike"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["Underline"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["History"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["Placeholder"]({
          emptyNodeClass: 'is-empty',
          emptyNodeText: 'Tulis pertanyaan …',
          showOnlyWhenEditable: true
        })],
        content: ''
      }),
      pilihan: [],
      jmlh_pilihan: '',
      gambar_pilih: '',
      command: '',
      direktory: ''
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['isLoading']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(['errors']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('banksoal', {
    banksoal: function banksoal(state) {
      return state.banksoal.data;
    }
  }), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('filemedia', {
    contentDirectory: function contentDirectory(state) {
      return state.contentFilemedia;
    },
    directories: function directories(state) {
      return state.directories.data;
    }
  })),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('filemedia', ['getContentFilemedia', 'getDirectories']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('banksoal', ['addSoalBanksoal', 'getBanksoal']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])(['CLEAR_ERRORS', 'SET_LOADING']), {
    postSoalBanksoal: function postSoalBanksoal() {
      var _this = this;

      if (this.correct == null) {
        this.$swal({
          title: 'Kunci jawaban kosong',
          text: "Pilih jawaban yang benar",
          type: 'warning'
        });
        return;
      } else {
        this.SET_LOADING(true);
        var sender = [];
        this.pilihan.forEach(function (item) {
          sender.push(item.getHTML());
        });
        this.addSoalBanksoal({
          pertanyaan: this.question.getHTML(),
          banksoal_id: this.$route.params.banksoal_id,
          pilihan: sender,
          correct: this.correct
        }).then(function (data) {
          _this.$notify({
            group: 'foo',
            title: 'Sukses',
            type: 'success',
            text: 'Soal berhasil ditambah.'
          }), _this.clearForm();

          _this.SET_LOADING(false);
        });
      }
    },
    clearForm: function clearForm() {
      this.question.setContent(''), this.correct = '', this.pilihan.forEach(function (item) {
        item.setContent('');
      });
    },
    initEditor: function initEditor() {
      var i;

      for (i = 0; i < this.jmlh_pilihan; i++) {
        var pilihan = new tiptap__WEBPACK_IMPORTED_MODULE_1__["Editor"]({
          extensions: [new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["Blockquote"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["Image"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["BulletList"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["CodeBlock"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["HardBreak"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["Heading"]({
            levels: [1, 2, 3]
          }), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["ListItem"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["OrderedList"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["TodoItem"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["TodoList"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["Link"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["Bold"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["Code"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["Italic"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["Strike"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["Underline"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["History"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_2__["Placeholder"]({
            emptyNodeClass: 'is-empty',
            emptyNodeText: "Tulis pilihan".concat(i + 1, " \u2026"),
            showOnlyWhenEditable: true
          })],
          content: ''
        });
        this.pilihan.push(pilihan);
      }
    },
    showImagePrompt: function showImagePrompt(command) {
      this.$bvModal.show('modal-scoped');
      this.command = command;
    },
    onSelectImage: function onSelectImage(e) {},
    pilihGambar: function pilihGambar(index) {
      var gambar = this.contentDirectory.data[index];
      this.gambar_pilih = 'http://localhost:8000/storage/' + gambar.dirname + '/' + gambar.filename;
    },
    masukGambar: function masukGambar() {
      var command = this.command;
      var src = this.gambar_pilih;
      command({
        src: src
      });
    },
    getContentFile: function getContentFile() {
      if (this.direktory != '') {
        this.getContentFilemedia(this.direktory);
      }
    }
  }),
  watch: {
    banksoal: function banksoal(val) {
      this.jmlh_pilihan = val.jumlah_pilihan;
      this.initEditor();
    },
    direktory: function direktory(val) {
      if (val != '') {
        this.getContentFilemedia(val);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/filemedia/dd.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/filemedia/dd.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".menubar {\n  margin-bottom: 1rem;\n  -webkit-transition: visibility 0.2s 0.4s, opacity 0.2s 0.4s;\n  transition: visibility 0.2s 0.4s, opacity 0.2s 0.4s;\n}\n.menubar.is-hidden {\n  visibility: hidden;\n  opacity: 0;\n}\n.menubar.is-focused {\n  visibility: visible;\n  opacity: 1;\n  -webkit-transition: visibility 0.2s, opacity 0.2s;\n  transition: visibility 0.2s, opacity 0.2s;\n}\n.menubar__button {\n  font-weight: bold;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  background: transparent;\n  border: 0;\n  color: #000000;\n  padding: 0.2rem 0.5rem;\n  margin-right: 0.2rem;\n  border-radius: 3px;\n  cursor: pointer;\n}\n.menubar__button:hover {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.menubar__button.is-active {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.menubar span.menubar__button {\n  font-size: 13.3333px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/filemedia/dd.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/filemedia/dd.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./dd.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/filemedia/dd.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/filemedia/dd.vue?vue&type=template&id=2df45670&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/filemedia/dd.vue?vue&type=template&id=2df45670& ***!
  \**********************************************************************************************************************************************************************************************************/
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
                "router-link",
                {
                  staticClass: "btn btn-warning btn-sm rounded-0",
                  attrs: {
                    to: {
                      name: "banksoal.soal",
                      params: { banksoal_id: _vm.$route.params.banksoal_id }
                    }
                  }
                },
                [_vm._v("Kembali")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c(
              "div",
              { staticClass: "editor" },
              [
                _c("h4", [_vm._v("Pertanyaan")]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c("editor-menu-bar", {
                  attrs: { editor: _vm.question },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function(ref) {
                        var commands = ref.commands
                        var isActive = ref.isActive
                        return [
                          _c("div", { staticClass: "menubar" }, [
                            _c(
                              "button",
                              {
                                staticClass: "menubar__button",
                                on: {
                                  click: function($event) {
                                    return _vm.showImagePrompt(commands.image)
                                  }
                                }
                              },
                              [
                                _c("font-awesome-icon", {
                                  attrs: { icon: "image" }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "menubar__button",
                                class: { "is-active": isActive.bold() },
                                on: { click: commands.bold }
                              },
                              [
                                _c("font-awesome-icon", {
                                  attrs: { icon: "bold" }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "menubar__button",
                                class: { "is-active": isActive.italic() },
                                on: { click: commands.italic }
                              },
                              [
                                _c("font-awesome-icon", {
                                  attrs: { icon: "italic" }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "menubar__button",
                                class: { "is-active": isActive.strike() },
                                on: { click: commands.strike }
                              },
                              [
                                _c("font-awesome-icon", {
                                  attrs: { icon: "strikethrough" }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "menubar__button",
                                class: { "is-active": isActive.underline() },
                                on: { click: commands.underline }
                              },
                              [
                                _c("font-awesome-icon", {
                                  attrs: { icon: "underline" }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "menubar__button",
                                class: { "is-active": isActive.paragraph() },
                                on: { click: commands.paragraph }
                              },
                              [
                                _c("font-awesome-icon", {
                                  attrs: { icon: "paragraph" }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "menubar__button",
                                class: {
                                  "is-active": isActive.heading({ level: 1 })
                                },
                                on: {
                                  click: function($event) {
                                    return commands.heading({ level: 1 })
                                  }
                                }
                              },
                              [_vm._v("\n                H1\n              ")]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "menubar__button",
                                class: {
                                  "is-active": isActive.heading({ level: 2 })
                                },
                                on: {
                                  click: function($event) {
                                    return commands.heading({ level: 2 })
                                  }
                                }
                              },
                              [_vm._v("\n                H2\n              ")]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "menubar__button",
                                class: {
                                  "is-active": isActive.heading({ level: 3 })
                                },
                                on: {
                                  click: function($event) {
                                    return commands.heading({ level: 3 })
                                  }
                                }
                              },
                              [_vm._v("\n                H3\n              ")]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "menubar__button",
                                class: { "is-active": isActive.bullet_list() },
                                on: { click: commands.bullet_list }
                              },
                              [
                                _c("font-awesome-icon", {
                                  attrs: { icon: "list" }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "menubar__button",
                                class: { "is-active": isActive.ordered_list() },
                                on: { click: commands.ordered_list }
                              },
                              [
                                _c("font-awesome-icon", {
                                  attrs: { icon: "list-ol" }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "menubar__button",
                                class: { "is-active": isActive.blockquote() },
                                on: { click: commands.blockquote }
                              },
                              [
                                _c("font-awesome-icon", {
                                  attrs: { icon: "quote-right" }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "menubar__button",
                                on: { click: commands.undo }
                              },
                              [
                                _c("font-awesome-icon", {
                                  attrs: { icon: "undo" }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "menubar__button",
                                on: { click: commands.redo }
                              },
                              [
                                _c("font-awesome-icon", {
                                  attrs: { icon: "redo" }
                                })
                              ],
                              1
                            )
                          ])
                        ]
                      }
                    }
                  ])
                }),
                _vm._v(" "),
                _c("editor-content", {
                  staticClass: "editor__content",
                  attrs: { editor: _vm.question }
                }),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _vm._m(0),
                _vm._v(" "),
                _c("br"),
                _c("br"),
                _vm._v(" "),
                _c("h4", [_vm._v("Pilihan")]),
                _vm._v(" "),
                _c("div", { staticClass: "card" }, [
                  _c("div", { staticClass: "card-body" }, [
                    _c(
                      "table",
                      { staticClass: "table" },
                      _vm._l(_vm.pilihan, function(pilih, index) {
                        return _c("tr", [
                          _c(
                            "td",
                            { attrs: { width: "10px" } },
                            [
                              _c("b-form-radio", {
                                attrs: {
                                  name: "correct",
                                  size: "lg",
                                  value: index
                                },
                                model: {
                                  value: _vm.correct,
                                  callback: function($$v) {
                                    _vm.correct = $$v
                                  },
                                  expression: "correct"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            [
                              _c("editor-menu-bar", {
                                attrs: { editor: _vm.pilihan[index] },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "default",
                                      fn: function(ref) {
                                        var commands = ref.commands
                                        var isActive = ref.isActive
                                        return [
                                          _c(
                                            "div",
                                            { staticClass: "menubar" },
                                            [
                                              _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "menubar__button",
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.showImagePrompt(
                                                        commands.image
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c("font-awesome-icon", {
                                                    attrs: { icon: "image" }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "menubar__button",
                                                  class: {
                                                    "is-active": isActive.bold()
                                                  },
                                                  on: { click: commands.bold }
                                                },
                                                [
                                                  _c("font-awesome-icon", {
                                                    attrs: { icon: "bold" }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "menubar__button",
                                                  class: {
                                                    "is-active": isActive.italic()
                                                  },
                                                  on: { click: commands.italic }
                                                },
                                                [
                                                  _c("font-awesome-icon", {
                                                    attrs: { icon: "italic" }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "menubar__button",
                                                  class: {
                                                    "is-active": isActive.strike()
                                                  },
                                                  on: { click: commands.strike }
                                                },
                                                [
                                                  _c("font-awesome-icon", {
                                                    attrs: {
                                                      icon: "strikethrough"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "menubar__button",
                                                  class: {
                                                    "is-active": isActive.underline()
                                                  },
                                                  on: {
                                                    click: commands.underline
                                                  }
                                                },
                                                [
                                                  _c("font-awesome-icon", {
                                                    attrs: { icon: "underline" }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "menubar__button",
                                                  class: {
                                                    "is-active": isActive.paragraph()
                                                  },
                                                  on: {
                                                    click: commands.paragraph
                                                  }
                                                },
                                                [
                                                  _c("font-awesome-icon", {
                                                    attrs: { icon: "paragraph" }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "menubar__button",
                                                  class: {
                                                    "is-active": isActive.heading(
                                                      { level: 1 }
                                                    )
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return commands.heading({
                                                        level: 1
                                                      })
                                                    }
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                      H1\n                    "
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "menubar__button",
                                                  class: {
                                                    "is-active": isActive.heading(
                                                      { level: 2 }
                                                    )
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return commands.heading({
                                                        level: 2
                                                      })
                                                    }
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                      H2\n                    "
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "menubar__button",
                                                  class: {
                                                    "is-active": isActive.heading(
                                                      { level: 3 }
                                                    )
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return commands.heading({
                                                        level: 3
                                                      })
                                                    }
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                      H3\n                    "
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "menubar__button",
                                                  class: {
                                                    "is-active": isActive.bullet_list()
                                                  },
                                                  on: {
                                                    click: commands.bullet_list
                                                  }
                                                },
                                                [
                                                  _c("font-awesome-icon", {
                                                    attrs: { icon: "list" }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "menubar__button",
                                                  class: {
                                                    "is-active": isActive.ordered_list()
                                                  },
                                                  on: {
                                                    click: commands.ordered_list
                                                  }
                                                },
                                                [
                                                  _c("font-awesome-icon", {
                                                    attrs: { icon: "list-ol" }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "menubar__button",
                                                  class: {
                                                    "is-active": isActive.blockquote()
                                                  },
                                                  on: {
                                                    click: commands.blockquote
                                                  }
                                                },
                                                [
                                                  _c("font-awesome-icon", {
                                                    attrs: {
                                                      icon: "quote-right"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "menubar__button",
                                                  on: { click: commands.undo }
                                                },
                                                [
                                                  _c("font-awesome-icon", {
                                                    attrs: { icon: "undo" }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "menubar__button",
                                                  on: { click: commands.redo }
                                                },
                                                [
                                                  _c("font-awesome-icon", {
                                                    attrs: { icon: "redo" }
                                                  })
                                                ],
                                                1
                                              )
                                            ]
                                          )
                                        ]
                                      }
                                    }
                                  ],
                                  null,
                                  true
                                )
                              }),
                              _vm._v(" "),
                              _c("editor-content", {
                                staticClass: "editor__content",
                                attrs: { editor: _vm.pilihan[index] }
                              })
                            ],
                            1
                          )
                        ])
                      }),
                      0
                    )
                  ])
                ])
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card-footer" },
            [
              _c(
                "b-button",
                {
                  attrs: {
                    variant: "success",
                    squared: "",
                    size: "sm",
                    disabled: _vm.isLoading
                  },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.postSoalBanksoal($event)
                    }
                  }
                },
                [
                  _c("b-spinner", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.isLoading,
                        expression: "isLoading"
                      }
                    ],
                    attrs: { small: "", type: "grow" }
                  }),
                  _vm._v("\n          Simpan\n        ")
                ],
                1
              )
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: { id: "modal-scoped", "hide-backdrop": "", size: "xl" },
          scopedSlots: _vm._u([
            {
              key: "modal-header",
              fn: function(ref) {
                var close = ref.close
                return [_c("h5", [_vm._v("Pilih gambar")])]
              }
            },
            {
              key: "modal-footer",
              fn: function(ref) {
                var cancel = ref.cancel
                return [
                  _c(
                    "b-button",
                    {
                      attrs: { size: "sm", variant: "secondary" },
                      on: {
                        click: function($event) {
                          return cancel()
                        }
                      }
                    },
                    [_vm._v("\n          Tutup\n        ")]
                  )
                ]
              }
            }
          ])
        },
        [
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-md-4" },
              [
                _c("img", {
                  staticStyle: { "max-width": "100%" },
                  attrs: { src: _vm.gambar_pilih }
                }),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c(
                  "b-button",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.gambar_pilih != "",
                        expression: "gambar_pilih != ''"
                      }
                    ],
                    attrs: { size: "sm", variant: "primary", squared: "" },
                    on: { click: _vm.masukGambar }
                  },
                  [_vm._v("Masukkan gambar")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-8" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v("Direktori")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.direktory,
                        expression: "direktory"
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
                        _vm.direktory = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "" } }, [
                      _vm._v("Pilih direktori")
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.directories, function(directorie) {
                      return _c("option", {
                        domProps: {
                          value: directorie.id,
                          textContent: _vm._s(directorie.name)
                        }
                      })
                    })
                  ],
                  2
                )
              ]),
              _vm._v(" "),
              _c(
                "table",
                {
                  staticClass: "table table-striped table-hover table-bordered"
                },
                [
                  _c("tr", [
                    _c("td", [_vm._v("Nama file")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("View")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("Aksi")])
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.contentDirectory.data, function(content, index) {
                    return _c("tr", [
                      _c("td", [
                        _c("a", {
                          staticClass: "text-info",
                          domProps: { textContent: _vm._s(content.filename) }
                        })
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c("img", {
                          staticClass: "img-thumbnail rounded-0",
                          staticStyle: { "max-width": "100px" },
                          attrs: {
                            src:
                              "/storage/" +
                              content.dirname +
                              "/" +
                              content.filename
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c(
                            "b-button",
                            {
                              attrs: { variant: "light", squared: "" },
                              on: {
                                click: function($event) {
                                  return _vm.pilihGambar(index)
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                  Lihat\n                "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ])
                  })
                ],
                2
              )
            ])
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
    return _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "card-body" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-6" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", [_vm._v("Tipe soal")]),
              _vm._v(" "),
              _c("select", { staticClass: "form-control" }, [
                _c("option", [_vm._v("Pilihan ganda")]),
                _vm._v(" "),
                _c("option", [_vm._v("Essai")])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", [_vm._v("File audio")]),
              _vm._v(" "),
              _c("input", {
                staticClass: "form-control",
                attrs: { type: "text", readonly: "" }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "input-group" }, [
              _c("div", { staticClass: "custom-file" }, [
                _c("input", {
                  staticClass: "custom-file-input",
                  attrs: { type: "file" }
                }),
                _vm._v(" "),
                _c("label", { staticClass: "custom-file-label" }, [
                  _vm._v("Pilih File...")
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "input-group-append" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-outline-primary",
                    attrs: { type: "button" }
                  },
                  [_vm._v("Upload")]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-6" })
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/filemedia/dd.vue":
/*!*********************************************!*\
  !*** ./resources/js/pages/filemedia/dd.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dd_vue_vue_type_template_id_2df45670___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dd.vue?vue&type=template&id=2df45670& */ "./resources/js/pages/filemedia/dd.vue?vue&type=template&id=2df45670&");
/* harmony import */ var _dd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dd.vue?vue&type=script&lang=js& */ "./resources/js/pages/filemedia/dd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _dd_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dd.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/pages/filemedia/dd.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _dd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dd_vue_vue_type_template_id_2df45670___WEBPACK_IMPORTED_MODULE_0__["render"],
  _dd_vue_vue_type_template_id_2df45670___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/filemedia/dd.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/filemedia/dd.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/filemedia/dd.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./dd.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/filemedia/dd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/filemedia/dd.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/filemedia/dd.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dd_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./dd.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/filemedia/dd.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dd_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dd_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dd_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dd_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dd_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/pages/filemedia/dd.vue?vue&type=template&id=2df45670&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/filemedia/dd.vue?vue&type=template&id=2df45670& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dd_vue_vue_type_template_id_2df45670___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./dd.vue?vue&type=template&id=2df45670& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/filemedia/dd.vue?vue&type=template&id=2df45670&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dd_vue_vue_type_template_id_2df45670___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dd_vue_vue_type_template_id_2df45670___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);