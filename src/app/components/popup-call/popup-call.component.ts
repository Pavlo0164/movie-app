import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-popup-call',
  imports: [MatIcon],
  templateUrl: './popup-call.component.html',
  styleUrl: './popup-call.component.scss',
})
export class PopupCallComponent {
  public title: string = 'To call you back?';
  public text: string =
    'Enter your phone number and name.We will call you soon';

}
