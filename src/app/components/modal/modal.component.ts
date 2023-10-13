import { Component, Inject } from '@angular/core';
import Commande from "../../interfaces/Commande"
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public commande: Commande){}
  
  ngOnInit(): void {
    console.log('La commande recu:')
    console.log(this.commande)
  }

   capitalizeFirstLetter(value: string) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
