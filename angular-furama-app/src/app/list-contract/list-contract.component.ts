import { Component, OnInit } from '@angular/core';
import {Contract} from "../contract/contract";
@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent implements OnInit {
  Contract = new Contract();
  Contracts = Contracts;

  constructor() { }

  ngOnInit(): void {
  }

}
const Contracts:Contract[] = [
  {
    customerName: "Nguyễn Thị Hào",
    employeeName: "Hồ Thị Yến",
    service: "Room Twin 01",
    startDate: "08-12-2020",
    endDate: "08-12-2020",
    deposit: 0
  },
  {
    customerName: "Phạm Xuân Diệu",
    employeeName: "Võ Công Toản",
    service: "Room Twin 02",
    startDate: "25-02-2021",
    endDate: "01-03-2021",
    deposit: 0
  },
  {
    customerName: "Dương Văn Quan",
    employeeName: "Lê Văn Bình",
    service: "Room Twin 01",
    startDate: "15-03-2021",
    endDate: "17-03-2021",
    deposit: 50000
  },
  {
    customerName: "Hoàng Trần Nhi Nhi",
    employeeName: "Nguyễn Bỉnh Phát",
    service: "Villa Beach Front",
    startDate: "14-01-2021",
    endDate: "18-01-2021",
    deposit: 100000
  },
  {
    customerName: "Trần Đại Danh",
    employeeName: "Khúc Nguyễn An Nghi",
    service: "House Princess 01",
    startDate: "22-06-2022",
    endDate: "25-06-2022",
    deposit: 1500000
  },

]


