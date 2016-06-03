import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';
import { IUser } from  './user';
import { IResult } from './result';

@Injectable()
export class UserService {
    private _checkUserUrl = '/home/checkUser';
    private _addUserUrl = '/home/addUser';

    constructor(private _http: Http) { }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    isUserNameUnique(user: IUser): Observable<IResult> {
        let headers = new Headers({ 'Content-Type': 'application/json' }); // for ASP.NET MVC
        let options = new RequestOptions({ headers: headers });

        return this._http.post(this._checkUserUrl, JSON.stringify(user), options)
            .map((response: Response) => <IResult>response.json())
            .do(data => console.log("User: " + JSON.stringify(data)))
            .catch(this.handleError);
    }


    addUser(user: IUser): Observable<IUser> {
        let headers = new Headers({ 'Content-Type': 'application/json' }); // for ASP.NET MVC
        let options = new RequestOptions({ headers: headers });

        return this._http.post(this._addUserUrl, JSON.stringify(user), options)
            .map((response: Response) => <IUser>response.json())
            .do(data => console.log("User: " + JSON.stringify(data)))
            .catch(this.handleError);
    }
}