import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  ]
})
export class UrlListModule{ }
