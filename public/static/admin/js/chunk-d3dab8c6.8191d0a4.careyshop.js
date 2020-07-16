(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d3dab8c6"],{"24d9":function(t,e,a){"use strict";var i=a("fd6e"),o=a.n(i);o.a},4662:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cs-p"},[a("el-form",{attrs:{inline:!0,size:"small"}},[t.auth.add?a("el-form-item",[a("el-button",{attrs:{icon:"el-icon-plus",disabled:t.loading},on:{click:t.handleCreate}},[t._v("新增购物卡")])],1):t._e(),t.auth.enable||t.auth.disable?a("el-form-item",[a("el-button-group",[t.auth.enable?a("el-button",{attrs:{icon:"el-icon-check",disabled:t.loading},on:{click:function(e){return t.handleStatus(null,1,!0)}}},[t._v("启用")]):t._e(),t.auth.disable?a("el-button",{attrs:{icon:"el-icon-close",disabled:t.loading},on:{click:function(e){return t.handleStatus(null,0,!0)}}},[t._v("禁用")]):t._e()],1)],1):t._e(),t.auth.del?a("el-form-item",[a("el-button",{attrs:{icon:"el-icon-delete",disabled:t.loading},on:{click:function(e){return t.handleDelete(null)}}},[t._v("删除")])],1):t._e(),a("cs-help",{staticStyle:{"padding-bottom":"19px"},attrs:{router:t.$route.path}})],1),a("el-table",{attrs:{data:t.currentTableData,"highlight-current-row":!0},on:{"selection-change":t.handleSelectionChange,"sort-change":t.sortChange}},[a("el-table-column",{attrs:{align:"center",type:"selection",width:"55"}}),a("el-table-column",{attrs:{label:"名称",prop:"name",sortable:"custom","min-width":"180","show-overflow-tooltip":!0},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.description?a("el-tooltip",{attrs:{content:"描述："+e.row.description,placement:"top-start"}},[a("i",{staticClass:"el-icon-tickets cs-pr-5"})]):t._e(),a("span",{class:{link:t.auth.use},on:{click:function(a){return t.handleUse(e.row.card_id)}}},[t._v(t._s(e.row.name))])]}}])}),a("el-table-column",{attrs:{label:"面额",sortable:"custom",prop:"money"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t._f("getNumber")(e.row.money))+" ")]}}])}),a("el-table-column",{attrs:{label:"发放数",sortable:"custom",prop:"give_num"}}),a("el-table-column",{attrs:{label:"激活数",sortable:"custom",prop:"active_num"}}),a("el-table-column",{attrs:{label:"日期",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v(" 创建日期："+t._s(e.row.create_time)),a("br"),t._v(" 截止日期："+t._s(e.row.end_time||"不限日期")+" ")]),a("el-tag",{attrs:{size:"mini",effect:"plain",type:"info"}},[t._v("详细")])],1)]}}])}),a("el-table-column",{attrs:{label:"状态",prop:"status",sortable:"custom",align:"center",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{style:t.auth.enable||t.auth.disable?"cursor: pointer;":"",attrs:{size:"mini",type:t.statusMap[e.row.status].type,effect:t.auth.enable||t.auth.disable?"light":"plain"},nativeOn:{click:function(a){return t.handleStatus(e.$index)}}},[t._v(" "+t._s(t.statusMap[e.row.status].text)+" ")])]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.auth.export?a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return t.handleExportCard(e.row.card_id,e.row.name)}}},[t._v("导出")]):t._e(),t.auth.set?a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return t.handleUpdate(e.$index)}}},[t._v("编辑")]):t._e(),t.auth.del?a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return t.handleDelete(e.$index)}}},[t._v("删除")]):t._e()]}}])})],1),a("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible,"append-to-body":!0,"close-on-click-modal":!1,width:"600px"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"名称",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入购物卡名称",clearable:!0},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"描述",prop:"description"}},[a("el-input",{attrs:{type:"textarea",placeholder:"可输入购物卡描述",autosize:{minRows:3},maxlength:"255","show-word-limit":""},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"面额",prop:"money"}},[a("el-input-number",{attrs:{placeholder:"请输入面额","controls-position":"right",disabled:"create"!==t.dialogStatus,precision:2,min:0},model:{value:t.form.money,callback:function(e){t.$set(t.form,"money",e)},expression:"form.money"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"发放数",prop:"give_num"}},[a("el-input-number",{attrs:{placeholder:"请输入发放数","controls-position":"right",disabled:"create"!==t.dialogStatus,min:0},model:{value:t.form.give_num,callback:function(e){t.$set(t.form,"give_num",e)},expression:"form.give_num"}})],1)],1)],1),a("el-form-item",{attrs:{label:"截止日期",prop:"end_time"}},[a("el-date-picker",{attrs:{type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"可选择购物卡截止有效期",disabled:"create"!==t.dialogStatus},model:{value:t.form.end_time,callback:function(e){t.$set(t.form,"end_time",e)},expression:"form.end_time"}}),a("div",{staticClass:"help-block"},[a("span",[t._v("为空表示不限制截止日期")])])],1),a("el-form-item",{attrs:{label:"指定分类",prop:"category"}},[a("cs-goods-category",{attrs:{type:"all"},model:{value:t.form.category,callback:function(e){t.$set(t.form,"category",e)},expression:"form.category"}},[a("el-button",{attrs:{slot:"control"},slot:"control"},[t._v("商品分类选取")])],1),a("div",{staticClass:"help-block"},[a("span",[t._v("指定商品分类后，该购物卡只能购买分类范围内的商品")])])],1),a("el-form-item",{attrs:{label:"排除分类",prop:"exclude_category"}},[a("cs-goods-category",{attrs:{type:"all"},model:{value:t.form.exclude_category,callback:function(e){t.$set(t.form,"exclude_category",e)},expression:"form.exclude_category"}},[a("el-button",{attrs:{slot:"control"},slot:"control"},[t._v("商品分类选取")])],1),a("div",{staticClass:"help-block"},[a("span",[t._v("排除商品分类后，该购物卡不能购买分类范围内的商品")])])],1),a("el-form-item",{attrs:{label:"状态",prop:"status"}},[a("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取消")]),"create"===t.dialogStatus?a("el-button",{attrs:{type:"primary",loading:t.dialogLoading,size:"small"},on:{click:t.create}},[t._v("确定")]):a("el-button",{attrs:{type:"primary",loading:t.dialogLoading,size:"small"},on:{click:t.update}},[t._v("修改")])],1)],1)],1)},o=[],n=(a("4160"),a("c975"),a("d3b7"),a("159b"),a("5530")),r=a("d3dd"),l=a("ca00"),s=a("d126"),c=a.n(s),u=a("6f85"),d={components:{csGoodsCategory:function(){return a.e("chunk-5480e676").then(a.bind(null,"b191"))}},props:{loading:{default:!1},tableData:{default:function(){return[]}}},data:function(){return{currentTableData:[],multipleSelection:[],dialogLoading:!1,dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑购物卡",create:"新增购物卡"},statusMap:{0:{text:"禁用",type:"danger"},1:{text:"启用",type:"success"},2:{text:"...",type:"info"}},auth:{use:!1,add:!1,set:!1,del:!1,export:!1,enable:!1,disable:!1},form:{name:void 0,description:void 0,money:void 0,category:void 0,exclude_category:void 0,give_num:void 0,end_time:void 0,status:void 0},rules:{name:[{required:!0,message:"名称不能为空",trigger:"blur"},{max:50,message:"长度不能大于 50 个字符",trigger:"blur"}],description:[{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}],money:[{required:!0,message:"面额不能为空",trigger:"blur"}],give_num:[{required:!0,message:"发放数不能为空",trigger:"blur"}]}}},filters:{getNumber:function(t){return l["a"].getNumber(t)}},watch:{tableData:{handler:function(t){this.currentTableData=t},immediate:!0}},mounted:function(){this._validationAuth()},methods:{_validationAuth:function(){this.auth.use=this.$permission("/marketing/card/use/list"),this.auth.add=this.$permission("/marketing/card/list/add"),this.auth.set=this.$permission("/marketing/card/list/set"),this.auth.del=this.$permission("/marketing/card/list/del"),this.auth.export=this.$permission("/marketing/card/list/export"),this.auth.enable=this.$permission("/marketing/card/list/enable"),this.auth.disable=this.$permission("/marketing/card/list/disable")},_getIdList:function(t){null===t&&(t=this.multipleSelection);var e=[];return Array.isArray(t)?t.forEach((function(t){e.push(t.card_id)})):e.push(this.currentTableData[t].card_id),e},handleSelectionChange:function(t){this.multipleSelection=t},sortChange:function(t){var e=t.column,a=t.prop,i=t.order,o={order_type:void 0,order_field:void 0};e&&i&&(o.order_type="ascending"===i?"asc":"desc",o.order_field=a),this.$emit("sort",o)},handleStatus:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=this._getIdList(t);if(0!==o.length){if(!i){var l=this.currentTableData[t],s=l.status?0:1;if(l.status>1)return;if(0===s&&!this.auth.disable)return;if(1===s&&!this.auth.enable)return;return this.$set(this.currentTableData,t,Object(n["a"])(Object(n["a"])({},l),{},{status:2})),void c(o,s,this)}this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){c(o,a,e)})).catch((function(){}))}else this.$message.error("请选择要操作的数据");function c(t,e,a){Object(r["f"])(t,e).then((function(){a.currentTableData.forEach((function(i,o){-1!==t.indexOf(i.card_id)&&a.$set(a.currentTableData,o,Object(n["a"])(Object(n["a"])({},i),{},{status:e}))})),a.$message.success("操作成功")}))}},handleDelete:function(t){var e=this,a=this._getIdList(t);0!==a.length?this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){Object(r["b"])(a).then((function(){l["a"].deleteDataList(e.currentTableData,a,"card_id"),e.$message.success("操作成功")}))})).catch((function(){})):this.$message.error("请选择要操作的数据")},handleCreate:function(){var t=this;this.form={name:"",description:"",money:void 0,category:[],exclude_category:[],give_num:void 0,end_time:void 0,status:1},this.$nextTick((function(){t.$refs.form&&t.$refs.form.clearValidate(),t.dialogStatus="create",t.dialogLoading=!1,t.dialogFormVisible=!0}))},handleUpdate:function(t){var e=this;this.currentIndex=t,this.form=Object(n["a"])({},this.currentTableData[t]),this.$nextTick((function(){e.$refs.form&&e.$refs.form.clearValidate(),e.dialogStatus="update",e.dialogLoading=!1,e.dialogFormVisible=!0}))},create:function(){var t=this;this.$refs.form.validate((function(e){e&&(t.dialogLoading=!0,Object(r["a"])(t.form).then((function(e){t.currentTableData.unshift(Object(n["a"])(Object(n["a"])({},e.data),{},{active_num:0})),t.dialogFormVisible=!1,t.$message.success("操作成功")})).catch((function(){t.dialogLoading=!1})))}))},update:function(){var t=this;this.$refs.form.validate((function(e){e&&(t.dialogLoading=!0,Object(r["e"])(t.form).then((function(e){t.$set(t.currentTableData,t.currentIndex,Object(n["a"])(Object(n["a"])({},t.currentTableData[t.currentIndex]),e.data)),t.dialogFormVisible=!1,t.$message.success("操作成功")})).catch((function(){t.dialogLoading=!1})))}))},handleUse:function(t){this.auth.use&&this.$router.push({name:"marketing-card-use",params:{card_id:t}})},handleExportCard:function(t,e){var a=[{label:"编号",prop:"card_use_id"},{label:"卡号",prop:"number"},{label:"卡密",prop:"password"},{label:"可用余额",prop:"money"},{label:"是否激活",prop:"is_active"},{label:"激活时间",prop:"active_time"},{label:"是否有效",prop:"is_invalid"},{label:"备注",prop:"remark"}],i={is_active:{0:"待激活",1:"已激活"},is_invalid:{0:"禁用",1:"启用"}};Object(u["a"])(t).then((function(t){c.a.excel({columns:a,data:l["a"].dataReplace(t.data,i),title:e})}))}}},m=d,p=(a("24d9"),a("2877")),f=Object(p["a"])(m,i,o,!1,null,"4af6a7a8",null);e["default"]=f.exports},"6f85":function(t,e,a){"use strict";a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return l})),a.d(e,"b",(function(){return s}));var i=a("5530"),o=a("bc07"),n="/v1/card_use";function r(t){return Object(o["a"])({url:n,method:"post",data:Object(i["a"])({method:"set.card.use.invalid"},t)})}function l(t){return Object(o["a"])({url:n,method:"post",data:{method:"get.card.use.export",card_id:t}})}function s(t){return Object(o["a"])({url:n,method:"post",data:Object(i["a"])({method:"get.card.use.list"},t)})}},fd6e:function(t,e,a){}}]);