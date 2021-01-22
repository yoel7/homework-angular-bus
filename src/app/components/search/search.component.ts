import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { DataService } from '../../Services/data.service';
import { bustrip } from '../../models/bustrip.model';
import { trip } from '../../models/trip.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Output() pushArrTrip: EventEmitter<Array<object>> = new EventEmitter<
    Array<object>
  >();
  data1: bustrip[];
  trip: trip = {
    source: null,
    dest: null,
    dateA: null,
    dateB: null,
  };
  
  constructor(private databus: DataService) {}
  ngOnInit(): void {}

  /* inputtrip() {
    this.databus.bustripfilter = this.databus.bustrip2.filter(
      (item) => item.source == this.trip.source && item.dest == this.trip.dest
    );
  }        */
   
  createBusTrip(): void {
    this.trip.dateA = new Date(this.trip.dateA);
    this.trip.dateB = new Date(this.trip.dateB);
    this.databus.bustripfilter = this.databus.bustrip2.filter(
      (item) =>item.source == this.trip.source && item.dest == this.trip.dest && item.date > this.trip.dateA && item.date < this.trip.dateB
    );
   this.pushArrTrip.emit(this.data1);
   
  }
  }

// import { from } from 'rxjs'; // חיליק למה הוספת את זה?
