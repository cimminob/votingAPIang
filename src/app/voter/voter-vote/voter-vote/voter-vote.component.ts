import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voter-vote',
  templateUrl: './voter-vote.component.html',
  styleUrls: ['./voter-vote.component.scss']
})
export class VoterVoteComponent implements OnInit {

  electionType: 'electionType';
  electionDate: 'electionDate';
  electionCandidates: 'election Candidates';
  
  constructor() { }

  ngOnInit(): void {
  }

}
