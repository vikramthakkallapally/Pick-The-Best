import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  message='';

  constructor(
    private userService:UserService
  ) { }

  ngOnInit(): void {
    this.forAdmin()
  }

  forAdmin(){
      this.userService.forAdmin().subscribe(
        (response) =>{
          this.message=response
        },
        (error) => {
          this.message=error.message
        }
      )
  }

}
