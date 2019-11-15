import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { backendapi } from '../config/constats';
import IResponseModel from '../interfaces/IResponseModel';
import ITag from '../interfaces/ITag';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(public http: HttpClient) { }

  getTags(): Observable<ITag[]> {
    return new Observable((observer) => {

      this.http.get<IResponseModel>(backendapi + 'tags').subscribe(
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
