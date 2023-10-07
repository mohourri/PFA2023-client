import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Commande from 'src/app/interfaces/Commande';
import { ServerService } from 'src/app/service/server.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-commandes-table',
  templateUrl: './commandes-table.component.html',
  styleUrls: ['./commandes-table.component.css']
})
export class CommandesTableComponent implements OnInit {
  @Input() fromC: string = '';
  dataSource: Commande[] = [];
  displayedColumns: string[] = ['id','nom', 'datedemande', 'date_validation', 'valide', 'client', 'vendeur', 'description', 'status', 'details'];

  constructor(private server: ServerService, public dialog: MatDialog) {}

  ngOnInit(): void {
    if(this.fromC=='dash')
      console.log("I'm from dashboard")
    this.getCommandes();
  }

  getCommandes(){
    this.server.getData().subscribe((response: Commande[]) => {
      this.dataSource = response;
    });
  }

  public openDetailsDialog = (id: number) => {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '70%',
      data: this.dataSource.find(c => c.ID = id) 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
  public redirectToUpdate = (id: string) => {
   
  }

  public redirectToDelete = (id: string) => {
    
  }
}
