import { Component, OnInit,ViewChild,AfterContentInit } from '@angular/core';
import {ActivatedRoute,Router, NavigationEnd} from '@angular/router'
import {ApiService,BangweiOrderState} from "../../services/api.service"
import { OnsLazyRepeat } from 'ngx-onsenui';

@Component({
  selector: 'ons-page[my-order]',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent implements OnInit {
  ViewState = BangweiOrderState;
  state = BangweiOrderState.Unpay;
  orders: BangweiOrder[] = [];
  reciveAddressId:string;
  reciveAddress:ShopUserReciveAddress;
  @ViewChild(OnsLazyRepeat) lazyRepeat;

  // @ViewChild(OnsLazyRepeat) lazyRepeat;
  constructor(public route: ActivatedRoute, public router: Router, public api: ApiService) { 
    this.orders=[];
    this.state= this.route.snapshot.queryParams.state;
    this.reciveAddressId = this.route.snapshot.queryParams.reciveAddressId;
    this.router.events.forEach(event=>{
      if(event instanceof NavigationEnd){
          this.state =this.route.snapshot.queryParams.state;
          // console.log(this.state);
        this.getOrders()
      
      }
    })
   this.getOrders();
  }

  ngOnInit() {
    // this.getReciveAddress()
    // this.getOrders()
   
  } 
  ngAfterContentInit() {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    this.getOrders()
  }
  async getOrders(){
    // for (let order of this.orders) {
    //   this.orders.pop();
    // }
    // this.lazyRepeat.refersh();

    this. orders=await this.api.getUserOrders(this.state);
    // console.log(orders)
    // for(let order of orders){
      // debugger;
      // console.log(order)
      // this.orders.push(order)
    // }
    // this.lazyRepeat.refresh();

}
  
}
