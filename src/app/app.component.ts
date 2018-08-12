import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  operandMap: Map<string, any | number>;
  nummerStorage: number[] = [];
  clickedNummers: number[] =  [];
  selectedNummer: number;
  selectedOperand: string;
  result: number;

  constructor() {
    const map = new Map();
    map.set('+', ((a: number, b: number) => a + b));
    map.set('-', ((a: number, b: number) => a - b));
    map.set('*', ((a: number, b: number) => a * b));
    map.set('/', ((a: number, b: number) => a / b));
    this.operandMap = map;
  }

  addNummer(nummer: number) {
    this.clickedNummers.push(nummer);
    this.selectedNummer = parseInt(this.clickedNummers.join(''));
  }

  setOperand(operand: string) {
    if (this.operandIsSelected(operand)) {
      this.selectedOperand = operand;
      this.bereken();
    } else {
      this.bereken();
      this.selectedOperand = operand;
    }
    this.clickedNummers = [];
    this.selectedNummer = null;
  }

  bereken() {
    if (this.numberHasBeenSelected()) {
      this.nummerStorage.push(this.selectedNummer);
      this.result = this.nummerStorage.reduce(this.operandMap.get(this.selectedOperand));
      this.nummerStorage = [];
      this.nummerStorage.push(this.result);
    }
  }

  clear() {
    this.nummerStorage = [];
    this.selectedNummer = null;
    this.result = null;
    this.clickedNummers = [];
    this.selectedOperand = null;
  }

  private numberHasBeenSelected() {
    return this.clickedNummers.length > 0;
  }

  private operandIsSelected(operand: string) {
    return !this.selectedOperand || this.selectedOperand === operand;
  }
}
