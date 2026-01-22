import { Component, Input } from '@angular/core';

@Component({
  selector: 'common-btn',
  standalone: true,
  imports: [],
  templateUrl: './common-btn.component.html',
})
export class CommonBtnComponent {
  @Input({ required: true }) type!: string;
  @Input({ required: true }) text!: string;
  @Input() isDisabled: boolean = false;
}
