(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-290fd83c"],{4866:function(t,s,e){},"4b21":function(t,s,e){"use strict";e.r(s);var i=e("8194"),a=e("f8b7"),o=e("9243"),r={name:"AfterSale",data(){return{orderList:[],params:{pageNumber:1,pageSize:10,keywords:"",sort:"createTime",order:"desc"},afterSaleStatusList:o.a,total:0,spinShow:!1,companyList:[],logisticsShow:!1,singleOrder:{},form:{afterSaleSn:"",logisticsId:"",logisticsNo:"",mDeliverTime:""},rules:{logisticsId:[{required:!0,message:"请选择物流公司"}],logisticsNo:[{required:!0,message:"请填写物流编号"}],mDeliverTime:[{required:!0,message:"请选择发货时间"}]},submitLoading:!1}},mounted(){this.getList()},methods:{goDetail(t){this.$router.push({name:"AfterSaleDetail",query:{sn:t}})},cancel(t){this.$Modal.confirm({title:"取消",content:"<p>确定取消此次售后申请吗？</p>",onOk:()=>{Object(i.j)(t).then(t=>{t.success&&(this.$Message.success("取消售后申请成功"),this.getList())})},onCancel:()=>{}})},goodsDetail(t,s){s=this.$router.resolve({path:"/goodsDetail",query:{skuId:t,goodsId:s}});window.open(s.href,"_blank")},shopPage(t){t=this.$router.resolve({path:"/Merchant",query:{id:t}});window.open(t.href,"_blank")},getList(){this.spinShow=!0;var t=JSON.parse(JSON.stringify(this.params));Object(i.d)(t).then(t=>{this.spinShow=!1,t.success&&(this.orderList=t.result.records,this.total=t.result.total)})},changePageNum(t){this.params.pageNumber=t,this.getList()},changePageSize(t){this.params.pageNumber=1,this.params.pageSize=t,this.getList()},filterOrderStatus(s){return this.afterSaleStatusList.filter(t=>t.status===s)[0].name},getCompany(){Object(a.f)().then(t=>{t.success&&(this.companyList=t.result)})},submitDelivery(){this.submitLoading=!0,Object(a.a)(this.form).then(t=>{t.success&&(this.logisticsShow=!1,this.$Message.success("提交成功"),this.getList()),this.submitLoading=!1}).catch(()=>{this.submitLoading=!1})},openModal(t){this.singleOrder=t,this.form.afterSaleSn=t.sn,this.logisticsShow=!0,this.$refs.form.resetFields(),this.companyList.length||this.getCompany()},changeTime(t){this.form.mDeliverTime=t}}},e=(e("bdc6"),e("2877")),r=Object(e.a)(r,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"wrapper"},[i("card",{attrs:{_Title:"我的售后",_Size:16}}),i("div",{staticClass:"mb_20 box"},[i("div",{staticClass:"global_float_right"},[i("Input",{staticClass:"width_300",attrs:{search:"","enter-button":"",placeholder:"请输入订单号搜索"},on:{"on-search":e.getList},model:{value:e.params.keywords,callback:function(t){e.$set(e.params,"keywords",t)},expression:"params.keywords"}})],1)]),0===e.orderList.length?i("empty"):i("div",{staticClass:"order-content"},[e._l(e.orderList,function(s,t){return[i("div",{key:t,staticClass:"order-list"},[i("div",{staticClass:"order-header"},[i("div",[s.serviceStatus?i("div",[e._v(e._s(e.filterOrderStatus(s.serviceStatus)))]):e._e(),i("div",[e._v(" 售后单号："+e._s(s.sn)+"      "+e._s(s.createTime)+"    "+e._s(e._f("secrecyMobile")(s.memberName))+" ")])]),i("div",[i("span",[e._v("申请退款金额："),i("span",{staticClass:"global_color"},[e._v(e._s(e._f("unitPrice")(s.applyRefundPrice,"￥")))])])])]),i("div",{staticClass:"order-body"},[i("div",{staticClass:"goods-list"},[i("img",{staticClass:"hover-color",attrs:{src:s.goodsImage,alt:""},on:{click:function(t){return e.goodsDetail(s.skuId,s.goodsId)}}}),i("div",[i("div",{staticClass:"hover-color",on:{click:function(t){return e.goodsDetail(s.skuId,s.goodsId)}}},[e._v(e._s(s.goodsName))]),i("div",{staticClass:"mt_10"},[e._v(" x "+e._s(s.num)+" ")])])]),i("div",[i("span",{on:{click:function(t){return e.shopPage(s.shopId)}}},[e._v(e._s(s.storeName))])]),i("div",[i("Button",{attrs:{type:"info",size:"small"},on:{click:function(t){return e.goDetail(s.sn)}}},[e._v("售后详情")]),"PASS"==s.serviceStatus&&"RETURN_MONEY"!=s.serviceType?i("Button",{attrs:{type:"warning",size:"small"},on:{click:function(t){return e.openModal(s)}}},[e._v("提交物流 ")]):e._e(),s.afterSaleAllowOperationVO.cancel?i("Button",{attrs:{type:"error",size:"small"},on:{click:function(t){return e.cancel(s.sn)}}},[e._v(" 取消售后 ")]):e._e()],1)])])]}),e.spinShow?i("Spin",{attrs:{size:"large",fix:""}}):e._e()],2),i("div",{staticClass:"page-size"},[i("Page",{attrs:{total:e.total,"page-size":e.params.pageSize,"show-sizer":""},on:{"on-change":e.changePageNum,"on-page-size-change":e.changePageSize}})],1),i("Modal",{attrs:{width:"530"},model:{value:e.logisticsShow,callback:function(t){e.logisticsShow=t},expression:"logisticsShow"}},[i("p",{attrs:{slot:"header"},slot:"header"},[i("span",[e._v("提交物流信息")])]),i("div",[i("div",{staticClass:"goods-list modal-goods"},[i("img",{staticClass:"hover-color",attrs:{src:e.singleOrder.goodsImage,alt:""},on:{click:function(t){return e.goodsDetail(e.singleOrder.skuId,e.singleOrder.goodsId)}}}),i("div",[i("div",{staticClass:"hover-color",on:{click:function(t){return e.goodsDetail(e.singleOrder.skuId,e.singleOrder.goodsId)}}},[e._v(" "+e._s(e.singleOrder.goodsName)+" ")]),i("div",{staticClass:"mt_10"},[i("span",{staticClass:"global_color"},[e._v(e._s(e._f("unitPrice")(e.singleOrder.flowPrice,"￥"))+" ")]),e._v("x "+e._s(e.singleOrder.num)+" ")])])]),i("Form",{ref:"form",attrs:{model:e.form,"label-position":"left","label-width":100,rules:e.rules}},[i("FormItem",{attrs:{label:"物流公司",prop:"logisticsId"}},[i("Select",{attrs:{placeholder:"请选择物流公司"},model:{value:e.form.logisticsId,callback:function(t){e.$set(e.form,"logisticsId",t)},expression:"form.logisticsId"}},e._l(e.companyList,function(t){return i("Option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.name))])}),1)],1),i("FormItem",{attrs:{label:"快递单号",prop:"logisticsNo"}},[i("Input",{attrs:{placeholder:"请填写快递单号"},model:{value:e.form.logisticsNo,callback:function(t){e.$set(e.form,"logisticsNo",t)},expression:"form.logisticsNo"}})],1),i("FormItem",{attrs:{label:"发货时间",prop:"mDeliverTime"}},[i("DatePicker",{staticStyle:{width:"100%"},attrs:{type:"date",format:"yyyy-MM-dd",placeholder:"选择发货时间"},on:{"on-change":e.changeTime},model:{value:e.form.mDeliverTime,callback:function(t){e.$set(e.form,"mDeliverTime",t)},expression:"form.mDeliverTime"}})],1)],1)],1),i("div",{staticStyle:{"text-align":"right"},attrs:{slot:"footer"},slot:"footer"},[i("Button",{on:{click:function(t){e.logisticsShow=!1}}},[e._v("关闭")]),i("Button",{attrs:{type:"primary",loading:e.submitLoading},on:{click:e.submitDelivery}},[e._v("提交")])],1)])],1)},[],!1,null,"32b4521a",null);s.default=r.exports},9243:function(t,s,e){"use strict";e.d(s,"b",function(){return i}),e.d(s,"a",function(){return a});const i=[{name:"全部",status:"ALL"},{name:"未付款",status:"UNPAID"},{name:"已付款",status:"PAID"},{name:"待发货",status:"UNDELIVERED"},{name:"已发货",status:"DELIVERED"},{name:"已完成",status:"COMPLETED"},{name:"待核验",status:"TAKE"},{name:"已取消",status:"CANCELLED"}],a=[{name:"申请中",status:"APPLY"},{name:"通过",status:"PASS"},{name:"拒绝",status:"REFUSE"},{name:"买家退货，待卖家收货",status:"BUYER_RETURN"},{name:"卖家确认收货",status:"SELLER_CONFIRM"},{name:"卖家终止售后",status:"SELLER_TERMINATION"},{name:"买家确认收货",status:"BUYER_CONFIRM"},{name:"买家取消售后",status:"BUYER_CANCEL"},{name:"完成售后",status:"COMPLETE"},{name:"等待平台退款",status:"WAIT_REFUND"}]},bdc6:function(t,s,e){"use strict";e("4866")}}]);