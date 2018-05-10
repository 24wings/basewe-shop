import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../services";
import { OnsNavigator } from "ngx-onsenui";
import { ProductDetailPageComponent } from "../product-detail-page/product-detail-page.component";
@Component({
  selector: "ons-page[collects-page]",
  templateUrl: "./my-collects-page.component.html",
  styleUrls: ["./my-collects-page.component.css"]
})
export class MyCollectsPageComponent implements OnInit {
  products: BangweiProduct[] = [];
  constructor(public api: ApiService, public navigatory: OnsNavigator) {}

  ngOnInit() {
    this.listCollects();
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }
  async listCollects() {
    this.products = await this.api.getCollects();
  }

  async removeCollect(collectId) {
    await this.api.removeShopUserCollect(collectId);
    await this.listCollects();
  }
  goProductDetail(productId: string) {
    this.navigatory.element.pushPage(ProductDetailPageComponent, {
      data: { productId }
    });
  }
}
