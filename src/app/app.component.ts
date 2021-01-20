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
  SNA:number[] = [];
  res: bustrip[];
  data1: bustrip[];
  trip: trip ={
    source:null,dest:null,date:null
  };
  constructor(private databus: DataService) {}
  ngOnInit(): void {
   /* this.data1 = this.databus.bustrip2;
    console.log(this.data1);   */

  }
   createTrip1():void {
    // debugger;
   /* for(let item of this.data1){
      console.log(item, 'ìtem');
      if (item.source==this.trip.source && item.dest==this.trip.dest) {
      this.SNA.push(item.serialNumber);
      console.log(item, 'filtered item');}
    }   */
    this.data1 = this.databus.bustrip2.filter(item => item.source==this.trip.source && item.dest==this.trip.dest)
    console.log(this.data1, 'filtered array');
    
    // console.log(this.SNA)
    // this.res = this.data1.find((x) => x.source == this.trip.source);      פיינד
  }
  // createTrip1();//  למה אני לא מצליח לקרוא לפונ' מהts???????????
  /*  createTrip=(s:trip)=>{
    console.log(s)
    this.trip.source = s.source,
    this.trip.dest = s.dest,
    this.trip.date = s.date;
    
   }    */
  
 
 
}
