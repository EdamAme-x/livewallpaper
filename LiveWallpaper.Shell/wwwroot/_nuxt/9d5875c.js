(window.webpackJsonp=window.webpackJsonp||[]).push([[21,9,14],{383:function(e,t,n){e.exports={}},389:function(e,t,n){"use strict";n.r(t);n(22);var l=n(1),o=(n(29),n(10),{data:function(){return{innerFile:this.file,innerProgress:0,fileUploadedPath:void 0,tokenSource:void 0,fileType:null}},props:["file","url","deleteTitle","deleteMessage","deleteConfirmText","deleteCancelText","uploadDir"],watch:{file:function(e,t){e&&!this.innerFile&&(this.innerFile={name:e,fake:!0},this.innerProgress=100)},innerFile:function(e,t){if(!e||!e.fake){if(e&&t){for(var n=["lastModified","name","size","type "],l=0,o=0,r=n;o<r.length;o++){var c=r[o];if(e[c]!=t[c])break;l++}if(l==n.length)return}e&&this.upload(e)}}},methods:{_uploadProgressCallback:function(e){this.innerProgress=Math.round(100*e.loaded/e.total),console.log(this.innerProgress,e.loaded,e.total)},upload:function(e){var t=this;this.innerProgress=0,this.fileType=e.type,this.fileType||e.name.indexOf(".flv")>=0&&(this.fileType="video/flv"),console.log("fileType",this.fileType),new Promise((function(n,l){var o={onUploadProgress:t._uploadProgressCallback,resolve:n,reject:l};t.tokenSource=t.$local.getApiInstance().uploadFile(t.$axios,e,t.uploadDir,o)})).then((function(e){t.$emit("uploaded",e)})).catch((function(e){return t.$local.handleClientApiException(t,e)})).finally((function(){t.tokenSource=null}))},stopUpload:function(){var e,t=this;this.$buefy.dialog.confirm({title:this.deleteTitle,message:this.deleteMessage,confirmText:this.deleteConfirmText,cancelText:this.deleteCancelText,type:"is-danger",hasIcon:!0,onConfirm:(e=Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.tokenSource&&t.tokenSource.cancel("Operation canceled by the user."),t.innerProgress=0,t.$emit("cancelled"),t.innerFile=null;case 4:case"end":return e.stop()}}),e)}))),function(){return e.apply(this,arguments)}),onCancel:function(){}})},cleanFile:function(){this.innerFile=null}}}),r=o,c=n(24),component=Object(c.a)(r,(function(){var e=this,t=e._self._c;return t("b-field",[t("b-field",{staticClass:"file is-primary",class:{"has-name":!!e.innerFile}},[t("b-upload",{staticClass:"file-label",attrs:{"drag-drop":"",disabled:!!e.innerFile,accept:"image/*,video/*,.flv"},model:{value:e.innerFile,callback:function(t){e.innerFile=t},expression:"innerFile"}},[t("span",{staticClass:"file-cta"},[t("b-icon",{staticClass:"file-icon",attrs:{pack:"fas",icon:"upload"}}),e._v(" "),t("span",{staticClass:"file-label"},[e._v(e._s(e.$t("dashboard.client.editor.loadlUploadTips")))])],1)])],1),e._v(" "),e.innerFile?t("div",{staticClass:"columns"},[t("div",{staticClass:"column is-11"},[t("b-progress",{attrs:{type:"is-info",value:e.innerProgress,"show-value":""}},[e._v("\n        "+e._s(e.innerFile.name)+"\n      ")])],1),e._v(" "),t("div",{staticClass:"column"},[t("button",{staticClass:"delete is-small",attrs:{type:"button"},on:{click:e.stopUpload}})])]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports},393:function(e,t,n){"use strict";n(383)},400:function(e,t,n){"use strict";n.r(t);n(21),n(41);var l=n(1),o=(n(29),n(46),n(10),{components:{},data:function(){return{sourceData:void 0,filePath:void 0,coverPath:null,fileType:void 0,title:void 0,description:void 0,isLoading:!1,tags:[],wallpaperDir:void 0}},props:{wallpapersRouterName:{type:String,default:"index"}},computed:{isEditing:function(){var e=this.sourceData;return e?this.filePath!=e.filePath||this.fileType!=e.fileType||this.title!=e.title||this.description!=e.description||this.coverPath!=e.coverPath||this.$refs.uploader.uploading:this.filePath||this.fileType||this.title||this.description||this.coverPath},canSave:function(){return this.filePath&&this.title}},beforeMount:function(){var e=this;window.addEventListener("beforeunload",this.preventNav),this.$once("hook:beforeDestroy",(function(){window.removeEventListener("beforeunload",e.preventNav)}))},watch:{coverPath:function(e,t){console.log(this.filePath),t&&this.filePath&&this.$local.getApiInstance().deleteFiles([t])}},methods:{preventNav:function(e){this.isEditing&&(e.preventDefault(),e.returnValue="")},setUIData:function(e){var t,n,l,o,r=e?e.info:{},c=e?e.runningData:null;this.filePath=null,this.coverPath=null,c&&(this.filePath=e.runningData.absolutePath,this.coverPath="".concat(e.runningData.dir,"\\").concat(r.preview)),this.fileType=null!==(t=r.type)&&void 0!==t?t:null,this.title=null!==(n=r.title)&&void 0!==n?n:null,this.description=null!==(l=r.description)&&void 0!==l?l:null,this.tags=null!==(o=r.tags)&&void 0!==o?o:[],this.$refs.uploader&&this.$refs.uploader.cleanFile()},onSaveLocalClick:function(){var e=this;this.isLoading=!0,this.coverPath||"image"!==this.fileType||(this.coverPath=this.filePath);var t={title:this.title,description:this.description,file:this.$local.substrLastIndexOf(this.filePath,"\\"),preview:this.$local.substrLastIndexOf(this.coverPath,"\\"),type:this.fileType,tags:this.tags};console.log("savelocal",t),this.$local.getApiInstance().updateProjectInfo(this.wallpaperDir,t).then((function(t){e.$buefy.dialog.confirm({canCancel:["button"],message:e.$t("common.createSuccess"),type:"is-success",cancelText:e.$t("common.ok"),confirmText:e.$t("common.viewNow"),onConfirm:function(){e.sourceData=null,e.setUIData(),e.$router.push(e.localePath({name:e.wallpapersRouterName}))},onCancel:function(){e.sourceData=null,e.initPage()}})})).catch((function(t){return e.$local.handleClientApiException(e,t)})).finally(this.hideLoading)},hideLoading:function(){this.isLoading=!1},onUploaderCancelled:function(){var e=this;this.filePath&&(this.isLoading=!0,this.$local.getApiInstance().deleteFiles([this.filePath,this.coverPath]).then((function(t){e.filePath=null,e.coverPath=null,e.fileType=null,e.$buefy.toast.open({message:e.$t("dashboard.client.editor.uploadCancelled"),queue:!1})})).catch((function(t){return e.$local.handleClientApiException(e,t)})).finally(this.hideLoading))},onuploaded:function(e){var t=this;return Object(l.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.$buefy.toast.open({message:t.$t("common.uploaded"),type:"is-success",queue:!1}),t.fileType=t.$local.substrToLastIndex(t.$refs.uploader.fileType,"/"),console.log(t.fileType),t.filePath=e.data,t.title||(t.title=t.$local.substrLastIndexOf(t.filePath,"\\"));case 5:case"end":return n.stop()}}),n)})))()},onCoverUploaded:function(e){this.coverPath=e},onSelectorSelected:function(path){var e=this;if(path){this.isLoading=!0;var t="".concat(this.wallpaperDir,"\\preview.png");this.$local.getApiInstance().moveFile(path,t,!1).then((function(){e.coverPath=t})).catch((function(t){return e.$local.handleClientApiException(e,t)})).finally(this.hideLoading)}},initPage:function(path){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var n,l,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,n=null,e.isLoading=!0,!path){t.next=9;break}return t.next=6,e.$local.getApiInstance().getWallpaper(path);case 6:l=t.sent,(n=l.data)||alert("Wallpaper doesn't exist");case 9:if(e.setUIData(n),!n){t.next=15;break}e.wallpaperDir=n.runningData.dir,e.sourceData={filePath:e.filePath,fileType:e.fileType,title:e.title,description:e.description,coverPath:e.coverPath},t.next=20;break;case 15:return t.next=17,e.$local.getApiInstance().getDraftDir();case 17:o=t.sent,console.log("draftDir",o.data),e.wallpaperDir=o.data;case 20:t.next=25;break;case 22:t.prev=22,t.t0=t.catch(0),e.$local.handleClientApiException(e,t.t0);case 25:return t.prev=25,e.hideLoading(),t.finish(25);case 28:case"end":return t.stop()}}),t,null,[[0,22,25,28]])})))()},beforeRouteLeave:function(e,t,n){this.isEditing&&!window.confirm(this.$t("dashboard.client.editor.leaveTips"))||n()}},created:function(){},fetch:function(){this.initPage(this.$route.params.id)},fetchOnServer:!1}),r=(n(393),n(24)),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"container main"},[t("section",[t("b-field",{attrs:{label:e.$t("common.localWallpaper"),message:e.$t("dashboard.client.editor.localUploadMessage")}},[t("Uploader",{ref:"uploader",attrs:{file:e.filePath,uploadDir:e.wallpaperDir,deleteTitle:this.$t("local.deletingWallpaper"),deleteMessage:this.$t("local.deletingWallpaperConfirmMessage",{delete:e.$t("common.delete").toLowerCase(),name:this.title}),deleteConfirmText:e.$t("common.delete"),deleteCancelText:e.$t("common.cancel")},on:{cancelled:e.onUploaderCancelled,uploaded:e.onuploaded}})],1),e._v(" "),e.fileType&&"image"!=e.fileType?t("b-field",{attrs:{label:e.$t("common.cover")+" ("+e.$t("common.optional")+")"}},[t("Cover",{attrs:{coverPath:e.coverPath,videoPath:e.filePath,uploadDir:e.wallpaperDir,showSelector:e.fileType&&"video"===e.fileType},on:{uploaded:e.onCoverUploaded,selected:e.onSelectorSelected}})],1):e._e(),e._v(" "),t("b-field",{attrs:{label:e.$t("dashboard.client.editor.title")}},[t("b-input",{attrs:{placeholder:e.$t("dashboard.client.editor.titlePlaceholder")},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}})],1),e._v(" "),t("b-field",{attrs:{label:e.$t("dashboard.client.editor.description")}},[t("b-input",{attrs:{placeholder:e.$t("dashboard.client.editor.descriptionPlaceholder"),maxlength:"200",type:"textarea"},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}})],1),e._v(" "),t("b-field",{attrs:{label:e.$t("dashboard.client.editor.tag")}},[t("b-taginput",{attrs:{autocomplete:"","allow-new":!0,maxlength:20,maxtags:10,"open-on-focus":!1,field:"user.first_name","icon-pack":"fas",icon:"tags",placeholder:e.$t("dashboard.client.editor.tagPlaceholder")},model:{value:e.tags,callback:function(t){e.tags=t},expression:"tags"}})],1),e._v(" "),t("hr"),e._v(" "),t("b-field",[t("section",{staticClass:"b-tooltips"},[t("button",{staticClass:"button is-primary",attrs:{disabled:!e.canSave},on:{click:e.onSaveLocalClick}},[e._v("\n          "+e._s(e.$t("common.save"))+"\n        ")])])])],1),e._v(" "),t("client-only",[t("b-loading",{attrs:{closable:!1},model:{value:e.isLoading,callback:function(t){e.isLoading=t},expression:"isLoading"}})],1)],1)}),[],!1,null,"2d83af49",null);t.default=component.exports;installComponents(component,{Uploader:n(389).default,Cover:n(401).default})},416:function(e,t,n){"use strict";n.r(t);var l={name:"WallpaperEditor",layout:"dashboard",beforeRouteLeave:function(e,t,n){this.$refs.editor.beforeRouteLeave(e,t,n)}},o=n(24),component=Object(o.a)(l,(function(){return(0,this._self._c)("Editor",{ref:"editor",attrs:{wallpapersRouterName:"index"}})}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Editor:n(400).default})}}]);