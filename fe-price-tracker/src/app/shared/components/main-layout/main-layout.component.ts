import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'main-layout',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './main-layout.component.html'
})
export class MainLayoutComponent {

}
