webpackJsonp([1],{"1/oy":function(t,e){},"1wOJ":function(t,e){},"4vF+":function(t,e){},"83Xj":function(t,e){},"9M+g":function(t,e){},GfHa:function(t,e){},Id91:function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"info"}},[e("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),this._v(" "),e("b-navbar-brand",{attrs:{href:"#"}},[this._v("--")]),this._v(" "),e("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[e("b-navbar-nav",[e("b-nav-item",{attrs:{href:"./#/userinfo",target:"__blank"}},[this._v("提交信息")]),this._v(" "),e("b-nav-item",{attrs:{href:"https://github.com/easeven/txswq",target:"__blank"}},[this._v("项目公开")])],1)],1)],1)],1)},staticRenderFns:[]};var i={components:{"my-nav":n("VU/8")({},a,!1,function(t){n("83Xj")},"data-v-5a9217a1",null).exports},name:"App"},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("my-nav"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var s=n("VU/8")(i,o,!1,function(t){n("sN8a")},null,null).exports,u=n("/ocq"),l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card",{attrs:{title:t.item.province}},[n("div",{staticClass:"card-text"},[t._v("姓名："+t._s(t.item.name))]),t._v(" "),n("div",{staticClass:"card-text"},[t._v("金额："+t._s(t.item.amount))]),t._v(" "),n("small",{staticClass:"text-muted"},[t._v("更新时间："+t._s(t.item.date))])])},staticRenderFns:[]};var c=n("VU/8")({props:["item"],data:function(){return{}}},l,!1,function(t){n("Wz3r")},null,null).exports,m=n("Zrlr"),f=n.n(m),p=n("wxAW"),v=n.n(p),d=n("mtWM"),b=n.n(d),h=function(){function t(){f()(this,t)}return v()(t,null,[{key:"getIndexUsers",value:function(){return b.a.get("http://42.159.252.51/json/users.json").then(function(t){return console.log(t),t.data})}}]),t}(),_={name:"index",components:{"my-user":c},data:function(){return{list:[]}},methods:{getIndexUsers:function(){var t=this;h.getIndexUsers().then(function(e){t.list=e})}},created:function(){this.getIndexUsers()}},x={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello"},[e("b-jumbotron",{attrs:{header:"0","header-tag":"h4","header-level":"4",lead:"","text-variant":"",fluid:!0,"container-fluid":!0}}),this._v(" "),e("b-card-group",{staticClass:"content",attrs:{columns:""}},this._l(this.list,function(t,n){return e("my-user",{key:n,attrs:{item:t}})})),this._v(" "),e("div")],1)},staticRenderFns:[]};var g=n("VU/8")(_,x,!1,function(t){n("4vF+")},"data-v-64f46a54",null).exports,y={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n  This is detail\n")])},staticRenderFns:[]},w=n("VU/8")(null,y,!1,null,null,null).exports,I=["北京市","上海市","天津市","重庆市","黑龙江省","辽宁省","吉林省","河北省","河南省","湖北省","湖南省","山东省","山西省","陕西省","安徽省","浙江省","江苏省","福建省","广东省","海南省","四川省","云南省","贵州省","青海省","甘肃省","江西省","台湾省","内蒙古自治区","宁夏回族自治区","新疆维吾尔自治区","西藏自治区","广西壮族自治区","香港特别行政区","澳门特别行政区"],k={data:function(){return{provinces:I,selected:0,show:!0,form:{}}},methods:{onReset:function(){this.form={}},onSubmit:function(){}}},U={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form"},[t.show?n("b-form",{on:{submit:t.onSubmit,reset:t.onReset}},[n("b-form-group",{attrs:{id:"inputNameGroup",label:"姓名:","label-for":"inputName"}},[n("b-form-input",{attrs:{id:"inputName",type:"text",required:"",placeholder:"请填写姓名"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),n("b-form-group",{attrs:{id:"inputAmountGroup",label:"金额:","label-for":"inputAmount"}},[n("b-form-input",{attrs:{id:"inputAmount",type:"text",required:"",placeholder:"请填写投资的金额"},model:{value:t.form.amount,callback:function(e){t.$set(t.form,"amount",e)},expression:"form.amount"}})],1),t._v(" "),n("b-form-group",{attrs:{id:"inputIDGroup",label:"金额:","label-for":"inputID"}},[n("b-form-input",{attrs:{id:"inputID",type:"text",required:"",placeholder:"身份证号码"},model:{value:t.form.ID,callback:function(e){t.$set(t.form,"ID",e)},expression:"form.ID"}})],1),t._v(" "),n("b-form-group",{attrs:{id:"inputProvinceGroup",label:"省份:","label-for":"inputProvince"}},[n("b-form-select",{staticClass:"mb-3",attrs:{id:"inputProvince",options:t.provinces,required:""},model:{value:t.form.province,callback:function(e){t.$set(t.form,"province",e)},expression:"form.province"}},[n("template",{slot:"first"},[n("option",{attrs:{disabled:""},domProps:{value:void 0}},[t._v("-- 请选择省份 --")])])],2)],1),t._v(" "),n("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Submit")]),t._v(" "),n("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("Reset")])],1):t._e()],1)},staticRenderFns:[]};var $=n("VU/8")(k,U,!1,function(t){n("1wOJ")},null,null).exports;r.a.use(u.a);var R=new u.a({base:"/txswqhtml",routes:[{path:"/index",name:"HelloWorld",component:g},{path:"/detail",name:"Detail",component:w},{path:"/userinfo",name:"userinfo",component:$}]}),C=n("e6fC");n("Jmt5"),n("9M+g");r.a.config.productionTip=!1,r.a.use(C.a),new r.a({el:"#app",router:R,components:{App:s},template:"<App/>"})},Wz3r:function(t,e){},sN8a:function(t,e){},zj2Q:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.6b8927a10014eb082862.js.map