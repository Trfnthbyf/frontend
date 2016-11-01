import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from "@angular/forms";

import { AuthenticationService } from '../../services/authentication.service';
import { Subscription } from 'rxjs/Rx';
import { User } from '../../interface/user.interface';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
  myForm: FormGroup;
  user: User = new User();
  error = false;
  id: string;
  private subscription: Subscription;
  email: AbstractControl;
  username: AbstractControl;
  password: AbstractControl;
  confirmPassword: AbstractControl;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private authenticationService: AuthenticationService
    ) {
      this.subscription = this.activatedRoute.queryParams.subscribe((params) => {
        this.id = params['ID'];
        this.checkEmail(this.id);
      });
    }

  ngOnInit(): any {
        this.myForm = this.fb.group({
            email: [{value: this.user.email}, [Validators.required]],
            username: ['',[ Validators.required ]],
            password: ['', [ Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', [
              Validators.required, Validators.minLength(6)], this.isEqualPassword.bind(this)
            ]
          });
          this.email = this.myForm.controls['email'];
          this.username = this.myForm.controls['username'];
          this.password = this.myForm.controls['password'];
          this.confirmPassword = this.myForm.controls['confirmPassword'];
  }

  isEqualPassword(control: FormControl): {[s: string]: boolean} {
    if (!this.myForm) {
      return {passwordsNotMatch: true};

    }
    if (control.value !== this.myForm.controls['password'].value) {
      return {passwordsNotMatch: true};
    }
  }

  onSubmit(value:string, id):void {
    this.authenticationService.sendUserForm(value, this.id)
      .subscribe((response) => {
        if (response === true) {
          this.router.navigate(['dashboard']);
        } else {
          this.router.navigate(['signin']);
        }
      })
  }
  checkEmail(id) {
    this.authenticationService.checkEmail(id)
      .subscribe((email) => {
        
        if (email) {
          this.user.email = email;
          this.myForm.patchValue({email: this.user.email});

        } else {
          console.log('error');
        }
      })
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
