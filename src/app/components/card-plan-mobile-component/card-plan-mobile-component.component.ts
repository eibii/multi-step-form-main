import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-plan-mobile-component',
  templateUrl: './card-plan-mobile-component.component.html',
  styleUrls: ['./card-plan-mobile-component.component.sass'],
})
export class CardPlanMobileComponentComponent {
  @Input() title = '';
  @Input() icon = '';
  @Input() price = '';
  @Input() isRecommended?: boolean = false;
  @Input() isSelected?: boolean = false;
}
