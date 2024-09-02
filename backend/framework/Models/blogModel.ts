import { Schema ,model} from "mongoose";
import { IBlogPost } from "../../entities/blog";


const blogPostSchema = new Schema<IBlogPost>({
    title: { type: String, required: true },
    content: { type: String, required: true },
    authorId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });
  
  const BlogPost = model<IBlogPost>('BlogPost', blogPostSchema);
export default BlogPost;