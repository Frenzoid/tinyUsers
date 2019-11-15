import { Component, OnInit, ViewChild } from '@angular/core';
import IUser from '../interfaces/IUser';
import { UserService } from '../services/user.service';
import { IonRefresher } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { TagService } from '../services/tag.service';
import ITag from '../interfaces/ITag';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  constructor(public userService: UserService, public tagService: TagService, public toastController: ToastController) { }
  @ViewChild('refresherRef', {static: false}) refresherRef: IonRefresher;

  users: IUser[];
  tags: ITag[];
  filtersHidden = true;

  ngOnInit() {
    this.userService.getUsers().subscribe(
    (users: IUser[]) => {
      this.users = users;
    }, (err: string[]) => {
      this.showToastError(err);
    });

    this.tagService.getTags().subscribe(
    (tags: ITag[]) => {
      this.tags = tags;
    }, (err: string[]) => {
      this.showToastError(err);
    });
  }

  doRefresh() {
    console.log(this.tags);

    this.userService.getUsers().subscribe(
    (users: IUser[]) => {
      console.log(users);
      this.users = users;
      this.refresherRef.complete();
    }, (err: string[]) => {
      this.showToastError(err);
      this.refresherRef.complete();
    });
  }

  showHideF() {
    this.filtersHidden = !this.filtersHidden;
    console.log(this.filtersHidden);
  }

  async showToastError(err) {
    const toast = await this.toastController.create({
      message: err,
      duration: 5000
    });
    toast.present();
  }
}
