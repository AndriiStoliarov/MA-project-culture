
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Event} from '../types';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(public http: HttpClient) {
  }

  postData(data: any): Observable<any> {
    const headers = {Authentication: '555'};
    const body = JSON.stringify(data);
    return this.http.post<Event>('', body, {headers: headers});
  }

}
