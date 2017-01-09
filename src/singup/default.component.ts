import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'default',
  templateUrl: '/templates/login.html',
  providers: [LoginService, UserService]
})

export class DefaultComponent {
    client: any = {};
    errorLoginIn: Boolean = false;

    constructor(private loginService: LoginService, public router: Router, private userService: UserService) {
      loginService.isAuth().subscribe((user) => {
           if (user) {
               this.userService.setUser(user);
               this.router.navigate(['m']);
           } 
        });
    }

     loginAction() {
        this.errorLoginIn = false;
        this.loginService.login(this.client).subscribe((user) => {
           if (user) {
               this.userService.setUser(user);
               this.router.navigate(['m']);
           } else {
               this.errorLoginIn = true;
           }
        });
    }
} 