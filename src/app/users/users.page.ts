import { Component, OnInit } from '@angular/core';
import IUser from '../interfaces/IUser';
import { UserService } from '../services/user.service';
import IResponseModel from '../interfaces/IResponseModel';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  constructor(public userService: UserService) { }
  users: IUser;

  ngOnInit() {
    this.userService.getUsers().subscribe((reply: IResponseModel) => {
      this.users = reply.data;
    });
  }
}
