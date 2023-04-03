import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyDataService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(
      'http://localhost:5000/api/restaurant/getRestaurants/0/10'
    );
  };
  
  getSingleData() {
    return this.http.get(
      'http://localhost:5000/api/tipologiche/getCuisinesList'
    );
  }

}
