(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{125:function(e,t,s){"use strict";s.r(t);var a=s(1);function r(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function n(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?r(s,!0).forEach((function(t){i(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(s).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function i(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}var o={name:"PesertaUjian",created:function(){this.getPesertas(this.$route.params.ujian_id)},data:function(){return{fields:[{key:"peserta.no_ujian",label:"No ujian"},{key:"peserta.nama",label:"Nama peserta"},{key:"status",label:"Status"},{key:"sisa",label:"Sisa waktu"}],isBusy:!0}},computed:n({},Object(a.e)("ujian",{pesertas:function(e){return e.pesertas}})),methods:n({},Object(a.b)("ujian",["getPesertas"]),{refreshTable:function(){this.getPesertas(this.$route.params.ujian_id)}}),watch:{pesertas:function(){this.isBusy=!1}}},u=s(4),c=Object(u.a)(o,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[s("router-link",{staticClass:"btn btn-warning btn-sm rounded-0",attrs:{to:{name:"ujian.data"}}},[e._v("Kembali ")]),e._v(" "),s("b-button",{attrs:{variant:"info",size:"sm",squared:""},on:{click:e.refreshTable}},[e._v("Refresh")])],1),e._v(" "),s("div",{staticClass:"card-body"},[s("b-table",{attrs:{striped:"",hover:"",bordered:"",busy:e.isBusy,small:"",fields:e.fields,items:e.pesertas.data,"show-empty":""},scopedSlots:e._u([{key:"table-busy",fn:function(){return[s("div",{staticClass:"text-center text-warning my-2"},[s("b-spinner",{staticClass:"align-middle"}),e._v(" "),s("strong",[e._v("Loading...")])],1)]},proxy:!0},{key:"cell(status)",fn:function(t){return[e._v("\n                            "+e._s("0"==t.item.status_ujian?"Masih mengerjakan":"Selesai")+"\n                        ")]}},{key:"cell(sisa)",fn:function(t){return[e._v("\n                        \t"+e._s(Math.floor(t.item.sisa_waktu/60)+" Menit")+"\n                        ")]}}])})],1),e._v(" "),s("div",{staticClass:"card-footer"})])])])}),[],!1,null,null,null);t.default=c.exports}}]);