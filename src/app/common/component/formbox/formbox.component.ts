import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'juns-formbox',
  templateUrl: './formbox.component.html',
  styleUrls: ['./formbox.component.css']
})
export class FormboxComponent implements OnInit {

  constructor() { }
  @Input("title") title;
  @Input("subtitle") subtitle;
  @Input("contents") contents;

  ngOnInit() {
    if(!this.title){ this.title = ""; }
    if(!this.subtitle){ this.subtitle = ""; }
    if(!this.contents){ this.contents = ""; }
  }

}
