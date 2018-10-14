import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {fromPromise} from 'rxjs/internal-compatibility';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';


declare var require;
const api = require('etherscan-api').init(environment.ETHERSCAN_API_TOKEN, 'rinkeby', '3000');

@Injectable({
  providedIn: 'root'
})
export class EtherscanService {

  public getAccountBalance(): Observable<string[]> {
    return fromPromise(api.account.balance('0x2ef01b493d2e9736ad94de246e3d3c9c8790db1c'));
  }

}
