import {Customer} from "../app/customer/customer";

export class CustomerDAO {
  static customers: Customer [] = [
    {
      customerType: "Member",
      name: "Nguyễn Thị Hào",
      birthday: "1970-11-07",
      gender: "Nữ",
      idCard: "643431213",
      phone: "0945423362",
      email: "thihao07@gmail.com",
      address: "23 Nguyễn Hoàng, Đà Nẵng"
    },
    {
      customerType: "Gold",
      name: "Phạm Xuân Diệu",
      birthday: "1992-08-08",
      gender: "Nam",
      idCard: "865342123",
      phone: "0954333333",
      email: "xuandieu92@gmail.com",
      address: "K77/22 Thái Phiên, Quảng Trị"
    },
    {
      customerType: "Diamond",
      name: "Trương Đình Nghệ",
      birthday: "1990-02-27",
      gender: "Nam",
      idCard: "456123879",
      phone: "0349856125",
      email: "dinhnghe2702@gmail.com",
      address: "K323/12 Ông Ích Khiêm, Vinh"
    },
    {
      customerType: "Silver",
      name: "Hoàng Trần Nhi Nhi",
      birthday: "19955-12-09",
      gender: "Nữ",
      idCard: "423159786",
      phone: "034896125",
      email: "nhinhi123@gmail.com",
      address: "K453/12 Lê Lợi, Đà Nẵng22 Lý Thái Tổ, Gia Lai"
    },
    {
      customerType: "Gold",
      name: "Phạm Xuân Diệu",
      birthday: "1992-08-08",
      gender: "Nam",
      idCard: "865342123",
      phone: "0954333333",
      email: "xuandieu92@gmail.com",
      address: "K77/22 Thái Phiên, Quảng Trị"
    }
  ]

  static getAllCustomer() {
    return this.customers;
  }
}
