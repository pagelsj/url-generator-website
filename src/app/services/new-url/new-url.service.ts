import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError } from 'rxjs/internal/operators/catchError';
import { Observable, throwError } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewUrlService {

  constructor(
    private httpClient: HttpClient
  ) { }

  saveUrl(formData: any) {
    console.log('formData', formData)
    return this.httpClient.post(`${environment.BASE_API}/`, formData);
  }
}
