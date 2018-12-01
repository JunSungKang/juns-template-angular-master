import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'juns-formbox',
  templateUrl: './formbox.component.html',
  styleUrls: ['./formbox.component.css']
})
export class FormboxComponent implements OnInit {

  constructor() { }
  @Input("title") title;
  @Input("contents") contents;

  ngOnInit() {

  }

}
