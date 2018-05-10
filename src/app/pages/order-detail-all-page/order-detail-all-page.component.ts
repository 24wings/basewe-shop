import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute} from "@angular/router"
import{ApiService} from "../../services/api.service"
import { Params } from 'ngx-onsenui';
@Component({
  selector: 'ons-page[app-order-detail-all-page]',
  templateUrl: './order-detail-all-page.component.html',
  styleUrls: ['./order-detail-all-page.component.css']
})
export class OrderDetailAllPageComponent implements OnInit {
  order: BangweiOrder;
   reciveAddress: ShopUserReciveAddress;
    orderId: any;
  constructor(public route:ActivatedRoute,public api:ApiService,public parms:Params) {
    debugger;
    this.orderId=this.parms.data.orderId
   }

  ngOnInit() {
this.getOrderDetial()
  }
 async getOrderDetial(){
this.order=await this.api.getOrderDetail(this.orderId)
  }

}
