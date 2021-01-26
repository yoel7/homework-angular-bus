import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { DataService } from '../../Services/data.service';
import { bustrip } from '../../models/bustrip.model';
import { trip } from '../../models/trip.model';
import { GitApiService } from 'src/app/Services/git-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Output() pushArrTrip: EventEmitter<number> = new EventEmitter<number>();

  usergit: any;
  trip: trip = {
    source: 'א',
    dest: 'ב',
    dateA: new Date(2021, 0, 19),
    dateB: new Date(2021, 0, 21)
  };

  constructor(private databus: DataService, private htt: GitApiService) { }
  ngOnInit(): void { }
  createBusTrip(): void {
    // console.log(this.trip.dateA);
    this.trip.dateA = new Date(this.trip.dateA);
    this.trip.dateB = new Date(this.trip.dateB);
    this.databus.bustripfilter = this.databus.bustrip2.filter(
      (item) =>
        item.source == this.trip.source &&
        item.dest == this.trip.dest &&
        item.date > this.trip.dateA &&
        item.date < this.trip.dateB
    );
    this.pushArrTrip.emit(1);
    this.htt.getU('yoel7').subscribe((a: any) => {
      this.usergit = a;
    })
  }
}
