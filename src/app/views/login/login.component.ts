import {Component, Inject, InjectionToken, OnInit} from '@angular/core';
import {ApiService} from '../../api.service';
import {Router} from '@angular/router';
import {AccessToken, Users} from '../../shared/sdk/models';
import {UsersApi} from '../../shared/sdk/services/custom';
import {LoopBackConfig} from '../../shared/sdk';
import {WEB3} from '../../web3.token';
import * as Web3 from 'web3';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})


export class LoginComponent implements OnInit {

  loginUserData = {
    email: '',
    password: ''
  };

  constructor(
              private _auth: ApiService,
              private _router: Router,
              private usersApi: UsersApi
  ) {
    LoopBackConfig.setBaseURL('http://localhost:3000');
    LoopBackConfig.setApiVersion('api');

  }

  ngOnInit(): void {
    // this.web3.eth.net.getId()
    //   .then(id => console.log(`You are connected on ${this.getNet(id)}`));
  }

  private getNet(id: number): string {
    const networks = {
      1: 'mainnet',
      3: 'ropsten',
      4: 'rinkeby',
      42: 'koven'
    };
    return networks[id];
  }

  // Start making API calls right away
  private signup(): void {
    this.usersApi.create(this.loginUserData).subscribe((user: Users) => this.signin());
  }

  // Built-in LoopBack Authentication and Typings like Account and TokenInterface
  signin(): void {
    this.usersApi.login(this.loginUserData).subscribe((token: AccessToken) => {
        localStorage.setItem('token', token.id);
        this._router.navigate(['dashboard']);


      }, err => console.log(err)
    );
  }


}
