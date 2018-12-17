import { Component, OnInit } from '@angular/core';

import { HttpService } from '../common/service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [HttpService]
})
export class DashboardComponent implements OnInit {

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.setParam({
      "name": "jskang",
      "age": 27
    });
    this.http.Get("http://api.plos.org/search?q=title:DNA",
    (data) => {
      console.log(data);
    },
    (err) => {
      console.log(err);
    });
  }

}
