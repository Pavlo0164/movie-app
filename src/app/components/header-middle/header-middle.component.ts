import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';
import { NgIf } from '@angular/common';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-middle',
  imports: [MatIcon, MatInputModule, MatBadgeModule],
  templateUrl: './header-middle.component.html',
  styleUrl: './header-middle.component.scss',
})
export class HeaderMiddleComponent implements OnChanges {
  @Input() logged!: boolean;
  @Output() showPopUpEvent = new EventEmitter<boolean>();
  public logoText: string = 'superShop';
  public phone: string = '+380931437843';
  public titleOfShop: string = 'Shop';

  public amountOfItems?: number;
  public amountMoney?: number;
  public isShowed: boolean = false;
  ngOnChanges(changes: SimpleChanges): void {
    if (this.logged) {
      this.amountOfItems = 5;
      this.amountMoney = 450;
    }
  }
  onShowPopUp() {
    this.showPopUpEvent.emit(true);
  }
}
