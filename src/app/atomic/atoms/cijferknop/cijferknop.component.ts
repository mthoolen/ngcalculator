import {Component, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-cijferknop',
  templateUrl: './cijferknop.component.html',
  styleUrls: ['./cijferknop.component.css']
})
export class CijferknopComponent {

  @Input()
  nummer: number;

  @Output()
  nummerEmitter = new EventEmitter<number>();

  constructor() {
  }

  click($event) {
    this.nummerEmitter.emit($event.target.innerText);
  }

}
