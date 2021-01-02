namespace java {
  export namespace lang {
    export namespace annotation {}

    export namespace constant {}

    export namespace reflect {}
  }

  export namespace io {}

  export namespace math {}

  export namespace net {
    export namespace http {}
  }

  export namespace sql {}

  export namespace text {}

  export namespace time {
    export namespace chrono {}

    export namespace format {}

    export namespace zone {}
  }

  export namespace util {
    class Assertions {
      public static isNumber(v: any): v is number {
        return typeof v === "number";
      }

      public static isUndefined(v: any): v is undefined {
        return typeof v === "undefined";
      }
    }

    interface Iterator<T> extends IterableIterator<T> {}

    export interface Iterable<T> {
      /**
       * Produces an iterator to iterate over a collection.
       * @returns Returns an iterator.
       */
      iterator(): Iterator<T>;

      /**
       * Loops over the collection and performs a callback on each element.
       * @param callback Callback to execute on each element.
       */
      forEach(callback: (item?: T, index?: number, store?: T[]) => void): void;
    }

    export interface Comparable<T> {
      compareTo(object: T): number;
    }

    export interface Collection<T> extends Iterable<T> {
      /**
       * Adds a value to the end of this collection.
       * @param value The value to add to this collection.
       */
      add(value: T): T;

      /**
       * Adds a collection to the end of this collection.
       * @param collection The collection to add.
       */
      addAll(collection: Collection<T>): Collection<T>;

      /**
       * Clears all elements of this collection.
       */
      clear(): void;

      /**
       * Gets the size of this collecion.
       */
      size(): number;

      /**
       * Gets whether or not the collection is empty.
       */
      isEmpty(): boolean;

      /**
       * Gets the collection as an array.
       */
      toArray(): T[];

      [Symbol.iterator](): Iterator<T>;
    }

    export interface List<T> extends Collection<T> {
      /**
       * Adds a value to the list.
       * @param value The value to add.
       */
      add(value: T): T;

      /**
       * Inserts a value at the specified index.
       * @param index The index to insert.
       * @param value The value to insert.
       */
      add(index: number, value: T): T;

      /**
       * Sets an index to a value.
       * @param index The index to set.
       * @param value The value to set.
       */
      set(index: number, value: T): T;

      /**
       * Gets the value at the specified index.
       * @param index Index to get.
       */
      get(index: number): T;

      /**
       * Removes the value at the specified index.
       * @param index Index to remove.
       */
      remove(index: number): T;

      /**
       * Removes a value based on the specified value.
       * @param value Value to remove.
       */
      remove(value: T): T;

      /**
       * Removes an entire collection from the list.
       * @param collection Collection to remove.
       */
      removeAll(collection: Collection<T>): Collection<T>;

      /**
       * Returns the first index where the item was found.
       * @param value Value to find.
       */
      indexOf(value: T): number;

      /**
       * Returns the last index where the item was found.
       * @param value Value to find.
       */
      lastIndexOf(value: T): number;

      /**
       * If the value is in the list.
       * @param value Value to check.
       */
      contains(value: T): boolean;

      /**
       * If the entire collection is in the list.
       * @param collection Collection to check.
       */
      containsAll(collection: Collection<T>): boolean;

      /**
       * Returns a portion of the list.
       * @param start Starting index.
       * @param end Ending index.
       */
      subList(start: number, end: number): List<T>;

      /**
       * Sorts the list with the specified comparator
       * @param comparator Comparator to use for sorting.
       */
      sort(comparator: Comparable<T>): List<T>;
    }

    export class ArrayList<T> implements List<T> {
      private store: T[];

      constructor(capacity?: number) {
        this.store = capacity ? new Array(capacity) : [];
      }

      *[Symbol.iterator]() {
        for (const element of this.store) yield element;
      }

      public *iterator() {
        for (const element of this.store) yield element;
      }

      public add(value: T): T;
      public add(index: number, value: T): T;
      public add(valueOrIndex: T | number, value?: T) {
        if (!Assertions.isNumber(valueOrIndex)) this.store.push(valueOrIndex);
        else if (!Assertions.isUndefined(value))
          this.store.splice(valueOrIndex, -1, value);
        else if (
          Assertions.isNumber(valueOrIndex) &&
          Assertions.isUndefined(value)
        )
          this.store.push((valueOrIndex as unknown) as T);

        return value ?? valueOrIndex;
      }

      public addAll(collection: Collection<T>): Collection<T>;
      public addAll(index: number, collection: Collection<T>): Collection<T>;
      public addAll(
        collectionOrIndex: Collection<T> | number,
        collection?: Collection<T>
      ) {
        if (!Assertions.isNumber(collectionOrIndex))
          for (const item of collectionOrIndex) this.add(item);
        else if (!Assertions.isUndefined(collection))
          for (const item of collection) this.add(collectionOrIndex, item);

        return collection ?? collectionOrIndex;
      }

      public set(valueOrIndex: T | number, value: T) {
        if (!Assertions.isNumber(valueOrIndex)) this.store.push(valueOrIndex);
        else if (!Assertions.isUndefined(value))
          this.store[valueOrIndex] = value;
        else if (
          Assertions.isNumber(valueOrIndex) &&
          Assertions.isUndefined(value)
        )
          this.store.push((valueOrIndex as unknown) as T);
        return value;
      }

      public get(index: number) {
        return this.store[index];
      }

      public remove(index: number): T;
      public remove(value: T): T;
      public remove(valueOrIndex: T | number) {
        if (Assertions.isNumber(valueOrIndex)) {
          const value = this.store[valueOrIndex];

          delete this.store[valueOrIndex];

          return value;
        } else if (!Assertions.isNumber(valueOrIndex)) {
          const index = this.store.indexOf(valueOrIndex);
          const value = this.store[index];

          delete this.store[index];

          return value;
        } else return;
      }

      public removeAll(collection: Collection<T>) {
        for (const item of collection)
          if (this.contains(item)) this.remove(item);
        return collection;
      }

      public clear() {
        this.store = [];
      }

      public isEmpty() {
        return this.store.length === 0;
      }

      public size() {
        return this.store.length;
      }

      public toArray() {
        return this.store;
      }

      public indexOf(value: T) {
        return this.store.indexOf(value);
      }

      public lastIndexOf(value: T) {
        return this.store.lastIndexOf(value);
      }

      public contains(value: T) {
        return this.store.includes(value);
      }

      public containsAll(collection: Collection<T>) {
        const a = collection.toArray();
        return this.store.every((e) => a.indexOf(e) !== -1);
      }

      public forEach(
        callback: (item?: T, index?: number, store?: T[]) => void
      ) {
        Array.prototype.forEach.apply(this.store, [callback]);
      }

      public subList(start: number, end: number) {
        const res = new ArrayList<T>();
        for (let i = start; i < end; i++) res.add(this.store[i]);
        return res;
      }

      public sort(comparator: Comparable<T>) {
        this.store.sort(comparator.compareTo);
        return this;
      }
    }
  }
}

export default java;
