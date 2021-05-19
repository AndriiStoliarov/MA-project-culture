import { Component, Input, OnInit } from '@angular/core';
import { ProposalResponse } from 'src/app/user/shared/types';

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.css']
})
export class ProposalComponent implements OnInit {
  @Input() userProposal: ProposalResponse;

  constructor() { }

  ngOnInit(): void {
  }

}
