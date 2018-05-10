import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-recive-cancel',
  templateUrl: './recive-cancel.component.html',
  styleUrls: ['./recive-cancel.component.css']
})
export class ReciveCancelComponent implements OnInit {
@Input() order:BangweiOrder
  constructor() { }

  ngOnInit() {
  }

}
