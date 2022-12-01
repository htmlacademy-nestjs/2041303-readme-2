export interface UserInterface {

create(dto:string):Promise<void>;

findById(id:string):Promise<void>;

userBlog(id:string):Promise<void>;

userInfo(id:string):Promise<string>;

}
