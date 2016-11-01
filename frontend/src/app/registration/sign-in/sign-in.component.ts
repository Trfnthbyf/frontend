import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../../services/user.service';
import { User } from '../../user';
import { AuthenticationService } from '../../services/authentication.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  model: any = {};
  active: boolean = true;
  message = '';
  id: string;

  constructor(
    private userService: UserService,
    private router: Router,
    private authenticationService: AuthenticationService) {
  }

  sendEmail(form: NgForm) {
    //this.activatedRoute.queryParams.subscribe((params) => this.id = params['ID']);
console.log(form);
    let url = window.location.href + '/confirm';
    console.log(this.id);
    this.authenticationService.sendEmail(this.model.email, url).subscribe((result) => { 
        this.message = result;
    });

    this.model.email = '';
    this.active = false;
  }


  ngOnInit() {
    
  }

}
