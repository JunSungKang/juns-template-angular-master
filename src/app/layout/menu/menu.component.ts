import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'juns-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private http: HttpClient) { }
  menu = undefined;

  ngOnInit() {
    this.http.get("assets/json/menu.json").subscribe(
      (data) => {
        this.menu = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
