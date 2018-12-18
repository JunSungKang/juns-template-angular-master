import { Component, OnInit } from '@angular/core';

import { HttpService } from '../common/service';
import { DateService } from '../common/service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [HttpService]
})
export class DashboardComponent implements OnInit {

  constructor(private http: HttpService, private date: DateService) { }

  ngOnInit() {
    console.log(this.date.DateWeeksRange(new Date("2018/01/01")));
  }

}
