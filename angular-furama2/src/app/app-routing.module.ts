import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerListComponent} from './customer/customer-list/customer-list.component';
import {CustomerCreateComponent} from './customer/customer-create/customer-create.component';
import {CustomerEditComponent} from './customer/customer-edit/customer-edit.component';
import {ContractListComponent} from './contract/contract-list/contract-list.component';
import {IntroduceComponent} from './introduce/introduce.component';
import {RoomTypeListComponent} from './roomType/room-type-list/room-type-list.component';
import {ContractCreateComponent} from './contract/contract-create/contract-create.component';
import {ContractEditComponent} from './contract/contract-edit/contract-edit.component';
import {EmployeeListComponent} from './employee/employee-list/employee-list.component';
import {EmployeeCreateComponent} from './employee/employee-create/employee-create.component';
import {EmployeeEditComponent} from './employee/employee-edit/employee-edit.component';


const routes: Routes = [
  {path: '', component: IntroduceComponent},
  {path: 'list-room-type', component: RoomTypeListComponent},
  {path: 'contract-list', component: ContractListComponent},
  {path: 'customer-list', component: CustomerListComponent},
  {path: 'employee-list', component: EmployeeListComponent},
  {path: 'create', component: CustomerCreateComponent},
  {path: 'edit/:id', component: CustomerEditComponent},
  {path: 'contract-list/create', component: ContractCreateComponent},
  {path: 'contract-list/edit/:id', component: ContractEditComponent},
  {path: 'employee-list/create', component: EmployeeCreateComponent},
  {path: 'employee-list/edit/:id', component: EmployeeEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
