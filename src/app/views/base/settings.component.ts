import {Component} from '@angular/core';

@Component({
  templateUrl: 'settings.component.html'
})
export class SettingsComponent {

  constructor() {
  }

  saveUserInfo() {
    console.log('User Info Saved');
  }
}
