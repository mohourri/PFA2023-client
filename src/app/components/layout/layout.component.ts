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
      icon: 'supervisor_account',
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
      icon: 'payment',
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
      title: 'Statistiques',
      icon: 'bar_chart',
      color: '#010626',
      subMenu: [
        {
          title: 'Ventes',
          icon: 'money',
          link: '/ventes_statistiques',
          color: '#010626',
        },
        {
          title: 'Generale',
          icon: 'info',
          color: '#010626',
          link: '/generale_statistiques',
        },
      ],
    }
  ];
}