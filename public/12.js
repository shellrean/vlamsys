(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{30:function(t,n,e){var a=e(71);"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(15)(a,i);a.locals&&(t.exports=a.locals)},70:function(t,n,e){"use strict";var a=e(30);e.n(a).a},71:function(t,n,e){(t.exports=e(14)(!1)).push([t.i,"\n.action-link[data-v-1a6c22aa] {\n    cursor: pointer;\n}\n",""])},92:function(t,n,e){"use strict";e.r(n);var a={data:function(){return{tokens:[]}},ready:function(){this.prepareComponent()},mounted:function(){this.prepareComponent()},methods:{prepareComponent:function(){this.getTokens()},getTokens:function(){var t=this;axios.get("/oauth/tokens").then((function(n){t.tokens=n.data}))},revoke:function(t){var n=this;axios.delete("/oauth/tokens/"+t.id).then((function(t){n.getTokens()}))}}},i=(e(70),e(4)),s=Object(i.a)(a,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t.tokens.length>0?e("div",[e("div",{staticClass:"card card-default"},[e("div",{staticClass:"card-header"},[t._v("Authorized Applications")]),t._v(" "),e("div",{staticClass:"card-body"},[e("table",{staticClass:"table table-borderless mb-0"},[t._m(0),t._v(" "),e("tbody",t._l(t.tokens,(function(n){return e("tr",[e("td",{staticStyle:{"vertical-align":"middle"}},[t._v("\n                                "+t._s(n.client.name)+"\n                            ")]),t._v(" "),e("td",{staticStyle:{"vertical-align":"middle"}},[n.scopes.length>0?e("span",[t._v("\n                                    "+t._s(n.scopes.join(", "))+"\n                                ")]):t._e()]),t._v(" "),e("td",{staticStyle:{"vertical-align":"middle"}},[e("a",{staticClass:"action-link text-danger",on:{click:function(e){return t.revoke(n)}}},[t._v("\n                                    Revoke\n                                ")])])])})),0)])])])]):t._e()])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("thead",[n("tr",[n("th",[this._v("Name")]),this._v(" "),n("th",[this._v("Scopes")]),this._v(" "),n("th")])])}],!1,null,"1a6c22aa",null);n.default=s.exports}}]);