(function(t){function a(a){for(var s,c,i=a[0],o=a[1],l=a[2],f=0,d=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&d.push(n[c][0]),n[c]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(a);while(d.length)d.shift()();return r.push.apply(r,l||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],s=!0,i=1;i<e.length;i++){var o=e[i];0!==n[o]&&(s=!1)}s&&(r.splice(a--,1),t=c(c.s=e[0]))}return t}var s={},n={app:0},r=[];function c(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=t,c.c=s,c.d=function(t,a,e){c.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,a){if(1&a&&(t=c(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)c.d(e,s,function(a){return t[a]}.bind(null,s));return e},c.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(a,"a",a),a},c.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=a,i=i.slice();for(var l=0;l<i.length;l++)a(i[l]);var u=o;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";var s=e("85ec"),n=e.n(s);n.a},"0d05":function(t,a,e){"use strict";var s=e("9b6b"),n=e.n(s);n.a},4678:function(t,a,e){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var a=r(t);return e(a)}function r(t){if(!e.o(s,t)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=r,t.exports=n,n.id="4678"},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("NavBar"),e("CoronaMap")],1)},r=[],c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"card worldlist text-xl-left pl-2",staticStyle:{"max-height":"670px"}},[t._m(0),e("ul",{staticClass:"list-group list-group-flush overflow-auto"},t._l(t.sortCountries(t.countryCases,"confirmed"),(function(a){return e("li",{key:a[0],staticClass:"list-group-item",class:a[0]===t.currentCountry?"bg-secondary text-light":"",attrs:{title:a[0]}},[e("div",{staticClass:"row",on:{click:t.changeCountryMap}},[e("span",{staticClass:"col"},[t._v(t._s(a[0]))]),e("span",{staticClass:"col"},[t._v(t._s(a[1].confirmed))]),e("span",{staticClass:"col"},[t._v(t._s(a[1].death))])]),a[0]===t.currentCountry?e("div",{staticClass:"row text-dark"},[e("ul",{staticClass:"col"},t._l(t.sortData(t.stateCases,"confirmed"),(function(a){return e("li",{key:a[0],staticClass:"list-group-item",class:a[0]===t.currentState?"bg-secondary text-light":"",attrs:{title:a[0]}},[e("div",{staticClass:"row",on:{click:t.changeStateMap}},[e("div",{staticClass:"col"},[t._v(t._s(a[0]))]),e("div",{staticClass:"col"},[t._v(t._s(a[1].confirmed))]),e("div",{staticClass:"col"},[t._v(t._s(a[1].death))])])])})),0)]):t._e()])})),0)]),e("iframe",{staticClass:"map justify-content-center rounded border-left-0 border-light",attrs:{src:t.mapSrc}}),e("div",{staticClass:"card worldlist text-xl-left pl-2",staticStyle:{"max-height":"670px"}},[e("div",{staticClass:"row dem",staticStyle:{height:"230px"}},[e("demographics",{staticClass:"col h-40",attrs:{title:"Age of Coronavirus Deaths (%)",data:t.age}})],1),e("div",{staticClass:"row dem",staticStyle:{height:"220px"}},[e("demographics",{staticClass:"col",attrs:{title:"Sex Ratio (%)",data:t.sex}})],1),e("ul",{staticClass:"list-group list-group-flush overflow-auto",staticStyle:{"max-height":"220px"}},t._l(t.dateList,(function(a){return e("li",{key:a,staticClass:"list-group-item",class:a===t.currentDate?"bg-secondary text-light":"",attrs:{title:a}},[e("div",{staticClass:"row"},[e("span",{staticClass:"col",on:{click:t.changeDate}},[t._v(t._s(a))])])])})),0)])])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row h6"},[e("span",{staticClass:"col"},[t._v("Country")]),e("span",{staticClass:"col"},[t._v("confirmed")]),e("span",{staticClass:"col"},[t._v("death")])])}],o=(e("99af"),e("3835")),l=e("bc3a"),u=e.n(l),f=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("span",[t._v(t._s(t.title))]),e("bar-chart",{staticStyle:{height:"150px"},attrs:{data:t.data}})],1)},d=[],h={name:"demographics",props:{title:String,data:Array}},b=h,j=e("2877"),p=Object(j["a"])(b,f,d,!1,null,"66a9e4d0",null),g=p.exports,v={name:"CoronaMap",methods:{onload:function(){var t=this;u.a.get("/api/daterange").then((function(a){var e=a.data;""===t.currentDate&&(t.currentDate=e.max),t.maxDate=e.max,t.minDate=e.min,t.mapSrc="api/map/".concat(t.currentDate,"/countries"),u.a.get("/api/".concat(t.currentDate,"/countries")).then((function(a){t.countryCases=a.data})).catch((function(t){return console.log(t)})),t.getDateList()})).catch((function(t){return console.log(t)})),this.getSexAge()},dateToString:function(t){var a=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"2-digit",day:"2-digit"}),e=a.formatToParts(t),s=Object(o["a"])(e,5),n=s[0].value,r=s[2].value,c=s[4].value;return"".concat(c,"-").concat(n,"-").concat(r)},getDateList:function(){var t=new Date(this.maxDate);t.setDate(t.getDate()+1);var a=new Date(this.minDate),e=this.dateToString(a);while(this.dateToString(t)!=e)this.dateList.push(this.dateToString(t)),console.log(this.dateToString(t)),t.setDate(t.getDate()-1)},sortCountries:function(t,a){var e=[];for(var s in t)e.push([s,t[s]]);return e.sort((function(t,e){return e[1][a]-t[1][a]}))},sortData:function(t,a){var e=[];for(var s in t)"null"===s?e.push(["Unknow",t[s]]):e.push([s,t[s]]);return e.sort((function(t,e){return e[1][a]-t[1][a]}))},changeStateMap:function(t){var a=t.target;while(!a.title)a=a.parentElement;"Unknow"!==a.title&&(a.title!==this.currentState?(this.currentState=a.title,this.mapSrc="/api/map/".concat(this.currentDate,"/").concat(this.currentCountry,"/").concat(this.currentState)):(this.currentState="",this.mapSrc="/api/map/".concat(this.currentDate,"/").concat(this.currentCountry)))},changeDate:function(t){var a=t.target;while(!a.title)a=a.parentElement;a.title!==this.currentDate&&(this.currentDate=a.title,this.onload())},changeCountryMap:function(t){var a=t.target;while(!a.title)a=a.parentElement;a.title!==this.currentCountry?(this.currentCountry=a.title,this.mapSrc="/api/map/".concat(this.currentDate,"/").concat(this.currentCountry),this.getStates(this.currentCountry)):(this.currentCountry="",this.mapSrc="/api/map/".concat(this.currentDate,"/countries"))},getStates:function(t){var a=this;this.stateCases={},u.a.get("/api/".concat(this.currentDate,"/").concat(t)).then((function(t){a.stateCases=t.data})).catch((function(t){return console.log(t)}))},getSexAge:function(){var t=this;u.a.get("/api/age").then((function(a){t.age=[];var e=a.data.data;for(var s in e)for(var n in e[s])t.age.unshift([n,e[s][n]])})).catch((function(t){return console.log(t)})),u.a.get("/api/sex").then((function(a){t.sex=[];var e=a.data.data;for(var s in e)for(var n in e[s])t.sex.push([n,e[s][n]])})).catch((function(t){return console.log(t)}))}},data:function(){return{mapSrc:"",maxDate:"",minDate:"",countryCases:{},stateCases:{},currentCountry:"",currentState:"",age:[],sex:[],currentDate:"",dateList:[]}},mounted:function(){this.onload()},components:{demographics:g}},m=v,y=(e("0d05"),Object(j["a"])(m,c,i,!1,null,"956438f8",null)),C=y.exports,_=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},x=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[e("a",{attrs:{target:"_blank",href:"http://dblab.usc.edu/new/Default.aspx"}},[e("img",{attrs:{src:"http://dblab.usc.edu/images/logo.gif",alt:"USC DBLAB"}})]),e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})]),e("div",{staticClass:"collapse navbar-collapse"},[e("ul",{staticClass:"navbar-nav"},[e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Coronavirus Tracking")])])])])])}],k={name:"NavBar"},w=k,S=Object(j["a"])(w,_,x,!1,null,"7c076100",null),D=S.exports,z={name:"App",components:{CoronaMap:C,NavBar:D}},O=z,T=(e("034f"),Object(j["a"])(O,n,r,!1,null,null,null)),M=T.exports,E=(e("4989"),e("ab8b"),e("d842")),P=e("30ef"),L=e.n(P);s["a"].use(E["a"].use(L.a)),s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(M)}}).$mount("#app")},"85ec":function(t,a,e){},"9b6b":function(t,a,e){}});
//# sourceMappingURL=app.bfd86a13.js.map