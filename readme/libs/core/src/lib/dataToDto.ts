import {plainToInstance, ClassConstructor} from 'class-transformer'

export function getDataToDto<T, V> (someDto:ClassConstructor<T>, plainObject: V) {

  return plainToInstance(someDto, plainObject, {excludeExtraneousValues:true});

}
