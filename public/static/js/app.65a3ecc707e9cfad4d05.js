webpackJsonp([0],[,,,,function(t,e,n){function i(t){n(24)}var a=n(0)(n(17),n(38),i,null,null);t.exports=a.exports},,function(t,e,n){"use strict";var i=n(1),a=n(48),s=n(47),o=n(3),r=n.n(o),u=n(33),c=n.n(u),l=n(34),d=n.n(l),p=n(4),v=(n.n(p),n(37)),f=n.n(v);n(23),i.a.use(a.a),i.a.use(s.a),i.a.use(f.a),i.a.use(r.a),e.a=new a.a({routes:[{path:"/hello",name:"hello",component:c.a},{path:"/mdcdata",name:"mdcdata",component:d.a},{path:"/",name:"home",component:f.a}]})},function(t,e){},,,function(t,e,n){function i(t){n(27)}var a=n(0)(n(15),n(42),i,null,null);t.exports=a.exports},function(t,e){D.nav=[{name:"需求匹配",link:"hello",i:"&#xe608;"},{name:"任务管理",link:"hello",i:"&#xe607;"},{name:"财务管理",link:"hello",i:"&#xe60a;"},{name:"个人中心",link:"hello",i:"&#xe635;"},{name:"合作案例",link:"hello",i:"&#xe636;"},{name:"二级菜单",link:"",i:"&#xe636;",subnav:[{name:"碳氢化合物",link:"hello"},{name:"现货银锭",link:"mdcdata"},{name:"再生铜",link:"copper.html"}]}],D.user={is_login:!0,avatar:"http://otdna08z0.bkt.clouddn.com/avatar/597700302e13d.jpg?imageView2/1/w/75/h/75",nickname:"刘鸡鸡",available:"5352892.880000003"},D.banner=[{name:"",url:"http://otdna08z0.bkt.clouddn.com/default/20170721/5971c2c8c53ac.jpg?imageView2/1/w/800/h/380"},{name:"",url:"http://otdna08z0.bkt.clouddn.com/default/20170721/5971c302dbc4f.jpg?imageView2/1/w/800/h/380"},{name:"",url:"http://otdna08z0.bkt.clouddn.com/default/20170721/5971c324addad.png?imageView2/1/w/800/h/380"},{name:"",url:"http://otdna08z0.bkt.clouddn.com/default/20170721/5971c31a08e92.jpg?imageView2/1/w/800/h/380"}]},function(t,e){!function(){function t(t,n,i,a){var s=window,t=Number(t)||640,o=e.getBoundingClientRect().width;if(!a){var r=window.screen.orientation?window.screen.orientation.angle:0,u=s.orientation||r||0;90!=u&&-90!=u||(o*=l)}var c=100/(t/o),n=Number(n)||50,i=Number(i)||100;return c=c>=i?i:c,c=c<=n?n:c,e.style.fontSize!=c+"px"&&(e.style.fontSize=c+"px"),c}if(!-[1])return 0;var e=document.getElementsByTagName("html")[0],n=document.getElementsByTagName("script")[0],i=n.getAttribute("fu-psd"),a=n.getAttribute("fu-min"),s=n.getAttribute("fu-max"),o=n.getAttribute("fu-full"),r=window,u=document,c=(window.devicePixelRatio,r.screen),l=Math.min(c.width,c.height)/Math.max(c.width,c.height);r.FreeUi=r.FreeUi||{},FreeUi.Rem=t;var d=(t(i,a,s,o),setTimeout(function(){t(i,a,s,o)},300),navigator.userAgent),p=Boolean("orientation"in r)&&Boolean(d.match(/iPhone|iPod|Android|ios|iPad|Windows Phone/)),v=p?"orientationchange":"resize",f=p?300:100;p&&!o||r.addEventListener(v,function(){clearTimeout(e);var e=setTimeout(function(){t(i,a,s,o)},f)},!1),r.addEventListener("pageshow",function(){clearTimeout(e);var e=setTimeout(function(){t(i,a,s,o)},f)},!1),r.addEventListener("pagehide",function(){clearTimeout(e);var e=setTimeout(function(){t(i,a,s,o)},f)},!1),"complete"===u.readyState&&t(i,a,s,o),u.addEventListener("DOMContentLoaded",function(){t(i,a,s,o)},!1)}()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i="undefined"!=typeof window;i&&(window.Swiper=n(2)),e.default={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&i&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&i){delete t.options.notNextTick;var e=!1;for(var n in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(n)&&t.options[n]&&(e=!0,t.defaultSwiperClasses[n]=t.options[n]);var a=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(a):a()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(35),a=n.n(i),s=n(36),o=n.n(s);e.default={name:"app",data:function(){return{menuShow:!1}},components:{Mmenu:a.a,Mshade:o.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js Appppp",data:[],count:0,ing:!0}},created:function(){},methods:{getdata:function(){this.$http.get("/test").then(function(t){t.data.point>=80&&(this.data.push(t.data),this.count++)},function(t){console.log("连接超时")})},getdata2:function(){this.$http.post("/test3",{body:1231232131231}).then(function(t){console.log(t)},function(t){console.log("连接超时")})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},mounted:function(){},methods:{menushow:function(){VueApp.$children[0].menuShow=!VueApp.$children[0].menuShow}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"mdcdata",data:function(){return{msg:"Welcome to Your Vue.js Appppp",data:[],count:0,ing:!0}},created:function(){var t=this,e=setInterval(function(n){if(t.count>=20)return clearInterval(e),void(t.ing=!1);t.getdata()},4600)},methods:{getdata:function(){this.$http.get("/test").then(function(t){t.data.point>=80&&(this.data.push(t.data),this.count++)},function(t){console.log("连接超时")})},getdata2:function(){this.$http.post("/test3",{body:1231232131231}).then(function(t){console.log(t)},function(t){console.log("连接超时")})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{list:D.nav,user:D.user}},props:["menuShow"],beforeCreate:function(){for(var t=0;t<D.nav.length;t++)D.nav[t].showsub=!1},mounted:function(){},methods:{hideeverything:function(){VueApp.$children[0].menuShow=!1;for(var t=0;t<D.nav.length;t++)D.nav[t].showsub=!1},logout:function(){this.user.is_login=!1,this.hideeverything()}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},props:["menuShow"],mounted:function(){},methods:{hideeverything:function(){VueApp.$children[0].menuShow=!1;for(var t=0;t<D.nav.length;t++)D.nav[t].showsub=!1}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(4),a=n.n(i),s=n(3);n.n(s);e.default={name:"home",data:function(){return{banner:D.banner,notNextTick:!0,swiperOption:{autoplay:3e3,loop:!0,direction:"horizontal",grabCursor:!0,pagination:".swiper-pagination",paginationClickable:!0,observeParents:!0,onTransitionStart:function(t){}}}},created:function(){},components:{headTop:a.a},methods:{swiper:s.swiper,swiperSlide:s.swiperSlide}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(7),a=(n.n(i),n(12)),s=(n.n(a),n(11)),o=(n.n(s),n(1)),r=n(10),u=n.n(r),c=n(6),l=n(9),d=n.n(l),p=n(8);n.n(p);o.a.config.productionTip=!0;d.a.init({appId:"4RdFuGsl8DNtM0JIN6Lqzn3D-gzGzoHsz",appKey:"ftl7zrVsaKXIWmuJQMiOK4oO"});var v=d.a.Object.extend("TestObject"),f=new v;console.log(f),window.VueApp=new o.a({el:"#app",router:c.a,template:"<App/>",components:{App:u.a},created:function(){}})},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,function(t,e,n){var i=n(0)(n(13),n(43),null,null,null);t.exports=i.exports},function(t,e,n){var i=n(0)(n(14),n(44),null,null,null);t.exports=i.exports},function(t,e,n){function i(t){n(26)}var a=n(0)(n(16),n(41),i,"data-v-2e7268e9",null);t.exports=a.exports},function(t,e,n){function i(t){n(25)}var a=n(0)(n(18),n(39),i,"data-v-086301cd",null);t.exports=a.exports},function(t,e,n){function i(t){n(28)}var a=n(0)(n(19),n(45),i,null,null);t.exports=a.exports},function(t,e,n){var i=n(0)(n(20),n(40),null,null,null);t.exports=i.exports},function(t,e,n){function i(t){n(29)}var a=n(0)(n(21),n(46),i,"data-v-b7124002",null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-prinav s-linear"},[n("i",{staticClass:"i-back f-fl p-back",attrs:{onclick:"history.go(-1)"}},[t._v("")]),t._v(" "),n("div",{staticClass:"p-title f-txtof"},[t._v("淘媒体")]),t._v(" "),n("a",{staticClass:"p-more j-more g-mr27 f-fr s-basic_h1",on:{click:t.menushow}},[n("i",[t._v("")])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mdcdata"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.ing,expression:"ing"}]},[t._v("获取中。。。")]),t._v(" "),t._l(t.data,function(e,i){return t.data?n("div",[t._v("\n      "+t._s(e.name)+"    \n      分数："+t._s(e.point)+"    \n      地址："),n("a",{attrs:{href:e.url,target:"_blank"}},[t._v("点击查看")])]):t._e()})],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:{"z-show":t.menuShow},attrs:{id:"m-shade"},on:{click:t.hideeverything}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),n("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Core Docs")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("Forum")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://gitter.im/vuejs/vue",target:"_blank"}},[t._v("Gitter Chat")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),n("br"),t._v(" "),n("li",[n("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("Docs for This Template")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[t._v("vue-router")])]),t._v(" "),n("li",[n("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[t._v("vuex")])]),t._v(" "),n("li",[n("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[t._v("vue-loader")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("awesome-vue")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view"),t._v(" "),n("Mmenu",{attrs:{"menu-show":t.menuShow}}),t._v(" "),n("Mshade",{attrs:{"menu-show":t.menuShow}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.slideClass},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),n("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-menu j-menu s-linear",class:{"z-open":t.menuShow}},[n("div",{staticClass:"m-status g-pt40"},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.user.is_login,expression:"!user.is_login"}],staticClass:"p-child f-clear s-false"},[t._m(0),t._v(" "),t._m(1)]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.user.is_login,expression:"user.is_login"}],staticClass:"p-child f-clear s-true"},[n("div",{staticClass:"p-left"},[n("div",{staticClass:"p-head"},[n("img",{attrs:{src:t.user.avatar}})])]),t._v(" "),n("div",{staticClass:"p-right"},[n("div",{staticClass:"p-nick f-txtof"},[t._v(t._s(t.user.nickname))]),t._v(" "),n("div",{staticClass:"font f-txtof"},[t._v("\r\n                        可用余额："+t._s(t.user.available)+"\r\n                    ")]),t._v(" "),n("div",{staticClass:"u-btn j-logout",on:{click:t.logout}},[t._v("退出登录")])])])]),t._v(" "),n("ul",{staticClass:"m-bar g-mt40 s-bt1"},t._l(t.list,function(e,i){return n("li",{staticClass:"p-item",class:{"z-active":e.showsub},on:{click:function(t){e.showsub=!e.showsub}}},[e.subnav?t._e():[n("router-link",{staticClass:"p-link",attrs:{to:e.link},nativeOn:{click:function(e){t.hideeverything(e)}}},[n("i",{staticClass:"i-ico",domProps:{innerHTML:t._s(e.i)}}),t._v(t._s(e.name)+"\r\n                        "),n("i",{directives:[{name:"show",rawName:"v-show",value:e.subnav,expression:"items.subnav"}],staticClass:"i-right"},[t._v("")])])],t._v(" "),e.subnav?[n("router-link",{staticClass:"p-link",attrs:{to:e.link}},[n("i",{staticClass:"i-ico",domProps:{innerHTML:t._s(e.i)}}),t._v(t._s(e.name)+"\r\n                        "),n("i",{directives:[{name:"show",rawName:"v-show",value:e.subnav,expression:"items.subnav"}],staticClass:"i-right"},[t._v("")])])]:t._e(),t._v(" "),e.subnav?[n("ul",{staticClass:"m-barlist"},t._l(e.subnav,function(e,i){return n("li",{staticClass:"p-list_item"},[n("router-link",{attrs:{to:e.link},nativeOn:{click:function(e){t.hideeverything(e)}}},[t._v(t._s(e.name))])],1)}))]:t._e()],2)})),t._v(" "),t._m(2),t._v(" "),n("div",{staticClass:"m-fix_menufoot"})])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-left"},[n("div",{staticClass:"p-head"},[n("i",{staticClass:"i-user"},[t._v("")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-right"},[n("div",{staticClass:"p-nick"},[t._v("您还未登录")]),t._v(" "),n("div",{staticClass:"u-btn g-mr45"},[t._v("登录")]),t._v(" "),n("div",{staticClass:"u-btn j-reg_special"},[t._v("注册")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-footLink"},[n("a",{staticClass:"u-link",attrs:{href:"javascript:",onclick:"F['Hint']({ct:'敬请期待'})"}},[n("i",{staticClass:"i-ico s-f26"},[t._v("")]),t._v("\r\n                个人中心\r\n            ")]),t._v(" "),n("a",{staticClass:"u-link",attrs:{href:"javascript:;",onclick:"F['Hint']({ct:'敬请期待'})"}},[n("i",{staticClass:"i-ico s-f26"},[t._v("")]),t._v("\r\n                关于我们\r\n            ")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"g-layout g-dnav"},[n("head-top"),t._v(" "),n("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption,"not-next-tick":t.notNextTick}},[t._l(t.banner,function(t,e){return n("swiper-slide",{key:t.url},[n("img",{attrs:{src:t.url}})])}),t._v(" "),n("div",{staticClass:"swiper-pagination",slot:"pagination"})],2)],1)},staticRenderFns:[]}},,,,function(t,e){}],[22]);
//# sourceMappingURL=app.65a3ecc707e9cfad4d05.js.map