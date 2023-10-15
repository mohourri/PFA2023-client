import { Component, Inject, Output, EventEmitter } from '@angular/core';
import Commande from "../../interfaces/Commande"
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ServerService } from 'src/app/service/server.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Output() validationSuccess: EventEmitter<void> = new EventEmitter<void>();

  constructor(@Inject(MAT_DIALOG_DATA) public commande: Commande, private server: ServerService,  private router: Router,public dialogRef: MatDialogRef<ModalComponent>){}
  
  ngOnInit(): void {
    console.log('La commande recu:')
    console.log(this.commande)
  }

   capitalizeFirstLetter(value: string) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  validateCommande(id : number){
    
    this.server.validateCommande(id).subscribe(
        response => {
            console.log('Commande validated successfully:', response);
            this.validationSuccess.emit();
        },
        error => {
            console.error('Error validating commande:', error);
            this.validationSuccess.emit();

            this.dialogRef.close();
        }
    );
}
}
