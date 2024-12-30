import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeaderMiddleComponent } from './components/header-middle/header-middle.component';
import { PopupCallComponent } from './components/popup-call/popup-call.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HeaderMiddleComponent, PopupCallComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public isLogged: boolean = true;
  public isShowCallBack: boolean = false;
  eventShowPopUp(isShow: boolean): void {
    this.isShowCallBack = isShow;
  }
}
