import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../settings/settings.service';

@Component({
  selector: 'app-math-trainer',
  templateUrl: './math-trainer.component.html',
  styleUrls: ['./math-trainer.component.css']
})
export class MathTrainerComponent implements OnInit {

  constructor(public settings:SettingsService) {
   }

  ngOnInit(): void {
  }

}
