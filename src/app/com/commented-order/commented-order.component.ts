import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-commented-order',
  templateUrl: './commented-order.component.html',
  styleUrls: ['./commented-order.component.css']
})
export class CommentedOrderComponent implements OnInit {
  @Input() order: BangweiOrder
  constructor() { }

  ngOnInit() {
  }

}
