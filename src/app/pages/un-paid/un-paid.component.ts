import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router } from "@angular/router";
import { Params, OnsNavigator } from 'ngx-onsenui';
import {OrderDetailComponent} from "../order-detail/order-detail"
import {MyOrderComponent} from "../my-order/my-order.component"
import{ProductDetailPageComponent} from "../product-detail-page/product-detail-page.component";
declare var WeixinJSBridge:any;
@Component({
  selector: 'ons-page[app-un-paid]',
  templateUrl: './un-paid.component.html',
  styleUrls: ['./un-paid.component.css']
})
export class UnPaidComponent implements OnInit {
  orderId: any; order: BangweiOrder; addressId:any;
  reciveAddressId: string;
  reciveAddress: ShopUserReciveAddress;
  truePayMoney
ticketIds:string[]=[]
  constructor(public apiService: ApiService, public route: ActivatedRoute, public router: Router, public navigatory: OnsNavigator, public params: Params, ) {
    this.reciveAddressId = this.params.data.reciveAddressId;
    this.ticketIds = this.params.data.ticketIds;
    this.truePayMoney = this.params.data.truePayMoney
    console.log(this.ticketIds);
     this.orderId = this.params.data.orderId;
    }
  ngOnInit() {
     

    this.getOrder(this.orderId)
 this.getReciveAddress()

  }
 
  async getOrder(order) {

    this.order = await this.apiService.getOrderDetail(order)


 console.log(this.order)

  }
  async getReciveAddress() {
    this.reciveAddress = await this.apiService.getReciveAddressById(this.reciveAddressId)
  }
  async removeOrder(){
   this.order= await this.apiService.removeUnpayOrders(this.orderId)
  //  this.router.navigateByUrl("/my-order")
    this.apiService.showErrorMsg("取消订单成功")
    this.navigatory.element.pushPage(MyOrderComponent)

  }
  async payOrder(){
    console.log(this.orderId,this.ticketIds,this.truePayMoney,this.reciveAddressId);
    //  await this.apiService.payOrder(this.orderId, this.ticketIds, this.truePayMoney,this.reciveAddressId);
    // this.apiService.goOrderDetail(this.orderId, this.reciveAddressId, this.ticketIds, this.truePayMoney)
    // this.apiService.goOrderDetail(this.orderId,this.reciveAddressId,this.ticketIds,this.truePayMoney);
 let res=await  this.apiService.getPayOrderParams(this.orderId,this.ticketIds,this.truePayMoney);
    
    WeixinJSBridge.invoke('getBrandWCPayRequest', res,  (res)=> {
      if (res.err_msg == "get_brand_wcpay_request:ok") {
        this.apiService.payOrder(this.orderId, this.ticketIds, this.truePayMoney, this.reciveAddressId)
        

        // alert("支付成功");
        // 这里可以跳转到订单完成页面向用户展示

         this.navigatory.element.pushPage(OrderDetailComponent, {
      data: {
        orderId: this.orderId,

        ticketIds: this.ticketIds,
        truePayMoney: this.truePayMoney

      }
    })
      } else {
        alert(JSON.stringify(res));
      }
    });
    // this.navigatory.element.pushPage(OrderDetailComponent, {
    //   data: {
    //     orderId: this.orderId,
 
    //     ticketIds: this.ticketIds,
    //     truePayMoney: this.truePayMoney

    //   }
    // })
  }
}
