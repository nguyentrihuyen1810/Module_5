import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListServiceComponent } from './list-service/list-service.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { ListContractComponent } from './list-contract/list-contract.component';
import { FuramaComponent } from './furama/furama.component';
import { AddContractComponent } from './add-contract/add-contract.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ListRoomTypeComponent } from './list-room-type/list-room-type.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ListServiceComponent,
    ListCustomerComponent,
    ListContractComponent,
    FuramaComponent,
    AddContractComponent,
    AddServiceComponent,
    AddCustomerComponent,
    ListRoomTypeComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
