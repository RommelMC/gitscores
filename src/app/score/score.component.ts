import { Component, OnInit, Input } from '@angular/core';
import {ScoresService} from './../scores.service';
@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  @Input() score: number;
  @Input() exists: boolean;
  constructor(private _scoreService: ScoresService) {
   }

  ngOnInit() {
  }

}
