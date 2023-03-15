import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-plan-component',
  templateUrl: './card-plan-component.component.html',
  styleUrls: ['./card-plan-component.component.sass']
})
export class CardPlanComponentComponent {
  @Input() title = ''
  @Input() icon = ''
  @Input() price = ''
  @Input() isRecommended?: boolean = false
  @Input() isSelected?: boolean = false
}
