import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  private __showAlert(title: string, message: string, icon: SweetAlertIcon) {
    Swal.fire(title, message, icon);
  }


  public success(message: string, title: string) : void {
    this.__showAlert(title, message, 'success');
  }

  public info(message: string, title: string) : void {
    this.__showAlert(title, message, 'info');
  }

  public error(message: string, title: string) : void {
    this.__showAlert(title, message, 'error');
  }


}
