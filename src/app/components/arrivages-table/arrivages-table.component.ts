import { Component , ChangeDetectorRef, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Arrivage from 'src/app/interfaces/Arrivage';
import { ServerService } from 'src/app/service/server.service';

@Component({
  selector: 'app-arrivages-table',
  templateUrl: './arrivages-table.component.html',
  styleUrls: ['./arrivages-table.component.css']
})
export class ArrivagesTableComponent {
  @Input() fromC: string = '';
  arrivages: Arrivage[] = [];
  displayedColumns: string[] = ['ID', 'nom', 'description', 'Date_arrivage', 'fournisseur', 'emballages', 'details'];

  constructor(private server: ServerService, public dialog: MatDialog,private cdr: ChangeDetectorRef){}

  ngOnInit(): void {
      this.getArrivages();
  }

  getArrivages(){
    this.server.getArrivages().subscribe((response: Arrivage[]) => {
      this.arrivages = response;
      this.cdr.detectChanges(); // Manually trigger change detection
    });
  }

  openModal(){

  }
}
