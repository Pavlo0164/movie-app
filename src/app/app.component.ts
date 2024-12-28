import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeaderMiddleComponent } from './components/header-middle/header-middle.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HeaderMiddleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public title = 'movie-app';
}
