import { Component, Input } from '@angular/core';

import { Proposal } from '../../types';

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.css'],
})
export class ProposalComponent {

  @Input() userProposal: Proposal;

}
