import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoterVoteComponent } from './voter-vote.component';

describe('VoterVoteComponent', () => {
  let component: VoterVoteComponent;
  let fixture: ComponentFixture<VoterVoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoterVoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoterVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
