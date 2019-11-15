import { Component, OnInit, ViewChild } from '@angular/core';
import IUser from '../interfaces/IUser';
import { UserService } from '../services/user.service';
import { IonRefresher } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  constructor(public userService: UserService, public toastController: ToastController) { }
  @ViewChild('refresherRef', {static: false}) refresherRef: IonRefresher;

  users: IUser[];

  ngOnInit() {
    this.userService.getUsers().subscribe(
    (users: IUser[]) => {
      this.users = users;
    }, (err: string[]) => {
      this.showToastError(err);
    });
  }

  doRefresh() {
    this.userService.getUsers().subscribe(
    (users: IUser[]) => {
      this.users = users;
      this.refresherRef.complete();
    }, (err: string[]) => {
      this.showToastError(err);
      this.refresherRef.complete();
    });
  }

  async showToastError(err) {
    const toast = await this.toastController.create({
      message: err,
      duration: 5000
    });
    toast.present();
  }
}
