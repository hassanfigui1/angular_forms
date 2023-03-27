import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent {

  topics = ['Angular','React','Vue js'];
  userModel = new User('Hassan FIGUIGUI','hassanfig@gmail.com', 7843784434, '','morning',true)

}
