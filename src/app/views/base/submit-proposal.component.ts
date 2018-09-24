import {Component} from '@angular/core';
import {EthereumService} from '../../ethereum.service';

@Component({
  templateUrl: 'submit-proposal.component.html'
})
export class SubmitProposalComponent {

  newProposal = {
    beneficiary_address: '',
    wei_amount: 0,
    job_description: '',
    transaction_bytecode: ''
  };

  constructor(private ethereumService: EthereumService) {
  }


  submitProposal() {
    this.ethereumService.newProposal(
      this.newProposal.beneficiary_address,
      this.newProposal.wei_amount,
      this.newProposal.job_description).subscribe(res => {
        console.log(res);
    });
  }
}
