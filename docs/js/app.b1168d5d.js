(function(t){function e(e){for(var a,o,s=e[0],c=e[1],l=e[2],d=0,m=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(m.length)m.shift()();return n.push.apply(n,l||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],a=!0,o=1;o<i.length;o++){var c=i[o];0!==r[c]&&(a=!1)}a&&(n.splice(e--,1),t=s(s.s=i[0]))}return t}var a={},r={app:0},n=[];function o(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"9e09dc6b"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.e=function(t){var e=[],i=r[t];if(0!==i)if(i)e.push(i[2]);else{var a=new Promise((function(e,a){i=r[t]=[e,a]}));e.push(i[2]=a);var n,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=o(t);var l=new Error;n=function(e){c.onerror=c.onload=null,clearTimeout(d);var i=r[t];if(0!==i){if(i){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",l.name="ChunkLoadError",l.type=a,l.request=n,i[1](l)}r[t]=void 0}};var d=setTimeout((function(){n({type:"timeout",target:c})}),12e4);c.onerror=c.onload=n,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(i,a,function(e){return t[e]}.bind(null,a));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var u=l;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var a=i("85ec"),r=i.n(a);r.a},"03f7":function(t,e,i){},"0418":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fixed-top",staticStyle:{background:"#545c64"}},[a("div",{staticClass:"container "},[a("el-menu",{staticClass:"el-menu",attrs:{"default-active":t.$route.path,router:!0,mode:"horizontal","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b","menu-trigger":"hover"},on:{select:t.handleSelect}},[a("el-menu-item",{attrs:{index:"/"}},[a("el-avatar",{staticStyle:{background:"#ffd04b","margin-right":"10px"},attrs:{size:50,src:i("da51")}}),a("b",[t._v("Home")])],1),a("el-submenu",{attrs:{index:"portfolio"}},[a("template",{slot:"title"},[a("b",[t._v("Portfolio")])]),a("el-menu-item",{attrs:{index:"/portfolio/engine"}},[t._v(" Game Engine (C++) ")]),a("el-menu-item",{attrs:{index:"/portfolio/space-invaders"}},[t._v(" Space Invader (C#) ")]),a("el-menu-item",{attrs:{index:"/portfolio/dx-scene"}},[t._v(" DX11 Scene (C++) ")]),a("el-menu-item",{attrs:{index:"/portfolio/platformer"}},[t._v(" Simple Platformer (UE4) ")]),a("el-menu-item",{attrs:{index:"/portfolio/audio-engine"}},[t._v(" Audio Engine (C++) ")]),a("el-menu-item",{attrs:{index:"/portfolio/multiplayer"}},[t._v(" Multiplayer (Unity) ")])],2)],1)],1)])},r=[],n={name:"Header",methods:{handleSelect:function(t,e){console.log(t,e)}}},o=n,s=i("2877"),c=Object(s["a"])(o,a,r,!1,null,"cbbedf84",null);e["a"]=c.exports},"0ba3":function(t,e,i){t.exports=i.p+"img/avatar.128faee5.jpg"},"254b":function(t,e,i){"use strict";var a=i("3f6a"),r=i.n(a);r.a},"2aa2":function(t,e,i){t.exports=i.p+"img/dx11.6c59967f.jpg"},"2f30":function(t,e,i){"use strict";var a=i("03f7"),r=i.n(a);r.a},"3f6a":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("2b0e"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},n=[],o={name:"App"},s=o,c=(i("034f"),i("2877")),l=Object(c["a"])(s,r,n,!1,null,null,null),d=l.exports,u=(i("4989"),i("ab8b"),i("5c96")),m=i.n(u),f=(i("0fae"),i("d3b7"),i("8c4f")),h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("Header"),i("Introduction"),i("PortfolioNav"),i("Footer")],1)},p=[],v=i("0418"),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"introduction"},[t._m(0),t._v(" "),a("div",{staticClass:"container mt-3"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg"},[a("div",{staticClass:"mx-5"},[t._m(1),a("el-avatar",{attrs:{size:80,src:i("0ba3")}})],1)]),t._m(2)])])])},_=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container py-5"},[i("div",{staticClass:"pt-5"},[i("h1",{staticClass:"mt-5"},[t._v(" Hello, I'm "),i("span",{staticStyle:{color:"hotpink"}},[t._v("Jiahao Shen")]),t._v(". ")]),i("h2",[t._v(" I'm a "),i("b",[t._v("game programmer")]),t._v(". ")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h3",[t._v("About "),i("span",{staticStyle:{color:"hotpink"}},[t._v("me")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col-lg text-about-content"},[i("p",[t._v(" I'm a graduate student at DePaul University, major in game programming. I will graduate in November 2021. My skill set includes C++ and C#. ")]),i("p",[t._v(" I have experience of graphic and shader programming from course project. I have built graphic systems with both DX11 and OpenGL. ")]),i("p",[t._v(" I also have developed a 2D game, Space Invaders, which have used more than 10 design patterns. ")])])}],b={name:"Introduction",data:function(){return{sectionHeight:0}},created:function(){this.sectionHeight=this.getSectionHeight()},methods:{getSectionHeight:function(){var t,e=window.innerHeight;return t=.85*e,t+"px"}},mounted:function(){var t=this;window.onresize=function(){t.sectionHeight=t.getSectionHeight()}}},x=b,w=(i("a6a4"),Object(c["a"])(x,g,_,!1,null,"f36766c2",null)),C=w.exports,y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"portfolio-nav "},[i("div",{staticClass:"pt-5 "},[i("h2",[t._v(" PORTFOLIO ")]),i("div",{staticClass:"container"},[i("div",{staticClass:"row mt-5"},[i("div",{staticClass:"col-md"},[i("PortfolioCard",{attrs:{imgName:"engine.jpg",title:"Game Engine",text:"C++, OpenGL",width:t.cardWidth,link:"/portfolio/engine"}})],1),i("div",{staticClass:"col-md"},[i("PortfolioCard",{attrs:{imgName:"space_invader.jpg",title:"Space Invaders",text:"C#, Design Patterns",width:t.cardWidth,link:"/portfolio/space-invaders"}})],1),i("div",{staticClass:"col-md"},[i("PortfolioCard",{attrs:{imgName:"dx11.jpg",title:"Static Scene",text:"C++, DirectX 11",width:t.cardWidth,link:"/portfolio/dx-scene"}})],1),i("div",{staticClass:"col-md"},[i("PortfolioCard",{attrs:{imgName:"simple_platformer.jpg",title:"Simple Platformer",text:"Unreal Engine, Level design",width:t.cardWidth,link:"/portfolio/platformer"}})],1),i("div",{staticClass:"col-md"},[i("PortfolioCard",{attrs:{imgName:"audio.jpg",title:"Audio Engine",text:"C++, Multi Thread",width:t.cardWidth,link:"/portfolio/audio-engine"}})],1),i("div",{staticClass:"col-md"},[i("PortfolioCard",{attrs:{imgName:"default.jpg",title:"Multiplayer FPS",text:"Unity",width:t.cardWidth,link:"/portfolio/multiplayer"}})],1)])])])])},H=[],S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card mx-auto my-2 card-style",style:{width:this.width}},[a("img",{staticClass:"card-img-top card-shadow mx-auto",attrs:{src:i("bb6e")("./"+t.imgName),alt:t.imgName}}),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[a("b",[t._v(t._s(t.title))])]),a("p",{staticClass:"card-text",staticStyle:{"font-style":"italic"}},[t._v(t._s(t.text))]),a("div",{staticClass:"dropdown-divider"}),a("router-link",{staticClass:"btn button",attrs:{to:this.link}},[t._v("See More")])],1)])},W=[],j={name:"PortfolioCard",props:{imgName:String,title:String,text:String,width:String,link:String},methods:{}},F=j,E=(i("2f30"),Object(c["a"])(F,S,W,!1,null,"a37ea12a",null)),O=E.exports,P={name:"PortfolioNav",components:{PortfolioCard:O},data:function(){return{cardWidth:this.getCardWidth()}},methods:{getCardWidth:function(){var t,e=window.innerWidth;return t=e>1200?21:e>992?18:e>768?20:e>576?31:.1*e*.5,t+"rem"}},mounted:function(){var t=this;window.onresize=function(){t.cardWidth=t.getCardWidth()}}},$=P,k=(i("254b"),Object(c["a"])($,y,H,!1,null,"141b961b",null)),D=k.exports,I=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},N=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"footer"},[i("div",{staticClass:"container my-5"},[i("h4",[t._v("@jshen21")])])])}],M={name:"Footer"},G=M,z=Object(c["a"])(G,I,N,!1,null,"0b6cc55e",null),A=z.exports,L={name:"Home",components:{Footer:A,PortfolioNav:D,Introduction:C,Header:v["a"]}},T=L,U=(i("cccb"),Object(c["a"])(T,h,p,!1,null,null,null)),X=U.exports,J=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"game-engine"},[i("Header"),i("div",{staticClass:"pt-5"},[i("div",{staticClass:"container pt-5"},[i("h1",[t._v("Game Engine")]),i("div",{staticClass:"mt-3 mx-auto"},[i("iframe",{attrs:{width:t.iframeWidth,height:t.iframeHeight,src:"https://www.youtube.com/embed/OyDS9J2xOHY",frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"true"}})]),t._m(0),t._m(1)])]),i("Footer")],1)},K=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mt-3 mx-auto"},[i("h3",{staticStyle:{"text-align":"left"}},[i("b",[t._v("Overview")])]),i("div",{staticClass:"container px-3",staticStyle:{"text-align":"left"}},[t._v(" ... ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mt-3 mx-auto "},[i("h1",{staticStyle:{"text-align":"left"}},[t._v("Details")]),i("div",{staticClass:"container px-3",staticStyle:{"text-align":"left"}},[i("p",[t._v("GitHub: "),i("a",{attrs:{href:""}},[t._v("...")])])])])}],R={name:"GameEngine",components:{Footer:A,Header:v["a"]},data:function(){return{iframeWidth:0,iframeHeight:0}},created:function(){this.iframeWidth=this.getFrameWidth(),this.iframeHeight=this.getFrameHeight()},methods:{getFrameWidth:function(){var t,e=window.innerWidth;return t=e>1200?960:e>992?800:e>768?640:e>576?480:.8*e,t},getFrameHeight:function(){return 9*this.iframeWidth/16}},mounted:function(){var t=this;window.onresize=function(){t.iframeWidth=t.getFrameWidth(),t.iframeHeight=t.getFrameHeight()}}},Y=R,Z=(i("5f94"),Object(c["a"])(Y,J,K,!1,null,"05fe670e",null)),q=Z.exports,B=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"space-invaders"},[i("Header"),i("div",{staticClass:"pt-5"},[i("div",{staticClass:"container pt-5"},[i("h1",[t._v("Space Invaders")]),i("div",{staticClass:"mt-3 mx-auto"},[i("iframe",{attrs:{width:t.iframeWidth,height:t.iframeHeight,src:"https://www.youtube.com/embed/i9j0MZuS9LY",frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"true"}})]),t._m(0),t._m(1)])]),i("Footer")],1)},V=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mt-3 mx-auto"},[i("h1",{staticStyle:{"text-align":"left"}},[t._v("Overview")]),i("div",{staticClass:"container px-3",staticStyle:{"text-align":"left"}},[t._v(" ... ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mt-3 mx-auto"},[i("h1",{staticStyle:{"text-align":"left"}},[t._v("Details")]),i("div",{staticClass:"container px-3",staticStyle:{"text-align":"left"}},[i("p",[t._v("GitHub: "),i("a",{attrs:{href:""}},[t._v("...")])])])])}],Q={name:"SpaceInvaders",components:{Header:v["a"]},data:function(){return{iframeWidth:0,iframeHeight:0}},created:function(){this.iframeWidth=this.getFrameWidth(),this.iframeHeight=this.getFrameHeight()},methods:{getFrameWidth:function(){var t,e=window.innerWidth;return t=e>1200?960:e>992?800:e>768?640:e>576?480:.8*e,t},getFrameHeight:function(){return 9*this.iframeWidth/16}},mounted:function(){var t=this;window.onresize=function(){t.iframeWidth=t.getFrameWidth(),t.iframeHeight=t.getFrameHeight()}}},tt=Q,et=Object(c["a"])(tt,B,V,!1,null,"0446a1e2",null),it=et.exports,at=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dx-scene"},[i("Header"),i("div",{staticClass:"pt-5"},[i("div",{staticClass:"container pt-5"},[i("h1",[t._v("DirectX11 Scene")]),i("div",{staticClass:"mt-3 mx-auto"},[i("iframe",{attrs:{width:t.iframeWidth,height:t.iframeHeight,src:"https://www.youtube.com/embed/Llcmy0IJ_ck",frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"true"}})]),t._m(0),t._m(1)])]),i("Footer")],1)},rt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mt-3 mx-auto"},[i("h1",{staticStyle:{"text-align":"left"}},[t._v("Overview")]),i("div",{staticClass:"container px-3",staticStyle:{"text-align":"left"}},[t._v(" ... ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mt-3 mx-auto"},[i("h1",{staticStyle:{"text-align":"left"}},[t._v("Details")]),i("div",{staticClass:"container px-3",staticStyle:{"text-align":"left"}},[i("p",[t._v("GitHub: "),i("a",{attrs:{href:""}},[t._v("...")])])])])}],nt={name:"DXScene",components:{Header:v["a"]},data:function(){return{iframeWidth:0,iframeHeight:0}},created:function(){this.iframeWidth=this.getFrameWidth(),this.iframeHeight=this.getFrameHeight()},methods:{getFrameWidth:function(){var t,e=window.innerWidth;return t=e>1200?960:e>992?800:e>768?640:e>576?480:.8*e,t},getFrameHeight:function(){return 9*this.iframeWidth/16}},mounted:function(){var t=this;window.onresize=function(){t.iframeWidth=t.getFrameWidth(),t.iframeHeight=t.getFrameHeight()}}},ot=nt,st=Object(c["a"])(ot,at,rt,!1,null,"5d13cb68",null),ct=st.exports,lt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"simple-platformer"},[i("Header"),i("div",{staticClass:"pt-5"},[i("div",{staticClass:"container pt-5"},[i("h1",[t._v("Simple Platformer")]),i("div",{staticClass:"mt-3 mx-auto"},[i("iframe",{attrs:{width:t.iframeWidth,height:t.iframeHeight,src:"https://www.youtube.com/embed/VyZr2UosK28",frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"true"}})]),t._m(0),t._m(1)])]),i("Footer")],1)},dt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mt-3 mx-auto"},[i("h3",{staticStyle:{"text-align":"left"}},[i("b",[t._v("Overview")])]),i("div",{staticClass:"container px-3",staticStyle:{"text-align":"left"}},[t._v(" ... ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mt-3 mx-auto"},[i("h1",{staticStyle:{"text-align":"left"}},[t._v("Details")]),i("div",{staticClass:"container px-3",staticStyle:{"text-align":"left"}},[i("p",[t._v("GitHub: "),i("a",{attrs:{href:"https://github.com/DirtyWine/SimplePlatformer"}},[t._v("https://github.com/DirtyWine/SimplePlatformer")])])])])}],ut={name:"SimplePlatformer",components:{Header:v["a"]},data:function(){return{iframeWidth:0,iframeHeight:0}},created:function(){this.iframeWidth=this.getFrameWidth(),this.iframeHeight=this.getFrameHeight()},methods:{getFrameWidth:function(){var t,e=window.innerWidth;return t=e>1200?960:e>992?800:e>768?640:e>576?480:.8*e,t},getFrameHeight:function(){return 9*this.iframeWidth/16}},mounted:function(){var t=this;window.onresize=function(){t.iframeWidth=t.getFrameWidth(),t.iframeHeight=t.getFrameHeight()}}},mt=ut,ft=Object(c["a"])(mt,lt,dt,!1,null,"5aaa51fc",null),ht=ft.exports,pt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"audio-engine"},[i("Header"),i("div",{staticClass:"pt-5"},[i("div",{staticClass:"container pt-5"},[i("h1",[t._v("Audio Engine")]),i("div",{staticClass:"mt-3 mx-auto"},[i("iframe",{attrs:{width:t.iframeWidth,height:t.iframeHeight,src:"https://www.youtube.com/embed/sgwAbKRbo5A",frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"true"}})]),t._m(0),t._m(1)])]),i("Footer")],1)},vt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mt-3 mx-auto"},[i("h1",{staticStyle:{"text-align":"left"}},[t._v("Overview")]),i("div",{staticClass:"container px-3",staticStyle:{"text-align":"left"}},[t._v(" ... ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mt-3 mx-auto"},[i("h1",{staticStyle:{"text-align":"left"}},[t._v("Details")]),i("div",{staticClass:"container px-3",staticStyle:{"text-align":"left"}},[i("p",[t._v("GitHub: "),i("a",{attrs:{href:""}},[t._v("...")])])])])}],gt={name:"AudioEngine",components:{Header:v["a"]},data:function(){return{iframeWidth:0,iframeHeight:0}},created:function(){this.iframeWidth=this.getFrameWidth(),this.iframeHeight=this.getFrameHeight()},methods:{getFrameWidth:function(){var t,e=window.innerWidth;return t=e>1200?960:e>992?800:e>768?640:e>576?480:.8*e,t},getFrameHeight:function(){return 9*this.iframeWidth/16}},mounted:function(){var t=this;window.onresize=function(){t.iframeWidth=t.getFrameWidth(),t.iframeHeight=t.getFrameHeight()}}},_t=gt,bt=Object(c["a"])(_t,pt,vt,!1,null,"2d49089a",null),xt=bt.exports,wt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"multiplayer"},[i("Header"),t._m(0),i("Footer")],1)},Ct=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pt-5"},[i("div",{staticClass:"container pt-5"},[i("h1",[t._v("Multiplayer")]),i("div",{staticClass:"mt-3 mx-auto"},[t._v(" ... ")]),i("div",{staticClass:"mt-3 mx-auto"},[i("h1",{staticStyle:{"text-align":"left"}},[t._v("Overview")]),i("div",{staticClass:"container px-3",staticStyle:{"text-align":"left"}},[t._v(" ... ")])]),i("div",{staticClass:"mt-3 mx-auto"},[i("h1",{staticStyle:{"text-align":"left"}},[t._v("Details")]),i("div",{staticClass:"container px-3",staticStyle:{"text-align":"left"}},[i("p",[t._v("GitHub: "),i("a",{attrs:{href:""}},[t._v("...")])])])])])])}],yt={name:"Multiplayer",components:{Header:v["a"]},data:function(){return{iframeWidth:0,iframeHeight:0}},created:function(){this.iframeWidth=this.getFrameWidth(),this.iframeHeight=this.getFrameHeight()},methods:{getFrameWidth:function(){var t,e=window.innerWidth;return t=e>1200?960:e>992?800:e>768?640:e>576?480:.8*e,t},getFrameHeight:function(){return 9*this.iframeWidth/16}},mounted:function(){var t=this;window.onresize=function(){t.iframeWidth=t.getFrameWidth(),t.iframeHeight=t.getFrameHeight()}}},Ht=yt,St=Object(c["a"])(Ht,wt,Ct,!1,null,"6e56ccfe",null),Wt=St.exports;a["default"].use(f["a"]);var jt=[{path:"/",name:"Home",component:X},{path:"/about",name:"About",component:function(){return i.e("about").then(i.bind(null,"f820"))}},{path:"/portfolio/engine",name:"Game Engine",component:q},{path:"/portfolio/space-invaders",name:"Space Invaders",component:it},{path:"/portfolio/dx-scene",name:"DX Scene",component:ct},{path:"/portfolio/platformer",name:"Simple Platformer",component:ht},{path:"/portfolio/audio-engine",name:"Audio Engine",component:xt},{path:"/portfolio/multiplayer",name:"Multiplayer",component:Wt}],Ft=new f["a"]({mode:"history",base:"/",routes:jt,scrollBehavior:function(t,e,i){return i||{x:0,y:0}}}),Et=Ft;a["default"].use(m.a),a["default"].config.productionTip=!1,new a["default"]({router:Et,render:function(t){return t(d)}}).$mount("#app")},"5ced":function(t,e,i){},"5f94":function(t,e,i){"use strict";var a=i("f3e3"),r=i.n(a);r.a},"85ec":function(t,e,i){},"93f1":function(t,e,i){t.exports=i.p+"img/engine.8908d589.jpg"},a6a4:function(t,e,i){"use strict";var a=i("c075"),r=i.n(a);r.a},b735:function(t,e,i){t.exports=i.p+"img/audio.4e62b91e.jpg"},bb6e:function(t,e,i){var a={"./audio.jpg":"b735","./avatar.jpg":"0ba3","./cs-brand.png":"da51","./default.jpg":"dc3a","./dx11.jpg":"2aa2","./engine.jpg":"93f1","./simple_platformer.jpg":"db6c","./space_invader.jpg":"c7f3"};function r(t){var e=n(t);return i(e)}function n(t){if(!i.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=n,t.exports=r,r.id="bb6e"},c075:function(t,e,i){},c7f3:function(t,e,i){t.exports=i.p+"img/space_invader.e03f572d.jpg"},cccb:function(t,e,i){"use strict";var a=i("5ced"),r=i.n(a);r.a},da51:function(t,e,i){t.exports=i.p+"img/cs-brand.f547ab38.png"},db6c:function(t,e,i){t.exports=i.p+"img/simple_platformer.af62c447.jpg"},dc3a:function(t,e,i){t.exports=i.p+"img/default.1cf41fdf.jpg"},f3e3:function(t,e,i){}});
//# sourceMappingURL=app.b1168d5d.js.map