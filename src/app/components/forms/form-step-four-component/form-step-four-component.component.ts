import { Component, OnInit } from '@angular/core';
import { map } from 'lodash';
import type { Addons } from 'src/app/types';

@Component({
  selector: 'app-form-step-four-component',
  templateUrl: './form-step-four-component.component.html',
  styleUrls: ['./form-step-four-component.component.sass'],
})
export class FormStepFourComponentComponent implements OnInit {
  planTitle = '';
  planType = '';
  planPrice = '';
  addOns: Addons[] = [];
  total = '';

  ngOnInit(): void {
    let total = 0;
    let plan: any = localStorage.getItem('PLAN');
    this.planType = localStorage.getItem('PLAN-TYPE') || '';
    const addOns: Addons[] = JSON.parse(
      localStorage.getItem('ADD-ONS') || '[]'
    );

    if (addOns.length) {
      map(addOns, (item: Addons) => {
        total += Number(item.price.replace(/[\D]*/g, ''));
      });
    }

    if (plan) {
      plan = JSON.parse(`${plan}`);
      this.planTitle = plan.title;
      this.planPrice = plan.price;
      total += Number(plan.price.replace(/[\D]*/g, ''));
    }
    this.addOns = addOns;
    this.total = Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(total);
  }
}
