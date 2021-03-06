import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UsersPageRoutingModule } from './users-routing.module';
import { UsersPage } from './users.page';
import { UserComponent } from './user/user.component';
import { UserService } from '../services/user.service';
import { TagService } from '../services/tag.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsersPageRoutingModule
  ],
  declarations: [UsersPage, UserComponent],
  providers: [UserService, TagService]
})
export class UsersPageModule {}
