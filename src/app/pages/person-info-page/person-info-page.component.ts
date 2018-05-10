import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { Router } from "@angular/router";
import { ApiService } from "../../services/api.service";
// import {BsDatepickerConfig,BsLocaleService} from 'ngx-bootstrap/datepicker';
import { listLocales } from "ngx-bootstrap/chronos";
import { CommonService } from "../../services";
import { Params, NavigatorPage, OnsNavigator } from "ngx-onsenui";
import { PersonCenterPageComponent } from "../person-center-page/person-center-page.component";
import * as frLocale from "date-fns/locale/zh_cn";
import { DatepickerOptions } from "ng2-datepicker";

@Component({
  selector: "ons-page[person-info-page]",
  templateUrl: "./person-info-page.component.html",
  styleUrls: ["./person-info-page.component.css"]
})
export class PersonInfoPageComponent implements OnInit {
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
  userInfo: ShopUser = {
    Sex: 1,
    birthDay: new Date()
  };
  locale = "zh-cn";
  constructor(
    public api: ApiService,
    // public _localeService: BsLocaleService,
    public common: CommonService,
    public router: Router,
    public location: Location,
    public params: Params
  ) {}

  ngOnInit() {
    // this._localeService.use(this.locale);

    this.getPersonInfo();
  }
  async getPersonInfo() {
    this.userInfo = await this.api.getShopUserInfo();
    this.userInfo.Nickname = this.userInfo.Nickname || this.userInfo.nickname;
  }
  async modifyHeadimgurl() {
    let base64 = await this.common.selectFile();
    this.userInfo.headimgurl = base64;
  }
  async updateUserInfo() {
    let updateAction = await this.api.updateShopUserInfo(this.userInfo);
    this.location.back();
  }
}
