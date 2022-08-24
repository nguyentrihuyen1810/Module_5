import { Component, OnInit } from '@angular/core';
import {Student} from '../student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  student: Student = {
    name: 'Nguyen Van A',
    birthday: '12/08/1990',
    gender: 'Nam',
    mask: 9,
    avatar: 'https://tse1.mm.bing.net/th?id=OIP.69XgUOQksMxLalHhwoJ84gAAAA&pid=Api&P=0'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
