import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class ScoresService {

  constructor(private _http: Http) { }

  getScores(name, callback){
    console.log(name);
    var url = "https://api.github.com/users/"+name;
    console.log(url);
    this._http.get(url).subscribe(
      (response) => {
        var score = parseInt(response.json().public_repos) + parseInt(response.json().followers);
        callback(score);
      },
      (err)=>{
        callback();
      }
    )
  }
}
