import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-send-product-cancel',
  templateUrl: './send-product-cancel.component.html',
  styleUrls: ['./send-product-cancel.component.css']
})
export class SendProductCancelComponent implements OnInit {
@Input() order:BangweiOrder;
  constructor() { }

  ngOnInit() {
  }

}
