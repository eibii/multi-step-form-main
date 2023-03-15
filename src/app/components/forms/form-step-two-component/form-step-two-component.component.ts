import { Component, OnInit } from '@angular/core';
import { findIndex, isEqual } from 'lodash';

@Component({
  selector: 'app-form-step-two-component',
  templateUrl: './form-step-two-component.component.html',
  styleUrls: ['./form-step-two-component.component.sass'],
})
export class FormStepTwoComponentComponent implements OnInit {
  type = false;
  plan: number | null = null;
  prices = [
    {
      title: 'Arcade',
      price: '$9/mo',
      icon: '/assets/img/icon-arcade.svg',
    },
    {
      title: 'Advanced',
      price: '$12/mo',
      icon: '/assets/img/icon-advanced.svg',
      isRecommended: true,
    },
    {
      title: 'Pro',
      price: '$15/mo',
      icon: '/assets/img/icon-pro.svg',
    },
  ];

  ngOnInit(): void {
    this.type = localStorage.getItem('PLAN-TYPE') === 'Yearly' ? true : false;
    if (localStorage.getItem('PLAN')) {
      const key = findIndex(this.prices, (o) =>
        isEqual(JSON.stringify(o), localStorage.getItem('PLAN'))
      );
      this.plan = key === -1 ? null : key;
    }
  }

  selectPlan(idx: number): void {
    this.plan = idx;
    localStorage.setItem('PLAN', JSON.stringify(this.prices[idx]));
  }

  onChange(val: string) {
    localStorage.setItem('PLAN-TYPE', val);
  }
}
