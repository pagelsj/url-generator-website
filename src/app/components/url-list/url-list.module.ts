import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RetrieveUrlsService } from '../../services/index';

import {
  UrlListComponent
} from './url-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UrlListComponent
  ],
  exports: [
    UrlListComponent
  ],
  providers: [
    RetrieveUrlsService
  ]
})
export class UrlListModule{ }
