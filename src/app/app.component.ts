import { Component, OnInit } from '@angular/core';
import { AuthService } from './user/shared/services';
import { debuglog } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-culture-cheevent';

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    // TODO move this to resolver
    if (this.authService.tokenFromLocalStorage) {
      this.authService.getUserByToken().subscribe(() => {
        console.log(this.authService.user);
      });
    }
  }
}
