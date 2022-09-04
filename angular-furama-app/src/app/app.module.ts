import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NatigationComponent } from './natigation/natigation.component';
import { ServiceComponent } from './service/service.component';
import { EditServiceComponent } from './edit-service/edit-service.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { FuramaComponent } from './furama/furama.component';
import { ListServiceComponent } from './list-service/list-service.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddContractComponent } from './add-contract/add-contract.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NatigationComponent,
    EditServiceComponent,
    EditServiceComponent,
    AddServiceComponent,
    ListCustomerComponent,
    FuramaComponent,
    ListServiceComponent,
    EditCustomerComponent,
    AddCustomerComponent,
    AddContractComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
