import { Component, Output, OnInit } from '@angular/core';
import { from } from 'rxjs';   // חיליק למה הוספת את זה?
import { DataService} from '../app/Services/data.service'
import { bustrip } from './models/bustrip.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data1:bustrip[];
  // title = 'homework-angular-bus-ticket';
   name = "aaa";
  constructor(private databus:DataService){}
  ngOnInit(): void {
    this.data1=this.databus.bustrip1;
    this.data1[0].price='000'
  }
}

