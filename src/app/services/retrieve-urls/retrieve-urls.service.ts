import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs/internal/operators/tap';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RetrieveUrlsService {

  constructor(
    private http: HttpClient
  ) { }

  getUrls(resultLimit?: any) {
    let params = new HttpParams()

    if(resultLimit){
      params = params.append('limit', "5");
    }

    return this.http.get(`${environment.BASE_API}`, {params: params});
  }
}
