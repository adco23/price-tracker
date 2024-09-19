import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'pass-eye',
  standalone: true,
  imports: [],
  templateUrl: './pass-eye.component.html',
})
export class PassEyeComponent {
  show: boolean = false;
  @Output() toggle = new EventEmitter<boolean>()

  toggleVisibility() {
    this.show = !this.show;
    this.toggle.emit(this.show);
  }
}
