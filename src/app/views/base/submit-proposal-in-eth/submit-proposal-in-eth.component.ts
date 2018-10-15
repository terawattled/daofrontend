import {Component, OnInit} from '@angular/core';
import {EthereumService} from '../../../ethereum.service';
import { saveAs } from 'file-saver';
import {environment} from '../../../../environments/environment';
import {LoopBackConfig, Transactions, TransactionsApi} from '../../../shared/sdk';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-submit-proposal-in-eth',
  templateUrl: './submit-proposal-in-eth.component.html',
  styleUrls: ['./submit-proposal-in-eth.component.scss']
})
export class SubmitProposalInEthComponent implements OnInit {

  address;
  newProposalInEth = {
    beneficiary_address: '',
    ether_amount: null,
    job_description: ''
  };


  constructor(private ethereumService: EthereumService, private transactionsApi: TransactionsApi, private _toastr: ToastrService) {
    if (environment.production) {
      LoopBackConfig.setBaseURL('http://terawattdao.xyz:3000');
    } else {
      LoopBackConfig.setBaseURL('http://localhost:3000');
    }
    LoopBackConfig.setApiVersion('api');
  }

  ngOnInit() {
    this.address = this.ethereumService.getAccounts().subscribe(this.address);
  }

  submitProposalInEth() {
    this.ethereumService.newProposalInEther(
      this.newProposalInEth.beneficiary_address,
      this.newProposalInEth.ether_amount,
      this.newProposalInEth.job_description
    ).subscribe(res => {
      // const blob = new Blob([JSON.stringify(res)], {type : 'application/json'});
      // saveAs(blob, 'abc.json');
      this.transactionsApi.create(res).subscribe((transaction: Transactions) => {
        this._toastr.success(transaction.userId, 'Transaction complete');
      });
    });
  }
}
