import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home/admin-home.component';
import { VoterHomeComponent } from './voter/voter-home/voter-home/voter-home.component';
import { CandidateHomeComponent } from './candidate/candidate-home/candidate-home/candidate-home.component';
import { WelcomeComponent } from './welcome/welcome/welcome.component';
import { LoginComponent } from './login/login/login.component';
import { LogoutComponent } from './logout/logout/logout.component';
import { ResultsComponent } from './results/results/results.component';
import { VoterRegistrationComponent } from './voter/voter-registration/voter-registration/voter-registration.component';
import { VoterVoteComponent } from './voter/voter-vote/voter-vote/voter-vote.component';
import { CandidateRegistrationComponent } from './candidate/candidate-registration/candidate-registration/candidate-registration.component';
import { CreateElectionComponent } from './admin/create-election/create-election/create-election.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminHomeComponent,
    VoterHomeComponent,
    CandidateHomeComponent,
    WelcomeComponent,
    LoginComponent,
    LogoutComponent,
    ResultsComponent,
    VoterRegistrationComponent,
    VoterVoteComponent,
    CandidateRegistrationComponent,
    CreateElectionComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
