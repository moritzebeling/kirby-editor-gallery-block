(function () {function q(a){return a&&a.__esModule?{d:a.default}:{d:a}}function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function J(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach(function(t){var $IxO8$$interop$default=q(ca);$IxO8$$interop$default.d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function K(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=R(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return o=e.done,e},e:function(e){u=!0,a=e},f:function(){try{o||null==r.return||r.return()}finally{if(u)throw a}}}}function R(e,t){if(e){if("string"==typeof e)return M(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?M(e,t):void 0}}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var C={};function S(r,a){(null==a||a>r.length)&&(a=r.length);for(var $=0,e=new Array(a);$<a;$++)e[$]=r[$];return e}C=S;var T={};function U(r){if(Array.isArray(r))return C(r)}T=U;var V={};function W(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}V=W;var X={};function Y(r,a){if(r){if("string"==typeof r)return C(r,a);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?C(r,a):void 0}}X=Y;var Z={};function aa(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Z=aa;var D={};function ba(r){return T(r)||V(r)||X(r)||Z()}D=ba;var ca={};function da(e,r,$){return r in e?Object.defineProperty(e,r,{value:$,enumerable:!0,configurable:!0,writable:!0}):e[r]=$,e}ca=da;var z={};var N={},P=function(t){var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e,n){var o=r&&r.prototype instanceof v?r:v,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=function(t,r,e){var n=f;return function(o,i){if(n===l)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return G()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=_(a,e);if(c){if(c===y)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===f)throw n=p,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=l;var u=h(t,r,e);if("normal"===u.type){if(n=e.done?p:s,u.arg===y)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=p,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(n){return{type:"throw",arg:n}}}t.wrap=u;var f="suspendedStart",s="suspendedYield",l="executing",p="completed",y={};function v(){}function d(){}function g(){}var m={};m[i]=function(){return this};var w=Object.getPrototypeOf,L=w&&w(w(k([])));L&&L!==e&&n.call(L,i)&&(m=L);var x=g.prototype=v.prototype=Object.create(m);function E(t){["next","throw","return"].forEach(function(r){t[r]=function(t){return this._invoke(r,t)}})}function b(t,r){var e;this._invoke=function(o,i){function a(){return new r(function(e,a){!function e(o,i,a,c){var u=h(t[o],t,i);if("throw"!==u.type){var f=u.arg,s=f.value;return s&&"object"==typeof s&&n.call(s,"__await")?r.resolve(s.__await).then(function(t){e("next",t,a,c)},function(t){e("throw",t,a,c)}):r.resolve(s).then(function(t){f.value=t,a(f)},function(t){return e("throw",t,a,c)})}c(u.arg)}(o,i,e,a)})}return e=e?e.then(a,a):a()}}function _(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,_(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function $(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function O(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach($,this),this.reset(!0)}function k(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:G}}function G(){return{value:r,done:!0}}return d.prototype=x.constructor=g,g.constructor=d,g[c]=d.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===d||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},E(b.prototype),b.prototype[a]=function(){return this},t.AsyncIterator=b,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new b(u(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},E(x),x[c]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=k,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),O(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;O(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:k(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}},t}(N);try{regeneratorRuntime=P}catch(accidentalStrictMode){Function("r","regeneratorRuntime = r")(P)}z=N;var A={};function Q(r,a,n,e,t,o,$){try{var c=r[o]($),v=c.value}catch(G){return void n(G)}c.done?a(v):Promise.resolve(v).then(e,t)}function ea(r){return function(){var a=this,n=arguments;return new Promise(function(e,t){var o=r.apply(a,n);function $(r){Q(o,e,t,$,c,"next",r)}function c(r){Q(o,e,t,$,c,"throw",r)}$(void 0)})}}A=ea;var F,H={};!function(t,e){"object"==typeof H?H=e():"function"==typeof F&&F.amd?F(e):t.lozad=e()}(H,function(){var t="undefined"!=typeof document&&document.documentMode,e={rootMargin:"0px",threshold:0,load:function(e){if("picture"===e.nodeName.toLowerCase()){var r=document.createElement("img");t&&e.getAttribute("data-iesrc")&&(r.src=e.getAttribute("data-iesrc")),e.getAttribute("data-alt")&&(r.alt=e.getAttribute("data-alt")),e.append(r)}if("video"===e.nodeName.toLowerCase()&&!e.getAttribute("data-src")&&e.children){for(var a=e.children,o=void 0,i=0;i<=a.length-1;i++)(o=a[i].getAttribute("data-src"))&&(a[i].src=o);e.load()}e.getAttribute("data-poster")&&(e.poster=e.getAttribute("data-poster")),e.getAttribute("data-src")&&(e.src=e.getAttribute("data-src")),e.getAttribute("data-srcset")&&e.setAttribute("srcset",e.getAttribute("data-srcset"));var n=",";if(e.getAttribute("data-background-delimiter")&&(n=e.getAttribute("data-background-delimiter")),e.getAttribute("data-background-image"))e.style.backgroundImage="url('"+e.getAttribute("data-background-image").split(n).join("'),url('")+"')";else if(e.getAttribute("data-background-image-set")){var d=e.getAttribute("data-background-image-set").split(n),g=d[0].substr(0,d[0].indexOf(" "))||d[0];g=-1===g.indexOf("url(")?"url("+g+")":g,1===d.length?e.style.backgroundImage=g:e.setAttribute("style",(e.getAttribute("style")||"")+"background-image: "+g+"; background-image: -webkit-image-set("+d+"); background-image: image-set("+d+")")}e.getAttribute("data-toggle-class")&&e.classList.toggle(e.getAttribute("data-toggle-class"))},loaded:function(){}};function r(t){t.setAttribute("data-loaded",!0)}var a=function(t){return"true"===t.getAttribute("data-loaded")};return function(){var t,o,i=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},d=Object.assign({},e,n),g=d.root,u=d.rootMargin,s=d.threshold,c=d.load,l=d.loaded,b=void 0;return"undefined"!=typeof window&&window.IntersectionObserver&&(b=new IntersectionObserver((t=c,o=l,function(e,i){e.forEach(function(e){(0<e.intersectionRatio||e.isIntersecting)&&(i.unobserve(e.target),a(e.target)||(t(e.target),r(e.target),o(e.target)))})}),{root:g,rootMargin:u,threshold:s})),{observe:function(){for(var t=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return t instanceof Element?[t]:t instanceof NodeList?t:e.querySelectorAll(t)}(i,g),e=0;e<t.length;e++)a(t[e])||(b?b.observe(t[e]):(c(t[e]),r(t[e]),l(t[e])))},triggerLoad:function(t){a(t)||(c(t),r(t),l(t))},observer:b}}});var fa=function(e,t){return e.id.localeCompare(t.id,"en",{numeric:!0})},B={icon:"file-image",label:"Gallery",props:{attrs:{type:Object,default:function(){return{}}},endpoints:Object,spellcheck:Boolean},data:function(){return{images:[]}},created:function(){this.attrs.images?this.images=this.attrs.images:this.input({group:"default",images:[]})},watch:{attrs:function(e){this.images=e.images}},computed:{style:function(){if(this.attrs.ratio)return"padding-bottom:"+100/this.attrs.ratio+"%"},fields:function(){return{group:{label:this.$t("editor.blocks.gallery.settings.group.label"),type:"text",icon:"layers"},imageAlt:{label:this.$t("editor.blocks.gallery.settings.alt.label"),type:"text",icon:"layers"}}}},mounted:function(){this.lazyLoadImages()},updated:function(){this.lazyLoadImages()},methods:{focus:function(){var e=arguments,t=this;var $agGE$$interop$default=q(A);var $PMvg$$interop$default=q(z);return $agGE$$interop$default.d($PMvg$$interop$default.d.mark(function r(){var n,i;return $PMvg$$interop$default.d.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.length>0&&void 0!==e[0]?e[0]:{},r.next=3,t.$nextTick();case 3:if(i=t.$refs.element,!0!==n.focusRoot&&0!==t.images.length){r.next=7;break}return t.$refs.element.focus(),r.abrupt("return");case 7:Array.from(i.querySelectorAll(".k-editor-block-gallery-image"))[0].focus();case 9:case"end":return r.stop();}},r)}))()},focusImage:function(e){var t=this;var $agGE$$interop$default=q(A);var $PMvg$$interop$default=q(z);return $agGE$$interop$default.d($PMvg$$interop$default.d.mark(function r(){var n,i;return $PMvg$$interop$default.d.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.$nextTick();case 2:if(n=t.$refs.element,0!==(i=Array.from(n.querySelectorAll(".k-editor-block-gallery-image"))).length){r.next=7;break}return t.focus({focusRoot:!0}),r.abrupt("return");case 7:if(!(e<0)){r.next=10;break}return i[0].focus(),r.abrupt("return");case 10:if(!(e>=i.length)){r.next=13;break}return i[i.length-1].focus(),r.abrupt("return");case 13:i[e].focus();case 14:case"end":return r.stop();}},r)}))()},getTotalRatio:function(e){if(e){var t,r=0,n=K(e);try{for(n.s();!(t=n.n()).done;){r=t.value.ratio+r}}catch(i){n.e(i)}finally{n.f()}return r}},calcImageDimentions:function(e,t){var r=this.getTotalRatio(e),n=t.width/t.height,i=t.height/t.width*(n/r)*100,a=Math.ceil(n/r*1e3)/10;return"position: relative; width: ".concat(a,"%; padding-bottom: ").concat(i,"%;")},lazyLoadImages:function(){var $KLWm$$interop$default=q(H);$KLWm$$interop$default.d(".k-editor-block-gallery-image img").observe()},input:function(e){this.$emit("input",{attrs:J(J({},this.attrs),e)}),this.lazyLoadImages()},fetchFile:function(e){var t=this;var $agGE$$interop$default=q(A);var $PMvg$$interop$default=q(z);return $agGE$$interop$default.d($PMvg$$interop$default.d.mark(function r(){var n;return $PMvg$$interop$default.d.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.$api.get(e);case 2:return n=r.sent,r.abrupt("return",{guid:n.link,src:n.url,id:n.id,filename:n.filename,ratio:n.dimensions.ratio,width:n.dimensions.width,height:n.dimensions.height});case 4:case"end":return r.stop();}},r)}))()},onDragEnd:function(){var e=this.images;this.input({images:e})},addMultipleImageRows:function(e){var t,r=this,n=e.sort(fa),i=[],a=[],o=0,u=K(n);try{for(u.s();!(t=u.n()).done;){var s=t.value;0===a.length||o+s.ratio<=3.2?(a.push(s),o+=s.ratio):(i.push(a),a=[s],o=s.ratio)}}catch(c){u.e(c)}finally{u.f()}a.length>0&&(i.push(a),a=[],o=0),i.reverse().map(function(e,t){t===i.length-1?r.input({images:e}):r.$emit("append",{type:"gallery",attrs:{group:"default",images:e}})})},insertUpload:function(e,t){var r=this;var $agGE$$interop$default=q(A);var $PMvg$$interop$default=q(z);return $agGE$$interop$default.d($PMvg$$interop$default.d.mark(function e(){var n,i,a;return $PMvg$$interop$default.d.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map(function(e){return r.fetchFile(e.link)}));case 2:var $Fhqp$$interop$default=q(D);n=e.sent,i=r.images,a=[].concat($Fhqp$$interop$default.d(i),$Fhqp$$interop$default.d(n)),r.addMultipleImageRows(a),r.$events.$emit("file.create"),r.$events.$emit("model.update"),r.$store.dispatch("notification/success",":)");case 9:case"end":return e.stop();}},e)}))()},menu:function(){return this.images?[{icon:"cog",label:this.$t("editor.blocks.image.settings"),click:this.$refs.settings.open},{icon:"add",label:"Add image to this row",click:this.selectFiles}]:[]},onDrop:function(e){this.$refs.fileUpload.drop(e,{url:window.panel.api+"/"+this.endpoints.field+"/upload",multiple:!0,accept:"image/*"})},uploadFiles:function(){this.$refs.fileUpload.open({url:window.panel.api+"/"+this.endpoints.field+"/upload",multiple:!0,accept:"image/*"})},replace:function(){this.$emit("input",{attrs:{}})},selectFiles:function(){this.$refs.fileDialog.open({endpoint:this.endpoints.field+"/files",multiple:!0,selected:[]})},insertFiles:function(e){var t=this;var $agGE$$interop$default=q(A);var $PMvg$$interop$default=q(z);return $agGE$$interop$default.d($PMvg$$interop$default.d.mark(function r(){var n,i,a;return $PMvg$$interop$default.d.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all(e.map(function(e){return t.fetchFile(e.link)}));case 2:var $Fhqp$$interop$default=q(D);n=r.sent,i=t.images,a=[].concat($Fhqp$$interop$default.d(i),$Fhqp$$interop$default.d(n)),t.addMultipleImageRows(a);case 6:case"end":return r.stop();}},r)}))()},addImageRow:function(){this.$emit("append",{type:"gallery",attrs:{group:"default",images:[]}})},deleteImage:function(e){var $Fhqp$$interop$default=q(D);var t=this.images,r=[].concat($Fhqp$$interop$default.d(t.slice(0,e)),$Fhqp$$interop$default.d(t.slice(e+1,t.length)));if(this.input({images:r}),0===r.length)this.focus({focusRoot:!0});else{var n=e>0?e-1:0;this.focusImage(n)}},settings:function(){this.$refs.settings.open()},saveSettings:function(){this.$refs.settings.close(),this.input(this.attrs)}}};if(typeof B==="function"){B=B.options}Object.assign(B,function(){var render=function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{ref:"element",staticClass:"k-editor-gallery-block",attrs:{"tabindex":"0"},on:{"keydown":[function($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"delete",[8,46],$event.key,["Backspace","Delete","Del"])){return null}$event.preventDefault();if($event.target!==$event.currentTarget){return null}return _vm.$emit("remove")},function($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){return null}if($event.target!==$event.currentTarget){return null}return _vm.$emit("convert","paragraph")},function($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){return null}return _vm.$emit("prev")},function($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){return null}return _vm.$emit("next")}]}},[_c("k-dropzone",{on:{"drop":function(files){return _vm.onDrop(files)}}},[_c("div",{staticClass:"k-editor-gallery-row"},[_vm.images.length===0?_c("div",{staticClass:"k-editor-gallery-row-empty"},[_c("button",{staticClass:"k-button",on:{"click":function($event){$event.stopPropagation();$event.preventDefault();return _vm.uploadFiles($event)}},nativeOn:{"keydown":function($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){return null}$event.stopPropagation()}}},[_c("k-icon",{attrs:{"type":"upload"}}),_vm._v(" "),_c("span",{staticClass:"k-button-text"},[_vm._v("Upload images")])],1),_vm._v(" "),_c("span",{staticClass:"separator"},[_vm._v("or")]),_vm._v(" "),_c("button",{staticClass:"k-button",on:{"click":function($event){$event.stopPropagation();$event.preventDefault();return _vm.selectFiles($event)}},nativeOn:{"keydown":function($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){return null}$event.stopPropagation()}}},[_c("k-icon",{attrs:{"type":"folder"}}),_vm._v(" "),_c("span",{staticClass:"k-button-text"},[_vm._v("Select images")])],1)]):_vm._e(),_vm._v(" "),_c("k-draggable",{staticClass:"k-editor-gallery-row-draggable",class:{"empty-draggable":_vm.images.length===0},attrs:{"options":{group:_vm.attrs.group},"list":_vm.images},on:{"end":_vm.onDragEnd}},_vm._l(_vm.images,function(image,imageIndex){return _c("div",{key:image.guid,staticClass:"k-editor-row-image k-editor-block-gallery-image",style:_vm.calcImageDimentions(_vm.images,image),attrs:{"tabindex":"0"},on:{"keydown":[function($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"delete",[8,46],$event.key,["Backspace","Delete","Del"])){return null}$event.preventDefault();if($event.target!==$event.currentTarget){return null}return _vm.deleteImage(imageIndex)},function($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){return null}if($event.target!==$event.currentTarget){return null}return _vm.addImageRow($event)},function($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"left",37,$event.key,["Left","ArrowLeft"])){return null}if("button"in $event&&$event.button!==0){return null}if($event.target!==$event.currentTarget){return null}return _vm.focusImage(imageIndex-1)},function($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"right",39,$event.key,["Right","ArrowRight"])){return null}if("button"in $event&&$event.button!==2){return null}if($event.target!==$event.currentTarget){return null}return _vm.focusImage(imageIndex+1)}]}},[_c("img",{attrs:{"data-src":image.src,"alt":""},on:{"dragstart":function($event){$event.preventDefault()}}})])}),0)],1)]),_vm._v(" "),_c("k-files-dialog",{ref:"fileDialog",on:{"submit":function($event){return _vm.insertFiles($event)}}}),_vm._v(" "),_c("k-upload",{ref:"fileUpload",on:{"success":_vm.insertUpload}}),_vm._v(" "),_c("k-dialog",{ref:"settings",attrs:{"size":"medium"},on:{"submit":_vm.saveSettings}},[_c("k-form",{attrs:{"fields":_vm.fields},on:{"submit":_vm.saveSettings},model:{value:_vm.attrs,callback:function($$v){_vm.attrs=$$v},expression:"attrs"}})],1)],1)};var staticRenderFns=[];return{render:render,staticRenderFns:staticRenderFns,_compiled:true,_scopeId:null,functional:undefined}}());editor.block("gallery",B);})();