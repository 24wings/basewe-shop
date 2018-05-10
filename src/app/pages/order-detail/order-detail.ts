import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../services/api.service";
import { ActivatedRoute, Router } from "@angular/router";
import { async } from "@angular/core/testing";
import { Params, OnsNavigator } from "ngx-onsenui";
import { OrderDetailAllPageComponent } from "../order-detail-all-page/order-detail-all-page.component";
import { HomePageComponent } from "../home-page/home-page.component";
import { MainPageComponent } from "../main-page/main-page.component";

@Component({
  selector: "ons-page[app-order-detail]",
  templateUrl: "./order-detail.html",
  styleUrls: ["./order-detail.css"]
})
export class OrderDetailComponent implements OnInit {
  orderId: any;
  order: BangweiOrder;
  reciveAddressId: string;
  truePayMoney;
  ticketIds: string[] = [];
  constructor(
    public apiService: ApiService,
    public route: ActivatedRoute,
    public router: Router,
    public params: Params,
    public navigatory: OnsNavigator
  ) {
    this.orderId = this.params.data.orderId;
  }

  ngOnInit() {
    this.getOrder(this.orderId);
    this.payOrderdetail();
    console.log(this.reciveAddressId);
  }
  async payOrderdetail() {
    // this.order= await this.apiService.payOrder(this.orderId, this.ticketIds, this.truePayMoney, this.reciveAddressId)
  }
  async getOrder(order) {
    this.order = await this.apiService.getOrderDetail(order);

    console.log(this.order);
  }
  orderDetail() {
    this.navigatory.element.pushPage(OrderDetailAllPageComponent, {
      data: { orderId: this.orderId }
    });
  }
  goHome() {
    this.navigatory.element.popPage();
    this.navigatory.element.popPage();
    this.navigatory.element.popPage();
  }
}
