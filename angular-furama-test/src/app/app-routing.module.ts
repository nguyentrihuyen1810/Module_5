import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListRoomTypeComponent} from "./list-room-type/list-room-type.component";
import {ListCustomerComponent} from "./list-customer/list-customer.component";
import {AddContractComponent} from "./add-contract/add-contract.component";
import {AddCustomerComponent} from "./add-customer/add-customer.component";
import {AddServiceComponent} from "./add-service/add-service.component";
import {ListContractComponent} from "./list-contract/list-contract.component";
import {FuramaComponent} from "./furama/furama.component";


const routes: Routes = [
  {path: 'list-room-type', component: ListRoomTypeComponent},
  {path: 'list-customer', component: ListCustomerComponent},
  {path: 'list-contract', component: ListContractComponent},
  {path: 'add-contract', component: AddContractComponent},
  {path: 'add-customer', component: AddCustomerComponent},
  {path: 'add-service', component: AddServiceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
