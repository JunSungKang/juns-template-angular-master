import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogger',
  templateUrl: './blogger.component.html',
  styleUrls: ['./blogger.component.css']
})
export class BloggerComponent implements OnInit {

  constructor() { }
  title1 = "SAMPLE BOX1";
  contents1 = "sample box contents";

  title2 = "SAMPLE BOX2";
  contents2 = `
    <table class='col-12'>
      <tr>
        <td><input class='col-12' type='text' placeholder='User ID'/></td>
      </tr>
      <tr>
        <td><input class='col-12' type='password' placeholder='Password'/></td>
      </tr>
    </table>
  `;

  ngOnInit() {
  }

}
