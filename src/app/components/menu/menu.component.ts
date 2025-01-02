
import { NgFor } from '@angular/common';
import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [NgFor],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent implements OnInit {
  @HostBinding('class.menu')
  public addClass: boolean = true;
  public menuItems?: string[];
  ngOnInit(): void {
    this.menuItems = [
      'electronics',
      'jewelery',
      "men's clothing",
      "women's clothing",
    ];
  }
}
