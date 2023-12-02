import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharacterPagePageRoutingModule } from './character-page-routing.module';

import { CharacterPagePage } from './character-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharacterPagePageRoutingModule
  ],
  declarations: [CharacterPagePage]
})
export class CharacterPagePageModule {}
