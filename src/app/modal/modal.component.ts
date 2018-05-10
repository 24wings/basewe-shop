import { Component, OnInit, Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Output() onConfirm = new EventEmitter();
  @Input() _visible_: boolean = false;
  @Input() title: string;
  show() {
    this._visible_ = true;
  }
  hide() {
    this._visible_ = false;
  }
  toggle() {
    this._visible_ = !this._visible_
  }
  confirm(){
    this.onConfirm.emit();
    this.hide();
  }
  constructor() { }

  ngOnInit() {
  }

}
