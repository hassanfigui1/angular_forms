import { Component } from '@angular/core';

@Component({
  selector: 'app-validation-with-visual-feedback',
  templateUrl: './validation-with-visual-feedback.component.html',
  styleUrls: ['./validation-with-visual-feedback.component.css']
})
export class ValidationWithVisualFeedbackComponent {
  private tech:any[] = ['Django','Python','Java','Php','Flask','Angular','Angular'];


  getTech(){
    return this.tech;
  }
}
