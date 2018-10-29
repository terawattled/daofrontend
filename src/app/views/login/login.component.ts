import {Component, Inject, InjectionToken, OnInit} from '@angular/core';
import {ApiService} from '../../api.service';
import {Router} from '@angular/router';
import {AccessToken, Users} from '../../shared/sdk/models';
import {UsersApi} from '../../shared/sdk/services/custom';
import {LoopBackConfig} from '../../shared/sdk';
import {EthereumService} from '../../ethereum.service';
import {environment} from '../../../environments/environment';
import {EtherscanService} from '../../etherscan.service';
import {ToasterService} from '../../toaster.service';

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
    private usersApi: UsersApi,
    private ethereumService: EthereumService,
    private etherscanService: EtherscanService,
    private toastr: ToasterService
  ) {
    if (environment.production) {
      LoopBackConfig.setBaseURL('http://terawattdao.xyz:3000');
    } else {
      LoopBackConfig.setBaseURL('http://localhost:3000');
    }
    LoopBackConfig.setApiVersion('api');

  }

  ngOnInit(): void {
    // this.ethereumService.getAccounts().subscribe(res => {
    //   console.log(res);
    // });
    // this.etherscanService.getAccountBalance().subscribe(res => {
    //   console.log(res);
    // });
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

  // Built-in LoopBack Authentication and Typings like Account and TokenInterface
  signin(): void {
    this.usersApi.login(this.loginUserData).subscribe((token: AccessToken) => {
        localStorage.setItem('token', token.id);
        this._router.navigate(['dashboard']);
        this.toastr.success('Login Successful', 'You have logged in successfully');
      }, err => {
        console.log(err);
        this.toastr.error(err.message, err.name);
      }
    );
  }


}
