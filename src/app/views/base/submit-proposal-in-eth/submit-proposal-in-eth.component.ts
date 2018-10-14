import {Component, OnInit} from '@angular/core';
import {EthereumService} from '../../../ethereum.service';
import { saveAs } from 'file-saver';


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


  constructor(private ethereumService: EthereumService) {
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
    });
  }
}
