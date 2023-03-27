import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_forms';
  userModel = new User('Hassan FIGUIGUI','hassanfig@gmail.com', 7843784434, '','morning',true)
}
