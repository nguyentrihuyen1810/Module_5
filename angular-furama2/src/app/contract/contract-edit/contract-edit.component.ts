import { Component, OnInit } from '@angular/core';
import {Customer} from '../../data/customer/Customer';
import {CustomerService} from '../../service/customer/customer.service';
import {CustomerTypeService} from '../../service/customer/customer-type.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Contract} from '../../data/contract/Contract';
import {ContractService} from '../../service/contract/contract.service';
import {ServiceService} from '../../service/contract/service.service';

@Component({
  selector: 'app-contract-edit',
  templateUrl: './contract-edit.component.html',
  styleUrls: ['./contract-edit.component.css']
})
export class ContractEditComponent implements OnInit {

  service: any = [];
  contracts: Contract[];

  constructor(private contractService: ContractService,
              private serviceService: ServiceService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private snackBar: MatSnackBar) { }

  contractForm: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    start: new FormControl('', [Validators.required]),
    end: new FormControl('', [Validators.required]),
    desposit: new FormControl('', [Validators.required]),
    service: new FormControl('', [Validators.required]),
  });


  ngOnInit(): void {
    this.getType();

    this.contractService.findById(this.activatedRoute.snapshot.params.id).subscribe((data) => {
      this.contractForm.setValue(data);
    });
    this.serviceService.getAllType().subscribe((data) => {
      this.service = data;
    });
  }

  update() {
    this.contractService.updateContract(this.activatedRoute.snapshot.params.id, this.contractForm.value).subscribe(
      (data) => {
        this.router.navigateByUrl('/contract-list');
        this.snackBar.open('Update successfully!', 'ok');
      });
  }

  getType() {
    this.serviceService.getAllType().subscribe((res) => {
      this.service = res;
    });
  }

}
