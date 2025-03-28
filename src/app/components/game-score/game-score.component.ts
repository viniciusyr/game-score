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
    name: 'CORINTHIANS', 
    score: 1, 
    logo: 'https://cdn.freebiesupply.com/logos/large/2x/corinthians-logo-png-transparent.png'
  }

  team2 = {
    name: 'CHELSEA', 
    score: 0, 
    logo: 'https://upload.wikimedia.org/wikipedia/hif/0/0d/Chelsea_FC.png?20150523181450'
  }

  constructor(public dialog: MatDialog) {}

  openGameDetail(){
    this.dialog.open(GameDetailsComponent, {
      width: '400px',
      data: {
        team1Data: {
          name: 'COR',
          goals: '1',
          shots: '11',
          possession: '46%',
          corner: '4',
          fouls: '17',
          offsides: '1',
          yellow: '1',
          red: '0'
         },
       team2Data: {
         name: 'CHE',
         goals: '0',
         shots: '14',
         possession: '54%',
         corner: '2',
         fouls: '12',
         offsides: '4',
         yellow: '1',
         red: '1'
       }
      }
      
    })
    console.log('Team description!');
  }

}