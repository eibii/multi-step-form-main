import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-ons-component',
  templateUrl: './add-ons-component.component.html',
  styleUrls: ['./add-ons-component.component.sass'],
})
export class AddOnsComponentComponent {
  @Output() onSelect: EventEmitter<any> = new EventEmitter();
  @Input() title = '';
  @Input() description = '';
  @Input() price = '';
  @Input() idx: number | null = null;
  @Input() value = false;

  onChange(value: boolean) {
    this.onSelect.emit({ idx: this.idx, value });
  }
}
