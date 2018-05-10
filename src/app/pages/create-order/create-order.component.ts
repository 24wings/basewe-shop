import { Component, OnInit ,ViewChild, ViewChildren} from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router } from "@angular/router";
// import { userInfo } from 'os';
import { reduce } from 'rxjs/operators';
import { tick } from '@angular/core/testing';
import { Params ,OnsNavigator} from 'ngx-onsenui';
import * as ons from 'onsenui';

import { Observable } from "rxjs/Observable";
 
import { UnPaidComponent } from "../un-paid/un-paid.component"
// import { UnpayOrderComponent } from '../../com/unpay-order/unpay-order.component';

 
@Component({
  selector: 'ons-page[app-create-order]',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})

export class CreateOrderComponent implements OnInit {
  @ViewChild("addAddress")
  animation: string = 'default';
  addAddress:any;
  visible: boolean = false;
  orderId: any; 
  buyNum: number = 1;
  order:BangweiOrder;
  reduction:BangweiReduction;
addressId :any;
  ticketIds:any;

  
  truePayMoney = 0; addresses: ShopUserReciveAddress[] = []
  tickets:{_id?:string,reduction:BangweiReduction,checked?:boolean,active:boolean}[]=[];
  activeTickets: { _id?: string, reduction: BangweiReduction, checked?: boolean ,active:boolean}[]=[];
  unActiveTickets: { _id?: string, reduction: BangweiReduction, checked?: boolean ,active:boolean}[]=[];
  ticket:{reduction:BangweiReduction}
  show() {
    this.visible = true;
  }
  hide() {
    this.visible = false;
  }
  toggle() {
    this.visible = !this.visible;
  };
  async close() {
    this.hide()
  }
  showallTicket: boolean = false;
 newAddress:ShopUserReciveAddress={
    name:'',
    phone:'',
    region:'',
    city:'',
    area:'',
    detailAddress: '',
    isDefault:true,
    publishRequire: '',
    publishContent: '',
    shopuser:'',
    publishDt:new Date(),
   teachNum:0
  }
  orders: { _id?: string, num: number, product: BangweiProduct, checked?: boolean }[] = [];
  // product: BangweiProduct;
  // public params: Params,
    // public navigatory: OnsNavigator
   defaultAddress:ShopUserReciveAddress
  constructor(public apiService: ApiService, public route: ActivatedRoute, public router: Router, public params: Params, public navigatory: OnsNavigator) { 
    this.orderId = this.params.data.orderId;

  }

  async ngOnInit() {
   await this.getUserDafalAddress() 
   await this.getOrderDetail(this.orderId)
    await this.findMyaddredd();
   this.allMoney()
    this.chooseDiscount()
  }
  async getUserDafalAddress(){
    this.defaultAddress = await this.apiService.getUserDefailtReciveAddress();
 

  }
   
  async getOrderDetail(order){
    
    this.order = await this.apiService.getOrderDetail(order)
 
   
    // console.log(this.order)
 
  }
  async addBuyNum() {
   await this.apiService.userAddOrderNum(this.orderId)
    // this.buyNum++;
   await this.getOrderDetail(this.orderId) ;

    
    this.allMoney()
 
  }
  async lessBuyNum() {
    if(/M2/.test(this.order.product.name)  ){
        if(this.order.num<=10){
          alert('M2系统10个起售')
        }else{
          await this.apiService.userLessOrderNum(this.orderId);     
        }
 
    
    }else{
      if ( this.order.num <= 1 ){
        alert(`订单数量不小于1`)
      }else{
        
     await this.apiService.userLessOrderNum(this.orderId);

      }
    }
    await this.getOrderDetail(this.orderId);
    this.allMoney();   
    
  }
  allMoney() {
    this.truePayMoney = 0;
    if(/M2/.test(this.order.product.name)){
      this.m2Count()
    }else{
      
    this.truePayMoney = this.order.num * this.order.product.price * this.order.product.discount /100;
    let  tickets=this.tickets.filter(ticket=>ticket.checked)
    tickets.forEach(ticket=>{this.truePayMoney-=ticket.reduction.value})

    }
    // console.log(this.truePayMoney) //最后总价格
  }
  m2Count(){
   switch (this.order.num) {
     case 30:
      this.truePayMoney=15000;
      break;
      case 50:
      this.truePayMoney=25000;
      break;
      case 100:
      this.truePayMoney=50000;
      break;
      default:
       this.truePayMoney = this.order.num * this.order.product.price * this.order.product.discount / 100;
       let tickets = this.tickets.filter(ticket => ticket.checked)
       tickets.forEach(ticket => { this.truePayMoney -= ticket.reduction.value });
       break;
   } 
  }


  async addOrderDafaulAddress(){
    let newAddress = await this.apiService.createShopUserReciveAddress(this.newAddress);
    // console.log(newAddress)
  }
  async findMyaddredd(address?) {
console.log(address);
    let result = await this.apiService.shopUserReciveAddress();
    let newAddress = result.reciveAddress[0];
    if(address ){
      if(address._id)
         await this.apiService.setDefaultReciveAddress(address._id);
      await this.getUserDafalAddress() 
      return;

    }
    if(newAddress){
      await this.apiService.setDefaultReciveAddress(newAddress._id);
      await this.getUserDafalAddress() 
    }
    

    }
  async chooseDiscount(){
    this.tickets=await this.apiService.userTicks();
     this.activeTickets=this.tickets.filter(ticket=>ticket.active);
     this.unActiveTickets=this.tickets.filter(ticket=>!ticket.active)
      this.activeTickets.forEach(ticket=>ticket.checked=false);
    if (this.activeTickets[0]) this.activeTickets[0].checked = true;
    this.allMoney()  

  }
  selectTicket(ticket){
    this.show() 
    
    this.activeTickets.forEach(ticket=>ticket.checked=false);
  ticket.checked=true;
//  console.log(ticket.reduction.value)
 
    this.allMoney()
  }
  
 
async  pay(){
if(this.defaultAddress){
 this.defaultAddress._id
  // this.router.navigateByUrl(`/un-paid?orderId=${this.orderId}&reciveAddressId=${this.defaultAddress._id}&ticketIds=${this.tickets.filter(ticket => ticket.checked).map(ticket => ticket._id).join(',') }&truePayMoney=${this.truePayMoney}`)
  // this.apiService.goUnpay(this.orderId, this.defaultAddress._id, this.ticketIds,this.truePayMoney)


  this.navigatory.element.pushPage(UnPaidComponent,{
    data:{
    orderId:this.orderId,
    reciveAddressId:this.defaultAddress._id,
      ticketIds: this.activeTickets.filter(ticket => ticket.checked).map(ticket => ticket._id),
  truePayMoney:this.truePayMoney

    }
  })
}else{
this.addAddress.show()
}
// this.router.navigateByUrl('/un-paid?orderId=' + this.orderId)
  
  
}
getCheckedActiveProduct(){
 return this. activeTickets.find(ticket=>ticket.checked).reduction.title
}
  getCheckedActiveReductionValue() {
    return this.activeTickets.find(ticket => ticket.checked).reduction.value
  }
 
}
