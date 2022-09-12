import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {ContractService} from "../service/contract.service";

@Component({
  selector: 'app-add-contract',
  templateUrl: './add-contract.component.html',
  styleUrls: ['./add-contract.component.css']
})
export class AddContractComponent implements OnInit {
  formContractAdd: FormGroup;

  constructor(private contractService: ContractService) { }

  ngOnInit(): void {
  }

}
