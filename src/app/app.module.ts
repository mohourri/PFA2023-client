import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import {MatSlideToggle} from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { LayoutComponent } from './components/layout/layout.component';
import { AddCommandeComponent } from './components/add-commande/add-commande.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SalesComponent } from './components/sales/sales.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import {DashboardComponent} from './components/dashboard/dashboard.component'
import {CommandesComponentComponent} from './components/commandes-component/commandes-component.component'
import {CommandesTableComponent} from './components/commandes-table/commandes-table.component'
import {DashCardComponent} from './components/dash-card/dash-card.component'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ModalComponent} from '../../src/app/components/modal/modal.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { CapitalizePipe } from './pipes/capitalizing-pipe';

import { HttpClientModule } from '@angular/common/http'; 
import { ArrivagesComponent } from './components/arrivages/arrivages.component';
import { ArrivagesTableComponent } from './components/arrivages-table/arrivages-table.component';
import { FournisseursComponent } from './components/fournisseurs/fournisseurs.component';
import { PaiementsTableComponent } from './components/paiements-table/paiements-table.component';
import { PaiementsComponent } from './components/paiements/paiements.component';
import { TransporteursComponent } from './components/transporteurs/transporteurs.component';
import { VentesComponent } from './components/ventes/ventes.component';
import { GeneraleComponent } from './components/generale/generale.component';
import { FournisseursTableComponent } from './components/fournisseurs-table/fournisseurs-table.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientsTableComponent } from './components/clients-table/clients-table.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: DashboardComponent,
  },
  {
    path: 'commandes',
    component: CommandesComponentComponent,
  },
  {
    path: 'clients',
    component: ClientsComponent, 
  },
  {
    path: 'arrivages',
    component: ArrivagesComponent, 
  },
  {
    path: 'fournisseurs',
    component: FournisseursComponent, 
  },
  {
    path: 'paiements',
    component: PaiementsComponent, 
  },
  {
    path: 'transporteurs',
    component: TransporteursComponent, 
  },
  {
    path: 'ventes_statistiques',
    component: VentesComponent, 
  },
  {
    path: 'generale_statistiques',
    component: GeneraleComponent, 
  },
];


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    RouterModule.forRoot(routes),
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatMenuModule,
    MatGridListModule,
    MatCardModule,
    HttpClientModule,
    MatTableModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatTabsModule,
    MatSelectModule
  ],
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    MenuItemComponent,
    PageHeaderComponent,
    HomeComponent,
    SalesComponent,
    CommandesTableComponent,
    DashboardComponent,
    DashCardComponent,
    ModalComponent,
    CapitalizePipe,
    SidebarComponent,
    CommandesComponentComponent,
    AddCommandeComponent,
    ArrivagesComponent,
    ArrivagesTableComponent,
    FournisseursComponent,
    FournisseursTableComponent,
    ClientsComponent,
    ClientsTableComponent
    ],
  bootstrap: [AppComponent],
})
export class AppModule {}
