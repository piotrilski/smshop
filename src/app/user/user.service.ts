import { Injectable } from '@angular/core';
import { Http, Response, Request, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { UserHotDealModel } from './user-hot-deal.model';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {
  private rootUrl: string = 'http://localhost:1986';  

  constructor(private http: Http) { }

  getStartupDeals(startupDealsCount: number): Observable<UserHotDealModel[]> {
    let url = this.rootUrl + '/hotdeals/' + startupDealsCount.toString(); 
    
    return this.http
        .get(url)
        .map((res: Response) => res.json())       
        .catch((ex: any) => Observable.throw(
            ex.json() ? ex.json().error : 'Server error'));
  }
}
