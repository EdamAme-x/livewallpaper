(window.webpackJsonp=window.webpackJsonp||[]).push([[1,6,7,8,13],{381:function(t,e,o){"use strict";o.r(e);var n=o(1),r=(o(29),o(10),{data:function(){return{isBusy:!1,enableCustomUrl:!1,downloadUrl:this.defaultUrl,stoping:!1,innerShow:this.show}},props:["show","defaultUrl","progress","completed","successed"],watch:{innerShow:function(t,e){this.$emit("update:show",t)},show:function(t,e){this.innerShow=t},defaultUrl:function(t,e){console.log(t,e),t&&!this.downloadUrl&&(this.downloadUrl=t)}},computed:{downloading:function(){return this.progress>0||this.progress<100}},methods:{start:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isBusy){e.next=2;break}return e.abrupt("return");case 2:return t.isBusy=!0,o=new Promise((function(e){return t.$emit("start",t.downloadUrl,e)})),e.next=6,o;case 6:e.sent,t.isBusy=!1;case 8:case"end":return e.stop()}}),e)})))()},stop:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.stoping=!0,o=new Promise((function(e){return t.$emit("stop",e)})),e.next=4,o;case 4:t.stoping=!1;case 5:case"end":return e.stop()}}),e)})))()}}}),l=o(24),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("b-modal",{model:{value:t.innerShow,callback:function(e){t.innerShow=e},expression:"innerShow"}},[e("div",{staticClass:"card"},[e("header",{staticClass:"card-header"},[e("p",{staticClass:"card-header-title"},[t._t("header")],2),t._v(" "),e("b-switch",{attrs:{disabled:t.isBusy},model:{value:t.enableCustomUrl,callback:function(e){t.enableCustomUrl=e},expression:"enableCustomUrl"}},[t._v(t._s(t.$t("local.customUrlTip")))])],1),t._v(" "),e("div",{staticClass:"card-content"},[e("div",{staticClass:"content"},[t.enableCustomUrl?e("div",{staticClass:"columns subtitle"},[e("div",{staticClass:"column is-11"},[e("b-input",{attrs:{disabled:t.isBusy,placeholder:t.$t("local.customUrlPlaceholder"),"icon-pack":"fas","icon-right":"undo","icon-right-clickable":""},on:{"icon-right-click":function(e){t.downloadUrl=t.defaultUrl}},model:{value:t.downloadUrl,callback:function(e){t.downloadUrl=e},expression:"downloadUrl"}})],1),t._v(" "),e("div",{staticClass:"column"},[t._t("help")],2),t._v(" "),e("div",{staticClass:"column"})]):t._e(),t._v(" "),e("b-progress",{attrs:{value:t.progress,"show-value":"",type:t.completed?"is-success":"is-info"}},[t._t("text")],2)],1)]),t._v(" "),e("footer",{staticClass:"card-footer"},[e("div",{staticClass:"card-footer-item"}),t._v(" "),e("div",{staticClass:"card-footer-item"}),t._v(" "),t.successed?e("b-button",{staticClass:"card-footer-item",attrs:{type:"is-success"},on:{click:function(e){t.innerShow=!1}}},[t._v(t._s(t.$t("common.close")))]):t.isBusy?t.isBusy||t.downloading?e("b-button",{staticClass:"card-footer-item",attrs:{loading:t.stoping,disabled:t.stoping,type:"is-danger"},on:{click:t.stop}},[t._v(t._s(t.$t("common.stop"))+"\n      ")]):t._e():e("b-button",{staticClass:"card-footer-item",attrs:{type:"is-info"},on:{click:t.start}},[t._v("\n        "+t._s(t.$t("common.start"))+"\n      ")])],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:o(180).default,Footer:o(113).default})},384:function(t,e,o){t.exports={}},385:function(t,e,o){t.exports={}},390:function(t,e,o){"use strict";o.r(e);o(31),o(21),o(30),o(51),o(36),o(52);var n=o(1),r=o(19),l=(o(10),o(29),o(70));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var d=Object(l.a)("local"),f=(d.mapState,d.mapGetters),h=(d.mapActions,d.mapMutations,{computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},f(["serverHost"])),data:function(){return{show:!1,progress:0,completed:!1,successed:!1,type:void 0}},methods:{showModal:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.show=!0,!t.$refs.innerModal.isBusy){e.next=3;break}return e.abrupt("return");case 3:t.$refs.innerModal.start();case 4:case"end":return e.stop()}}),e)})))()},startCallback:function(t,e){var o=this,n=!1;this.$local.getApiInstance().setupFFmpeg(t,function(t){this.progress=t.percent,this.completed="completed"===t.typeStr,this.type=t.typeStr,this.completed&&(this.successed=t.successed)}.bind(this)).then((function(t){console.log(t),n=t})).catch((function(t){return o.$local.handleClientApiException(o,t)})).finally((function(){e(n)}))},stopCallback:function(t){var e=this;this.$local.getApiInstance().stopSetupFFmpeg().catch((function(t){return e.$local.handleClientApiException(e,t)})).finally(t)}}}),m=h,v=o(24),component=Object(v.a)(m,(function(){var t=this,e=t._self._c;return e("BaseProgressModal",{ref:"innerModal",attrs:{show:t.show,progress:t.progress,completed:t.completed,successed:t.successed,defaultUrl:"".concat(t.serverHost,"ffmpeg.7z")},on:{"update:show":function(e){t.show=e},start:t.startCallback,stop:t.stopCallback},scopedSlots:t._u([{key:"header",fn:function(){return[t._v(" "+t._s(t.$t("common.installFFmpeg"))+" ")]},proxy:!0},{key:"help",fn:function(){return[e("a",{staticClass:"button",attrs:{href:"https://github.com/giant-app/LiveWallpaper",target:"_blank"}},[e("b-icon",{attrs:{pack:"fa",icon:"question-circle"}})],1)]},proxy:!0},{key:"text",fn:function(){return["download"===t.type?[t._v("\n      "+t._s(t.$t("local.downloading",{progress:t.progress}))+"\n    ")]:"decompress"===t.type?[t._v(t._s(t.$t("local.unzipping",{progress:t.progress}))+"\n    ")]:t.completed&&t.successed?[t._v(t._s(t.$t("local.downloadComplete"))+"\n    ")]:[t._v(t._s(t.$t("local.waitStart")))]]},proxy:!0}])})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseProgressModal:o(381).default})},394:function(t,e,o){"use strict";o(384)},395:function(t,e,o){"use strict";o(385)},401:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{file:null,progress:0,innerCoverPath:this.coverPath,tokenSource:void 0,coverUrls:[],isGettingThumbnails:!1}},props:["uploadDir","showSelector","coverPath","videoPath"],watch:{coverPath:function(t,e){this.innerCoverPath=t}},methods:{selectorSelected:function(path){this.innerCoverPath=path,this.$emit("selected",path)},selectorLoadCompeted:function(t){this.innerCoverPath||(this.innerCoverPath=t[0],this.$emit("selected",t[0]))},uploadedCallback:function(t){this.$emit("uploaded",t)}}},r=o(24),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("b-field",[e("div",{staticClass:"columns",staticStyle:{"min-height":"135px"},attrs:{"is-vcentered":"","is-centered":""}},[e("div",{staticClass:"column is-one-fifth"},[e("CoverUploader",{attrs:{cover:t.innerCoverPath,uploadDir:t.uploadDir},on:{uploaded:t.uploadedCallback}})],1),t._v(" "),e("div",{staticClass:"column"},[t.showSelector?e("CoverSelector",{ref:"selector",attrs:{videoPath:t.videoPath},on:{selected:t.selectorSelected,loadCompeted:t.selectorLoadCompeted}}):t._e()],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CoverUploader:o(402).default,CoverSelector:o(403).default})},402:function(t,e,o){"use strict";o.r(e);o(46),o(10);var n={data:function(){return{file:null,progress:0,uploadedPath:this.cover,isloading:!1}},watch:{file:function(t,e){if(t&&e){for(var o=["lastModified","name","size","type "],n=0,r=0,l=o;r<l.length;r++){var c=l[r];if(t[c]!=e[c])break;n++}if(n==o.length)return}t&&this.upload(t)},cover:function(t,e){this.uploadedPath=t}},props:["url","uploadDir","cover"],methods:{upload:function(t){var e=this;this.isloading=!0,this.progress=0,new Promise((function(o,n){var r={onUploadProgress:e._uploadProgressCallback,resolve:o,reject:n};e.tokenSource=e.$local.getApiInstance().uploadFile(e.$axios,t,e.uploadDir,r)})).then((function(t){e.uploadedPath=t.data,e.$emit("uploaded",t.data)})).catch((function(t){return e.$local.handleClientApiException(e,t)})).finally((function(){e.tokenSource=null,e.isloading=!1}))}}},r=(o(394),o(24)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"uploader"},[e("div",{staticClass:"uploader-show"},[t.uploadedPath?e("img",{staticClass:"cover-preview-show",attrs:{src:"".concat(t.$local.getApiInstance().serverHost,"assets/image/?localpath=").concat(t.uploadedPath),alt:"cover-preview-show"}}):t._e(),t._v(" "),e("div",{staticClass:"tip"},[e("span",{staticClass:"tip-upload"},[e("b-field",{staticClass:"file is-primary"},[e("b-upload",{staticClass:"file-label",attrs:{accept:"image/jpeg, image/jpg, image/png"},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}},[e("span",{staticClass:"file-cta"},[e("span",{staticClass:"file-label"},[t._v(t._s(t.$t("common.uploadCover")))])])])],1)],1)])]),t._v(" "),e("b-loading",{attrs:{"is-full-page":!1},model:{value:t.isloading,callback:function(e){t.isloading=e},expression:"isloading"}})],1)}),[],!1,null,"3481ca37",null);e.default=component.exports},403:function(t,e,o){"use strict";o.r(e);o(46),o(10);var n={data:function(){return{selectedItem:null,isloading:!1,coverUrls:[],noFFMPEG:!1,errorMessage:void 0}},props:["videoPath"],watch:{videoPath:function(t,e){this.loadCovers()}},mounted:function(){this.loadCovers()},methods:{regenerate:function(){this.loadCovers()},loadCovers:function(){var t=this;!this.isloading&&this.videoPath&&(this.isloading=!0,this.$local.getApiInstance().getThumbnails(this.videoPath).then((function(e){e.ok?(t.coverUrls=e.data,t.selectedItem=t.coverUrls[0],t.$emit("loadCompeted",t.coverUrls)):"NoFFmpeg"===e.errorString?t.noFFMPEG=!0:t.errorMessage=e.message})).catch((function(e){return t.$local.handleClientApiException(t,e)})).finally((function(){t.isloading=!1})))},clickItem:function(t,e){this.selectedItem=t,this.$emit("selected",t)},showSetupModal:function(){this.$refs.setupModal.showModal()}}},r=(o(395),o(24)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"selector"},[e("div",{staticClass:"selector-deg"}),t._v(" "),t.isloading?t._e():e("div",{staticClass:"selector-items"},[t.coverUrls.length>0?t._l(t.coverUrls,(function(o,n){return e("div",{key:o,staticClass:"selector-item",class:{"selector-item-selected":t.selectedItem===o},style:{"background-image":"url("+"".concat(t.$local.getApiInstance().serverHost,"assets/image/?localpath=").concat(o)+")"},on:{click:function(e){return t.clickItem(o,n)}}},[t._v("\n        "+t._s(n)+"\n        "),t.selectedItem===o?e("img",{staticClass:"select_ai_img",attrs:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAwCAYAAAB9sggoAAAAAXNSR0IArs4c6QAAA19JREFUWAnNmM1rE0EUwN9s0tiWBi0oxIIfKNV4kCpi1YMe1Eu95dKD6D8giODVgxXtzYOi1Yseqg1CQL1qD4IeRYQKponSCO2xYoUUmq/d9b1dN9lkN5ud2dkkD5adnZ1977fvvX07Mwx6IZm1IahunQRNPQI6HAbQ8WB7sB0HhgfocdY1rnR+EjRtCjT9PBo/jRAxL9vhgr1a3g9VdgU9cBV0/ZAXSOu9cMDmfx4HVruFXkkhlNJq1M+1XLD0j2Og1mYR6JIf415j5IBlVrZDqXIXDV3DkEW8DPq9FxxsIZsCFZ6gwYRfo37GiYNl9BiUcvfRQ9f9GOIdIwaWLuyDWvk1JvYJXoN+x/ODLSwfxdC9Q6gxv0ZExvF9yi/zZ0HVP4UNRS8S9f02BKVr73H8kO9nAgz0F0ojfOQp2BHAFtejnUNJiW7kVPeg6A28wagkmF9fqInu5kpvMKpTIZYENyCrr32OmRX9jTWw22d3MPr3bZVzCCP1N8Pzcu6hNH/IPYOiF3B6zJi6qF9kzRJ4vGQf6yyw5nxKytTFboi33ewxmnlC9SuvkjDGN+cYTYe7JDeSo7A+PQ6F1EG4kBh2WG14zFg4QAFzq9HnGC6nY2ZiJ9ye2FVX9qtYgQNvV+rX1Gh4jFYzPYAiiPhAA4OuSWw9uMQKWVo9ZZm79+231ayfTTBajHKu++oafDbaQd1ZWoeHuQ2HFhOMVsghihfUzJLTW4TyHwyX7SGJCBShMKANjlLxb6e9BBFuUSiypUBpE/PLe4PDDeri7mGjBlEtoprUKkGgSFcUfZZEMG55fmYM9o4MGM89mEzA6LYIWPkSFIqURhEK96b4JRZprsP2gmlvW5rp67PArT6vM/7EadOMX2ax9jw61TwzcgMizbxQ9Ax+lbiTJyCP8xuGwU6PikCRTgVDiVuLYkKhIcPtRBSK9CmY/MJgpKAdXBAoEww3YqkRRAhuLvcHVE03DmrzJLqbbQYvsmWROuamTGYfJX9RpkJZuij5+w+MwSYlf/+BAaxiKPU1We6Xp0dZpBzLy1MoQxPTIBp5RqHsLzAGT+Hy+HdKftqj6A9h7AMMJm8SjAKDI5/Ra5XekmH4GJtDqCmYZgaLOXeZz35EsHNdhcOSgPZW0TeLlFMUPrv9f7vzJ3SudQKgAAAAAElFTkSuQmCC",alt:"select_ai_img"}}):t._e()])})):t.noFFMPEG?e("b-message",{attrs:{type:"is-warning"}},[e("div",{staticClass:"columns is-vcentered"},[t._v("\n        "+t._s(t.$t("common.needFFmpeg"))+"\n        "),e("b-button",{attrs:{type:"is-text"},on:{click:t.showSetupModal}},[t._v("\n          "+t._s(t.$t("common.clickToInstall"))+"\n        ")]),t._v(" "),e("b-button",{attrs:{type:"is-text"},on:{click:t.regenerate}},[t._v("\n          "+t._s(t.$t("common.regenerate"))+"\n        ")])],1)]):t.errorMessage?e("div",[e("b-message",{attrs:{type:"is-danger"}},[t._v("\n        "+t._s(t.errorMessage)+"\n      ")])],1):t._e()],2),t._v(" "),e("b-loading",{attrs:{"is-full-page":!1},model:{value:t.isloading,callback:function(e){t.isloading=e},expression:"isloading"}},[e("b-icon",{attrs:{pack:"fas",icon:"sync-alt",size:"is-large","custom-class":"fa-spin"}}),t._v(t._s(t.$t("common.generatingCover"))+"\n  ")],1),t._v(" "),e("SetupFFmpegModal",{ref:"setupModal"})],1)}),[],!1,null,"dec14d56",null);e.default=component.exports;installComponents(component,{SetupFFmpegModal:o(390).default})}}]);