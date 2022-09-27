import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';
  
  constructor(private http:HttpClient){}

  url='http://localhost:5000/train';

  dates=this.http.get(this.url).subscribe((resp:any)=>{
    let resp_dates=JSON.parse(resp.dates)
    let resp_actual=JSON.parse(resp.actual_sales)
    let resp_predicted=JSON.parse(resp.predicted_sales)
    console.log(resp_dates[0],resp_actual[0],resp_predicted[0])
  })
}
