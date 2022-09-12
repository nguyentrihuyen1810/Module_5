import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ContractService} from "../service/contract.service";

@Component({
  selector: 'app-furama-contract-create',
  templateUrl: './furama-contract-create.component.html',
  styleUrls: ['./furama-contract-create.component.css']
})
export class FuramaContractCreateComponent implements OnInit {
  formContractCreate: FormGroup;

  constructor(private contractService: ContractService) { }

  ngOnInit(): void {
    this.formContractCreate = new FormGroup(
      {
        contractId: new FormControl('', [Validators.required, Validators.pattern('^\\d+$')]),
        contractStartDate: new FormControl('', [Validators.required]),
        contractEndDate: new FormControl('', [Validators.required]),
        contractTotalCost: new FormControl('', [Validators.required, Validators.pattern('^\\d+$')]),
        contractDeposit: new FormControl('', [Validators.required, Validators.pattern('^\\d+$')]),
        contractCustomer: new FormControl('', [Validators.required]),
        contractService: new FormControl('', [Validators.required]),
      }
    )
  }

  submit() {
    const contract = this.formContractCreate.value;
    this.contractService.saveContract(contract);
    this.formContractCreate.reset();
  }

}
