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
      title: 'Arrivages',
      icon: 'flight_land',
      link: '/arrivages',
      color: '#010626',
    },
    {
      title: 'Clients',
      icon: 'personne',
      link: '/clients',
      color: '#010626',
    },
    {
      title: 'Fournisseurs',
      icon: 'store',
      link: '/fournisseurs',
      color: '#010626',
    },
    {
      title: 'Paiements',
      icon: 'money',
      link: '/paiements',
      color: '#010626',
    },
    {
      title: 'Transporteurs',
      icon: 'local_shipping',
      link: '/transporteurs',
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
    }
  ];
}