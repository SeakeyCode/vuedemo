(function(t){function e(e){for(var i,a,o=e[0],c=e[1],l=e[2],u=0,d=[];u<o.length;u++)a=o[u],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);f&&f(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,a=1;a<n.length;a++){var c=n[a];0!==s[c]&&(i=!1)}i&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},s={app:0},r=[];function a(t){return o.p+"js/"+({pdfjsWorker:"pdfjsWorker"}[t]||t)+"."+{pdfjsWorker:"aaaf5cc9"}[t]+".js"}function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n=s[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,i){n=s[t]=[e,i]}));e.push(n[2]=i);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=a(t);var l=new Error;r=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=s[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",l.name="ChunkLoadError",l.type=i,l.request=r,n[1](l)}s[t]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var f=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("85ec"),s=n.n(i);s.a},1:function(t,e){},2:function(t,e){},3:function(t,e){},"3fe0":function(t,e,n){"use strict";var i=n("c51a"),s=n.n(i);s.a},4:function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],a={name:"app"},o=a,c=(n("034f"),n("2877")),l=Object(c["a"])(o,s,r,!1,null,null,null),u=l.exports,f=n("2f62");i["a"].use(f["a"]);var d=new f["a"].Store({state:{},mutations:{},actions:{},modules:{}}),h=n("8c4f"),p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("div",[t._v("about")])])}],v={name:"about-关于",data:function(){return{}},methods:{}},g=v,b=Object(c["a"])(g,p,m,!1,null,"3bb0092e",null),_=b.exports,C=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("div",{attrs:{id:"virtual-dom"}},[n("p",[t._v("Virtual DOM")]),n("ul",{attrs:{id:"list"}},[n("li",{staticClass:"item"},[t._v("Item 1")]),n("li",{staticClass:"item"},[t._v("Item 2")]),n("li",{staticClass:"item"},[t._v("Item 3")])]),n("div",[t._v("Hello World")])])])}],O={name:"domDiff-虚拟DOM",data:function(){return{}},mounted:function(){},methods:{}},x=O,w=Object(c["a"])(x,C,y,!1,null,"7c77d9c4",null),j=w.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"list",staticClass:"infinite-list-container",on:{scroll:function(e){return t.scrollEvent(e)}}},[n("div",{staticClass:"infinite-list-phantom",style:{height:t.listHeight+"px"}}),n("div",{staticClass:"infinite-list",style:{transform:t.getTransform}},[n("div",{staticClass:"input-box",attrs:{contenteditable:""},on:{mouseup:t.onmouseup}},t._l(t.visibleData,(function(e,i){return n("div",{key:i,ref:"items",refInFor:!0,staticClass:"infinite-list-item",class:"item-"+e.id,style:{lineHeight:t.itemSize+"px"},attrs:{"data-id":e.id}},[t._v(" "+t._s(e.value)+" ")])})),0)])])},P=[],k=(n("fb6a"),n("ec26")),D={name:"editing-虚拟列表",data:function(){return{content:[],screenHeight:0,startOffset:0,start:0,end:null,itemSize:26,listData:[],startContainer:null,startOffsets:null,endContainer:null,endOffset:null}},computed:{listHeight:function(){return this.listData.length*this.itemSize},visibleCount:function(){return Math.ceil(this.screenHeight/this.itemSize)},getTransform:function(){return"translate3d(0,".concat(this.startOffset,"px,0)")},visibleData:function(){return this.listData.slice(this.start,Math.min(this.end,this.listData.length))}},mounted:function(){for(var t=0;t<200;t++)this.listData.push({id:Object(k["a"])(),value:"".concat(t,"为了拥护单一责任和开放/封闭的原则"),selectNode:!1});this.screenHeight=parseInt(this.$el.scrollHeight),this.start=0,this.end=this.start+this.visibleCount},methods:{onmouseup:function(){var t=window.getSelection().getRangeAt(0);this.startContainer=t.startContainer,this.startOffset=t.startOffset,this.endContainer=t.endContainer,this.endOffset=t.endOffset},scrollEvent:function(){var t=this,e=this.$refs.list.scrollTop;this.start=Math.floor(e/this.itemSize),this.end=this.start+this.visibleCount,this.startOffset=e-e%this.itemSize,this.startContainer&&this.$nextTick((function(){t.setSelcteRange(t.startContainer,t.endContainer,t.startOffsets,t.endOffset)}))},setSelcteRange:function(t,e,n,i){console.log(t,e);var s=window.getSelection(),r=document.createRange();r.setStart(t,n),r.setEnd(e,i),s.removeAllRanges(),s.addRange(r)}}},E=D,$=(n("93b7"),Object(c["a"])(E,S,P,!1,null,"afb4f396",null)),T=$.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bezier"},[n("div",{staticClass:"content"},[n("div",{staticClass:"root-name"},[t._v(t._s(t.root.name))]),t._l(t.root.children,(function(e,i){return n("div",{key:i,staticClass:"sub",style:{top:e.top+"px",left:e.left+"px"}},[t._v(" "+t._s(e.name)+" ")])}))],2)])},M=[],z=(n("4160"),n("159b"),{name:"bezier-思维脑图",data:function(){return{root:{name:"根节点",children:[{name:"子节点1",children:[]},{name:"子节点2",children:[]},{name:"子节点3",children:[]},{name:"子节点4",children:[]}]}}},mounted:function(){var t=this,e=document.querySelector(".root-name");console.log(e.offsetWidth,e.offsetHeight),console.log(e.offsetLeft,e.offsetTop),this.root.children.forEach((function(n,i){var s=e.offsetLeft+e.offsetWidth+100;t.$set(n,"top",100*(i+3)),t.$set(n,"left",s)}))},methods:{}}),R=z,I=(n("ca5a"),Object(c["a"])(R,H,M,!1,null,"ee3d3d62",null)),W=I.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pdf"},[n("div",{staticClass:"tools"},[n("button",{on:{click:function(e){return t.test(0)}}},[t._v("放大")]),n("button",{on:{click:function(e){return t.test(1)}}},[t._v("缩小")])]),n("div",{staticClass:"pdfBox"},[n("div",{staticClass:"center"},[n("div",{staticClass:"contor"},[n("button",{attrs:{icon:"el-icon-plus"},on:{click:t.addscale}},[t._v("放大")]),n("button",{attrs:{icon:"el-icon-minus"},on:{click:t.minus}},[t._v("缩小")])]),t._l(t.page_count,(function(t){return n("canvas",{key:t,attrs:{id:"the-canvas"+t}})}))],2)])])},N=[],q=(n("99af"),n("9511"));q.workerSrc=n("2aad");var A={components:{},data:function(){return{pdfUrl:"http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf",pdfDoc:null,pageNum:1,pageRendering:!1,pageNumPending:null,scale:1.2,page_num:0,page_count:0}},mounted:function(){this.init()},methods:{init:function(){var t=this;q.getDocument(this.pdfUrl).then((function(e){t.pdfDoc=e,t.page_count=t.pdfDoc.numPages;for(var n=0;n<t.page_count;n++)t.renderPage(n+1)}))},renderPage:function(t){var e=this;this.pdfDoc.getPage(t).then((function(n){var i=document.getElementById("the-canvas"+t),s=n.getViewport(e.scale);i.height=s.height,e.pdfWidth=i.width=s.width;var r=i.getContext("2d"),a={canvasContext:r,viewport:s};n.render(a)}))},addscale:function(){this.scale<=2&&(this.scale+=.1,this.renderPage(this.pageNum))},minus:function(){this.scale>=.8&&(this.scale-=.1,this.renderPage(this.pageNum))},test:function(t){var e=document.querySelector(".pdfBox"),n=e.getBoundingClientRect();console.log(n),0===t?this.scale+=.1:1===t&&(this.scale-=.1),console.log(n.height*this.scale,n.height),document.querySelector(".pdfBox").style.transform="scale(".concat(this.scale,") translateY(").concat(n.height*this.scale-n.height,"px)")}}},L=A,F=(n("3fe0"),Object(c["a"])(L,B,N,!1,null,"051dfbf7",null)),J=F.exports;i["a"].use(h["a"]);var U=new h["a"]({mode:"history",routes:[{path:"/",component:J},{path:"/about",component:_},{path:"/domDiff",component:j},{path:"/editing",component:T},{path:"/minder",component:W},{path:"*",component:J}]});i["a"].config.productionTip=!1,new i["a"]({store:d,router:U,render:function(t){return t(u)}}).$mount("#app")},"7aa5":function(t,e,n){},"85ec":function(t,e,n){},"93b7":function(t,e,n){"use strict";var i=n("f7b1"),s=n.n(i);s.a},c51a:function(t,e,n){},ca5a:function(t,e,n){"use strict";var i=n("7aa5"),s=n.n(i);s.a},f7b1:function(t,e,n){}});
//# sourceMappingURL=app.abd4815c.js.map