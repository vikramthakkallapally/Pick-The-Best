import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private UserService:UserService,
    private userAuthService:UserAuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  login(loginForm:NgForm){
    this.UserService.login(loginForm.value).subscribe(
      (response:any) => {
        this.userAuthService.setToken(response.jwtToken)
        this.userAuthService.setRoles(response.user.roles)

        const role = response.user.roles[0].roleName

        if(role === 'Admin'){
          this.router.navigate(['/admin'])
        }else if(role === 'User'){
          this.router.navigate(['/user'])
        }

      },
      (error) =>{
        console.log(error)
      }
    )
  }

}
