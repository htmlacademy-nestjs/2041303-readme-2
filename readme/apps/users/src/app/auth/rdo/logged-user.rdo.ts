import { Expose } from "class-transformer";

export class LoggedUserRdo {

  @Expose({name:'_id'})
  id:string;

  @Expose()
  email:string;

  @Expose()
  public accessToken: string;

}
