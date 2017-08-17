import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service'; //import service
import { FirebaseToAppService } from './firebase-to-app.service'; //import service
import { AuthGaurdService } from './auth-gaurd.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
// how to enable jquery in component
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ AuthenticationService, FirebaseToAppService ]
})
export class AppComponent {

  user; //provided by service
  local;
  public isLoggedIn: boolean;

  constructor(public authService: AuthenticationService, public authGaurd: AuthGaurdService, public router: Router) {
    this.authService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
        this.router.navigate(['']);
      } else {
        this.isLoggedIn = true;
        this.local = this.authService.afAuth.auth.currentUser;
      }
    })
  }

  logout() {
    this.authService.logout();
  }

}
