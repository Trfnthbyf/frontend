import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
import { AuthenticationService } from '../../services/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    model: any = {};
    active = true;
    error = '';
 
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService) { }
 
    ngOnInit() {
        // reset login status
        //this.authenticationService.logout();
    }
 
    login() {        
        this.authenticationService.login(this.model.useremail, this.model.password)
            .subscribe(result => {
                if (result === true) {
                    // login successful
                    this.router.navigate(['project']);
                } else {
                    // login failed
                    this.error = 'Username or password is incorrect';
                    
                }
            });
    }
}
