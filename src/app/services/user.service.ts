import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { backendapi } from '../config/constats';
import IResponseModel from '../interfaces/IResponseModel';
import IUser from '../interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return new Observable((observer) => {

      this.http.get<IResponseModel>(backendapi + 'users').subscribe(
      (reply) => {
        if (reply.errors.critical) {
          console.error(reply);
          observer.error(reply.errors.messages);
        }
        observer.next(reply.data);
      }, (err: HttpErrorResponse) => {
        console.error(err);
        observer.error([err.message]);
      });

    });
  }
}
