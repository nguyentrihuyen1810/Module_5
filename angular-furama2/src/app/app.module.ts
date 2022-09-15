import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { CustomerDeleteComponent } from './customer/customer-delete/customer-delete.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ContractListComponent } from './contract/contract-list/contract-list.component';
import { ContractCreateComponent } from './contract/contract-create/contract-create.component';
import { ContractDeleteComponent } from './contract/contract-delete/contract-delete.component';
import { ContractEditComponent } from './contract/contract-edit/contract-edit.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { RoomTypeListComponent } from './roomType/room-type-list/room-type-list.component';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeDeleteComponent } from './employee/employee-delete/employee-delete.component';
import { RoomTypeCreateComponent } from './roomType/room-type-create/room-type-create.component';
import { RoomTypeEditComponent } from './roomType/room-type-edit/room-type-edit.component';
import { RoomTypeDeleteComponent } from './roomType/room-type-delete/room-type-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerCreateComponent,
    CustomerDeleteComponent,
    CustomerEditComponent,
    CustomerListComponent,
    ContractListComponent,
    ContractCreateComponent,
    ContractDeleteComponent,
    ContractEditComponent,
    FooterComponent,
    HeaderComponent,
    IntroduceComponent,
    RoomTypeListComponent,
    EmployeeCreateComponent,
    EmployeeEditComponent,
    EmployeeListComponent,
    EmployeeDeleteComponent,
    RoomTypeCreateComponent,
    RoomTypeEditComponent,
    RoomTypeDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatDialogModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
