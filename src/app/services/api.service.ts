import { Injectable } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import "rxjs/observable/fromPromise";
import { map } from "rxjs/operators";
import { Http } from "@angular/http";
import { HttpClient } from "@angular/common/http";
// import {Http} from '@angular/http'
import { Observable } from "rxjs/Observable";
import { Params, OnsNavigator } from "ngx-onsenui";
import{UnPaidComponent} from "../pages/un-paid/un-paid.component"
import { UnpayOrderComponent } from "../com/unpay-order/unpay-order.component";
import * as ons from "onsenui"
export enum BangweiOrderState {
  Unpay = 1,
  SendProduct, //代发货
  Finish, // 确认收货
  Commented, // 已经评论
  Cancel, // 订单待支付取消
  WaitReciveProduct, // 代收获
  SendProductCancel, // 代发货取消
  WaitProductCancel, // 待收货取消
  ReciveCancel, // 已收货取消
  Close,// 订单奖金派发完毕
  RequestRefound // 商户申请退款

}

@Injectable()
export class ApiService {
  get ip() {
    return this.serverIp;
  }

  localip = "http://localhost";

  serverIp = "http://118.31.72.227";

  private set shopUserId(id: string) {
    localStorage.setItem("shopUserId", id);
  }
  private get shopUserId(): string {
    return localStorage.getItem("shopUserId")
      ? localStorage.getItem("shopUserId")
      : "";
  }
  showErrorMsg(msg: string, timeout = 2000) {
    ons.notification.toast(msg, { timeout });
  }
  // 邦为商城api
  bangweiShopClientApi = {
    /**
      *  method: get  
      */
    listGroupAndProducs: "/api/bangwei-shop-client/list-group-and-products",

    productDetail: "/api/bangwei-shop-client/product-detail",
    checkUserLogin: "/api/bangwei-shop-client/check-user-login",
    userLogin: "/api/bangwei-shop-client/user-login",
    userActiveTickets: "/api/bangwei-shop-client/user-active-tickets",
    userTicks:"/api/bangwei-shop-client/user-tickets",
    userUnpayOrders: "/api/bangwei-shop-client/user-unpay-orders",
    userCreateOrder: "/api/bangwei-shop-client/user-create-order",
    userAddOrderNum: "/api/bangwei-shop-client/user-add-order-num",
    userLessOrderNum: "/api/bangwei-shop-client/user-less-order-num",
    userHistoryOrders: "/api/bangwei-shop-client/user-history-orders",
    orderDetail: "/api/bangwei-shop-client/order-detail",
    payOrder: "/api/bangwei-shop-client/pay-order",
    // getPayOrderParams: "/api/bangwei-shop-client/pay-order-params",
    getGroupAndProducts: "/api/bangwei-shop-client/getGroupAndProducts",
    addProductToCollects: '/api/bangwei-shop-client/add-product-collects', //添加产品收藏,
    getCollects: '/api/bangwei-shop-client/product-collects', // 获取用户产品 搜藏    get: ?shopUserId
    listUserUnpayOrder: '/api/bangwei-shop-client/list-user-unpay-order',  //列出用户待付款
    removeUnpayOrders: '/api/bangwei-shop-client/remove-unpay-orders', // 取消订单
    getShopUserInfo: '/api/bangwei-shop-client/get-shopuserinfo', // 商城用户信息
    updateShopUserInfo: '/api/bangwei-shop-client/update-shopuser-info',
    getShopUserCollects: '/api/bangwei-shop-client/get-shopuser-collects', // 获取商户的收藏产品
    removeShopUserCollect: '/api/bangwei-shop-client/remove-shopuser-collect', //移除商户用户的收藏 collectId
    getHistoryViewProducts: "/api/bangwei-shop-client/get-historyview-products",  // 用户浏览历史
    addHistoryViewProduct: '/api/bangwei-shop-client/add-historyview-product',   // 添加用户浏览历史
    shopUserReciveAddress: '/api/bangwei-shop-client/recive-address-list', //get 获取用户收获地址,isDefault=true为默认收获地址
    createShopUserReciveAddress: '/api/bangwei-shop-client/create-recive-address', // post 创建用户收获地址 query:shopUserId   body :ReciveAddress
    setDefaultReciveAddress: '/api/bangwei-shop-client/set-default-recive-address', // get 设置商户默认用户地址 shopUserId reciveAddressId 
    updateReciveAddress: '/api/bangwei-shop-client/update-recive-address', // post 更新收获地址query:  shopUserId  reciveAddressId,body:ReciveAddress
    listShopUserOrders: '/api/bangwei-shop-client/list-shopuser-orders',   // get :query shopUserId,
    getUnpayOrderDetail: '/api/bangwei-shop-client/get-unpay-order-detail', // 获取未支付的订单详情
   removeReciveAddress: '/api/bangwei-shop-client/remove-recive-address', //get shopUserId reciveAddressId 移除收获地址
    getUserDefailtReciveAddress: '/api/bangwei-shop-client/get-user-default-recive-address',  // get   query:shopUserId  获取用户默认收货地址
    getUserOrders: '/api/bangwei-shop/get-user-orders', // get query: shopUserId state?   
    getReciveAddressById: '/api/bangwei-shop/get-recive-address', // get reciveAddressId
    setReciveAddressTop: '/api/bangwei-shop/set-reciveAddress-top',//get query:{reciveAddressId}
    getPayOrderParams: "/api/bangwei-shop-client/pay-order-params",  // post    body:{orderId,ticketIds:[],truePayMoney:}
    /**```javascript 
    * function postRequestRefound(body:{cancelReason:string} ,  query: {shopUserId,orderId}){
    *
    * }
    *  ```*/
    requestRefound: '/api/bangwei-shop/request-refound',
    /** 
 * ```javascript
 * 
 * function getConfirmReciveProduct(query:{shopUserId,orderId}){
 * return this.Get(this.bangweiShopClientApi.confirmReciveProduct,{params:query})
 * }
 * ```
 */
    confrimReciveProduct: '/api/bangwei-shop/confirm-redicve-product',
  };

  getCityJson(){
    return  new Promise<any>(resolve=>{
      this.http.get('/assets/city.json').subscribe(rtn=>{
        resolve(rtn.json());
      });
    }) ;
  }
  getUserOrders(state?){
    if(state){
      return this.Get(this.bangweiShopClientApi.getUserOrders, { params: { shopUserId: this.shopUserId, state } })
    }else{
      return this.Get(this.bangweiShopClientApi.getUserOrders, { params: { shopUserId: this.shopUserId } })
    }
  
  }
  getUnpayOrderDetail(){
    return this.Get(this.bangweiShopClientApi.getUserOrders,{params:{shopUserId:this.shopUserId}})
  }
  shopUserReciveAddress(){
     return this.Get(this.bangweiShopClientApi.shopUserReciveAddress,{params:{shopUserId:this.shopUserId}})
  }

  createShopUserReciveAddress(reciveAddress:ShopUserReciveAddress){ 
    return this.Post(this.bangweiShopClientApi.createShopUserReciveAddress,reciveAddress, {params:{shopUserId:this.shopUserId}})
  }
 
  setDefaultReciveAddress(reciveAddressId:string){
    return this.Get(this.bangweiShopClientApi.setDefaultReciveAddress, {params:{shopUserId:this.shopUserId,reciveAddressId}})
  }
  
  updateReciveAddress(reciveAddressId:string){
    return this.Post(this.bangweiShopClientApi.updateReciveAddress,{params:{shopUser:this.shopUserId}})
  }
  
  getHistoryViewProducts(){
    return this.Get(this.bangweiShopClientApi.getHistoryViewProducts,{params:{shopUserId:this.shopUserId}})
  }
  addHistoryViewProduct(productId){
    return this.Get(this.bangweiShopClientApi.addHistoryViewProduct,{params:{shopUserId:this.shopUserId,productId}})
  }
  getReciveAddressById(reciveAddressId){
    return this.Get(this.bangweiShopClientApi.getReciveAddressById,{params:{reciveAddressId}})
  }

  updateShopUserInfo(shopUser:ShopUser){
    return this.Post(this.bangweiShopClientApi.updateShopUserInfo,shopUser,{params:{shopUserId:this.shopUserId}})
  }

  listUserUnpayOrder(){
    return this.Get(this.bangweiShopClientApi.listUserUnpayOrder,{params:{shopUserId:this.shopUserId}})
  }
  payOrder(orderId: string, ticketIds: string[], truePayMoneyNum: number, reciveAddressId:string) {
    return this.Post(
    this.bangweiShopClientApi.payOrder,
      {
        orderId,
        tickets: ticketIds,
        truePayMoneyNum,
        reciveAddressId      
      },
      { params: { orderId, shopUserId: this.shopUserId} }
    );
  }
  getPayOrderParams(orderId, ticketIds, truePayMoney) {
    return this.Post(
     this.bangweiShopClientApi.getPayOrderParams,
     
       { orderId, ticketIds ,truePayMoney}
    
    );
  }

  Get(url: string, options?: { params: any }) {
    if (this.shopUserId) {
      if (!options) {
        options = { params: { userId: this.shopUserId } };
      } else {
        options.params.shopUserId = this.shopUserId;
      }
    }
    return this.parseResponse(this.httpClient.get(this.ip + url, options));
  }

  Post(url: string, data?: any, options?: { params: any }) {
    return this.parseResponse(
      this.httpClient.post(this.ip + url, data, options)
    );
  }

  Put(url: string, data?: any, options?) {
    return this.parseResponse(
      this.httpClient.put(this.ip + url, data, options)
    );
  }
  Delete(url: string,options?:any) {
    return this.parseResponse(this.httpClient.delete(this.ip + url,options));
  }

  private parseResponse(response: Observable<Object>): Promise<any> {
    return new Promise(resolve => {
      response.subscribe(rtn => {
        if (rtn["ok"]) {
          resolve(rtn["data"] as any);
        } else {
          this.showErrorMsg(rtn["data"]);
          resolve(false as any);
        }
      });
    });
  }

  listGroupAndProducts() {
    return this.Get(this.bangweiShopClientApi.listGroupAndProducs);
  }

  getProductDetail(productId: string) {
    return this.Get(this.bangweiShopClientApi.productDetail, {
      params: { productId }
    });
  }

  checkUserLogin() {
    return this.Get(this.bangweiShopClientApi.checkUserLogin);
  }
  async userLogin(nickname, openid) {
    let result = await this.Post(this.bangweiShopClientApi.userLogin, {
      nickname,
      openid
    });
    if (result) {
      this.shopUserId = result.user._id;
      return true;
    } else {
      return false;
    }
  }
  userActiveTickets() {
    return this.Get(this.bangweiShopClientApi.userActiveTickets, { params: { shopUserId: this.shopUserId } });
  }

  userTicks(){
    return this.Get(this.bangweiShopClientApi.userTicks,{params:{shopUserId:this.shopUserId}})
  }
  userUnpayOrders() {
    return this.Get(this.bangweiShopClientApi.userUnpayOrders,{params:{shopUserId:this.shopUserId}});
  }

  userCreateOrder(productId, num) {
    return this.Post(
      this.bangweiShopClientApi.userCreateOrder,
      {
        product:productId,
        num,
      },
      {
        params: { shopUserId: this.shopUserId }
      }
    );
  }
  userAddOrderNum(orderId) {
    return this.Put(this.bangweiShopClientApi.userAddOrderNum,{}, {params:{orderId:orderId,shopUserId:this.shopUserId}});
  }
  userLessOrderNum(orderId) {
    return this.Put(this.bangweiShopClientApi.userLessOrderNum,{}, {params :{orderId,shopUserId:this.shopUserId}});
  }
  userHistoryOrders() {
    return this.Get(this.bangweiShopClientApi.userHistoryOrders);
  }
  /**计算所有订单 数量和总价 */
  countOrders() {
    return this.userUnpayOrders().then(orders => {
      //  orders:
    });
  }

  navigateLoginPage() {
    return this.router.navigateByUrl("/login");
  }
  navigateHomePage() {
    return this.router.navigateByUrl("/");
  }
  navigateOrdersPage(orderId) {
    if (orderId) {
      return this.router.navigateByUrl("/orders", { queryParams: { orderId } });
    } else {
      return this.router.navigateByUrl("/orders");
    }
  }

  logout() {
    localStorage.clear();
    this.navigateHomePage();
  }

  getOrderDetail(orderId:string) {
    return this.Get(this.bangweiShopClientApi.orderDetail, {
      params: { orderId }
    });
  }

  getGroupAndProducts(groupId: string) {
    return this.Get(this.bangweiShopClientApi.getGroupAndProducts, {
      params: { groupId }
    });
  }

  addProductCollect(productId: string) {
    return this.Get(this.bangweiShopClientApi.addProductToCollects, {
      params: {
        shopUserId: this.shopUserId,
        productId
      }
    });
  }
  getCollects(){
    return this.Get(this.bangweiShopClientApi.getCollects,{params:{shopUserId:this.shopUserId}});
  }
  removeUnpayOrders(orderIds:string[]){
    return this.Delete(this.bangweiShopClientApi.removeUnpayOrders,{params:{shopUserId:this.shopUserId,orderIds:orderIds}})
  }

  getShopUserInfo(){
    return this.Get(this.bangweiShopClientApi.getShopUserInfo,{params:{shopUserId:this.shopUserId}});
  }
  removeShopUserCollect(collectId){
    return this.Get(this.bangweiShopClientApi.removeShopUserCollect,{params:{shopUserId:this.shopUserId,collectId}})
  }
  getShopUserCollects(){
    return this.Get(this.bangweiShopClientApi.getCollects,{params:{shopUserId:this.shopUserId}});
  }
  removeReciveAddress(reciveAddressId:string){
    return this.Get(this.bangweiShopClientApi.removeReciveAddress, { params: { shopUserId: this.shopUserId, reciveAddressId}})

 }
  setReciveAddressTop(reciveAddressId: string) {
    return this.Get(this.bangweiShopClientApi.setReciveAddressTop, { params: { shopUserId: this.shopUserId,reciveAddressId } })
  }
  getUserDefailtReciveAddress(){
    return this.Get(this.bangweiShopClientApi.getUserDefailtReciveAddress,{params:{shopUserId:this.shopUserId,}})

  }
  /**订单支付页面*/
  // goUnpay(orderId:string,addressId:string,ticketIds:string[]=[],checkOrderMoney){

  //   // this.navigatory.element.pushPage(UnpayOrderComponent,{data:{orderId:orderId,reciveAddressId:addressId,ticketIds:ticketIds,checkOrderMoney:checkOrderMoney}})
  //   // this.router.navigateByUrl(`/un-paid?orderId=${orderId}&reciveAddressId=${addressId}&ticketIds=${ticketIds.join(',')}&checkOrderMoney=${checkOrderMoney}`)
  // }
  /**订单支付成功后详情页面 */
  // goOrderDetail(orderId: string, addressId: string, ticketIds: string[] = [], checkOrderMoney) {
  //   this.router.navigateByUrl(`/order-detail?orderId=${orderId}&reciveAddressId=${addressId}&ticketIds=${ticketIds.join(',')}&checkOrderMoney=${checkOrderMoney}`)
  // }
  // body:cancelReason   query: shopUserId orderId
  requestRefound(cancelReason,orderId){
    return this.Post(this.bangweiShopClientApi.requestRefound,{cancelReason},{params:{shopUserId:this.shopUserId,orderId:orderId}})
  }
  getConfirmReciveProduct(query: { shopUserId?, orderId }) {
    return this.Get(this.bangweiShopClientApi.confrimReciveProduct, { params: {shopUserId:this.shopUserId,orderId:query.orderId} })
  }

  constructor(
    public httpClient: HttpClient,
    public router: Router,
    public route: ActivatedRoute,
    public http: Http,
    // public params: Params,
    // public navigatory: OnsNavigator
  ) {}
}
