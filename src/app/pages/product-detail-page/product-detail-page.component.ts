import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from "../../services/api.service";
// import { locale } from "moment";
import {
  Params,
  OnsNavigator,
  ComponentRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  OnsenModule,
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA
} from "ngx-onsenui";
import * as ons from "onsenui";
// import { MyCollectsPageComponent } from "../my-collects-page/my-collects-page.component";
import { ShopingCartPageComponent } from "../shoping-cart-page/shoping-cart-page.component";
import { CreateOrderComponent } from "../create-order/create-order.component";
import { MyCollectsPageComponent } from "../my-collects-page/my-collects-page.component";

@Component({
  selector: "ons-page[product-detail-page]",
  templateUrl: "./product-detail-page.component.html",
  styleUrls: ["./product-detail-page.component.css"]
})
export class ProductDetailPageComponent implements OnInit {
  animation: string = "default";
  buyNum: number = 1;
  productId: any;

  product: BangweiProduct;

  userActiveTickets: any[] = [];
  constructor(
    public route: ActivatedRoute,
    public api: ApiService,
    public router: Router,
    public params: Params,
    public navigatory: OnsNavigator
  ) {
    this.productId = params.data.productId;
    this.buyNum =params.data.num;
  }

  async ngOnInit() {
   
    await this.addHistoryViewProduct();
   await this.getProductDetail();
   await this.getUserTickets();
    await this.chooseChild()
  }
  async getProductDetail() {
    if (this.productId) {
      this.product = await this.api.getProductDetail(this.productId);
      // if(/M2/.test(this.product.name)){
      //   this.buyNum=10;
      // }
    }
  }

  async addHistoryViewProduct() {
    await this.api.addHistoryViewProduct(this.productId);
  }

  async getUserTickets() {
    this.userActiveTickets = await this.api.userActiveTickets();
  }

  addBuyNum() {
    this.buyNum++;
  }
  lessBuyNum() {
    this.buyNum > 0 ? this.buyNum-- : (this.buyNum = 1);
    if(/M2/.test(this.product.name)){
        if(this.buyNum<10)this.buyNum=10;
    }
  }
  // async addCollect() {
  //   let result = await this.api.addProductCollect(this.product._id);
  //   if (result) {
  //     // alert("添加成功");
  //   } else {
  //   }
  // }
  async collect() {
    let result = await this.api.addProductCollect(this.product._id);

    ons.notification.confirm({
      title: "提示",
      message: "收藏成功",
      cancelable: true,
      buttonLabels: ["继续浏览", "查看"],
      callback: i => {
        if (i == 1) {
          this.navigatory.element.pushPage(MyCollectsPageComponent);
        }
      }
    } as any);
  }
  async shopCart() {
    let result = await this.api.userCreateOrder(this.productId, this.buyNum);
    console.log(result._id);
    console.log(this.product._id);
    if (result) {
      this.router.navigateByUrl(
        "/create-order?orderId=" +
          result._id +
          "?product?product_Id=" +
          this.product._id
      );
    } else {
    }
    ons.notification.confirm({
      title: "提示",
      message: "添加购物车成功",
      cancelable: true,
      buttonLabels: ["继续浏览", "查看"],
      callback: i => {
        if (i == 1) {
          this.navigatory.element.pushPage(ShopingCartPageComponent);
        }
      }
    } as any);
  }
  showErrorMsg(msg: string) {
    alert(`错误:${msg}`);
  }
  // async addShopingCart() {
  //   let result = await this.api.userCreateOrder(this.productId, this.buyNum);
  //   if (result) {
  //     //  alert('添加成功');
  //   }
  // }
  async buy() {
    let result = await this.api.userCreateOrder(this.productId, this.buyNum);
    console.log(result._id);
    console.log(this.product._id);
    if (result) {
      this.navigatory.element.pushPage(CreateOrderComponent, {
        data: {
          orderId: result._id,
          product_Id: this.product._id
        }
      });
      // console.log(result._id)
      // this.router.navigateByUrl(
      //   "/create-order?orderId=" +
      //     result._id +
      //     "?product?product_Id=" +
      //     this.product._id
      // );
    } else {
    }
  }
async chooseChild(){
  // if (/M2/.test(this.product.name)) {
  //   this.product.name ="按摩养生行业生态伺服系统"


  // }

}
  // goShopCart() {
  //   this.router.navigateByUrl("shoping-cart");
  // }
  // goCollect() {
  //   this.router.navigateByUrl("my-collects");
  // }
  getProductname(){
   return  /M2/.test(this.product.name) ? "按摩养生行业生态伺服系统" : this.product.name 
  }


  
}
