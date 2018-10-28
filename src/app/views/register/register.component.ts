import {Component} from '@angular/core';
import {ApiService} from '../../api.service';
import {Router} from '@angular/router';
import {Users} from '../../shared/sdk/models';
import {LoopBackConfig, UsersApi} from '../../shared/sdk';
import {environment} from '../../../environments/environment';
import {ToasterService} from '../../toaster.service';

declare var require;
const jwt = require('jsonwebtoken');

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
  registerUserData = {
    email: '',
    password: '',
    username: '',
    address: ''
  };

  constructor(private _auth: ApiService,
              private _router: Router,
              private _toastr: ToasterService,
              private usersApi: UsersApi,
              private toasterService: ToasterService) {
    if (environment.production) {
      LoopBackConfig.setBaseURL('http://terawattdao.xyz:3000');
    } else {
      LoopBackConfig.setBaseURL('http://localhost:3000');
    }
    LoopBackConfig.setApiVersion('api');
  }

  // Start making API calls right away
  signup(): void {
    this.usersApi.create(this.registerUserData).subscribe((user: Users) => {
      this.usersApi.verify(user.id).subscribe(res => {
        console.log(res);
      });
      // console.log(user);
      // localStorage.setItem('token', user.);
      this._router.navigate(['/login']);
      this.toasterService.success(user.email, 'You have Successfully been registered. Please confirm your email address');
    }, err => {
      this.toasterService.error(err.message, err.code);

    });
  }


}
