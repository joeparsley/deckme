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


  jundTheme: string = "/src/themes/naya-theme/naya-theme.css";
  bantTheme: string = "/src/themes/bant-theme/bant-theme.css";
  grixisTheme: string = "/src/themes/grixis-theme/grixis-theme.css";
  jeskaiTheme: string = "/src/themes/jeskai-theme/jeskai-theme.css";
  nayaTheme: string = "/src/themes/naya-theme/naya-theme.css";
  esperTheme: string = "/src/themes/esper-theme/esper-theme.css";
  marduTheme: string = "/src/themes/mardu-theme/mardu-theme.css";
  sultaiTheme: string = "/src/themes/sultai-theme/sultai-theme.css";
  temurTheme: string = "/src/themes/temur-theme/temur-theme.css";
  abzanTheme: string = "/src/themes/abzan-theme/abzan-theme.css";

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

  getJund() {
    $('#userTheme').attr('href', this.jundTheme);
    $('.background').attr('style', "background-color:#303030");
  }
  getBant() {
    $('#userTheme').attr('href', this.bantTheme);
    $('.background').attr('style', "background-color:#FFF9C4");
  }
  getGrixis() {
    $('#userTheme').attr('href', this.grixisTheme);
    $('.background').attr('style', "background-color:#8E24AA");
  }
  getJeskai() {
    $('#userTheme').attr('href', this.jeskaiTheme);
    $('.background').attr('style', "background-color:#FFF9C4");
  }
  getNaya() {
    $('#userTheme').attr('href', this.nayaTheme);
    $('.background').attr('style', "background-color:#FFF9C4");
  }
  getEsper() {
    $('#userTheme').attr('href', this.esperTheme);
    $('.background').attr('style', "background-color:#FFF9C4");
  }
  getMardu() {
    $('#userTheme').attr('href', this.marduTheme);
    $('.background').attr('style', "background-color:#303030");
  }
  getSultai() {
    $('#userTheme').attr('href', this.sultaiTheme);
    $('.background').attr('style', "background-color:#303030");
  }
  getTemur() {
    $('#userTheme').attr('href', this.temurTheme);
    $('.background').attr('style', "background-color:#00ACC1");
  }
  getAbzan() {
    $('#userTheme').attr('href', this.abzanTheme);
    $('.background').attr('style', "background-color:#FFF9C4");
  }

}
