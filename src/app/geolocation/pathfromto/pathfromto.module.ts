import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PathfromtoPageRoutingModule } from './pathfromto-routing.module';
import { PathfromtoPage } from './pathfromto.page';
import { LaunchNavigator } from '@ionic-native/launch-navigator/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PathfromtoPageRoutingModule
  ],
  declarations: [PathfromtoPage],
  providers: [
    Geolocation,
    LaunchNavigator
  ]
})
export class PathfromtoPageModule {}
