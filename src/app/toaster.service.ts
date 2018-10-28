import {Injectable} from '@angular/core';

declare var toastr: any;

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor() {
    this.settings();
  }

  success(title: string, message?: string) {
    toastr.success(title, message);
  }

  error(title: string, message?: string) {
    toastr.error(title, message);
  }

  settings() {
    toastr.options = {
      'closeButton': true,
      'debug': false,
      'newestOnTop': false,
      'progressBar': false,
      'positionClass': 'toast-top-full-width',
      'preventDuplicates': false,
      'onclick': null,
      'showDuration': '300',
      'hideDuration': '1000',
      'timeOut': '0',
      'extendedTimeOut': '0',
      'showEasing': 'swing',
      'hideEasing': 'linear',
      'showMethod': 'fadeIn',
      'hideMethod': 'fadeOut'
    };
  }
}
