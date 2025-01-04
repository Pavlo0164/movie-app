import { Component, HostListener, model } from '@angular/core';
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
  eventPopUp = model<boolean>();
  @HostListener('body:click', ['$event'])
  closePopUp(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('pop-up'))
      this.eventPopUp.set(false);
    else if (
      (event.target as HTMLElement).classList.contains('pop-up__button')
    ) {
      this.eventPopUp.set(false);
    }
  }
}
