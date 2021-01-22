import { Component, Output, OnInit } from '@angular/core';
import { from } from 'rxjs'; // חיליק למה הוספת את זה?
import { DataService } from '../app/Services/data.service';
import { bustrip } from './models/bustrip.model';
import { trip } from './models/trip.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  btrip: bustrip[];
  dataFiltSeri:bustrip[];  
  constructor(private databus: DataService) {}
  ngOnInit(): void {}
  pusArTr(a?: bustrip[]): void {
    // this.btrip = a;
    // console.log(this.btrip)
    this.dataFiltSeri=this.databus.bustripfilter;
    console.log(this.dataFiltSeri, 'dataFiltSeri');
    
  }
}
