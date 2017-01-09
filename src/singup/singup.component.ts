import { Component }    from '@angular/core';
import { Router }       from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'signup',
  templateUrl: '/templates/singup.html',
  providers: [LoginService]
})

export class SingupComponent {
    client: any = {};
    errorInLogin: Boolean = false;

    constructor(private loginService: LoginService,private router: Router) {
    }


    createNewUser() {
        this.errorInLogin = false;
        this.loginService.signup(this.client).subscribe((success) => {
           if (success) {
               this.router.navigate(['/']);
           } else {
               this.errorInLogin = true;
           }
        });
    }
} 