(function(t){function a(a){for(var e,c,s=a[0],i=a[1],l=a[2],p=0,f=[];p<s.length;p++)c=s[p],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(e in i)Object.prototype.hasOwnProperty.call(i,e)&&(t[e]=i[e]);u&&u(a);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,a=0;a<o.length;a++){for(var n=o[a],e=!0,s=1;s<n.length;s++){var i=n[s];0!==r[i]&&(e=!1)}e&&(o.splice(a--,1),t=c(c.s=n[0]))}return t}var e={},r={app:0},o=[];function c(a){if(e[a])return e[a].exports;var n=e[a]={i:a,l:!1,exports:{}};return t[a].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=e,c.d=function(t,a,n){c.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,a){if(1&a&&(t=c(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)c.d(n,e,function(a){return t[a]}.bind(null,e));return n},c.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(a,"a",a),a},c.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=a,s=s.slice();for(var l=0;l<s.length;l++)a(s[l]);var u=i;o.push([0,"chunk-vendors"]),n()})({0:function(t,a,n){t.exports=n("56d7")},"034f":function(t,a,n){"use strict";var e=n("85ec"),r=n.n(e);r.a},"0f8a":function(t,a,n){},"356f":function(t,a,n){"use strict";var e=n("0f8a"),r=n.n(e);r.a},"56d7":function(t,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var e=n("2b0e"),r=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{attrs:{id:"app"}},[n("NavBar"),n("CoronaMap")],1)},o=[],c=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"card worldlist text-xl-left",staticStyle:{"max-height":"670px"}},[n("ul",{staticClass:"list-group list-group-flush overflow-auto"},t._l(t.sortCountries(t.countryCases,"confirmed"),(function(a){return n("li",{key:a[0],staticClass:"list-group-item",class:a[0]===t.currentCountry?"bg-secondary text-light":"",attrs:{title:a[0]},on:{click:t.changeCountryMap}},[n("div",{staticClass:"row"},[n("span",{staticClass:"col"},[t._v(t._s(a[0]))]),n("span",{staticClass:"col"},[t._v(t._s(a[1].confirmed))])])])})),0)]),n("iframe",{staticClass:"map justify-content-center rounded border-left-0 border-light",attrs:{src:t.mapSrc}})])},s=[],i=(n("99af"),n("bc3a")),l=n.n(i),u={name:"CoronaMap",methods:{onload:function(){var t=this;l.a.get("/api/daterange").then((function(a){var n=a.data;t.maxDate=n.max,t.minDate=n.min,t.mapSrc="api/map/".concat(t.maxDate,"/countries"),l.a.get("/api/".concat(t.maxDate,"/countries")).then((function(a){console.log(a.data),t.countryCases=a.data})).catch((function(t){return console.log(t)}))})).catch((function(t){return console.log(t)}))},sortCountries:function(t,a){var n=[];for(var e in t)n.push([e,t[e]]);return n.sort((function(t,n){return n[1][a]-t[1][a]}))},changeCountryMap:function(t){var a=t.target;while(!a.title)a=a.parentElement;a.title!==this.currentCountry?(this.currentCountry=a.title,this.mapSrc="/api/map/".concat(this.maxDate,"/").concat(this.currentCountry)):(this.currentCountry="",this.mapSrc=this.mapSrc="/api/map/".concat(this.maxDate,"/countries"))}},data:function(){return{mapSrc:"",maxDate:"",minDate:"",countryCases:{},currentCountry:""}},mounted:function(){this.onload()}},p=u,f=(n("356f"),n("2877")),d=Object(f["a"])(p,c,s,!1,null,"809adb96",null),v=d.exports,h=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[n("a",{attrs:{target:"_blank",href:"http://dblab.usc.edu/new/Default.aspx"}},[n("img",{attrs:{src:"http://dblab.usc.edu/images/logo.gif",alt:"USC DBLAB"}})]),n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})]),n("div",{staticClass:"collapse navbar-collapse"},[n("ul",{staticClass:"navbar-nav"},[n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Coronavirus Tracking")])])])])])}],b={name:"NavBar"},m=b,y=Object(f["a"])(m,h,g,!1,null,"7c076100",null),C=y.exports,x={name:"App",components:{CoronaMap:v,NavBar:C}},_=x,w=(n("034f"),Object(f["a"])(_,r,o,!1,null,null,null)),j=w.exports;n("4989"),n("ab8b");e["a"].config.productionTip=!1,new e["a"]({render:function(t){return t(j)}}).$mount("#app")},"85ec":function(t,a,n){}});
//# sourceMappingURL=app.258c6a96.js.map