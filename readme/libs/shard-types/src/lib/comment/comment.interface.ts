export interface CommentInterface {

  create (dto:string):Promise <void>;

  findByBlogId(idBlog:string):Promise<string[]>;

  deleteByIdBlog (idBlog:string): Promise <void>;

  delete (id:string): Promise <void>;

}
