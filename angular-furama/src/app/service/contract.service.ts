import { Injectable } from '@angular/core';
import {ContractDAO} from "../data/ContractDao";

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  saveContract(contract) {
    ContractDAO.contracts.push(contract);
  }

  getAll() {
    return ContractDAO.contracts;
  }

  constructor() { }
}
