import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private userAuthService:UserAuthService,
    private router:Router,
    private userService:UserService
  ) { }

  ngOnInit(): void {
  }

  public isLoggedIn(){
    return this.userAuthService.isLoggedIn()
  }

  public logout(){
    this.userAuthService.clear()
    this.router.navigate(['/home'])
  }

  public adminUserMatch(){
    return this.userService.roleMatch(['Admin'])
  }

  public userUserMatch(){
    return this.userService.roleMatch(['User'])
  }

}
