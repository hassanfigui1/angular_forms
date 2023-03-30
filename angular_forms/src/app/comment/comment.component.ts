import { Component } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  commentList : any[]=[];
  comments = {id:0, comment: ""};

  addComment(){
    if(this.comments.comment !=""){
      this.commentList.push({comment: this.comments.comment, id: this.comments.id});
      this.comments.id += 1;
    }
    else{
      alert("Please fill the comment field !");
    }
  }
  

}
