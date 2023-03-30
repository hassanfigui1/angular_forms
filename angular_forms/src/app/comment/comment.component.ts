import { Component } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  comments : any[]=[
    { id:0, comment:"That's awesome !" },
  ];

  addComment(){
    alert("hello");
  }
  

}
