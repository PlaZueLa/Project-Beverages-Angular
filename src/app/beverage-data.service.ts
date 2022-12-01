import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beverage } from './beverages-list/beverage';

const URL = 'https://6388be80d94a7e5040a5b4a2.mockapi.io/api/v1/beverages/beverages';

@Injectable({
  providedIn: 'root'
})
export class BeverageDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Beverage[]> {
  return this.http.get<Beverage[]>(URL);
  }

}
