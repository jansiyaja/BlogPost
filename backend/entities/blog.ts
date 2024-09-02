export interface IBlogPost {
    id: string;
    title: string;
    content: string;
    authorId: string;  // Reference to the User
    createdAt: Date;
    updatedAt: Date;
  }