(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{371:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"new__paper"},[r("div",{staticClass:"form__title"},[e._v("Edited paper")]),r("div",{staticClass:"edit__paper"},[r("div",{staticClass:"upload-block"},[r("label",{staticClass:"paper__photo"},[r("div",{staticClass:"paper__photo-upload",style:{backgroundImage:"url("+e.renderedPhoto+")"}},[e.photoUpload?e._e():r("div",{staticClass:"upload-text__wrapper"},[r("div",{staticClass:"upload-text"},[e._v("Drag or drop to upload image")]),r("div",{staticClass:"upload-photo__wrapper"},[r("input",{staticClass:"upload-photo quotes__form-file-input",attrs:{type:"file",required:""},on:{change:e.handlePhoto}}),e._m(0)])])])])]),r("form",{staticClass:"form__wrapper"},[r("div",{staticClass:"paper-edit__form",attrs:{action:""}},[r("label",{staticClass:"form__block",attrs:{for:""}},[r("div",{staticClass:"form-label first"},[e._v("Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.currentPaper.title,expression:"currentPaper.title"}],staticClass:"form-input__paper",attrs:{name:"paper-name",type:"text",required:""},domProps:{value:e.currentPaper.title},on:{input:function(t){t.target.composing||e.$set(e.currentPaper,"title",t.target.value)}}})]),r("label",{staticClass:"form__block",attrs:{for:""}},[r("div",{staticClass:"form-label"},[e._v("Link")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.currentPaper.link,expression:"currentPaper.link"}],staticClass:"form-input__paper",attrs:{name:"paper-link",type:"text",required:""},domProps:{value:e.currentPaper.link},on:{input:function(t){t.target.composing||e.$set(e.currentPaper,"link",t.target.value)}}})]),r("label",{staticClass:"form__block",attrs:{for:""}},[r("div",{staticClass:"form-label"},[e._v("Description")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.currentPaper.description,expression:"currentPaper.description"}],staticClass:"form-input__paper",attrs:{name:"paper-desc",type:"text",rows:"3",cols:"43"},domProps:{value:e.currentPaper.description},on:{input:function(t){t.target.composing||e.$set(e.currentPaper,"description",t.target.value)}}})]),r("label",{staticClass:"form__block",attrs:{for:""}},[r("div",{staticClass:"form-label"},[e._v("Add tag")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.currentPaper.techs,expression:"currentPaper.techs"}],staticClass:"form-input__paper",attrs:{name:"paper-add_tag",type:"text"},domProps:{value:e.currentPaper.techs},on:{input:function(t){t.target.composing||e.$set(e.currentPaper,"techs",t.target.value)}}})]),r("div",{staticClass:"current-tags"},[r("paper-tags",{attrs:{paperTags:e.currentPaper.techs},on:{updateTags:e.updateTags}}),r("div",{staticClass:"form__buttons"},[r("button",{staticClass:"form__button-cancel",attrs:{type:"reset"},on:{click:e.cancelUpdate}},[e._v("Cancel")]),r("button",{staticClass:"form__button-save",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.updatePaper(t)}}},[e._v("Save")])])],1)])])])])};a._withStripped=!0;var n,s=r(134);function o(e,t,r,a,n,s,o){try{var i=e[s](o),p=i.value}catch(e){return void r(e)}i.done?t(p):Promise.resolve(p).then(a,n)}function i(e){return function(){var t=this,r=arguments;return new Promise((function(a,n){var s=e.apply(t,r);function i(e){o(s,a,n,i,p,"next",e)}function p(e){o(s,a,n,i,p,"throw",e)}i(void 0)}))}}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=(u(n={data:function(){return{photoUpload:!1,newPhotoUpload:!1,renderedPhoto:"",currentPaper:this.updatedPaper}},components:{paperTags:function(){return r.e(1).then(r.bind(null,377))}},computed:{tags:function(){return this.currentPaper.techs.split(", ")}},props:{updatedPaper:{type:Object}}},"computed",c({},Object(s.d)("papers",{papers:function(e){return e.papers}}))),u(n,"created",(function(){var e=JSON.stringify(this.updatedPaper);localStorage.setItem("currentPaper",e)})),u(n,"methods",c({},Object(s.b)("papers",["addPaper","editPaper"]),{},Object(s.c)("papers",["EDIT_PAPER"]),{updatePaper:function(){var e=this;return i(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.editPaper(e.currentPaper);case 3:e.$emit("toggleAddEditFormFromForm",{updatedPaper:{}}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),alert(t.t0.message);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()},cancelUpdate:function(){var e=this;return i(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.currentPaper=JSON.parse(localStorage.getItem("currentPaper")),e.EDIT_PAPER(e.currentPaper),e.$emit("toggleAddEditFormFromForm",{updatedPaper:e.currentPaper});case 3:case"end":return t.stop()}}),t)})))()},renderImageFile:function(e){var t=this,r=new FileReader;try{r.readAsDataURL(e),r.onloadend=function(){t.renderedPhoto=r.result}}catch(e){throw new Error("Error read file")}},handlePhoto:function(e){this.newPhotoUpload=!0;var t=e.target.files[0];this.photoUpload=!0,this.currentPaper.photo=t,this.renderImageFile(t)},updateTags:function(e){var t=this.currentPaper.techs.split(",");e.id===t.length-1?this.currentPaper.techs=this.currentPaper.techs.replace(e.updatedTags,""):this.currentPaper.techs=this.currentPaper.techs.replace(e.updatedTags+", ",""),0===e.id&&1===t.length&&(this.currentPaper.techs="")}})),n),d=r(340),m=Object(d.a)(l,a,[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"form__button-save"},[t("div",{staticClass:"form__button-save-name"},[this._v("Add photo")])])}],!1,null,null,null);m.options.__file="src/admin/components/edited-paper.vue";t.default=m.exports}}]);