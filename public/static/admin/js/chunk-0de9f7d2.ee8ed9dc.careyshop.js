(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0de9f7d2"],{6777:function(e,t,a){"use strict";var o=a("b49f"),r=a.n(o);r.a},"6b59":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"cs-p"},[a("el-form",{attrs:{inline:!0,size:"small"},nativeOn:{submit:function(e){e.preventDefault()}}},[e.auth.add?a("el-form-item",[a("el-button",{attrs:{icon:"el-icon-plus",disabled:e.loading},on:{click:function(t){return e.handleCreate("create")}}},[e._v("新增顶层分类")])],1):e._e(),a("el-form-item",[a("el-radio-group",{model:{value:e.isFullName,callback:function(t){e.isFullName=t},expression:"isFullName"}},[a("el-radio-button",{attrs:{disabled:e.loading,label:!0}},[a("i",{staticClass:"el-icon-chat-line-square"}),a("span",[e._v("全名")])]),a("el-radio-button",{attrs:{disabled:e.loading,label:!1}},[a("i",{staticClass:"el-icon-chat-dot-square"}),a("span",[e._v("别名")])])],1)],1),e.auth.enable||e.auth.disable?a("el-form-item",[a("el-button-group",[e.auth.enable?a("el-button",{attrs:{icon:"el-icon-check",disabled:e.loading},on:{click:function(t){return e.setStatusList(1)}}},[e._v("启用")]):e._e(),e.auth.disable?a("el-button",{attrs:{icon:"el-icon-close",disabled:e.loading},on:{click:function(t){return e.setStatusList(0)}}},[e._v("禁用")]):e._e()],1)],1):e._e(),a("el-form-item",[a("el-button-group",[e.auth.del?a("el-button",{attrs:{icon:"el-icon-delete",disabled:e.loading},on:{click:e.removeList}},[e._v("删除")]):e._e(),a("el-button",{attrs:{icon:"el-icon-refresh",disabled:e.loading},on:{click:e.refresh}},[e._v("刷新")])],1)],1),a("el-form-item",{attrs:{label:"过滤"}},[a("el-input",{staticStyle:{width:"240px"},attrs:{disabled:e.loading,placeholder:"输入关键词进行过滤","prefix-icon":"el-icon-search",clearable:!0},model:{value:e.filterText,callback:function(t){e.filterText=t},expression:"filterText"}})],1),a("cs-help",{staticStyle:{"padding-bottom":"19px"},attrs:{router:e.$route.path}})],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:10}},[a("el-tree",{ref:"tree",staticClass:"tree-scroll",attrs:{"node-key":"goods_category_id",data:e.treeData,props:e.treeProps,"filter-node-method":e.filterNode,"highlight-current":!0,"default-expanded-keys":e.expanded,"show-checkbox":!0,draggable:!0,"allow-drag":e.allowDrag},on:{"node-click":e.handleNodeClick,"node-drop":e.handleDrop},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.node,r=t.data;return a("span",{staticClass:"custom-tree-node action"},[a("span",{staticClass:"brother-showing",class:{"status-tree":!r.status}},[e.auth.move?a("i",{staticClass:"el-icon-sort move-tree cs-mr-5"}):e._e(),r.children?a("i",{class:"el-icon-"+(o.expanded?"folder-opened":"folder")}):a("i",{staticClass:"el-icon-document"}),e._v(" "+e._s(e.isFullName?o.label:r.alias)+" ")]),a("span",{staticClass:"active"},[e.auth.add?a("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(t){return t.stopPropagation(),e.handleAppend(r.goods_category_id)}}},[e._v(" 新增 ")]):e._e(),e.auth.disable||e.auth.enable?a("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(t){return t.stopPropagation(),e.setStatusItem(r.goods_category_id,r.status)}}},[e._v(" "+e._s(r.status?"禁用":"启用")+" ")]):e._e(),e.auth.del?a("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(t){return t.stopPropagation(),e.remove([r.goods_category_id])}}},[e._v(" 删除 ")]):e._e()],1)])}}])})],1),a("el-col",{attrs:{span:14}},[a("el-card",{directives:[{name:"show",rawName:"v-show",value:e.auth.add||e.auth.set,expression:"auth.add || auth.set"}],staticClass:"box-card",attrs:{shadow:"never"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[e._v(e._s(e.textMap[e.formStatus]))]),"create"===e.formStatus&&e.auth.add?a("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text",loading:e.formLoading},on:{click:e.create}},[e._v("确定")]):"update"===e.formStatus&&e.auth.set?a("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text",loading:e.formLoading},on:{click:e.update}},[e._v("修改")]):e._e()],1),a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"上级分类",prop:"parent_id"}},[a("el-cascader",{key:e.form.parent_id,staticStyle:{width:"100%"},attrs:{placeholder:"不选择表示顶层分类 试试搜索：手机",options:e.treeData,props:e.cascaderProps,filterable:"",clearable:""},model:{value:e.form.parent_id,callback:function(t){e.$set(e.form,"parent_id",t)},expression:"form.parent_id"}})],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"名称",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入商品分类名称",clearable:!0},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"名称首拼",prop:"name_phonetic"}},[a("el-input",{attrs:{placeholder:"不填写系统将自动识别",clearable:!0},model:{value:e.form.name_phonetic,callback:function(t){e.$set(e.form,"name_phonetic",t)},expression:"form.name_phonetic"}})],1)],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"别名",prop:"alias"}},[a("el-input",{attrs:{placeholder:"可输入商品分类别名",clearable:!0},model:{value:e.form.alias,callback:function(t){e.$set(e.form,"alias",t)},expression:"form.alias"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"别名首拼",prop:"alias_phonetic"}},[a("el-input",{attrs:{placeholder:"不填写系统将自动识别",clearable:!0},model:{value:e.form.alias_phonetic,callback:function(t){e.$set(e.form,"alias_phonetic",t)},expression:"form.alias_phonetic"}})],1)],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"图片",prop:"category_pic"}},[a("el-input",{attrs:{placeholder:"可输入商品分类图片",clearable:!0},model:{value:e.form.category_pic,callback:function(t){e.$set(e.form,"category_pic",t)},expression:"form.category_pic"}},[a("template",{slot:"prepend"},[e.form.category_pic?a("el-popover",{attrs:{width:"150",placement:"top",trigger:"hover"}},[a("div",{staticClass:"popover-image"},[a("el-image",{attrs:{src:e._f("getPreviewUrl")(e.form.category_pic),fit:"fill"},on:{click:function(t){return t.stopPropagation(),e.$preview(e.form.category_pic)}}})],1),a("i",{staticClass:"el-icon-picture",attrs:{slot:"reference"},slot:"reference"})]):e._e()],1),a("el-dropdown",{attrs:{slot:"append","show-timeout":50},on:{command:e.handleCommand},slot:"append"},[a("el-button",{attrs:{icon:"el-icon-upload"}}),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"storage",icon:"el-icon-finished"}},[e._v("资源选择")]),a("el-dropdown-item",{attrs:{command:"upload",icon:"el-icon-upload2"}},[e._v("上传资源")])],1)],1)],2)],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"图标",prop:"category_ico"}},[a("el-input",{attrs:{placeholder:"可输入商品分类图标",clearable:!0},model:{value:e.form.category_ico,callback:function(t){e.$set(e.form,"category_ico",t)},expression:"form.category_ico"}})],1)],1)],1),a("el-form-item",{attrs:{label:"关键词",prop:"keywords"}},[a("el-input",{attrs:{placeholder:"可输入商品分类关键词",clearable:!0},model:{value:e.form.keywords,callback:function(t){e.$set(e.form,"keywords",t)},expression:"form.keywords"}})],1),a("el-form-item",{attrs:{label:"描述",prop:"description"}},[a("el-input",{attrs:{placeholder:"可输入商品分类描述",type:"textarea",rows:3},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"类型",prop:"category_type"}},[a("el-input-number",{staticStyle:{width:"120px"},attrs:{min:-128,max:127,"controls-position":"right"},model:{value:e.form.category_type,callback:function(t){e.$set(e.form,"category_type",t)},expression:"form.category_type"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"排序",prop:"sort"}},[a("el-input-number",{staticStyle:{width:"120px"},attrs:{min:0,max:255,"controls-position":"right"},model:{value:e.form.sort,callback:function(t){e.$set(e.form,"sort",t)},expression:"form.sort"}})],1)],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"导航",prop:"is_navi"}},[a("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:e.form.is_navi,callback:function(t){e.$set(e.form,"is_navi",t)},expression:"form.is_navi"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"状态",prop:"status"}},[a("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}})],1)],1)],1)],1),a("cs-storage",{ref:"storage",staticStyle:{display:"none"},attrs:{limit:1},on:{confirm:e._getStorageFileList}}),a("cs-upload",{ref:"upload",staticStyle:{display:"none"},attrs:{type:"slot",accept:"image/*",limit:1,multiple:!1},on:{confirm:e._getUploadFileList}})],1)],1)],1)],1)},r=[],s=(a("4de4"),a("4160"),a("c975"),a("b0c0"),a("d3b7"),a("159b"),a("5530")),i=a("2909"),n=a("b85c"),l=a("c54e"),c=a("ca00"),d={components:{csUpload:function(){return a.e("chunk-1104b05a").then(a.bind(null,"8422"))},csStorage:function(){return a.e("chunk-0c9c8382").then(a.bind(null,"8704"))}},props:{treeData:{default:function(){return[]}},loading:{default:!1}},data:function(){return{expanded:[],filterText:"",isFullName:!0,treeProps:{label:"name",children:"children"},cascaderProps:{value:"goods_category_id",label:"name",children:"children",checkStrictly:!0,emitPath:!1},formStatus:"create",formLoading:!1,textMap:{create:"新增分类",update:"编辑分类"},stateButton:{create:"确定",update:"修改"},auth:{add:!1,del:!1,set:!1,enable:!1,disable:!1,move:!1},form:{parent_id:void 0,name:void 0,name_phonetic:void 0,alias:void 0,alias_phonetic:void 0,category_pic:void 0,category_ico:void 0,keywords:void 0,description:void 0,category_type:0,sort:50,is_navi:0,status:1},rules:{name:[{required:!0,message:"名称不能为空",trigger:"blur"},{max:100,message:"长度不能大于 100 个字符",trigger:"blur"}],name_phonetic:[{max:10,message:"长度不能大于 10 个字符",trigger:"blur"}],alias:[{max:50,message:"长度不能大于 50 个字符",trigger:"blur"}],alias_phonetic:[{max:10,message:"长度不能大于 10 个字符",trigger:"blur"}],category_pic:[{max:512,message:"长度不能大于 512 个字符",trigger:"blur"}],category_ico:[{max:50,message:"长度不能大于 50 个字符",trigger:"blur"}],keywords:[{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}],description:[{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}],category_type:[{type:"number",message:"必须为数字值",trigger:"blur"}],sort:[{type:"number",message:"必须为数字值",trigger:"blur"}]}}},filters:{getPreviewUrl:function(e){return e?c["a"].getImageCodeUrl(e,"goods_category"):""}},watch:{filterText:function(e){this.$refs.tree.filter(e)}},mounted:function(){this._validationAuth()},methods:{_validationAuth:function(){this.auth.add=this.$permission("/goods/setting/category/add"),this.auth.set=this.$permission("/goods/setting/category/set"),this.auth.del=this.$permission("/goods/setting/category/del"),this.auth.enable=this.$permission("/goods/setting/category/enable"),this.auth.disable=this.$permission("/goods/setting/category/disable"),this.auth.move=this.$permission("/goods/setting/category/move")},handleCommand:function(e){switch(e){case"storage":this.$refs.storage.handleStorageDlg([0,2]);break;case"upload":this.$refs.upload.handleUploadDlg();break}},_getUploadFileList:function(e){if(e.length){var t=e[0].response;t&&200===t.status&&0===t.data[0].type&&(this.form.category_pic=t.data[0].url)}},_getStorageFileList:function(e){if(e.length){var t,a=Object(n["a"])(e);try{for(a.s();!(t=a.n()).done;){var o=t.value;if(0===o.type){this.form.category_pic=o.url;break}}}catch(r){a.e(r)}finally{a.f()}}},resetForm:function(){this.form={parent_id:0,name:"",name_phonetic:"",alias:"",alias_phonetic:"",category_pic:"",category_ico:"",keywords:"",description:"",category_type:0,sort:50,is_navi:0,status:1}},resetElements:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"create";this.$nextTick((function(){e.$refs.form.clearValidate()})),this.formStatus=t,this.formLoading=!1},filterNode:function(e,t){return!e||-1!==t.name.indexOf(e)},setStatusList:function(e){this.enable(this.$refs.tree.getCheckedKeys(),e)},setStatusItem:function(e,t){this.enable([e],t?0:1)},enable:function(e,t){var a=this;e&&e.length?this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){Object(l["g"])(e,t).then((function(){a.expanded=Object(i["a"])(e),a.$emit("refresh"),a.$message.success("操作成功")}))})).catch((function(){})):this.$message.error("请选择要操作的数据")},removeList:function(){this.remove(this.$refs.tree.getCheckedKeys())},remove:function(e){var t=this;e&&e.length?this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){Object(l["b"])(e).then((function(){e.forEach((function(e){t.$refs.tree.remove(e)})),t.$refs.tree.setCheckedKeys([]),t.handleCreate("create"),t.$message.success("操作成功")}))})).catch((function(){})):this.$message.error("请选择要操作的数据")},refresh:function(){this.expanded=[],this.$emit("refresh")},handleCreate:function(e){this.resetForm(),this.resetElements(e),this.$refs.tree.getCurrentKey()&&this.$refs.tree.setCurrentKey(null)},create:function(){var e=this;this.$refs.form.validate((function(t){t&&(e.formLoading=!0,Object(l["a"])(e.form).then((function(t){e.expanded=[t.data.parent_id||t.data.goods_category_id],e.$emit("refresh"),e.$message.success("操作成功")})).catch((function(){e.formLoading=!1})))}))},handleAppend:function(e){this.handleCreate("create"),this.$refs.tree.setCurrentKey(e),this.form.parent_id=e},handleNodeClick:function(e){(this.auth.add||this.auth.set)&&(this.resetForm(),this.resetElements("update"),this.form=Object(s["a"])({},e))},update:function(){var e=this;this.$refs.form.validate((function(t){t&&(e.formLoading=!0,Object(l["f"])(e.form).then((function(t){e.expanded=[t.data.parent_id||t.data.goods_category_id],e.$emit("refresh"),e.$message.success("操作成功")})).catch((function(){e.formLoading=!1})))}))},allowDrag:function(){return this.auth.move},handleDrop:function(e,t,a,o){var r=this,s={goods_category_id:e.data.goods_category_id,parent_id:e.data.parent_id},i=[];"inner"===a?s.parent_id=t.key:(s.parent_id=t.data.parent_id,t.parent.childNodes.forEach((function(e,t){i.push(e.key),e.data.sort=t+1}))),Object(l["f"])(s).then((function(t){e.data.parent_id=t.data.parent_id})).catch((function(){r.$emit("refresh")})),i.length>0&&Object(l["e"])(i).catch((function(){r.$emit("refresh")}))}}},u=d,p=(a("6777"),a("2877")),m=Object(p["a"])(u,o,r,!1,null,"0fc3b44b",null);t["default"]=m.exports},b49f:function(e,t,a){}}]);