import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../../data/customer/CustomerType';
import {CustomerService} from '../../service/customer/customer.service';
import {CustomerTypeService} from '../../service/customer/customer-type.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Customer} from '../../data/customer/Customer';
import {Service} from '../../data/contract/Service';
import {ContractService} from '../../service/contract/contract.service';
import {ServiceService} from '../../service/contract/service.service';
import {Contract} from '../../data/contract/Contract';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {

  contractForm: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    start: new FormControl('', [Validators.required]),
    end: new FormControl('', [Validators.required]),
    desposit: new FormControl('', [Validators.required]),
    service: new FormControl('', [Validators.required]),
  });

  service: Service[];

  constructor(private contractService: ContractService,
              private serviceService: ServiceService,
              private router: Router,
              private snackBar: MatSnackBar) {
  }
  ngOnInit(): void {
    this.getCategory();
  }

  add() {
    const contract: Contract = {
      id: this.contractForm.value.name,
      name: this.contractForm.value.name,
      start: this.contractForm.value.birthday,
      end: this.contractForm.value.gender,
      desposit: this.contractForm.value.phone,
      service: {
        id: this.contractForm.value.service
      }
    };
    this.contractService.createContract(this.contractForm.value).subscribe((res) => {
      this.router.navigateByUrl('/customer-list');
      this.snackBar.open('Create successfully!', 'ok');
    });
  }

  getCategory() {
    this.serviceService.getAllType().subscribe((res) => {
        this.service = res;
      }
    );
  }

}
