import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './_auth/auth.guard';

const routes: Routes = [
    {path:"home",component:HomeComponent},
    {path:"admin",component:AdminComponent,canActivate:[AuthGuard],data:{roles:['Admin']}},
    {path:"user",component:UserComponent,canActivate:[AuthGuard],data:{roles:['User']}},
    {path:"login",component:LoginComponent},
    {path:"register",component:RegisterComponent},
    {path:"forgot-password",component:ForgotPasswordComponent},
    {path:"forbidden",component:ForbiddenComponent},
    {path:"**",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
