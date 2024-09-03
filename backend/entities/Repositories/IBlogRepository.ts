import { IBlogPost } from "../blog";

export interface IBlogRepository{
    create(blogPost:IBlogPost):Promise<IBlogPost>;
    findById(id: string): Promise<IBlogPost | null>;
    getAll(): Promise<IBlogPost[]>;
    update(blogPost:IBlogPost):Promise<IBlogPost>
    delete(id:string):Promise<void>
}