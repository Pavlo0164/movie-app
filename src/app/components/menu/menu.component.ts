import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [NgFor],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  host: {
    class: 'menu',
  },
})
export class MenuComponent implements OnInit {
  menuItems: string[] = [];
  constructor() {}
  ngOnInit(): void {
    this.menuItems = [
      'electronics',
      'jewelery',
      "men's clothing",
      "women's clothing",
    ];
  }
  
}
