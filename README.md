# DeckMe
  Magic: The Gathering deck building application that allows users to search for cards and create a deck.

##### Joe Parsley(Project Lead, Front-End Development, Design), Adrian Agnic(Back-End Development), Jared Luedtke(Back-End Development)  (7-27-2017)

## Description
  Deckme is a Application that allows users to search for Magic The Gathering cards and store them into decks. Once a card is saved to a deck it gives the user access to Visual Data to help them better understand the content of their deck.

## Specifications
Spec | Input | Output
--- | --- | ---
User creates an account | 'Create New User' | 'username, user@email.com, password'
User logs in | 'Log In' | 'user@email.com, password'
User creates a new deck | 'New Deck' | 'Empty Deck'
User searches for cards | 'Sol Ring' | 'Sol Ring -colorless -artifact'
User adds cards to deck | 'MyDeck' | '-Sol Ring'
User views deck graphs | ' ' | '15 Land, 25 Creatures, 10 Instants'
User deletes deck | 'Delete MyDeck' | 'Deck Deleted'
User views profile page | 'Profile' | ' '
User updates account information | 'Update Email' | 'newemail@yes.com'
User can receive email verification of account creation and password reset | 'Reset Password' | 'Password Reset Email Sent'

## Installation Requirements

* You must install or have installed a current version of:

  * [Node and npm](https://nodejs.org/en/)

  * [TypeScript](https://www.typescriptlang.org/#download-links)

  * [Angular CLI](https://github.com/angular/angular-cli)


## Installation
### For most current version of this app, follow the instructions below, otherwise you can visit the live version of this site here! [Deckme](https://deckme.me/)
* Clone this repository to your machine

  `git clone https://github.com/joeparsley/deckme`
* Open your terminal and navigate to the project directory
* While in Terminal, Run then command:
  * `npm install`
* Create a new FireBase database
* Click on the Authentication tab in the top left and enable `Email/Password` and `Google` authentication
* Import the `sample-database.json` at the top of directory
* Create a File in `src/app` called `api-keys.ts`
  * Copy and past this block of code, and replace the the dummy info with your FireBase info
`export var masterFirebaseConfig = {
  apiKey: "YOUR FIREBASE INFORMATION",
  authDomain: "YOUR FIREBASE INFORMATION",
  databaseURL: "YOUR FIREBASE INFORMATION",
  projectId: "YOUR FIREBASE INFORMATION",
  storageBucket: "YOUR FIREBASE INFORMATION",
  messagingSenderId: "YOUR FIREBASE INFORMATION"
}``
* Run the command while in the project directory `ng serve`
* Locate package.json for additional Angular commands if you're not familiar with Angular CLI
* Last but not least, have fun!
* Please log any contributions!

## Technologies
* Angular
* Javascript
  * Typescript
* Firebase
* Charts.js
* Angular Material
* HTML
* CSS/SASS
* [Magic the Gathering API](https://magicthegathering.io/)

## Known Bugs
  * Certain cards without a multiverse id cannot be added to a deck
  * Certain cards from the database don't render properly due to image sizing issues

## License
  Protected under MIT License
  Copyright (c) 2017 Copyright Holder All Rights Reserved.
