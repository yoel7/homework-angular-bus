import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitApiService {

  constructor(public htttpp:HttpClient) { }
}
