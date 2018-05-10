import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
  AfterContentInit
} from "@angular/core";
import { HomePageComponent } from "../home-page/home-page.component";
import { ProductCategoryPageComponent } from "../product-category-page/product-category-page.component";
import { ShopingCartPageComponent } from "../shoping-cart-page/shoping-cart-page.component";
import { PersonCenterPageComponent } from "../person-center-page/person-center-page.component";

@Component({
  selector: "ons-page[main]",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.css"]
})
export class MainPageComponent implements OnInit, OnDestroy, AfterContentInit {
  @ViewChild("tabbar") tabbar;
  initialPage = HomePageComponent;
  homePage = { label: "首页", icon: "icon-home", page: HomePageComponent };
  autoChangeTabTimer: any;
  categoryPage = {
    label: "产品分类",
    icon: "category",
    page: ProductCategoryPageComponent
  };
  shopingCart = ShopingCartPageComponent;
  personCenter = PersonCenterPageComponent;
  setVisibleBar() {
    this.autoChangeTabTimer = setInterval(() => {
      let tabIndex = localStorage.getItem("tabs")
        ? parseInt(localStorage.getItem("tabs"))
        : false;
      // console.log(tabIndex);
      if (tabIndex) {
        this.tabbar.nativeElement.setActiveTab(tabIndex);
        localStorage.setItem("tabs", "");
      }
    }, 100);
  }
  constructor() {}
  ngAfterContentInit() {
    this.setVisibleBar();
  }

  ngOnInit() {}
  async ngOnDestroy() {
    clearInterval(this.autoChangeTabTimer);
  }
}
