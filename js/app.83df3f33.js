(function(t){function e(e){for(var i,r,o=e[0],l=e[1],c=e[2],f=0,d=[];f<o.length;f++)r=o[f],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,o=1;o<n.length;o++){var l=n[o];0!==s[l]&&(i=!1)}i&&(a.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},s={app:0},a=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("85ec"),s=n.n(i);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],r={name:"app"},o=r,l=(n("034f"),n("2877")),c=Object(l["a"])(o,s,a,!1,null,null,null),u=c.exports,f=n("2f62");i["default"].use(f["a"]);var d=new f["a"].Store({state:{},mutations:{},actions:{},modules:{}}),h=n("8c4f"),m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("div",[t._v("about")])])}],v={name:"about-关于",data:function(){return{}},methods:{}},b=v,g=Object(l["a"])(b,m,p,!1,null,"3bb0092e",null),_=g.exports,C=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},O=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("div",{attrs:{id:"virtual-dom"}},[n("p",[t._v("Virtual DOM")]),n("ul",{attrs:{id:"list"}},[n("li",{staticClass:"item"},[t._v("Item 1")]),n("li",{staticClass:"item"},[t._v("Item 2")]),n("li",{staticClass:"item"},[t._v("Item 3")])]),n("div",[t._v("Hello World")])])])}],y={name:"domDiff-虚拟DOM",data:function(){return{}},mounted:function(){},methods:{}},S=y,w=Object(l["a"])(S,C,O,!1,null,"7c77d9c4",null),x=w.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"list",staticClass:"infinite-list-container",on:{scroll:function(e){return t.scrollEvent(e)}}},[n("div",{staticClass:"infinite-list-phantom",style:{height:t.listHeight+"px"}}),n("div",{staticClass:"infinite-list",style:{transform:t.getTransform}},[n("div",{staticClass:"input-box",attrs:{contenteditable:""},on:{mouseup:t.onmouseup}},t._l(t.visibleData,(function(e,i){return n("div",{key:i,ref:"items",refInFor:!0,staticClass:"infinite-list-item",class:"item-"+e.id,style:{lineHeight:t.itemSize+"px"},attrs:{"data-id":e.id}},[t._v(" "+t._s(e.value)+" ")])})),0)])])},j=[],z=(n("fb6a"),n("ec26")),A={name:"editing-虚拟列表",data:function(){return{content:[],screenHeight:0,startOffset:0,start:0,end:null,itemSize:26,listData:[],startContainer:null,startOffsets:null,endContainer:null,endOffset:null}},computed:{listHeight:function(){return this.listData.length*this.itemSize},visibleCount:function(){return Math.ceil(this.screenHeight/this.itemSize)},getTransform:function(){return"translate3d(0,".concat(this.startOffset,"px,0)")},visibleData:function(){return this.listData.slice(this.start,Math.min(this.end,this.listData.length))}},mounted:function(){for(var t=0;t<200;t++)this.listData.push({id:Object(z["a"])(),value:"".concat(t,"为了拥护单一责任和开放/封闭的原则"),selectNode:!1});this.screenHeight=parseInt(this.$el.scrollHeight),this.start=0,this.end=this.start+this.visibleCount},methods:{onmouseup:function(){var t=window.getSelection().getRangeAt(0);this.startContainer=t.startContainer,this.startOffset=t.startOffset,this.endContainer=t.endContainer,this.endOffset=t.endOffset},scrollEvent:function(){var t=this,e=this.$refs.list.scrollTop;this.start=Math.floor(e/this.itemSize),this.end=this.start+this.visibleCount,this.startOffset=e-e%this.itemSize,this.startContainer&&this.$nextTick((function(){t.setSelcteRange(t.startContainer,t.endContainer,t.startOffsets,t.endOffset)}))},setSelcteRange:function(t,e,n,i){console.log(t,e);var s=window.getSelection(),a=document.createRange();a.setStart(t,n),a.setEnd(e,i),s.removeAllRanges(),s.addRange(a)}}},$=A,E=(n("93b7"),Object(l["a"])($,D,j,!1,null,"afb4f396",null)),H=E.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bezier"},[n("div",{staticClass:"content"},[n("div",{staticClass:"root-name"},[t._v(t._s(t.root.name))]),t._l(t.root.children,(function(e,i){return n("div",{key:i,staticClass:"sub",style:{top:e.top+"px",left:e.left+"px"}},[t._v(" "+t._s(e.name)+" ")])}))],2)])},M=[],k=(n("4160"),n("159b"),{name:"bezier-思维脑图",data:function(){return{root:{name:"根节点",children:[{name:"子节点1",children:[]},{name:"子节点2",children:[]},{name:"子节点3",children:[]},{name:"子节点4",children:[]}]}}},mounted:function(){var t=this,e=document.querySelector(".root-name");console.log(e.offsetWidth,e.offsetHeight),console.log(e.offsetLeft,e.offsetTop),this.root.children.forEach((function(n,i){var s=e.offsetLeft+e.offsetWidth+100;t.$set(n,"top",100*(i+3)),t.$set(n,"left",s)}))},methods:{}}),T=k,P=(n("ca5a"),Object(l["a"])(T,F,M,!1,null,"ee3d3d62",null)),R=P.exports,X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pdf"},[n("div",{staticClass:"tools"},[n("button",{on:{click:function(e){return t.test(0)}}},[t._v("放大")]),n("button",{on:{click:function(e){return t.test(1)}}},[t._v("缩小")])]),n("div",{staticClass:"demo-image__lazy"},t._l(t.content,(function(t){return n("el-image",{key:t,attrs:{src:t,lazy:""}})})),1)])},I=[],W=(n("ac1f"),n("466d"),n("bc3a")),q=n.n(W),J={components:{},data:function(){return{scale:1,content:"",testUrl:"/pdf/onlinePreview?url=http%3A%2F%2F47.101.203.116%3A8100%2Fwaterfall%2F497e15a8-4b6c-4b0c-aefe-355b3b121c4f.pdf%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Credential%3Dminioadmin%252F20200804%252Fus-east-1%252Fs3%252Faws4_request%26X-Amz-Date%3D20200804T085031Z%26X-Amz-Expires%3D604800%26X-Amz-SignedHeaders%3Dhost%26X-Amz-Signature%3Db0f521e764b5879e38c682f97646dc89398982416e70d10c4c2e31e0b0033232"}},mounted:function(){var t=this;q.a.get(this.testUrl).then((function(e){t.content=e.data.match(/(?<=data-src=").*?(.jpg)/g),console.log(t.content)}))},methods:{test:function(){}}},L=J,U=(n("6222"),Object(l["a"])(L,X,I,!1,null,"28ec2a9a",null)),N=U.exports;i["default"].use(h["a"]);var V=new h["a"]({mode:"history",routes:[{path:"/",component:N},{path:"/about",component:_},{path:"/domDiff",component:x},{path:"/editing",component:H},{path:"/minder",component:R},{path:"*",component:N}]}),Z=n("5c96"),B=n.n(Z);n("0fae");i["default"].use(B.a),i["default"].config.productionTip=!1,new i["default"]({store:d,router:V,render:function(t){return t(u)}}).$mount("#app")},6222:function(t,e,n){"use strict";var i=n("7ab7"),s=n.n(i);s.a},"7aa5":function(t,e,n){},"7ab7":function(t,e,n){},"85ec":function(t,e,n){},"93b7":function(t,e,n){"use strict";var i=n("f7b1"),s=n.n(i);s.a},ca5a:function(t,e,n){"use strict";var i=n("7aa5"),s=n.n(i);s.a},f7b1:function(t,e,n){}});
//# sourceMappingURL=app.83df3f33.js.map