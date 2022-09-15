import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Service} from '../../data/roomType/Service';
import {ServiceTypeService} from '../../service/room-type/service-type.service';
import {ServiceService} from '../../service/room-type/service.service';

@Component({
  selector: 'app-room-type-edit',
  templateUrl: './room-type-edit.component.html',
  styleUrls: ['./room-type-edit.component.css']
})
export class RoomTypeEditComponent implements OnInit {

  serviceType: any = [];
  services: Service[];

  constructor(private serviceService: ServiceService,
              private serviceTypeService: ServiceTypeService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private snackBar: MatSnackBar) { }

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


  ngOnInit(): void {
    this.getType();

    this.serviceService.findById(this.activatedRoute.snapshot.params.id).subscribe((data) => {
      this.serviceForm.setValue(data);
    });
    this.serviceTypeService.getAllType().subscribe((data) => {
      this.serviceType = data;
    });
  }

  update() {
    this.serviceService.update(this.activatedRoute.snapshot.params.id, this.serviceForm.value).subscribe(
      (data) => {
        this.router.navigateByUrl('/room-type-list');
        this.snackBar.open('Update successfully!', 'ok');
      });
  }

  getType() {
    this.serviceTypeService.getAllType().subscribe((res) => {
      this.serviceType = res;
    });
  }

}
