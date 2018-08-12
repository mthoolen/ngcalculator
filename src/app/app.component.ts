import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  operandMap: Map<string, any | number>;
  numberStorage: number[] = [];
  aangeklikteNummers: number[] =  [];
  selectedNummer: number;
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
    this.selectedNummer = parseInt(this.aangeklikteNummers.join(''));
  }

  setOperand(operand: string) {
    if (this.operandIsSelected(operand)) {
      this.selectedOperand = operand;
      this.bereken();
    } else {
      this.bereken();
      this.selectedOperand = operand;
    }
    this.aangeklikteNummers = [];
    this.selectedNummer = null;
  }

  bereken() {
    if (this.numberHasBeenSelected()) {
      this.numberStorage.push(this.selectedNummer);
      this.uitkomst = this.numberStorage.reduce(this.operandMap.get(this.selectedOperand));
      this.numberStorage = [];
      this.numberStorage.push(this.uitkomst);
    }
  }

  clear() {
    this.numberStorage = [];
    this.selectedNummer = null;
    this.uitkomst = null;
    this.aangeklikteNummers = [];
    this.selectedOperand = null;
  }

  private numberHasBeenSelected() {
    return this.aangeklikteNummers.length > 0;
  }

  private operandIsSelected(operand: string) {
    return !this.selectedOperand || this.selectedOperand === operand;
  }
}
