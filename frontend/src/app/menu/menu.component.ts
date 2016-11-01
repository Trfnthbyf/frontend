import {OnInit} from '@angular/core';
import { Component } from '@angular/core';

import { AuthenticationService } from '../services/authentication.service';
import { User } from '../user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
public user: User;
  constructor(private authenticationService: AuthenticationService) { }

  onClick() {
   this.authenticationService.logout();
   
  }
ngOnInit() {
  console.log(this.user);
}
}
