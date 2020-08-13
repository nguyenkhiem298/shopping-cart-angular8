import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  person: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  login() {
    console.log(this.person);

  }

}
