import {Component, Input} from '@angular/core';
import {navItems} from './../../_nav';
import {ApiService} from '../../api.service';
import {AccessToken} from '../../shared/sdk/models';
import {UsersApi} from '../../shared/sdk/services/custom';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;

  constructor(private usersApi: UsersApi, private _router: Router) {

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');
    });

    this.changes.observe(<Element>this.element, {
      attributes: true
    });
  }

  logoutUser() {
    this.usersApi.logout().subscribe(res => {
        localStorage.removeItem('token');
        this._router.navigate(['login']);
      }, err => console.log(err)
    );
  }
}
