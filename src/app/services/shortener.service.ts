import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Url } from '../models/url';
import { map, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShortenerService {

  baseUrl = 'http://localhost:XXXX/encurtar';

  constructor(protected readonly httpClient: HttpClient) { }

  encurtarUrl(url: Url): Observable<Url> {
    return this.httpClient.post<Url>(this.baseUrl, url).pipe(
      take(1),
      map((output) => output)
    );
  }

}
