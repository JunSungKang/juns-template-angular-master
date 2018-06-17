import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'juns-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {

  constructor(private router: Router) { }
  password = {first: undefined, two: undefined};
  bank = {type: undefined, account: undefined, name: undefined};
  id = undefined;
  first = undefined;
  two = undefined;
  phone = undefined;
  type = undefined;
  account = undefined;
  name = undefined;

  ngOnInit() {
    document.getElementById("pw-check").style.display = "none";
  }

  backpage(){
    this.router.navigateByUrl("account/login");
  }

  onSubmit(join: NgForm){
    console.log(join.value);
    alert("회원가입 기능 준비중입니다.");
  }

  PwChange(){
    if(this.password["first"] == this.password["two"]){
      document.getElementById("pw-check").style.display = "none";
    } else {
      document.getElementById("pw-check").style.display = "block";
    }
    console.log()
  }

}
