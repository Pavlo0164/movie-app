import { NgIf } from '@angular/common';
import {
  Component,
  OnChanges,
  SimpleChanges,
  input,
  HostBinding,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
@Component({
  selector: 'app-header',
  imports: [
    MatButtonModule,
    MatIconModule,
    NgIf,
    MatBadgeModule,
    MatMenuModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnChanges {
  public logged = input<boolean>(false);
  @HostBinding('class.header_top')

  public productsInShop?: number;
  public nameOfUser?: string;
  public productsInFavor?: number;

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (this.logged()) {
      this.productsInShop = 4;
      this.nameOfUser = 'Pavlo';
      this.productsInFavor = 2;
    }
  }
}
