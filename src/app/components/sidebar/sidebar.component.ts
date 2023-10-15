import { Component } from '@angular/core';
import { Menu } from 'src/app/menu.module';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  opened = true;
  menu: Menu = [
    {
      title: 'Commandes',
      icon: 'receipt',
      link: '/home',
      color: '#ff7f0e',
    },
    {
      title: 'Statistics',
      icon: 'bar_chart',
      color: '#ff7f0e',
      subMenu: [
        {
          title: 'Sales',
          icon: 'money',
          link: '/sales',
          color: '#ff7f0e',
        },
        {
          title: 'Customers',
          icon: 'people',
          color: '#ff7f0e',
          link: '/customers',
        },
      ],
    },
    {
      title: 'Clients',
      icon: 'personne',
      link: '/clients',
      color: '#ff7f0e',
    }
  ];
}
