(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-270af317"],{"2af7":function(e,t,i){"use strict";function n(e,t,i,n){return new(i||(i=Promise))((function(a,o){function r(e){try{s(n.next(e))}catch(e){o(e)}}function l(e){try{s(n.throw(e))}catch(e){o(e)}}function s(e){e.done?a(e.value):new i((function(t){t(e.value)})).then(r,l)}s((n=n.apply(e,t||[])).next())}))}function a(e,t){var i,n,a,o,r={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(i)throw new TypeError("Generator is already executing.");for(;r;)try{if(i=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return r.label++,{value:o[1],done:!1};case 5:r.label++,n=o[1],o=[0];continue;case 7:o=r.ops.pop(),r.trys.pop();continue;default:if(!(a=(a=r.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){r=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){r.label=o[1];break}if(6===o[0]&&r.label<a[1]){r.label=a[1],a=o;break}if(a&&r.label<a[2]){r.label=a[2],r.ops.push(o);break}a[2]&&r.ops.pop(),r.trys.pop();continue}o=t.call(e,r)}catch(e){o=[6,e],n=0}finally{i=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}}i.d(t,"a",(function(){return f}));var o=["text/plain","text/html"],r=function(){(console.warn||console.log).call(arguments)}.bind(console,"[clipboard-polyfill]"),l=!0,s=function(){function e(){this.m={}}return e.prototype.setData=function(e,t){l&&-1===o.indexOf(e)&&r("Unknown data type: "+e,"Call clipboard.suppressWarnings() to suppress this warning."),this.m[e]=t},e.prototype.getData=function(e){return this.m[e]},e.prototype.forEach=function(e){for(var t in this.m)e(this.m[t],t)},e}(),c=function(e){},u=!0,d=function(){(console.warn||console.log).apply(console,arguments)}.bind("[clipboard-polyfill]"),m="text/plain";function p(e){return n(this,void 0,void 0,(function(){var t;return a(this,(function(i){if(u&&!e.getData(m)&&d("clipboard.write() was called without a `text/plain` data type. On some platforms, this may result in an empty clipboard. Call clipboard.suppressWarnings() to suppress this warning."),w()){if(function(e){var t=e.getData(m);if(void 0!==t)return window.clipboardData.setData("Text",t);throw new Error("No `text/plain` value was specified.")}(e))return[2];throw new Error("Copying failed, possibly because the user rejected it.")}if(g(e))return c("regular execCopy worked"),[2];if(navigator.userAgent.indexOf("Edge")>-1)return c('UA "Edge" => assuming success'),[2];if(h(document.body,e))return c("copyUsingTempSelection worked"),[2];if(function(e){var t=document.createElement("div");t.setAttribute("style","-webkit-user-select: text !important"),t.textContent="temporary element",document.body.appendChild(t);var i=h(t,e);return document.body.removeChild(t),i}(e))return c("copyUsingTempElem worked"),[2];if(void 0!==(t=e.getData(m))&&function(e){c("copyTextUsingDOM");var t=document.createElement("div");t.setAttribute("style","-webkit-user-select: text !important");var i=t;t.attachShadow&&(c("Using shadow DOM."),i=t.attachShadow({mode:"open"}));var n=document.createElement("span");n.innerText=e,i.appendChild(n),document.body.appendChild(t),b(n);var a=document.execCommand("copy");return _(),document.body.removeChild(t),a}(t))return c("copyTextUsingDOM worked"),[2];throw new Error("Copy command failed.")}))}))}function f(e){return n(this,void 0,void 0,(function(){return a(this,(function(t){return navigator.clipboard&&navigator.clipboard.writeText?(c("Using `navigator.clipboard.writeText()`."),[2,navigator.clipboard.writeText(e)]):[2,p(y(e))]}))}))}var v=function(){this.success=!1};function g(e){var t=new v,i=function(e,t,i){c("listener called"),e.success=!0,t.forEach((function(t,n){var a=i.clipboardData;a.setData(n,t),n===m&&a.getData(n)!==t&&(c("setting text/plain failed"),e.success=!1)})),i.preventDefault()}.bind(this,t,e);document.addEventListener("copy",i);try{document.execCommand("copy")}finally{document.removeEventListener("copy",i)}return t.success}function h(e,t){b(e);var i=g(t);return _(),i}function b(e){var t=document.getSelection();if(t){var i=document.createRange();i.selectNodeContents(e),t.removeAllRanges(),t.addRange(i)}}function _(){var e=document.getSelection();e&&e.removeAllRanges()}function y(e){var t=new s;return t.setData(m,e),t}function w(){return"undefined"==typeof ClipboardEvent&&void 0!==window.clipboardData&&void 0!==window.clipboardData.setData}},"2f46":function(e,t,i){"use strict";i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return l})),i.d(t,"d",(function(){return s})),i.d(t,"b",(function(){return c}));var n=i("5530"),a=i("bc07"),o="/v1/user_level.html";function r(){return Object(a["a"])({url:o,method:"post",data:{method:"get.user.level.list"}})}function l(e){return Object(a["a"])({url:o,method:"post",data:Object(n["a"])({method:"add.user.level.item"},e)})}function s(e){return Object(a["a"])({url:o,method:"post",data:Object(n["a"])({method:"set.user.level.item"},e)})}function c(e){return Object(a["a"])({url:o,method:"post",data:{method:"del.user.level.list",user_level_id:e}})}},"4de4f":function(e,t,i){"use strict";i.d(t,"e",(function(){return r})),i.d(t,"d",(function(){return l})),i.d(t,"c",(function(){return s})),i.d(t,"a",(function(){return c})),i.d(t,"f",(function(){return u})),i.d(t,"b",(function(){return d}));var n=i("5530"),a=i("bc07"),o="/v1/coupon_give.html";function r(e){return Object(a["a"])({url:o,method:"post",data:Object(n["a"])({method:"give.coupon.user"},e)})}function l(e,t){return Object(a["a"])({url:o,method:"post",data:{method:"give.coupon.live",coupon_id:e,give_number:t}})}function s(e){return Object(a["a"])({url:o,method:"post",data:Object(n["a"])({method:"get.coupon.give.list"},e)})}function c(e){return Object(a["a"])({url:o,method:"post",data:{method:"del.coupon.give.list",coupon_give_id:e}})}function u(e){return Object(a["a"])({url:o,method:"post",data:{method:"rec.coupon.give.list",coupon_give_id:e}})}function d(e){return Object(a["a"])({url:o,method:"post",data:{method:"get.coupon.give.export",coupon_id:e}})}},b4e1:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"cs-p"},[i("el-form",{attrs:{inline:!0,size:"small"}},[e.auth.add?i("el-form-item",[i("el-button",{attrs:{icon:"el-icon-plus",disabled:e.loading},on:{click:e.handleCreate}},[e._v("新增优惠劵")])],1):e._e(),e.auth.enable||e.auth.disable?i("el-form-item",[i("el-button-group",[e.auth.enable?i("el-button",{attrs:{icon:"el-icon-check",disabled:e.loading},on:{click:function(t){return e.handleStatus(null,1,!0)}}},[e._v("启用")]):e._e(),e.auth.disable?i("el-button",{attrs:{icon:"el-icon-close",disabled:e.loading},on:{click:function(t){return e.handleStatus(null,0,!0)}}},[e._v("禁用")]):e._e()],1)],1):e._e(),e.auth.normal||e.auth.invalid?i("el-form-item",[i("el-button-group",[e.auth.normal?i("el-button",{attrs:{icon:"el-icon-circle-check",disabled:e.loading},on:{click:function(t){return e.handleInvalid(null,0,!0)}}},[e._v("正常")]):e._e(),e.auth.invalid?i("el-button",{attrs:{icon:"el-icon-circle-close",disabled:e.loading},on:{click:function(t){return e.handleInvalid(null,1,!0)}}},[e._v("作废")]):e._e()],1)],1):e._e(),e.auth.del?i("el-form-item",[i("el-button",{attrs:{icon:"el-icon-delete",disabled:e.loading},on:{click:function(t){return e.handleDelete(null)}}},[e._v("删除")])],1):e._e(),i("cs-help",{staticStyle:{"padding-bottom":"19px"},attrs:{router:e.$route.path}})],1),i("el-table",{attrs:{data:e.currentTableData,"highlight-current-row":!0},on:{"selection-change":e.handleSelectionChange,"sort-change":e.sortChange}},[i("el-table-column",{attrs:{align:"center",type:"selection",width:"55"}}),i("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-form",{staticClass:"table-expand",attrs:{"label-position":"left",inline:""}},[i("el-form-item",{attrs:{label:"名称"}},[i("span",[e._v(e._s(t.row.name))])]),i("el-form-item",{attrs:{label:"描述"}},[i("span",[e._v(e._s(t.row.description))])]),i("el-form-item",{attrs:{label:"类型"}},[i("span",[e._v(e._s(e.typeMap[t.row.type]))])]),i("el-form-item",{attrs:{label:"领取码"}},[i("span",[e._v(e._s(t.row.give_code))])]),i("el-form-item",{attrs:{label:"优惠金额"}},[i("span",[e._v(e._s(e._f("getNumber")(t.row.money)))])]),i("el-form-item",{attrs:{label:"使用门槛"}},[i("span",[e._v("满 "+e._s(e._f("getNumber")(t.row.quota)))])]),i("el-form-item",{attrs:{label:"限领次数"}},[i("span",[e._v(e._s(t.row.frequency||"不限次数"))])]),i("el-form-item",{attrs:{label:"发放数"}},[i("span",[e._v(e._s(t.row.give_num))])]),i("el-form-item",{attrs:{label:"领取数"}},[i("span",[e._v(e._s(t.row.receive_num))])]),i("el-form-item",{attrs:{label:"使用数"}},[i("span",[e._v(e._s(t.row.use_num))])]),i("el-form-item",{attrs:{label:"状态"}},[i("el-tag",{attrs:{type:e.statusMap[t.row.status].type,effect:"plain",size:"mini"}},[e._v(" "+e._s(e.statusMap[t.row.status].text)+" ")])],1),i("el-form-item",{attrs:{label:"是否有效"}},[i("el-tag",{attrs:{type:e.invalidMap[t.row.is_invalid].type,effect:"plain",size:"mini"}},[e._v(" "+e._s(e.invalidMap[t.row.is_invalid].text)+" ")])],1),i("el-divider"),i("el-form-item",{attrs:{label:"发放开始日期"}},[i("span",[e._v(e._s(t.row.give_begin_time))])]),i("el-form-item",{attrs:{label:"发放结束日期"}},[i("span",[e._v(e._s(t.row.give_end_time))])]),i("el-form-item",{attrs:{label:"使用开始日期"}},[i("span",[e._v(e._s(t.row.use_begin_time))])]),i("el-form-item",{attrs:{label:"使用截止日期"}},[i("span",[e._v(e._s(t.row.use_end_time))])])],1)]}}])}),i("el-table-column",{attrs:{label:"名称",prop:"name",sortable:"custom","min-width":"180","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.description?i("el-tooltip",{attrs:{content:"描述："+t.row.description,placement:"top-start"}},[i("i",{staticClass:"el-icon-tickets cs-pr-5"})]):e._e(),i("span",{class:{link:e.auth.use},on:{click:function(i){return e.handleGive(t.row.coupon_id)}}},[e._v(e._s(t.row.name))])]}}])}),i("el-table-column",{attrs:{label:"类型",sortable:"custom",prop:"type"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.typeMap[t.row.type])+" ")]}}])}),i("el-table-column",{attrs:{label:"发放数",sortable:"custom",prop:"give_num"}}),i("el-table-column",{attrs:{label:"优惠金额",prop:"money"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("getNumber")(t.row.money))+" ")]}}])}),i("el-table-column",{attrs:{label:"使用门槛",prop:"quota"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" 满 "+e._s(e._f("getNumber")(t.row.quota))+" ")]}}])}),i("el-table-column",{attrs:{label:"状态",sortable:"custom",prop:"status",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-tag",{style:e.auth.enable||e.auth.disable?"cursor: pointer;":"",attrs:{size:"mini",type:e.statusMap[t.row.status].type,effect:e.auth.enable||e.auth.disable?"light":"plain"},nativeOn:{click:function(i){return e.handleStatus(t.$index)}}},[e._v(" "+e._s(e.statusMap[t.row.status].text)+" ")])]}}])}),i("el-table-column",{attrs:{label:"是否有效",sortable:"custom",prop:"is_invalid",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-tag",{style:e.auth.normal||e.auth.invalid?"cursor: pointer;":"",attrs:{size:"mini",type:e.invalidMap[t.row.is_invalid].type,effect:e.auth.normal||e.auth.invalid?"light":"plain"},nativeOn:{click:function(i){return e.handleInvalid(t.$index)}}},[e._v(" "+e._s(e.invalidMap[t.row.is_invalid].text)+" ")])]}}])}),i("el-table-column",{attrs:{label:"操作",align:"center","min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.auth.set?i("el-button",{attrs:{size:"small",type:"text"},on:{click:function(i){return e.handleUpdate(t.$index)}}},[e._v("编辑")]):e._e(),e.auth.del?i("el-button",{attrs:{size:"small",type:"text"},on:{click:function(i){return e.handleDelete(t.$index)}}},[e._v("删除")]):e._e(),3!==t.row.type&&e.auth.give?i("el-dropdown",{attrs:{"show-timeout":50,size:"small"}},[i("el-button",{staticClass:"cs-ml-10",attrs:{size:"small",type:"text"}},[e._v("发放操作")]),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[2===t.row.type?[i("el-dropdown-item",{nativeOn:{click:function(i){return e.handleCopyGiveCode(t.row.give_code)}}},[e._v(" 复制领取码 ")]),i("el-dropdown-item",{nativeOn:{click:function(i){return e.handleCopyGuide(t.$index)}}},[e._v(" 复制领取地址 ")])]:e._e(),1===t.row.type?[i("el-dropdown-item",{nativeOn:{click:function(i){return e.handleLive(t.$index)}}},[e._v(" 生成优惠劵 ")]),i("el-dropdown-item",{nativeOn:{click:function(i){return e.handleExport(t.$index)}}},[e._v(" 导出优惠劵 ")])]:e._e(),0===t.row.type?[i("el-dropdown-item",{nativeOn:{click:function(i){return e.handleGiveUser("user",t.$index)}}},[e._v(" 会员账号发放 ")]),i("el-dropdown-item",{nativeOn:{click:function(i){return e.handleGiveUser("level",t.$index)}}},[e._v(" 账号等级发放 ")])]:e._e()],2)],1):e._e()]}}])})],1),i("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible,"append-to-body":!0,"close-on-click-modal":!1,width:"670px"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[i("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"110px"}},[i("el-form-item",{attrs:{label:"名称",prop:"name"}},[i("el-input",{attrs:{placeholder:"请输入优惠劵名称",clearable:!0},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),i("el-form-item",{attrs:{label:"描述",prop:"description"}},[i("el-input",{attrs:{type:"textarea",placeholder:"可输入优惠劵描述",autosize:{minRows:3},maxlength:"255","show-word-limit":""},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),"2"===e.form.type?i("el-form-item",{attrs:{label:"引导地址",prop:"guide"}},[i("el-input",{attrs:{placeholder:"可输入优惠劵引导地址",clearable:!0},model:{value:e.form.guide,callback:function(t){e.$set(e.form,"guide",t)},expression:"form.guide"}}),i("div",{staticClass:"help-block"},[i("span",[e._v("引导顾客到特定的页面上进行领取")])])],1):e._e(),i("el-row",{attrs:{gutter:20}},[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"类型",prop:"type"}},[i("el-select",{attrs:{placeholder:"请选择",disabled:"create"!==e.dialogStatus,clearable:""},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},e._l(e.typeMap,(function(e,t){return i("el-option",{key:t,attrs:{label:e,value:t}})})),1)],1)],1),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"发放数",prop:"give_num"}},[i("el-input-number",{attrs:{placeholder:"请输入发放数","controls-position":"right",min:0},model:{value:e.form.give_num,callback:function(t){e.$set(e.form,"give_num",t)},expression:"form.give_num"}})],1)],1)],1),i("el-row",{attrs:{gutter:20}},[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"优惠金额",prop:"money"}},[i("el-input-number",{attrs:{placeholder:"请输入优惠金额","controls-position":"right",precision:2,min:0},model:{value:e.form.money,callback:function(t){e.$set(e.form,"money",t)},expression:"form.money"}})],1)],1),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"使用门槛",prop:"quota"}},[i("el-input-number",{attrs:{placeholder:"请输入使用门槛","controls-position":"right",precision:2,min:0},model:{value:e.form.quota,callback:function(t){e.$set(e.form,"quota",t)},expression:"form.quota"}})],1)],1)],1),i("el-form-item",{attrs:{label:"指定分类",prop:"category"}},[i("cs-goods-category",{attrs:{type:"all"},model:{value:e.form.category,callback:function(t){e.$set(e.form,"category",t)},expression:"form.category"}},[i("el-button",{attrs:{slot:"control"},slot:"control"},[e._v("商品分类选取")])],1),i("div",{staticClass:"help-block"},[i("span",[e._v("指定商品分类后，该优惠劵只能对分类范围内的商品有效")])])],1),i("el-form-item",{attrs:{label:"排除分类",prop:"exclude_category"}},[i("cs-goods-category",{attrs:{type:"all"},model:{value:e.form.exclude_category,callback:function(t){e.$set(e.form,"exclude_category",t)},expression:"form.exclude_category"}},[i("el-button",{attrs:{slot:"control"},slot:"control"},[e._v("商品分类选取")])],1),i("div",{staticClass:"help-block"},[i("span",[e._v("排除商品分类后，该优惠劵对分类范围内的商品没有效果")])])],1),"2"===e.form.type?i("el-row",{attrs:{gutter:20}},[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"会员等级",prop:"level"}},[i("el-select",{attrs:{placeholder:"不选表示全部有效","collapse-tags":"",multiple:""},model:{value:e.form.level,callback:function(t){e.$set(e.form,"level",t)},expression:"form.level"}},e._l(e.userLevel,(function(e){return i("el-option",{key:e.user_level_id,attrs:{label:e.name,value:e.user_level_id}})})),1)],1)],1),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"限领次数",prop:"frequency"}},[i("el-input-number",{attrs:{placeholder:"可输入限领次数","controls-position":"right",max:255,min:0},model:{value:e.form.frequency,callback:function(t){e.$set(e.form,"frequency",t)},expression:"form.frequency"}})],1)],1)],1):e._e(),i("el-row",{attrs:{gutter:20}},[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"发放开始日期",prop:"give_begin_time"}},[i("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"请选择发放开始日期"},model:{value:e.form.give_begin_time,callback:function(t){e.$set(e.form,"give_begin_time",t)},expression:"form.give_begin_time"}})],1)],1),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"发放结束日期",prop:"give_end_time"}},[i("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"请选择发放开始日期"},model:{value:e.form.give_end_time,callback:function(t){e.$set(e.form,"give_end_time",t)},expression:"form.give_end_time"}})],1)],1)],1),i("el-row",{attrs:{gutter:20}},[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"使用开始日期",prop:"use_begin_time"}},[i("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"请选择使用开始日期"},model:{value:e.form.use_begin_time,callback:function(t){e.$set(e.form,"use_begin_time",t)},expression:"form.use_begin_time"}})],1)],1),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"使用截止日期",prop:"use_end_time"}},[i("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"请选择使用截止日期"},model:{value:e.form.use_end_time,callback:function(t){e.$set(e.form,"use_end_time",t)},expression:"form.use_end_time"}})],1)],1)],1),i("el-row",{attrs:{gutter:20}},[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"状态",prop:"status"}},[i("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}})],1)],1),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"是否有效",prop:"is_invalid"}},[i("el-switch",{attrs:{"active-value":0,"inactive-value":1},model:{value:e.form.is_invalid,callback:function(t){e.$set(e.form,"is_invalid",t)},expression:"form.is_invalid"}})],1)],1)],1)],1),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{size:"small"},on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取消")]),"create"===e.dialogStatus?i("el-button",{attrs:{type:"primary",loading:e.dialogLoading,size:"small"},on:{click:e.create}},[e._v("确定")]):i("el-button",{attrs:{type:"primary",loading:e.dialogLoading,size:"small"},on:{click:e.update}},[e._v("修改")])],1)],1),i("el-dialog",{attrs:{title:"发放优惠劵",visible:e.dialogGiveFormVisible,"append-to-body":!0,"close-on-click-modal":!1,"destroy-on-close":!0,width:"600px"},on:{"update:visible":function(t){e.dialogGiveFormVisible=t}}},[i("el-form",["level"===e.dialogGiveType?i("el-form-item",{attrs:{label:"会员等级"}},[i("el-select",{attrs:{placeholder:"请选择","collapse-tags":"",multiple:""},model:{value:e.giveForm.user_level_id,callback:function(t){e.$set(e.giveForm,"user_level_id",t)},expression:"giveForm.user_level_id"}},e._l(e.userLevel,(function(e){return i("el-option",{key:e.user_level_id,attrs:{label:e.name,value:e.user_level_id}})})),1)],1):e._e(),"user"===e.dialogGiveType?i("el-form-item",{attrs:{label:"会员账号"}},[i("cs-user-select",{on:{confirm:e.handleUserConfirm}},[i("el-button",{attrs:{slot:"control"},slot:"control"},[e._v("账号选取")])],1)],1):e._e()],1),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("div",{staticStyle:{float:"left","font-size":"13px"}},[i("span",[e._v("剩余 "+e._s(e.giveNumber)+" 张优惠劵可发放")])]),i("el-button",{attrs:{size:"small"},on:{click:function(t){e.dialogGiveFormVisible=!1}}},[e._v("取消")]),i("el-button",{attrs:{type:"primary",loading:e.dialogGiveLoading,size:"small"},on:{click:e.giveCoupon}},[e._v("确定")])],1)],1)],1)},a=[],o=(i("4160"),i("c975"),i("b0c0"),i("a9e3"),i("d3b7"),i("25f0"),i("159b"),i("5530")),r=i("0572"),l=i("4de4f"),s=i("2af7"),c=i("ca00"),u=i("2f46"),d=i("d126"),m=i.n(d),p={components:{csUserSelect:function(){return i.e("chunk-4270f29c").then(i.bind(null,"4a8f"))},csGoodsCategory:function(){return i.e("chunk-2a947bd4").then(i.bind(null,"b191"))}},props:{loading:{default:!1},typeMap:{default:function(){}},tableData:{default:function(){return[]}}},data:function(){return{currentTableData:[],multipleSelection:[],userLevel:[],dialogLoading:!1,dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑优惠劵",create:"新增优惠劵"},statusMap:{0:{text:"禁用",type:"danger"},1:{text:"启用",type:"success"},2:{text:"...",type:"info"}},invalidMap:{0:{text:"正常",type:"success"},1:{text:"作废",type:"danger"},2:{text:"...",type:"info"}},auth:{use:!1,add:!1,set:!1,del:!1,give:!1,enable:!1,disable:!1,normal:!1,invalid:!1},form:{name:void 0,description:void 0,guide:void 0,type:void 0,money:void 0,quota:void 0,category:void 0,exclude_category:void 0,level:void 0,frequency:void 0,give_num:void 0,give_begin_time:void 0,give_end_time:void 0,use_begin_time:void 0,use_end_time:void 0,status:void 0,is_invalid:void 0},rules:{name:[{required:!0,message:"名称不能为空",trigger:"blur"},{max:50,message:"长度不能大于 50 个字符",trigger:"blur"}],description:[{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}],guide:[{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}],type:[{required:!0,message:"至少选择一项",trigger:"change"}],money:[{required:!0,message:"优惠金额不能为空",trigger:"blur"}],quota:[{required:!0,message:"使用门槛不能为空",trigger:"blur"}],give_num:[{required:!0,message:"发放数不能为空",trigger:"blur"}],give_begin_time:[{required:!0,message:"发放开始日期不能为空",trigger:"change"}],give_end_time:[{required:!0,message:"发放结束日期不能为空",trigger:"change"}],use_begin_time:[{required:!0,message:"使用开始日期不能为空",trigger:"change"}],use_end_time:[{required:!0,message:"使用截止日期不能为空",trigger:"change"}]},dialogGiveLoading:!1,dialogGiveFormVisible:!1,dialogGiveType:"",giveNumber:0,giveForm:{coupon_id:void 0,username:void 0,user_level_id:void 0}}},filters:{getNumber:function(e){return c["a"].getNumber(e)}},watch:{tableData:{handler:function(e){this.currentTableData=e},immediate:!0}},mounted:function(){var e=this;this._validationAuth(),Object(u["c"])().then((function(t){e.userLevel=t.data||[]}))},methods:{_validationAuth:function(){this.auth.use=this.$permission("/marketing/coupon/give/list"),this.auth.add=this.$permission("/marketing/coupon/list/add"),this.auth.set=this.$permission("/marketing/coupon/list/set"),this.auth.del=this.$permission("/marketing/coupon/list/del"),this.auth.give=this.$permission("/marketing/coupon/list/give"),this.auth.enable=this.$permission("/marketing/coupon/list/enable"),this.auth.disable=this.$permission("/marketing/coupon/list/disable"),this.auth.normal=this.$permission("/marketing/coupon/list/normal"),this.auth.invalid=this.$permission("/marketing/coupon/list/invalid")},_getIdList:function(e){null===e&&(e=this.multipleSelection);var t=[];return Array.isArray(e)?e.forEach((function(e){t.push(e.coupon_id)})):t.push(this.currentTableData[e].coupon_id),t},handleSelectionChange:function(e){this.multipleSelection=e},sortChange:function(e){var t=e.column,i=e.prop,n=e.order,a={order_type:void 0,order_field:void 0};t&&n&&(a.order_type="ascending"===n?"asc":"desc",a.order_field=i),this.$emit("sort",a)},handleGive:function(e){this.auth.use&&this.$router.push({name:"marketing-coupon-give",params:{coupon_id:e}})},handleDelete:function(e){var t=this,i=this._getIdList(e);0!==i.length?this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){Object(r["b"])(i).then((function(){c["a"].deleteDataList(t.currentTableData,i,"coupon_id"),t.$message.success("操作成功")}))})).catch((function(){})):this.$message.error("请选择要操作的数据")},handleStatus:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=this._getIdList(e);if(0!==a.length){if(!n){var l=this.currentTableData[e],s=l.status?0:1;if(l.status>1)return;if(0===s&&!this.auth.disable)return;if(1===s&&!this.auth.enable)return;return this.$set(this.currentTableData,e,Object(o["a"])(Object(o["a"])({},l),{},{status:2})),void c(a,s,this)}this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){c(a,i,t)})).catch((function(){}))}else this.$message.error("请选择要操作的数据");function c(e,t,i){Object(r["h"])(e,t).then((function(){i.currentTableData.forEach((function(n,a){-1!==e.indexOf(n.coupon_id)&&i.$set(i.currentTableData,a,Object(o["a"])(Object(o["a"])({},n),{},{status:t}))})),i.$message.success("操作成功")}))}},handleInvalid:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=this._getIdList(e);if(0!==a.length){if(!n){var l=this.currentTableData[e],s=l.is_invalid?0:1;if(l.is_invalid>1)return;if(0===s&&!this.auth.normal)return;if(1===s&&!this.auth.invalid)return;return this.$set(this.currentTableData,e,Object(o["a"])(Object(o["a"])({},l),{},{is_invalid:2})),void c(a,s,this)}this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){c(a,i,t)})).catch((function(){}))}else this.$message.error("请选择要操作的数据");function c(e,t,i){Object(r["f"])(e,t).then((function(){i.currentTableData.forEach((function(n,a){-1!==e.indexOf(n.coupon_id)&&i.$set(i.currentTableData,a,Object(o["a"])(Object(o["a"])({},n),{},{is_invalid:t}))})),i.$message.success("操作成功")}))}},handleCreate:function(){var e=this;this.form={name:"",description:"",guide:"",type:void 0,money:void 0,quota:void 0,category:[],exclude_category:[],level:[],frequency:0,give_num:void 0,give_begin_time:void 0,give_end_time:void 0,use_begin_time:void 0,use_end_time:void 0,status:1,is_invalid:0},this.$nextTick((function(){e.$refs.form&&e.$refs.form.clearValidate(),e.dialogStatus="create",e.dialogLoading=!1,e.dialogFormVisible=!0}))},create:function(){var e=this;this.$refs.form.validate((function(t){t&&(e.dialogLoading=!0,Object(r["a"])(e.form).then((function(t){e.currentTableData.unshift(Object(o["a"])(Object(o["a"])({},t.data),{},{receive_num:0,use_num:0})),e.dialogFormVisible=!1,e.$message.success("操作成功")})).catch((function(){e.dialogLoading=!1})))}))},handleUpdate:function(e){var t=this;this.currentIndex=e,this.form=Object(o["a"])(Object(o["a"])({},this.currentTableData[e]),{},{type:this.currentTableData[e].type.toString()}),this.$nextTick((function(){t.$refs.form&&t.$refs.form.clearValidate(),t.dialogStatus="update",t.dialogLoading=!1,t.dialogFormVisible=!0}))},update:function(){var e=this;this.$refs.form.validate((function(t){t&&(e.dialogLoading=!0,Object(r["g"])(e.form).then((function(t){e.$set(e.currentTableData,e.currentIndex,Object(o["a"])(Object(o["a"])({},e.currentTableData[e.currentIndex]),t.data)),e.dialogFormVisible=!1,e.$message.success("操作成功")})).catch((function(){e.dialogLoading=!1})))}))},handleCopyGiveCode:function(e){var t=this;s["a"](e).then((function(){t.$message.success("已复制到剪贴板")})).catch((function(e){t.$message.error(e)}))},handleCopyGuide:function(e){var t=this,i=this.currentTableData[e],n=i.guide?"/":"/v1/coupon_give.html",a=c["a"].getBaseApi(n,i.guide||this.$baseConfig.BASE_API);a+=i.guide?"give_code=":"method=give.coupon.code&give_code=",a+=i.give_code,s["a"](a).then((function(){t.$message.success("已复制到剪贴板")})).catch((function(e){t.$message.error(e)}))},handleLive:function(e){var t=this,i=this.currentTableData[e],n="请填写生成数量（最多还可生成 ".concat(i.give_num-i.receive_num," 张）");this.$prompt(n,"生成优惠劵",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/\S/,inputErrorMessage:"请填写生成数量"}).then((function(e){var n=e.value;Object(l["d"])(i.coupon_id,n).then((function(){t.$set(i,"receive_num",i.receive_num+Number(n)),t.$message.success("操作成功")}))})).catch((function(){}))},handleExport:function(e){var t=this.currentTableData[e];if(t.receive_num<=0)this.$message.error("没有可导出的数据，请先生成优惠劵");else{var i=[{label:"编号",prop:"coupon_give_id"},{label:"兑换码",prop:"exchange_code"},{label:"使用时间",prop:"use_time"},{label:"创建时间",prop:"create_time"},{label:"是否删除",prop:"is_delete"}],n={is_delete:{0:"否",1:"是"}};Object(l["b"])(t.coupon_id).then((function(e){m.a.excel({columns:i,data:c["a"].dataReplace(e.data,n),title:t.name})}))}},handleGiveUser:function(e,t){var i=this;this.currentIndex=t,this.dialogGiveType=e;var n=this.currentTableData[t];this.giveNumber=n.give_num-n.receive_num,this.giveForm={coupon_id:n.coupon_id,username:void 0,user_level_id:void 0},this.$nextTick((function(){i.dialogGiveLoading=!1,i.dialogGiveFormVisible=!0}))},handleUserConfirm:function(e){var t=[];e.forEach((function(e){t.push(e.username)})),this.giveForm.username=t},giveCoupon:function(){var e=this;this.dialogGiveLoading=!0;var t=this.currentTableData[this.currentIndex];Object(l["e"])(this.giveForm).then((function(i){e.$set(t,"receive_num",t.receive_num+i.data),e.dialogGiveFormVisible=!1,e.$message.success("操作成功")})).catch((function(){e.dialogGiveLoading=!1}))}}},f=p,v=(i("c159"),i("2877")),g=Object(v["a"])(f,n,a,!1,null,"32ba3b80",null);t["default"]=g.exports},c159:function(e,t,i){"use strict";var n=i("c322"),a=i.n(n);a.a},c322:function(e,t,i){}}]);