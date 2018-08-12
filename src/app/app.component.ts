import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  operandMap: Map<string, any | number>;
  nummerArrays: number[] = [];
  aangeklikteNummers: number[] =  [];
  selectedNummerDisplay: number;
  selectedOperand: string;
  uitkomst: number;

  constructor() {
    const map = new Map();
    map.set('+', ((a: number, b: number) => a + b));
    map.set('-', ((a: number, b: number) => a - b));
    map.set('*', ((a: number, b: number) => a * b));
    map.set('/', ((a: number, b: number) => a / b));
    this.operandMap = map;
  }

  addNummer(nummer: number) {
    this.aangeklikteNummers.push(nummer);
    this.selectedNummerDisplay = parseInt(this.aangeklikteNummers.join(''));
  }

  setOperand(operand: string) {
    if (this.selectedOperand && this.selectedOperand !== operand) {
      this.bereken();
      this.selectedOperand = operand;
    } else {
      this.selectedOperand = operand;
      this.bereken();
    }
    this.aangeklikteNummers = [];
    this.selectedNummerDisplay = null;
  }

  bereken() {
    if (this.aangeklikteNummers.length > 0) {
      this.nummerArrays.push(this.selectedNummerDisplay);
      const operandFunction = this.operandMap.get(this.selectedOperand);
      this.uitkomst = this.nummerArrays.reduce(operandFunction);
      this.nummerArrays = [];
      this.nummerArrays.push(this.uitkomst);
    }
  }

  clear() {
    this.nummerArrays = [];
    this.selectedNummerDisplay = null;
    this.uitkomst = null;
    this.aangeklikteNummers = [];
    this.selectedOperand = null;
  }
}
