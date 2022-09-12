import { Component, OnInit } from '@angular/core';
import {IFuramaContract} from "../model/IFuramaContract";
import {ContractDAO} from "../data/ContractDao";

@Component({
  selector: 'app-furama-contract-list',
  templateUrl: './furama-contract-list.component.html',
  styleUrls: ['./furama-contract-list.component.css']
})
export class FuramaContractListComponent implements OnInit {

  constructor() { }

  config: any;
  contracts: IFuramaContract[] = ContractDAO.getAllContracts();
  p: number = 1;

  ngOnInit(): void {
  }

}
