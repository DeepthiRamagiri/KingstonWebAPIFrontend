import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
   value: any;
   value1: any;
   value2: any;

  values: any;
  constructor(private _httpService: HttpClient) {
      
   }

   calServiceOne(){
   
    return this._httpService.get<any>("http://localhost:55007/API/PrimeNumber?x=5&y=10").subscribe(response => {
      console.log(response)
      this.value = response;
     });


   }

   calServiceTwo(){
   
    return this._httpService.get<any>("http://localhost:55007/API/Fibonacchi?x=5&y=10").subscribe(response => {
      console.log(response)
      this.value1 = response;
     });


   }

   calServiceThree(){
   
    return this._httpService.get<any>("http://localhost:55007/API/RandonNumber?x=5&y=10").subscribe(response => {
      console.log(response)
      this.value2 = response;
     });


   }


}
