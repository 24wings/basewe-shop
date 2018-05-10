import { Component, OnInit } from '@angular/core';
// import {ActivatedRoute,Router} from '@angular/router';
import { ApiService, BangweiOrderState } from '../../services';
import { ActivatedRoute } from '@angular/router';
import { Params } from 'ngx-onsenui';

@Component({
  selector: 'ons-page[app-transfer-page]',
  templateUrl: './transfer-page.component.html',
  styleUrls: ['./transfer-page.component.css']
})
export class TransferPageComponent implements OnInit {
  orderId:string;
  order:BangweiOrder;
  records:{dt:Date,label:string}[]=[];
  constructor(public api:ApiService,public route:ActivatedRoute,public params:Params) { 
      this.orderId = this.params.data.orderId
  }

  ngOnInit() {
    this.getOrderDetail();
  }
  async getOrderDetail(){
   this.order = await this.api.getOrderDetail(this.orderId);
   console.log(this.order);

    
     this.records.push({dt:this.order.createDt,label:'创建订单'});
      if(this.order.payDate)
     this.records.push({dt:this.order.payDate,label:'支付订单'});
     

    if(this.order.sendDt)
     this.records.push({dt:this.order.sendDt,label:'商家发货'});
     if(this.order.reciveDt)
     this.records.push({dt:this.order.reciveDt,label:'确认收货'})
    //  case BangweiOrderState.RequestRefound:
    //  this.records.push(dt:this.order.req)
   
  }

}
