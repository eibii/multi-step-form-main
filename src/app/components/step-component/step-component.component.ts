import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-step-component',
  templateUrl: './step-component.component.html',
  styleUrls: ['./step-component.component.sass'],
})
export class StepComponentComponent {
  @Input() idx: number = 0;
  @Input() title: string = '';
  @Input() to: string = '';
  @Input() onlyNumber = false;
  currentRoute: string = '';

  constructor(private location: Location) {
    location.onUrlChange((val) => {
      this.currentRoute = val;
    });
  }
}
