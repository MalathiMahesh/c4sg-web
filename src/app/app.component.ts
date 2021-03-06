import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
// moduleId: module.id,  // For webpack, remove this
  selector: 'my-app',
  providers: [AuthService],
  templateUrl: './app.component.html',
  styleUrls: [ 'app.component.css' ]
})

export class AppComponent {
    constructor(private router: Router, private auth: AuthService) { }

  // control nav style by changing the class name
  isAtHome() {
    if (this.router.url === '/' || this.router.url === '/#!') {
      return 'at-home';
    } else {
      return 'off-home';
    }
  }
}
