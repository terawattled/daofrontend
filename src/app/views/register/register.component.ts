import {Component} from '@angular/core';
import {ApiService} from '../../api.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
  registerUserData = {};

  constructor(private _auth: ApiService, private _router: Router, private _toastr: ToastrService) {
  }

  registerUser() {
    this._auth.registerUser(this.registerUserData)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this._router.navigate(['/dashboard']);
          this._toastr.success(res.email, 'Toastr fun!');
        },
        err => console.log(err)
      );
  }
}
