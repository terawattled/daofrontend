import {Inject, Injectable} from '@angular/core';
import {WEB3} from './web3.token';
import {Observable} from 'rxjs';
import {fromPromise} from 'rxjs/internal-compatibility';
import Web3 from 'web3';

declare let require: any;
const tokenAbi = require('./abi.json');

@Injectable({
  providedIn: 'root'
})
export class EthereumService {


  private readonly _tokenContract: any;
  private _tokenContractAddress = '0xbcE84C0f1b780D2a632E833dAf760b597F7767fc';
  private mainAccount = this.web3.eth.accounts[0];


  constructor(@Inject(WEB3) private web3: Web3) {
    this._tokenContract = new this.web3.eth.Contract(tokenAbi, this._tokenContractAddress, {
      from: '0x2Ef01B493d2E9736Ad94dE246e3D3c9C8790dB1c',
      gas: 300000
    });

    web3.eth.net.getId().then(netId => {
      switch (netId) {
        case 1:
          console.log('This is mainnet');
          break;
        case 2:
          console.log('This is the deprecated Morden test network.');
          break;
        case 3:
          console.log('This is the ropsten test network.');
          break;
        case 4:
          console.log('This is the Rinkeby test network.');
          break

        case 42:
          console.log('This is the Kovan test network.');
          break;
        default:
          console.log('This is an unknown network.');
      }
    });
    console.log('Main Account is ' + this.mainAccount);
  }

  /** Return the list of accounts available */
  public getAccounts(): Observable<string[]> {
    return fromPromise(this.web3.eth.getAccounts());
  }


  public getContract(): Observable<string[]> {
    return fromPromise(this._tokenContract);
  }

  public debatingPeriodInMinutes(): Observable<number> {
    return fromPromise(this._tokenContract.methods.debatingPeriodInMinutes().call({
      from: this.mainAccount,
    }));
  }

  public submitVote(proposalNumber: string, submitProposal: string): Observable<any> {
    return fromPromise(this._tokenContract.methods.vote(proposalNumber, true).send({
      from: this.mainAccount
    }));
  }

  public newProposal(beneficiary: string, weiAmount: number, jobDescription: string): Observable<any> {

    return fromPromise(this._tokenContract.methods.newProposal(beneficiary, weiAmount, jobDescription, 0xb1050da5).send({
      from: this.mainAccount
    }));
  }


}
