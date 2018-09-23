import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = environment.API_URL;

  constructor(private http: HttpClient, private _router: Router) {
  }

  registerUser(user) {
    return this.http.post<any>(this.url + '/Users', user);
  }

  loginUser(user) {
    return this.http.post<any>(this.url + '/Users/login', user);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }


}
