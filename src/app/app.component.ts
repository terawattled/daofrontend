import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {LoopBackConfig} from './shared/sdk';
import {environment} from '../environments/environment';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {
    if (environment.production) {
      LoopBackConfig.setBaseURL('http://terawattdao.xyz:3000');
    } else {
      LoopBackConfig.setBaseURL('http://localhost:3000');
    }
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
