import { Component, OnInit } from '@angular/core';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-pathfromto',
  templateUrl: './pathfromto.page.html',
  styleUrls: ['./pathfromto.page.scss'],
})
export class PathfromtoPage implements OnInit {

  constructor(private launchNavigator: LaunchNavigator, private geolocation: Geolocation) { }
  options: LaunchNavigatorOptions = {
    start: '',
  };

  location = '';

  ngOnInit() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.options.start = ` ${resp.coords.latitude}, ${resp.coords.longitude} `;
      }).catch((error) => {
        console.log('Error getting location', error);
      });
  }

  launchNav() {
    console.log(this.options);
    console.log(this.location);
    this.launchNavigator.navigate(this.location, this.options)
    .then(
      (success) => console.log('Launched navigator'),
      (error) => console.log('Error launching navigator', error)
    );
  }

}
