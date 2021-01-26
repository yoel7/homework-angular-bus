import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Url } from 'url';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitApiService {
  url: string = 'http://api.github.com/users/'
  constructor(public http: HttpClient) { }
  getU(users: string): Observable<any> {
    return this.http.get(`${this.url}${users}`)
  }
}
