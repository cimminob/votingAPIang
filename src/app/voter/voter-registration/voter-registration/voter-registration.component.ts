import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-voter-registration',
  templateUrl: './voter-registration.component.html',
  styleUrls: ['./voter-registration.component.scss']
})

  export class VoterRegistrationComponent implements OnInit {
    voterForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      password: new FormControl('')
    });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.voterForm.value);
  }

  constructor() { }

  ngOnInit(): void {
  }
}

