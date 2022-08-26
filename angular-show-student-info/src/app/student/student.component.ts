import { Component, OnInit } from '@angular/core';

export interface Student {
  name?: string;
  birthday?: string;
  gender?: string;
  mask?: number;
  avatar?: string;
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  student: Student [] = [{
    name: 'Nguyen Van A',
    birthday: '12/08/1990',
    gender: 'Nam',
    mask: 9,
    avatar: 'https://tse1.mm.bing.net/th?id=OIP.69XgUOQksMxLalHhwoJ84gAAAA&pid=Api&P=0'
  },
  {
    name: 'Nguyen Thi B',
    birthday: '25/05/1990',
    gender: 'Nu',
    mask: 8,
    avatar: 'https://tse1.mm.bing.net/th?id=OIP.aESOK7HNDdNvGvigNVov5gAAAA&pid=Api&P=0'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
