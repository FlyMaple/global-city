import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LobbyComponent } from './lobby/lobby/lobby.component';

const routes: Routes = [{
  path: '',
  component: LobbyComponent,
}];

@NgModule({
  declarations: [LobbyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LobbyModule { }
