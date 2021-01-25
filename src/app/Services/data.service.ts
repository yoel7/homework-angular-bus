import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { bustrip } from '../models/bustrip.model';
// import { bustrip } from '../models/bustrip.model';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}
  bustripfilter:bustrip[];
  bustrip2: bustrip[] = [
    {
      date: new Date(2021, 5, 6),
      operator: 'אגד',
      price: '50',
      source: 'ירושלים',
      dest: 'תל אביב',
      serialNumber:1
    },
    {
      date: new Date(2021, 6, 7, 9),
      operator: 'קווים',
      price: '1',
      source: 'ברכפלד',
      dest: 'ירושלים',
      serialNumber:2
    },
    {
      date: new Date(2021, 5, 8),
      operator: 'אגד',
      price: '50',
      source: 'ברכפלד',
      dest: 'חיפה',
      serialNumber:3
    },
    {
      date: new Date(2021, 5, 8),
      operator: 'אגד',
      price: '50',
      source: 'ברכפלד',
      dest: 'ירושלים',
      serialNumber:4
    },{
      date: new Date(2021,0,20,10,36),
      operator: 'קווים',
      price: '1',
      source: 'א',
      dest: 'ב',
      serialNumber:5
    },{
      date: new Date(2021,0,20),
      operator: 'קווים',
      price: '1',
      source: 'א',
      dest: 'ב',
      serialNumber:6
    },{
      date: new Date(2021,0,20),
      operator: 'קווים',
      price: '1',
      source: 'א',
      dest: 'ב',
      serialNumber:7
    },
  ];
}
