import { Component, output, HostBinding, HostListener } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-popup-call',
  imports: [MatIcon],
  templateUrl: './popup-call.component.html',
  styleUrl: './popup-call.component.scss',
})
export class PopupCallComponent {
  public closePopUpCallMe = output<boolean>();
  @HostBinding('class.active')
  @HostListener('body:click', ['$event'])
  closePopUp(event: any) {
    if (event.target.classList.contains('pop-up'))
      this.closePopUpCallMe.emit(false);
  }
}
