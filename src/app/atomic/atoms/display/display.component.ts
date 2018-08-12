import { Component } from '@angular/core';
import {Input} from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {

  @Input()
  displayItem: string;

}
