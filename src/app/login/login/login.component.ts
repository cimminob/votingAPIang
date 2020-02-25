import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  LoginForm = new FormGroup({
    userId: new FormControl(''),
    password: new FormControl('')
  });

  constructor() { }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.LoginForm.value);
  }

  ngOnInit(): void {
  }

}
