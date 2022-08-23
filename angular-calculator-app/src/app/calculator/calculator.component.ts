import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() {
  }

  number1: number;
  number2: number;
  result: number;


  ngOnInit(): void {
  }

  equal(value1: number, value2: number, operation: string) {
    this.result = 0;
    this.number1 = parseInt(value1);
    this.number2 = parseInt(value2);

    switch (operation) {
      case 'cong':
        this.result = number1 + number2;
        break;
      case 'tru':
        this.result = number1 - number2;
        break;
      case 'nhan':
        this.result = number1 * number2;
        break;
      case 'chia':
        this.result = number1 / number2;
        break;
    }
  }

}
