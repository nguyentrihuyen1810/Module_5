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

  changeColor(color: string) {
    switch (color) {
      case 'blue':
        this.color = 'blue';
        break;
      case 'black':
        this.color = 'black';
        break;
      case 'aqua':
        this.color = 'aqua';
        break;
      case 'pink':
        this.color = 'pink';
        break;
    }
  }
}
