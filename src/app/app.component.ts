import { Component, ViewChild } from "@angular/core";
import { ApiService } from "./services/api.service";
import { OnsNavigator } from "ngx-onsenui";
import { Router, ActivatedRoute } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { ProductCategoryPageComponent } from "./pages/product-category-page/product-category-page.component";
import { ShopingCartPageComponent } from "./pages/shoping-cart-page/shoping-cart-page.component";
import { PersonCenterPageComponent } from "./pages/person-center-page/person-center-page.component";
import { MainPageComponent } from "./pages/main-page/main-page.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";
  @ViewChild("navigator") navigator:any;
  initPage = MainPageComponent;
  groups: BangweiProductGroup[] = [];

  ngOnInit() {
    // let shopUserId = location.search;
    // if(/shopUserId/)
    // this.api.listGroupAndProducts();
  }

  constructor(
    public api: ApiService,
    public route: ActivatedRoute,
    public router: Router
  ) // public navigatory: OnsNavigator
  {
    if(window.location.search){
  let shopUserId =      router.parseUrl(window.location.search).queryParams.shopUserId;
    if(shopUserId){
    localStorage.setItem('shopUserId',shopUserId)
    }
    }
  }
  ngAfterContentInit() {
    var counter = 0;
    if (window.history || window.history.pushState) {
      console.log("添加不可回退事件");
      window.addEventListener("popstate", () => {
        window.history.pushState("forward", null, "#");
        window.history.forward();
        console.log(this.navigator);
        this.navigator.nativeElement.popPage();
      });
    }

    window.history.pushState("forward", null, "#"); //在IE中必须得有这两行
    window.history.forward();
  }
}
