import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../settings/settings.service';
import { MathTrainerService } from './math-trainer.service';

@Component({
  selector: 'app-math-trainer',
  templateUrl: './math-trainer.component.html',
  styleUrls: ['./math-trainer.component.css']
})
export class MathTrainerComponent implements OnInit {


  public userInput:number[]=[];
  public buttonPressed=true;
  public results:Boolean[]=[];

  constructor(public settings:SettingsService) {
   }


  public checkValues(){
    for (let i = 0; i < this.userInput.length; i++) {
      this.results[i]=this.settings.answers[i]===this.userInput[i].toString();
    }
    this.buttonPressed=false;
  }

  ngOnInit(): void {
  }

}
