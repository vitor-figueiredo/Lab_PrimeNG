import { AlertService } from './../../services/alert.service';
import { ResponseLogin } from './../../models/ResponseLogin';
import { LoginService } from './../../services/login.service';
import { RequestLogin } from '../../models/RequestLogin';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  requestLogin: RequestLogin;

  constructor(private loginService: LoginService, private alertService: AlertService) {
    this.requestLogin = new RequestLogin();
  }

  public doLogin(): void {
    this.loginService.doLogin(this.requestLogin).subscribe({
      next: (data) => {
        this.alertService.info('Funcionalidade ainda não implementada', 'Informativo')
      }
      ,
      error: (e) => {
        this.alertService.error(e.error.message, 'Erro');
      }
      ,
      complete: () => console.info('complete')
    })
  }

}
