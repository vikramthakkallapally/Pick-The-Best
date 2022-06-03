import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { UserAuthService } from '../services/user-auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private UserService:UserService,
    private userAuthService:UserAuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  register(registerForm:NgForm){
    this.UserService.register(registerForm.value).subscribe(
      (response:any) => {
          this.router.navigate(['/user'])
      },
      (error) =>{
        console.log(error)
      }
    )
  }
}
