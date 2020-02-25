import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin/admin-home/admin-home/admin-home.component';
import { CreateElectionComponent } from './admin/create-election/create-election/create-election.component';
import { CandidateHomeComponent } from './candidate/candidate-home/candidate-home/candidate-home.component';
import { CandidateRegistrationComponent } from './candidate/candidate-registration/candidate-registration/candidate-registration.component';
import { VoterRegistrationComponent } from './voter/voter-registration/voter-registration/voter-registration.component';
import { LoginComponent } from './login/login/login.component';
import { LogoutComponent } from './logout/logout/logout.component';
import { ResultsComponent } from './results/results/results.component';
import { WelcomeComponent } from './welcome/welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path: 'admin/home', component: AdminHomeComponent },
  {path: 'admin/create_election', component: CreateElectionComponent},
  {path: 'candidate/register', component: CandidateRegistrationComponent},
  {path: 'voter/register', component: VoterRegistrationComponent},
  {path: 'voter/vote'},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'results', component: ResultsComponent},
  {path: 'welcome', component: WelcomeComponent},
  { path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
