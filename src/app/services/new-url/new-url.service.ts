import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewUrlService {

  constructor(
    private http: HttpClient
  ) { }

  saveUrl(formData: any) {
    console.log('formData', formData)
    return this.http.post(`${environment.BASE_API}/`, formData);
  }
}
