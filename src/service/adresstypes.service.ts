import { Injectable }     from '@angular/core';
import {Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AdressTypesService {

    private adressTypesUrl: string = '/json/adresstypes.min.json';
    private propertyTypesUrl: string = '/json/propertytypes.min.json';
    constructor(private http: Http) {}


    getAdressTypes (): Observable<Object> {
        let headers       = new Headers({ 'Content-Type': 'application/json' });
        let options       = new RequestOptions({ headers: headers }); 

        return this.http.get(this.adressTypesUrl, options) 
                         .map((res:Response) => res.json()) 
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    } 


    getPropertyTypes (): Observable<Object> {
        let headers       = new Headers({ 'Content-Type': 'application/json' });
        let options       = new RequestOptions({ headers: headers }); 

        return this.http.get(this.propertyTypesUrl, options) 
                         .map((res:Response) => res.json()) 
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    } 
} 