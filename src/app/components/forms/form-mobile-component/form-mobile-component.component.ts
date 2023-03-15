import { Component, Input } from '@angular/core';
import type { InfoForm } from 'src/app/types';
import { Location } from '@angular/common';
import { findIndex } from 'lodash';

@Component({
  selector: 'app-form-mobile-component',
  templateUrl: './form-mobile-component.component.html',
  styleUrls: ['./form-mobile-component.component.sass'],
})
export class FormMobileComponentComponent {
  @Input() forms: InfoForm[] = [];
  key = 0;

  constructor(private location: Location) {
    location.onUrlChange((val) => {
      this.key = findIndex(this.forms, (o) => o.to === val);
    });
  }
}
