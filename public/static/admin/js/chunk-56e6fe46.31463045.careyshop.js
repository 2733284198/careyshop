(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56e6fe46"],{"25c9":function(t,e,c){"use strict";c.d(e,"a",(function(){return a})),c.d(e,"e",(function(){return r})),c.d(e,"b",(function(){return s})),c.d(e,"c",(function(){return d})),c.d(e,"d",(function(){return u})),c.d(e,"f",(function(){return p}));var i=c("5530"),n=c("bc07"),o="/v1/topic.html";function a(t){return Object(n["a"])({url:o,method:"post",data:Object(i["a"])({method:"add.topic.item"},t)})}function r(t){return Object(n["a"])({url:o,method:"post",data:Object(i["a"])({method:"set.topic.item"},t)})}function s(t){return Object(n["a"])({url:o,method:"post",data:{method:"del.topic.list",topic_id:t}})}function d(t){return Object(n["a"])({url:o,method:"post",data:{method:"get.topic.item",topic_id:t}})}function u(t){return Object(n["a"])({url:o,method:"post",data:Object(i["a"])({method:"get.topic.list"},t)})}function p(t,e){return Object(n["a"])({url:o,method:"post",data:{method:"set.topic.status",topic_id:t,status:e}})}},"354b":function(t,e,c){},"4de7":function(t,e,c){"use strict";var i=c("354b"),n=c.n(i);n.a},cd4e:function(t,e,c){"use strict";c.r(e);var i=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("cs-container",[c("div",{staticClass:"cs-p"},[c("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[c("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[c("h2",[t._v(t._s(t.topic.title))]),c("span",[t._v("创建日期："+t._s(t.topic.create_time))]),c("span",[t._v("最后编辑："+t._s(t.topic.update_time))])]),c("div",{staticClass:"mce-content-body",domProps:{innerHTML:t._s(t.topic.content)}})])],1)])},n=[],o=(c("a9e3"),c("25c9")),a={props:{topic_id:{type:[String,Number],required:!0}},data:function(){return{topic:{}}},watch:{topic_id:{handler:function(){this.getTopicData()},immediate:!0}},methods:{resetTopicData:function(){this.topic={}},getTopicData:function(){var t=this;this.resetTopicData(),Object(o["c"])(this.topic_id).then((function(e){t.topic=e.data||{}}))}}},r=a,s=(c("4de7"),c("2877")),d=Object(s["a"])(r,i,n,!1,null,"53c0f876",null);e["default"]=d.exports}}]);