(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/dingdanpeisong/add-or-update"],{"0d35":function(n,e,a){},"1f5b":function(n,e,a){"use strict";a.r(e);var r=a("5d62"),t=a("9b45");for(var i in t)"default"!==i&&function(n){a.d(e,n,(function(){return t[n]}))}(i);a("d7a3");var o,u=a("f0c5"),s=Object(u["a"])(t["default"],r["b"],r["c"],!1,null,"3324c0ac",null,!1,r["a"],o);e["default"]=s.exports},3191:function(n,e,a){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=t(a("a34a"));function t(n){return n&&n.__esModule?n:{default:n}}function i(n,e,a,r,t,i,o){try{var u=n[i](o),s=u.value}catch(g){return void a(g)}u.done?e(s):Promise.resolve(s).then(r,t)}function o(n){return function(){var e=this,a=arguments;return new Promise((function(r,t){var o=n.apply(e,a);function u(n){i(o,r,t,u,s,"next",n)}function s(n){i(o,r,t,u,s,"throw",n)}u(void 0)}))}}var u=function(){Promise.all([a.e("common/vendor"),a.e("components/w-picker/w-picker")]).then(function(){return resolve(a("b26b"))}.bind(null,a)).catch(a.oe)},s={data:function(){return{cross:"",ruleForm:{dingdanbianhao:"",caipinmingcheng:"",tupian:"",shangjiazhanghao:"",shangjiamingcheng:"",jiage:"",shuliang:"",yonghuzhanghao:"",yonghuxingming:"",shoujihaoma:"",shouhuodizhi:"",peisongshijian:"",peisongzhuangtai:"配送中",peisongyuanzhanghao:"",peisonghaoma:"",userid:""},peisongzhuangtaiOptions:[],peisongzhuangtaiIndex:0,user:{},ro:{dingdanbianhao:!1,caipinmingcheng:!1,tupian:!1,shangjiazhanghao:!1,shangjiamingcheng:!1,jiage:!1,shuliang:!1,yonghuzhanghao:!1,yonghuxingming:!1,shoujihaoma:!1,shouhuodizhi:!1,peisongshijian:!1,peisongzhuangtai:!1,peisongyuanzhanghao:!1,peisonghaoma:!1,userid:!1}}},components:{wPicker:u},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(e){var a=this;return o(r.default.mark((function t(){var i,o,u,s;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a.ruleForm.peisongshijian=a.$utils.getCurDateTime(),i=n.getStorageSync("nowTable"),t.next=4,a.$api.session(i);case 4:if(o=t.sent,a.user=o.data,a.ruleForm.peisongyuanzhanghao=a.user.peisongyuanzhanghao,a.ro.peisongyuanzhanghao=!0,a.ruleForm.peisonghaoma=a.user.peisonghaoma,a.ro.peisonghaoma=!0,a.ro.peisongzhuangtai=!0,a.peisongzhuangtaiOptions="配送完成,配送中".split(","),a.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(a.ruleForm.refid=e.refid,a.ruleForm.nickname=n.getStorageSync("nickname")),!e.id){t.next=20;break}return a.ruleForm.id=e.id,t.next=18,a.$api.info("dingdanpeisong",a.ruleForm.id);case 18:o=t.sent,a.ruleForm=o.data;case 20:if(a.cross=e.cross,!e.cross){t.next=92;break}u=n.getStorageSync("crossObj"),t.t0=r.default.keys(u);case 24:if((t.t1=t.t0()).done){t.next=92;break}if(s=t.t1.value,"dingdanbianhao"!=s){t.next=30;break}return a.ruleForm.dingdanbianhao=u[s],a.ro.dingdanbianhao=!0,t.abrupt("continue",24);case 30:if("caipinmingcheng"!=s){t.next=34;break}return a.ruleForm.caipinmingcheng=u[s],a.ro.caipinmingcheng=!0,t.abrupt("continue",24);case 34:if("tupian"!=s){t.next=38;break}return a.ruleForm.tupian=u[s],a.ro.tupian=!0,t.abrupt("continue",24);case 38:if("shangjiazhanghao"!=s){t.next=42;break}return a.ruleForm.shangjiazhanghao=u[s],a.ro.shangjiazhanghao=!0,t.abrupt("continue",24);case 42:if("shangjiamingcheng"!=s){t.next=46;break}return a.ruleForm.shangjiamingcheng=u[s],a.ro.shangjiamingcheng=!0,t.abrupt("continue",24);case 46:if("jiage"!=s){t.next=50;break}return a.ruleForm.jiage=u[s],a.ro.jiage=!0,t.abrupt("continue",24);case 50:if("shuliang"!=s){t.next=54;break}return a.ruleForm.shuliang=u[s],a.ro.shuliang=!0,t.abrupt("continue",24);case 54:if("yonghuzhanghao"!=s){t.next=58;break}return a.ruleForm.yonghuzhanghao=u[s],a.ro.yonghuzhanghao=!0,t.abrupt("continue",24);case 58:if("yonghuxingming"!=s){t.next=62;break}return a.ruleForm.yonghuxingming=u[s],a.ro.yonghuxingming=!0,t.abrupt("continue",24);case 62:if("shoujihaoma"!=s){t.next=66;break}return a.ruleForm.shoujihaoma=u[s],a.ro.shoujihaoma=!0,t.abrupt("continue",24);case 66:if("shouhuodizhi"!=s){t.next=70;break}return a.ruleForm.shouhuodizhi=u[s],a.ro.shouhuodizhi=!0,t.abrupt("continue",24);case 70:if("peisongshijian"!=s){t.next=74;break}return a.ruleForm.peisongshijian=u[s],a.ro.peisongshijian=!0,t.abrupt("continue",24);case 74:if("peisongzhuangtai"!=s){t.next=78;break}return a.ruleForm.peisongzhuangtai=u[s],a.ro.peisongzhuangtai=!0,t.abrupt("continue",24);case 78:if("peisongyuanzhanghao"!=s){t.next=82;break}return a.ruleForm.peisongyuanzhanghao=u[s],a.ro.peisongyuanzhanghao=!0,t.abrupt("continue",24);case 82:if("peisonghaoma"!=s){t.next=86;break}return a.ruleForm.peisonghaoma=u[s],a.ro.peisonghaoma=!0,t.abrupt("continue",24);case 86:if("userid"!=s){t.next=90;break}return a.ruleForm.userid=u[s],a.ro.userid=!0,t.abrupt("continue",24);case 90:t.next=24;break;case 92:a.styleChange();case 93:case"end":return t.stop()}}),t)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},peisongshijianConfirm:function(n){console.log(n),this.ruleForm.peisongshijian=n.result,this.$forceUpdate()},peisongzhuangtaiChange:function(n){this.peisongzhuangtaiIndex=n.target.value,this.ruleForm.peisongzhuangtai=this.peisongzhuangtaiOptions[this.peisongzhuangtaiIndex]},tupianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.tupian="upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return o(r.default.mark((function a(){var t,i,o,u,s,g,c,h,l,p;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!e.ruleForm.jiage||e.$validate.isNumber(e.ruleForm.jiage)){a.next=3;break}return e.$utils.msg("价格应输入数字"),a.abrupt("return");case 3:if(!e.ruleForm.shuliang||e.$validate.isIntNumer(e.ruleForm.shuliang)){a.next=6;break}return e.$utils.msg("数量应输入整数"),a.abrupt("return");case 6:if(e.ruleForm.peisongzhuangtai){a.next=9;break}return e.$utils.msg("配送状态不能为空"),a.abrupt("return");case 9:if(!e.cross){a.next=25;break}if(u=n.getStorageSync("statusColumnName"),s=n.getStorageSync("statusColumnValue"),""==u){a.next=25;break}if(g=n.getStorageSync("crossObj"),u.startsWith("[")){a.next=21;break}for(c in g)c==u&&(g[c]=s);return h=n.getStorageSync("crossTable"),a.next=19,e.$api.update("".concat(h),g);case 19:a.next=25;break;case 21:t=Number(n.getStorageSync("userid")),i=g["id"],o=n.getStorageSync("statusColumnName"),o=o.replace(/\[/,"").replace(/\]/,"");case 25:if(!i||!t){a.next=47;break}return e.ruleForm.crossuserid=t,e.ruleForm.crossrefid=i,l={page:1,limit:10,crossuserid:t,crossrefid:i},a.next=31,e.$api.list("dingdanpeisong",l);case 31:if(p=a.sent,!(p.data.total>=o)){a.next=37;break}return e.$utils.msg(n.getStorageSync("tips")),a.abrupt("return",!1);case 37:if(!e.ruleForm.id){a.next=42;break}return a.next=40,e.$api.update("dingdanpeisong",e.ruleForm);case 40:a.next=44;break;case 42:return a.next=44,e.$api.add("dingdanpeisong",e.ruleForm);case 44:e.$utils.msgBack("提交成功");case 45:a.next=55;break;case 47:if(!e.ruleForm.id){a.next=52;break}return a.next=50,e.$api.update("dingdanpeisong",e.ruleForm);case 50:a.next=54;break;case 52:return a.next=54,e.$api.add("dingdanpeisong",e.ruleForm);case 54:e.$utils.msgBack("提交成功");case 55:case"end":return a.stop()}}),a)})))()},optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,a=e.getFullYear(),r=e.getMonth()+1,t=e.getDate();return"start"===n?a-=60:"end"===n&&(a+=2),r=r>9?r:"0"+r,t=t>9?t:"0"+t,"".concat(a,"-").concat(r,"-").concat(t)},toggleTab:function(n){this.$refs[n].show()}}};e.default=s}).call(this,a("543d")["default"])},"5d62":function(n,e,a){"use strict";a.d(e,"b",(function(){return t})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return r}));var r={wPicker:function(){return Promise.all([a.e("common/vendor"),a.e("components/w-picker/w-picker")]).then(a.bind(null,"b26b"))}},t=function(){var n=this,e=n.$createElement;n._self._c},i=[]},"9b45":function(n,e,a){"use strict";a.r(e);var r=a("3191"),t=a.n(r);for(var i in r)"default"!==i&&function(n){a.d(e,n,(function(){return r[n]}))}(i);e["default"]=t.a},b9ea:function(n,e,a){"use strict";(function(n){a("e25f");r(a("66fd"));var e=r(a("1f5b"));function r(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,a("543d")["createPage"])},d7a3:function(n,e,a){"use strict";var r=a("0d35"),t=a.n(r);t.a}},[["b9ea","common/runtime","common/vendor"]]]);