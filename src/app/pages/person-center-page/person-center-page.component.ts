import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../services/api.service";
import { MyOrderComponent } from "../my-order/my-order.component";
import { OnsNavigator,NavigatorPage } from "ngx-onsenui";
import {PersonInfoPageComponent } from "../person-info-page/person-info-page.component"
import{TicketComponent} from "../ticket/ticket.component"
import{TransferPageComponent} from "../transfer-page/transfer-page.component"
// import{ReciveAddressPageComponent} from "../recive-address-page/recive-address-page.component"
import{HistoryViewPageComponent} from "../history-view-page/history-view-page.component"
import { ReciveAddressPageComponent } from "../recive-address-page/recive-address-page.component";
import{MyCollectsPageComponent} from "../my-collects-page/my-collects-page.component"
enum BangweiOrderState {
  Unpay = 1,
  SendProduct, //代发货
  Finish, // 确认收货
  Commented, // 已经评论
  Cancel, // 订单待支付取消
  WaitReciveProduct, // 代收获
  SendProductCancel, // 代发货取消
  WaitProductCancel, // 待收货取消
  ReciveCancel, // 已收货取消
  Close // 订单奖金派发完毕
}
@Component({
  selector: "ons-page[personCenter]",
  templateUrl: "./person-center-page.component.html",
  styleUrls: ["./person-center-page.component.css"]
})
export class PersonCenterPageComponent implements OnInit {
  ViewState = BangweiOrderState;
  state = BangweiOrderState.Unpay;
  userInfo: any;
  get isUserLogin() {
    return true;
  }
  constructor(public api: ApiService, public navigator: OnsNavigator,) {


  }

  ngOnInit() {
    if (this.isUserLogin) {
      this.getUserInfo();
     
    }

  }
  goMyOrderPage(){
    this.navigator.element.pushPage(MyOrderComponent)
  }
  async getUserInfo() {
    this.userInfo = await this.api.getShopUserInfo();
  }
  editUserInfo(){
 
    this.navigator.element.pushPage(PersonInfoPageComponent)
  }
  myTicket(){
    this.navigator.element.pushPage(TicketComponent)
  }
  goCollects(){
    this.navigator.element.pushPage(MyCollectsPageComponent)
  }
  goAddress(){
this.navigator.element.pushPage(ReciveAddressPageComponent)
  }
  goHistory(){
    this.navigator.element.pushPage(HistoryViewPageComponent)
  }
}
