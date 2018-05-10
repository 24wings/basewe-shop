import { Component, OnInit, Output } from "@angular/core";
import { BsDatepickerConfig, BsLocaleService } from "ngx-bootstrap/datepicker";
import { listLocales } from "ngx-bootstrap/chronos";
import { Router } from "@angular/router";
import { ApiService } from "../../services/api.service";
import { findIndex } from "rxjs/operators";

enum ViewState {
  List = 1, //列表
  Add, //添加地址
  Update //更新
}
@Component({
  selector: "ons-page[recive-address-page]",
  templateUrl: "./recive-address-page.component.html",
  styleUrls: ["./recive-address-page.component.css"]
})
export class ReciveAddressPageComponent implements OnInit {
  editAddress: ShopUserReciveAddress;

  viewState = ViewState;
  state = ViewState.List;
  locale = "zh-cn";

  newAddress: ShopUserReciveAddress = {
    name: "",
    phone: "",
    region: "",
    city: "",
    area: "",
    detailAddress: "",
    isDefault: true,
    publishRequire: "",
    publishContent: "",
    shopuser: "",
    publishDt: new Date(),
    teachNum:0
  };
  addresses: ShopUserReciveAddress[] = [];
  stars: {}[] = [];
  grayStars: {}[] = [];
  showAddressSelect: boolean = false;
  cityJson: { name: string; city: { name: string; area: string[] }[] }[] = [];
  selectedRegion: { name: string; city: { name: string; area: string[] }[] };
  selectedCity: { name: string; area: string[] };
  selectedArea: string;
  selectedAddress;

  constructor(public router: Router, public apiService: ApiService) {}

  hide() {
    this.state = this.viewState.List;
  }
  async ngOnInit() {
    this.cityJson = await this.apiService.getCityJson();
    let responseStar = 4;
    this.stars = new Array(4);
    this.grayStars = new Array(5 - responseStar);

    this.findMyaddredd();
  }

  complete() {
    this.newAddress.region = this.selectedRegion.name;
    this.newAddress.city = this.selectedCity.name;
    this.newAddress.area = this.selectedArea;
    this.showAddressSelect = false;
    this.selectedArea = null;
    this.selectedRegion = null;
    this.selectedCity = null;
  }

  //  刷新，加载收货地址
  async findMyaddredd() {
    let result = await this.apiService.shopUserReciveAddress();
    let { reciveAddress, default: defaultAddress } = result;
    this.addresses = reciveAddress;
    if (defaultAddress) {
      this.addresses.find(
        address => address._id == defaultAddress._id
      ).isDefault = true;
    }
    console.log(this.addresses);
  }
  // 新增收货地址
  async submit() {
    if (this.checkRequire(this.newAddress)) {
      let newAddress = await this.apiService.createShopUserReciveAddress(
        this.newAddress
      );

      this.findMyaddredd();
      this.hide();
    } else {
      alert("请将姓名，电话，地址填写完整");
    }
  }
  checkRequire(address: ShopUserReciveAddress): boolean {
    return !(
      address.name == "" ||
      address.phone == "" ||
      address.city == "" ||
      address.area == "" ||
      address.region == ""
    );
  }
  // 删除
  async deleteAddress(address) {
    console.log(address);

    await this.apiService.removeReciveAddress(address);
    await this.findMyaddredd();
    this.apiService.showErrorMsg("删除成功");
  }
  // 设为默认
  async setdefaulAddress(address) {
    await this.apiService.setDefaultReciveAddress(address);
    this.apiService.showErrorMsg("已设为默认地址");
    await this.findMyaddredd();
  }
  //  编辑
  async editAddessOk() {
    // await this.apiService.updateReciveAddress(reciveAddressId)
    // console.log(reciveAddressId)
  }
  // 设为置顶
  async setTop(address) {
    // console.log(reciveAddressId)
    await this.apiService.setReciveAddressTop(address);
    await this.findMyaddredd();
    this.apiService.showErrorMsg("置顶成功");
  }
}
