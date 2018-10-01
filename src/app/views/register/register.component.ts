import {Component} from '@angular/core';
import {ApiService} from '../../api.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {Users} from '../../shared/sdk/models';
import {LoopBackConfig, UsersApi} from '../../shared/sdk';
import {environment} from '../../../environments/environment';

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

  constructor(private _auth: ApiService, private _router: Router, private _toastr: ToastrService, private usersApi: UsersApi) {
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
      console.log(user);
      // localStorage.setItem('token', user.);
      this._router.navigate(['/dashboard']);
      this._toastr.success(user.email, 'Toastr fun!');
    });
  }

  // registerUser() {
  //   this._auth.registerUser(this.registerUserData)
  //     .subscribe(
  //       res => {
  //         console.log(res);
  //         localStorage.setItem('token', res.token);
  //         this._router.navigate(['/dashboard']);
  //         this._toastr.success(res.email, 'Toastr fun!');
  //       },
  //       err => console.log(err)
  //     );
  // }
}
