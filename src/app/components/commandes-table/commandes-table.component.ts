import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/service/server.service';

@Component({
  selector: 'app-commandes-table',
  templateUrl: './commandes-table.component.html',
  styleUrls: ['./commandes-table.component.css'],
})
export class CommandesTableComponent implements OnInit {
  dataSource: any[] = []; // Replace 'any[]' with 'Commande[]' if 'dataSource' is of type 'Commande[]'

  constructor(private server: ServerService) {}

  ngOnInit(): void {
    // Utilize the method GET to retrieve data from the backend.
    this.server.getData().subscribe((response) => {
      this.dataSource = response;
    });
  }
}
