import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ValidationWithVisualFeedbackComponent } from './validation-with-visual-feedback/validation-with-visual-feedback.component';
import { HeaderComponent } from './header/header.component';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent,
    LoginFormComponent,
    ValidationWithVisualFeedbackComponent,
    HeaderComponent,
    CommentComponent
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
