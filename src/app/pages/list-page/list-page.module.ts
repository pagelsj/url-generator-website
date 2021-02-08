import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import {
  UrlListModule
} from '../../components/index';

import { ListPageComponent } from './list-page.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    HttpClientModule,
    CommonModule,

    UrlListModule
  ],
  declarations: [
    ListPageComponent
  ],
  providers: [
  ]
})
export class ListPageModule{ }
