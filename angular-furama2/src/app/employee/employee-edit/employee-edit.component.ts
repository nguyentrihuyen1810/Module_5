import { Component, OnInit } from '@angular/core';
import {Contract} from '../../data/contract/Contract';
import {ContractService} from '../../service/contract/contract.service';
import {ServiceService} from '../../service/contract/service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Employee} from '../../data/employee/Employee';
import {EmployeeService} from '../../service/employee/employee.service';
import {PositionService} from '../../service/employee/position.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  position: any = [];
  employees: Employee[];

  constructor(private employService: EmployeeService,
              private positionService: PositionService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private snackBar: MatSnackBar) { }

  employeeForm: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    birthday: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    position: new FormControl('', [Validators.required])
  });


  ngOnInit(): void {
    this.getType();

    this.employService.findById(this.activatedRoute.snapshot.params.id).subscribe((data) => {
      this.employeeForm.setValue(data);
    });
    this.positionService.getAllType().subscribe((data) => {
      this.position = data;
    });
  }

  update() {
    this.employService.update(this.activatedRoute.snapshot.params.id, this.employeeForm.value).subscribe(
      (data) => {
        this.router.navigateByUrl('/contract-list');
        this.snackBar.open('Update successfully!', 'ok');
      });
  }

  getType() {
    this.positionService.getAllType().subscribe((res) => {
      this.position = res;
    });
  }

}
