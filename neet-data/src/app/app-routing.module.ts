import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PossibilitiesComponent } from './possibilities/possibilities.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { RegistrationComponent } from './registration/registration.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  { path: 'neetdata/possibilities', component: PossibilitiesComponent },
  { path: 'neetdata/status', component: StatusComponent},
  { path: 'neetdata/preferences', component: PreferencesComponent},
  { path: 'neetdata/Login', component: LoginComponent},
  { path: 'neetdata/Registration', component: RegistrationComponent},
  { path: '**', component: LoginComponent},
  { path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
