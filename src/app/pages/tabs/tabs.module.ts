import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';
import {TranslateModule} from "@ngx-translate/core";

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
  {
    path: 'forum',
    children: [
      {
        path: '',
        loadChildren: '../forum/forum.module#ForumPageModule'
      }
    ]
  },
  {
    path: 'migliori',
    children: [
      {
        path: '',
        loadChildren: '../migliori/migliori.module#MiglioriPageModule'
      }
    ]
  },
  {
    path: 'ricerca',
    children: [
      {
        path: '',
        loadChildren: '../ricerca/ricerca.module#RicercaPageModule'
      }
    ]
  },
  {
    path: 'assetto',
    children: [
      {
        path: '',
        loadChildren: '../assetto/assetto.module#AssettoPageModule'
      }
    ]
  },
      {
        path: '',
        redirectTo: '/tabs/migliori',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
