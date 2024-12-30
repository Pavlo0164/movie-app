import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';
import { output, input } from '@angular/core';

@Component({
  selector: 'app-header-middle',
  imports: [MatIcon, MatInputModule, MatBadgeModule],
  templateUrl: './header-middle.component.html',
  styleUrl: './header-middle.component.scss',
})
export class HeaderMiddleComponent implements OnChanges {
  public logged = input<boolean>(false);
  public showPopUpEvent = output<boolean>();

  public isShowed: boolean = false;
  public phone: string = 'tel:+380931437843';
  public amountOfItems?: number;
  public amountMoney?: number;

  ngOnChanges(changes: SimpleChanges): void {
    if (this.logged()) {
      this.amountOfItems = 5;
      this.amountMoney = 450;
    }
  }
}
