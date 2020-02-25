import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})

export class LogoutComponent implements OnInit {
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log('user logged out');
  }

  constructor() {}

  ngOnInit(): void {
  }

}
