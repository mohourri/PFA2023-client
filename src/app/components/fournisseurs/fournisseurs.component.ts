import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCommandeComponent } from '../add-commande/add-commande.component';

@Component({
  selector: 'app-fournisseurs',
  templateUrl: './fournisseurs.component.html',
  styleUrls: ['./fournisseurs.component.css']
})
export class FournisseursComponent {

  constructor(public dialog: MatDialog){}

  openModal(): void { 
    console.log('The dialog was opened');

    const dialogRef = this.dialog.open(AddCommandeComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
