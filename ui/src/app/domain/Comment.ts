// Comment class (mirrors DB implementation besides a reference to parent comment (if it is a reply comment), we don't need that)
export class Comment {
    identification: number;
    postId: number;
    username: string;
    createdAt: Date;
    body: string;
    replies: Array<Comment>
  }
  
  