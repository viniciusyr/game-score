import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GameDetailsComponent } from '../game-details/game-details.component';

@Component({
  selector: 'app-game-score',
  templateUrl: './game-score.component.html',
  styleUrls: ['./game-score.component.scss']

})

export class GameScoreComponent {
  hover = false;

  team1 = {
    name: 'Corinthians', 
    score: 1, 
    logo: 'https://img.icons8.com/color/48/corinthians.png'
  }

  team2 = {
    name: 'Chelsea', 
    score: 0, 
    logo: 'https://img.icons8.com/color/48/chelsea-fc.png'
  }

  constructor(public dialog: MatDialog) {}

  teamDescription(){
    this.dialog.open(GameDetailsComponent, {
      width: '480px',
      data: {test: 'test'}
    })
    console.log('Team description!');
  }

}