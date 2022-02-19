import { Component, OnInit } from '@angular/core';
import { Menu } from '../constants/menu-items';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems = Menu;
  constructor() { }

  ngOnInit(): void {
  }

}
