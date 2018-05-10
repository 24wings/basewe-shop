import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { ApiService,BangweiOrderState } from '../../services';

@Component({
  selector: 'app-send-product-order',
  templateUrl: './send-product-order.component.html',
  styleUrls: ['./send-product-order.component.css']
})
export class SendProductOrderComponent implements OnInit {
  @Input() order: BangweiOrder;
  @Output() onRefersh= new EventEmitter();
 cancelReason:any;
 isShowModal:boolean=false;
 
   orderId:BangweiOrder
  constructor(public api:ApiService) { }

  ngOnInit() {
    
  }
  async bankMoney(){
   await this.api.requestRefound(this.cancelReason,this.order._id)
   this.onRefersh.emit(this.order);
   alert("申请退款成功，请耐心等待审批")
  }
}
