import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../service/customer/customer.service';
import {CustomerTypeService} from '../../service/customer/customer-type.service';
import {MatDialog} from '@angular/material/dialog';
import {ContractService} from '../../service/contract/contract.service';
import {ServiceService} from '../../service/contract/service.service';
import {CustomerDeleteComponent} from '../../customer/customer-delete/customer-delete.component';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  p = 1;
  contracts: any = [];
  nameSearch: string;

  constructor(private contractService: ContractService,
              private serviceService: ServiceService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.contractService.getAll().subscribe(
      (res) => {
        this.contracts = res;
      });
  }

  openDialogDelete(id: number) {
    this.contractService.findById(id).subscribe(
      (data) => {
        const dialogRef = this.dialog.open(CustomerDeleteComponent, {
          width: '700px',
          data: {datal : data}
        });
        dialogRef.afterClosed().subscribe(res => {
          this.ngOnInit();
        });
      });
  }

  searchByName() {
    this.contractService.findByName(this.nameSearch).subscribe((data) => {
      this.contracts = data;
    });
  }

}
