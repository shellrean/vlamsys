(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{108:function(t,e,r){"use strict";r.r(e);var s=r(1),a=r(42);function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(r,!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var c={name:"AddPeserta",data:function(){return{}},computed:i({},Object(s.c)(["isLoading"])),methods:i({},Object(s.b)("peserta",["submitPeserta"]),{submit:function(){var t=this;this.submitPeserta().then((function(){t.$router.push({name:"peserta.data"})}))}}),components:{"peserta-form":a.default}},u=r(4),l=Object(u.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[e("router-link",{staticClass:"btn btn-warning btn-sm rounded-0",attrs:{to:{name:"peserta.data"}}},[this._v("Kembali ")])],1),this._v(" "),e("div",{staticClass:"card-body"},[e("peserta-form"),this._v(" "),e("div",{staticClass:"form-group"},[e("b-button",{attrs:{squared:"",variant:"primary",disabled:this.isLoading},on:{click:this.submit}},[e("b-spinner",{directives:[{name:"show",rawName:"v-show",value:this.isLoading,expression:"isLoading"}],attrs:{small:"",type:"grow"}}),this._v(" Simpan\n\t\t\t\t\t")],1)],1)],1)])])])}),[],!1,null,null,null);e.default=l.exports}}]);