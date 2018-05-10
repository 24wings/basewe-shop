import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "../../services/api.service";
// import { ProductCategoryPageComponent } from "../product-category-page/product-category-page.component";
import { OnsNavigator } from "ngx-onsenui";
import { ProductDetailPageComponent } from "../product-detail-page/product-detail-page.component";
import { ShopingCartPageComponent } from "../shoping-cart-page/shoping-cart-page.component";
interface Group {
  _id?: string;
  groupName?: string;
  children?: BangweiProduct[];
  summary?: string;
  createDt?: Date;
  image?: CloudinaryImage;
}
@Component({
  selector: "ons-page[home]",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"]
})
export class HomePageComponent implements OnInit {
  systemGroup: Group; // 系统分组
  bannerGroup: Group; //广告投放
  shopShowGroup: Group;
  shopYingxiao: Group;

  constructor(
    public api: ApiService,
    // public router: Router,
    private navigator: OnsNavigator
  ) {}

  ngOnInit() {
    // let shopUserId = this.router.parseUrl(window.location.search).queryParams
    // .shopUserId;
    // console.log(shopUserId);
    // if (shopUserId) {
    // localStorage.setItem("shopUserId", shopUserId);
    // }
    this.listHomePageProducts();
  }
  async listHomePageProducts() {
    let result: Group[] = await this.api.listGroupAndProducts();
    for (let group of result) this.categoryGroup(group);
  }
  categoryGroup(group: Group) {
    switch (group.groupName) {
      case "操作系统":
        this.systemGroup = group;
        break;
      case "广告投放":
        this.bannerGroup = group;
        break;
      case "店面展示":
        this.shopShowGroup = group;
        break;
      case "店面营销":
        this.shopYingxiao = group;
        break;
    }
  }
  goProductDetail(product: BangweiProduct,num=1) {
    console.log(product);
    this.navigator.element.pushPage(ProductDetailPageComponent, {
      data: {
        productId: product._id,
        num
      }
    });
  }
  goShopcar() {
    this.navigator.element.pushPage(ShopingCartPageComponent);
  }
}
