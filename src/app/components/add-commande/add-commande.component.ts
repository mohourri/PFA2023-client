import { Component, Inject , Output, EventEmitter} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Article from 'src/app/interfaces/Article';
import Commande from 'src/app/interfaces/Commande';
import { ServerService } from 'src/app/service/server.service';

@Component({
  selector: 'app-add-commande',
  templateUrl: './add-commande.component.html',
  styleUrls: ['./add-commande.component.css']
})
export class AddCommandeComponent {
  @Output() validationSuccess: EventEmitter<void> = new EventEmitter<void>();
  articles : Article[]=[];

  commande!: any ;

  constructor( private server: ServerService,  private router: Router,public dialogRef: MatDialogRef<AddCommandeComponent>){}
  
  ngOnInit(): void {
    this.getArticles();
    console.log('La commande recu:');
  }

   capitalizeFirstLetter(value: string) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  getArticles(){
    
    this.server.getArticles().subscribe(
        response => {
            console.log('Commande validated successfully:', response);
            this.articles =response;
            // this.validationSuccess.emit();
        },
        error => {
            console.error('Error validating commande:', error);



            // this.validationSuccess.emit();
            // this.dialogRef.close();
        }
    );
}
}
