// import { Component, OnInit } from '@angular/core';
// import {FormControl, FormGroup, Validators} from '@angular/forms';
// import {Class} from '../../model/Class';
// import {Router} from '@angular/router';
// import {MatSnackBar} from '@angular/material/snack-bar';
// import {StudentService} from '../../service/student.service';
// import {TeacherService} from '../../service/teacher.service';
// import {Student} from '../../model/Student';
//
// @Component({
//   selector: 'app-add',
//   templateUrl: './add.component.html',
//   styleUrls: ['./add.component.css']
// })
// export class AddComponent implements OnInit {
//
//   studentAddForm: FormGroup = new FormGroup({
//     id: new FormControl('', [Validators.required]),
//     name: new FormControl('', [Validators.required]),
//     birthday: new FormControl('', [Validators.required]),
//     gender: new FormControl('', [Validators.required]),
//     class: new FormControl('', [Validators.required])
//   });
//
//   class: Class[] = [];
//   id: number;
//   genders: Array<string> = ['Nam', 'Nu', 'Khac'];
//
//   constructor(private studentService: StudentService,
//               private teacherService: TeacherService,
//               private router: Router,
//               private snackBar: MatSnackBar) { }
//
//   ngOnInit(): void {
//     this.getClass();
//   }
//
//   add() {
//     const student: Student = {
//       id: this.studentAddForm.value.name,
//       name: this.studentAddForm.value.name,
//       birthday: this.studentAddForm.value.birthday,
//       gender: this.studentAddForm.value.gender,
//       class: {
//         id: this.studentAddForm.value.class
//       }
//     };
//     this.studentService.create(this.studentAddForm.value).subscribe((res) => {
//       this.router.navigateByUrl('');
//       this.snackBar.open('Create succcessfully!', 'OK');
//     });
//   }
//
//   getClass() {
//     this.classService.getAllType().subscribe((res) => {
//       this.class = res;
//     });
//   }
//
// }
