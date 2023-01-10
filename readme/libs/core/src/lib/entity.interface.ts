export interface EntityInterface<T, E> {
    toObject(): T
    fillEntity(entity: E): void
}
