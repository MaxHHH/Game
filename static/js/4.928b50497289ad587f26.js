webpackJsonp([4],{"+UHP":function(t,n){},"4WTo":function(t,n,i){var e=i("NWt+");t.exports=function(t,n){var i=[];return e(t,!1,i.push,i,n),i}},"4Wv9":function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=i("Ji6Z"),r={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"wrap"},[t._l(t.results,function(n,e){return i("div",{key:e,staticClass:"result"},[t._v(t._s(n.number.join(""))+"  "+t._s(n.result))])}),t._v(" "),t.isWin?i("div",{staticClass:"win"},[t._v("Congratulations! Step: "+t._s(t.step)+" "),i("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.restart()}}},[t._v("Restart")])],1):i("div",{staticClass:"ope"},[t._l(t.config.length,function(n){return i("el-input-number",{key:n,staticClass:"input",attrs:{controls:!1,min:0,max:9,step:1},model:{value:t.inputs[n-1],callback:function(i){t.$set(t.inputs,n-1,i)},expression:"inputs[n-1]"}})}),t._v(" "),i("el-button",{attrs:{type:"primary",disabled:t.isBtnDisabled()},on:{click:function(n){return t.btn()}}},[t._v("确定")])],2),t._v(" "),i("el-dialog",{attrs:{title:"新游戏",center:"",visible:t.isDialogShow,width:"320px","show-close":t.falseData,"close-on-click-modal":t.falseData,"close-on-press-escape":t.falseData},on:{"update:visible":function(n){t.isDialogShow=n}}},[i("el-form",{attrs:{"label-width":"60px"}},[i("el-form-item",{attrs:{label:"位数"}},[i("el-input-number",{attrs:{min:2,max:6,step:1},model:{value:t.config.length,callback:function(n){t.$set(t.config,"length",n)},expression:"config.length"}})],1)],1),t._v(" "),i("span",{attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.start()}}},[t._v("开始")])],1)],1)],2)},staticRenderFns:[]};var s=function(t){i("+UHP")},o=i("VU/8")(e.a,r,!1,s,"data-v-1457dfae",null);n.default=o.exports},"7Doy":function(t,n,i){var e=i("EqjI"),r=i("7UMu"),s=i("dSzd")("species");t.exports=function(t){var n;return r(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!r(n.prototype)||(n=void 0),e(n)&&null===(n=n[s])&&(n=void 0)),void 0===n?Array:n}},"9Bbf":function(t,n,i){"use strict";var e=i("kM2E");t.exports=function(t){e(e.S,t,{of:function(){for(var t=arguments.length,n=new Array(t);t--;)n[t]=arguments[t];return new this(n)}})}},"9C8M":function(t,n,i){"use strict";var e=i("evD5").f,r=i("Yobk"),s=i("xH/j"),o=i("+ZMJ"),u=i("2KxR"),a=i("NWt+"),c=i("vIB/"),f=i("EGZi"),l=i("bRrM"),h=i("+E39"),p=i("06OY").fastKey,v=i("LIJb"),d=h?"_s":"size",_=function(t,n){var i,e=p(n);if("F"!==e)return t._i[e];for(i=t._f;i;i=i.n)if(i.k==n)return i};t.exports={getConstructor:function(t,n,i,c){var f=t(function(t,e){u(t,f,n,"_i"),t._t=n,t._i=r(null),t._f=void 0,t._l=void 0,t[d]=0,void 0!=e&&a(e,i,t[c],t)});return s(f.prototype,{clear:function(){for(var t=v(this,n),i=t._i,e=t._f;e;e=e.n)e.r=!0,e.p&&(e.p=e.p.n=void 0),delete i[e.i];t._f=t._l=void 0,t[d]=0},delete:function(t){var i=v(this,n),e=_(i,t);if(e){var r=e.n,s=e.p;delete i._i[e.i],e.r=!0,s&&(s.n=r),r&&(r.p=s),i._f==e&&(i._f=r),i._l==e&&(i._l=s),i[d]--}return!!e},forEach:function(t){v(this,n);for(var i,e=o(t,arguments.length>1?arguments[1]:void 0,3);i=i?i.n:this._f;)for(e(i.v,i.k,this);i&&i.r;)i=i.p},has:function(t){return!!_(v(this,n),t)}}),h&&e(f.prototype,"size",{get:function(){return v(this,n)[d]}}),f},def:function(t,n,i){var e,r,s=_(t,n);return s?s.v=i:(t._l=s={i:r=p(n,!0),k:n,v:i,p:e=t._l,n:void 0,r:!1},t._f||(t._f=s),e&&(e.n=s),t[d]++,"F"!==r&&(t._i[r]=s)),t},getEntry:_,setStrong:function(t,n,i){c(t,n,function(t,i){this._t=v(t,n),this._k=i,this._l=void 0},function(){for(var t=this._k,n=this._l;n&&n.r;)n=n.p;return this._t&&(this._l=n=n?n.n:this._t._f)?f(0,"keys"==t?n.k:"values"==t?n.v:[n.k,n.v]):(this._t=void 0,f(1))},i?"entries":"values",!i,!0),l(n)}}},ALrJ:function(t,n,i){var e=i("+ZMJ"),r=i("MU5D"),s=i("sB3e"),o=i("QRG4"),u=i("oeOm");t.exports=function(t,n){var i=1==t,a=2==t,c=3==t,f=4==t,l=6==t,h=5==t||l,p=n||u;return function(n,u,v){for(var d,_,g=s(n),y=r(g),b=e(u,v,3),m=o(y.length),w=0,x=i?p(n,m):a?p(n,0):void 0;m>w;w++)if((h||w in y)&&(_=b(d=y[w],w,g),t))if(i)x[w]=_;else if(_)switch(t){case 3:return!0;case 5:return d;case 6:return w;case 2:x.push(d)}else if(f)return!1;return l?-1:c||f?f:x}}},BDhv:function(t,n,i){var e=i("kM2E");e(e.P+e.R,"Set",{toJSON:i("m9gC")("Set")})},HpRW:function(t,n,i){"use strict";var e=i("kM2E"),r=i("lOnJ"),s=i("+ZMJ"),o=i("NWt+");t.exports=function(t){e(e.S,t,{from:function(t){var n,i,e,u,a=arguments[1];return r(this),(n=void 0!==a)&&r(a),void 0==t?new this:(i=[],n?(e=0,u=s(a,arguments[2],2),o(t,!1,function(t){i.push(u(t,e++))})):o(t,!1,i.push,i),new this(i))}})}},Ji6Z:function(t,n,i){"use strict";(function(t){var e=i("lHA8"),r=i.n(e);n.a={name:"digital",data:function(){return{falseData:!1,isDialogShow:!0,config:{length:4},results:[],inputs:[],answer:[],step:0,isWin:!1}},mounted:function(){var n=this;t(document).keydown(function(t){13!=t.keyCode&&108!=t.keyCode||n.isBtnDisabled()||n.btn()})},methods:{start:function(){var n=this;this.isDialogShow=!1,this.results=[],this.inputs=new Array(this.config.length),this.step=0,this.isWin=!1,this.answer=[];for(var i=0;i<this.config.length;i++){var e=void 0;do{e=Math.floor(10*Math.random())}while(this.answer.includes(e));this.answer.push(e)}t(".input").on("input propertychange",function(i){if(i.originalEvent.data){var e=t(this).index();t(this).parent().children(".input").eq(e).find("input").blur(),e<n.config.length-1&&t(this).parent().children(".input").eq(e+1).find("input").focus()}}),t(".input").eq(0).find("input").focus()},handleInput:function(){console.log(1111)},isBtnDisabled:function(){for(var t=0;t<this.inputs.length;t++)if(void 0===this.inputs[t])return!0;return new r.a(this.inputs).size!==this.config.length},btn:function(){var n={};n.number=this.inputs;for(var i,e=0,r=0,s=0;s<n.number.length;s++)n.number[s]===this.answer[s]&&e++,this.answer.includes(n.number[s])&&r++;i=r-e,n.result=e+"A"+i+"B",this.results.push(n),this.inputs=new Array(this.config.length),this.step++,e===this.config.length?this.isWin=!0:t(".input").eq(0).find("input").focus()},restart:function(){this.isDialogShow=!0}}}}).call(n,i("7t+N"))},LIJb:function(t,n,i){var e=i("EqjI");t.exports=function(t,n){if(!e(t)||t._t!==n)throw TypeError("Incompatible receiver, "+n+" required!");return t}},ioQ5:function(t,n,i){i("HpRW")("Set")},lHA8:function(t,n,i){t.exports={default:i("pPW7"),__esModule:!0}},m9gC:function(t,n,i){var e=i("RY/4"),r=i("4WTo");t.exports=function(t){return function(){if(e(this)!=t)throw TypeError(t+"#toJSON isn't generic");return r(this)}}},oNmr:function(t,n,i){i("9Bbf")("Set")},oeOm:function(t,n,i){var e=i("7Doy");t.exports=function(t,n){return new(e(t))(n)}},pPW7:function(t,n,i){i("M6a0"),i("zQR9"),i("+tPU"),i("ttyz"),i("BDhv"),i("oNmr"),i("ioQ5"),t.exports=i("FeBl").Set},qo66:function(t,n,i){"use strict";var e=i("7KvD"),r=i("kM2E"),s=i("06OY"),o=i("S82l"),u=i("hJx8"),a=i("xH/j"),c=i("NWt+"),f=i("2KxR"),l=i("EqjI"),h=i("e6n0"),p=i("evD5").f,v=i("ALrJ")(0),d=i("+E39");t.exports=function(t,n,i,_,g,y){var b=e[t],m=b,w=g?"set":"add",x=m&&m.prototype,k={};return d&&"function"==typeof m&&(y||x.forEach&&!o(function(){(new m).entries().next()}))?(m=n(function(n,i){f(n,m,t,"_c"),n._c=new b,void 0!=i&&c(i,g,n[w],n)}),v("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","),function(t){var n="add"==t||"set"==t;t in x&&(!y||"clear"!=t)&&u(m.prototype,t,function(i,e){if(f(this,m,t),!n&&y&&!l(i))return"get"==t&&void 0;var r=this._c[t](0===i?0:i,e);return n?this:r})}),y||p(m.prototype,"size",{get:function(){return this._c.size}})):(m=_.getConstructor(n,t,g,w),a(m.prototype,i),s.NEED=!0),h(m,t),k[t]=m,r(r.G+r.W+r.F,k),y||_.setStrong(m,t,g),m}},ttyz:function(t,n,i){"use strict";var e=i("9C8M"),r=i("LIJb");t.exports=i("qo66")("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return e.def(r(this,"Set"),t=0===t?0:t,t)}},e)}});
//# sourceMappingURL=4.928b50497289ad587f26.js.map