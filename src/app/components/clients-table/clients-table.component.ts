import { Component,Input,ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Client from 'src/app/interfaces/Client';
import { ServerService } from 'src/app/service/server.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.css']
})
export class ClientsTableComponent {
  @Input() fromC: string = '';
  clients: Client[] = [];
  displayedColumns: string[] = ['CIN', 'nom', 'prenom', 'sexe', 'date_naissance', 'tele', 'adresse', 'ville', 'details'];

  constructor(private server: ServerService, public dialog: MatDialog,private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getClients();
  }

  getClients(){
    this.server.getClients().subscribe((response: Client[]) => {
      this.clients = response;
      this.cdr.detectChanges(); // Manually trigger change detection
    });
  }


  public openDetailsDialog = (id: string) => {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: this.clients.find(c => c.CIN = id) 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
