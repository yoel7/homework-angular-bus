import { Component, OnInit } from '@angular/core';
import { from, Subscription } from 'rxjs';
import { bustrip } from 'src/app/models/bustrip.model';
import { DataService } from 'src/app/Services/data.service';
@Component({
  selector: 'app-search-trip',
  templateUrl: './search-trip.component.html',
  styleUrls: ['./search-trip.component.css'],
})
export class SearchTripComponent implements OnInit {


  dataFiltSeri: bustrip[];
  busServiceSubscription: Subscription;
  constructor(private databus: DataService) {
    
   }
  ngOnInit(): void {

    this.busServiceSubscription =this.databus.get().subscribe((a)=>{
     this.dataFiltSeri=a; 
    });
    // this.dataFiltSeri = this.databus.bustripfilter;
    //  מעניין מאוד למה א"א בלי האינפוט כמו בשורה למעלה הרי הכול רפרנסים
  }
 /* pusArTr(a?): void {
    this.dataFiltSeri = this.databus.bustripfilter;
    console.log(this.dataFiltSeri, 'this.dataFiltSeri');
  }         */
}
