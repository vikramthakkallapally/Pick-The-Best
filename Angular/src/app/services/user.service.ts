import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  PATH_OF_API = "http://localhost:9090"

  requestHeader = new HttpHeaders(
    {
      "NO-AUTH": "True"
    }
  )

  constructor(
    private httpClient: HttpClient,
    private userAuth: UserAuthService
  ) { }

  public login(loginData: NgForm) {

    return this.httpClient.post(this.PATH_OF_API + '/authenticate', loginData, { headers: this.requestHeader })

  }

  public register(userData: NgForm) {

    return this.httpClient.post(this.PATH_OF_API + '/user/registerNewUser', userData, { headers: this.requestHeader })

  }


  public forUser(){
    return this.httpClient.get(this.PATH_OF_API+'/forUser',
    {
      responseType:"text"
    });
  }

  public forAdmin(){
    return this.httpClient.get(this.PATH_OF_API+'/forAdmin',
    {
      responseType:"text"
    });
  }


  public roleMatch(allowedRoles: any): boolean {
    let isMatch = false
    const roles: any = this.userAuth.getRoles()

    if (roles != null && roles) {
      for (let i = 0; i < roles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (roles[i].roleName === allowedRoles[j]) {
            isMatch = true;
            return true;
          }
        }
      }
    }

    return isMatch;

  }

}
