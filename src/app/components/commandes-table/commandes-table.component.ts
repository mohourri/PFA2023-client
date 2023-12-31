import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
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

  constructor(private server: ServerService, public dialog: MatDialog,private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    if(this.fromC=='dash'){
      this.getNoValidatedCommandes();
    }else if(this.fromC=='general'){
      this.getAllCommandes();
    }
      
      
  }

  getNoValidatedCommandes(){
    this.server.getNoValidatedCommandes().subscribe((response: Commande[]) => {
      this.dataSource = response;
      this.cdr.detectChanges(); // Manually trigger change detection
    });
  }

  getAllCommandes(){
    this.server.getAllCommandes().subscribe((response: Commande[]) => {
      this.dataSource = response;
      this.cdr.detectChanges(); // Manually trigger change detection
    });
  }

  public openDetailsDialog = (id: number) => {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: this.dataSource.find(c => c.ID = id) 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  public redirectToUpdate = (id: string) => {
   
  }

  public redirectToDelete = (id: string) => {
    
  }
}
