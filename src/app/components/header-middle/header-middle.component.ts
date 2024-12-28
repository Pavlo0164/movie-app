import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header-middle',
  imports: [MatIcon, MatInputModule, MatBadgeModule, NgIf],
  templateUrl: './header-middle.component.html',
  styleUrl: './header-middle.component.scss',
})
export class HeaderMiddleComponent {
  public logoText: string = 'superShop';
  public phone: string = 'tel:+380931437843';
  public amountOfItems: number = 0;
  public titleOfShop: string = 'Shop';
  public amountMoney: number = 0;
  public isShowed: boolean = false;
}
