import {Injectable} from '@angular/core';
import * as Web3 from 'web3';
import * as TruffleContract from 'truffle-contract';

declare let require: any;
declare let window: any;

let tokenAbi = require('./tokenContract.json');

@Injectable({
  providedIn: 'root'
})
export class EthcontractService {
  private web3Provider: null;
  private contracts: {};
  private _account: string = null;
  private _web3: any;

  private _tokenContract: any;
  private _tokenContractAddress = '0xbcE84C0f1b780D2a632E833dAf760b597F7767fc';

  constructor() {
    if (typeof window.web3 !== 'undefined') {
      // Use Mist/MetaMask's provider
      this._web3 = new Web3(window.web3.givenProvider);

      console.log(window.web3)
      if (this._web3.version.network !== '4') {
        alert('Please connect to the Rinkeby network');
      }
    } else {
      console.warn(
        'Please use a dapp browser like mist or MetaMask plugin for chrome'
      );
    }
    this._tokenContract = this._web3.eth.contract(tokenAbi).at(this._tokenContractAddress);
  }

   async getAccount(): Promise<string> {
    if (this._account == null) {
      this._account = await new Promise((resolve, reject) => {
        this._web3.eth.getAccounts((err, accs) => {
          if (err != null) {
            alert('There was an error fetching your accounts.');
            return;
          }

          if (accs.length === 0) {
            alert(
              'Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.'
            );
            return;
          }
          resolve(accs[0]);
        });
      }) as string;

      this._web3.eth.defaultAccount = this._account;
    }

    return Promise.resolve(this._account);
  }

}

