import { IFuramaContract } from "../model/IFuramaContract";

export class ContractDAO {
  static contracts: IFuramaContract[] = [
    {
      contractId: "HD-1001",
      contractStartDate: "01/01/2019",
      contractEndDate: "01/01/2020",
      contractTotalCost: 1000000,
      contractDeposit: 500000,
      contractCustomer: "Nguyen Van A",
      contractService: "Villa"
    },
    {
      contractId: "HD-1002",
      contractStartDate: "01/01/2019",
      contractEndDate: "01/01/2020",
      contractTotalCost: 1000000,
      contractDeposit: 500000,
      contractCustomer: "Nguyen Van C",
      contractService: "Villa"
    },
    {
      contractId: "HD-1003",
      contractStartDate: "01/01/2019",
      contractEndDate: "01/01/2020",
      contractTotalCost: 1000000,
      contractDeposit: 500000,
      contractCustomer: "Nguyen Van E",
      contractService: "Villa"
    },
    {
      contractId: "HD-1004",
      contractStartDate: "01/01/2019",
      contractEndDate: "01/01/2020",
      contractTotalCost: 1000000,
      contractDeposit: 500000,
      contractCustomer: "Nguyen Van G",
      contractService: "Villa"
    },
    {
      contractId: "HD-1005",
      contractStartDate: "01/01/2019",
      contractEndDate: "01/01/2020",
      contractTotalCost: 1000000,
      contractDeposit: 500000,
      contractCustomer: "Nguyen Van I",
      contractService: "Villa"
    },
    {
      contractId: "HD-1006",
      contractStartDate: "01/01/2019",
      contractEndDate: "01/01/2020",
      contractTotalCost: 1000000,
      contractDeposit: 500000,
      contractCustomer: "Nguyen Van K",
      contractService: "Villa"
    }
  ];
  static getAllContracts() {
    return this.contracts;
  }
}
