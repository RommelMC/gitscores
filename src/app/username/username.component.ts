import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ScoresService} from './../scores.service';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

  constructor(private _scoreService: ScoresService) { }
  @Output() checkName = new EventEmitter();
  @Output() nameExists = new EventEmitter();
  user = {username:""};
  score = 0;
  exists = true;
  onSubmit(){
    console.log(this.user.username);
    var self = this;
    this._scoreService.getScores(this.user.username, 
      function(gitScore){
        if(gitScore){
          console.log(gitScore);
          self.score = gitScore;
          self.exists = true;
          self.checkName.emit(self.score);
          self.nameExists.emit(self.exists);
        }
        else{
          self.exists = false;
          self.nameExists.emit(self.exists);          
        }
    });
    this.user={username:""};
  }

  ngOnInit() {
  }

}
