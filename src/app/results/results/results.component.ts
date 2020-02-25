import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  winner: 'winner';
  totalVotes: '7800';

  constructor() { }

  ngOnInit(): void {
  }

}
