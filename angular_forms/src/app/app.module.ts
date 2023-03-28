import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ValidationWithVisualFeedbackComponent } from './validation-with-visual-feedback/validation-with-visual-feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent,
    LoginFormComponent,
    ValidationWithVisualFeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
