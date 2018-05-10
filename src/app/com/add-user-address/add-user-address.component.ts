import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { BsDatepickerConfig, BsLocaleService } from "ngx-bootstrap/datepicker";
import { listLocales } from "ngx-bootstrap/chronos";
import { Router } from "@angular/router";
import { ApiService } from "../../services/api.service";
import { findIndex } from "rxjs/operators";
import * as frLocale from "date-fns/locale/zh_cn";
import { DatepickerOptions } from "ng2-datepicker";

enum ViewState {
  List = 1, //列表
  Add, //添加地址
  Update //更新
}
@Component({
  selector: "app-add-user-address",
  templateUrl: "./add-user-address.component.html",
  styleUrls: ["./add-user-address.component.css"]
})
export class AddUserAddressComponent implements OnInit {
  options: DatepickerOptions = {
    minYear: 1970,
    maxYear: 2030,
    displayFormat: "MMM D[,] YYYY",
    barTitleFormat: "MMMM YYYY",
    dayNamesFormat: "dd",
    firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
    locale: frLocale,
    // minDate: new Date(Date.now()), // Minimal selectable date
    // maxDate: new Date(Date.now()), // Maximal selectable date
    barTitleIfEmpty: "Click to select a date"
  };
  visible: boolean = false;
  @Output() onSubmit = new EventEmitter();
  @Input() mode: "create" | "edit" = "create";
  @Input() editAddress: ShopUserReciveAddress;
  // viewState = ViewState;
  // state = ViewState.List;
  show() {
    this.visible = true;
  }
  hide() {
    this.visible = false;
  }
  toggle() {
    this.visible = !this.visible;
  }
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
    teachNum:0,
  };
  addresses: ShopUserReciveAddress[] = [];
  stars: {}[] = [];
  grayStars: {}[] = [];
  showAddressSelect: boolean = false;
  cityJson: { name: string; city: { name: string; area: string[] }[] }[] = [];
  selectedRegion: { name: string; city: { name: string; area: string[] }[] };
  selectedCity: { name: string; area: string[] };
  selectedArea: string;

  constructor(public router: Router, public apiService: ApiService) {}

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

  //
  async findMyaddredd() {
    let result = await this.apiService.shopUserReciveAddress();
    let { reciveAddress, default: defaultAddress } = result;
    this.addresses = reciveAddress;
    if (defaultAddress) {
      this.addresses.find(
        address => address._id == defaultAddress._id
      ).isDefault = true;
    }
    // console.log(this.addresses);
  }
  async submit() {
    if (this.checkRequire(this.newAddress)) {
      let newAddress = await this.apiService.createShopUserReciveAddress(
        this.newAddress
      );

      // this.findMyaddredd()

      this.hide();
      this.onSubmit.emit(newAddress);
      this.apiService.showErrorMsg("添加成功");
    } else {
      alert("请将姓名，电话，地址填写完整");
      this.onSubmit.emit();
    }
  }
  async modify() {
    await this.apiService.updateReciveAddress(this.editAddress._id);
    console.log(this.editAddress);
    this.hide();
    this.onSubmit.emit();
    this.apiService.showErrorMsg("修改成功");
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
  async deleteAddress(address) {
    // console.log(address)

    await this.apiService.removeReciveAddress(address);
    await this.findMyaddredd();
  }
  async setdefaulAddress(address) {
    await this.apiService.setDefaultReciveAddress(address);
    await this.findMyaddredd();
  }
}
