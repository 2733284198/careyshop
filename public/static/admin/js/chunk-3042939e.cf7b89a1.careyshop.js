(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3042939e","chunk-2d0cc263"],{"2af7":function(e,t,a){"use strict";function i(e,t,a,i){return new(a||(a=Promise))((function(l,s){function n(e){try{o(i.next(e))}catch(e){s(e)}}function r(e){try{o(i.throw(e))}catch(e){s(e)}}function o(e){e.done?l(e.value):new a((function(t){t(e.value)})).then(n,r)}o((i=i.apply(e,t||[])).next())}))}function l(e,t){var a,i,l,s,n={label:0,sent:function(){if(1&l[0])throw l[1];return l[1]},trys:[],ops:[]};return s={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function r(s){return function(r){return function(s){if(a)throw new TypeError("Generator is already executing.");for(;n;)try{if(a=1,i&&(l=2&s[0]?i.return:s[0]?i.throw||((l=i.return)&&l.call(i),0):i.next)&&!(l=l.call(i,s[1])).done)return l;switch(i=0,l&&(s=[2&s[0],l.value]),s[0]){case 0:case 1:l=s;break;case 4:return n.label++,{value:s[1],done:!1};case 5:n.label++,i=s[1],s=[0];continue;case 7:s=n.ops.pop(),n.trys.pop();continue;default:if(!(l=(l=n.trys).length>0&&l[l.length-1])&&(6===s[0]||2===s[0])){n=0;continue}if(3===s[0]&&(!l||s[1]>l[0]&&s[1]<l[3])){n.label=s[1];break}if(6===s[0]&&n.label<l[1]){n.label=l[1],l=s;break}if(l&&n.label<l[2]){n.label=l[2],n.ops.push(s);break}l[2]&&n.ops.pop(),n.trys.pop();continue}s=t.call(e,n)}catch(e){s=[6,e],i=0}finally{a=l=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,r])}}}a.d(t,"a",(function(){return f}));var s=["text/plain","text/html"],n=function(){(console.warn||console.log).call(arguments)}.bind(console,"[clipboard-polyfill]"),r=!0,o=function(){function e(){this.m={}}return e.prototype.setData=function(e,t){r&&-1===s.indexOf(e)&&n("Unknown data type: "+e,"Call clipboard.suppressWarnings() to suppress this warning."),this.m[e]=t},e.prototype.getData=function(e){return this.m[e]},e.prototype.forEach=function(e){for(var t in this.m)e(this.m[t],t)},e}(),c=function(e){},m=!0,u=function(){(console.warn||console.log).apply(console,arguments)}.bind("[clipboard-polyfill]"),d="text/plain";function p(e){return i(this,void 0,void 0,(function(){var t;return l(this,(function(a){if(m&&!e.getData(d)&&u("clipboard.write() was called without a `text/plain` data type. On some platforms, this may result in an empty clipboard. Call clipboard.suppressWarnings() to suppress this warning."),x()){if(function(e){var t=e.getData(d);if(void 0!==t)return window.clipboardData.setData("Text",t);throw new Error("No `text/plain` value was specified.")}(e))return[2];throw new Error("Copying failed, possibly because the user rejected it.")}if(h(e))return c("regular execCopy worked"),[2];if(navigator.userAgent.indexOf("Edge")>-1)return c('UA "Edge" => assuming success'),[2];if(g(document.body,e))return c("copyUsingTempSelection worked"),[2];if(function(e){var t=document.createElement("div");t.setAttribute("style","-webkit-user-select: text !important"),t.textContent="temporary element",document.body.appendChild(t);var a=g(t,e);return document.body.removeChild(t),a}(e))return c("copyUsingTempElem worked"),[2];if(void 0!==(t=e.getData(d))&&function(e){c("copyTextUsingDOM");var t=document.createElement("div");t.setAttribute("style","-webkit-user-select: text !important");var a=t;t.attachShadow&&(c("Using shadow DOM."),a=t.attachShadow({mode:"open"}));var i=document.createElement("span");i.innerText=e,a.appendChild(i),document.body.appendChild(t),v(i);var l=document.execCommand("copy");return _(),document.body.removeChild(t),l}(t))return c("copyTextUsingDOM worked"),[2];throw new Error("Copy command failed.")}))}))}function f(e){return i(this,void 0,void 0,(function(){return l(this,(function(t){return navigator.clipboard&&navigator.clipboard.writeText?(c("Using `navigator.clipboard.writeText()`."),[2,navigator.clipboard.writeText(e)]):[2,p(y(e))]}))}))}var b=function(){this.success=!1};function h(e){var t=new b,a=function(e,t,a){c("listener called"),e.success=!0,t.forEach((function(t,i){var l=a.clipboardData;l.setData(i,t),i===d&&l.getData(i)!==t&&(c("setting text/plain failed"),e.success=!1)})),a.preventDefault()}.bind(this,t,e);document.addEventListener("copy",a);try{document.execCommand("copy")}finally{document.removeEventListener("copy",a)}return t.success}function g(e,t){v(e);var a=h(t);return _(),a}function v(e){var t=document.getSelection();if(t){var a=document.createRange();a.selectNodeContents(e),t.removeAllRanges(),t.addRange(a)}}function _(){var e=document.getSelection();e&&e.removeAllRanges()}function y(e){var t=new o;return t.setData(d,e),t}function x(){return"undefined"==typeof ClipboardEvent&&void 0!==window.clipboardData&&void 0!==window.clipboardData.setData}},"3e66":function(e,t,a){"use strict";var i=a("c994"),l=a.n(i);l.a},"4d63":function(e,t,a){var i=a("83ab"),l=a("da84"),s=a("94ca"),n=a("7156"),r=a("9bf2").f,o=a("241c").f,c=a("44e7"),m=a("ad6d"),u=a("9f7f"),d=a("6eeb"),p=a("d039"),f=a("69f3").set,b=a("2626"),h=a("b622"),g=h("match"),v=l.RegExp,_=v.prototype,y=/a/g,x=/a/g,F=new v(y)!==y,w=u.UNSUPPORTED_Y,k=i&&s("RegExp",!F||w||p((function(){return x[g]=!1,v(y)!=y||v(x)==x||"/a/i"!=v(y,"i")})));if(k){var $=function(e,t){var a,i=this instanceof $,l=c(e),s=void 0===t;if(!i&&l&&e.constructor===$&&s)return e;F?l&&!s&&(e=e.source):e instanceof $&&(s&&(t=m.call(e)),e=e.source),w&&(a=!!t&&t.indexOf("y")>-1,a&&(t=t.replace(/y/g,"")));var r=n(F?new v(e,t):v(e,t),i?this:_,$);return w&&a&&f(r,{sticky:a}),r},S=function(e){e in $||r($,e,{configurable:!0,get:function(){return v[e]},set:function(t){v[e]=t}})},T=o(v),D=0;while(T.length>D)S(T[D++]);_.constructor=$,$.prototype=_,d(l,"RegExp",$)}b("RegExp")},c994:function(e,t,a){},d908:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"cs-p"},[a("el-form",{attrs:{inline:!0,size:"small"}},[a("el-form-item",[a("el-button-group",[e.auth.sms_setting?a("el-button",{attrs:{icon:"el-icon-postcard",disabled:e.loading},on:{click:e.handleOpenSms}},[e._v("短信配置")]):e._e(),e.auth.email_setting?a("el-button",{attrs:{icon:"el-icon-message",disabled:e.loading},on:{click:e.handleOpenEmail}},[e._v("邮件配置")]):e._e()],1)],1),a("el-form-item",[a("el-button-group",[e.auth.enable?a("el-button",{attrs:{icon:"el-icon-check",disabled:e.loading},on:{click:function(t){return e.handleStatus(null,1,!0)}}},[e._v("启用")]):e._e(),e.auth.disable?a("el-button",{attrs:{icon:"el-icon-close",disabled:e.loading},on:{click:function(t){return e.handleStatus(null,0,!0)}}},[e._v("禁用")]):e._e()],1)],1),a("cs-help",{staticStyle:{"padding-bottom":"19px"},attrs:{router:e.$route.path}})],1),a("el-tabs",{staticClass:"tab-box",attrs:{value:e.tplCode},on:{"tab-click":e.handleClick}},e._l(e.tplType,(function(t,i){return a("el-tab-pane",{key:i,attrs:{label:t,name:i}},[i.toString()===e.tplCode?a("el-table",{attrs:{data:e.currentTableData,"highlight-current-row":!0},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{align:"center",type:"selection",width:"55"}}),a("el-table-column",{attrs:{label:"名称",prop:"name","min-width":"500"}}),a("el-table-column",{attrs:{label:"状态",prop:"status",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{style:e.auth.enable||e.auth.disable?"cursor: pointer;":"",attrs:{size:"mini",type:e.statusMap[t.row.status].type,effect:e.auth.enable||e.auth.disable?"light":"plain"},nativeOn:{click:function(a){return e.handleStatus(t.$index)}}},[e._v(" "+e._s(e.statusMap[t.row.status].text)+" ")])]}}],null,!0)}),a("el-table-column",{attrs:{label:"操作",align:"center","min-width":"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.auth.tpl?a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return e.handleUpdate(t.$index)}}},[e._v("编辑模板")]):e._e()]}}],null,!0)})],1):e._e()],1)})),1),a("el-dialog",{attrs:{title:"短信配置",visible:e.smsVisible,"append-to-body":!0,"close-on-click-modal":!1,width:"600px"},on:{"update:visible":function(t){e.smsVisible=t}}},[a("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.smsLoading,expression:"smsLoading"}],ref:"smsForm",attrs:{model:e.smsForm,rules:e.smsRules,"label-width":"140px"}},[a("el-form-item",{attrs:{label:"Access Key ID",prop:"key_id"}},[a("el-input",{attrs:{placeholder:"Access Key ID",clearable:!0},model:{value:e.smsForm.key_id,callback:function(t){e.$set(e.smsForm,"key_id",t)},expression:"smsForm.key_id"}})],1),a("el-form-item",{attrs:{label:"Access Key Secret",prop:"key_secret"}},[a("el-input",{attrs:{placeholder:"Access Key Secret",clearable:!0},model:{value:e.smsForm.key_secret,callback:function(t){e.$set(e.smsForm,"key_secret",t)},expression:"smsForm.key_secret"}})],1),a("el-form-item",{attrs:{label:"启用状态",prop:"status"}},[a("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:e.smsForm.status,callback:function(t){e.$set(e.smsForm,"status",t)},expression:"smsForm.status"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.smsVisible=!1}}},[e._v("取消")]),a("el-button",{attrs:{type:"primary",loading:e.smsButton,size:"small"},on:{click:e.saveSmsData}},[e._v("修改")])],1)],1),a("el-dialog",{attrs:{title:"邮件配置",visible:e.emailVisible,"append-to-body":!0,"close-on-click-modal":!1,width:"600px"},on:{"update:visible":function(t){e.emailVisible=t}}},[a("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.emailLoading,expression:"emailLoading"}],ref:"emailForm",attrs:{model:e.emailForm,rules:e.emailRules,"label-width":"140px"}},[a("el-form-item",{attrs:{label:"SMTP服务器",prop:"email_host"}},[a("el-input",{attrs:{placeholder:"SMTP服务器",clearable:!0},model:{value:e.emailForm.email_host,callback:function(t){e.$set(e.emailForm,"email_host",t)},expression:"emailForm.email_host"}})],1),a("el-form-item",{attrs:{label:"SMTP端口",prop:"email_port"}},[a("el-input",{attrs:{placeholder:"SMTP端口",clearable:!0},model:{value:e.emailForm.email_port,callback:function(t){e.$set(e.emailForm,"email_port",t)},expression:"emailForm.email_port"}})],1),a("el-form-item",{attrs:{label:"发信人邮箱地址",prop:"email_addr"}},[a("el-input",{attrs:{placeholder:"发信人邮箱地址",clearable:!0},model:{value:e.emailForm.email_addr,callback:function(t){e.$set(e.emailForm,"email_addr",t)},expression:"emailForm.email_addr"}})],1),a("el-form-item",{attrs:{label:"SMTP用户名",prop:"email_id"}},[a("el-input",{attrs:{placeholder:"SMTP身份验证用户名",clearable:!0},model:{value:e.emailForm.email_id,callback:function(t){e.$set(e.emailForm,"email_id",t)},expression:"emailForm.email_id"}})],1),a("el-form-item",{attrs:{label:"SMTP密码",prop:"email_pass"}},[a("el-input",{attrs:{placeholder:"SMTP身份验证码",clearable:!0},model:{value:e.emailForm.email_pass,callback:function(t){e.$set(e.emailForm,"email_pass",t)},expression:"emailForm.email_pass"}})],1),a("el-form-item",{attrs:{label:"使用安全链接",prop:"email_ssl"}},[a("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:e.smsForm.email_ssl,callback:function(t){e.$set(e.smsForm,"email_ssl",t)},expression:"smsForm.email_ssl"}})],1),a("el-form-item",{attrs:{label:"启用状态",prop:"status"}},[a("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:e.smsForm.status,callback:function(t){e.$set(e.smsForm,"status",t)},expression:"smsForm.status"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.emailVisible=!1}}},[e._v("取消")]),a("el-button",{attrs:{type:"primary",loading:e.emailButton,size:"small"},on:{click:e.saveEmailData}},[e._v("修改")])],1)],1),a("el-dialog",{attrs:{title:"编辑 "+e.tplType[e.tplForm.code],visible:e.tplVisible,"append-to-body":!0,"close-on-click-modal":!1,width:"760px"},on:{"update:visible":function(t){e.tplVisible=t}}},[a("el-form",{ref:"tplForm",attrs:{model:e.tplForm,rules:e.tplRules,"label-width":"90px"}},["sms"===e.tplForm.code?a("el-form-item",{attrs:{label:"模板编号",prop:"sms_code"}},[a("el-input",{attrs:{placeholder:"阿里云短信模板编号",clearable:!0},model:{value:e.tplForm.sms_code,callback:function(t){e.$set(e.tplForm,"sms_code",t)},expression:"tplForm.sms_code"}})],1):e._e(),"sms"===e.tplForm.code?a("el-form-item",{attrs:{label:"短信签名",prop:"sms_sign"}},[a("el-input",{attrs:{placeholder:"阿里云短信签名",clearable:!0},model:{value:e.tplForm.sms_sign,callback:function(t){e.$set(e.tplForm,"sms_sign",t)},expression:"tplForm.sms_sign"}})],1):e._e(),"email"===e.tplForm.code?a("el-form-item",{attrs:{label:"系统标题",prop:"title"}},[a("el-input",{attrs:{placeholder:"通知系统标题",maxlength:"200","show-word-limit":!0,clearable:!0},model:{value:e.tplForm.title,callback:function(t){e.$set(e.tplForm,"title",t)},expression:"tplForm.title"}})],1):e._e(),a("el-form-item",{attrs:{label:"系统模板",prop:"template"}},[a("div",{staticClass:"cs-mb-10"},e._l(e.tplForm.get_notice_item,(function(t,i){return a("el-tag",{key:i,staticClass:"cs-cp cs-mr-10",attrs:{"disable-transitions":!0,effect:"plain"},on:{click:function(a){return e.insertVariables(t.item_name)}}},[e._v(" "+e._s(t.item_name)+" ")])})),1),"sms"===e.tplForm.code?a("el-input",{ref:"textarea",attrs:{type:"textarea",placeholder:"通知系统模板",autosize:{minRows:5},"show-word-limit":!0,maxlength:"500"},model:{value:e.tplForm.template,callback:function(t){e.$set(e.tplForm,"template",t)},expression:"tplForm.template"}}):e.tplVisible?a("cs-tinymce",{ref:"tinymce",attrs:{height:180},model:{value:e.tplForm.template,callback:function(t){e.$set(e.tplForm,"template",t)},expression:"tplForm.template"}}):e._e(),"sms"===e.tplForm.code?a("el-button",{attrs:{type:"text"},on:{click:e.copyAliyunSms}},[e._v("复制阿里云短信模板")]):e._e()],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.tplVisible=!1}}},[e._v("取消")]),a("el-button",{attrs:{type:"primary",loading:e.tplButton,size:"small"},on:{click:e.saveTplData}},[e._v("修改")])],1)],1)],1)},l=[],s=(a("4160"),a("c975"),a("b0c0"),a("d3b7"),a("4d63"),a("ac1f"),a("25f0"),a("5319"),a("159b"),a("5530")),n=a("2af7"),r=a("bc07"),o="/v1/notice.html";function c(e){return Object(r["a"])({url:o,method:"post",data:{method:"get.notice.item",code:e}})}function m(e){return Object(r["a"])({url:o,method:"post",data:Object(s["a"])({method:"set.notice.item"},e)})}var u=a("71f2"),d={components:{csTinymce:function(){return Promise.all([a.e("chunk-4533fad6"),a.e("chunk-9b341698")]).then(a.bind(null,"4b93"))}},props:{loading:{default:!1},tplCode:{default:"sms"},tableData:{default:function(){return[]}}},data:function(){return{currentTableData:[],multipleSelection:[],auth:{sms_setting:!1,email_setting:!1,enable:!1,disable:!1,tpl:!1},tplType:{sms:"短信模板",email:"邮件模板"},statusMap:{0:{text:"禁用",type:"danger"},1:{text:"启用",type:"success"},2:{text:"...",type:"info"}},smsVisible:!1,smsLoading:!1,smsButton:!1,smsForm:{key_id:void 0,key_secret:void 0,status:"1"},smsRules:{key_id:[{required:!0,message:"Access Key ID 不能为空",trigger:"blur"},{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}],key_secret:[{required:!0,message:"Access Key Secret 不能为空",trigger:"blur"},{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}]},emailVisible:!1,emailLoading:!1,emailButton:!1,emailForm:{email_host:void 0,email_port:void 0,email_addr:void 0,email_id:void 0,email_pass:void 0,email_ssl:"0",status:"1"},emailRules:{email_host:[{required:!0,message:"SMTP服务器不能为空",trigger:"blur"},{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}],email_port:[{required:!0,message:"SMTP端口不能为空",trigger:"blur"},{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}],email_addr:[{required:!0,message:"发信人邮箱地址不能为空",trigger:"blur"},{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}],email_id:[{required:!0,message:"SMTP身份验证用户名不能为空",trigger:"blur"},{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}],email_pass:[{required:!0,message:"SMTP身份验证码不能为空",trigger:"blur"},{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}]},tplVisible:!1,tplButton:!1,tplForm:{},tplRules:{sms_code:[{required:!0,message:"阿里云短信模板编号不能为空",trigger:"blur"},{max:20,message:"长度不能大于 20 个字符",trigger:"blur"}],sms_sign:[{required:!0,message:"阿里云短信签名不能为空",trigger:"blur"},{min:2,max:12,message:"长度在 2 到 12 个字符",trigger:"blur"}],title:[{required:!0,message:"通知系统标题不能为空",trigger:"blur"},{max:200,message:"长度不能大于 200 个字符",trigger:"blur"}]}}},watch:{tableData:{handler:function(e){this.currentTableData=e},immediate:!0}},mounted:function(){this._validationAuth()},methods:{_validationAuth:function(){this.auth.sms_setting=this.$permission("/setting/setting/template/sms_setting"),this.auth.email_setting=this.$permission("/setting/setting/template/email_setting"),this.auth.enable=this.$permission("/setting/setting/template/enable"),this.auth.disable=this.$permission("/setting/setting/template/disable"),this.auth.tpl=this.$permission("/setting/setting/template/tpl")},_getIdList:function(e){null===e&&(e=this.multipleSelection);var t=[];return Array.isArray(e)?e.forEach((function(e){t.push(e.notice_tpl_id)})):t.push(this.currentTableData[e].notice_tpl_id),t},handleSelectionChange:function(e){this.multipleSelection=e},handleOpenSms:function(){var e=this;this.smsForm={key_id:void 0,key_secret:void 0,status:"1"},this.$nextTick((function(){e.$refs.smsForm&&e.$refs.smsForm.clearValidate(),e.smsButton=!1,e.smsVisible=!0,e.smsLoading=!0})),c("sms").then((function(t){var a=t.data.value;for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e.smsForm[i]=a[i].value)})).finally((function(){e.smsLoading=!1}))},saveSmsData:function(){var e=this;this.$refs.smsForm.validate((function(t){t&&(e.smsButton=!0,m(Object(s["a"])({code:"sms"},e.smsForm)).then((function(){e.smsVisible=!1,e.$message.success("操作成功")})).catch((function(){e.smsButton=!1})))}))},handleOpenEmail:function(){var e=this;this.emailForm={email_host:void 0,email_port:void 0,email_addr:void 0,email_id:void 0,email_pass:void 0,email_ssl:"0",status:"1"},this.$nextTick((function(){e.$refs.emailForm&&e.$refs.emailForm.clearValidate(),e.emailButton=!1,e.emailVisible=!0,e.emailLoading=!0})),c("email").then((function(t){var a=t.data.value;for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e.emailForm[i]=a[i].value)})).finally((function(){e.emailLoading=!1}))},saveEmailData:function(){var e=this;this.$refs.emailForm.validate((function(t){t&&(e.emailButton=!0,m(Object(s["a"])({code:"email"},e.emailForm)).then((function(){e.emailVisible=!1,e.$message.success("操作成功")})).catch((function(){e.emailButton=!1})))}))},handleClick:function(e){this.multipleSelection=[],this.$emit("update:tplCode",e.name)},handleStatus:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],l=this._getIdList(e);if(0!==l.length){if(!i){var n=this.currentTableData[e],r=n.status?0:1;if(n.status>1)return;if(0===r&&!this.auth.disable)return;if(1===r&&!this.auth.enable)return;return this.$set(this.currentTableData,e,Object(s["a"])(Object(s["a"])({},n),{},{status:2})),void o(l,r,this)}this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){o(l,a,t)})).catch((function(){}))}else this.$message.error("请选择要操作的数据");function o(e,t,a){Object(u["c"])(e,t).then((function(){a.currentTableData.forEach((function(i,l){-1!==e.indexOf(i.notice_tpl_id)&&a.$set(a.currentTableData,l,Object(s["a"])(Object(s["a"])({},i),{},{status:t}))})),a.$message.success("操作成功")}))}},handleUpdate:function(e){var t=this;this.currentIndex=e;var a=this.currentTableData[e];this.tplForm=Object(s["a"])(Object(s["a"])({},a),{},{sms_sign:"sms"===a.code?a.title:null}),this.$nextTick((function(){t.$refs.tplForm&&t.$refs.tplForm.clearValidate(),t.tplButton=!1,t.tplVisible=!0}))},saveTplData:function(){var e=this;this.$refs.tplForm.validate((function(t){t&&(e.tplButton=!0,Object(u["b"])(e.tplForm).then((function(t){e.$set(e.currentTableData,e.currentIndex,Object(s["a"])(Object(s["a"])({},e.currentTableData[e.currentIndex]),t.data)),e.tplVisible=!1,e.$message.success("操作成功")})).catch((function(){e.tplButton=!1})))}))},copyAliyunSms:function(){var e=this,t=this.tplForm.template,a=this.tplForm.get_notice_item;a.forEach((function(e){var a=new RegExp(e.item_name.toString(),"g");t=t.replace(a,"${".concat(e.replace_name,"}"))})),n["a"](t).then((function(){e.$message.success("已复制阿里云短信模板到剪贴板")})).catch((function(t){e.$message.error(t)}))},insertVariables:function(e){if("email"===this.tplForm.code&&this.$refs.tinymce&&this.$refs.tinymce.handleEditor.insertContent(e),"sms"===this.tplForm.code&&this.$refs.textarea){this.$refs.textarea.focus();var t=this.$refs.textarea.$el.children[0];if("number"===typeof t.selectionStart&&"number"===typeof t.selectionEnd){var a=t.selectionStart,i=t.selectionEnd,l=this.tplForm.template;this.tplForm.template=l.substring(0,a)+e+l.substring(i,l.length)}else this.tplForm.template+=e}}}},p=d,f=(a("3e66"),a("2877")),b=Object(f["a"])(p,i,l,!1,null,"17254d77",null);t["default"]=b.exports}}]);