import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Menu } from '../../menu.module';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  opened = true;

  toggle(): void {
    this.opened = !this.opened  ;
  }

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