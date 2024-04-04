import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private appService: AppService
    ){

  }
  title = 'frontend';
  location: string = '';
  apiResponse :any
  finalres:any
  submitLocation(){
    console.log('Location submitted:', this.location);
    // You can perform further actions here, such as sending the location data to a service
    // For demonstration purposes, let's display an alert
    alert('Location submitted: ' + this.location);

   
      console.log('Location submitted:', this.location);
      
        var params = {
            "name": "Pranjal Abrol",
            "location": this.location,
            "budget": "200",
            "days": "1"
        }
 // const res = this.appService.getApiData(params)
  this.appService.getApiData(params).subscribe(response => {
    this.apiResponse = response
    this.finalres =this.apiResponse.finalres
    for (const iterator of this.finalres) {
      console.log("🚀 ~ AppComponent ~ this.appService.getApiData ~ iterator:", iterator.content)
      
    }
    console.log('Response from server:', response);
    // Handle response from server here
  }, error => {
    console.error('Error sending data to server:', error);
    // Handle error here
  });
      // Make HTTP request to backend API
      // this.http.get<any>('http://localhost:3000/openApires', {
      //   params: { location: this.location } // Pass location as a query parameter
      // }).subscribe(response => {
      //   console.log('API response:', response);
      //   // Handle the API response here
      // }, error => {
      //   console.error('API error:', error);
      //   // Handle errors here
      // });
    }
  
}
