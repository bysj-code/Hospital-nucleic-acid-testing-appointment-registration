(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/hesuanjiance/add-or-update"],{"0f35":function(e,n,a){"use strict";var i=a("7edb"),t=a.n(i);t.a},2123:function(e,n,a){"use strict";(function(e){a("73d1");i(a("66fd"));var n=i(a("68e1"));function i(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,a("543d")["createPage"])},"3c59":function(e,n,a){"use strict";a.r(n);var i=a("5afa"),t=a.n(i);for(var r in i)"default"!==r&&function(e){a.d(n,e,(function(){return i[e]}))}(r);n["default"]=t.a},"5afa":function(e,n,a){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=t(a("a34a"));function t(e){return e&&e.__esModule?e:{default:e}}function r(e,n,a,i,t,r,u){try{var o=e[r](u),c=o.value}catch(s){return void a(s)}o.done?n(c):Promise.resolve(c).then(i,t)}function u(e){return function(){var n=this,a=arguments;return new Promise((function(i,t){var u=e.apply(n,a);function o(e){r(u,i,t,o,c,"next",e)}function c(e){r(u,i,t,o,c,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([a.e("common/vendor"),a.e("components/w-picker/w-picker")]).then(function(){return resolve(a("8390"))}.bind(null,a)).catch(a.oe)},c={data:function(){return{cross:"",ruleForm:{yiyuanbianhao:"",yiyuanmingcheng:"",yiyuandizhi:"",yiyuandengji:"",fengmian:"",jiancefangshi:"",jianceriqi:"",haoshu:"",jiancefeiyong:""},yiyuanbianhaoOptions:[],yiyuanbianhaoIndex:0,jiancefangshiOptions:[],jiancefangshiIndex:0,user:{},ro:{yiyuanbianhao:!1,yiyuanmingcheng:!1,yiyuandizhi:!1,yiyuandengji:!1,fengmian:!1,jiancefangshi:!1,jianceriqi:!1,haoshu:!1,jiancefeiyong:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var a=this;return u(i.default.mark((function t(){var r,u,o,c;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a.ruleForm.jianceriqi=a.$utils.getCurDate(),r=e.getStorageSync("nowTable"),t.next=4,a.$api.session(r);case 4:return u=t.sent,a.user=u.data,t.next=8,a.$api.option("yiyuanxinxi","yiyuanbianhao",{});case 8:if(u=t.sent,a.yiyuanbianhaoOptions=u.data,a.jiancefangshiOptions="咽拭子,血液筛查,临床微生物学检查,鼻腔取鼻咽喉部分泌物".split(","),a.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(a.ruleForm.refid=n.refid,a.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){t.next=19;break}return a.ruleForm.id=n.id,t.next=17,a.$api.info("hesuanjiance",a.ruleForm.id);case 17:u=t.sent,a.ruleForm=u.data;case 19:if(a.cross=n.cross,!n.cross){t.next=63;break}o=e.getStorageSync("crossObj"),t.t0=i.default.keys(o);case 23:if((t.t1=t.t0()).done){t.next=63;break}if(c=t.t1.value,"yiyuanbianhao"!=c){t.next=29;break}return a.ruleForm.yiyuanbianhao=o[c],a.ro.yiyuanbianhao=!0,t.abrupt("continue",23);case 29:if("yiyuanmingcheng"!=c){t.next=33;break}return a.ruleForm.yiyuanmingcheng=o[c],a.ro.yiyuanmingcheng=!0,t.abrupt("continue",23);case 33:if("yiyuandizhi"!=c){t.next=37;break}return a.ruleForm.yiyuandizhi=o[c],a.ro.yiyuandizhi=!0,t.abrupt("continue",23);case 37:if("yiyuandengji"!=c){t.next=41;break}return a.ruleForm.yiyuandengji=o[c],a.ro.yiyuandengji=!0,t.abrupt("continue",23);case 41:if("fengmian"!=c){t.next=45;break}return a.ruleForm.fengmian=o[c],a.ro.fengmian=!0,t.abrupt("continue",23);case 45:if("jiancefangshi"!=c){t.next=49;break}return a.ruleForm.jiancefangshi=o[c],a.ro.jiancefangshi=!0,t.abrupt("continue",23);case 49:if("jianceriqi"!=c){t.next=53;break}return a.ruleForm.jianceriqi=o[c],a.ro.jianceriqi=!0,t.abrupt("continue",23);case 53:if("haoshu"!=c){t.next=57;break}return a.ruleForm.haoshu=o[c],a.ro.haoshu=!0,t.abrupt("continue",23);case 57:if("jiancefeiyong"!=c){t.next=61;break}return a.ruleForm.jiancefeiyong=o[c],a.ro.jiancefeiyong=!0,t.abrupt("continue",23);case 61:t.next=23;break;case 63:a.styleChange();case 64:case"end":return t.stop()}}),t)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},yiyuanbianhaoChange:function(e){var n=this;return u(i.default.mark((function a(){var t;return i.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n.yiyuanbianhaoIndex=e.target.value,n.ruleForm.yiyuanbianhao=n.yiyuanbianhaoOptions[n.yiyuanbianhaoIndex],a.next=4,n.$api.follow("yiyuanxinxi","yiyuanbianhao",{columnValue:n.ruleForm.yiyuanbianhao});case 4:t=a.sent,t.data.yiyuanmingcheng&&(n.ruleForm.yiyuanmingcheng=t.data.yiyuanmingcheng),t.data.yiyuandizhi&&(n.ruleForm.yiyuandizhi=t.data.yiyuandizhi),t.data.yiyuandengji&&(n.ruleForm.yiyuandengji=t.data.yiyuandengji);case 8:case"end":return a.stop()}}),a)})))()},jianceriqiChange:function(e){this.ruleForm.jianceriqi=e.target.value,this.$forceUpdate()},jiancefangshiChange:function(e){this.jiancefangshiIndex=e.target.value,this.ruleForm.jiancefangshi=this.jiancefangshiOptions[this.jiancefangshiIndex]},fengmianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.fengmian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return u(i.default.mark((function a(){var t,r,u,o,c,s,f,l,d,h;return i.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!n.ruleForm.haoshu||n.$validate.isIntNumer(n.ruleForm.haoshu)){a.next=3;break}return n.$utils.msg("号数应输入整数"),a.abrupt("return");case 3:if(!n.ruleForm.jiancefeiyong||n.$validate.isIntNumer(n.ruleForm.jiancefeiyong)){a.next=6;break}return n.$utils.msg("检测费用应输入整数"),a.abrupt("return");case 6:if(!n.cross){a.next=22;break}if(o=e.getStorageSync("statusColumnName"),c=e.getStorageSync("statusColumnValue"),""==o){a.next=22;break}if(s=e.getStorageSync("crossObj"),o.startsWith("[")){a.next=18;break}for(f in s)f==o&&(s[f]=c);return l=e.getStorageSync("crossTable"),a.next=16,n.$api.update("".concat(l),s);case 16:a.next=22;break;case 18:t=Number(e.getStorageSync("userid")),r=s["id"],u=e.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 22:if(!r||!t){a.next=44;break}return n.ruleForm.crossuserid=t,n.ruleForm.crossrefid=r,d={page:1,limit:10,crossuserid:t,crossrefid:r},a.next=28,n.$api.list("hesuanjiance",d);case 28:if(h=a.sent,!(h.data.total>=u)){a.next=34;break}return n.$utils.msg(e.getStorageSync("tips")),a.abrupt("return",!1);case 34:if(!n.ruleForm.id){a.next=39;break}return a.next=37,n.$api.update("hesuanjiance",n.ruleForm);case 37:a.next=41;break;case 39:return a.next=41,n.$api.add("hesuanjiance",n.ruleForm);case 41:n.$utils.msgBack("提交成功");case 42:a.next=52;break;case 44:if(!n.ruleForm.id){a.next=49;break}return a.next=47,n.$api.update("hesuanjiance",n.ruleForm);case 47:a.next=51;break;case 49:return a.next=51,n.$api.add("hesuanjiance",n.ruleForm);case 51:n.$utils.msgBack("提交成功");case 52:case"end":return a.stop()}}),a)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,a=n.getFullYear(),i=n.getMonth()+1,t=n.getDate();return"start"===e?a-=60:"end"===e&&(a+=2),i=i>9?i:"0"+i,t=t>9?t:"0"+t,"".concat(a,"-").concat(i,"-").concat(t)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,a("543d")["default"])},"68e1":function(e,n,a){"use strict";a.r(n);var i=a("f81d"),t=a("3c59");for(var r in t)"default"!==r&&function(e){a.d(n,e,(function(){return t[e]}))}(r);a("0f35");var u,o=a("f0c5"),c=Object(o["a"])(t["default"],i["b"],i["c"],!1,null,"41879350",null,!1,i["a"],u);n["default"]=c.exports},"7edb":function(e,n,a){},f81d:function(e,n,a){"use strict";var i;a.d(n,"b",(function(){return t})),a.d(n,"c",(function(){return r})),a.d(n,"a",(function(){return i}));var t=function(){var e=this,n=e.$createElement;e._self._c},r=[]}},[["2123","common/runtime","common/vendor"]]]);