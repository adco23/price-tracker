import { OverlayModule } from '@angular/cdk/overlay';
import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [OverlayModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  isOpen: boolean = false;
}
