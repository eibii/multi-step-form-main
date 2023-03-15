import { Component, OnInit } from '@angular/core';
import type { Step, InfoForm } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  isMobile = window.screen.width <= 768;
  currentRoute = '';
  title = 'desafio';
  steps: Step[] = [
    {
      title: 'Your info',
      to: '/',
    },
    {
      title: 'Select Plan',
      to: '/step-2',
    },
    {
      title: 'Add-Ons',
      to: '/step-3',
    },
    {
      title: 'Summary',
      to: '/step-4',
    },
  ];
  forms: InfoForm[] = [
    {
      title: 'Personal info',
      description: 'Please provide your name, email address, end phone number.',
      to: this.steps[0].to,
      nextTo: this.steps[1].to,
    },
    {
      title: 'Select your plan',
      description: 'You have the option of mothly or yearly billing.',
      to: this.steps[1].to,
      nextTo: this.steps[2].to,
      backTo: this.steps[0].to,
    },
    {
      title: 'Pick add-ons',
      description: 'Add-ons help enhance your gaming experience.',
      to: this.steps[2].to,
      nextTo: this.steps[3].to,
      backTo: this.steps[1].to,
    },
    {
      title: 'Finishing up',
      description: 'Double-check everything looks OK before confirming.',
      to: this.steps[3].to,
      backTo: this.steps[2].to,
    },
  ];

  ngOnInit(): void {
    window.addEventListener('resize', () => {
      this.isMobile = window.screen.width <= 768;
    });
  }
}
