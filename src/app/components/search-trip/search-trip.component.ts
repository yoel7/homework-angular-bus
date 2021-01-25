import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { bustrip } from 'src/app/models/bustrip.model';
import { DataService } from 'src/app/Services/data.service';
// import {  } from 'src/app/components/search/search.component'
@Component({
  selector: 'app-search-trip',
  templateUrl: './search-trip.component.html',
  styleUrls: ['./search-trip.component.css'],
})
export class SearchTripComponent implements OnInit {
  dataFiltSeri: bustrip[];
  constructor(private databus: DataService) {}
  ngOnInit(): void {
    // this.dataFiltSeri = this.databus.bustripfilter; 
    //  מעניין מאוד למה א"א בלי האינפוט כמו בשורה למעלה הרי הכול רפרנסים
  }
  pusArTr(a?): void {
    this.dataFiltSeri = this.databus.bustripfilter; 
    console.log(this.dataFiltSeri, 'this.dataFiltSeri');
    
  }
}
