import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ScoresService} from './scores.service';
import { AppComponent } from './app.component';
import { UsernameComponent } from './username/username.component';
import { ScoreComponent } from './score/score.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    UsernameComponent,
    ScoreComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ScoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
