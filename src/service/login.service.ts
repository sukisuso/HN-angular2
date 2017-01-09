import { Injectable }     from '@angular/core';
import {Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class LoginService {

    private signupUrl: string = '/api/signup';
    private logoutUrl: string = '/logout';
    private loginUrl: string = '/api/login';
    private isAuthUrl: string = '/api/isAuth';
    constructor(private http: Http) {}


    signup (body: Object): Observable<Object> {
        let headers       = new Headers({ 'Content-Type': 'application/json' });
        let options       = new RequestOptions({ headers: headers }); 

        return this.http.post(this.signupUrl, body, options) 
                         .map((res:Response) => res.json()) 
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    } 

    login (body: Object): Observable<Object> {
        let headers       = new Headers({ 'Content-Type': 'application/json' });
        let options       = new RequestOptions({ headers: headers }); 

        return this.http.post(this.loginUrl, body, options) 
                         .map((res:Response) => res.json()) 
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    logout (): Observable<Object> {
        let headers       = new Headers({ 'Content-Type': 'application/json' });
        let options       = new RequestOptions({ headers: headers }); 

        return this.http.get(this.logoutUrl) 
                         .map((res:Response) => res.json()) 
                         .catch((error:any) => Observable.throw('Server logout!'));
    }

    isAuth (): Observable<Object> {
        let headers       = new Headers({ 'Content-Type': 'application/json' });
        let options       = new RequestOptions({ headers: headers }); 

        return this.http.post(this.isAuthUrl, {}, options) 
                         .map((res:Response) => res.json()) 
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
} 