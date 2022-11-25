import { Expose } from "class-transformer";

export class UserRdo {

@Expose({name:'_id'})
public id:string;

@Expose()
public registerDate:Date;

@Expose()
public  email:string;

@Expose()
public  name:string;

@Expose()
public  lastName:string;

@Expose()
public  avatar:string;

}
