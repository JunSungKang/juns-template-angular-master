import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'juns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  id = undefined;
  password = undefined;
  
  ngOnInit() {
  }

  Register(){
    this.router.navigateByUrl("account/join");
  }

  onSubmit(login: NgForm){
    console.log(login.value);
    alert("로그인 기능 준비중입니다.");
  }

}
