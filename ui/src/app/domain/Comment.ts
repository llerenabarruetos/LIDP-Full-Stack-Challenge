export class Comment {
    identification: number;
    postId: number;
    username: string;
    createdAt: Date;
    body: string;
    replies: Array<Comment>
  }
  
  