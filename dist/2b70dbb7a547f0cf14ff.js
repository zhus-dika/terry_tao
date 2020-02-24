(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{369:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"new__paper"},[a("div",{staticClass:"form__title"},[e._v("New paper")]),a("form",{staticClass:"edit__paper",on:{submit:function(t){return t.preventDefault(),e.addNewPaper(t)}}},[a("div",{staticClass:"upload-block"},[a("label",{staticClass:"paper__photo"},[a("div",{staticClass:"paper__photo-upload",style:{backgroundImage:"url("+e.renderedPhoto+")"}},[e.photoUpload?e._e():a("div",{staticClass:"upload-text__wrapper"},[a("div",{staticClass:"upload-text"},[e._v("Drag or drop to upload image")]),a("div",{staticClass:"upload-photo__wrapper"},[a("input",{staticClass:"upload-photo quotes__form-file-input",attrs:{type:"file",required:""},on:{change:e.handlePhoto}}),e._m(0)])])])])]),a("div",{staticClass:"form__wrapper"},[a("div",{staticClass:"paper-edit__form"},[a("label",{staticClass:"form__block",attrs:{for:""}},[a("div",{staticClass:"form-label first"},[e._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.paper.title,expression:"paper.title"}],staticClass:"form-input__paper",attrs:{name:"paper-name",type:"text",placeholder:"A sum-product estimate in finite fields, and applications",required:""},domProps:{value:e.paper.title},on:{input:function(t){t.target.composing||e.$set(e.paper,"title",t.target.value)}}})]),a("label",{staticClass:"form__block",attrs:{for:""}},[a("div",{staticClass:"form-label"},[e._v("Link")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.paper.link,expression:"paper.link"}],staticClass:"form-input__paper",attrs:{name:"paper-link",type:"text",placeholder:"https://arxiv.org/abs/math/0301343",required:""},domProps:{value:e.paper.link},on:{input:function(t){t.target.composing||e.$set(e.paper,"link",t.target.value)}}})]),a("label",{staticClass:"form__block",attrs:{for:""}},[a("div",{staticClass:"form-label"},[e._v("Description")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.paper.description,expression:"paper.description"}],staticClass:"form-input__paper",attrs:{name:"paper-desc",type:"text",placeholder:"Let A be a subset of a finite field $F := Z/qZ$ for some prime q. If |F|δ<|A|<|F|1−δ for some δ>0, then we prove the estimate $|A+A| + |A.A| geq c(delta) |A|^{1+eps}$ for some $eps = eps(delta) > 0$. This is a finite field analogue of a result of Erdos and Szemeredi. We then use this estimate to prove a Szemeredi-Trotter type theorem in finite fields, and obtain a new estimate for the Erdos distance problem in finite fields, as well as the three-dimensional Kakeya problem in finite fields.",rows:"3",cols:"43"},domProps:{value:e.paper.description},on:{input:function(t){t.target.composing||e.$set(e.paper,"description",t.target.value)}}})]),a("label",{staticClass:"form__block",attrs:{for:""}},[a("div",{staticClass:"form-label"},[e._v("Add tag")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.paper.techs,expression:"paper.techs"}],staticClass:"form-input__paper",attrs:{name:"paper-add_tag",type:"text",placeholder:"Combinatorics (math.CO), Number Theory (math.NT)",required:""},domProps:{value:e.paper.techs},on:{input:function(t){t.target.composing||e.$set(e.paper,"techs",t.target.value)}}})]),a("div",{staticClass:"current-tags"},[a("paper-tags",{attrs:{paperTags:e.paper.techs},on:{updateTags:e.updateTags}}),a("div",{staticClass:"form__buttons"},[a("input",{staticClass:"form__button-cancel",attrs:{type:"reset",value:"Cancel"},on:{click:function(t){return t.preventDefault(),e.cancelAddPaper(t)}}}),a("input",{staticClass:"form__button-save",attrs:{type:"submit",value:"Save"}})])],1)])])])])};r._withStripped=!0;var s=a(134);function i(e,t,a,r,s,i,o){try{var n=e[i](o),p=n.value}catch(e){return void a(e)}n.done?t(p):Promise.resolve(p).then(r,s)}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var p={components:{paperTags:function(){return a.e(1).then(a.bind(null,376))}},computed:{tags:function(){return this.paper.techs.split(", ")}},data:function(){return{renderedPhoto:"",photoUpload:!1,paper:{title:"",techs:"",photo:{},link:"",description:""}}},methods:function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},Object(s.b)("papers",["addPaper"]),{addNewPaper:function(){var e,t=this;return(e=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.addPaper(t.paper);case 3:t.$emit("toggleAddForm"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),alert(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})),function(){var t=this,a=arguments;return new Promise((function(r,s){var o=e.apply(t,a);function n(e){i(o,r,s,n,p,"next",e)}function p(e){i(o,r,s,n,p,"throw",e)}n(void 0)}))})()},cancelAddPaper:function(){this.$emit("toggleAddForm")},renderImageFile:function(e){var t=this,a=new FileReader;try{a.readAsDataURL(e),a.onloadend=function(){t.renderedPhoto=a.result}}catch(e){throw new Error("Error read file")}},handlePhoto:function(e){var t=e.target.files[0];this.paper.photo=t,this.photoUpload=!0,this.renderImageFile(t)},updateTags:function(e){e.id===this.tags.length-1?this.paper.techs=this.paper.techs.replace(e.updatedTags,""):this.paper.techs=this.paper.techs.replace(e.updatedTags+", ",""),0===e.id&&1===this.tags[0].length&&(this.paper.techs="")}})},l=a(340),c=Object(l.a)(p,r,[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"form__button-save"},[t("div",{staticClass:"form__button-save-name"},[this._v("Add photo")])])}],!1,null,null,null);c.options.__file="src/admin/components/new-paper.vue";t.default=c.exports}}]);