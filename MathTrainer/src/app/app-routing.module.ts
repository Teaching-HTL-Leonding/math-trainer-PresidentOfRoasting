import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MathTrainerComponent } from './math-trainer/math-trainer.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {path:'',redirectTo:'settings',pathMatch:'full'},
  {path:'settings',component:SettingsComponent},
  {path:'math-trainer',component:MathTrainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
