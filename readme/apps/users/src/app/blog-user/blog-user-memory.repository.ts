import { Injectable } from '@nestjs/common';
import {CRUDRepositoryInterface} from '@readme/core';
import { UserDataInterface } from '@readme/shard-types';
import * as crypto from 'crypto';
import { BlogUserEntity } from './blog-user.entity';

Injectable()

export class BlogUserMemoryRepository implements CRUDRepositoryInterface<BlogUserEntity, string, UserDataInterface> {

private repository : {[key:string]:UserDataInterface} = {};


public async create(item: BlogUserEntity): Promise<UserDataInterface> {

  const entry = {...item.toObject(), _id:crypto.randomUUID()};
  this.repository[entry._id] = entry;
  return {...entry}

}

public async update(id: string, item: BlogUserEntity): Promise<UserDataInterface> {

  this.repository[id] = {...item.toObject(), _id:id};
  return this.findById(id);

}

public async findById(id: string): Promise<UserDataInterface> {

  if(this.repository[id]){
    return {...this.repository[id]};
  }

  return null;

}

public async findByEmail(email:string) {

  const existUser = Object.values(this.repository)
  .find((userItem)=> userItem.email === email);
if(! existUser){
  return null;
}

return {...existUser};

}

public async destroy(id: string): Promise<void> {

  delete this.repository[id];

}

}
