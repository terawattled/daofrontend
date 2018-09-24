import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {LoopBackConfig} from './shared/sdk';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {
    LoopBackConfig.setBaseURL('http://localhost:3000');
    LoopBackConfig.setApiVersion('api');
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
