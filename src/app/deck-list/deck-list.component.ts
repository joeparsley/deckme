import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FirebaseToAppService } from '../firebase-to-app.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Deck } from '../deck.model';
import { AuthenticationService } from '../authentication.service';



@Component({
  selector: 'app-deck-list',
  templateUrl: './deck-list.component.html',
  styleUrls: ['./deck-list.component.scss'],
  providers: [FirebaseToAppService, AuthenticationService]
})
export class DeckListComponent implements OnInit {
  decksFromFirebase: any[] //From users eventually
  @Output() clickSender = new EventEmitter();

  constructor(private fbaService: FirebaseToAppService, private authService: AuthenticationService) {
    this.fbaService.getDecks().subscribe(data => {
      this.decksFromFirebase = data;
    });
  }

  ngOnInit() {
  }

  updateDeckClicked(deck: Deck) {
    this.clickSender.emit(deck);
  }

  createNewDeck() {
    var newDeck = new Deck([], "wNxVre4mWe", this.authService.afAuth.auth.currentUser.uid);
    this.clickSender.emit(newDeck);
  }

}
