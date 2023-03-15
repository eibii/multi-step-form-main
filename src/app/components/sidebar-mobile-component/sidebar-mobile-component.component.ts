import { Component, Input } from '@angular/core';
import type { Step } from 'src/app/types';

@Component({
  selector: 'app-sidebar-mobile-component',
  templateUrl: './sidebar-mobile-component.component.html',
  styleUrls: ['./sidebar-mobile-component.component.sass'],
})
export class SidebarMobileComponentComponent {
  @Input() steps: Step[] = [];
}
