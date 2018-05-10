import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rem-page',
  templateUrl: './rem-page.component.html',
  styleUrls: ['./rem-page.component.css']
})
export class RemPageComponent implements OnInit {
  oldFontSize = window.document.documentElement.style.fontSize
  constructor() { }

  ngOnInit() {
    function remFn(num) {
      window.document.documentElement.style.fontSize = document.documentElement.clientWidth / num + 'px';
    }
    remFn(7.5);
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    window.document.documentElement.style.fontSize = this.oldFontSize
  }

}
