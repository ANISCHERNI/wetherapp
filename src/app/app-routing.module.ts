import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddSkillsComponent } from './add-skills/add-skills.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { AllSkillsComponent } from './all-skills/all-skills.component';

const routes: Routes = [
  {path: '', redirectTo: 'home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path: 'skills', component:AddSkillsComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'MySkills', component:MySkillsComponent},
  {path: 'AllSkills', component:AllSkillsComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
