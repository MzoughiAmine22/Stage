import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import { CartComponent } from './components/cart/cart.component';
import { ChangePassComponent } from './components/change-pass/change-pass.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ErrorComponent } from './components/error/error.component';
import { FormateurComponent } from './components/formateur/formateur.component';
import { FormationComponent } from './components/formation/formation.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { LoginuserComponent } from './components/loginuser/loginuser.component';
import { SignupuserComponent } from './components/signupuser/signupuser.component';
import { UserInterfaceComponent } from './components/user-interface/user-interface.component';
import { UserComponent } from './components/user/user.component';
import { RoleGuard } from './services/role.guard';
import { UserGuard } from './services/user.guard';

const routes: Routes = [
  {path:'adminLog',component:LoginAdminComponent},
  {path:'adminPasschange',component:ChangePassComponent},
  {path:'cart',component:CartComponent},
  {path:'admin',component:AdminComponent,canActivate:[RoleGuard],children:[
    {path:'dash',component:DashboardComponent},
    {path:'formlist',component:FormateurComponent},
    {path:'forms',component:FormationComponent},
  ]},
    {path:'landing',component:UserComponent},
    {path:'login',component:LoginuserComponent},
      {path:'signup',component:SignupuserComponent},
      {path:'ui',canActivate:[UserGuard],children:[
        {path:':id',component:UserInterfaceComponent}
      ]},
    {path:'about',component:AboutComponent},
  {path:'',redirectTo:'landing',pathMatch:'full'},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
