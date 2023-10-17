import { Component, Input, ChangeDetectorRef } from '@angular/core';
import Fournisseur from 'src/app/interfaces/Fournisseur';
import { ModalComponent } from '../modal/modal.component';
import { ServerService } from 'src/app/service/server.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-fournisseurs-table',
  templateUrl: './fournisseurs-table.component.html',
  styleUrls: ['./fournisseurs-table.component.css']
})
export class FournisseursTableComponent {
  @Input() fournisseurs: Fournisseur[]=[]; // Input property to receive the list of Fournisseur objects from the parent component

  displayedColumns: string[] = ['ID', 'nom', 'pays', 'Adresse', 'arrivages', 'details'];



  constructor(private server: ServerService, public dialog: MatDialog,private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getFournisseurs();
      
      
  }

  getFournisseurs(){
    this.server.getFournisseurs().subscribe((response: Fournisseur[]) => {
      this.fournisseurs = response;
      console.log(this.fournisseurs);
      this.cdr.detectChanges(); // Manually trigger change detection
    });
  }


  public openDetailsDialog = (id: number) => {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: this.fournisseurs.find(c => c.ID = id) 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


}
