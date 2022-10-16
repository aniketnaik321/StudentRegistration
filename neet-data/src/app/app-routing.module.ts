import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NeetStatusComponent } from './neet-status/neet-status.component';
import { PossibilitiesComponent } from './possibilities/possibilities.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { RegistrationComponent } from './registration/registration.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  { path: 'neetdata/possibilities', component: PossibilitiesComponent },
  { path: 'neetdata/status', component: NeetStatusComponent},
  { path: 'neetdata/preferences', component: PreferencesComponent},
  { path: 'neetdata/login', component: LoginComponent},
  { path: 'neetdata/home', component: HomeComponent},
  { path: 'neetdata/registration', component: RegistrationComponent},
  { path: '**', component: LoginComponent},
  { path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
