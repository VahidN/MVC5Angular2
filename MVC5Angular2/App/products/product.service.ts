import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class ProductService {
    private _productUrl = '/home/products';
    private _addProductUrl = '/home/AddProduct';

    constructor(private _http: Http) { }

    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
            .map((response: Response) => <IProduct[]>response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    addProduct(product: IProduct): Observable<IProduct> {
        let headers = new Headers({ 'Content-Type': 'application/json' }); // for ASP.NET MVC
        let options = new RequestOptions({ headers: headers });

        return this._http.post(this._addProductUrl, JSON.stringify(product), options)
            .map((response: Response) => <IProduct>response.json())
            .do(data => console.log("Product: " + JSON.stringify(data)))
            .catch(this.handleError);
    }
}