(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{340:function(e,t,n){"use strict";
/*!
 * devextreme-vue
 * Version: 23.1.6
 * Build date: Fri Oct 13 2023
 *
 * Copyright (c) 2012 - 2023 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-vue
 */var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.DxItem=t.DxTabPanel=void 0;var a=l(n(409)),o=n(280),i=n(280),u=(0,o.createComponent)({props:{accessKey:String,activeStateEnabled:Boolean,animationEnabled:Boolean,dataSource:{},deferRendering:Boolean,disabled:Boolean,elementAttr:Object,focusStateEnabled:Boolean,height:[Function,Number,String],hint:String,hoverStateEnabled:Boolean,itemHoldTimeout:Number,items:Array,itemTemplate:{},itemTitleTemplate:{},loop:Boolean,noDataText:String,onContentReady:Function,onDisposing:Function,onInitialized:Function,onItemClick:Function,onItemContextMenu:Function,onItemHold:Function,onItemRendered:Function,onOptionChanged:Function,onSelectionChanged:Function,onTitleClick:Function,onTitleHold:Function,onTitleRendered:Function,repaintChangesOnly:Boolean,rtlEnabled:Boolean,scrollByContent:Boolean,scrollingEnabled:Boolean,selectedIndex:Number,selectedItem:{},showNavButtons:Boolean,swipeEnabled:Boolean,tabIndex:Number,visible:Boolean,width:[Function,Number,String]},emits:{"update:isActive":null,"update:hoveredElement":null,"update:accessKey":null,"update:activeStateEnabled":null,"update:animationEnabled":null,"update:dataSource":null,"update:deferRendering":null,"update:disabled":null,"update:elementAttr":null,"update:focusStateEnabled":null,"update:height":null,"update:hint":null,"update:hoverStateEnabled":null,"update:itemHoldTimeout":null,"update:items":null,"update:itemTemplate":null,"update:itemTitleTemplate":null,"update:loop":null,"update:noDataText":null,"update:onContentReady":null,"update:onDisposing":null,"update:onInitialized":null,"update:onItemClick":null,"update:onItemContextMenu":null,"update:onItemHold":null,"update:onItemRendered":null,"update:onOptionChanged":null,"update:onSelectionChanged":null,"update:onTitleClick":null,"update:onTitleHold":null,"update:onTitleRendered":null,"update:repaintChangesOnly":null,"update:rtlEnabled":null,"update:scrollByContent":null,"update:scrollingEnabled":null,"update:selectedIndex":null,"update:selectedItem":null,"update:showNavButtons":null,"update:swipeEnabled":null,"update:tabIndex":null,"update:visible":null,"update:width":null},computed:{instance:function(){return this.$_instance}},beforeCreate:function(){this.$_WidgetClass=a.default,this.$_hasAsyncTemplate=!0,this.$_expectedChildren={item:{isCollectionItem:!0,optionName:"items"}}}});t.DxTabPanel=u;var d=(0,i.createConfigurationComponent)({emits:{"update:isActive":null,"update:hoveredElement":null,"update:badge":null,"update:disabled":null,"update:html":null,"update:icon":null,"update:tabTemplate":null,"update:template":null,"update:text":null,"update:title":null},props:{badge:String,disabled:Boolean,html:String,icon:String,tabTemplate:{},template:{},text:String,title:String}});t.DxItem=d,d.$_optionName="items",d.$_isCollectionItem=!0,t.default=u},634:function(e,t,n){"use strict";n.r(t);var l=n(0),a=n(340),o=n.n(a),i=Object(l.defineComponent)({name:"Response",props:["title","headers","body","actionButtonText","tabs","nextButtonVisible"],methods:{callParentMethod(){this.$emit("custom-event")},nextStep(){this.$emit("process-event")},changeTabs:function(e){this.$emit("response-event",e.addedItems[0].ID)}},components:{DxTabPanel:o.a,DxItem:a.DxItem}}),u=n(15),d=Object(u.a)(i,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",[t("div",{staticClass:"col",staticStyle:{width:"100%"}},[t("TitleBox",{attrs:{title:e.title}}),e._v(" "),t("p",{staticStyle:{height:"40px","margin-top":"40px",padding:"5px"}}),e._v(" "),t("ProcessTitle",{attrs:{title:"Yanıt Başlığı"}}),e._v(" "),t("KeyValueGrid",{attrs:{headers:e.headers}}),e._v(" "),t("ProcessTitle",{attrs:{title:"Yanıt Gövdesi"}}),e._v(" "),t("DxTabPanel",{attrs:{id:"test",height:300,"data-source":e.tabs},on:{"selection-changed":e.changeTabs},scopedSlots:e._u([{key:"title",fn:function({data:n}){return[t("div",[t("div",[1===n.ID?t("span",{staticStyle:{color:"black","font-weight":"bold"}},[e._v(e._s(n.Name))]):e._e()]),e._v(" "),t("div",[1!==n.ID?t("span",{staticStyle:{color:"#b30101","font-weight":"bold"}},[e._v(e._s(n.Name))]):e._e()])])]}},{key:"item",fn:function({data:n}){return[t("div",{staticClass:"tabpanel-item2"},[t("BodyBox",{attrs:{body:e.body,height:"260"}})],1)]}}])}),e._v(" "),"true"==e.nextButtonVisible?t("div",{staticStyle:{"margin-top":"40px","text-align":"right"}},[t("ProcessButton",{attrs:{content:"Bir Sonraki İşlem"},on:{"process-event":e.nextStep}})],1):e._e()],1)])}),[],!1,null,null,null);t.default=d.exports}}]);