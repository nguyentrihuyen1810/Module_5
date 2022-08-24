import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  constructor() {
  }

  color: string;

  ngOnInit(): void {
  }

  changeColor(target: any) {
    this.color = target.value()
  }
}
