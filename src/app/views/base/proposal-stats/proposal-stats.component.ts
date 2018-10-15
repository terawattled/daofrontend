import {Component} from '@angular/core';
import {EthereumService} from '../../../ethereum.service';

@Component({
  templateUrl: 'proposal-stats.component.html',
})
export class ProposalStatsComponent {
 public  heroes = {
    amount: 0,
    description: '',
    executed: false,
    minExecutedDate: '',
    numberOfVotes: 0,
    proposalHash: '',
    proposalPassed: false,
    recipient: ''
  };

  constructor(private ethereumService: EthereumService) {
    this.ethereumService.getProposals(1).subscribe(res => {
      // @ts-ignore
      this.heroes.amount = res.amount;
      // @ts-ignore
      this.heroes.description = res.description;
      // @ts-ignore
      this.heroes.executed = res.executed;
      // @ts-ignore
      this.heroes.minExecutedDate = res.minExecutedDate;
      // @ts-ignore
      this.heroes.numberOfVotes = res.numberOfVotes;
      // @ts-ignore
      this.heroes.proposalHash = res.proposalHash;
      // @ts-ignore
      this.heroes.proposalPassed = res.proposalPassed;
      // @ts-ignore
      this.heroes.recipient = res.recipient;

      console.log(res);
    });
  }

}
