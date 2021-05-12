import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Requirement } from '../../types';
import { NeedFormComponent } from '../need-form/need-form.component';

// export interface DialogData {
//   description: string;
// }

@Component({
  selector: 'app-need',
  templateUrl: './need.component.html',
  styleUrls: ['./need.component.css']
})
export class NeedComponent implements OnInit {

  @Input() requirement: Requirement;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void { }

  openDialog(): void {
    this.dialog.open(NeedFormComponent, {
      data: { description: this.requirement.description }
    });
  }

}
