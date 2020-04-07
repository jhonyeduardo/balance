import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'js-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm;

  constructor(private form: FormBuilder) {
    this.loginForm = this.form.group({
      username: '',
      password: '',
    });
  }

  ngOnInit() {}
}
