import { BrowserModule } from "@angular/platform-browser";
import {
  NgModule,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef
} from "@angular/core";
import { OnsenModule, OnsNavigator } from "ngx-onsenui";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
// import { defineLocale } from "ngx-bootstrap/chronos";
import { NgDatepickerModule } from "ng2-datepicker";
// import { zhCnLocale } from "ngx-bootstrap/locale";

// import  'rxjs/observable/oprator/toPromise';
import { AppComponent } from "./app.component";
// import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
// import { TopMenuComponent } from "./com/top-menu/top-menu.component";
import { HttpClientModule } from "@angular/common/http";
import { ApiService } from "./services/api.service";
import { CommonService } from "./services/common.service";
import { TransitionComponent } from "./com/transition/transition.component";
// import { IndexPageComponent } from "./pages/index-page/index-page.component";
// import { SwiperModule } from "ngx-swiper-wrapper";
// import { SWIPER_CONFIG } from "ngx-swiper-wrapper";
// import { SwiperConfigInterface } from "ngx-swiper-wrapper";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { BottomBarComponent } from "./com/bottom-bar/bottom-bar.component";
import { ProductDetailPageComponent } from "./pages/product-detail-page/product-detail-page.component";
import { ShopingCartPageComponent } from "./pages/shoping-cart-page/shoping-cart-page.component";
import { VerifyFxuserPageComponent } from "./pages/verify-fxuser-page/verify-fxuser-page.component";
import { PersonCenterPageComponent } from "./pages/person-center-page/person-center-page.component";
import { ProductCategoryPageComponent } from "./pages/product-category-page/product-category-page.component";
import { PersonInfoPageComponent } from "./pages/person-info-page/person-info-page.component";
import { MyCollectsPageComponent } from "./pages/my-collects-page/my-collects-page.component";
import { HistoryViewPageComponent } from "./pages/history-view-page/history-view-page.component";
import { ReciveAddressPageComponent } from "./pages/recive-address-page/recive-address-page.component";

import { ModalComponent } from "./modal/modal.component";

import { RemPageComponent } from "./shared/rem-page/rem-page.component";
import { ModalEditInfoComponent } from "./modal-edit-info/modal-edit-info.component";

import { CreateOrderComponent } from "./pages/create-order/create-order.component";
import { AddUserAddressComponent } from "./com/add-user-address/add-user-address.component";
import { UnPaidComponent } from "./pages/un-paid/un-paid.component";
import { TicketComponent } from "./pages/ticket/ticket.component";
import { MyOrderComponent } from "./pages/my-order/my-order.component";
import { UnpayOrderComponent } from "./com/unpay-order/unpay-order.component";
import { SendProductOrderComponent } from "./com/send-product-order/send-product-order.component";
import { WaitReciveProductComponent } from "./com/wait-recive-product/wait-recive-product.component";
import { TransferPageComponent } from "./pages/transfer-page/transfer-page.component";
import { OrderDetailComponent } from "./pages/order-detail/order-detail";
import { CancelOrderComponent } from "./com/cancel-order/cancel-order.component";
import { FinishOrderComponent } from "./com/finish-order/finish-order.component";
import { CommentedOrderComponent } from "./com/commented-order/commented-order.component";
import { SendProductCancelComponent } from "./com/send-product-cancel/send-product-cancel.component";
import { WaitProductCancelOrderComponent } from "./com/wait-product-cancel-order/wait-product-cancel-order.component";
import { ReciveCancelComponent } from "./com/recive-cancel/recive-cancel.component";
import { CloseOrderComponent } from "./com/close-order/close-order.component";
import { OrderDetailAllPageComponent } from "./pages/order-detail-all-page/order-detail-all-page.component";
import { CommonModule } from "@angular/common";
import { MainPageComponent } from "./pages/main-page/main-page.component";
import { RequestRefoundOrderComponent } from "./com/request-refound-order/request-refound-order.component";

// import { ProductDetialPageComponent } from "./pages/product-detial-page/product-detial-page.component";
// import { LoginPageComponent } from "./pages/login-page/login-page.component";
// import { OrderPageComponent } from "./pages/order-page/order-page.component";
// import { HistoryOrdersPageComponent } from "./pages/history-orders-page/history-orders-page.component";
// import { GroupDetailPageComponent } from "./pages/group-detail-page/group-detail-page.component";
// import { OrderStatePipe } from "./pipes/order-state.pipe";

// defineLocale("zh-cn", zhCnLocale);
// const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
//   direction: "horizontal",
//   slidesPerView: "auto"
// };

@NgModule({
  declarations: [
    AppComponent,
    TransitionComponent,
    HomePageComponent,
    BottomBarComponent,
    ProductDetailPageComponent,
    ShopingCartPageComponent,
    VerifyFxuserPageComponent,
    PersonCenterPageComponent,
    ProductCategoryPageComponent,
    PersonInfoPageComponent,
    MyCollectsPageComponent,
    HistoryViewPageComponent,
    ReciveAddressPageComponent,
    ModalComponent,
    RemPageComponent,
    ModalEditInfoComponent,
    CreateOrderComponent,
    AddUserAddressComponent,
    UnPaidComponent,
    TicketComponent,
    MyOrderComponent,
    UnpayOrderComponent,
    SendProductOrderComponent,
    WaitReciveProductComponent,
    TransferPageComponent,
    CancelOrderComponent,
    OrderDetailComponent,
    FinishOrderComponent,
    CommentedOrderComponent,
    SendProductCancelComponent,
    WaitProductCancelOrderComponent,
    ReciveCancelComponent,
    CloseOrderComponent,
    OrderDetailAllPageComponent,
    MainPageComponent,
    RequestRefoundOrderComponent
  ],
  imports: [
    NgDatepickerModule,
    // ElementRef,
    // BsDatepickerModule.forRoot(),
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", component: HomePageComponent },
      // {
      //   path: "product-detail",
      //   component: ProductDetailPageComponent // ?productId=
      // },
      // {
      //   path: "shoping-cart",
      //   component: ShopingCartPageComponent
      // },
      // {
      //   path: "person-center",
      //   component: PersonCenterPageComponent
      // },
      // {
      //   path: "product-category",
      //   component: ProductCategoryPageComponent
      // },
      // {
      //   path: "person-info",
      //   component: PersonInfoPageComponent
      // },
      // {
      //   path: "my-collects",
      //   component: MyCollectsPageComponent
      // },
      // {
      //   path: "history-view",
      //   component: HistoryViewPageComponent
      // },
      // {
      //   path: "recive-address",
      //   component: ReciveAddressPageComponent
      // },
      // {
      //   path: "modal",
      //   component: ModalComponent
      // },
      // {
      //   path: "create-order",
      //   component: CreateOrderComponent
      // },
      // {
      //   path: "un-paid",
      //   component: UnPaidComponent
      // },
      // {
      //   path: "ticket",
      //   component: TicketComponent
      // },
      {
        path: "my-order",
        component: MyOrderComponent
      }
      // {
      //   path: "order-detail",
      //   component: OrderDetailComponent
      // },
      // {
      //   path: "transfer",
      //   component: TransferPageComponent
      // },
      // {
      //   path: "order-detail-all-page",
      //   component: OrderDetailAllPageComponent
      // }
    ]),
    // RouterModule.forRoot([
    //   { path: "**", component: HomePageComponent ,pathMatch:'full'}
    // ]),
    FormsModule,
    // SwiperModule,
    HttpModule,
    OnsenModule
  ],
  providers: [
    ApiService,
    CommonService
    // OnsNavigator
    // OrderStatePipe,
    // {
    //   provide: SWIPER_CONFIG,
    //   useValue: DEFAULT_SWIPER_CONFIG
    // }
  ],
  entryComponents: [
    // HomePageComponent,
    ProductCategoryPageComponent,
    MainPageComponent,
    // AppComponent,
    TransitionComponent,
    BottomBarComponent,
    ProductDetailPageComponent,
    ShopingCartPageComponent,
    VerifyFxuserPageComponent,
    PersonCenterPageComponent,
    PersonInfoPageComponent,
    MyCollectsPageComponent,
    HistoryViewPageComponent,
    ReciveAddressPageComponent,
    ModalComponent,
    RemPageComponent,
    ModalEditInfoComponent,
    CreateOrderComponent,
    AddUserAddressComponent,
    UnPaidComponent,
    TicketComponent,
    MyOrderComponent,
    UnpayOrderComponent,
    SendProductOrderComponent,
    WaitReciveProductComponent,
    TransferPageComponent,
    CancelOrderComponent,
    OrderDetailComponent,
    FinishOrderComponent,
    CommentedOrderComponent,
    SendProductCancelComponent,
    WaitProductCancelOrderComponent,
    ReciveCancelComponent,
    CloseOrderComponent,
    OrderDetailAllPageComponent,
    ProductDetailPageComponent
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {}
