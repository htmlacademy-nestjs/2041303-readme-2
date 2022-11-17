export interface BlogInterface {

  create (dto:string):Promise<void>;

  find():Promise<string[]>;

  findByCategory(category:string):Promise<string[]>;

  findBySort(sortType:string):Promise<string[]>;

  findById(id:string):Promise<string | null>;

  update (id:string):Promise< string | null>;

  delete (id:string):Promise< void>;

  createComment(id:string, dto:string):Promise<void>;




  1.12. Получение списка публикаций с применением сортировки:
  по популярности, дате создания, по количеству лайков, по количеству
  комментариев.

  1.15. Категоризация публикаций по тегам.

  1.17. Поиск публикаций по названию.
}
