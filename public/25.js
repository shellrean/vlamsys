(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{105:function(t,e,r){"use strict";r.r(e);var a=r(1),n=r(41);function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(r,!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var c={name:"AddMatpel",data:function(){return{}},computed:s({},Object(a.c)(["isLoading"])),methods:s({},Object(a.b)("matpel",["submitMatpel"]),{submit:function(){var t=this;this.submitMatpel().then((function(){t.$router.push({name:"matpel.data"})}))}}),components:{"matpel-form":n.default}},l=r(4),u=Object(l.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[e("router-link",{staticClass:"btn btn-warning btn-sm rounded-0",attrs:{to:{name:"matpel.data"}}},[this._v("kembali")])],1),this._v(" "),e("div",{staticClass:"card-body"},[e("matpel-form"),this._v(" "),e("div",{staticClass:"form-group"},[e("b-button",{attrs:{squared:"",variant:"primary",disabled:this.isLoading},on:{click:this.submit}},[e("b-spinner",{directives:[{name:"show",rawName:"v-show",value:this.isLoading,expression:"isLoading"}],attrs:{small:"",type:"grow"}}),this._v("Simpan")],1)],1)],1)])])])}),[],!1,null,null,null);e.default=u.exports}}]);