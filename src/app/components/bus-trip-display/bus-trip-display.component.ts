import { Component, Input, OnInit } from '@angular/core';
import { bustrip } from 'src/app/models/bustrip.model';

@Component({
  selector: 'app-bus-trip-display',
  templateUrl: './bus-trip-display.component.html',
  styleUrls: ['./bus-trip-display.component.css']
})
export class BusTripDisplayComponent implements OnInit {
  @Input() trip:bustrip={};
  constructor() { }

  ngOnInit(): void {
  }

}
