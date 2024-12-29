import { NgIf } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
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
  @Input() logged!: boolean;
  public userButtonText: string = 'Log In';
  public productsInShop?: number;
  public nameOfUser?: string;
  public productsInFavor?: number;
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (this.logged) {
      this.productsInShop = 4;
      this.nameOfUser = 'Pavlo';
      this.productsInFavor = 2;
    }
  }
}
