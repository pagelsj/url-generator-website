import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import {
  GenerateUrlComponent,
  UrlListModule
} from '../../components/index';

import { HomePageComponent } from './home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,

    UrlListModule
  ],
  declarations: [
    GenerateUrlComponent,

    HomePageComponent
  ],
  providers: [
  ]
})
export class HomePageModule{ }
