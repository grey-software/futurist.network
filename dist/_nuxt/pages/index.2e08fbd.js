(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{271:function(t,e,n){"use strict";n.r(e);var r=n(272),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=o.a},272:function(t,e){},273:function(t,e,n){var content=n(284);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("12f27b74",content,!0,{sourceMap:!1})},274:function(t,e,n){var content=n(287);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("a8faeb88",content,!0,{sourceMap:!1})},275:function(t,e,n){var content=n(289);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("27fb0828",content,!0,{sourceMap:!1})},276:function(t,e,n){var content=n(291);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("47faebb3",content,!0,{sourceMap:!1})},277:function(t,e,n){var content=n(293);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("4d7f288d",content,!0,{sourceMap:!1})},278:function(t,e,n){"use strict";n.r(e);n(288);var r=n(57),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card neu-dark",staticStyle:{width:"16rem",height:"26rem"}},[e("div",{staticClass:"card-inner"},[e("div",{staticClass:"circle"}),this._v(" "),e("div",{staticClass:"card-body"},[e("p",{staticClass:"card-text"},[this._v("Design")]),this._v(" "),e("h5",{staticClass:"card-title"},[this._v("Nina Ricci")]),this._v(" "),e("b-row",{staticClass:"icon"},[e("b-col",[e("fa-icon",{staticClass:"fa-lg",attrs:{icon:["fas","envelope"]}})],1),this._v(" "),e("b-col",[e("fa-icon",{staticClass:"fa-lg",attrs:{icon:["fab","discord"]}})],1),this._v(" "),e("b-col",[e("fa-icon",{staticClass:"fa-lg",attrs:{icon:["fab","linkedin"]}})],1)],1)],1)])])}),[],!1,null,"04deaf6c",null);e.default=component.exports},279:function(t,e,n){"use strict";n.r(e);var r=n(303),o=n(271);for(var c in o)"default"!==c&&function(t){n.d(e,t,(function(){return o[t]}))}(c);n(283);var l=n(57),component=Object(l.a)(o.default,r.a,r.b,!1,null,"33f366b8",null);e.default=component.exports},280:function(t,e,n){"use strict";n.r(e);var r={components:{TeamCard:n(278).default}},o=n(57),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"carousel slide carousel-multi-item",attrs:{id:"multi-item-example","data-ride":"carousel"}},[e("div",{staticClass:"controls-top"},[e("a",{staticClass:"btn-floating",attrs:{href:"#multi-item-example","data-slide":"prev"}},[e("fa-icon",{attrs:{icon:["fas","chevron-right"]}})],1),this._v(" "),this._m(0)]),this._v(" "),this._m(1),this._v(" "),e("div",{staticClass:"carousel-inner",attrs:{role:"listbox"}},[e("div",{staticClass:"carousel-item active"},[e("div",{staticClass:"col-md-3",staticStyle:{float:"left"}},[e("TeamCard")],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"btn-floating",attrs:{href:"#multi-item-example","data-slide":"next"}},[e("i",{staticClass:"fas fa-chevron-right"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{staticClass:"carousel-indicators"},[e("li",{staticClass:"active",attrs:{"data-target":"#multi-item-example","data-slide-to":"0"}}),this._v(" "),e("li",{attrs:{"data-target":"#multi-item-example","data-slide-to":"1"}})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{TeamCard:n(278).default})},281:function(t,e,n){"use strict";n.r(e);var r={props:{project:{name:String,desc:String,link:String,email:String,discord:String,image:{url:String}}},methods:{copyToClipboard:function(t){var e=document.createElement("textarea");e.value=t,e.setAttribute("readonly",""),e.style.position="absolute",e.style.left="-9999px",document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}},computed:{imageUrl:function(){return"http://159.89.124.15".concat(this.project.image.url)}}},o=(n(290),n(57)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card",{staticClass:"project-card mb-2",staticStyle:{"max-width":"20rem"},attrs:{title:t.project.title,"img-src":t.imageUrl,"img-alt":t.project.title+" Image","img-top":""}},[n("b-card-text",[t._v(t._s(t.project.desc))]),t._v(" "),n("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"icon-button rounded-circle",attrs:{title:t.project.discord},on:{click:function(e){return t.copyToClipboard(t.project.discord)}}},[n("fa-icon",{attrs:{icon:["fab","discord"]}})],1)],1)}),[],!1,null,"31ffa24e",null);e.default=component.exports},282:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"heading"},[e("h1",{staticClass:"title"},[this._v("What We "),e("span",{staticStyle:{color:"crimson"}},[this._v("Do?")])]),this._v(" "),e("p",{staticClass:"sub-title"},[this._v("\n        The Futurist foundation is an organization working to guide the future in a net positive direction by allowing the public to propose,\n        fund, and work on the themes and technologies of the future.\n      ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-box"},[e("h5",{staticClass:"sub-heading"},[this._v("Innovate")]),this._v(" "),e("p",{staticClass:"sub-heading-text"},[this._v("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-box"},[e("h5",{staticClass:"sub-heading"},[this._v("Inspire")]),this._v(" "),e("p",{staticClass:"sub-heading-text"},[this._v("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-box"},[e("h5",{staticClass:"sub-heading"},[this._v("Teaching")]),this._v(" "),e("p",{staticClass:"sub-heading-text"},[this._v("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col"},[e("img",{attrs:{src:n(285)}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{staticClass:"title",staticStyle:{"text-align":"left"}},[this._v(" Tech of "),e("br"),this._v("the "),e("span",{staticStyle:{color:"#2bacf9"}},[this._v("Future.")])])}],o=(n(286),n(57)),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("hr"),t._v(" "),n("div",{staticClass:"about"},[t._m(0),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"row row-cols-3"},[n("div",{staticClass:"col"},[n("div",{staticClass:"icon",staticStyle:{color:"#6f75ff"}},[n("span",{staticClass:"fa-stack fa-2x"},[n("fa-icon",{staticClass:"fa-stack-2x fa-lg",staticStyle:{color:"#6f75ff"},attrs:{icon:["fas","user-friends"]}}),t._v(" "),n("div",{staticClass:"circle fa-stack-2x"})],1)]),t._v(" "),t._m(1)]),t._v(" "),n("div",{staticClass:"col"},[n("div",{staticClass:"icon",staticStyle:{color:"#6fffa6"}},[n("span",{staticClass:"fa-stack fa-2x"},[n("fa-icon",{staticClass:"fa-stack-2x fa-lg",staticStyle:{color:"#6fffa6"},attrs:{icon:["fas","dollar-sign"]}}),t._v(" "),n("div",{staticClass:"circle fa-stack-2x"})],1)]),t._v(" "),t._m(2)]),t._v(" "),n("div",{staticClass:"col"},[n("div",{staticClass:"icon",staticStyle:{color:"#fab74a"}},[n("span",{staticClass:"fa-stack fa-2x"},[n("fa-icon",{staticClass:"fa-stack-2x fa-lg",staticStyle:{color:"#fab74a"},attrs:{icon:["fas","chalkboard-teacher"]}}),t._v(" "),n("div",{staticClass:"circle fa-stack-2x"})],1)]),t._v(" "),t._m(3)])])])]),t._v(" "),n("div",{staticClass:"about"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row row-cols-2"},[t._m(4),t._v(" "),n("div",{staticClass:"col"},[t._m(5),t._v(" "),n("p",{staticClass:"desc"},[t._v("\n            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor. Foinshgt instajfe nonumy eirmod tempor.\n          ")]),t._v(" "),n("div",{staticClass:"sub-box",staticStyle:{"text-align":"left"}},[n("div",{staticClass:"row row-cols-2"},[n("div",{staticClass:"col"},[n("fa-icon",{staticClass:"fa-3x",staticStyle:{color:"#6f75ff"},attrs:{icon:["fas","globe"]}}),t._v(" "),n("h5",{staticClass:"title"},[t._v("Crowdsourcing")]),t._v(" "),n("p",{staticClass:"desc"},[t._v("\n                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor. Foinshgt instajfe nonumy eirmod tempor.\n                ")])],1),t._v(" "),n("div",{staticClass:"col"},[n("fa-icon",{staticClass:"fa-3x",staticStyle:{color:"#6fffa6"},attrs:{icon:["fas","users"]}}),t._v(" "),n("h5",{staticClass:"title"},[t._v("Futurist Community")]),t._v(" "),n("p",{staticClass:"desc"},[t._v("\n                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor. Foinshgt instajfe nonumy eirmod tempor.\n                ")])],1)])])])])])])])}),r,!1,null,null,null);e.default=component.exports},283:function(t,e,n){"use strict";var r=n(273);n.n(r).a},284:function(t,e,n){(e=n(49)(!1)).push([t.i,'.g-landing[data-v-33f366b8]{margin:0 120px}.text-rainbow[data-v-33f366b8]{color:red;background-image:-webkit-linear-gradient(92deg,red,#ff0);-webkit-background-clip:text;-webkit-text-fill-color:transparent;-webkit-animation:hue-data-v-33f366b8 10s linear infinite}@-webkit-keyframes hue-data-v-33f366b8{0%{-webkit-filter:hue-rotate(0deg)}to{-webkit-filter:hue-rotate(-1turn)}}.g-hero[data-v-33f366b8]{text-align:center;padding:80px 40px}.g-hero-heading[data-v-33f366b8]{font-weight:800;font-family:var(--font-heading);color:#fff;letter-spacing:-.025em;font-size:calc(12px + 5vw);line-height:1.05;z-index:1000;padding:0 0 80px}.g-hero-tag[data-v-33f366b8]{font-size:18px;color:#789;letter-spacing:-.032em;line-height:1.5;padding:0 0 40px;text-align:center}.btn[data-v-33f366b8]{z-index:1;padding:8px 50px;border-radius:30px;cursor:pointer;font-size:1em;letter-spacing:2px;transition:.3s ease;font-weight:700;border:none;color:#fff}.btn[data-v-33f366b8] :hover{text-decoration:none}.neumorphism-3[data-v-33f366b8]{border-radius:30px;display:flex;justify-content:center;align-items:center;height:55px;width:200px;box-shadow:10px 10px 20px rgba(0,0,0,.8),-6px -6px 10px hsla(0,0%,100%,.1);position:relative}.neumorphism-3[data-v-33f366b8]:after{content:"";border-radius:30px;position:absolute;height:75%;width:95%;background-color:transparent;box-shadow:inset 5px 5px 10px rgba(0,0,0,.8),inset -5px -5px 10px hsla(0,0%,100%,.1)}.more-indicator[data-v-33f366b8]{text-align:center;font-size:14px;padding:40px;opacity:0;color:#fff;font-weight:700}.mt[data-v-33f366b8]{margin-top:20px}.animation-more[data-v-33f366b8]{-webkit-animation-name:drive-data-v-33f366b8;animation-name:drive-data-v-33f366b8;-webkit-animation-duration:3s;animation-duration:3s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-delay:.5s;animation-delay:.5s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}@-webkit-keyframes drive-data-v-33f366b8{0%{transform:translateY(0);opacity:0}to{transform:translateY(15px);opacity:1}}@keyframes drive-data-v-33f366b8{0%{transform:translateY(0);opacity:0}to{transform:translateY(15px);opacity:1}}',""]),t.exports=e},285:function(t,e,n){t.exports=n.p+"img/world-map.a0c92ea.png"},286:function(t,e,n){"use strict";var r=n(274);n.n(r).a},287:function(t,e,n){(e=n(49)(!1)).push([t.i,".about{color:#fff;margin:0 120px;padding:40px 0;text-align:center}hr{background-color:#fa8a01;height:5px;border:0;width:150px}.heading{padding:0 0 120px}.title{font-weight:700;font-family:var(--font-heading);color:var(--color-text-dark);letter-spacing:-.025em;font-size:70px;z-index:1000;padding:0 0 20px}.sub-title{margin:0 120px;padding-bottom:40px;color:#789}.circle{border:5px solid;height:300px;width:310px;border-radius:50%;-moz-border-radius:50%;-webkit-border-radius:50%;transform:translate(-100px) scale(.8)}.sub-heading{font-weight:700;font-size:26px}.desc,.sub-heading-text{color:#789}.desc{text-align:left;font-size:13px}.sub-box{padding:40px 0}.sub-box .title{font-size:20px;font-weight:600;padding:20px 0 0}.sub-box .desc{padding:0}.col img{height:600px;width:700px;text-align:left;transform:translate(-120px,-80px)}.text-box{padding:120px 0}",""]),t.exports=e},288:function(t,e,n){"use strict";var r=n(275);n.n(r).a},289:function(t,e,n){(e=n(49)(!1)).push([t.i,".card[data-v-04deaf6c]{margin:20px 120px;color:#fff;border-radius:5%}.neu-dark[data-v-04deaf6c]{box-shadow:10px 10px 20px rgba(0,0,0,.9),-10px -10px 22px hsla(0,0%,100%,.1)}.card-body[data-v-04deaf6c]{text-align:center;margin:20px;transform:translateY(-60px)}.card-title[data-v-04deaf6c]{font-weight:700;font-size:25px;margin:0;padding:10px 0 30px}.card-text[data-v-04deaf6c]{color:#789;font-size:16px;margin:0}.circle[data-v-04deaf6c]{border:5px solid;height:250px;width:250px;border-radius:50%;-moz-border-radius:50%;-webkit-border-radius:50%;transform:scale(.6)}.icon[data-v-04deaf6c]{padding:0}",""]),t.exports=e},290:function(t,e,n){"use strict";var r=n(276);n.n(r).a},291:function(t,e,n){(e=n(49)(!1)).push([t.i,".icon-button[data-v-31ffa24e]{width:48px;height:48px;padding:8px}.project-card[data-v-31ffa24e]{color:grey}",""]),t.exports=e},292:function(t,e,n){"use strict";var r=n(277);n.n(r).a},293:function(t,e,n){(e=n(49)(!1)).push([t.i,"*[data-v-8e44aec4]{background-color:#050c17}",""]),t.exports=e},303:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"g-landing"},[n("div",{staticClass:"g-hero"},[n("p",{staticClass:"g-hero-tag"},[t._v("Propose, Fund, & Work.")]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:" btn"},[n("b-link",{staticClass:"neumorphism-3",attrs:{href:"#"}},[n("a",{staticStyle:{color:"white"}},[t._v("Join Now")])])],1),t._v(" "),n("div",{staticClass:"more-indicator animation-more mt"},[n("p",[t._v("MORE")]),t._v(" "),n("fa-icon",{attrs:{icon:["fas","angle-double-down"]}})],1)])])},o=[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{staticClass:"g-hero-heading"},[this._v("\n      Crowdsourcing\n      "),e("br"),this._v("the "),e("span",{staticClass:"text-rainbow"},[this._v("Future.")])])}]},305:function(t,e,n){"use strict";n.r(e);var r=n(279),o=n(282),c=n(278),l=n(280),d=(n(281),n(100)),f=n.n(d);function m(){var t,e,data=(t=["\n        query Projects {\n          projects {\n            title,\n            desc,\n            image {\n              url\n            },\n            link,\n            discord\n          }\n        }\n      "],e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}})));return m=function(){return data},data}var v={layout:"futurist",components:{FuturistHero:r.default,FuturistAbout:o.default,TeamCard:c.default,FuturistTeam:l.default},data:function(){return{slide:0,sliding:null}},methods:{onSlideStart:function(t){this.sliding=!0},onSlideEnd:function(t){this.sliding=!1}},apollo:{projects:{query:f()(m())}}},h=(n(292),n(57)),component=Object(h.a)(v,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pb-5"},[e("section",{staticClass:"f-section",attrs:{id:"f-hero"}},[e("futurist-hero"),this._v(" "),e("FuturistAbout"),this._v(" "),e("FuturistTeam")],1),this._v(" "),e("section",{staticClass:"f-section",attrs:{id:"f-projects"}},[this.projects?e("div",{staticClass:"flex row flex-wrap"},this._l(this.projects,(function(t){return e("div",{key:t.title},[e("project-card",{attrs:{project:t}})],1)})),0):this._e()])])}),[],!1,null,"8e44aec4",null);e.default=component.exports;installComponents(component,{FuturistHero:n(279).default,FuturistAbout:n(282).default,FuturistTeam:n(280).default,ProjectCard:n(281).default})}}]);