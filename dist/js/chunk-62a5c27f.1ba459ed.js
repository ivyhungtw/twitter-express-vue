(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-62a5c27f"],{"38c7":function(t,s,a){"use strict";a("ef1b")},"3bb6":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"userSidebar"},[e("div",{staticClass:"logo"},[e("router-link",{attrs:{to:"/main"}},[e("img",{attrs:{src:a("a1d8"),alt:""}})])],1),e("div",{staticClass:"buttonList"},[e("div",{staticClass:"navItem index"},[e("div",{staticClass:"icon"},[t.tweets?e("img",{attrs:{src:a("459f"),alt:""}}):e("img",{attrs:{src:a("10d1"),alt:""}})]),e("button",{staticClass:"btn"},[e("router-link",{attrs:{to:"/admin/tweets"}},[e("p",{class:{active:t.tweets},attrs:{id:"routerTweets"}},[t._v("推文清單")])])],1)]),e("div",{staticClass:"navItem userProfile"},[e("div",{staticClass:"icon"},[t.users?e("img",{attrs:{src:a("fc4c"),alt:""}}):e("img",{attrs:{src:a("4c9a"),alt:""}})]),e("button",{staticClass:"btn"},[e("router-link",{attrs:{to:"/admin/users"}},[e("p",{class:{active:t.users},attrs:{id:"routerUsers"}},[t._v("使用者列表")])])],1)]),e("div",{staticClass:"navItem logout"},[t._m(0),e("button",{staticClass:"btn",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.logout(s)}}},[e("p",[t._v("登出")])])])])])},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"icon"},[e("img",{attrs:{src:a("977e"),alt:""}})])}],r=(a("ac1f"),a("1276"),{name:"AdminSidebar",created:function(){var t=this.$route.path.split("/")[2];this.setCurrentLocation(t)},data:function(){return{tweets:!1,users:!1}},methods:{logout:function(){this.$store.commit("revokeAuthentication"),this.$router.push("/admin/signin")},setCurrentLocation:function(t){console.log("location: "+t),"tweets"===t?(this.tweets=!0,this.users=!1):(this.tweets=!1,this.users=!0)}}}),n=r,c=(a("38c7"),a("2877")),o=Object(c["a"])(n,e,i,!1,null,"295c3b75",null);s["a"]=o.exports},6135:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"AdminUsers"}},[t.isLoading?a("Spinner"):[a("AdminSidebar"),a("div",{staticClass:"AdminUsersPanel"},[a("div",{staticClass:"title"},[a("h1",[t._v("使用者列表")])]),a("div",{staticClass:"admin-users-card"},t._l(t.users,(function(t){return a("AdminUsersCard",{key:t.id,attrs:{user:t}})})),1)])]],2)},i=[],r=a("1da1"),n=(a("96cf"),a("3bb6")),c=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container"},[a("div",{staticClass:"card"},[a("div",{staticClass:"background-img"},[a("img",{staticClass:"card-img-top",attrs:{src:t.user.cover,alt:""}})]),a("div",{staticClass:"avatar"},[a("img",{staticClass:"card-img-top",attrs:{src:t.user.avatar,alt:""}})]),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(t._s(t.user.name))]),a("p",{staticClass:"card-text"},[t._v("@"+t._s(t.user.account))]),a("div",{staticClass:"click-on-condition row"},[a("div",{staticClass:"reply-count"},[a("i",{staticClass:"far fa-comment"}),t._v(" "+t._s(t.user.tweetCount)+" ")]),a("div",{staticClass:"like-count"},[a("i",{staticClass:"far fa-heart"}),t._v(" "+t._s(t.user.likeCount)+" ")])]),a("div",{staticClass:"follow-condition row"},[a("div",{staticClass:"following-count"},[a("span",[t._v(t._s(t.user.followingCount)+"個")]),t._v("跟隨中 ")]),a("div",{staticClass:"follows-count"},[a("span",[t._v(t._s(t.user.followerCount)+"位")]),t._v("跟隨者 ")])])])])])},o=[],u={name:"AdminUsersCard",props:{User:{type:Object,required:!0}},data:function(){return{user:this.User}}},l=u,d=(a("da84d"),a("2877")),v=Object(d["a"])(l,c,o,!1,null,"81e14eb8",null),f=v.exports,m=a("2fa3"),C=a("4cce"),p=a("b572"),b={name:"AdminUsers",components:{AdminSidebar:n["a"],AdminUsersCard:f,Spinner:p["a"]},data:function(){return{users:[],isLoading:!0}},created:function(){this.fetchUsers()},methods:{fetchUsers:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function s(){var a,e;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,C["a"].getTotalUser();case 3:a=s.sent,e=a.data,t.users=e,t.isLoading=!1,s.next=14;break;case 9:s.prev=9,s.t0=s["catch"](0),t.isLoading=!1,console.log("error",s.t0),m["a"].fire({icon:"error",title:"無法取得使用者資料，請稍後再試"});case 14:case"end":return s.stop()}}),s,null,[[0,9]])})))()}}},h=b,g=(a("7a04"),Object(d["a"])(h,e,i,!1,null,"121def38",null));s["default"]=g.exports},"78f9":function(t,s,a){},"7a04":function(t,s,a){"use strict";a("e77b")},da84d:function(t,s,a){"use strict";a("78f9")},e77b:function(t,s,a){},ef1b:function(t,s,a){}}]);
//# sourceMappingURL=chunk-62a5c27f.1ba459ed.js.map