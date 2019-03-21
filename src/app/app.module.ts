import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AddSkillsComponent } from './add-skills/add-skills.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { AllSkillsComponent } from './all-skills/all-skills.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddSkillsComponent,
    LoginComponent,
    RegisterComponent,
    MySkillsComponent,
    AllSkillsComponent
  ],
  imports: [
   
    AngularFireDatabaseModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,  AngularFireModule.initializeApp(environment.firebase),

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
