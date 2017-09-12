import { Component } from '@angular/core';
import {ScoresService} from './scores.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  score;
  exists = true;
  newName(data){
    this.score = data;
  }
  userExists(data){
    this.exists=data;
  }
}
