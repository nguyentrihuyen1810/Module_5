import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Service} from '../../data/contract/Service';
import {ContractService} from '../../service/contract/contract.service';
import {ServiceService} from '../../service/contract/service.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Contract} from '../../data/contract/Contract';
import {EmployeeService} from '../../service/employee/employee.service';
import {PositionService} from '../../service/employee/position.service';
import {Employee} from '../../data/employee/Employee';
import {Position} from '../../data/employee/Position';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  employeeForm: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    birthday: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    position: new FormControl('', [Validators.required])
  });

  position: any = [];

  constructor(private employeeService: EmployeeService,
              private positionService: PositionService,
              private router: Router,
              private snackBar: MatSnackBar) {
  }
  ngOnInit(): void {
    this.getPosition();
  }

  add() {
    const employee: Employee = {
      id: this.employeeForm.value.name,
      name: this.employeeForm.value.name,
      birthday: this.employeeForm.value.birthday,
      phone: this.employeeForm.value.gender,
      email: this.employeeForm.value.phone,
      address: this.employeeForm.value.phone,
      position: {
        id: this.employeeForm.value.position
      }
    };
    this.employeeService.create(this.employeeForm.value).subscribe((res) => {
      this.router.navigateByUrl('/employee-list');
      this.snackBar.open('Create successfully!', 'ok');
    });
  }

  getPosition() {
    this.positionService.getAllType().subscribe((res) => {
        this.position = res;
      }
    );
  }

}
