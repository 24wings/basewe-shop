import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-request-refound-order',
  templateUrl: './request-refound-order.component.html',
  styleUrls: ['./request-refound-order.component.css']
})
export class RequestRefoundOrderComponent implements OnInit {
  @Input() order: BangweiOrder
  constructor() { }

  ngOnInit() {
  }

}
