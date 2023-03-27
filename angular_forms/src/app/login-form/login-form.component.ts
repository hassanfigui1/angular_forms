import { Component } from '@angular/core';
import { LoginUser } from '../login-user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  backend_tech = [
    'Django','Flask','Php','Java','Python'
  ];
  LoginUser = new LoginUser("hassanfig","jamesBlunt123..");
  
}
