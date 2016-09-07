import { Injectable } from '@angular/core';
import { Http, Response, Request, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { ProductModel } from './product.model';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductsService {
	private rootUrl: string = 'http://localhost:1986';  

	constructor(private http: Http) { }

	seachByName(name:string): Observable<ProductModel[]> {
		let url = this.rootUrl + '/products/seachbyname/' + name;
		return this.http
			.get(url)
			.map((res: Response) => res.json())
			.catch((ex: any) => Observable.throw(
            	ex.json() ? ex.json().error : 'Server error'));
	}
}
