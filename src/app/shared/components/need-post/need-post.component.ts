import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NeedFormComponent } from '../need-form/need-form.component';

@Component({
  selector: 'app-need-post',
  templateUrl: './need-post.component.html',
  styleUrls: ['./need-post.component.css']
})
export class NeedPostComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialog.open(NeedFormComponent);
  }

}
