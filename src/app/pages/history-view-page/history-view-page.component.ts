import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../services/api.service";
import { OnsNavigator } from "ngx-onsenui";
import { ProductDetailPageComponent } from "../product-detail-page/product-detail-page.component";
@Component({
  selector: "ons-page[app-history-view-page]",
  templateUrl: "./history-view-page.component.html",
  styleUrls: ["./history-view-page.component.css"]
})
export class HistoryViewPageComponent implements OnInit {
  views: {
    year: number;
    month: number;
    date: number;
    product: BangweiProduct;
  }[] = [];
  viewGroups: { dt: Date; products: BangweiProduct[] }[] = [];
  constructor(public api: ApiService, public navigator: OnsNavigator) {}

  ngOnInit() {
    this.listViews();
  }

  async listViews() {
    this.viewGroups = [];
    this.views = await this.api.getHistoryViewProducts();
    for (let view of this.views) {
      let alreadyHaveGroup = this.viewGroups.find(
        viewGroup =>
          viewGroup.dt.getFullYear() == view.year &&
          viewGroup.dt.getMonth() == view.month &&
          viewGroup.dt.getDate() == view.date
      );
      if (alreadyHaveGroup) {
        alreadyHaveGroup.products.push(view.product);
      } else {
        this.viewGroups.push({
          dt: new Date(view.year, view.month, view.date),
          products: [view.product]
        });
      }
    }
    this.viewGroups.sort((pre, after) => {
      return after.dt.getTime() - pre.dt.getTime();
    });
  }
  async goProductDetail(productId) {
    this.navigator.element.pushPage(ProductDetailPageComponent, {
      data: { productId }
    });
  }
}
