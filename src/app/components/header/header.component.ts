import { NgIf } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
@Component({
  selector: 'app-header',
  imports: [MatIconModule, NgIf, MatMenuModule],
  host: { '[class.header__top]': 'true' },
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  logged = input<boolean>(false);
  informationOfUser = computed(() => {
    if (this.logged())
      return {
        nameOfUser: 'Pavlo',
        productsInFavor: 5,
      };
    return null;
  });
}
