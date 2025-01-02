import { Component, computed } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { output, input } from '@angular/core';

@Component({
  selector: 'app-header-middle',
  imports: [MatIcon, MatBadgeModule],
  templateUrl: './header-middle.component.html',
  styleUrl: './header-middle.component.scss',
})
export class HeaderMiddleComponent {
  logged = input<boolean>(false);
  showPopUpEvent = output<boolean>();

  isShowed = false;
  phone = 'tel:+380931437843';

  infoAboutUser = computed(() => {
    if (this.logged())
      return {
        amountOfItems: 3,
        amountOfMoney: 500,
      };
    return null;
  });
}
