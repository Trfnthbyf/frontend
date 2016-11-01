import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from '../../user';
import { AuthenticationService } from '../../services/authentication.service';
import { Subscription } from 'rxjs/Rx';


@Component({
  selector: 'app-signup',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user: User = new User();
  error = '';
  active = true;
  //id = window.location.search.substr(4);
  id: string;
  private subscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) {
  }

  sendUserForm() {
    this.authenticationService.sendUserForm(this.user.email, this.user.password, this.user.userName, this.user.company, this.id)
      .subscribe((response) => {
        if (response === true) {
          this.router.navigate(['project']);
        } else {
          this.router.navigate(['registration']);
        }
      })

  }

  ngOnInit() {
    this.subscription = this.activatedRoute.queryParams.subscribe((params) => {
      this.id = params['ID'];
      this.checkEmail(this.id);
      console.log(this.id);
    });

  }

  checkEmail(id) {
    this.authenticationService.checkEmail(id)
      .subscribe((email) => {
        if (email) {
          this.user.email = email;

        } else {
          console.log('error');
        }
      })
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
