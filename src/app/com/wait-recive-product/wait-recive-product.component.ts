import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import {ApiService} from '../../services/api.service';
import { Params, OnsNavigator} from 'ngx-onsenui';
import * as ons from 'onsenui';
import { TransferPageComponent } from '../../pages/transfer-page/transfer-page.component';
@Component({
  selector: 'app-wait-recive-product',
  templateUrl: './wait-recive-product.component.html',
  styleUrls: ['./wait-recive-product.component.css']
})
export class WaitReciveProductComponent implements OnInit {
@Input() order:BangweiOrder;
  

  @Output() onRefersh = new EventEmitter();
  cancelReason: any;
  isShowModal: boolean = false;

  constructor(public api: ApiService, public parmas: Params, public navigator: OnsNavigator) { }

  ngOnInit() {

  }
  async bankMoney() {
    await this.api.requestRefound(this.cancelReason, this.order._id)
    this.onRefersh.emit(this.order)
  }

  // 确认收货
  async waitReciveProduct(){
  await  this.api.getConfirmReciveProduct({orderId:this.order._id})
  this.onRefersh.emit(this.order)
  // alert("确认收货成功")
    this.api.showErrorMsg("确认收货成功")
// this.api.
}
  chechTransfer(){
    this.navigator.element.pushPage(TransferPageComponent,{data:{orderId:this.order._id}})
  }

}
