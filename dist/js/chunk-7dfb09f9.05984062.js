(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7dfb09f9"],{"1f3c":function(t,e,r){"use strict";r("35cb")},"35cb":function(t,e,r){},"54e2":function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("form",{on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.handleSubmit(e)}}},[t._m(0),t._m(1),r("div",{staticClass:"row"},[r("label",{attrs:{for:"account"}},[t._v("帳號")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.account,expression:"form.account"}],attrs:{id:"account",name:"account",type:"text",required:""},domProps:{value:t.form.account},on:{input:function(e){e.target.composing||t.$set(t.form,"account",e.target.value)}}})]),r("div",{staticClass:"row"},[r("label",{attrs:{for:"password"}},[t._v("密碼")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],attrs:{id:"password",name:"password",type:"password",required:""},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}})]),r("div",{staticClass:"row mt-4"},[r("button",{staticClass:"btn signin",attrs:{type:"submit",disabled:t.isProcessing}},[t._v(" "+t._s(t.isProcessing?"登入中":"登入")+" ")])]),r("div",{staticClass:"row link-btns-container"},[r("div",{staticClass:"link-btns"},[r("router-link",{staticClass:"routerLink",attrs:{to:"/signup"}},[t._v("註冊 Alphitter")]),r("span",[t._v(" · ")]),r("router-link",{staticClass:"routerLink",attrs:{to:"/admin/signin"}},[t._v("後台登入")])],1)])])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"logo"},[s("img",{attrs:{src:r("a1d8"),alt:""}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"title"},[r("h1",[t._v("登入 Alphitter")])])}],n=r("1da1"),o=(r("96cf"),r("2fa3")),i=r("7696"),c={name:"SignIn",data:function(){return{form:{account:"",password:""},isProcessing:!1}},methods:{handleSubmit:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var r,s,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.form,s=t.formDataCheck(r),s){e.next=4;break}return e.abrupt("return");case 4:return e.prev=4,t.isProcessing=!0,e.next=8,i["a"].signIn(r);case 8:if(a=e.sent,n=a.data,"success"===n.status){e.next=12;break}throw new Error(n.message);case 12:localStorage.setItem("token",n.token),t.$store.commit("setCurrentUser",n.user),t.$router.push("/main"),e.next=24;break;case 17:e.prev=17,e.t0=e["catch"](4),console.log(e.t0),t.isProcessing=!1,o["a"].fire({icon:"error",title:"帳號密碼不正確，請再試一次！"}),t.form.account="",t.form.password="";case 24:case"end":return e.stop()}}),e,null,[[4,17]])})))()},formDataCheck:function(t){var e=t.account,r=t.password,s=!1;return"root"===e?(o["a"].fire({icon:"error",title:"無法使用管理者帳號於前臺登入！"}),!1):e?r?(s=!0,s):(o["a"].fire({icon:"info",title:"尚未填寫密碼！"}),!1):(o["a"].fire({icon:"info",title:"尚未填寫帳號！"}),!1)}}},u=c,l=(r("1f3c"),r("2877")),f=Object(l["a"])(u,s,a,!1,null,"db00fff2",null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-7dfb09f9.05984062.js.map