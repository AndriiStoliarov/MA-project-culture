import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthService, ProposalService } from 'src/app/user/shared/services';
import { ProposalResponse } from 'src/app/user/shared/types';
import { Requirement } from '../../types';
import { NeedFormComponent } from '../need-form/need-form.component';

@Component({
  selector: 'app-need',
  templateUrl: './need.component.html',
  styleUrls: ['./need.component.css']
})
export class NeedComponent implements OnInit {

  @Input() requirement: Requirement;
  proposal$: Observable<ProposalResponse>;
  // proposal: ProposalResponse;
  isAuthenticated = false;

  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private proposalService: ProposalService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    // this.proposalService.getProposalById(8).subscribe((proposal: ProposalResponse) => {
    //   this.proposal = proposal;
    //   console.log(this.proposal);
    //   console.log(this.requirement.id);
    // });


    this.isAuthenticated = this.authService.isAuthenticated();

    this.proposal$ = this.route.paramMap.pipe(
      switchMap(() => {
        return this.proposalService.getProposalById(8);
      })
    );
  }

  openDialog(): void {
    this.dialog.open(NeedFormComponent, {
      data: {
        description: this.requirement.description,
        id: this.requirement.id
      }
    });
  }

}
