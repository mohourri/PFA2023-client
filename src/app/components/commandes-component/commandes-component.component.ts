import { ChangeDetectorRef, Component } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import Commande from 'src/app/interfaces/Commande';
import { AddCommandeComponent } from '../add-commande/add-commande.component';

@Component({
  selector: 'app-commandes-component',
  templateUrl: './commandes-component.component.html',
  styleUrls: ['./commandes-component.component.css']
})
export class CommandesComponentComponent {
  constructor(public dialog: MatDialog){}

  openModal(): void { 
    console.log('The dialog was opened');

    const dialogRef = this.dialog.open(AddCommandeComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
