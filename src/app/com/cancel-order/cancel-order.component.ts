import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-cancel-order',
  templateUrl: './cancel-order.component.html',
  styleUrls: ['./cancel-order.component.css']
})
export class CancelOrderComponent implements OnInit {
@Input()order:BangweiOrder
  constructor() { }

  ngOnInit() {
  }

}
