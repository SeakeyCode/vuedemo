(function(t){function e(e){for(var i,a,o=e[0],l=e[1],c=e[2],f=0,d=[];f<o.length;f++)a=o[f],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,o=1;o<n.length;o++){var l=n[o];0!==r[l]&&(i=!1)}i&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},r={app:0},s=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("85ec"),r=n.n(i);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],a={name:"app"},o=a,l=(n("034f"),n("2877")),c=Object(l["a"])(o,r,s,!1,null,null,null),u=c.exports,f=n("2f62");i["a"].use(f["a"]);var d=new f["a"].Store({state:{},mutations:{},actions:{},modules:{}}),h=n("8c4f"),m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("div",[t._v("home")])])}],v={name:"home",data:function(){return{}},created:function(){}},_=v,b=Object(l["a"])(_,m,p,!1,null,"f35c27b0",null),g=b.exports,O=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("div",[t._v("about")])])}],y={name:"home",data:function(){return{}},methods:{}},x=y,w=Object(l["a"])(x,O,C,!1,null,"4a4874ca",null),S=w.exports,j=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("div",{attrs:{id:"virtual-dom"}},[n("p",[t._v("Virtual DOM")]),n("ul",{attrs:{id:"list"}},[n("li",{staticClass:"item"},[t._v("Item 1")]),n("li",{staticClass:"item"},[t._v("Item 2")]),n("li",{staticClass:"item"},[t._v("Item 3")])]),n("div",[t._v("Hello World")])])])}],E={name:"home",data:function(){return{}},mounted:function(){},methods:{}},H=E,D=Object(l["a"])(H,j,$,!1,null,"16fa884c",null),z=D.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"list",staticClass:"infinite-list-container",on:{scroll:function(e){return t.scrollEvent(e)}}},[n("div",{staticClass:"infinite-list-phantom",style:{height:t.listHeight+"px"}}),n("div",{staticClass:"infinite-list",style:{transform:t.getTransform}},[n("div",{staticClass:"input-box",attrs:{contenteditable:""},on:{mouseup:t.onmouseup}},t._l(t.visibleData,(function(e,i){return n("div",{key:i,ref:"items",refInFor:!0,staticClass:"infinite-list-item",class:"item-"+e.id,style:{lineHeight:t.itemSize+"px"},attrs:{"data-id":e.id}},[t._v(" "+t._s(e.value)+" ")])})),0)])])},T=[],P=(n("fb6a"),n("ec26")),k={name:"editing",data:function(){return{content:[],screenHeight:0,startOffset:0,start:0,end:null,itemSize:26,listData:[],startContainer:null,startOffsets:null,endContainer:null,endOffset:null}},computed:{listHeight:function(){return this.listData.length*this.itemSize},visibleCount:function(){return Math.ceil(this.screenHeight/this.itemSize)},getTransform:function(){return"translate3d(0,".concat(this.startOffset,"px,0)")},visibleData:function(){return this.listData.slice(this.start,Math.min(this.end,this.listData.length))}},mounted:function(){for(var t=0;t<200;t++)this.listData.push({id:Object(P["a"])(),value:"".concat(t,"为了拥护单一责任和开放/封闭的原则"),selectNode:!1});this.screenHeight=parseInt(this.$el.scrollHeight),this.start=0,this.end=this.start+this.visibleCount},methods:{onmouseup:function(){var t=window.getSelection().getRangeAt(0);this.startContainer=t.startContainer,this.startOffset=t.startOffset,this.endContainer=t.endContainer,this.endOffset=t.endOffset},scrollEvent:function(){var t=this,e=this.$refs.list.scrollTop;this.start=Math.floor(e/this.itemSize),this.end=this.start+this.visibleCount,this.startOffset=e-e%this.itemSize,this.startContainer&&this.$nextTick((function(){t.setSelcteRange(t.startContainer,t.endContainer,t.startOffsets,t.endOffset)}))},setSelcteRange:function(t,e,n,i){console.log(t,e);var r=window.getSelection(),s=document.createRange();s.setStart(t,n),s.setEnd(e,i),r.removeAllRanges(),r.addRange(s)}}},R=k,I=(n("d3d8"),Object(l["a"])(R,M,T,!1,null,"60af643f",null)),W=I.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bezier"},[n("div",{staticClass:"content"},[n("div",{staticClass:"root-name"},[t._v(t._s(t.root.name))]),t._l(t.root.children,(function(e,i){return n("div",{key:i,staticClass:"sub",style:{top:e.top+"px",left:e.left+"px"}},[t._v(t._s(e.name))])}))],2)])},J=[],L=(n("4160"),n("159b"),{name:"bezier",data:function(){return{root:{name:"根节点",children:[{name:"子节点1",children:[]},{name:"子节点2",children:[]},{name:"子节点3",children:[]},{name:"子节点4",children:[]}]}}},mounted:function(){var t=this,e=document.querySelector(".root-name");console.log(e.offsetWidth,e.offsetHeight),console.log(e.offsetLeft,e.offsetTop),this.root.children.forEach((function(n,i){var r=e.offsetLeft+e.offsetWidth+100;t.$set(n,"top",100*(i+3)),t.$set(n,"left",r)}))},methods:{}}),q=L,F=(n("d6fd"),Object(l["a"])(q,A,J,!1,null,"22436a5a",null)),N=F.exports;i["a"].use(h["a"]);var V=new h["a"]({mode:"history",routes:[{path:"/Home",component:g},{path:"/about",component:S},{path:"/domDiff",component:z},{path:"/editing",component:W},{path:"/minder",component:N},{path:"*",component:g}]});i["a"].config.productionTip=!1,new i["a"]({store:d,router:V,render:function(t){return t(u)}}).$mount("#app")},"5f03":function(t,e,n){},"63af":function(t,e,n){},"85ec":function(t,e,n){},d3d8:function(t,e,n){"use strict";var i=n("5f03"),r=n.n(i);r.a},d6fd:function(t,e,n){"use strict";var i=n("63af"),r=n.n(i);r.a}});
//# sourceMappingURL=app.61f0480c.js.map