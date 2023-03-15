import { Component, OnInit } from '@angular/core';
import { filter, findIndex, isEqual } from 'lodash';
import type { Addons } from 'src/app/types';

@Component({
  selector: 'app-form-step-three-component',
  templateUrl: './form-step-three-component.component.html',
  styleUrls: ['./form-step-three-component.component.sass'],
})
export class FormStepThreeComponentComponent implements OnInit {
  selected = [];
  addOns = [
    {
      title: 'Online service',
      description: 'Access to multiplayer games',
      price: '+$1/mo',
    },
    {
      title: 'Larger storage',
      description: 'Extra 1TB of closed save',
      price: '+$2/mo',
    },
    {
      title: 'Customizable profile',
      description: 'Custom theme as your profile',
      price: '+$2/mo',
    },
  ];

  ngOnInit(): void {
    if (localStorage.getItem('ADD-ONS')) {
      this.selected = JSON.parse(`${localStorage.getItem('ADD-ONS')}`);
    }
  }

  onSelect({ idx, value }: { idx: number; value: boolean }) {
    let selected: Array<Addons> = JSON.parse(
      localStorage.getItem('ADD-ONS') || '[]'
    );
    if (value) {
      selected = [...selected, this.addOns[idx]];
    } else {
      selected = filter(selected, (o, i) => i !== idx);
    }
    localStorage.setItem('ADD-ONS', JSON.stringify(selected));
  }

  isSelected(idx: number): boolean {
    const addOn = this.addOns[idx];
    const key = findIndex(this.selected, (o) => isEqual(o, addOn));
    return key !== -1;
  }
}
