import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-election',
  templateUrl: './create-election.component.html',
  styleUrls: ['./create-election.component.scss']
})
export class CreateElectionComponent implements OnInit {
  createElectionForm = new FormGroup({
    date: new FormControl(''),
    type: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl('')
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.createElectionForm.value);
  }

  constructor() { }
  ngOnInit(): void {
  }
}
