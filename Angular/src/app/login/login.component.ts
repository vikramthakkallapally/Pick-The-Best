import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    private router:Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  login(loginForm:NgForm){
    this.UserService.login(loginForm.value).subscribe(
      (response:any) => {
        this.userAuthService.setToken(response.jwtToken)
        this.userAuthService.setRoles(response.user.roles)

        const role = response.user.roles[0].roleName
        console.log(response,'Response')
        if(role === 'Admin'){
          this.router.navigate(['/admin'])
        }else if(role === 'User'){
          this.router.navigate(['/user'])
        }
        this.toastr.success("Logged In Succesfully", "");

      },
      (error) =>{
        if(error.status = 401){
          this.toastr.error("Invalid Credentials", "");
        }
        console.log(error)
      }
    )
  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

}
