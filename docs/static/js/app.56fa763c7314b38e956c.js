webpackJsonp([0],{BdhR:function(t,a){},CIua:function(t,a){},HLud:function(t,a){},NHnr:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=n("7+uW"),i={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{attrs:{id:"app"}},[n("header",[n("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[t._m(0),t._v(" "),n("div",{staticClass:"navbar-menu",attrs:{id:"navbarmenu"}},[n("div",{staticClass:"navbar-start"},[n("a",{staticClass:"navbar-item"},[n("router-link",{attrs:{to:"/"}},[t._v("Top")])],1),t._v(" "),n("a",{staticClass:"navbar-item"},[n("router-link",{attrs:{to:"about"}},[t._v("About")])],1),t._v(" "),n("a",{staticClass:"navbar-item"},[n("router-link",{attrs:{to:"application"}},[t._v("Application")])],1),t._v(" "),n("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[n("a",{staticClass:"navbar-link"},[t._v("\n              More\n            ")]),t._v(" "),n("div",{staticClass:"navbar-dropdown"},[n("a",{staticClass:"navbar-item"},[n("router-link",{attrs:{to:"community"}},[t._v("Community")])],1),t._v(" "),n("a",{staticClass:"navbar-item"},[n("router-link",{attrs:{to:"job"}},[t._v("Job")])],1),t._v(" "),n("a",{staticClass:"navbar-item"},[n("router-link",{attrs:{to:"contact"}},[t._v("Contact")])],1),t._v(" "),n("hr",{staticClass:"navbar-divider"}),t._v(" "),t._m(1)])])])])]),t._v(" "),t._m(2)]),t._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:"/"}},[t._v("Top")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"about"}},[t._v("About")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"contact"}},[t._v("Contact")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"application"}},[t._v("application")])],1)]),t._v(" "),n("router-view")],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"navbar-brand"},[a("a",{staticClass:"navbar-item"},[a("img",{attrs:{src:n("afKr")}})]),this._v(" "),a("a",{staticClass:"navbar-burger burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"}},[a("span",{attrs:{"aria-hidden":"true"}}),this._v(" "),a("span",{attrs:{"aria-hidden":"true"}}),this._v(" "),a("span",{attrs:{"aria-hidden":"true"}})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"navbar-item"},[a("a",{attrs:{href:"https://github.com/zyundamochi080/zyundamochi080.github.io"}},[this._v("This repository")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("section",{staticClass:"hero is-primary"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"title"},[this._v("\n            Zyundamochi_080's Page\n          ")]),this._v(" "),a("h2",{staticClass:"subtitle"},[this._v("\n            Welcome to my page!\n          ")])])])])}]};var s=n("VU/8")({name:"App"},i,!1,function(t){n("CIua")},null,null).exports,r=n("/ocq"),o={render:function(){var t=this.$createElement;return(this._self._c||t)("p",[this._v("This is a my page.")])},staticRenderFns:[]};var c=n("VU/8")({name:"top",data:function(){return{msg:"Welcome to Your Vue.js App"}}},o,!1,function(t){n("HLud")},"data-v-01e449ec",null).exports,u={render:function(){var t=this.$createElement;return(this._self._c||t)("p",[this._v("about pages")])},staticRenderFns:[]};var l=n("VU/8")({name:"about",data:function(){return{msg:"about pages"}}},u,!1,function(t){n("fZqp")},"data-v-f552ea00",null).exports,v={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"hello"},[a("p",[this._v("application pages")])])}]};var p=n("VU/8")({name:"application",data:function(){return{msg:"application pages"}}},v,!1,function(t){n("BdhR")},"data-v-0f665d28",null).exports,m={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"hello"},[a("p",[this._v("contact pages")])])}]};var _=n("VU/8")({name:"contact",data:function(){return{msg:"contact pages"}}},m,!1,function(t){n("V7Ap")},"data-v-7f2ba34e",null).exports,h={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"hello"},[a("p",[this._v("community pages")])])}]};var d=n("VU/8")({name:"community",data:function(){return{msg:"community pages"}}},h,!1,function(t){n("iojE")},"data-v-168dde27",null).exports,f={render:function(){var t=this.$createElement;return(this._self._c||t)("p",[this._v("job pages")])},staticRenderFns:[]};var b=n("VU/8")({name:"job",data:function(){return{msg:"job pages"}}},f,!1,function(t){n("x3Ol")},"data-v-5b7a8730",null).exports;e.a.use(r.a);var g=new r.a({mode:"history",routes:[{path:"/",name:"top",component:c},{path:"/about",name:"about",component:l},{path:"/application",name:"application",component:p},{path:"/contact",name:"contact",component:_},{path:"/community",name:"community",component:d},{path:"/job",name:"job",component:b}]});e.a.config.productionTip=!1,new e.a({el:"#app",router:g,components:{App:s},template:"<App/>"})},V7Ap:function(t,a){},afKr:function(t,a,n){t.exports=n.p+"static/img/KG-logo.32a4f10.jpg"},fZqp:function(t,a){},iojE:function(t,a){},x3Ol:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.56fa763c7314b38e956c.js.map