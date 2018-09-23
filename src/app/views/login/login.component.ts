import {Component} from '@angular/core';
import {ApiService} from '../../api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  loginUserData = {};

  constructor(private _auth: ApiService, private _router: Router) {
  }

  loginUser() {
    this._auth.loginUser(this.loginUserData)
      .subscribe(
        res => {
          localStorage.setItem('token', res.id);
          this._router.navigate(['dashboard']);
        },
        err => console.log(err)
      );
  }

}
