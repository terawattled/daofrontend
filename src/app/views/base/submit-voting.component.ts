import {Component, SecurityContext} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {EthereumService} from '../../ethereum.service';


@Component({
  templateUrl: 'submit-voting.component.html'
})
export class SubmitVotingComponent {

  votingData = {
    proposalNumber: '',
    proposalSubmit: ''
  };

  constructor(private ethereumService: EthereumService) {

  }

  submitVote() {
    this.ethereumService.submitVote(this.votingData.proposalNumber, this.votingData.proposalSubmit)
      .subscribe(res => {
       // console.log(res);
      });
    // this.ethereumService.getAccounts().subscribe(res => {
    //   console.log(this.votingData);
    //   console.log(res);
    // });
    // this.ethereumService.debatingPeriodInMinutes().subscribe(res => {
    //   console.log(res);
    // });
  }
}
