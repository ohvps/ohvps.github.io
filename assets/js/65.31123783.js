(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{403:function(t,e,s){"use strict";s.r(e);var o=s(0),a=Object(o.defineComponent)({name:"Request",props:["title","headers","requestBody","actionButtonText","path","httpMethod"],methods:{callParentMethod(){this.$emit("custom-event")},request(){this.$emit("request-event")}},components:{}}),h=s(26),p=Object(h.a)(a,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("div",{staticClass:"col",staticStyle:{width:"100%"}},[e("TitleBox",{attrs:{title:t.title}}),t._v(" "),e("div",["POST"==t.httpMethod?e("PostBox",{attrs:{path:t.path}}):t._e(),t._v(" "),"DELETE"==t.httpMethod?e("DeleteBox",{attrs:{path:t.path}}):t._e(),t._v(" "),"GET"==t.httpMethod?e("GetBox",{attrs:{path:t.path}}):t._e(),t._v(" "),"PUT"==t.httpMethod?e("PutBox",{attrs:{path:t.path}}):t._e()],1),t._v(" "),e("div"),t._v(" "),e("ProcessTitle",{attrs:{title:"İstek Başlığı"}}),t._v(" "),e("KeyValueGrid",{attrs:{headers:t.headers}}),t._v(" "),e("ProcessTitle",{attrs:{title:"İstek Gövdesi"}}),t._v(" "),"POST"==t.httpMethod?e("BodyBox",{attrs:{body:t.requestBody,height:"300"}}):t._e(),t._v(" "),"GET"==t.httpMethod?e("p",{staticStyle:{height:"300px","margin-top":"40px",padding:"5px"}}):t._e(),t._v(" "),"DELETE"==t.httpMethod?e("p",{staticStyle:{height:"300px","margin-top":"40px",padding:"5px"}}):t._e(),t._v(" "),"PUT"==t.httpMethod?e("p",{attrs:{body:t.requestBody,height:"300"}}):t._e(),t._v(" "),e("div",{staticStyle:{"margin-top":"30px","text-align":"center"}},[e("ProcessButton",{attrs:{content:t.actionButtonText},on:{"process-event":t.request}})],1)],1)])}),[],!1,null,null,null);e.default=p.exports}}]);