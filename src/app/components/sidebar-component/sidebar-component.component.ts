import { Component, Input } from '@angular/core';
import type { Step } from 'src/app/types';

@Component({
  selector: 'app-sidebar-component',
  templateUrl: './sidebar-component.component.html',
  styleUrls: ['./sidebar-component.component.sass'],
})
export class SidebarComponentComponent {
  @Input() steps: Step[] = [];
}
