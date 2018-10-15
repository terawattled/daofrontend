import {Component} from '@angular/core';
import {EthereumService} from '../../../ethereum.service';
import {Transactions} from '../../../shared/sdk/models';
import {TransactionsApi} from '../../../shared/sdk/services/custom';
import {LoopBackConfig} from '../../../shared/sdk';
import {environment} from '../../../../environments/environment';

@Component({
  templateUrl: 'submit-proposal.component.html'
})
export class SubmitProposalComponent {

  private transaction: Transactions = new Transactions();

  constructor(private ethereumService: EthereumService, private transactionsApi: TransactionsApi) {
    if (environment.production) {
      LoopBackConfig.setBaseURL('http://terawattdao.xyz:3000');
    } else {
      LoopBackConfig.setBaseURL('http://localhost:3000');
    }
    LoopBackConfig.setApiVersion('api');
  }

  newProposal = {
    beneficiary_address: '',
    wei_amount: null,
    job_description: ''
  };


  submitProposal() {
    this.ethereumService.newProposal(
      this.newProposal.beneficiary_address,
      this.newProposal.wei_amount,
      this.newProposal.job_description).subscribe(res => {
      this.transactionsApi.create(res).subscribe((transaction: Transactions) => {
        console.log(transaction);
      });
    });
  }
}
