import { Component, OnInit, OnDestroy } from "@angular/core";
import { ApiService } from "../../services/api.service";
import { Router } from "@angular/router";
import { Params, OnsNavigator } from "ngx-onsenui";
import * as ons from "onsenui";
import { ProductDetailPageComponent } from "../product-detail-page/product-detail-page.component";

enum ViewState {
  Count,
  Edit
}
@Component({
  selector: "ons-page[shopingCart]",
  templateUrl: "./shoping-cart-page.component.html",
  styleUrls: ["./shoping-cart-page.component.css"]
})
export class ShopingCartPageComponent implements OnInit, OnDestroy {
  ViewState = ViewState;
  state: ViewState = ViewState.Count;
  checkOrderMoney = 0;

  orders: {
    _id?: string;
    num: number;
    product: BangweiProduct;
    checked?: boolean;
  }[] = [];
  constructor(
    public api: ApiService,
    public router: Router,
    public params: Params,
    public navigator: OnsNavigator
  ) {}
  goNoNavibar() {
    if (!this.params.data.end) {
      this.navigator.element.pushPage(ShopingCartPageComponent, {
        data: { end: true }
      });
    }
  }
  ngOnInit() {
    this.listUnpayOrders();
  }
  ngOnDestroy() {}

  async listUnpayOrders() {
    this.orders = await this.api.userUnpayOrders();
    this.orders.forEach(order => (order.checked = false));
  }

  async addOrderProductNum(orderId) {
    await this.api.userAddOrderNum(orderId);
    await this.listUnpayOrders();
  }
  async lessOrderProductNum(orderId) {
    await this.api.userLessOrderNum(orderId);
    await this.listUnpayOrders();
  }
  toggleCheckAll() {
    if (this.isAllChecked()) {
      this.orders.forEach(order => (order.checked = false));
    } else {
      this.orders.forEach(order => (order.checked = true));
    }
  }
  isAllChecked(): boolean {
    return this.orders.every(order => order.checked);
  }
  async removeChekcedOrders() {
    let orderIds = this.orders
      .filter(order => order.checked)
      .map(order => order._id);
    console.log(orderIds);
    await this.api.removeUnpayOrders(orderIds);
    await this.listUnpayOrders();
    this.allMoney();
    ons.notification.alert({
      title: "提示",
      message: "删除成功",
      buttonLabel: "确定"
    });
  }
  async allMoney() {
    this.checkOrderMoney = 0;
    let checkOrder = this.orders.filter(order => order.checked);
    //  console.log(checkOrder)

    checkOrder.forEach(i => {
      this.checkOrderMoney += i.num * i.product.price;

      // console.log(this.checkOrderMoney)
    });
  }
  async goBack() {
    if (this.navigator.element.pages.length < 2) {
      localStorage.setItem("tabs", "1");
      console.log("set localstorage 1");
    } else {
      this.navigator.element.popPage();
    }
  }
  async allOrderMoney() {
    let orderIds = this.orders
      .filter(order => order.checked)
      .map(order => order._id);
    await this.api.removeUnpayOrders(orderIds);
    await this.listUnpayOrders();

    this.router.navigateByUrl("/create-order");
  }
  goProductDetail(productId) {
    this.navigator.element.pushPage(ProductDetailPageComponent, {
      data: { productId }
    });
  }
}
