import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FuramaContractCreateComponent } from './furama-contract-create/furama-contract-create.component';
import { FuramaContractListComponent } from './furama-contract-list/furama-contract-list.component';
import { FuramaCustomerCreateComponent } from './furama-customer-create/furama-customer-create.component';
import { FuramaCustomerEditComponent } from './furama-customer-edit/furama-customer-edit.component';
import { FuramaCustomerListComponent } from './furama-customer-list/furama-customer-list.component';
import { FuramaServiceCreateComponent } from './furama-service-create/furama-service-create.component';
import { FuramaServiceListComponent } from './furama-service-list/furama-service-list.component';
import { FuramaServiceEditComponent } from './furama-service-edit/furama-service-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    FuramaContractCreateComponent,
    FuramaContractListComponent,
    FuramaCustomerCreateComponent,
    FuramaCustomerEditComponent,
    FuramaCustomerListComponent,
    FuramaServiceCreateComponent,
    FuramaServiceListComponent,
    FuramaServiceEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
