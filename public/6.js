(window.webpackJsonp=window.webpackJsonp||[]).push([[6,8],{100:function(t,e,i){"use strict";i.r(e);var n=i(1),a=i(7),o=i(3),s=i(22);function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function l(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(i,!0).forEach((function(e){c(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function c(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var u={created:function(){this.getBanksoal(this.$route.params.banksoal_id)},components:{EditorContent:a.b,EditorFloatingMenu:a.c,EditorMenuBar:a.d,AudioPlayer:s.default},data:function(){return{correct:"",question:new a.a({extensions:[new o.a,new o.i,new o.c,new o.e,new o.f,new o.g({levels:[1,2,3]}),new o.l,new o.m,new o.p,new o.q,new o.k,new o.b,new o.d,new o.j,new o.o,new o.r,new o.h,new o.n({emptyNodeClass:"is-empty",emptyNodeText:"Tulis pertanyaan …",showOnlyWhenEditable:!0})],content:""}),pilihan:[],jmlh_pilihan:"",gambar_pilih:"",command:"",direktory:"",tipe_soal:1,audio:"",fileAudio:"",labelAudio:""}},computed:l({},Object(n.c)(["isLoading"]),{},Object(n.e)(["errors"]),{},Object(n.e)("banksoal",{banksoal:function(t){return t.banksoal.data}}),{},Object(n.e)("filemedia",{contentDirectory:function(t){return t.contentFilemedia},directories:function(t){return t.directories.data}}),{page:{get:function(){return this.$store.state.filemedia.page},set:function(t){this.$store.commit("filemedia/SET_PAGE",t)}}}),filters:{charIndex:function(t){return String.fromCharCode(97+t)}},methods:l({},Object(n.b)("filemedia",["getContentFilemedia","getDirectories","uploadFileAudio","getDirectory"]),{},Object(n.b)("banksoal",["addSoalBanksoal","getBanksoal"]),{},Object(n.d)(["CLEAR_ERRORS","SET_LOADING"]),{postSoalBanksoal:function(){var t=this;if(""!==this.correct){this.SET_LOADING(!0);var e=[];this.pilihan.forEach((function(t){e.push(t.getHTML())})),this.addSoalBanksoal({pertanyaan:this.question.getHTML(),banksoal_id:this.$route.params.banksoal_id,pilihan:e,correct:this.correct,tipe_soal:this.tipe_soal,audio:this.audio}).then((function(e){t.$notify({group:"foo",title:"Sukses",type:"success",text:"Soal berhasil disimpan."}),t.clearForm()})).catch((function(){t.$notify({group:"foo",title:"Error",type:"error",text:"Terjadi kesalahan saat menyimpan soal"})}))}else this.$swal({title:"Kunci jawaban kosong",text:"Pilih jawaban yang benar",type:"warning"})},clearForm:function(){this.question.setContent(""),this.correct="",this.pilihan.forEach((function(t){t.setContent("")})),this.audio="",this.labelAudio="",this.fileAudio=""},initEditor:function(){var t;for(t=0;t<this.jmlh_pilihan;t++){var e=new a.a({extensions:[new o.a,new o.i,new o.c,new o.e,new o.f,new o.g({levels:[1,2,3]}),new o.l,new o.m,new o.p,new o.q,new o.k,new o.b,new o.d,new o.j,new o.o,new o.r,new o.h,new o.n({emptyNodeClass:"is-empty",emptyNodeText:"Tulis pilihan".concat(t+1," …"),showOnlyWhenEditable:!0})],content:""});this.pilihan.push(e)}},showImagePrompt:function(t){this.$bvModal.show("modal-scoped"),this.command=t},onSelectImage:function(t){},pilihGambar:function(t){var e=this.contentDirectory.data[t];this.gambar_pilih="http://192.168.0.200/storage/"+e.dirname+"/"+e.filename},masukGambar:function(){(0,this.command)({src:this.gambar_pilih})},getContentFile:function(){""!=this.direktory&&this.getContentFilemedia(this.direktory)},handleFileUpload:function(t){this.labelAudio=t.target.files[0].name,this.fileAudio=t.target.files[0]},submitFile:function(){var t=this,e=new FormData;e.append("file",this.fileAudio),this.uploadFileAudio(e).then((function(e){t.audio=e.data,t.fileAudio="",t.labelAudio=""}))},removeAudio:function(){this.audio=""}}),watch:{banksoal:function(t){this.jmlh_pilihan=t.jumlah_pilihan,this.initEditor(),this.getContentFilemedia(t.directory_id)},direktory:function(t){""!=t&&this.getContentFilemedia(t)},page:function(){this.getContentFilemedia(this.banksoal.directory_id)}}},d=(i(81),i(4)),p=Object(d.a)(u,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-12"},[i("div",{staticClass:"card"},[i("div",{staticClass:"card-header"},[i("router-link",{staticClass:"btn btn-warning btn-sm rounded-0",attrs:{to:{name:"banksoal.soal",params:{banksoal_id:t.$route.params.banksoal_id}}}},[t._v("Kembali")])],1),t._v(" "),i("div",{staticClass:"card-body"},[i("div",{staticClass:"card"},[t._m(0),t._v(" "),i("div",{staticClass:"card-body"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6"},[i("div",{staticClass:"form-group"},[i("label",[t._v("Tipe soal")]),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.tipe_soal,expression:"tipe_soal"}],staticClass:"form-control",on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.tipe_soal=e.target.multiple?i:i[0]}}},[i("option",{attrs:{value:"1"}},[t._v("Pilihan ganda")]),t._v(" "),i("option",{attrs:{value:"2"}},[t._v("Essai")])])]),t._v(" "),""==t.audio?i("div",{staticClass:"form-group"},[i("label",[t._v("File audio")]),t._v(" "),i("div",{staticClass:"input-group"},[i("div",{staticClass:"custom-file"},[i("input",{staticClass:"custom-file-input",attrs:{type:"file"},on:{change:t.handleFileUpload}}),t._v(" "),i("label",{staticClass:"custom-file-label"},[t._v(t._s(t.labelAudio?t.labelAudio:"Pilih File..."))])]),t._v(" "),i("div",{staticClass:"input-group-append"},[i("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button"},on:{click:t.submitFile}},[t._v("Upload")])])])]):t._e(),t._v(" "),""!=t.audio?i("div",{staticClass:"form-group"},[i("label",[t._v("File audio")]),t._v(" "),i("div",{staticClass:"input-group"},[i("b-button",{attrs:{size:"sm",variant:"danger"},on:{click:t.removeAudio}},[i("font-awesome-icon",{attrs:{icon:"times"}})],1),i("audio-player",{attrs:{file:"/storage/audio/"+t.audio}})],1)]):t._e()]),t._v(" "),i("div",{staticClass:"col-md-6"})])])]),t._v(" "),i("div",{staticClass:"card"},[t._m(1),t._v(" "),i("div",{staticClass:"card-body"},[i("div",{staticClass:"editor"},[i("editor-menu-bar",{attrs:{editor:t.question},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.commands,a=e.isActive;return[i("div",{staticClass:"menubar"},[i("button",{staticClass:"menubar__button",on:{click:function(e){return t.showImagePrompt(n.image)}}},[i("font-awesome-icon",{attrs:{icon:"image"}})],1),t._v(" "),i("button",{staticClass:"menubar__button",class:{"is-active":a.bold()},on:{click:n.bold}},[i("font-awesome-icon",{attrs:{icon:"bold"}})],1),t._v(" "),i("button",{staticClass:"menubar__button",class:{"is-active":a.italic()},on:{click:n.italic}},[i("font-awesome-icon",{attrs:{icon:"italic"}})],1),t._v(" "),i("button",{staticClass:"menubar__button",class:{"is-active":a.strike()},on:{click:n.strike}},[i("font-awesome-icon",{attrs:{icon:"strikethrough"}})],1),t._v(" "),i("button",{staticClass:"menubar__button",class:{"is-active":a.underline()},on:{click:n.underline}},[i("font-awesome-icon",{attrs:{icon:"underline"}})],1),t._v(" "),i("button",{staticClass:"menubar__button",class:{"is-active":a.paragraph()},on:{click:n.paragraph}},[i("font-awesome-icon",{attrs:{icon:"paragraph"}})],1),t._v(" "),i("button",{staticClass:"menubar__button",class:{"is-active":a.heading({level:1})},on:{click:function(t){return n.heading({level:1})}}},[t._v("\n                    H1\n                  ")]),t._v(" "),i("button",{staticClass:"menubar__button",class:{"is-active":a.heading({level:2})},on:{click:function(t){return n.heading({level:2})}}},[t._v("\n                    H2\n                  ")]),t._v(" "),i("button",{staticClass:"menubar__button",class:{"is-active":a.heading({level:3})},on:{click:function(t){return n.heading({level:3})}}},[t._v("\n                    H3\n                  ")]),t._v(" "),i("button",{staticClass:"menubar__button",class:{"is-active":a.bullet_list()},on:{click:n.bullet_list}},[i("font-awesome-icon",{attrs:{icon:"list"}})],1),t._v(" "),i("button",{staticClass:"menubar__button",class:{"is-active":a.ordered_list()},on:{click:n.ordered_list}},[i("font-awesome-icon",{attrs:{icon:"list-ol"}})],1),t._v(" "),i("button",{staticClass:"menubar__button",class:{"is-active":a.blockquote()},on:{click:n.blockquote}},[i("font-awesome-icon",{attrs:{icon:"quote-right"}})],1),t._v(" "),i("button",{staticClass:"menubar__button",on:{click:n.undo}},[i("font-awesome-icon",{attrs:{icon:"undo"}})],1),t._v(" "),i("button",{staticClass:"menubar__button",on:{click:n.redo}},[i("font-awesome-icon",{attrs:{icon:"redo"}})],1)])]}}])}),t._v(" "),i("editor-content",{staticClass:"editor__content",attrs:{editor:t.question}})],1)])]),t._v(" "),1==t.tipe_soal?i("div",{staticClass:"card"},[t._m(2),t._v(" "),i("div",{staticClass:"card-body"},[i("div",{staticClass:"editor"},[i("table",{staticClass:"table table-borderless"},t._l(t.pilihan,(function(e,n){return i("tr",[i("td",{attrs:{width:"10px"}},[i("b-form-radio",{attrs:{name:"correct",size:"lg",value:n},model:{value:t.correct,callback:function(e){t.correct=e},expression:"correct"}},[i("span",{staticClass:"text-uppercase"},[t._v(t._s(t._f("charIndex")(n)))])])],1),t._v(" "),i("td",[i("editor-menu-bar",{attrs:{editor:t.pilihan[n]},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.commands,a=e.isActive;return[i("div",{staticClass:"menubar"},[i("button",{staticClass:"menubar__button",on:{click:function(e){return t.showImagePrompt(n.image)}}},[i("font-awesome-icon",{attrs:{icon:"image"}})],1),t._v(" "),i("button",{staticClass:"menubar__button",class:{"is-active":a.bold()},on:{click:n.bold}},[i("font-awesome-icon",{attrs:{icon:"bold"}})],1),t._v(" "),i("button",{staticClass:"menubar__button",class:{"is-active":a.italic()},on:{click:n.italic}},[i("font-awesome-icon",{attrs:{icon:"italic"}})],1),t._v(" "),i("button",{staticClass:"menubar__button",class:{"is-active":a.strike()},on:{click:n.strike}},[i("font-awesome-icon",{attrs:{icon:"strikethrough"}})],1),t._v(" "),i("button",{staticClass:"menubar__button",class:{"is-active":a.underline()},on:{click:n.underline}},[i("font-awesome-icon",{attrs:{icon:"underline"}})],1),t._v(" "),i("button",{staticClass:"menubar__button",class:{"is-active":a.paragraph()},on:{click:n.paragraph}},[i("font-awesome-icon",{attrs:{icon:"paragraph"}})],1),t._v(" "),i("button",{staticClass:"menubar__button",class:{"is-active":a.heading({level:1})},on:{click:function(t){return n.heading({level:1})}}},[t._v("\n                      H1\n                    ")]),t._v(" "),i("button",{staticClass:"menubar__button",class:{"is-active":a.heading({level:2})},on:{click:function(t){return n.heading({level:2})}}},[t._v("\n                      H2\n                    ")]),t._v(" "),i("button",{staticClass:"menubar__button",class:{"is-active":a.heading({level:3})},on:{click:function(t){return n.heading({level:3})}}},[t._v("\n                      H3\n                    ")]),t._v(" "),i("button",{staticClass:"menubar__button",class:{"is-active":a.bullet_list()},on:{click:n.bullet_list}},[i("font-awesome-icon",{attrs:{icon:"list"}})],1),t._v(" "),i("button",{staticClass:"menubar__button",class:{"is-active":a.ordered_list()},on:{click:n.ordered_list}},[i("font-awesome-icon",{attrs:{icon:"list-ol"}})],1),t._v(" "),i("button",{staticClass:"menubar__button",class:{"is-active":a.blockquote()},on:{click:n.blockquote}},[i("font-awesome-icon",{attrs:{icon:"quote-right"}})],1),t._v(" "),i("button",{staticClass:"menubar__button",on:{click:n.undo}},[i("font-awesome-icon",{attrs:{icon:"undo"}})],1),t._v(" "),i("button",{staticClass:"menubar__button",on:{click:n.redo}},[i("font-awesome-icon",{attrs:{icon:"redo"}})],1)])]}}],null,!0)}),t._v(" "),i("editor-content",{staticClass:"editor__content",attrs:{editor:t.pilihan[n]}})],1)])})),0)])])]):t._e()]),t._v(" "),i("div",{staticClass:"card-footer"},[i("b-button",{attrs:{variant:"success",squared:"",size:"sm",disabled:t.isLoading},on:{click:function(e){return e.preventDefault(),t.postSoalBanksoal(e)}}},[i("b-spinner",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],attrs:{small:"",type:"grow"}}),t._v("\n          Simpan\n        ")],1)],1)])]),t._v(" "),i("b-modal",{attrs:{id:"modal-scoped","hide-backdrop":"",size:"xl"},scopedSlots:t._u([{key:"modal-header",fn:function(e){e.close;return[i("h5",[t._v("Pilih gambar")])]}},{key:"modal-footer",fn:function(e){var n=e.cancel;return[i("b-button",{attrs:{size:"sm",variant:"secondary"},on:{click:function(t){return n()}}},[t._v("\n          Tutup\n        ")])]}}])},[t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-4"},[i("img",{staticStyle:{"max-width":"100%"},attrs:{src:t.gambar_pilih}}),t._v(" "),i("br"),t._v(" "),i("br"),t._v(" "),i("b-button",{directives:[{name:"show",rawName:"v-show",value:""!=t.gambar_pilih,expression:"gambar_pilih != ''"}],attrs:{size:"sm",variant:"primary",squared:""},on:{click:t.masukGambar}},[t._v("Masukkan gambar")])],1),t._v(" "),i("div",{staticClass:"col-md-8"},[i("table",{staticClass:"table table-striped table-hover table-bordered"},[i("tr",[i("td",[t._v("Nama file")]),t._v(" "),i("td",[t._v("View")]),t._v(" "),i("td",[t._v("Aksi")])]),t._v(" "),t._l(t.contentDirectory.data,(function(e,n){return i("tr",[i("td",[i("a",{staticClass:"text-info",domProps:{textContent:t._s(e.filename)}})]),t._v(" "),i("td",[i("img",{staticClass:"img-thumbnail rounded-0",staticStyle:{"max-width":"100px"},attrs:{src:"http://192.168.0.200/storage/"+e.dirname+"/"+e.filename}})]),t._v(" "),i("td",[i("b-button",{attrs:{variant:"light",squared:""},on:{click:function(e){return t.pilihGambar(n)}}},[t._v("\n                  Lihat\n                ")])],1)])}))],2),t._v(" "),t.contentDirectory.data&&t.contentDirectory.data.length>0?i("b-pagination",{attrs:{"total-rows":t.contentDirectory.meta.total,"per-page":t.contentDirectory.meta.per_page,"aria-controls":"products"},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}}):t._e()],1)])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header"},[e("b",[this._v("Setting soal")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header"},[e("b",[this._v("Pertanyaan")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header"},[e("b",[this._v("Pilihan")])])}],!1,null,null,null);e.default=p.exports},22:function(t,e,i){"use strict";i.r(e);var n={props:{file:{type:String,default:null},autoPlay:{type:Boolean,default:!1},loop:{type:Boolean,default:!1}},data:function(){return{audio:void 0,currentSeconds:0,durationSeconds:0,innerLoop:!1,loaded:!1,playing:!1,previousVolume:35,showVolume:!1,volume:100}},computed:{percentComplete:function(){return parseInt(this.currentSeconds/this.durationSeconds*100)},muted:function(){return this.volume/100==0}},filters:{convertTimeHHMMSS:function(t){var e=new Date(1e3*t).toISOString().substr(11,8);return 0===e.indexOf("00:")?e.substr(3):e}},watch:{playing:function(t){if(t)return this.audio.play();this.audio.pause()},volume:function(t){this.showVolume=!1,this.audio.volume=this.volume/100}},methods:{download:function(){this.stop(),window.open(this.file,"download")},load:function(){if(this.audio.readyState>=2)return this.loaded=!0,this.durationSeconds=parseInt(this.audio.duration),this.playing=this.autoPlay;throw new Error("Failed to load sound file.")},mute:function(){if(this.muted)return this.volume=this.previousVolume;this.previousVolume=this.volume,this.volume=0},seek:function(t){if(this.playing&&"SPAN"!==t.target.tagName){var e=t.target.getBoundingClientRect(),i=(t.clientX-e.left)/e.width;this.audio.currentTime=parseInt(this.audio.duration*i)}},stop:function(){this.playing=!1,this.audio.currentTime=0},update:function(t){this.currentSeconds=parseInt(this.audio.currentTime)}},created:function(){this.innerLoop=this.loop},mounted:function(){var t=this;this.audio=this.$el.querySelectorAll("audio")[0],this.audio.addEventListener("timeupdate",this.update),this.audio.addEventListener("loadeddata",this.load),this.audio.addEventListener("pause",(function(){t.playing=!1})),this.audio.addEventListener("play",(function(){t.playing=!0}))}},a=(i(65),i(4)),o=Object(a.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"player-wrapper",attrs:{id:"audio"}},[i("div",{staticClass:"player"},[i("div",{staticClass:"player-controls"},[i("div",[i("a",{attrs:{title:"Stop",href:"#"},on:{click:function(e){return e.preventDefault(),t.stop(e)}}},[i("svg",{attrs:{width:"18px",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[i("path",{attrs:{fill:"currentColor",d:"M16,4.995v9.808C16,15.464,15.464,16,14.804,16H4.997C4.446,16,4,15.554,4,15.003V5.196C4,4.536,4.536,4,5.196,4h9.808C15.554,4,16,4.446,16,4.995z"}})])])]),t._v(" "),i("div",[i("a",{attrs:{title:"Play/Pause",href:"#"},on:{click:function(e){e.preventDefault(),t.playing=!t.playing}}},[i("svg",{attrs:{width:"18px",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[t.playing?i("path",{attrs:{fill:"currentColor",d:"M15,3h-2c-0.553,0-1,0.048-1,0.6v12.8c0,0.552,0.447,0.6,1,0.6h2c0.553,0,1-0.048,1-0.6V3.6C16,3.048,15.553,3,15,3z M7,3H5C4.447,3,4,3.048,4,3.6v12.8C4,16.952,4.447,17,5,17h2c0.553,0,1-0.048,1-0.6V3.6C8,3.048,7.553,3,7,3z"}}):i("path",{attrs:{fill:"currentColor",d:"M15,10.001c0,0.299-0.305,0.514-0.305,0.514l-8.561,5.303C5.51,16.227,5,15.924,5,15.149V4.852c0-0.777,0.51-1.078,1.135-0.67l8.561,5.305C14.695,9.487,15,9.702,15,10.001z"}})])])]),t._v(" "),i("div",[i("div",{staticClass:"player-progress",attrs:{title:"Time played : Total time"},on:{click:t.seek}},[i("div",{staticClass:"player-seeker",style:{width:this.percentComplete+"%"}})]),t._v(" "),i("div",{staticClass:"player-time"},[i("div",{staticClass:"player-time-current"},[t._v(t._s(t._f("convertTimeHHMMSS")(this.currentSeconds)))]),t._v(" "),i("div",{staticClass:"player-time-total"},[t._v(t._s(t._f("convertTimeHHMMSS")(this.durationSeconds)))])])]),t._v(" "),i("div",[i("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.download(e)}}},[i("svg",{attrs:{width:"18px",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[i("path",{attrs:{fill:"currentColor",d:"M15,7h-3V1H8v6H5l5,5L15,7z M19.338,13.532c-0.21-0.224-1.611-1.723-2.011-2.114C17.062,11.159,16.683,11,16.285,11h-1.757l3.064,2.994h-3.544c-0.102,0-0.194,0.052-0.24,0.133L12.992,16H7.008l-0.816-1.873c-0.046-0.081-0.139-0.133-0.24-0.133H2.408L5.471,11H3.715c-0.397,0-0.776,0.159-1.042,0.418c-0.4,0.392-1.801,1.891-2.011,2.114c-0.489,0.521-0.758,0.936-0.63,1.449l0.561,3.074c0.128,0.514,0.691,0.936,1.252,0.936h16.312c0.561,0,1.124-0.422,1.252-0.936l0.561-3.074C20.096,14.468,19.828,14.053,19.338,13.532z"}})])])]),t._v(" "),i("div",[i("a",{attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.innerLoop=!t.innerLoop}}},[i("svg",{attrs:{width:"18px",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[t.innerLoop?i("path",{attrs:{fill:"currentColor",d:"M20,7v7c0,1.103-0.896,2-2,2H2c-1.104,0-2-0.897-2-2V7c0-1.104,0.896-2,2-2h7V3l4,3.5L9,10V8H3v5h14V8h-3V5h4C19.104,5,20,5.896,20,7z"}}):i("path",{attrs:{fill:"currentColor",d:"M1,12V5h3v6h10V8l5,4.5L14,17v-3H3C1.895,14,1,13.104,1,12z"}})])])]),t._v(" "),i("div",[i("a",{attrs:{title:"Mute",href:"#"},on:{click:function(e){return e.preventDefault(),t.mute(e)}}},[i("svg",{attrs:{width:"18px",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[t.muted?i("path",{attrs:{fill:"currentColor",d:"M14.201,9.194c1.389,1.883,1.818,3.517,1.559,3.777c-0.26,0.258-1.893-0.17-3.778-1.559l-5.526,5.527c4.186,1.838,9.627-2.018,10.605-2.996c0.925-0.922,0.097-3.309-1.856-5.754L14.201,9.194z M8.667,7.941c-1.099-1.658-1.431-3.023-1.194-3.26c0.233-0.234,1.6,0.096,3.257,1.197l1.023-1.025C9.489,3.179,7.358,2.519,6.496,3.384C5.568,4.31,2.048,9.261,3.265,13.341L8.667,7.941z M18.521,1.478c-0.39-0.391-1.023-0.391-1.414,0L1.478,17.108c-0.391,0.391-0.391,1.024,0,1.414c0.391,0.391,1.023,0.391,1.414,0l15.629-15.63C18.912,2.501,18.912,1.868,18.521,1.478z"}}):i("path",{attrs:{fill:"currentColor",d:"M5.312,4.566C4.19,5.685-0.715,12.681,3.523,16.918c4.236,4.238,11.23-0.668,12.354-1.789c1.121-1.119-0.335-4.395-3.252-7.312C9.706,4.898,6.434,3.441,5.312,4.566z M14.576,14.156c-0.332,0.328-2.895-0.457-5.364-2.928C6.745,8.759,5.956,6.195,6.288,5.865c0.328-0.332,2.894,0.457,5.36,2.926C14.119,11.258,14.906,13.824,14.576,14.156zM15.434,5.982l1.904-1.906c0.391-0.391,0.391-1.023,0-1.414c-0.39-0.391-1.023-0.391-1.414,0L14.02,4.568c-0.391,0.391-0.391,1.024,0,1.414C14.41,6.372,15.043,6.372,15.434,5.982z M11.124,3.8c0.483,0.268,1.091,0.095,1.36-0.388l1.087-1.926c0.268-0.483,0.095-1.091-0.388-1.36c-0.482-0.269-1.091-0.095-1.36,0.388L10.736,2.44C10.468,2.924,10.642,3.533,11.124,3.8z M19.872,6.816c-0.267-0.483-0.877-0.657-1.36-0.388l-1.94,1.061c-0.483,0.268-0.657,0.878-0.388,1.36c0.268,0.483,0.877,0.657,1.36,0.388l1.94-1.061C19.967,7.907,20.141,7.299,19.872,6.816z"}})])])]),t._v(" "),i("div",[i("a",{attrs:{title:"Volume",href:"#"},on:{click:function(t){t.preventDefault()},mouseenter:function(e){t.showVolume=!0}}},[i("svg",{attrs:{width:"18px",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[i("path",{attrs:{fill:"currentColor",d:"M19,13.805C19,14.462,18.462,15,17.805,15H1.533c-0.88,0-0.982-0.371-0.229-0.822l16.323-9.055C18.382,4.67,19,5.019,19,5.9V13.805z"}})]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model.lazy.number",value:t.volume,expression:"volume",modifiers:{lazy:!0,number:!0}},{name:"show",rawName:"v-show",value:t.showVolume,expression:"showVolume"}],attrs:{type:"range",min:"0",max:"100"},domProps:{value:t.volume},on:{change:function(e){t.volume=t._n(e.target.value)},blur:function(e){return t.$forceUpdate()}}})])])]),t._v(" "),i("audio",{ref:"audiofile",staticStyle:{display:"none"},attrs:{loop:t.innerLoop,src:t.file,preload:"auto"}})])])}),[],!1,null,null,null);e.default=o.exports},28:function(t,e,i){var n=i(66);"string"==typeof n&&(n=[[t.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};i(15)(n,a);n.locals&&(t.exports=n.locals)},34:function(t,e,i){var n=i(82);"string"==typeof n&&(n=[[t.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};i(15)(n,a);n.locals&&(t.exports=n.locals)},65:function(t,e,i){"use strict";var n=i(28);i.n(n).a},66:function(t,e,i){(t.exports=i(14)(!1)).push([t.i,".player-wrapper {\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: #fff;\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(0, #fff), to(#e0e0e0));\n  background-image: linear-gradient(90deg, #fff 0, #e0e0e0);\n  display: -webkit-box;\n  display: flex;\n}\n.player {\n  background-color: #fff;\n  border-radius: 5px;\n  border: 1px solid #e0e0e0;\n  color: #404040;\n  display: inline-block;\n  line-height: 1.5625;\n}\n.player-controls {\n  display: -webkit-box;\n  display: flex;\n}\n.player-controls > div {\n  border-right: 1px solid #e0e0e0;\n}\n.player-controls > div:last-child {\n  border-right: none;\n}\n.player-controls > div a {\n  color: #404040;\n  display: block;\n  line-height: 0;\n  padding: 1em;\n  text-decoration: none;\n}\n.player-progress {\n  background-color: #e0e0e0;\n  cursor: pointer;\n  height: 50%;\n  min-width: 200px;\n  position: relative;\n}\n.player-progress .player-seeker {\n  background-color: #404040;\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  top: 0;\n}\n.player-time {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.player-time .player-time-current {\n  font-weight: 700;\n  padding-left: 5px;\n}\n.player-time .player-time-total {\n  opacity: 0.5;\n  padding-right: 5px;\n}",""])},81:function(t,e,i){"use strict";var n=i(34);i.n(n).a},82:function(t,e,i){(t.exports=i(14)(!1)).push([t.i,".menubar {\n  margin-bottom: 1rem;\n  -webkit-transition: visibility 0.2s 0.4s, opacity 0.2s 0.4s;\n  transition: visibility 0.2s 0.4s, opacity 0.2s 0.4s;\n}\n.menubar.is-hidden {\n  visibility: hidden;\n  opacity: 0;\n}\n.menubar.is-focused {\n  visibility: visible;\n  opacity: 1;\n  -webkit-transition: visibility 0.2s, opacity 0.2s;\n  transition: visibility 0.2s, opacity 0.2s;\n}\n.menubar__button {\n  font-weight: bold;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  background: transparent;\n  border: 0;\n  color: #000000;\n  padding: 0.2rem 0.5rem;\n  margin-right: 0.2rem;\n  border-radius: 3px;\n  cursor: pointer;\n}\n.menubar__button:hover {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.menubar__button.is-active {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.menubar span.menubar__button {\n  font-size: 13.3333px;\n}",""])}}]);