(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{358:function(e,t,n){},368:function(e,t,n){"use strict";n(358)},375:function(e,t,n){"use strict";n.r(t);n(20),n(37),n(19),n(36),n(55),n(43),n(56);var r=n(1),l=n(21),o=(n(33),n(69),n(11),n(67)),c=n(364),d=n.n(c);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v=Object(o.a)("local"),m=v.mapState,w=v.mapActions,_=(v.mapMutations,{layout:"dashboard",components:{draggable:d.a},data:function(){return{drag:!1,setting:JSON.parse(JSON.stringify(this.$store.state.local.setting))}},computed:h({dragOptions:function(){return{animation:200,group:"description",disabled:!1,ghostClass:"ghost"}},availableLocales:function(){return this.$i18n.locales},currentLocale:function(){var e=this,t=this.data.setting.general.currentLan;if(t){var n=this.$i18n.locales.find((function(i){return i.code===t}));if(n)return n}return this.$i18n.locales.find((function(i){return i.code===e.$i18n.locale}))}},m(["isLoadingSetting"])),fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.loadData();case 1:case"end":return t.stop()}}),t)})))()},fetchOnServer:!1,methods:h(h({},w(["loadSetting","saveSetting","explore"])),{},{reset:function(){this.setting.general.windowWidth=null,this.setting.general.windowHeight=null},handleClientApiException:function(e){this.$local.handleClientApiException(this,e)},loadData:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.loadSetting({handleClientApiException:e.handleClientApiException});case 2:e.setting=JSON.parse(JSON.stringify(e.$store.state.local.setting));case 3:case"end":return t.stop()}}),t)})))()},onSaveClick:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.saveSetting({setting:e.setting,handleClientApiException:e.handleClientApiException});case 2:if(n=t.sent){t.next=5;break}return t.abrupt("return");case 5:return e.$buefy.toast.open({message:n.ok?e.$t("dashboard.client.setting.savedSuccessfully"):e.$t("dashboard.client.setting.saveFailed"),type:n.ok?"is-success":"is-warning"}),t.next=8,e.loadData();case 8:e.setting.general.currentLan&&e.$router.push(e.switchLocalePath(e.setting.general.currentLan));case 9:case"end":return t.stop()}}),t)})))()}})}),k=(n(368),n(26)),component=Object(k.a)(_,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"container main"},[t("client-only",[t("section",[t("h2",{staticClass:"title is-4"},[t("router-link",{attrs:{to:"#api-view"}},[e._v("#")]),e._v("\n        "+e._s(e.$t("dashboard.client.setting.general"))+"\n      ")],1),e._v(" "),t("div",{staticClass:"setting-container"},[t("b-field",{attrs:{label:e.$t("dashboard.client.setting.startWithSystem")}},[t("b-switch",{attrs:{"left-label":!0},model:{value:e.setting.general.startWithSystem,callback:function(t){e.$set(e.setting.general,"startWithSystem",t)},expression:"setting.general.startWithSystem"}})],1),e._v(" "),t("b-field",{scopedSlots:e._u([{key:"label",fn:function(){return[t("b-icon",{attrs:{pack:"fas",icon:"globe"}}),e._v("\n            "+e._s(e.$t("common.multiLanguage"))+"\n          ")]},proxy:!0}])},[e._v(" "),t("b-select",{attrs:{placeholder:""},on:{input:e.onSaveClick},model:{value:e.setting.general.currentLan,callback:function(t){e.$set(e.setting.general,"currentLan",t)},expression:"setting.general.currentLan"}},e._l(e.availableLocales,(function(n){return t("option",{key:n.code,domProps:{value:n.code}},[e._v("\n              "+e._s(n.name)+"\n            ")])})),0)],1),e._v(" "),t("b-field",{attrs:{label:e.$t("dashboard.client.setting.wallpaperSaveDir")}},[t("b-input",{attrs:{placeholder:e.$t("dashboard.client.setting.wallpaperSaveDirTips"),"icon-pack":"fas","icon-right":"folder-open","icon-right-clickable":""},on:{"icon-right-click":function(t){return e.explore({path:e.setting.wallpaper.wallpaperSaveDir,handleClientApiException:e.handleClientApiException})}},model:{value:e.setting.wallpaper.wallpaperSaveDir,callback:function(t){e.$set(e.setting.wallpaper,"wallpaperSaveDir",t)},expression:"setting.wallpaper.wallpaperSaveDir"}})],1),e._v(" "),t("b-field",{attrs:{label:e.$t("dashboard.client.setting.configDir")}},[t("b-input",{attrs:{readonly:"","icon-pack":"fas","icon-right":"folder-open","icon-right-clickable":""},on:{"icon-right-click":function(t){return e.explore({path:e.setting.general.configDir,handleClientApiException:e.handleClientApiException})}},model:{value:e.setting.general.configDir,callback:function(t){e.$set(e.setting.general,"configDir",t)},expression:"setting.general.configDir"}})],1),e._v(" "),t("b-field",{attrs:{label:e.$t("dashboard.client.setting.windowSize")}},[t("b-input",{attrs:{type:"number",placeholder:e.$t("dashboard.client.setting.windowSizeHeightTips")},model:{value:e.setting.general.windowHeight,callback:function(t){e.$set(e.setting.general,"windowHeight",t)},expression:"setting.general.windowHeight"}}),e._v(" "),t("b-input",{attrs:{type:"number",placeholder:e.$t("dashboard.client.setting.windowSizeWidthTips")},model:{value:e.setting.general.windowWidth,callback:function(t){e.$set(e.setting.general,"windowWidth",t)},expression:"setting.general.windowWidth"}}),e._v(" "),t("b-button",{on:{click:e.reset}},[e._v(e._s(e.$t("common.reset")))])],1)],1),e._v(" "),t("hr",{staticClass:"is-medium"})]),e._v(" "),t("section",[t("h2",{staticClass:"title is-4"},[t("router-link",{attrs:{to:"#api-view"}},[e._v("#")]),e._v("\n        "+e._s(e.$t("common.wallpaper"))+"\n      ")],1),e._v(" "),t("div",{staticClass:"setting-container"},[t("b-field",{attrs:{label:e.$t("dashboard.client.setting.appMaximizedEffectAllScreen")}},[t("b-switch",{attrs:{"left-label":!0},model:{value:e.setting.wallpaper.appMaximizedEffectAllScreen,callback:function(t){e.$set(e.setting.wallpaper,"appMaximizedEffectAllScreen",t)},expression:"setting.wallpaper.appMaximizedEffectAllScreen"}})],1)],1),e._v(" "),t("hr",{staticClass:"is-medium"})]),e._v(" "),t("draggable",e._b({staticClass:"list-group",on:{start:function(t){e.drag=!0},end:function(t){e.drag=!1}},model:{value:e.setting.wallpaper.screenOptions,callback:function(t){e.$set(e.setting.wallpaper,"screenOptions",t)},expression:"setting.wallpaper.screenOptions"}},"draggable",e.dragOptions,!1),e._l(e.setting.wallpaper.screenOptions,(function(n){return t("section",{key:n.screen,attrs:{value:n.screen}},[t("h2",{staticClass:"title is-4",staticStyle:{cursor:"move"}},[t("router-link",{attrs:{to:"#api-view"}},[e._v("#")]),e._v("\n          "+e._s(e.$t("dashboard.client.setting.screenParameter",{screenName:n.screen}))+"\n        ")],1),e._v(" "),t("div",{staticClass:"setting-container"},[t("b-field",{attrs:{label:e.$t("dashboard.client.setting.remark")}},[t("b-input",{attrs:{placeholder:e.$t("dashboard.client.setting.remarkTips")},model:{value:n.remark,callback:function(t){e.$set(n,"remark",t)},expression:"item.remark"}})],1),e._v(" "),t("b-field",{attrs:{label:e.$t("dashboard.client.setting.whenAppMaximized")}},[t("b-select",{attrs:{placeholder:""},model:{value:n.whenAppMaximized,callback:function(t){e.$set(n,"whenAppMaximized",t)},expression:"item.whenAppMaximized"}},[t("option",{domProps:{value:0}},[e._v("\n                "+e._s(e.$t("common.pause"))+"\n              ")]),e._v(" "),t("option",{domProps:{value:1}},[e._v(e._s(e.$t("common.stop")))]),e._v(" "),t("option",{domProps:{value:2}},[e._v("\n                "+e._s(e.$t("common.play"))+"\n              ")])])],1)],1),e._v(" "),t("hr",{staticClass:"is-medium"})])})),0),e._v(" "),t("b-loading",{attrs:{closable:!1},model:{value:e.isLoadingSetting,callback:function(t){e.isLoadingSetting=t},expression:"isLoadingSetting"}})],1),e._v(" "),t("b-field",[t("p",{staticClass:"control"},[t("button",{staticClass:"button is-primary",on:{click:e.onSaveClick}},[e._v("\n        "+e._s(e.$t("common.save"))+"\n      ")])])])],1)}),[],!1,null,"1fce71ae",null);t.default=component.exports}}]);