import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../services/api.service";
import { OnsNavigator, Params } from "ngx-onsenui";
import { ProductDetailPageComponent } from "../product-detail-page/product-detail-page.component";
type Group = { children: BangweiProduct[]; groupName: string };

@Component({
  selector: "ons-page[product-category]",
  templateUrl: "./product-category-page.component.html",
  styleUrls: ["./product-category-page.component.css"]
})
export class ProductCategoryPageComponent implements OnInit {
  selectedGroup: Group;
  groups: { children: BangweiProduct[]; groupName: string }[] = [];
  showProducts: BangweiProduct[] = [];

  refershProducts() {
    let products: BangweiProduct[] = [];
    if (this.selectedGroup) {
      products = this.selectedGroup.children;
    } else {
      this.groups.forEach(group => products.push(...group.children));
    }
    this.showProducts = products;
  }
  constructor(public api: ApiService, public navigator: OnsNavigator, public params:Params) {}

  ngOnInit() {
    this.listProductGroupAndChildren();
  }

  async listProductGroupAndChildren() {
    this.groups = await this.api.listGroupAndProducts();
    this.refershProducts();
  }
  goDetail(productId){
    this.navigator.element.pushPage(ProductDetailPageComponent, { data: { productId}})
  }
 
}
