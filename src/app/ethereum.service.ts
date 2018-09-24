import {Inject, Injectable} from '@angular/core';
import {WEB3} from './web3.token';
import {Observable} from 'rxjs';
import {fromPromise} from 'rxjs/internal-compatibility';
import Web3 from '../../../../../node_modules/web3';

declare let require: any;
const tokenAbi = require('./abi.json');

@Injectable({
  providedIn: 'root'
})
export class EthereumService {


  private readonly _tokenContract: any;
  private _tokenContractAddress = '0xbcE84C0f1b780D2a632E833dAf760b597F7767fc';
  account = '0x2Ef01B493d2E9736Ad94dE246e3D3c9C8790dB1c';

  constructor(@Inject(WEB3) private web3: Web3) {
    this._tokenContract = new this.web3.eth.Contract(tokenAbi, this._tokenContractAddress, {
      from: '0x2Ef01B493d2E9736Ad94dE246e3D3c9C8790dB1c',
      gas: 300000
    });
  }

  /** Return the list of accounts available */
  public getAccounts(): Observable<string[]> {
    return fromPromise(this.web3.eth.getAccounts());
  }


  public getContract(): Observable<string[]> {
    return fromPromise(this._tokenContract);
  }

  public  getUserBalance(): Observable<number> {
    return fromPromise(this._tokenContract.methods.debatingPeriodInMinutes().call({
      from: this.account,
    }));
  }


}
