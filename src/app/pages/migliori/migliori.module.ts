import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MiglioriPage } from './migliori.page';

import {TranslateModule} from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    component: MiglioriPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MiglioriPage]
})
export class MiglioriPageModule {}
