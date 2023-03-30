import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentComponent } from './comment/comment.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { LoginFormComponent } from './login-form/login-form.component';

const routes: Routes = [
  {path:"login", component: LoginFormComponent},
  {path:"register",component: FormComponentComponent},
  {path:"comment", component:CommentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
