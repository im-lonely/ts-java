declare namespace java {
    namespace lang {
        namespace annotation { }
        namespace constant { }
        namespace reflect { }
    }
    namespace io { }
    namespace math { }
    namespace net {
        namespace http { }
    }
    namespace sql { }
    namespace text { }
    namespace time {
        namespace chrono { }
        namespace format { }
        namespace zone { }
    }
    namespace util {
        interface Iterator<T> extends IterableIterator<T> {
        }
        export interface Iterable<T> {
            iterator(): Iterator<T>;
        }
        export interface Comparable<T> {
            compareTo(object: T): number;
        }
        export interface Collection<T> extends Iterable<T> {
            add(value: T): T;
            addAll(collection: Collection<T>): Collection<T>;
            clear(): void;
            size(): number;
            isEmpty(): boolean;
            toArray(): T[];
            [Symbol.iterator](): Iterator<T>;
        }
        export interface List<T> extends Collection<T> {
            add(value: T): T;
            add(index: number, value: T): T;
            set(index: number, value: T): T;
            get(index: number): T;
            remove(index: number): T;
            remove(value: T): T;
            removeAll(collection: Collection<T>): Collection<T>;
            indexOf(value: T): number;
            lastIndexOf(value: T): number;
            contains(value: T): boolean;
            containsAll(collection: Collection<T>): boolean;
            subList(start: number, end: number): List<T>;
            sort(comparator: Comparable<T>): List<T>;
        }
        export class ArrayList<T> implements List<T> {
            private store;
            constructor(capacity?: number);
            [Symbol.iterator](): Generator<T, void, unknown>;
            iterator(): Generator<T, void, unknown>;
            add(value: T): T;
            add(index: number, value: T): T;
            addAll(collection: Collection<T>): Collection<T>;
            set(valueOrIndex: T | number, value: T): T;
            get(index: number): T;
            remove(index: number): T;
            remove(value: T): T;
            removeAll(collection: Collection<T>): Collection<T>;
            clear(): void;
            isEmpty(): boolean;
            size(): number;
            toArray(): T[];
            indexOf(value: T): number;
            lastIndexOf(value: T): number;
            contains(value: T): boolean;
            containsAll(collection: Collection<T>): boolean;
            subList(start: number, end: number): ArrayList<T>;
            sort(comparator: Comparable<T>): this;
        }
        export {};
    }
}
export default java;
//# sourceMappingURL=index.d.ts.map