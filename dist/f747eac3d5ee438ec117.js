(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{368:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"current-paper__content"},[r("div",{staticClass:"current-paper__photo"},[r("img",{staticClass:"current-paper-img",attrs:{src:"https://webdev-api.loftschool.com/"+t.paper.photo}})]),r("div",{staticClass:"current-paper__description"},[r("div",{staticClass:"current-paper__title"},[t._v(t._s(t.paper.title))]),r("div",{staticClass:"current-paper__text"},[t._v(t._s(t.paper.description))]),r("div",{staticClass:"current-paper__link"},[r("a",{staticClass:"current-paper__href",attrs:{href:t.paper.link}},[t._v(t._s(t.paper.link)+"      ")])]),r("div",{staticClass:"buttons__wrapper"},[r("div",{staticClass:"button__wrapper"},[r("button",{staticClass:"button__edit",on:{click:t.editExistedPaper}},[r("div",{staticClass:"button__name"},[t._v("Edit")])])]),r("div",{staticClass:"button__wrapper"},[r("button",{staticClass:"button__remove",on:{click:t.deleteExistedPaper}},[r("div",{staticClass:"button__name"},[t._v("Remove")])])])])])])};n._withStripped=!0;var a=r(134);function i(t,e,r,n,a,i,s){try{var p=t[i](s),c=p.value}catch(t){return void r(t)}p.done?e(c):Promise.resolve(c).then(n,a)}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var c={props:{paper:{type:Object}},methods:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){p(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},Object(a.b)("papers",["deletePaper"]),{deleteExistedPaper:function(){var t,e=this;return(t=regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.deletePaper(e.paper);case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),alert(t.t0.message);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})),function(){var e=this,r=arguments;return new Promise((function(n,a){var s=t.apply(e,r);function p(t){i(s,n,a,p,c,"next",t)}function c(t){i(s,n,a,p,c,"throw",t)}p(void 0)}))})()},editExistedPaper:function(){this.editMode=!0,this.$emit("toggleAddEditForm",{updatedPaper:this.paper}),this.editMode=!this.editMode}})},o=r(340),u=Object(o.a)(c,n,[],!1,null,null,null);u.options.__file="src/admin/components/papers-group.vue";e.default=u.exports}}]);