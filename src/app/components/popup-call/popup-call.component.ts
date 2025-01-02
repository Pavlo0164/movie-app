import { Component, HostListener, output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-popup-call',
  imports: [MatIcon],
  templateUrl: './popup-call.component.html',
  styleUrl: './popup-call.component.scss',
  host: {
    class: 'pop-up',
  },
})
export class PopupCallComponent {
  closePopUpCallMe = output<boolean>();
  @HostListener('body:click', ['$event'])
  closePopUp(event: MouseEvent) {
    if (
      event.target &&
      (event.target as HTMLElement).classList.contains('pop-up')
    )
      this.closePopUpCallMe.emit(false);
  }
}
