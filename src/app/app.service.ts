import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  //location: string | number | boolean | readonly (string | number | boolean)[];

  constructor(private http: HttpClient) { }
  location: string = '';
  getApiData(params:any){
    //const res = this.post<any>('http://localhost:3000/openApires',params)
    return this.http.post<any>('http://localhost:3000/openApires', params);

      // //Make this.http Request to backend API
      // this.http.post<any>('http://localhost:3000/openApires', 
      // params// Pass location as a query parameter
      // ).subscribe(response => {
      //   console.log('API response:', response);
      //   return response
      //   // Handle the API response here
      // }, error => {
      //   console.error('API error:', error);
      //   // Handle errors here
      // });
  }
}
