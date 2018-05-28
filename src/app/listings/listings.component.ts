import { Component, OnInit } from '@angular/core';
// import {DatabaseService} from '../services/database-service/database.service';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss']
})
export class ListingsComponent implements OnInit {

  private countries: any;

  constructor() {
    // this.getCountry();
  }

  ngOnInit() {
  }

  getCountry() {
  }
}
