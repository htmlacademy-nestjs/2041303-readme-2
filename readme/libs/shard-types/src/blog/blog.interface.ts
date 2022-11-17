export interface BlogInterface {

  create (dto:string):Promise<void>;

  findByTitle(title:string):Promise<string[] | null>;

  find():Promise<string[]>;

  findByCategory(category:string):Promise<string[]>;

  findBySort(sortType:string):Promise<string[]>;

  findById(id:string):Promise<string | null>;

  update (id:string):Promise< string | null>;

  delete (id:string):Promise< void>;

  createComment(id:string, dto:string):Promise<void>;

}
