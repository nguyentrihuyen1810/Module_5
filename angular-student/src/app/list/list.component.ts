import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {StudentService} from '../../service/student.service';
import {TeacherService} from '../../service/teacher.service';
import {DeleteComponent} from '../delete/delete.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  p = 1;
  students: any = [];
  nameSearch: string;
  data: string;

  constructor(private studentService: StudentService,
              private teacherService: TeacherService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.studentService.getAll().subscribe(
      (res) => {
        this.students = res;
      });
  }

  openDialogDelete(customerId: number) {
    this.studentService.findById(customerId).subscribe(
      (data) => {
        const dialogRef = this.dialog.open(DeleteComponent, {
          width: '700px',
          data: {datal : data}
        });
        dialogRef.afterClosed().subscribe(res => {
          this.ngOnInit();
        });
      });
  }

  searchByName() {
    this.studentService.findByName(this.nameSearch).subscribe((data) => {
      this.students = data;
    });
  }

}
