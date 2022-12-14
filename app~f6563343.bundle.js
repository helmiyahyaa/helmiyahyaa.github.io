/*! For license information please see app~f6563343.bundle.js.LICENSE.txt */
(()=>{"use strict";var r,n={695:(r,n,t)=>{t.d(n,{Z:()=>s});var e=t(713),A=t(508);function i(r){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},i(r)}function o(){o=function(){return r};var r={},n=Object.prototype,t=n.hasOwnProperty,e=Object.defineProperty||function(r,n,t){r[n]=t.value},A="function"==typeof Symbol?Symbol:{},a=A.iterator||"@@iterator",l=A.asyncIterator||"@@asyncIterator",s=A.toStringTag||"@@toStringTag";function p(r,n,t){return Object.defineProperty(r,n,{value:t,enumerable:!0,configurable:!0,writable:!0}),r[n]}try{p({},"")}catch(r){p=function(r,n,t){return r[n]=t}}function d(r,n,t,A){var i=n&&n.prototype instanceof u?n:u,o=Object.create(i.prototype),a=new k(A||[]);return e(o,"_invoke",{value:v(r,t,a)}),o}function c(r,n,t){try{return{type:"normal",arg:r.call(n,t)}}catch(r){return{type:"throw",arg:r}}}r.wrap=d;var C={};function u(){}function g(){}function f(){}var x={};p(x,a,(function(){return this}));var m=Object.getPrototypeOf,h=m&&m(m($([])));h&&h!==n&&t.call(h,a)&&(x=h);var b=f.prototype=u.prototype=Object.create(x);function y(r){["next","throw","return"].forEach((function(n){p(r,n,(function(r){return this._invoke(n,r)}))}))}function w(r,n){function A(e,o,a,l){var s=c(r[e],r,o);if("throw"!==s.type){var p=s.arg,d=p.value;return d&&"object"==i(d)&&t.call(d,"__await")?n.resolve(d.__await).then((function(r){A("next",r,a,l)}),(function(r){A("throw",r,a,l)})):n.resolve(d).then((function(r){p.value=r,a(p)}),(function(r){return A("throw",r,a,l)}))}l(s.arg)}var o;e(this,"_invoke",{value:function(r,t){function e(){return new n((function(n,e){A(r,t,n,e)}))}return o=o?o.then(e,e):e()}})}function v(r,n,t){var e="suspendedStart";return function(A,i){if("executing"===e)throw new Error("Generator is already running");if("completed"===e){if("throw"===A)throw i;return U()}for(t.method=A,t.arg=i;;){var o=t.delegate;if(o){var a=B(o,t);if(a){if(a===C)continue;return a}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if("suspendedStart"===e)throw e="completed",t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);e="executing";var l=c(r,n,t);if("normal"===l.type){if(e=t.done?"completed":"suspendedYield",l.arg===C)continue;return{value:l.arg,done:t.done}}"throw"===l.type&&(e="completed",t.method="throw",t.arg=l.arg)}}}function B(r,n){var t=n.method,e=r.iterator[t];if(void 0===e)return n.delegate=null,"throw"===t&&r.iterator.return&&(n.method="return",n.arg=void 0,B(r,n),"throw"===n.method)||"return"!==t&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+t+"' method")),C;var A=c(e,r.iterator,n.arg);if("throw"===A.type)return n.method="throw",n.arg=A.arg,n.delegate=null,C;var i=A.arg;return i?i.done?(n[r.resultName]=i.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,C):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,C)}function E(r){var n={tryLoc:r[0]};1 in r&&(n.catchLoc=r[1]),2 in r&&(n.finallyLoc=r[2],n.afterLoc=r[3]),this.tryEntries.push(n)}function _(r){var n=r.completion||{};n.type="normal",delete n.arg,r.completion=n}function k(r){this.tryEntries=[{tryLoc:"root"}],r.forEach(E,this),this.reset(!0)}function $(r){if(r){var n=r[a];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var e=-1,A=function n(){for(;++e<r.length;)if(t.call(r,e))return n.value=r[e],n.done=!1,n;return n.value=void 0,n.done=!0,n};return A.next=A}}return{next:U}}function U(){return{value:void 0,done:!0}}return g.prototype=f,e(b,"constructor",{value:f,configurable:!0}),e(f,"constructor",{value:g,configurable:!0}),g.displayName=p(f,s,"GeneratorFunction"),r.isGeneratorFunction=function(r){var n="function"==typeof r&&r.constructor;return!!n&&(n===g||"GeneratorFunction"===(n.displayName||n.name))},r.mark=function(r){return Object.setPrototypeOf?Object.setPrototypeOf(r,f):(r.__proto__=f,p(r,s,"GeneratorFunction")),r.prototype=Object.create(b),r},r.awrap=function(r){return{__await:r}},y(w.prototype),p(w.prototype,l,(function(){return this})),r.AsyncIterator=w,r.async=function(n,t,e,A,i){void 0===i&&(i=Promise);var o=new w(d(n,t,e,A),i);return r.isGeneratorFunction(t)?o:o.next().then((function(r){return r.done?r.value:o.next()}))},y(b),p(b,s,"Generator"),p(b,a,(function(){return this})),p(b,"toString",(function(){return"[object Generator]"})),r.keys=function(r){var n=Object(r),t=[];for(var e in n)t.push(e);return t.reverse(),function r(){for(;t.length;){var e=t.pop();if(e in n)return r.value=e,r.done=!1,r}return r.done=!0,r}},r.values=$,k.prototype={constructor:k,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!r)for(var n in this)"t"===n.charAt(0)&&t.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var r=this.tryEntries[0].completion;if("throw"===r.type)throw r.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function e(t,e){return o.type="throw",o.arg=r,n.next=t,e&&(n.method="next",n.arg=void 0),!!e}for(var A=this.tryEntries.length-1;A>=0;--A){var i=this.tryEntries[A],o=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var a=t.call(i,"catchLoc"),l=t.call(i,"finallyLoc");if(a&&l){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(r,n){for(var e=this.tryEntries.length-1;e>=0;--e){var A=this.tryEntries[e];if(A.tryLoc<=this.prev&&t.call(A,"finallyLoc")&&this.prev<A.finallyLoc){var i=A;break}}i&&("break"===r||"continue"===r)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=r,o.arg=n,i?(this.method="next",this.next=i.finallyLoc,C):this.complete(o)},complete:function(r,n){if("throw"===r.type)throw r.arg;return"break"===r.type||"continue"===r.type?this.next=r.arg:"return"===r.type?(this.rval=this.arg=r.arg,this.method="return",this.next="end"):"normal"===r.type&&n&&(this.next=n),C},finish:function(r){for(var n=this.tryEntries.length-1;n>=0;--n){var t=this.tryEntries[n];if(t.finallyLoc===r)return this.complete(t.completion,t.afterLoc),_(t),C}},catch:function(r){for(var n=this.tryEntries.length-1;n>=0;--n){var t=this.tryEntries[n];if(t.tryLoc===r){var e=t.completion;if("throw"===e.type){var A=e.arg;_(t)}return A}}throw new Error("illegal catch attempt")},delegateYield:function(r,n,t){return this.delegate={iterator:$(r),resultName:n,nextLoc:t},"next"===this.method&&(this.arg=void 0),C}},r}function a(r,n,t,e,A,i,o){try{var a=r[i](o),l=a.value}catch(r){return void t(r)}a.done?n(l):Promise.resolve(l).then(e,A)}function l(r){return function(){var n=this,t=arguments;return new Promise((function(e,A){var i=r.apply(n,t);function o(r){a(i,e,A,o,l,"next",r)}function l(r){a(i,e,A,o,l,"throw",r)}o(void 0)}))}}const s={render:function(){return l(o().mark((function r(){return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",'\n      <section class="restaurant">\n        <div id="restaurant-list">\n          <p>Loading...</p>\n        </div>\n      </section>\n    ');case 1:case"end":return r.stop()}}),r)})))()},afterRender:function(){return l(o().mark((function r(){var n,t,i,a,l,s,p;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=A.Z.parseActiveUrlWithoutCombiner(),t=document.querySelector(".restaurant"),i=document.querySelector("#restaurant-list"),r.next=5,e.Z.searchRestaurant(n.id);case 5:a=r.sent,l=a.error,s=a.founded,p=a.restaurants,s>0&&!l?(i.innerHTML="",p.forEach((function(r){var n=document.createElement("restaurant-item");n.restaurant=r,i.appendChild(n)}))):t.innerHTML="\n        <p class='message'>No restaurant found</p>\n      ";case 10:case"end":return r.stop()}}),r)})))()}}},510:(r,n,t)=>{t.d(n,{c:()=>A,t:()=>e});var e=function(){return'\n  <button aria-label="like this restaurant" id="likeButton" class="like">\n     <i class="fa fa-heart-o" aria-hidden="true"></i>\n  </button>\n'},A=function(){return'\n  <button aria-label="unlike this restaurant" id="likeButton" class="like">\n    <i class="fa fa-heart" aria-hidden="true"></i>\n  </button>\n'}},144:(r,n,t)=>{t.d(n,{Z:()=>u});var e=t(537),A=t.n(e),i=t(645),o=t.n(i),a=t(667),l=t.n(a),s=new URL(t(323),t.b),p=new URL(t(965),t.b),d=o()(A());d.push([r.id,"@import url(https://fonts.googleapis.com/css2?family=BIZ+UDMincho&family=Inter:wght@300;400;500;600;700&display=swap);"]);var c=l()(s),C=l()(p);d.push([r.id,'*{box-sizing:border-box;margin:0;padding:0;font-family:"Inter"}body{background-color:#fff}header{display:flex;justify-content:space-between;align-items:center}header .header__logo{display:flex;height:60px}header .header__logo h2{display:flex;align-items:center}header nav{display:flex;gap:12px;padding:20px 0;align-items:center;justify-content:flex-end}header nav .hamburger{font-size:28px;text-decoration:none;color:#000;background-color:rgba(0,0,0,0);border:none;cursor:pointer;padding:8px 12px}header nav .drawer{position:absolute;right:0;top:90px;background-color:#fff;width:100%;text-align:center;border-radius:4px;padding-bottom:12px;display:none;height:fit-content;z-index:10}header nav .drawer a{color:#000;text-decoration:none;padding:16px;display:block}header nav .drawer a:hover{color:#ce4452}header nav .drawer form{padding:0 12px}header nav .drawer form input{padding:14px 12px;background-color:rgba(0,0,0,0);border:1px solid #999;border-radius:20px;color:#000;font-size:1rem}header nav .open{display:flex;flex-direction:column;gap:10px}.skip__link{position:absolute;top:-52px;left:4px;background-color:#ce4452;color:#000;padding:16px 20px;transition:all .3s ease;border-radius:4px;text-underline-offset:2px;z-index:100}.skip__link:focus{top:4px}.container{max-width:1000px;margin:auto}.hero{background:url('+c+') center no-repeat;background-size:cover;width:100%;color:#000;margin:auto;padding:60px 12px}.hero .hero__item{display:flex;justify-content:center;flex-direction:column;height:100%}.hero .hero__item .hero__logo{color:#ce4452;letter-spacing:4px;font-weight:500;font-size:16px}.hero .hero__item .hero__title{font-weight:500;font-size:42px;margin-top:28px;color:#fff}.hero .hero__item .hero__tagline{color:#999;font-size:18px;line-height:155%;margin-top:12px}.hero .hero__item .hero__button{font-size:16px;width:fit-content;padding:16px 20px;cursor:pointer;border-radius:4px;background-color:#ce4452;border:none;margin-top:32px;font-weight:500;color:#000;text-decoration:none}.hero .hero__item .hero__button:hover{background-color:#f32035}.restaurant{color:#000;padding:0 12px}.restaurant #restaurant__title{margin-top:52px;font-weight:500}.restaurant .restaurant__text{color:#999;margin-top:8px}.restaurant #restaurant-list{margin:32px 0 0 0;display:grid;grid-template-columns:repeat(1, 1fr);gap:28px}.restaurant #restaurant-list restaurant-item{background-color:#fff;border-radius:4px;height:100%}.restaurant #restaurant-list restaurant-item .restaurant-item{width:100%;box-shadow:0 4px 8px 0 rgba(0,0,0,.2);border-radius:8px;overflow:hidden}.restaurant #restaurant-list restaurant-item .restaurant-item__header{position:relative}.restaurant #restaurant-list restaurant-item .restaurant-item__header__poster{width:100%;height:200px;object-fit:cover;object-position:center;border-radius:4px 4px 0 0}.restaurant #restaurant-list restaurant-item .restaurant__item__info{position:absolute;left:0;right:0;top:0;margin-left:auto;margin-right:auto;padding:12px 20px;display:flex;gap:4px;justify-content:space-between;align-items:center;background-color:rgba(0,0,0,.349);color:#fff}.restaurant #restaurant-list restaurant-item .restaurant__item__body{padding:24px 20px 16px 20px;position:relative}.restaurant #restaurant-list restaurant-item .restaurant__item__body>section h3{line-height:145%}.restaurant #restaurant-list restaurant-item .restaurant__item__body>section>p{font-weight:300;line-height:155%;font-size:14px;padding-top:20px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;line-clamp:4;-webkit-line-clamp:4;-webkit-box-orient:vertical}.restaurant #restaurant-list restaurant-item .restaurant__item__body>a{display:flex;align-items:center;background-color:rgba(0,0,0,0);border:none;color:#ce4452;cursor:pointer;text-decoration:none;width:fit-content;padding:14px 0;margin-top:12px}.restaurant #restaurant-list restaurant-item .restaurant__item__body>a p{line-height:135%;font-size:16px}.restaurant #restaurant-list restaurant-item .restaurant__item__body>a:hover{color:#f32035}.testimonials{color:#000;padding:0 12px}.testimonials .testimonials__title{margin-top:52px;font-weight:500}.testimonials .restaurant__text{color:#999;margin-top:8px}.testimonials #testimonial-list{display:grid;grid-template-columns:repeat(1, 1fr);gap:28px;margin:32px 0}.testimonials #testimonial-list testimonial-item{background-color:#fff;border-radius:4px;box-shadow:0 4px 8px 0 rgba(0,0,0,.2);padding:20px;display:flex;flex-direction:column;justify-content:space-between;gap:28px}.testimonials #testimonial-list testimonial-item>p{line-height:135%;isolation:isolate;position:relative}.testimonials #testimonial-list testimonial-item>p::before{content:\'"\';font-family:"BIZ UDMincho";font-size:80px;color:#fff;position:absolute;z-index:-1;right:-16px;top:20px}.testimonials #testimonial-list testimonial-item .testimonials__item__user{display:flex;gap:12px}.testimonials #testimonial-list testimonial-item .testimonials__item__user img{width:44px;height:44px;border-radius:50%}.testimonials #testimonial-list testimonial-item .testimonials__item__user section{font-size:14px;display:flex;flex-direction:column;justify-content:center;gap:4px}.testimonials #testimonial-list testimonial-item .testimonials__item__user section p:last-child{color:#999}#detail{margin:auto;padding:0 12px;max-width:800px}#detail detail-item>img{width:100%;max-height:350px;border-radius:4px;object-fit:cover;object-position:center}#detail .title{font-weight:bold;color:#000;font-size:32px}#detail .header{display:flex;gap:4px;justify-content:space-between;align-items:center;padding:8px 0 12px 0}#detail button{width:50px;height:50px;display:flex;align-items:center;justify-content:center;background-color:#db0000;border-radius:50%;border:0;font-size:20px;color:#fff;cursor:pointer}#detail button:hover{color:#fff}#detail .location_rating{display:flex;gap:12px;margin-bottom:16px;color:#000;flex-direction:column}#detail .location_rating>div{display:flex;gap:4px;font-size:.9rem}#detail .description{color:#000;line-height:1.6rem}#detail hr{border:none;border-bottom:1px solid #f32035;margin:20px 0}#detail .categories{color:#000;display:flex;flex-direction:column;margin:20px 0px 20px 0px;gap:10px}#detail .categories p{font-size:.9rem;border:1px solid #999;padding:4px 12px;border-radius:4px;width:fit-content}#detail .detail-foods-drinks{display:grid;grid-template-columns:1fr;margin:20px 0}#detail .detail-foods-drinks .foods{color:#000;margin-bottom:20px}#detail .detail-foods-drinks .foods p{font-weight:bold;margin-bottom:8px}#detail .detail-foods-drinks .foods ul{list-style:none}#detail .detail-foods-drinks .foods ul li{margin-bottom:4px}#detail .detail-foods-drinks .foods ul.food li:before{content:"🍽️";margin-right:8px}#detail .detail-foods-drinks .foods ul.drink li:before{content:"🍷";margin-right:8px}#detail .reviews{display:flex;flex-direction:column;gap:20px}#detail .reviews #review-container{display:flex;flex-direction:column;gap:20px}#detail .reviews #review-container .review{color:#000;background-color:#fff;padding:12px;border-radius:4px;display:flex;flex-direction:column;gap:4px;overflow-y:auto;box-shadow:0 0px 8px 0 rgba(0,0,0,.2)}#detail .reviews #review-container .review .name{font-weight:bold}#detail .reviews #review-container .review .date{color:#999;font-size:.9rem}#detail .reviews form{display:flex;flex-direction:column;gap:8px;margin:20px 0}#detail .reviews form input,#detail .reviews form textarea{background-color:rgba(0,0,0,0);border:1px solid #999;font-size:1rem;padding:14px;color:#000;border-radius:4px}#detail .reviews form button{font-size:.9rem;background-color:#ce4452;color:#000;padding:16px 0;border-radius:4px;font-weight:500;width:auto}#detail .reviews form button:hover{background-color:#f32035}footer{text-align:center;margin-top:52px;color:#999;padding:24px 0}.padding{padding:0 12px}.text-center{text-align:center;color:#000}.message{text-align:center;color:#000}@media(min-width: 600px){.restaurant #restaurant-list,.testimonials #testimonial-list{grid-template-columns:repeat(2, 1fr)}header nav{justify-content:flex-end}header nav .hamburger{display:none}header nav .drawer{position:initial;display:flex;justify-content:flex-end;align-items:center;padding:0;z-index:111;transform:translateX(0)}#detail .location_rating{gap:20px;flex-direction:row;color:#000}#detail hr{margin:20px 0px 20px 0px}#detail .categories{flex-direction:row;margin:20px 0px 20px 0px;gap:20px;color:#000}#detail .detail-foods-drinks{grid-template-columns:repeat(2, 1fr);margin:20px 20px}#detail .reviews{margin:20px 0px 20px 0px}}@media(min-width: 900px){.hero{background-image:url('+C+")}.restaurant #restaurant-list,.testimonials #testimonial-list{grid-template-columns:repeat(3, 1fr)}}@media(min-width: 1200px){.hero{padding-left:32px;max-width:1000px}}","",{version:3,sources:["webpack://./src/styles/main.scss"],names:[],mappings:"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",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=BIZ+UDMincho&family=Inter:wght@300;400;500;600;700&display=swap');\r\n\r\n$bgPrimary: white;\r\n$bgCard: White;\r\n$main: #CE4452;\r\n$mainHover: #f32035;\r\n$black: black;\r\n$togray: #999999;\r\n$borderColor: #2d2d33;\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: 'Inter';\r\n}\r\n\r\nbody {\r\n  background-color: $bgPrimary;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n\r\n  .header__logo {\r\n    display: flex;\r\n    height: 60px;\r\n\r\n    h2{\r\n      display: flex;\r\n      align-items: center;\r\n    }\r\n  }\r\n  \r\n\r\n  nav {\r\n    display: flex;\r\n    gap: 12px;\r\n    padding: 20px 0;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n\r\n    .hamburger {\r\n      font-size: 28px;\r\n      text-decoration: none;\r\n      color: $black;\r\n      background-color: transparent;\r\n      border: none;\r\n      cursor: pointer;\r\n      padding: 8px 12px;\r\n    }\r\n\r\n    .drawer {\r\n      position: absolute;\r\n      right: 0;\r\n      top: 90px;\r\n      background-color: $bgPrimary;\r\n      width: 100%;\r\n      text-align: center;\r\n      border-radius: 4px;\r\n      padding-bottom: 12px;\r\n      display: none;\r\n      height: fit-content;\r\n      z-index: 10;\r\n      a {\r\n        color: $black;\r\n        text-decoration: none;\r\n        padding: 16px;\r\n        display: block;\r\n\r\n        &:hover {\r\n          color: $main;\r\n        }\r\n      }\r\n\r\n      form {\r\n        padding: 0 12px;\r\n\r\n        input {\r\n          padding: 14px 12px;\r\n          background-color: transparent;\r\n          border: 1px solid $togray;\r\n          border-radius: 20px;\r\n          color: $black;\r\n          font-size: 1rem;\r\n        }\r\n      }\r\n    }\r\n\r\n    .open {\r\n      display: flex;\r\n      flex-direction: column;\r\n      gap: 10px;\r\n    }\r\n  }\r\n}\r\n\r\n.skip__link {\r\n  position: absolute;\r\n  top: -52px;\r\n  left: 4px;\r\n  background-color: $main;\r\n  color: $black;\r\n  padding: 16px 20px;\r\n  transition: all 0.3s ease;\r\n  border-radius: 4px;\r\n  text-underline-offset: 2px;\r\n  z-index: 100;\r\n}\r\n\r\n.skip__link:focus {\r\n  top: 4px;\r\n}\r\n\r\n.container {\r\n  max-width: 1000px;\r\n  margin: auto;\r\n}\r\n\r\n.hero {\r\n  background: url('../public/hero-image-small.webp') center no-repeat;\r\n  background-size: cover;\r\n  width: 100%;\r\n  color: $black;\r\n  margin: auto;\r\n  padding: 60px 12px;\r\n\r\n  .hero__item {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    height: 100%;\r\n\r\n    .hero__logo {\r\n      color: $main;\r\n      letter-spacing: 4px;\r\n      font-weight: 500;\r\n      font-size: 16px;\r\n    }\r\n\r\n    .hero__title {\r\n      font-weight: 500;\r\n      font-size: 42px;\r\n      margin-top: 28px;\r\n      color: $bgPrimary;\r\n    }\r\n\r\n    .hero__tagline {\r\n      color: $togray;\r\n      font-size: 18px;\r\n      line-height: 155%;\r\n      margin-top: 12px;\r\n    }\r\n\r\n    .hero__button {\r\n      font-size: 16px;\r\n      width: fit-content;\r\n      padding: 16px 20px;\r\n      cursor: pointer;\r\n      border-radius: 4px;\r\n      background-color: $main;\r\n      border: none;\r\n      margin-top: 32px;\r\n      font-weight: 500;\r\n      color: #000;\r\n      text-decoration: none;\r\n\r\n      &:hover {\r\n        background-color: $mainHover;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.restaurant {\r\n  color: $black;\r\n  padding: 0 12px;\r\n\r\n  #restaurant__title {\r\n    margin-top: 52px;\r\n    font-weight: 500;\r\n  }\r\n\r\n  .restaurant__text {\r\n    color: $togray;\r\n    margin-top: 8px;\r\n  }\r\n\r\n  #restaurant-list {\r\n    margin: 32px 0 0 0;\r\n    display: grid;\r\n    grid-template-columns: repeat(1, 1fr);\r\n    gap: 28px;\r\n\r\n    restaurant-item {\r\n      background-color: $bgCard;\r\n      border-radius: 4px;\r\n      height: 100%;\r\n\r\n      .restaurant-item {\r\n        width: 100%;\r\n        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n        border-radius: 8px;\r\n        overflow: hidden;\r\n      }\r\n      .restaurant-item__header {\r\n        position: relative;\r\n      }\r\n\r\n      .restaurant-item__header__poster {\r\n        width: 100%;\r\n        height: 200px;\r\n        object-fit: cover;\r\n        object-position: center;\r\n        border-radius: 4px 4px 0 0;\r\n      }\r\n\r\n      .restaurant__item__info {\r\n        position:absolute;\r\n        left:0;\r\n        right:0;\r\n        top: 0;\r\n        margin-left:auto;\r\n        margin-right:auto;\r\n        padding: 12px 20px;\r\n        display: flex;\r\n        gap: 4px;\r\n        justify-content: space-between;\r\n        align-items: center;\r\n        background-color: rgba(0, 0, 0, 0.349);\r\n        color: white;\r\n      }\r\n\r\n      .restaurant__item__body {\r\n        padding: 24px 20px 16px 20px;\r\n        position: relative;\r\n\r\n        & > section {\r\n          h3 {\r\n            line-height: 145%;\r\n          }\r\n\r\n          & > p {\r\n            font-weight: 300;\r\n            line-height: 155%;\r\n            font-size: 14px;\r\n            padding-top: 20px;\r\n            overflow: hidden;\r\n            text-overflow: ellipsis;\r\n            display: -webkit-box;\r\n            line-clamp: 4;\r\n            -webkit-line-clamp: 4;\r\n            -webkit-box-orient: vertical;\r\n          }\r\n        }\r\n\r\n        & > a {\r\n          display: flex;\r\n          align-items: center;\r\n          background-color: transparent;\r\n          border: none;\r\n          color: $main;\r\n          cursor: pointer;\r\n          text-decoration: none;\r\n          width: fit-content;\r\n          padding: 14px 0;\r\n          margin-top: 12px;\r\n\r\n          p {\r\n            line-height: 135%;\r\n            font-size: 16px;\r\n          }\r\n\r\n          &:hover {\r\n            color: $mainHover;\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.testimonials {\r\n  color: $black;\r\n  padding: 0 12px;\r\n\r\n  .testimonials__title {\r\n    margin-top: 52px;\r\n    font-weight: 500;\r\n  }\r\n\r\n  .restaurant__text {\r\n    color: $togray;\r\n    margin-top: 8px;\r\n  }\r\n\r\n  #testimonial-list {\r\n    display: grid;\r\n    grid-template-columns: repeat(1, 1fr);\r\n    gap: 28px;\r\n    margin: 32px 0;\r\n\r\n    testimonial-item {\r\n      background-color: $bgCard;\r\n      border-radius: 4px;\r\n      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n      padding: 20px;\r\n      display: flex;\r\n      flex-direction: column;\r\n      justify-content: space-between;\r\n      gap: 28px;\r\n\r\n      & > p {\r\n        line-height: 135%;\r\n        isolation: isolate;\r\n        position: relative;\r\n\r\n        &::before {\r\n          content: '\"';\r\n          font-family: 'BIZ UDMincho';\r\n          font-size: 80px;\r\n          color: $bgPrimary;\r\n          position: absolute;\r\n          z-index: -1;\r\n          right: -16px;\r\n          top: 20px;\r\n        }\r\n      }\r\n\r\n      .testimonials__item__user {\r\n        display: flex;\r\n        gap: 12px;\r\n\r\n        img {\r\n          width: 44px;\r\n          height: 44px;\r\n          border-radius: 50%;\r\n        }\r\n\r\n        section {\r\n          font-size: 14px;\r\n          display: flex;\r\n          flex-direction: column;\r\n          justify-content: center;\r\n          gap: 4px;\r\n\r\n          p:last-child {\r\n            color: $togray;\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n#detail {\r\n  margin: auto;\r\n  padding: 0 12px;\r\n  max-width: 800px;\r\n  \r\n  detail-item > img {\r\n    width: 100%;\r\n    max-height: 350px;\r\n    border-radius: 4px;\r\n    object-fit: cover;\r\n    object-position: center;\r\n  }\r\n\r\n  .title {\r\n    font-weight: bold;\r\n    color: $black;\r\n    font-size: 32px;\r\n  }\r\n\r\n  .header {\r\n    display: flex;\r\n    gap: 4px;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 8px 0 12px 0;\r\n  }\r\n\r\n  button {\r\n    width: 50px;\r\n    height: 50px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color: #db0000;\r\n    \r\n    border-radius: 50%;\r\n    border: 0;\r\n    \r\n    font-size: 20px; \r\n    color: white;\r\n    cursor: pointer;\r\n  }\r\n\r\n  button:hover {\r\n    color: white;\r\n  }\r\n\r\n  .location_rating {\r\n    display: flex;\r\n    gap: 12px;\r\n    margin-bottom: 16px;\r\n    color: $black;\r\n    flex-direction: column;\r\n\r\n    & > div {\r\n      display: flex;\r\n      gap: 4px;\r\n      font-size: 0.9rem;\r\n    }\r\n  }\r\n\r\n  .description {\r\n    color: $black;\r\n    line-height: 1.6rem;\r\n  }\r\n\r\n  hr {\r\n    border: none;\r\n    border-bottom: 1px solid $mainHover;\r\n    margin: 20px 0;\r\n  }\r\n\r\n  .categories {\r\n    color: $black;\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 20px 0px 20px 0px;\r\n    gap: 10px;\r\n\r\n    p {\r\n      font-size: 0.9rem;\r\n      border: 1px solid $togray;\r\n      padding: 4px 12px;\r\n      border-radius: 4px;\r\n      width: fit-content;\r\n    }\r\n  }\r\n\r\n  .detail-foods-drinks {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    margin: 20px 0;\r\n\r\n    .foods {\r\n      color: $black;\r\n      margin-bottom: 20px;\r\n\r\n      p {\r\n        font-weight: bold;\r\n        margin-bottom: 8px;\r\n      }\r\n\r\n      ul {\r\n        list-style: none;\r\n\r\n        li {\r\n          margin-bottom: 4px;\r\n        }\r\n      }\r\n\r\n      ul.food li:before {\r\n        content: '🍽️';\r\n        margin-right: 8px;\r\n      }\r\n\r\n      ul.drink li:before {\r\n        content: '🍷';\r\n        margin-right: 8px;\r\n      }\r\n    }\r\n  }\r\n\r\n  .reviews {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n\r\n\r\n\r\n    #review-container {\r\n      display: flex;\r\n      flex-direction: column;\r\n      gap: 20px;\r\n      \r\n      \r\n      .review {\r\n        color: $black;\r\n        background-color: $bgCard;\r\n        padding: 12px;\r\n        border-radius: 4px;\r\n        display: flex;\r\n        flex-direction: column;\r\n        gap: 4px;\r\n        overflow-y: auto;\r\n        box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.2);\r\n\r\n        .name {\r\n          font-weight: bold;\r\n        }\r\n\r\n        .date {\r\n          color: $togray;\r\n          font-size: 0.9rem;\r\n        }\r\n      }\r\n    }\r\n\r\n    form {\r\n      display: flex;\r\n      flex-direction: column;\r\n      gap: 8px;\r\n      margin: 20px 0;\r\n\r\n      input,\r\n      textarea {\r\n        background-color: transparent;\r\n        border: 1px solid $togray;\r\n        font-size: 1rem;\r\n        padding: 14px;\r\n        color: $black;\r\n        border-radius: 4px;\r\n      }\r\n\r\n      button {\r\n        font-size: 0.9rem;\r\n        background-color: $main;\r\n        color: #000;\r\n        padding: 16px 0;\r\n        border-radius: 4px;\r\n        font-weight: 500;\r\n        width: auto;\r\n\r\n        &:hover {\r\n          background-color: $mainHover;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\nfooter {\r\n  text-align: center;\r\n  margin-top: 52px;\r\n  color: $togray;\r\n  padding: 24px 0;\r\n}\r\n\r\n.padding {\r\n  padding: 0 12px;\r\n}\r\n\r\n.text-center {\r\n  text-align: center;\r\n  color: $black;\r\n}\r\n\r\n.message {\r\n  text-align: center;\r\n  color: $black;\r\n}\r\n\r\n@media (min-width: 600px) {\r\n  .restaurant #restaurant-list,\r\n  .testimonials #testimonial-list {\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n\r\n  header {\r\n    nav {\r\n      justify-content: flex-end;\r\n\r\n      .hamburger {\r\n        display: none;\r\n      }\r\n\r\n      .drawer {\r\n        position: initial;\r\n        display: flex;\r\n        justify-content: flex-end;\r\n        align-items: center;\r\n        padding: 0;\r\n        z-index: 111;\r\n        transform: translateX(0);\r\n      }\r\n    }\r\n  }\r\n\r\n  #detail {\r\n    .location_rating {\r\n      gap: 20px;\r\n      flex-direction: row;\r\n      color: $black;\r\n    }\r\n\r\n    hr {\r\n      margin: 20px 0px 20px 0px;;\r\n    }\r\n\r\n    .categories {\r\n      flex-direction: row;\r\n      margin: 20px 0px 20px 0px;\r\n      gap: 20px;\r\n      color: $black;\r\n    }\r\n\r\n    .detail-foods-drinks {\r\n      grid-template-columns: repeat(2, 1fr);\r\n      margin: 20px 20px;\r\n    }\r\n\r\n    .reviews {\r\n      margin: 20px 0px 20px 0px;\r\n    }\r\n  }\r\n}\r\n\r\n@media (min-width: 900px) {\r\n\r\n  .hero {\r\n    background-image: url('../public/hero-image-large.webp');\r\n  }\r\n\r\n  .restaurant #restaurant-list,\r\n  .testimonials #testimonial-list {\r\n    grid-template-columns: repeat(3, 1fr);\r\n  }\r\n}\r\n\r\n\r\n@media (min-width: 1200px) {\r\n  .hero {\r\n    padding-left: 32px;\r\n    max-width: 1000px;\r\n  }\r\n}\r\n"],sourceRoot:""}]);const u=d},545:(r,n,t)=>{var e=t(379),A=t.n(e),i=t(795),o=t.n(i),a=t(569),l=t.n(a),s=t(565),p=t.n(s),d=t(216),c=t.n(d),C=t(589),u=t.n(C),g=t(144),f={};f.styleTagTransform=u(),f.setAttributes=p(),f.insert=l().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=c();A()(g.Z,f),g.Z&&g.Z.locals&&g.Z.locals}},t={};function e(r){var A=t[r];if(void 0!==A)return A.exports;var i=t[r]={id:r,exports:{}};return n[r](i,i.exports,e),i.exports}e.m=n,r=[],e.O=(n,t,A,i)=>{if(!t){var o=1/0;for(p=0;p<r.length;p++){for(var[t,A,i]=r[p],a=!0,l=0;l<t.length;l++)(!1&i||o>=i)&&Object.keys(e.O).every((r=>e.O[r](t[l])))?t.splice(l--,1):(a=!1,i<o&&(o=i));if(a){r.splice(p--,1);var s=A();void 0!==s&&(n=s)}}return n}i=i||0;for(var p=r.length;p>0&&r[p-1][2]>i;p--)r[p]=r[p-1];r[p]=[t,A,i]},e.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return e.d(n,{a:n}),n},e.d=(r,n)=>{for(var t in n)e.o(n,t)&&!e.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:n[t]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"==typeof window)return window}}(),e.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),(()=>{var r;e.g.importScripts&&(r=e.g.location+"");var n=e.g.document;if(!r&&n&&(n.currentScript&&(r=n.currentScript.src),!r)){var t=n.getElementsByTagName("script");t.length&&(r=t[t.length-1].src)}if(!r)throw new Error("Automatic publicPath is not supported in this browser");r=r.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=r})(),(()=>{e.b=document.baseURI||self.location.href;var r={535:0};e.O.j=n=>0===r[n];var n=(n,t)=>{var A,i,[o,a,l]=t,s=0;if(o.some((n=>0!==r[n]))){for(A in a)e.o(a,A)&&(e.m[A]=a[A]);if(l)var p=l(e)}for(n&&n(t);s<o.length;s++)i=o[s],e.o(r,i)&&r[i]&&r[i][0](),r[i]=0;return e.O(p)},t=self.webpackChunkhelmi_sub_3=self.webpackChunkhelmi_sub_3||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})(),e.nc=void 0;var A=e.O(void 0,[192,2,312,495,337,268],(()=>e(253)));A=e.O(A)})();
//# sourceMappingURL=app~f6563343.bundle.js.map