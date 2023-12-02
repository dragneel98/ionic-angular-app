import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacterPagePage } from './character-page.page';

const routes: Routes = [
  {
    path: '',
    component: CharacterPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharacterPagePageRoutingModule {}
