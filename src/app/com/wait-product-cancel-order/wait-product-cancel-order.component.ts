import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-wait-product-cancel-order',
  templateUrl: './wait-product-cancel-order.component.html',
  styleUrls: ['./wait-product-cancel-order.component.css']
})
export class WaitProductCancelOrderComponent implements OnInit {
@Input() order:BangweiOrder;
  constructor() { }

  ngOnInit() {
  }

}
