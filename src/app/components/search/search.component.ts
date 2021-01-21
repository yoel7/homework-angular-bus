import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { DataService } from '../../Services/data.service';
import { bustrip } from '../../models/bustrip.model';
import { trip } from '../../models/trip.model';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() pushArrTrip: EventEmitter<Array<object>> = new EventEmitter<Array<object>>();
  data1: bustrip[];
  trip: trip ={
    source:null,dest:null,date:null
  };
  constructor(private databus: DataService) {}
  ngOnInit(): void {}

  inputtrip() {
    this.data1 = this.databus.bustrip2.filter(item => item.source==this.trip.source && item.dest==this.trip.dest)
    }
  createBusTrip():void {
    // this.data1 = this.databus.bustrip2.filter(item => item.source==this.trip.source && item.dest==this.trip.dest)
    // console.log(this.data1, 'filtered array');
    this.pushArrTrip.emit(this.data1);
      }
      // inputtrip()
  
}

// import { from } from 'rxjs'; // חיליק למה הוספת את זה?

