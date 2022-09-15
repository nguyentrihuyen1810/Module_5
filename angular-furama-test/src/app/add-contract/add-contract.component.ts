import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ContractService} from "../service/contract.service";

@Component({
  selector: 'app-add-contract',
  templateUrl: './add-contract.component.html',
  styleUrls: ['./add-contract.component.css']
})
export class AddContractComponent implements OnInit {
  formContractAdd: FormGroup;

  constructor(private contractService: ContractService) {

  }

  ngOnInit(): void {
    this.formContractAdd = new FormGroup(
      {
        serviceId: new FormControl('', [Validators.required]),
        serviceName: new FormControl('', [Validators.required]),
        area: new FormControl('', [Validators.required]),
        rentalCosts: new FormControl('', [Validators.required]),
        maxPeople: new FormControl('', [Validators.required]),
        roomStandard: new FormControl('', [Validators.required]),
        poolArea: new FormControl('', [Validators.required]),
        floor: new FormControl('', [Validators.required])
      }
    )
  }

  submit() {
    const contract = this.formContractAdd.value;
    this.contractService.saveContract(contract);
    this.formContractAdd.reset();
  }
}
