(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{4577:function(t,e,n){},"45a6":function(t,e,n){"use strict";var r=n("c0bd"),o=n.n(r);o.a},"82cf":function(t,e,n){"use strict";n.r(e);var r=n("d178"),o=n("c2f9");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("fc03"),n("45a6");var i,u=n("f0c5"),s=Object(u["a"])(o["default"],r["b"],r["c"],!1,null,"2d389556",null,!1,r["a"],i);e["default"]=s.exports},bf82:function(t,e,n){"use strict";(function(t){n("e25f");r(n("66fd"));var e=r(n("82cf"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},c0bd:function(t,e,n){},c2f9:function(t,e,n){"use strict";n.r(e);var r=n("c62c"),o=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=o.a},c62c:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("a34a")),o=a(n("a6e9"));function a(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n,r,o,a,i){try{var u=t[a](i),s=u.value}catch(c){return void n(c)}u.done?e(s):Promise.resolve(s).then(r,o)}function u(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function u(t){i(a,r,o,u,s,"next",t)}function s(t){i(a,r,o,u,s,"throw",t)}u(void 0)}))}}var s={data:function(){return{username:"",password:"",codes:[{num:1,color:"#000",rotate:"10deg",size:"16px"},{num:2,color:"#000",rotate:"10deg",size:"16px"},{num:3,color:"#000",rotate:"10deg",size:"16px"},{num:4,color:"#000",rotate:"10deg",size:"16px"}],options:["请选择登录用户类型"],optionsValues:["","yonghu","peisongyuan"],index:0,roleNum:0}},onLoad:function(){var t=["请选择登录用户类型"],e=o.default.list();this.menuList=e;for(var n=0;n<this.menuList.length;n++)"是"==this.menuList[n].hasFrontLogin&&(t.push(this.menuList[n].roleName),this.roleNum++);1==this.roleNum&&(this.index=1),this.options=t,this.styleChange()},methods:{styleChange:function(){this.$nextTick((function(){}))},onRegisterTap:function(e){t.setStorageSync("loginTable",e),this.$utils.jump("../register/register")},onForgetTap:function(){this.$utils.jump("../forget/forget")},onLoginTap:function(){var e=this;return u(r.default.mark((function n(){var o;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.username){n.next=3;break}return e.$utils.msg("请输入用户名"),n.abrupt("return");case 3:if(e.password){n.next=6;break}return e.$utils.msg("请输入用户密码"),n.abrupt("return");case 6:if(e.optionsValues[e.index]){n.next=9;break}return e.$utils.msg("请选择登陆用户类型"),n.abrupt("return");case 9:return n.next=11,e.$api.login("".concat(e.optionsValues[e.index]),{username:e.username,password:e.password});case 11:return o=n.sent,t.removeStorageSync("useridTag"),t.setStorageSync("token",o.token),t.setStorageSync("nickname",e.username),t.setStorageSync("nowTable","".concat(e.optionsValues[e.index])),n.next=18,e.$api.session("".concat(e.optionsValues[e.index]));case 18:o=n.sent,t.setStorageSync("userid",o.data.id),o.data.vip&&t.setStorageSync("vip",o.data.vip),t.setStorageSync("role","".concat(e.options[e.index])),e.$utils.tab("../index/index");case 23:case"end":return n.stop()}}),n)})))()},optionsChange:function(t){this.index=t.target.value}}};e.default=s}).call(this,n("543d")["default"])},d178:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}));var o=function(){var t=this,e=t.$createElement;t._self._c},a=[]},fc03:function(t,e,n){"use strict";var r=n("4577"),o=n.n(r);o.a}},[["bf82","common/runtime","common/vendor"]]]);