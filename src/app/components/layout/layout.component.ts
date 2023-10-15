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
      title: 'Acueil',
      icon: 'home',
      link: '/home',
      color: '#010626',
    },
    {
      title: 'Commandes',
      icon: 'receipt',
      link: '/commandes',
      color: '#010626',
    },
    {
      title: 'Statistics',
      icon: 'bar_chart',
      color: '#010626',
      subMenu: [
        {
          title: 'Sales',
          icon: 'money',
          link: '/sales',
          color: '#010626',
        },
        {
          title: 'Customers',
          icon: 'people',
          color: '#010626',
          link: '/customers',
        },
      ],
    },
    {
      title: 'Clients',
      icon: 'personne',
      link: '/clients',
      color: '#010626',
    }
  ];
}