import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NeedFormComponent } from '../shared/components';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialog.open(NeedFormComponent);
  }

}
