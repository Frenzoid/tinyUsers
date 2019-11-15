import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { backendapi } from '../config/constats';
import IResponseModel from '../interfaces/IResponseModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

  getUsers(): Observable<IResponseModel> {
    return this.http.get<IResponseModel>(backendapi + 'users');
  }
}
