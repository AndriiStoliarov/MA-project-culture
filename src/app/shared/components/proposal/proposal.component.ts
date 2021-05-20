import { Component, Input, OnInit } from '@angular/core';

import { Proposal } from '../../types';

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.css'],
})
export class ProposalComponent implements OnInit {
  @Input() userProposal: Proposal;

  constructor() { }

  ngOnInit(): void { }

}
