(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/dingdanxinxi/add-or-update"],{"0552":function(n,e,a){"use strict";var r=a("9ae2"),i=a.n(r);i.a},"183b":function(n,e,a){"use strict";a.r(e);var r=a("6d38"),i=a.n(r);for(var t in r)"default"!==t&&function(n){a.d(e,n,(function(){return r[n]}))}(t);e["default"]=i.a},"6d38":function(n,e,a){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(a("a34a"));function i(n){return n&&n.__esModule?n:{default:n}}function t(n,e,a,r,i,t,u){try{var o=n[t](u),s=o.value}catch(c){return void a(c)}o.done?e(s):Promise.resolve(s).then(r,i)}function u(n){return function(){var e=this,a=arguments;return new Promise((function(r,i){var u=n.apply(e,a);function o(n){t(u,r,i,o,s,"next",n)}function s(n){t(u,r,i,o,s,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([a.e("common/vendor"),a.e("components/w-picker/w-picker")]).then(function(){return resolve(a("b26b"))}.bind(null,a)).catch(a.oe)},s={data:function(){return{cross:"",ruleForm:{dingdanbianhao:this.getUUID(),caipinmingcheng:"",tupian:"",shangjiazhanghao:"",shangjiamingcheng:"",shangjiadizhi:"",jiage:"",shuliang:"",zongjine:"",xiadanshijian:"",dingdanzhuangtai:"未配送",beizhu:"",yonghuzhanghao:"",yonghuxingming:"",shoujihaoma:"",shouhuodizhi:"",ispay:"",userid:""},dingdanzhuangtaiOptions:[],dingdanzhuangtaiIndex:0,user:{},ro:{dingdanbianhao:!1,caipinmingcheng:!1,tupian:!1,shangjiazhanghao:!1,shangjiamingcheng:!1,shangjiadizhi:!1,jiage:!1,shuliang:!1,zongjine:!1,xiadanshijian:!1,dingdanzhuangtai:!1,beizhu:!1,yonghuzhanghao:!1,yonghuxingming:!1,shoujihaoma:!1,shouhuodizhi:!1,ispay:!1,userid:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url},zongjine:{get:function(){return 1*this.ruleForm.jiage*this.ruleForm.shuliang}}},onLoad:function(e){var a=this;return u(r.default.mark((function i(){var t,u,o,s;return r.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return a.ruleForm.xiadanshijian=a.$utils.getCurDateTime(),t=n.getStorageSync("nowTable"),i.next=4,a.$api.session(t);case 4:if(u=i.sent,a.user=u.data,a.ruleForm.yonghuzhanghao=a.user.yonghuzhanghao,a.ro.yonghuzhanghao=!0,a.ruleForm.yonghuxingming=a.user.yonghuxingming,a.ro.yonghuxingming=!0,a.ruleForm.shoujihaoma=a.user.shoujihaoma,a.ro.shoujihaoma=!0,a.ro.dingdanzhuangtai=!0,a.dingdanzhuangtaiOptions="已配送,未配送".split(","),a.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(a.ruleForm.refid=e.refid,a.ruleForm.nickname=n.getStorageSync("nickname")),!e.id){i.next=22;break}return a.ruleForm.id=e.id,i.next=20,a.$api.info("dingdanxinxi",a.ruleForm.id);case 20:u=i.sent,a.ruleForm=u.data;case 22:if(a.cross=e.cross,!e.cross){i.next=100;break}o=n.getStorageSync("crossObj"),i.t0=r.default.keys(o);case 26:if((i.t1=i.t0()).done){i.next=98;break}if(s=i.t1.value,"dingdanbianhao"!=s){i.next=32;break}return a.ruleForm.dingdanbianhao=o[s],a.ro.dingdanbianhao=!0,i.abrupt("continue",26);case 32:if("caipinmingcheng"!=s){i.next=36;break}return a.ruleForm.caipinmingcheng=o[s],a.ro.caipinmingcheng=!0,i.abrupt("continue",26);case 36:if("tupian"!=s){i.next=40;break}return a.ruleForm.tupian=o[s],a.ro.tupian=!0,i.abrupt("continue",26);case 40:if("shangjiazhanghao"!=s){i.next=44;break}return a.ruleForm.shangjiazhanghao=o[s],a.ro.shangjiazhanghao=!0,i.abrupt("continue",26);case 44:if("shangjiamingcheng"!=s){i.next=48;break}return a.ruleForm.shangjiamingcheng=o[s],a.ro.shangjiamingcheng=!0,i.abrupt("continue",26);case 48:if("shangjiadizhi"!=s){i.next=52;break}return a.ruleForm.shangjiadizhi=o[s],a.ro.shangjiadizhi=!0,i.abrupt("continue",26);case 52:if("jiage"!=s){i.next=56;break}return a.ruleForm.jiage=o[s],a.ro.jiage=!0,i.abrupt("continue",26);case 56:if("shuliang"!=s){i.next=60;break}return a.ruleForm.shuliang=o[s],a.ro.shuliang=!0,i.abrupt("continue",26);case 60:if("zongjine"!=s){i.next=64;break}return a.ruleForm.zongjine=o[s],a.ro.zongjine=!0,i.abrupt("continue",26);case 64:if("xiadanshijian"!=s){i.next=68;break}return a.ruleForm.xiadanshijian=o[s],a.ro.xiadanshijian=!0,i.abrupt("continue",26);case 68:if("dingdanzhuangtai"!=s){i.next=72;break}return a.ruleForm.dingdanzhuangtai=o[s],a.ro.dingdanzhuangtai=!0,i.abrupt("continue",26);case 72:if("beizhu"!=s){i.next=76;break}return a.ruleForm.beizhu=o[s],a.ro.beizhu=!0,i.abrupt("continue",26);case 76:if("yonghuzhanghao"!=s){i.next=80;break}return a.ruleForm.yonghuzhanghao=o[s],a.ro.yonghuzhanghao=!0,i.abrupt("continue",26);case 80:if("yonghuxingming"!=s){i.next=84;break}return a.ruleForm.yonghuxingming=o[s],a.ro.yonghuxingming=!0,i.abrupt("continue",26);case 84:if("shoujihaoma"!=s){i.next=88;break}return a.ruleForm.shoujihaoma=o[s],a.ro.shoujihaoma=!0,i.abrupt("continue",26);case 88:if("shouhuodizhi"!=s){i.next=92;break}return a.ruleForm.shouhuodizhi=o[s],a.ro.shouhuodizhi=!0,i.abrupt("continue",26);case 92:if("userid"!=s){i.next=96;break}return a.ruleForm.userid=o[s],a.ro.userid=!0,i.abrupt("continue",26);case 96:i.next=26;break;case 98:a.ruleForm.shuliang=0,a.ro.shuliang=!1;case 100:a.styleChange();case 101:case"end":return i.stop()}}),i)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},xiadanshijianConfirm:function(n){console.log(n),this.ruleForm.xiadanshijian=n.result,this.$forceUpdate()},dingdanzhuangtaiChange:function(n){this.dingdanzhuangtaiIndex=n.target.value,this.ruleForm.dingdanzhuangtai=this.dingdanzhuangtaiOptions[this.dingdanzhuangtaiIndex]},tupianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.tupian="upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return u(r.default.mark((function a(){var i,t,u,o,s,c,g,h,d,l;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e.ruleForm.zongjine=e.zongjine,i=n.getStorageSync("crossObj"),t=n.getStorageSync("crossTable"),i.shuliang=i.shuliang-e.ruleForm.shuliang,!(i.shuliang<0)){a.next=7;break}return e.$utils.msg("数量数量不足"),a.abrupt("return");case 7:if(!e.ruleForm.jiage||e.$validate.isNumber(e.ruleForm.jiage)){a.next=10;break}return e.$utils.msg("价格应输入数字"),a.abrupt("return");case 10:if(!e.ruleForm.shuliang||e.$validate.isIntNumer(e.ruleForm.shuliang)){a.next=13;break}return e.$utils.msg("数量应输入整数"),a.abrupt("return");case 13:if(!e.ruleForm.zongjine||e.$validate.isNumber(e.ruleForm.zongjine)){a.next=16;break}return e.$utils.msg("总金额应输入数字"),a.abrupt("return");case 16:if(e.ruleForm.shouhuodizhi){a.next=19;break}return e.$utils.msg("收货地址不能为空"),a.abrupt("return");case 19:if(!e.cross){a.next=35;break}if(c=n.getStorageSync("statusColumnName"),g=n.getStorageSync("statusColumnValue"),""==c){a.next=35;break}if(i=n.getStorageSync("crossObj"),c.startsWith("[")){a.next=31;break}for(h in i)h==c&&(i[h]=g);return t=n.getStorageSync("crossTable"),a.next=29,e.$api.update("".concat(t),i);case 29:a.next=35;break;case 31:u=Number(n.getStorageSync("userid")),o=i["id"],s=n.getStorageSync("statusColumnName"),s=s.replace(/\[/,"").replace(/\]/,"");case 35:if(!o||!u){a.next=62;break}return e.ruleForm.crossuserid=u,e.ruleForm.crossrefid=o,d={page:1,limit:10,crossuserid:u,crossrefid:o},a.next=41,e.$api.list("dingdanxinxi",d);case 41:if(l=a.sent,!(l.data.total>=s)){a.next=47;break}return e.$utils.msg(n.getStorageSync("tips")),a.abrupt("return",!1);case 47:return i=n.getStorageSync("crossObj"),t=n.getStorageSync("crossTable"),i.shuliang=parseFloat(i.shuliang)-parseFloat(e.ruleForm.shuliang),a.next=52,e.$api.update("".concat(t),i);case 52:if(!e.ruleForm.id){a.next=57;break}return a.next=55,e.$api.update("dingdanxinxi",e.ruleForm);case 55:a.next=59;break;case 57:return a.next=59,e.$api.add("dingdanxinxi",e.ruleForm);case 59:e.$utils.msgBack("提交成功");case 60:a.next=75;break;case 62:return i=n.getStorageSync("crossObj"),t=n.getStorageSync("crossTable"),i.shuliang=i.shuliang-e.ruleForm.shuliang,a.next=67,e.$api.update("".concat(t),i);case 67:if(!e.ruleForm.id){a.next=72;break}return a.next=70,e.$api.update("dingdanxinxi",e.ruleForm);case 70:a.next=74;break;case 72:return a.next=74,e.$api.add("dingdanxinxi",e.ruleForm);case 74:e.$utils.msgBack("提交成功");case 75:case"end":return a.stop()}}),a)})))()},optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,a=e.getFullYear(),r=e.getMonth()+1,i=e.getDate();return"start"===n?a-=60:"end"===n&&(a+=2),r=r>9?r:"0"+r,i=i>9?i:"0"+i,"".concat(a,"-").concat(r,"-").concat(i)},toggleTab:function(n){this.$refs[n].show()}}};e.default=s}).call(this,a("543d")["default"])},"8f39":function(n,e,a){"use strict";(function(n){a("e25f");r(a("66fd"));var e=r(a("cfbc"));function r(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,a("543d")["createPage"])},"9ae2":function(n,e,a){},cfbc:function(n,e,a){"use strict";a.r(e);var r=a("de74"),i=a("183b");for(var t in i)"default"!==t&&function(n){a.d(e,n,(function(){return i[n]}))}(t);a("0552");var u,o=a("f0c5"),s=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,"df549a76",null,!1,r["a"],u);e["default"]=s.exports},de74:function(n,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return t})),a.d(e,"a",(function(){return r}));var r={wPicker:function(){return Promise.all([a.e("common/vendor"),a.e("components/w-picker/w-picker")]).then(a.bind(null,"b26b"))}},i=function(){var n=this,e=n.$createElement;n._self._c},t=[]}},[["8f39","common/runtime","common/vendor"]]]);