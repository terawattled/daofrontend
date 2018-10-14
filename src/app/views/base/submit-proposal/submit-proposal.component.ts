import {Component} from '@angular/core';
import {EthereumService} from '../../../ethereum.service';

@Component({
  templateUrl: 'submit-proposal.component.html'
})
export class SubmitProposalComponent {

  constructor(private ethereumService: EthereumService) {
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
      console.log(res);
    });
  }
}
