import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { ApiService } from '../../services';


@Component({
  selector: 'app-unpay-order',
  templateUrl: './unpay-order.component.html',
  styleUrls: ['./unpay-order.component.css']
})
export class UnpayOrderComponent implements OnInit {
  @Input() order:BangweiOrder;
  @Output() onRefersh=  new EventEmitter();
  constructor(public apiService: ApiService) { }

  ngOnInit() {

  }

  async cancelOrder(){
   await this.apiService.removeUnpayOrders([this.order._id]);
   this.onRefersh.emit(this.order);
  }

}
