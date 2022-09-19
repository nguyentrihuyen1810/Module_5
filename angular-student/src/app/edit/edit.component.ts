import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {StudentService} from '../../service/student.service';
import {TeacherService} from '../../service/teacher.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Teacher} from '../../model/Teacher';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  studentEditForm: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    group: new FormControl('', [Validators.required]),
    detai: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern('^[A-z]{@}^[A-z]{.com}')]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10,12}$')]),
    teacher: new FormControl('', [Validators.required]),
  });

  teacher: Teacher[] = [];
  id: number;

  constructor(private studentService: StudentService,
              private teacherService: TeacherService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getClass();

    this.studentService.findById(this.activatedRoute.snapshot.params.id).subscribe((data) => {
      this.studentEditForm.setValue(data);
    });
    this.teacherService.getAllType().subscribe((data) => {
      this.teacher = data;
    });
  }

  update() {
    this.studentService.update(this.activatedRoute.snapshot.params.id, this.studentEditForm.value).subscribe(
      (data) => {
        this.router.navigateByUrl('');
        this.snackBar.open('Update successfully!', 'OK');
      });
  }

  getClass() {
    this.teacherService.getAllType().subscribe((res) => {
      this.teacher = res;
    });
  }

}
