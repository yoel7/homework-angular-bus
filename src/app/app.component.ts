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
  constructor() {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
