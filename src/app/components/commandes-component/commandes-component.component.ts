import { ChangeDetectorRef, Component } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-commandes-component',
  templateUrl: './commandes-component.component.html',
  styleUrls: ['./commandes-component.component.css']
})
export class CommandesComponentComponent {
  constructor(public dialog: MatDialog,private cdr: ChangeDetectorRef){}
  openModal(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
