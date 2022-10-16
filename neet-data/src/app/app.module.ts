import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { PossibilitiesComponent } from './possibilities/possibilities.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { StatusComponent } from './status/status.component';
import { WhatIfComponent } from './what-if/what-if.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { NeetStatusComponent } from './neet-status/neet-status.component';
import {TableModule} from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import {MenuModule} from 'primeng/menu';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    PossibilitiesComponent,
    PreferencesComponent,
    StatusComponent,
    WhatIfComponent,
    RegistrationComponent,
    HomeComponent,
    NeetStatusComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TableModule,
    HttpClientModule,
    MenuModule,
    ButtonModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
