import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Contract} from '../../data/contract/Contract';
import {ServiceTypeService} from '../../service/room-type/service-type.service';
import {Service} from '../../data/roomType/Service';
import {ServiceService} from '../../service/room-type/service.service';

@Component({
  selector: 'app-room-type-create',
  templateUrl: './room-type-create.component.html',
  styleUrls: ['./room-type-create.component.css']
})
export class RoomTypeCreateComponent implements OnInit {

  serviceForm: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    area: new FormControl('', [Validators.required]),
    max: new FormControl('', [Validators.required]),
    standard: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    floor: new FormControl('', [Validators.required]),
    serviceType: new FormControl('', [Validators.required]),
  });

  service: Service[];

  constructor(private serviceService: ServiceService,
              private serviceTypeService: ServiceTypeService,
              private router: Router,
              private snackBar: MatSnackBar) {
  }
  ngOnInit(): void {
    this.getCategory();
  }

  add() {
    const service: Service = {
      id: this.serviceForm.value.name,
      name: this.serviceForm.value.name,
      area: this.serviceForm.value.area,
      max: this.serviceForm.value.max,
      standard: this.serviceForm.value.standard,
      description: this.serviceForm.value.description,
      floor: this.serviceForm.value.floor,
      serviceType: {
        id: this.serviceForm.value.serviceType
      }
    };
    this.serviceService.create(this.serviceForm.value).subscribe((res) => {
      this.router.navigateByUrl('/customer-list');
      this.snackBar.open('Create successfully!', 'ok');
    });
  }

  getCategory() {
    this.serviceTypeService.getAllType().subscribe((res) => {
        this.service = res;
      }
    );
  }

}
