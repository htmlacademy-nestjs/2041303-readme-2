export interface ImageVideoInterface {

  create(dto:string):Promise<void>;

  delete(idBlog:string):Promise<void>
}
