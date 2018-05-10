import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-close-order',
  templateUrl: './close-order.component.html',
  styleUrls: ['./close-order.component.css']
})
export class CloseOrderComponent implements OnInit {
  @Input() order: BangweiOrder
  constructor() { }

  ngOnInit() {
  }

}
