import {Inject, Injectable, OnInit} from '@angular/core';
import {WEB3} from './web3.token';
import {Observable} from 'rxjs';
import {fromPromise} from 'rxjs/internal-compatibility';
import Web3 from 'web3';
import * as bytes from 'bytes';

declare let require: any;
const tokenAbi = require('./abi.json');

@Injectable({
  providedIn: 'root'
})
export class EthereumService implements OnInit {


  private readonly _tokenContract: any;
  private _tokenContractAddress = '0xbcE84C0f1b780D2a632E833dAf760b597F7767fc';
  private mainAccount;


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
          break;

        case 42:
          console.log('This is the Kovan test network.');
          break;
        default:
          console.log('This is an unknown network.');
      }
    });
    console.log('Main Account is ' + this.mainAccount);
  }

  ngOnInit(): void {
    this.mainAccount = this.web3.eth.accounts[0];

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

  public getProposals(proposalNumber: number): Observable<number> {
    return fromPromise(this._tokenContract.methods.proposals(proposalNumber).call({
      from: this.mainAccount,
    }));
  }

  public getMinimumQuorum(): Observable<number> {
    return fromPromise(this._tokenContract.methods.minimumQuorum().call({
      from: this.mainAccount,
    }));
  }

  public getSharesTokenAddress(): Observable<number> {
    return fromPromise(this._tokenContract.methods.sharesTokenAddress().call({
      from: this.mainAccount,
    }));
  }

  public getNumProposals(): Observable<number> {
    return fromPromise(this._tokenContract.methods.numProposals().call({
      from: this.mainAccount,
    }));
  }

  public getCheckProposalCode(proposalNumber: number, beneficiary: string, weiAmount: number, transactionBytecode: string):
    Observable<number> {
    return fromPromise(this._tokenContract.methods.checkProposalCode(proposalNumber, beneficiary, weiAmount, transactionBytecode).call({
      from: this.mainAccount,
    }));
  }

  public executeProposal(proposalNumber: string, transactionBytecode: string): Observable<any> {
    return fromPromise(this._tokenContract.methods.executeProposal(proposalNumber, transactionBytecode).send({
      from: this.mainAccount
    }));
  }


  public submitVote(proposalNumber: string, submitProposal: string): Observable<any> {
    return fromPromise(this._tokenContract.methods.vote(proposalNumber, true).send({
      from: this.mainAccount
    }));
  }

  public newProposal(beneficiary: string, weiAmount: number, jobDescription: string): Observable<any> {
    const transactionByte = this.web3.utils.hexToBytes('0xb1050da5');
    return fromPromise(this._tokenContract.methods.newProposal(beneficiary, weiAmount, jobDescription, transactionByte).send({
      from: this.mainAccount
    }));
  }

  public newProposalInEther(beneficiary: string, etherAmount: number, jobDescription: string):
    Observable<any> {
    const transactionByte = this.web3.utils.hexToBytes('0xb9f256cd');
    return fromPromise(this._tokenContract.methods.newProposalInEther(beneficiary, etherAmount, jobDescription, transactionByte).send({
      from: this.mainAccount
    }));
  }

  public receiveApproval(from: string, value: number, token: string): Observable<any> {

    return fromPromise(this._tokenContract.methods.receiveApproval(from, value, token, 0xb1050da5).send({
      from: this.mainAccount
    }));
  }

  public transferOwnership(newOwner: string): Observable<any> {

    return fromPromise(this._tokenContract.methods.transferOwnership(newOwner).send({
      from: this.mainAccount
    }));
  }


}
