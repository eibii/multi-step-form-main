import { Component } from '@angular/core';

@Component({
  selector: 'app-form-step-one-component',
  templateUrl: './form-step-one-component.component.html',
  styleUrls: ['./form-step-one-component.component.sass'],
})
export class FormStepOneComponentComponent {
  name = localStorage.getItem('NAME') || '';
  email = localStorage.getItem('EMAIL') || '';
  phone = localStorage.getItem('PHONE') || '';

  onKeyup(variable: string): void {
    const self = this as any;
    localStorage.setItem(`${variable.toLocaleUpperCase()}`, self[variable]);
  }
}
