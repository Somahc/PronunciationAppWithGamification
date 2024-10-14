
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Point
 * 
 */
export type Point = $Result.DefaultSelection<Prisma.$PointPayload>
/**
 * Model Lesson
 * 
 */
export type Lesson = $Result.DefaultSelection<Prisma.$LessonPayload>
/**
 * Model LessonProgress
 * 
 */
export type LessonProgress = $Result.DefaultSelection<Prisma.$LessonProgressPayload>
/**
 * Model Badge
 * 
 */
export type Badge = $Result.DefaultSelection<Prisma.$BadgePayload>
/**
 * Model UserBadge
 * 
 */
export type UserBadge = $Result.DefaultSelection<Prisma.$UserBadgePayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model SrhiAnswer
 * 
 */
export type SrhiAnswer = $Result.DefaultSelection<Prisma.$SrhiAnswerPayload>
/**
 * Model LessonReviews
 * 
 */
export type LessonReviews = $Result.DefaultSelection<Prisma.$LessonReviewsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.point`: Exposes CRUD operations for the **Point** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Points
    * const points = await prisma.point.findMany()
    * ```
    */
  get point(): Prisma.PointDelegate<ExtArgs>;

  /**
   * `prisma.lesson`: Exposes CRUD operations for the **Lesson** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lessons
    * const lessons = await prisma.lesson.findMany()
    * ```
    */
  get lesson(): Prisma.LessonDelegate<ExtArgs>;

  /**
   * `prisma.lessonProgress`: Exposes CRUD operations for the **LessonProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LessonProgresses
    * const lessonProgresses = await prisma.lessonProgress.findMany()
    * ```
    */
  get lessonProgress(): Prisma.LessonProgressDelegate<ExtArgs>;

  /**
   * `prisma.badge`: Exposes CRUD operations for the **Badge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Badges
    * const badges = await prisma.badge.findMany()
    * ```
    */
  get badge(): Prisma.BadgeDelegate<ExtArgs>;

  /**
   * `prisma.userBadge`: Exposes CRUD operations for the **UserBadge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserBadges
    * const userBadges = await prisma.userBadge.findMany()
    * ```
    */
  get userBadge(): Prisma.UserBadgeDelegate<ExtArgs>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs>;

  /**
   * `prisma.srhiAnswer`: Exposes CRUD operations for the **SrhiAnswer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SrhiAnswers
    * const srhiAnswers = await prisma.srhiAnswer.findMany()
    * ```
    */
  get srhiAnswer(): Prisma.SrhiAnswerDelegate<ExtArgs>;

  /**
   * `prisma.lessonReviews`: Exposes CRUD operations for the **LessonReviews** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LessonReviews
    * const lessonReviews = await prisma.lessonReviews.findMany()
    * ```
    */
  get lessonReviews(): Prisma.LessonReviewsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.15.0
   * Query Engine version: 12e25d8d06f6ea5a0252864dd9a03b1bb51f3022
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Account: 'Account',
    Session: 'Session',
    User: 'User',
    Point: 'Point',
    Lesson: 'Lesson',
    LessonProgress: 'LessonProgress',
    Badge: 'Badge',
    UserBadge: 'UserBadge',
    Comment: 'Comment',
    VerificationToken: 'VerificationToken',
    SrhiAnswer: 'SrhiAnswer',
    LessonReviews: 'LessonReviews'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'account' | 'session' | 'user' | 'point' | 'lesson' | 'lessonProgress' | 'badge' | 'userBadge' | 'comment' | 'verificationToken' | 'srhiAnswer' | 'lessonReviews'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>,
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>,
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Point: {
        payload: Prisma.$PointPayload<ExtArgs>
        fields: Prisma.PointFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PointFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PointPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PointFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          findFirst: {
            args: Prisma.PointFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PointPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PointFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          findMany: {
            args: Prisma.PointFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PointPayload>[]
          }
          create: {
            args: Prisma.PointCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          createMany: {
            args: Prisma.PointCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PointCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PointPayload>[]
          }
          delete: {
            args: Prisma.PointDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          update: {
            args: Prisma.PointUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          deleteMany: {
            args: Prisma.PointDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PointUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PointUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          aggregate: {
            args: Prisma.PointAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePoint>
          }
          groupBy: {
            args: Prisma.PointGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PointGroupByOutputType>[]
          }
          count: {
            args: Prisma.PointCountArgs<ExtArgs>,
            result: $Utils.Optional<PointCountAggregateOutputType> | number
          }
        }
      }
      Lesson: {
        payload: Prisma.$LessonPayload<ExtArgs>
        fields: Prisma.LessonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LessonFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LessonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LessonFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          findFirst: {
            args: Prisma.LessonFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LessonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LessonFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          findMany: {
            args: Prisma.LessonFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>[]
          }
          create: {
            args: Prisma.LessonCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          createMany: {
            args: Prisma.LessonCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LessonCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>[]
          }
          delete: {
            args: Prisma.LessonDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          update: {
            args: Prisma.LessonUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          deleteMany: {
            args: Prisma.LessonDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LessonUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LessonUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          aggregate: {
            args: Prisma.LessonAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLesson>
          }
          groupBy: {
            args: Prisma.LessonGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LessonGroupByOutputType>[]
          }
          count: {
            args: Prisma.LessonCountArgs<ExtArgs>,
            result: $Utils.Optional<LessonCountAggregateOutputType> | number
          }
        }
      }
      LessonProgress: {
        payload: Prisma.$LessonProgressPayload<ExtArgs>
        fields: Prisma.LessonProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LessonProgressFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LessonProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LessonProgressFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LessonProgressPayload>
          }
          findFirst: {
            args: Prisma.LessonProgressFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LessonProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LessonProgressFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LessonProgressPayload>
          }
          findMany: {
            args: Prisma.LessonProgressFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LessonProgressPayload>[]
          }
          create: {
            args: Prisma.LessonProgressCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LessonProgressPayload>
          }
          createMany: {
            args: Prisma.LessonProgressCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LessonProgressCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LessonProgressPayload>[]
          }
          delete: {
            args: Prisma.LessonProgressDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LessonProgressPayload>
          }
          update: {
            args: Prisma.LessonProgressUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LessonProgressPayload>
          }
          deleteMany: {
            args: Prisma.LessonProgressDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LessonProgressUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LessonProgressUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LessonProgressPayload>
          }
          aggregate: {
            args: Prisma.LessonProgressAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLessonProgress>
          }
          groupBy: {
            args: Prisma.LessonProgressGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LessonProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.LessonProgressCountArgs<ExtArgs>,
            result: $Utils.Optional<LessonProgressCountAggregateOutputType> | number
          }
        }
      }
      Badge: {
        payload: Prisma.$BadgePayload<ExtArgs>
        fields: Prisma.BadgeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BadgeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BadgePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BadgeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          findFirst: {
            args: Prisma.BadgeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BadgePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BadgeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          findMany: {
            args: Prisma.BadgeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>[]
          }
          create: {
            args: Prisma.BadgeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          createMany: {
            args: Prisma.BadgeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BadgeCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>[]
          }
          delete: {
            args: Prisma.BadgeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          update: {
            args: Prisma.BadgeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          deleteMany: {
            args: Prisma.BadgeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BadgeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BadgeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          aggregate: {
            args: Prisma.BadgeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBadge>
          }
          groupBy: {
            args: Prisma.BadgeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BadgeGroupByOutputType>[]
          }
          count: {
            args: Prisma.BadgeCountArgs<ExtArgs>,
            result: $Utils.Optional<BadgeCountAggregateOutputType> | number
          }
        }
      }
      UserBadge: {
        payload: Prisma.$UserBadgePayload<ExtArgs>
        fields: Prisma.UserBadgeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserBadgeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserBadgeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>
          }
          findFirst: {
            args: Prisma.UserBadgeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserBadgeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>
          }
          findMany: {
            args: Prisma.UserBadgeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>[]
          }
          create: {
            args: Prisma.UserBadgeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>
          }
          createMany: {
            args: Prisma.UserBadgeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserBadgeCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>[]
          }
          delete: {
            args: Prisma.UserBadgeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>
          }
          update: {
            args: Prisma.UserBadgeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>
          }
          deleteMany: {
            args: Prisma.UserBadgeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserBadgeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserBadgeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>
          }
          aggregate: {
            args: Prisma.UserBadgeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserBadge>
          }
          groupBy: {
            args: Prisma.UserBadgeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserBadgeGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserBadgeCountArgs<ExtArgs>,
            result: $Utils.Optional<UserBadgeCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>,
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>,
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      SrhiAnswer: {
        payload: Prisma.$SrhiAnswerPayload<ExtArgs>
        fields: Prisma.SrhiAnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SrhiAnswerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SrhiAnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SrhiAnswerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SrhiAnswerPayload>
          }
          findFirst: {
            args: Prisma.SrhiAnswerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SrhiAnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SrhiAnswerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SrhiAnswerPayload>
          }
          findMany: {
            args: Prisma.SrhiAnswerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SrhiAnswerPayload>[]
          }
          create: {
            args: Prisma.SrhiAnswerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SrhiAnswerPayload>
          }
          createMany: {
            args: Prisma.SrhiAnswerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SrhiAnswerCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SrhiAnswerPayload>[]
          }
          delete: {
            args: Prisma.SrhiAnswerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SrhiAnswerPayload>
          }
          update: {
            args: Prisma.SrhiAnswerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SrhiAnswerPayload>
          }
          deleteMany: {
            args: Prisma.SrhiAnswerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SrhiAnswerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SrhiAnswerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SrhiAnswerPayload>
          }
          aggregate: {
            args: Prisma.SrhiAnswerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSrhiAnswer>
          }
          groupBy: {
            args: Prisma.SrhiAnswerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SrhiAnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.SrhiAnswerCountArgs<ExtArgs>,
            result: $Utils.Optional<SrhiAnswerCountAggregateOutputType> | number
          }
        }
      }
      LessonReviews: {
        payload: Prisma.$LessonReviewsPayload<ExtArgs>
        fields: Prisma.LessonReviewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LessonReviewsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LessonReviewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LessonReviewsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LessonReviewsPayload>
          }
          findFirst: {
            args: Prisma.LessonReviewsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LessonReviewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LessonReviewsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LessonReviewsPayload>
          }
          findMany: {
            args: Prisma.LessonReviewsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LessonReviewsPayload>[]
          }
          create: {
            args: Prisma.LessonReviewsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LessonReviewsPayload>
          }
          createMany: {
            args: Prisma.LessonReviewsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LessonReviewsCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LessonReviewsPayload>[]
          }
          delete: {
            args: Prisma.LessonReviewsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LessonReviewsPayload>
          }
          update: {
            args: Prisma.LessonReviewsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LessonReviewsPayload>
          }
          deleteMany: {
            args: Prisma.LessonReviewsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LessonReviewsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LessonReviewsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LessonReviewsPayload>
          }
          aggregate: {
            args: Prisma.LessonReviewsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLessonReviews>
          }
          groupBy: {
            args: Prisma.LessonReviewsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LessonReviewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.LessonReviewsCountArgs<ExtArgs>,
            result: $Utils.Optional<LessonReviewsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
    Points: number
    LessonProgress: number
    UserBadge: number
    Comment: number
    LessonReviews: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    Points?: boolean | UserCountOutputTypeCountPointsArgs
    LessonProgress?: boolean | UserCountOutputTypeCountLessonProgressArgs
    UserBadge?: boolean | UserCountOutputTypeCountUserBadgeArgs
    Comment?: boolean | UserCountOutputTypeCountCommentArgs
    LessonReviews?: boolean | UserCountOutputTypeCountLessonReviewsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLessonProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonProgressWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserBadgeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserBadgeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLessonReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonReviewsWhereInput
  }


  /**
   * Count Type LessonCountOutputType
   */

  export type LessonCountOutputType = {
    LessonProgress: number
    Comment: number
    LessonReviews: number
  }

  export type LessonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    LessonProgress?: boolean | LessonCountOutputTypeCountLessonProgressArgs
    Comment?: boolean | LessonCountOutputTypeCountCommentArgs
    LessonReviews?: boolean | LessonCountOutputTypeCountLessonReviewsArgs
  }

  // Custom InputTypes
  /**
   * LessonCountOutputType without action
   */
  export type LessonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonCountOutputType
     */
    select?: LessonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LessonCountOutputType without action
   */
  export type LessonCountOutputTypeCountLessonProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonProgressWhereInput
  }

  /**
   * LessonCountOutputType without action
   */
  export type LessonCountOutputTypeCountCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * LessonCountOutputType without action
   */
  export type LessonCountOutputTypeCountLessonReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonReviewsWhereInput
  }


  /**
   * Count Type BadgeCountOutputType
   */

  export type BadgeCountOutputType = {
    UserBadge: number
  }

  export type BadgeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserBadge?: boolean | BadgeCountOutputTypeCountUserBadgeArgs
  }

  // Custom InputTypes
  /**
   * BadgeCountOutputType without action
   */
  export type BadgeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgeCountOutputType
     */
    select?: BadgeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BadgeCountOutputType without action
   */
  export type BadgeCountOutputTypeCountUserBadgeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserBadgeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AccountFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AccountFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AccountFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
    **/
    create<T extends AccountCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountCreateArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends AccountCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
    **/
    delete<T extends AccountDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AccountUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AccountDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AccountUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
    **/
    upsert<T extends AccountUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Account model
   */ 
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SessionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SessionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SessionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
    **/
    create<T extends SessionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionCreateArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends SessionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
    **/
    delete<T extends SessionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SessionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SessionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SessionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
    **/
    upsert<T extends SessionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Session model
   */ 
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    Points?: boolean | User$PointsArgs<ExtArgs>
    LessonProgress?: boolean | User$LessonProgressArgs<ExtArgs>
    UserBadge?: boolean | User$UserBadgeArgs<ExtArgs>
    Comment?: boolean | User$CommentArgs<ExtArgs>
    LessonReviews?: boolean | User$LessonReviewsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    Points?: boolean | User$PointsArgs<ExtArgs>
    LessonProgress?: boolean | User$LessonProgressArgs<ExtArgs>
    UserBadge?: boolean | User$UserBadgeArgs<ExtArgs>
    Comment?: boolean | User$CommentArgs<ExtArgs>
    LessonReviews?: boolean | User$LessonReviewsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      Points: Prisma.$PointPayload<ExtArgs>[]
      LessonProgress: Prisma.$LessonProgressPayload<ExtArgs>[]
      UserBadge: Prisma.$UserBadgePayload<ExtArgs>[]
      Comment: Prisma.$CommentPayload<ExtArgs>[]
      LessonReviews: Prisma.$LessonReviewsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      emailVerified: Date | null
      image: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends UserCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findMany'> | Null>;

    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findMany'> | Null>;

    Points<T extends User$PointsArgs<ExtArgs> = {}>(args?: Subset<T, User$PointsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, 'findMany'> | Null>;

    LessonProgress<T extends User$LessonProgressArgs<ExtArgs> = {}>(args?: Subset<T, User$LessonProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, 'findMany'> | Null>;

    UserBadge<T extends User$UserBadgeArgs<ExtArgs> = {}>(args?: Subset<T, User$UserBadgeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, 'findMany'> | Null>;

    Comment<T extends User$CommentArgs<ExtArgs> = {}>(args?: Subset<T, User$CommentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findMany'> | Null>;

    LessonReviews<T extends User$LessonReviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$LessonReviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonReviewsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.Points
   */
  export type User$PointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    where?: PointWhereInput
    orderBy?: PointOrderByWithRelationInput | PointOrderByWithRelationInput[]
    cursor?: PointWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PointScalarFieldEnum | PointScalarFieldEnum[]
  }

  /**
   * User.LessonProgress
   */
  export type User$LessonProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
    where?: LessonProgressWhereInput
    orderBy?: LessonProgressOrderByWithRelationInput | LessonProgressOrderByWithRelationInput[]
    cursor?: LessonProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LessonProgressScalarFieldEnum | LessonProgressScalarFieldEnum[]
  }

  /**
   * User.UserBadge
   */
  export type User$UserBadgeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    where?: UserBadgeWhereInput
    orderBy?: UserBadgeOrderByWithRelationInput | UserBadgeOrderByWithRelationInput[]
    cursor?: UserBadgeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserBadgeScalarFieldEnum | UserBadgeScalarFieldEnum[]
  }

  /**
   * User.Comment
   */
  export type User$CommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User.LessonReviews
   */
  export type User$LessonReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonReviews
     */
    select?: LessonReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonReviewsInclude<ExtArgs> | null
    where?: LessonReviewsWhereInput
    orderBy?: LessonReviewsOrderByWithRelationInput | LessonReviewsOrderByWithRelationInput[]
    cursor?: LessonReviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LessonReviewsScalarFieldEnum | LessonReviewsScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Point
   */

  export type AggregatePoint = {
    _count: PointCountAggregateOutputType | null
    _avg: PointAvgAggregateOutputType | null
    _sum: PointSumAggregateOutputType | null
    _min: PointMinAggregateOutputType | null
    _max: PointMaxAggregateOutputType | null
  }

  export type PointAvgAggregateOutputType = {
    basicPoint: number | null
    activityPoint: number | null
  }

  export type PointSumAggregateOutputType = {
    basicPoint: number | null
    activityPoint: number | null
  }

  export type PointMinAggregateOutputType = {
    userId: string | null
    basicPoint: number | null
    activityPoint: number | null
  }

  export type PointMaxAggregateOutputType = {
    userId: string | null
    basicPoint: number | null
    activityPoint: number | null
  }

  export type PointCountAggregateOutputType = {
    userId: number
    basicPoint: number
    activityPoint: number
    _all: number
  }


  export type PointAvgAggregateInputType = {
    basicPoint?: true
    activityPoint?: true
  }

  export type PointSumAggregateInputType = {
    basicPoint?: true
    activityPoint?: true
  }

  export type PointMinAggregateInputType = {
    userId?: true
    basicPoint?: true
    activityPoint?: true
  }

  export type PointMaxAggregateInputType = {
    userId?: true
    basicPoint?: true
    activityPoint?: true
  }

  export type PointCountAggregateInputType = {
    userId?: true
    basicPoint?: true
    activityPoint?: true
    _all?: true
  }

  export type PointAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Point to aggregate.
     */
    where?: PointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points to fetch.
     */
    orderBy?: PointOrderByWithRelationInput | PointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Points
    **/
    _count?: true | PointCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PointAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PointSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PointMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PointMaxAggregateInputType
  }

  export type GetPointAggregateType<T extends PointAggregateArgs> = {
        [P in keyof T & keyof AggregatePoint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePoint[P]>
      : GetScalarType<T[P], AggregatePoint[P]>
  }




  export type PointGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointWhereInput
    orderBy?: PointOrderByWithAggregationInput | PointOrderByWithAggregationInput[]
    by: PointScalarFieldEnum[] | PointScalarFieldEnum
    having?: PointScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PointCountAggregateInputType | true
    _avg?: PointAvgAggregateInputType
    _sum?: PointSumAggregateInputType
    _min?: PointMinAggregateInputType
    _max?: PointMaxAggregateInputType
  }

  export type PointGroupByOutputType = {
    userId: string
    basicPoint: number
    activityPoint: number
    _count: PointCountAggregateOutputType | null
    _avg: PointAvgAggregateOutputType | null
    _sum: PointSumAggregateOutputType | null
    _min: PointMinAggregateOutputType | null
    _max: PointMaxAggregateOutputType | null
  }

  type GetPointGroupByPayload<T extends PointGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PointGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PointGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PointGroupByOutputType[P]>
            : GetScalarType<T[P], PointGroupByOutputType[P]>
        }
      >
    >


  export type PointSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    basicPoint?: boolean
    activityPoint?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["point"]>

  export type PointSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    basicPoint?: boolean
    activityPoint?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["point"]>

  export type PointSelectScalar = {
    userId?: boolean
    basicPoint?: boolean
    activityPoint?: boolean
  }

  export type PointInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PointIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PointPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Point"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      basicPoint: number
      activityPoint: number
    }, ExtArgs["result"]["point"]>
    composites: {}
  }

  type PointGetPayload<S extends boolean | null | undefined | PointDefaultArgs> = $Result.GetResult<Prisma.$PointPayload, S>

  type PointCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PointFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PointCountAggregateInputType | true
    }

  export interface PointDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Point'], meta: { name: 'Point' } }
    /**
     * Find zero or one Point that matches the filter.
     * @param {PointFindUniqueArgs} args - Arguments to find a Point
     * @example
     * // Get one Point
     * const point = await prisma.point.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PointFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PointFindUniqueArgs<ExtArgs>>
    ): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Point that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PointFindUniqueOrThrowArgs} args - Arguments to find a Point
     * @example
     * // Get one Point
     * const point = await prisma.point.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PointFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PointFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Point that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointFindFirstArgs} args - Arguments to find a Point
     * @example
     * // Get one Point
     * const point = await prisma.point.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PointFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PointFindFirstArgs<ExtArgs>>
    ): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Point that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointFindFirstOrThrowArgs} args - Arguments to find a Point
     * @example
     * // Get one Point
     * const point = await prisma.point.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PointFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PointFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Points that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Points
     * const points = await prisma.point.findMany()
     * 
     * // Get first 10 Points
     * const points = await prisma.point.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const pointWithUserIdOnly = await prisma.point.findMany({ select: { userId: true } })
     * 
    **/
    findMany<T extends PointFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PointFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Point.
     * @param {PointCreateArgs} args - Arguments to create a Point.
     * @example
     * // Create one Point
     * const Point = await prisma.point.create({
     *   data: {
     *     // ... data to create a Point
     *   }
     * })
     * 
    **/
    create<T extends PointCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PointCreateArgs<ExtArgs>>
    ): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Points.
     * @param {PointCreateManyArgs} args - Arguments to create many Points.
     * @example
     * // Create many Points
     * const point = await prisma.point.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends PointCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PointCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Points and returns the data saved in the database.
     * @param {PointCreateManyAndReturnArgs} args - Arguments to create many Points.
     * @example
     * // Create many Points
     * const point = await prisma.point.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Points and only return the `userId`
     * const pointWithUserIdOnly = await prisma.point.createManyAndReturn({ 
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends PointCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, PointCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Point.
     * @param {PointDeleteArgs} args - Arguments to delete one Point.
     * @example
     * // Delete one Point
     * const Point = await prisma.point.delete({
     *   where: {
     *     // ... filter to delete one Point
     *   }
     * })
     * 
    **/
    delete<T extends PointDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PointDeleteArgs<ExtArgs>>
    ): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Point.
     * @param {PointUpdateArgs} args - Arguments to update one Point.
     * @example
     * // Update one Point
     * const point = await prisma.point.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PointUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PointUpdateArgs<ExtArgs>>
    ): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Points.
     * @param {PointDeleteManyArgs} args - Arguments to filter Points to delete.
     * @example
     * // Delete a few Points
     * const { count } = await prisma.point.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PointDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PointDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Points.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Points
     * const point = await prisma.point.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PointUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PointUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Point.
     * @param {PointUpsertArgs} args - Arguments to update or create a Point.
     * @example
     * // Update or create a Point
     * const point = await prisma.point.upsert({
     *   create: {
     *     // ... data to create a Point
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Point we want to update
     *   }
     * })
    **/
    upsert<T extends PointUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PointUpsertArgs<ExtArgs>>
    ): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Points.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointCountArgs} args - Arguments to filter Points to count.
     * @example
     * // Count the number of Points
     * const count = await prisma.point.count({
     *   where: {
     *     // ... the filter for the Points we want to count
     *   }
     * })
    **/
    count<T extends PointCountArgs>(
      args?: Subset<T, PointCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PointCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Point.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PointAggregateArgs>(args: Subset<T, PointAggregateArgs>): Prisma.PrismaPromise<GetPointAggregateType<T>>

    /**
     * Group by Point.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PointGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PointGroupByArgs['orderBy'] }
        : { orderBy?: PointGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PointGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPointGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Point model
   */
  readonly fields: PointFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Point.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PointClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Point model
   */ 
  interface PointFieldRefs {
    readonly userId: FieldRef<"Point", 'String'>
    readonly basicPoint: FieldRef<"Point", 'Int'>
    readonly activityPoint: FieldRef<"Point", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Point findUnique
   */
  export type PointFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter, which Point to fetch.
     */
    where: PointWhereUniqueInput
  }

  /**
   * Point findUniqueOrThrow
   */
  export type PointFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter, which Point to fetch.
     */
    where: PointWhereUniqueInput
  }

  /**
   * Point findFirst
   */
  export type PointFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter, which Point to fetch.
     */
    where?: PointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points to fetch.
     */
    orderBy?: PointOrderByWithRelationInput | PointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Points.
     */
    cursor?: PointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Points.
     */
    distinct?: PointScalarFieldEnum | PointScalarFieldEnum[]
  }

  /**
   * Point findFirstOrThrow
   */
  export type PointFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter, which Point to fetch.
     */
    where?: PointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points to fetch.
     */
    orderBy?: PointOrderByWithRelationInput | PointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Points.
     */
    cursor?: PointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Points.
     */
    distinct?: PointScalarFieldEnum | PointScalarFieldEnum[]
  }

  /**
   * Point findMany
   */
  export type PointFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter, which Points to fetch.
     */
    where?: PointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points to fetch.
     */
    orderBy?: PointOrderByWithRelationInput | PointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Points.
     */
    cursor?: PointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points.
     */
    skip?: number
    distinct?: PointScalarFieldEnum | PointScalarFieldEnum[]
  }

  /**
   * Point create
   */
  export type PointCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * The data needed to create a Point.
     */
    data: XOR<PointCreateInput, PointUncheckedCreateInput>
  }

  /**
   * Point createMany
   */
  export type PointCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Points.
     */
    data: PointCreateManyInput | PointCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Point createManyAndReturn
   */
  export type PointCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Points.
     */
    data: PointCreateManyInput | PointCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Point update
   */
  export type PointUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * The data needed to update a Point.
     */
    data: XOR<PointUpdateInput, PointUncheckedUpdateInput>
    /**
     * Choose, which Point to update.
     */
    where: PointWhereUniqueInput
  }

  /**
   * Point updateMany
   */
  export type PointUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Points.
     */
    data: XOR<PointUpdateManyMutationInput, PointUncheckedUpdateManyInput>
    /**
     * Filter which Points to update
     */
    where?: PointWhereInput
  }

  /**
   * Point upsert
   */
  export type PointUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * The filter to search for the Point to update in case it exists.
     */
    where: PointWhereUniqueInput
    /**
     * In case the Point found by the `where` argument doesn't exist, create a new Point with this data.
     */
    create: XOR<PointCreateInput, PointUncheckedCreateInput>
    /**
     * In case the Point was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PointUpdateInput, PointUncheckedUpdateInput>
  }

  /**
   * Point delete
   */
  export type PointDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter which Point to delete.
     */
    where: PointWhereUniqueInput
  }

  /**
   * Point deleteMany
   */
  export type PointDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Points to delete
     */
    where?: PointWhereInput
  }

  /**
   * Point without action
   */
  export type PointDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
  }


  /**
   * Model Lesson
   */

  export type AggregateLesson = {
    _count: LessonCountAggregateOutputType | null
    _avg: LessonAvgAggregateOutputType | null
    _sum: LessonSumAggregateOutputType | null
    _min: LessonMinAggregateOutputType | null
    _max: LessonMaxAggregateOutputType | null
  }

  export type LessonAvgAggregateOutputType = {
    lessonId: number | null
  }

  export type LessonSumAggregateOutputType = {
    lessonId: number | null
  }

  export type LessonMinAggregateOutputType = {
    lessonId: number | null
    title: string | null
  }

  export type LessonMaxAggregateOutputType = {
    lessonId: number | null
    title: string | null
  }

  export type LessonCountAggregateOutputType = {
    lessonId: number
    title: number
    _all: number
  }


  export type LessonAvgAggregateInputType = {
    lessonId?: true
  }

  export type LessonSumAggregateInputType = {
    lessonId?: true
  }

  export type LessonMinAggregateInputType = {
    lessonId?: true
    title?: true
  }

  export type LessonMaxAggregateInputType = {
    lessonId?: true
    title?: true
  }

  export type LessonCountAggregateInputType = {
    lessonId?: true
    title?: true
    _all?: true
  }

  export type LessonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lesson to aggregate.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lessons
    **/
    _count?: true | LessonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LessonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LessonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LessonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LessonMaxAggregateInputType
  }

  export type GetLessonAggregateType<T extends LessonAggregateArgs> = {
        [P in keyof T & keyof AggregateLesson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLesson[P]>
      : GetScalarType<T[P], AggregateLesson[P]>
  }




  export type LessonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonWhereInput
    orderBy?: LessonOrderByWithAggregationInput | LessonOrderByWithAggregationInput[]
    by: LessonScalarFieldEnum[] | LessonScalarFieldEnum
    having?: LessonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LessonCountAggregateInputType | true
    _avg?: LessonAvgAggregateInputType
    _sum?: LessonSumAggregateInputType
    _min?: LessonMinAggregateInputType
    _max?: LessonMaxAggregateInputType
  }

  export type LessonGroupByOutputType = {
    lessonId: number
    title: string
    _count: LessonCountAggregateOutputType | null
    _avg: LessonAvgAggregateOutputType | null
    _sum: LessonSumAggregateOutputType | null
    _min: LessonMinAggregateOutputType | null
    _max: LessonMaxAggregateOutputType | null
  }

  type GetLessonGroupByPayload<T extends LessonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LessonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LessonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LessonGroupByOutputType[P]>
            : GetScalarType<T[P], LessonGroupByOutputType[P]>
        }
      >
    >


  export type LessonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    lessonId?: boolean
    title?: boolean
    LessonProgress?: boolean | Lesson$LessonProgressArgs<ExtArgs>
    Comment?: boolean | Lesson$CommentArgs<ExtArgs>
    LessonReviews?: boolean | Lesson$LessonReviewsArgs<ExtArgs>
    _count?: boolean | LessonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lesson"]>

  export type LessonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    lessonId?: boolean
    title?: boolean
  }, ExtArgs["result"]["lesson"]>

  export type LessonSelectScalar = {
    lessonId?: boolean
    title?: boolean
  }

  export type LessonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    LessonProgress?: boolean | Lesson$LessonProgressArgs<ExtArgs>
    Comment?: boolean | Lesson$CommentArgs<ExtArgs>
    LessonReviews?: boolean | Lesson$LessonReviewsArgs<ExtArgs>
    _count?: boolean | LessonCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LessonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LessonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lesson"
    objects: {
      LessonProgress: Prisma.$LessonProgressPayload<ExtArgs>[]
      Comment: Prisma.$CommentPayload<ExtArgs>[]
      LessonReviews: Prisma.$LessonReviewsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      lessonId: number
      title: string
    }, ExtArgs["result"]["lesson"]>
    composites: {}
  }

  type LessonGetPayload<S extends boolean | null | undefined | LessonDefaultArgs> = $Result.GetResult<Prisma.$LessonPayload, S>

  type LessonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LessonFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LessonCountAggregateInputType | true
    }

  export interface LessonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lesson'], meta: { name: 'Lesson' } }
    /**
     * Find zero or one Lesson that matches the filter.
     * @param {LessonFindUniqueArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LessonFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LessonFindUniqueArgs<ExtArgs>>
    ): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Lesson that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LessonFindUniqueOrThrowArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LessonFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LessonFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Lesson that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindFirstArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LessonFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LessonFindFirstArgs<ExtArgs>>
    ): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Lesson that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindFirstOrThrowArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LessonFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LessonFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Lessons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lessons
     * const lessons = await prisma.lesson.findMany()
     * 
     * // Get first 10 Lessons
     * const lessons = await prisma.lesson.findMany({ take: 10 })
     * 
     * // Only select the `lessonId`
     * const lessonWithLessonIdOnly = await prisma.lesson.findMany({ select: { lessonId: true } })
     * 
    **/
    findMany<T extends LessonFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LessonFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Lesson.
     * @param {LessonCreateArgs} args - Arguments to create a Lesson.
     * @example
     * // Create one Lesson
     * const Lesson = await prisma.lesson.create({
     *   data: {
     *     // ... data to create a Lesson
     *   }
     * })
     * 
    **/
    create<T extends LessonCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LessonCreateArgs<ExtArgs>>
    ): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Lessons.
     * @param {LessonCreateManyArgs} args - Arguments to create many Lessons.
     * @example
     * // Create many Lessons
     * const lesson = await prisma.lesson.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends LessonCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LessonCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lessons and returns the data saved in the database.
     * @param {LessonCreateManyAndReturnArgs} args - Arguments to create many Lessons.
     * @example
     * // Create many Lessons
     * const lesson = await prisma.lesson.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lessons and only return the `lessonId`
     * const lessonWithLessonIdOnly = await prisma.lesson.createManyAndReturn({ 
     *   select: { lessonId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends LessonCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, LessonCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Lesson.
     * @param {LessonDeleteArgs} args - Arguments to delete one Lesson.
     * @example
     * // Delete one Lesson
     * const Lesson = await prisma.lesson.delete({
     *   where: {
     *     // ... filter to delete one Lesson
     *   }
     * })
     * 
    **/
    delete<T extends LessonDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LessonDeleteArgs<ExtArgs>>
    ): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Lesson.
     * @param {LessonUpdateArgs} args - Arguments to update one Lesson.
     * @example
     * // Update one Lesson
     * const lesson = await prisma.lesson.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LessonUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LessonUpdateArgs<ExtArgs>>
    ): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Lessons.
     * @param {LessonDeleteManyArgs} args - Arguments to filter Lessons to delete.
     * @example
     * // Delete a few Lessons
     * const { count } = await prisma.lesson.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LessonDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LessonDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lessons
     * const lesson = await prisma.lesson.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LessonUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LessonUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Lesson.
     * @param {LessonUpsertArgs} args - Arguments to update or create a Lesson.
     * @example
     * // Update or create a Lesson
     * const lesson = await prisma.lesson.upsert({
     *   create: {
     *     // ... data to create a Lesson
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lesson we want to update
     *   }
     * })
    **/
    upsert<T extends LessonUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LessonUpsertArgs<ExtArgs>>
    ): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonCountArgs} args - Arguments to filter Lessons to count.
     * @example
     * // Count the number of Lessons
     * const count = await prisma.lesson.count({
     *   where: {
     *     // ... the filter for the Lessons we want to count
     *   }
     * })
    **/
    count<T extends LessonCountArgs>(
      args?: Subset<T, LessonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LessonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lesson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LessonAggregateArgs>(args: Subset<T, LessonAggregateArgs>): Prisma.PrismaPromise<GetLessonAggregateType<T>>

    /**
     * Group by Lesson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LessonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LessonGroupByArgs['orderBy'] }
        : { orderBy?: LessonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LessonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLessonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lesson model
   */
  readonly fields: LessonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lesson.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LessonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    LessonProgress<T extends Lesson$LessonProgressArgs<ExtArgs> = {}>(args?: Subset<T, Lesson$LessonProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, 'findMany'> | Null>;

    Comment<T extends Lesson$CommentArgs<ExtArgs> = {}>(args?: Subset<T, Lesson$CommentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findMany'> | Null>;

    LessonReviews<T extends Lesson$LessonReviewsArgs<ExtArgs> = {}>(args?: Subset<T, Lesson$LessonReviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonReviewsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Lesson model
   */ 
  interface LessonFieldRefs {
    readonly lessonId: FieldRef<"Lesson", 'Int'>
    readonly title: FieldRef<"Lesson", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Lesson findUnique
   */
  export type LessonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson findUniqueOrThrow
   */
  export type LessonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson findFirst
   */
  export type LessonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lessons.
     */
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson findFirstOrThrow
   */
  export type LessonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lessons.
     */
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson findMany
   */
  export type LessonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lessons to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson create
   */
  export type LessonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The data needed to create a Lesson.
     */
    data: XOR<LessonCreateInput, LessonUncheckedCreateInput>
  }

  /**
   * Lesson createMany
   */
  export type LessonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lessons.
     */
    data: LessonCreateManyInput | LessonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lesson createManyAndReturn
   */
  export type LessonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Lessons.
     */
    data: LessonCreateManyInput | LessonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lesson update
   */
  export type LessonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The data needed to update a Lesson.
     */
    data: XOR<LessonUpdateInput, LessonUncheckedUpdateInput>
    /**
     * Choose, which Lesson to update.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson updateMany
   */
  export type LessonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lessons.
     */
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyInput>
    /**
     * Filter which Lessons to update
     */
    where?: LessonWhereInput
  }

  /**
   * Lesson upsert
   */
  export type LessonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The filter to search for the Lesson to update in case it exists.
     */
    where: LessonWhereUniqueInput
    /**
     * In case the Lesson found by the `where` argument doesn't exist, create a new Lesson with this data.
     */
    create: XOR<LessonCreateInput, LessonUncheckedCreateInput>
    /**
     * In case the Lesson was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LessonUpdateInput, LessonUncheckedUpdateInput>
  }

  /**
   * Lesson delete
   */
  export type LessonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter which Lesson to delete.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson deleteMany
   */
  export type LessonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lessons to delete
     */
    where?: LessonWhereInput
  }

  /**
   * Lesson.LessonProgress
   */
  export type Lesson$LessonProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
    where?: LessonProgressWhereInput
    orderBy?: LessonProgressOrderByWithRelationInput | LessonProgressOrderByWithRelationInput[]
    cursor?: LessonProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LessonProgressScalarFieldEnum | LessonProgressScalarFieldEnum[]
  }

  /**
   * Lesson.Comment
   */
  export type Lesson$CommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Lesson.LessonReviews
   */
  export type Lesson$LessonReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonReviews
     */
    select?: LessonReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonReviewsInclude<ExtArgs> | null
    where?: LessonReviewsWhereInput
    orderBy?: LessonReviewsOrderByWithRelationInput | LessonReviewsOrderByWithRelationInput[]
    cursor?: LessonReviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LessonReviewsScalarFieldEnum | LessonReviewsScalarFieldEnum[]
  }

  /**
   * Lesson without action
   */
  export type LessonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
  }


  /**
   * Model LessonProgress
   */

  export type AggregateLessonProgress = {
    _count: LessonProgressCountAggregateOutputType | null
    _avg: LessonProgressAvgAggregateOutputType | null
    _sum: LessonProgressSumAggregateOutputType | null
    _min: LessonProgressMinAggregateOutputType | null
    _max: LessonProgressMaxAggregateOutputType | null
  }

  export type LessonProgressAvgAggregateOutputType = {
    lessonId: number | null
  }

  export type LessonProgressSumAggregateOutputType = {
    lessonId: number | null
  }

  export type LessonProgressMinAggregateOutputType = {
    lessonId: number | null
    userId: string | null
    completed: boolean | null
    completedAt: Date | null
  }

  export type LessonProgressMaxAggregateOutputType = {
    lessonId: number | null
    userId: string | null
    completed: boolean | null
    completedAt: Date | null
  }

  export type LessonProgressCountAggregateOutputType = {
    lessonId: number
    userId: number
    completed: number
    completedAt: number
    _all: number
  }


  export type LessonProgressAvgAggregateInputType = {
    lessonId?: true
  }

  export type LessonProgressSumAggregateInputType = {
    lessonId?: true
  }

  export type LessonProgressMinAggregateInputType = {
    lessonId?: true
    userId?: true
    completed?: true
    completedAt?: true
  }

  export type LessonProgressMaxAggregateInputType = {
    lessonId?: true
    userId?: true
    completed?: true
    completedAt?: true
  }

  export type LessonProgressCountAggregateInputType = {
    lessonId?: true
    userId?: true
    completed?: true
    completedAt?: true
    _all?: true
  }

  export type LessonProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LessonProgress to aggregate.
     */
    where?: LessonProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonProgresses to fetch.
     */
    orderBy?: LessonProgressOrderByWithRelationInput | LessonProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LessonProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LessonProgresses
    **/
    _count?: true | LessonProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LessonProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LessonProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LessonProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LessonProgressMaxAggregateInputType
  }

  export type GetLessonProgressAggregateType<T extends LessonProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateLessonProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLessonProgress[P]>
      : GetScalarType<T[P], AggregateLessonProgress[P]>
  }




  export type LessonProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonProgressWhereInput
    orderBy?: LessonProgressOrderByWithAggregationInput | LessonProgressOrderByWithAggregationInput[]
    by: LessonProgressScalarFieldEnum[] | LessonProgressScalarFieldEnum
    having?: LessonProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LessonProgressCountAggregateInputType | true
    _avg?: LessonProgressAvgAggregateInputType
    _sum?: LessonProgressSumAggregateInputType
    _min?: LessonProgressMinAggregateInputType
    _max?: LessonProgressMaxAggregateInputType
  }

  export type LessonProgressGroupByOutputType = {
    lessonId: number
    userId: string
    completed: boolean
    completedAt: Date
    _count: LessonProgressCountAggregateOutputType | null
    _avg: LessonProgressAvgAggregateOutputType | null
    _sum: LessonProgressSumAggregateOutputType | null
    _min: LessonProgressMinAggregateOutputType | null
    _max: LessonProgressMaxAggregateOutputType | null
  }

  type GetLessonProgressGroupByPayload<T extends LessonProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LessonProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LessonProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LessonProgressGroupByOutputType[P]>
            : GetScalarType<T[P], LessonProgressGroupByOutputType[P]>
        }
      >
    >


  export type LessonProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    lessonId?: boolean
    userId?: boolean
    completed?: boolean
    completedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lessonProgress"]>

  export type LessonProgressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    lessonId?: boolean
    userId?: boolean
    completed?: boolean
    completedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lessonProgress"]>

  export type LessonProgressSelectScalar = {
    lessonId?: boolean
    userId?: boolean
    completed?: boolean
    completedAt?: boolean
  }

  export type LessonProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }
  export type LessonProgressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }

  export type $LessonProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LessonProgress"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      lesson: Prisma.$LessonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      lessonId: number
      userId: string
      completed: boolean
      completedAt: Date
    }, ExtArgs["result"]["lessonProgress"]>
    composites: {}
  }

  type LessonProgressGetPayload<S extends boolean | null | undefined | LessonProgressDefaultArgs> = $Result.GetResult<Prisma.$LessonProgressPayload, S>

  type LessonProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LessonProgressFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LessonProgressCountAggregateInputType | true
    }

  export interface LessonProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LessonProgress'], meta: { name: 'LessonProgress' } }
    /**
     * Find zero or one LessonProgress that matches the filter.
     * @param {LessonProgressFindUniqueArgs} args - Arguments to find a LessonProgress
     * @example
     * // Get one LessonProgress
     * const lessonProgress = await prisma.lessonProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LessonProgressFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LessonProgressFindUniqueArgs<ExtArgs>>
    ): Prisma__LessonProgressClient<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one LessonProgress that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LessonProgressFindUniqueOrThrowArgs} args - Arguments to find a LessonProgress
     * @example
     * // Get one LessonProgress
     * const lessonProgress = await prisma.lessonProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LessonProgressFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LessonProgressFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LessonProgressClient<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first LessonProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonProgressFindFirstArgs} args - Arguments to find a LessonProgress
     * @example
     * // Get one LessonProgress
     * const lessonProgress = await prisma.lessonProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LessonProgressFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LessonProgressFindFirstArgs<ExtArgs>>
    ): Prisma__LessonProgressClient<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first LessonProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonProgressFindFirstOrThrowArgs} args - Arguments to find a LessonProgress
     * @example
     * // Get one LessonProgress
     * const lessonProgress = await prisma.lessonProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LessonProgressFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LessonProgressFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LessonProgressClient<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more LessonProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LessonProgresses
     * const lessonProgresses = await prisma.lessonProgress.findMany()
     * 
     * // Get first 10 LessonProgresses
     * const lessonProgresses = await prisma.lessonProgress.findMany({ take: 10 })
     * 
     * // Only select the `lessonId`
     * const lessonProgressWithLessonIdOnly = await prisma.lessonProgress.findMany({ select: { lessonId: true } })
     * 
    **/
    findMany<T extends LessonProgressFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LessonProgressFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a LessonProgress.
     * @param {LessonProgressCreateArgs} args - Arguments to create a LessonProgress.
     * @example
     * // Create one LessonProgress
     * const LessonProgress = await prisma.lessonProgress.create({
     *   data: {
     *     // ... data to create a LessonProgress
     *   }
     * })
     * 
    **/
    create<T extends LessonProgressCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LessonProgressCreateArgs<ExtArgs>>
    ): Prisma__LessonProgressClient<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many LessonProgresses.
     * @param {LessonProgressCreateManyArgs} args - Arguments to create many LessonProgresses.
     * @example
     * // Create many LessonProgresses
     * const lessonProgress = await prisma.lessonProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends LessonProgressCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LessonProgressCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LessonProgresses and returns the data saved in the database.
     * @param {LessonProgressCreateManyAndReturnArgs} args - Arguments to create many LessonProgresses.
     * @example
     * // Create many LessonProgresses
     * const lessonProgress = await prisma.lessonProgress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LessonProgresses and only return the `lessonId`
     * const lessonProgressWithLessonIdOnly = await prisma.lessonProgress.createManyAndReturn({ 
     *   select: { lessonId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends LessonProgressCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, LessonProgressCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a LessonProgress.
     * @param {LessonProgressDeleteArgs} args - Arguments to delete one LessonProgress.
     * @example
     * // Delete one LessonProgress
     * const LessonProgress = await prisma.lessonProgress.delete({
     *   where: {
     *     // ... filter to delete one LessonProgress
     *   }
     * })
     * 
    **/
    delete<T extends LessonProgressDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LessonProgressDeleteArgs<ExtArgs>>
    ): Prisma__LessonProgressClient<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one LessonProgress.
     * @param {LessonProgressUpdateArgs} args - Arguments to update one LessonProgress.
     * @example
     * // Update one LessonProgress
     * const lessonProgress = await prisma.lessonProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LessonProgressUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LessonProgressUpdateArgs<ExtArgs>>
    ): Prisma__LessonProgressClient<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more LessonProgresses.
     * @param {LessonProgressDeleteManyArgs} args - Arguments to filter LessonProgresses to delete.
     * @example
     * // Delete a few LessonProgresses
     * const { count } = await prisma.lessonProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LessonProgressDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LessonProgressDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LessonProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LessonProgresses
     * const lessonProgress = await prisma.lessonProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LessonProgressUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LessonProgressUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LessonProgress.
     * @param {LessonProgressUpsertArgs} args - Arguments to update or create a LessonProgress.
     * @example
     * // Update or create a LessonProgress
     * const lessonProgress = await prisma.lessonProgress.upsert({
     *   create: {
     *     // ... data to create a LessonProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LessonProgress we want to update
     *   }
     * })
    **/
    upsert<T extends LessonProgressUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LessonProgressUpsertArgs<ExtArgs>>
    ): Prisma__LessonProgressClient<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of LessonProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonProgressCountArgs} args - Arguments to filter LessonProgresses to count.
     * @example
     * // Count the number of LessonProgresses
     * const count = await prisma.lessonProgress.count({
     *   where: {
     *     // ... the filter for the LessonProgresses we want to count
     *   }
     * })
    **/
    count<T extends LessonProgressCountArgs>(
      args?: Subset<T, LessonProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LessonProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LessonProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LessonProgressAggregateArgs>(args: Subset<T, LessonProgressAggregateArgs>): Prisma.PrismaPromise<GetLessonProgressAggregateType<T>>

    /**
     * Group by LessonProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonProgressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LessonProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LessonProgressGroupByArgs['orderBy'] }
        : { orderBy?: LessonProgressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LessonProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLessonProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LessonProgress model
   */
  readonly fields: LessonProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LessonProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LessonProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    lesson<T extends LessonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LessonDefaultArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the LessonProgress model
   */ 
  interface LessonProgressFieldRefs {
    readonly lessonId: FieldRef<"LessonProgress", 'Int'>
    readonly userId: FieldRef<"LessonProgress", 'String'>
    readonly completed: FieldRef<"LessonProgress", 'Boolean'>
    readonly completedAt: FieldRef<"LessonProgress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LessonProgress findUnique
   */
  export type LessonProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
    /**
     * Filter, which LessonProgress to fetch.
     */
    where: LessonProgressWhereUniqueInput
  }

  /**
   * LessonProgress findUniqueOrThrow
   */
  export type LessonProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
    /**
     * Filter, which LessonProgress to fetch.
     */
    where: LessonProgressWhereUniqueInput
  }

  /**
   * LessonProgress findFirst
   */
  export type LessonProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
    /**
     * Filter, which LessonProgress to fetch.
     */
    where?: LessonProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonProgresses to fetch.
     */
    orderBy?: LessonProgressOrderByWithRelationInput | LessonProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LessonProgresses.
     */
    cursor?: LessonProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LessonProgresses.
     */
    distinct?: LessonProgressScalarFieldEnum | LessonProgressScalarFieldEnum[]
  }

  /**
   * LessonProgress findFirstOrThrow
   */
  export type LessonProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
    /**
     * Filter, which LessonProgress to fetch.
     */
    where?: LessonProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonProgresses to fetch.
     */
    orderBy?: LessonProgressOrderByWithRelationInput | LessonProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LessonProgresses.
     */
    cursor?: LessonProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LessonProgresses.
     */
    distinct?: LessonProgressScalarFieldEnum | LessonProgressScalarFieldEnum[]
  }

  /**
   * LessonProgress findMany
   */
  export type LessonProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
    /**
     * Filter, which LessonProgresses to fetch.
     */
    where?: LessonProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonProgresses to fetch.
     */
    orderBy?: LessonProgressOrderByWithRelationInput | LessonProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LessonProgresses.
     */
    cursor?: LessonProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonProgresses.
     */
    skip?: number
    distinct?: LessonProgressScalarFieldEnum | LessonProgressScalarFieldEnum[]
  }

  /**
   * LessonProgress create
   */
  export type LessonProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a LessonProgress.
     */
    data: XOR<LessonProgressCreateInput, LessonProgressUncheckedCreateInput>
  }

  /**
   * LessonProgress createMany
   */
  export type LessonProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LessonProgresses.
     */
    data: LessonProgressCreateManyInput | LessonProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LessonProgress createManyAndReturn
   */
  export type LessonProgressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many LessonProgresses.
     */
    data: LessonProgressCreateManyInput | LessonProgressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LessonProgress update
   */
  export type LessonProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a LessonProgress.
     */
    data: XOR<LessonProgressUpdateInput, LessonProgressUncheckedUpdateInput>
    /**
     * Choose, which LessonProgress to update.
     */
    where: LessonProgressWhereUniqueInput
  }

  /**
   * LessonProgress updateMany
   */
  export type LessonProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LessonProgresses.
     */
    data: XOR<LessonProgressUpdateManyMutationInput, LessonProgressUncheckedUpdateManyInput>
    /**
     * Filter which LessonProgresses to update
     */
    where?: LessonProgressWhereInput
  }

  /**
   * LessonProgress upsert
   */
  export type LessonProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the LessonProgress to update in case it exists.
     */
    where: LessonProgressWhereUniqueInput
    /**
     * In case the LessonProgress found by the `where` argument doesn't exist, create a new LessonProgress with this data.
     */
    create: XOR<LessonProgressCreateInput, LessonProgressUncheckedCreateInput>
    /**
     * In case the LessonProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LessonProgressUpdateInput, LessonProgressUncheckedUpdateInput>
  }

  /**
   * LessonProgress delete
   */
  export type LessonProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
    /**
     * Filter which LessonProgress to delete.
     */
    where: LessonProgressWhereUniqueInput
  }

  /**
   * LessonProgress deleteMany
   */
  export type LessonProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LessonProgresses to delete
     */
    where?: LessonProgressWhereInput
  }

  /**
   * LessonProgress without action
   */
  export type LessonProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
  }


  /**
   * Model Badge
   */

  export type AggregateBadge = {
    _count: BadgeCountAggregateOutputType | null
    _avg: BadgeAvgAggregateOutputType | null
    _sum: BadgeSumAggregateOutputType | null
    _min: BadgeMinAggregateOutputType | null
    _max: BadgeMaxAggregateOutputType | null
  }

  export type BadgeAvgAggregateOutputType = {
    badgeId: number | null
  }

  export type BadgeSumAggregateOutputType = {
    badgeId: number | null
  }

  export type BadgeMinAggregateOutputType = {
    badgeId: number | null
    name: string | null
    description: string | null
    image: string | null
  }

  export type BadgeMaxAggregateOutputType = {
    badgeId: number | null
    name: string | null
    description: string | null
    image: string | null
  }

  export type BadgeCountAggregateOutputType = {
    badgeId: number
    name: number
    description: number
    image: number
    criteria: number
    _all: number
  }


  export type BadgeAvgAggregateInputType = {
    badgeId?: true
  }

  export type BadgeSumAggregateInputType = {
    badgeId?: true
  }

  export type BadgeMinAggregateInputType = {
    badgeId?: true
    name?: true
    description?: true
    image?: true
  }

  export type BadgeMaxAggregateInputType = {
    badgeId?: true
    name?: true
    description?: true
    image?: true
  }

  export type BadgeCountAggregateInputType = {
    badgeId?: true
    name?: true
    description?: true
    image?: true
    criteria?: true
    _all?: true
  }

  export type BadgeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Badge to aggregate.
     */
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Badges
    **/
    _count?: true | BadgeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BadgeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BadgeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BadgeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BadgeMaxAggregateInputType
  }

  export type GetBadgeAggregateType<T extends BadgeAggregateArgs> = {
        [P in keyof T & keyof AggregateBadge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBadge[P]>
      : GetScalarType<T[P], AggregateBadge[P]>
  }




  export type BadgeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BadgeWhereInput
    orderBy?: BadgeOrderByWithAggregationInput | BadgeOrderByWithAggregationInput[]
    by: BadgeScalarFieldEnum[] | BadgeScalarFieldEnum
    having?: BadgeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BadgeCountAggregateInputType | true
    _avg?: BadgeAvgAggregateInputType
    _sum?: BadgeSumAggregateInputType
    _min?: BadgeMinAggregateInputType
    _max?: BadgeMaxAggregateInputType
  }

  export type BadgeGroupByOutputType = {
    badgeId: number
    name: string
    description: string
    image: string | null
    criteria: JsonValue
    _count: BadgeCountAggregateOutputType | null
    _avg: BadgeAvgAggregateOutputType | null
    _sum: BadgeSumAggregateOutputType | null
    _min: BadgeMinAggregateOutputType | null
    _max: BadgeMaxAggregateOutputType | null
  }

  type GetBadgeGroupByPayload<T extends BadgeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BadgeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BadgeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BadgeGroupByOutputType[P]>
            : GetScalarType<T[P], BadgeGroupByOutputType[P]>
        }
      >
    >


  export type BadgeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    badgeId?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    criteria?: boolean
    UserBadge?: boolean | Badge$UserBadgeArgs<ExtArgs>
    _count?: boolean | BadgeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["badge"]>

  export type BadgeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    badgeId?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    criteria?: boolean
  }, ExtArgs["result"]["badge"]>

  export type BadgeSelectScalar = {
    badgeId?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    criteria?: boolean
  }

  export type BadgeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserBadge?: boolean | Badge$UserBadgeArgs<ExtArgs>
    _count?: boolean | BadgeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BadgeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BadgePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Badge"
    objects: {
      UserBadge: Prisma.$UserBadgePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      badgeId: number
      name: string
      description: string
      image: string | null
      criteria: Prisma.JsonValue
    }, ExtArgs["result"]["badge"]>
    composites: {}
  }

  type BadgeGetPayload<S extends boolean | null | undefined | BadgeDefaultArgs> = $Result.GetResult<Prisma.$BadgePayload, S>

  type BadgeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BadgeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BadgeCountAggregateInputType | true
    }

  export interface BadgeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Badge'], meta: { name: 'Badge' } }
    /**
     * Find zero or one Badge that matches the filter.
     * @param {BadgeFindUniqueArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BadgeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BadgeFindUniqueArgs<ExtArgs>>
    ): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Badge that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BadgeFindUniqueOrThrowArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BadgeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BadgeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Badge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeFindFirstArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BadgeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BadgeFindFirstArgs<ExtArgs>>
    ): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Badge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeFindFirstOrThrowArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BadgeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BadgeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Badges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Badges
     * const badges = await prisma.badge.findMany()
     * 
     * // Get first 10 Badges
     * const badges = await prisma.badge.findMany({ take: 10 })
     * 
     * // Only select the `badgeId`
     * const badgeWithBadgeIdOnly = await prisma.badge.findMany({ select: { badgeId: true } })
     * 
    **/
    findMany<T extends BadgeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BadgeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Badge.
     * @param {BadgeCreateArgs} args - Arguments to create a Badge.
     * @example
     * // Create one Badge
     * const Badge = await prisma.badge.create({
     *   data: {
     *     // ... data to create a Badge
     *   }
     * })
     * 
    **/
    create<T extends BadgeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BadgeCreateArgs<ExtArgs>>
    ): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Badges.
     * @param {BadgeCreateManyArgs} args - Arguments to create many Badges.
     * @example
     * // Create many Badges
     * const badge = await prisma.badge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends BadgeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BadgeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Badges and returns the data saved in the database.
     * @param {BadgeCreateManyAndReturnArgs} args - Arguments to create many Badges.
     * @example
     * // Create many Badges
     * const badge = await prisma.badge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Badges and only return the `badgeId`
     * const badgeWithBadgeIdOnly = await prisma.badge.createManyAndReturn({ 
     *   select: { badgeId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends BadgeCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, BadgeCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Badge.
     * @param {BadgeDeleteArgs} args - Arguments to delete one Badge.
     * @example
     * // Delete one Badge
     * const Badge = await prisma.badge.delete({
     *   where: {
     *     // ... filter to delete one Badge
     *   }
     * })
     * 
    **/
    delete<T extends BadgeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BadgeDeleteArgs<ExtArgs>>
    ): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Badge.
     * @param {BadgeUpdateArgs} args - Arguments to update one Badge.
     * @example
     * // Update one Badge
     * const badge = await prisma.badge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BadgeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BadgeUpdateArgs<ExtArgs>>
    ): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Badges.
     * @param {BadgeDeleteManyArgs} args - Arguments to filter Badges to delete.
     * @example
     * // Delete a few Badges
     * const { count } = await prisma.badge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BadgeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BadgeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Badges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Badges
     * const badge = await prisma.badge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BadgeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BadgeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Badge.
     * @param {BadgeUpsertArgs} args - Arguments to update or create a Badge.
     * @example
     * // Update or create a Badge
     * const badge = await prisma.badge.upsert({
     *   create: {
     *     // ... data to create a Badge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Badge we want to update
     *   }
     * })
    **/
    upsert<T extends BadgeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BadgeUpsertArgs<ExtArgs>>
    ): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Badges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeCountArgs} args - Arguments to filter Badges to count.
     * @example
     * // Count the number of Badges
     * const count = await prisma.badge.count({
     *   where: {
     *     // ... the filter for the Badges we want to count
     *   }
     * })
    **/
    count<T extends BadgeCountArgs>(
      args?: Subset<T, BadgeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BadgeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Badge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BadgeAggregateArgs>(args: Subset<T, BadgeAggregateArgs>): Prisma.PrismaPromise<GetBadgeAggregateType<T>>

    /**
     * Group by Badge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BadgeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BadgeGroupByArgs['orderBy'] }
        : { orderBy?: BadgeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BadgeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBadgeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Badge model
   */
  readonly fields: BadgeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Badge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BadgeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    UserBadge<T extends Badge$UserBadgeArgs<ExtArgs> = {}>(args?: Subset<T, Badge$UserBadgeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Badge model
   */ 
  interface BadgeFieldRefs {
    readonly badgeId: FieldRef<"Badge", 'Int'>
    readonly name: FieldRef<"Badge", 'String'>
    readonly description: FieldRef<"Badge", 'String'>
    readonly image: FieldRef<"Badge", 'String'>
    readonly criteria: FieldRef<"Badge", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Badge findUnique
   */
  export type BadgeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badge to fetch.
     */
    where: BadgeWhereUniqueInput
  }

  /**
   * Badge findUniqueOrThrow
   */
  export type BadgeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badge to fetch.
     */
    where: BadgeWhereUniqueInput
  }

  /**
   * Badge findFirst
   */
  export type BadgeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badge to fetch.
     */
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Badges.
     */
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Badges.
     */
    distinct?: BadgeScalarFieldEnum | BadgeScalarFieldEnum[]
  }

  /**
   * Badge findFirstOrThrow
   */
  export type BadgeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badge to fetch.
     */
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Badges.
     */
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Badges.
     */
    distinct?: BadgeScalarFieldEnum | BadgeScalarFieldEnum[]
  }

  /**
   * Badge findMany
   */
  export type BadgeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badges to fetch.
     */
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Badges.
     */
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    distinct?: BadgeScalarFieldEnum | BadgeScalarFieldEnum[]
  }

  /**
   * Badge create
   */
  export type BadgeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * The data needed to create a Badge.
     */
    data: XOR<BadgeCreateInput, BadgeUncheckedCreateInput>
  }

  /**
   * Badge createMany
   */
  export type BadgeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Badges.
     */
    data: BadgeCreateManyInput | BadgeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Badge createManyAndReturn
   */
  export type BadgeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Badges.
     */
    data: BadgeCreateManyInput | BadgeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Badge update
   */
  export type BadgeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * The data needed to update a Badge.
     */
    data: XOR<BadgeUpdateInput, BadgeUncheckedUpdateInput>
    /**
     * Choose, which Badge to update.
     */
    where: BadgeWhereUniqueInput
  }

  /**
   * Badge updateMany
   */
  export type BadgeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Badges.
     */
    data: XOR<BadgeUpdateManyMutationInput, BadgeUncheckedUpdateManyInput>
    /**
     * Filter which Badges to update
     */
    where?: BadgeWhereInput
  }

  /**
   * Badge upsert
   */
  export type BadgeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * The filter to search for the Badge to update in case it exists.
     */
    where: BadgeWhereUniqueInput
    /**
     * In case the Badge found by the `where` argument doesn't exist, create a new Badge with this data.
     */
    create: XOR<BadgeCreateInput, BadgeUncheckedCreateInput>
    /**
     * In case the Badge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BadgeUpdateInput, BadgeUncheckedUpdateInput>
  }

  /**
   * Badge delete
   */
  export type BadgeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter which Badge to delete.
     */
    where: BadgeWhereUniqueInput
  }

  /**
   * Badge deleteMany
   */
  export type BadgeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Badges to delete
     */
    where?: BadgeWhereInput
  }

  /**
   * Badge.UserBadge
   */
  export type Badge$UserBadgeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    where?: UserBadgeWhereInput
    orderBy?: UserBadgeOrderByWithRelationInput | UserBadgeOrderByWithRelationInput[]
    cursor?: UserBadgeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserBadgeScalarFieldEnum | UserBadgeScalarFieldEnum[]
  }

  /**
   * Badge without action
   */
  export type BadgeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
  }


  /**
   * Model UserBadge
   */

  export type AggregateUserBadge = {
    _count: UserBadgeCountAggregateOutputType | null
    _avg: UserBadgeAvgAggregateOutputType | null
    _sum: UserBadgeSumAggregateOutputType | null
    _min: UserBadgeMinAggregateOutputType | null
    _max: UserBadgeMaxAggregateOutputType | null
  }

  export type UserBadgeAvgAggregateOutputType = {
    badgeId: number | null
  }

  export type UserBadgeSumAggregateOutputType = {
    badgeId: number | null
  }

  export type UserBadgeMinAggregateOutputType = {
    userId: string | null
    badgeId: number | null
    obtainedAt: Date | null
  }

  export type UserBadgeMaxAggregateOutputType = {
    userId: string | null
    badgeId: number | null
    obtainedAt: Date | null
  }

  export type UserBadgeCountAggregateOutputType = {
    userId: number
    badgeId: number
    obtainedAt: number
    _all: number
  }


  export type UserBadgeAvgAggregateInputType = {
    badgeId?: true
  }

  export type UserBadgeSumAggregateInputType = {
    badgeId?: true
  }

  export type UserBadgeMinAggregateInputType = {
    userId?: true
    badgeId?: true
    obtainedAt?: true
  }

  export type UserBadgeMaxAggregateInputType = {
    userId?: true
    badgeId?: true
    obtainedAt?: true
  }

  export type UserBadgeCountAggregateInputType = {
    userId?: true
    badgeId?: true
    obtainedAt?: true
    _all?: true
  }

  export type UserBadgeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserBadge to aggregate.
     */
    where?: UserBadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBadges to fetch.
     */
    orderBy?: UserBadgeOrderByWithRelationInput | UserBadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserBadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBadges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBadges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserBadges
    **/
    _count?: true | UserBadgeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserBadgeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserBadgeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserBadgeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserBadgeMaxAggregateInputType
  }

  export type GetUserBadgeAggregateType<T extends UserBadgeAggregateArgs> = {
        [P in keyof T & keyof AggregateUserBadge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserBadge[P]>
      : GetScalarType<T[P], AggregateUserBadge[P]>
  }




  export type UserBadgeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserBadgeWhereInput
    orderBy?: UserBadgeOrderByWithAggregationInput | UserBadgeOrderByWithAggregationInput[]
    by: UserBadgeScalarFieldEnum[] | UserBadgeScalarFieldEnum
    having?: UserBadgeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserBadgeCountAggregateInputType | true
    _avg?: UserBadgeAvgAggregateInputType
    _sum?: UserBadgeSumAggregateInputType
    _min?: UserBadgeMinAggregateInputType
    _max?: UserBadgeMaxAggregateInputType
  }

  export type UserBadgeGroupByOutputType = {
    userId: string
    badgeId: number
    obtainedAt: Date
    _count: UserBadgeCountAggregateOutputType | null
    _avg: UserBadgeAvgAggregateOutputType | null
    _sum: UserBadgeSumAggregateOutputType | null
    _min: UserBadgeMinAggregateOutputType | null
    _max: UserBadgeMaxAggregateOutputType | null
  }

  type GetUserBadgeGroupByPayload<T extends UserBadgeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserBadgeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserBadgeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserBadgeGroupByOutputType[P]>
            : GetScalarType<T[P], UserBadgeGroupByOutputType[P]>
        }
      >
    >


  export type UserBadgeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    badgeId?: boolean
    obtainedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    badge?: boolean | BadgeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userBadge"]>

  export type UserBadgeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    badgeId?: boolean
    obtainedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    badge?: boolean | BadgeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userBadge"]>

  export type UserBadgeSelectScalar = {
    userId?: boolean
    badgeId?: boolean
    obtainedAt?: boolean
  }

  export type UserBadgeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    badge?: boolean | BadgeDefaultArgs<ExtArgs>
  }
  export type UserBadgeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    badge?: boolean | BadgeDefaultArgs<ExtArgs>
  }

  export type $UserBadgePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserBadge"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      badge: Prisma.$BadgePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      badgeId: number
      obtainedAt: Date
    }, ExtArgs["result"]["userBadge"]>
    composites: {}
  }

  type UserBadgeGetPayload<S extends boolean | null | undefined | UserBadgeDefaultArgs> = $Result.GetResult<Prisma.$UserBadgePayload, S>

  type UserBadgeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserBadgeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserBadgeCountAggregateInputType | true
    }

  export interface UserBadgeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserBadge'], meta: { name: 'UserBadge' } }
    /**
     * Find zero or one UserBadge that matches the filter.
     * @param {UserBadgeFindUniqueArgs} args - Arguments to find a UserBadge
     * @example
     * // Get one UserBadge
     * const userBadge = await prisma.userBadge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserBadgeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserBadgeFindUniqueArgs<ExtArgs>>
    ): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserBadge that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserBadgeFindUniqueOrThrowArgs} args - Arguments to find a UserBadge
     * @example
     * // Get one UserBadge
     * const userBadge = await prisma.userBadge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserBadgeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserBadgeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserBadge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeFindFirstArgs} args - Arguments to find a UserBadge
     * @example
     * // Get one UserBadge
     * const userBadge = await prisma.userBadge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserBadgeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserBadgeFindFirstArgs<ExtArgs>>
    ): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserBadge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeFindFirstOrThrowArgs} args - Arguments to find a UserBadge
     * @example
     * // Get one UserBadge
     * const userBadge = await prisma.userBadge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserBadgeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserBadgeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserBadges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserBadges
     * const userBadges = await prisma.userBadge.findMany()
     * 
     * // Get first 10 UserBadges
     * const userBadges = await prisma.userBadge.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userBadgeWithUserIdOnly = await prisma.userBadge.findMany({ select: { userId: true } })
     * 
    **/
    findMany<T extends UserBadgeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserBadgeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserBadge.
     * @param {UserBadgeCreateArgs} args - Arguments to create a UserBadge.
     * @example
     * // Create one UserBadge
     * const UserBadge = await prisma.userBadge.create({
     *   data: {
     *     // ... data to create a UserBadge
     *   }
     * })
     * 
    **/
    create<T extends UserBadgeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserBadgeCreateArgs<ExtArgs>>
    ): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserBadges.
     * @param {UserBadgeCreateManyArgs} args - Arguments to create many UserBadges.
     * @example
     * // Create many UserBadges
     * const userBadge = await prisma.userBadge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends UserBadgeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserBadgeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserBadges and returns the data saved in the database.
     * @param {UserBadgeCreateManyAndReturnArgs} args - Arguments to create many UserBadges.
     * @example
     * // Create many UserBadges
     * const userBadge = await prisma.userBadge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserBadges and only return the `userId`
     * const userBadgeWithUserIdOnly = await prisma.userBadge.createManyAndReturn({ 
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends UserBadgeCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, UserBadgeCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a UserBadge.
     * @param {UserBadgeDeleteArgs} args - Arguments to delete one UserBadge.
     * @example
     * // Delete one UserBadge
     * const UserBadge = await prisma.userBadge.delete({
     *   where: {
     *     // ... filter to delete one UserBadge
     *   }
     * })
     * 
    **/
    delete<T extends UserBadgeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserBadgeDeleteArgs<ExtArgs>>
    ): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserBadge.
     * @param {UserBadgeUpdateArgs} args - Arguments to update one UserBadge.
     * @example
     * // Update one UserBadge
     * const userBadge = await prisma.userBadge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserBadgeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserBadgeUpdateArgs<ExtArgs>>
    ): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserBadges.
     * @param {UserBadgeDeleteManyArgs} args - Arguments to filter UserBadges to delete.
     * @example
     * // Delete a few UserBadges
     * const { count } = await prisma.userBadge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserBadgeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserBadgeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserBadges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserBadges
     * const userBadge = await prisma.userBadge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserBadgeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserBadgeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserBadge.
     * @param {UserBadgeUpsertArgs} args - Arguments to update or create a UserBadge.
     * @example
     * // Update or create a UserBadge
     * const userBadge = await prisma.userBadge.upsert({
     *   create: {
     *     // ... data to create a UserBadge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserBadge we want to update
     *   }
     * })
    **/
    upsert<T extends UserBadgeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserBadgeUpsertArgs<ExtArgs>>
    ): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UserBadges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeCountArgs} args - Arguments to filter UserBadges to count.
     * @example
     * // Count the number of UserBadges
     * const count = await prisma.userBadge.count({
     *   where: {
     *     // ... the filter for the UserBadges we want to count
     *   }
     * })
    **/
    count<T extends UserBadgeCountArgs>(
      args?: Subset<T, UserBadgeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserBadgeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserBadge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserBadgeAggregateArgs>(args: Subset<T, UserBadgeAggregateArgs>): Prisma.PrismaPromise<GetUserBadgeAggregateType<T>>

    /**
     * Group by UserBadge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserBadgeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserBadgeGroupByArgs['orderBy'] }
        : { orderBy?: UserBadgeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserBadgeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserBadgeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserBadge model
   */
  readonly fields: UserBadgeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserBadge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserBadgeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    badge<T extends BadgeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BadgeDefaultArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UserBadge model
   */ 
  interface UserBadgeFieldRefs {
    readonly userId: FieldRef<"UserBadge", 'String'>
    readonly badgeId: FieldRef<"UserBadge", 'Int'>
    readonly obtainedAt: FieldRef<"UserBadge", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserBadge findUnique
   */
  export type UserBadgeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * Filter, which UserBadge to fetch.
     */
    where: UserBadgeWhereUniqueInput
  }

  /**
   * UserBadge findUniqueOrThrow
   */
  export type UserBadgeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * Filter, which UserBadge to fetch.
     */
    where: UserBadgeWhereUniqueInput
  }

  /**
   * UserBadge findFirst
   */
  export type UserBadgeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * Filter, which UserBadge to fetch.
     */
    where?: UserBadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBadges to fetch.
     */
    orderBy?: UserBadgeOrderByWithRelationInput | UserBadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserBadges.
     */
    cursor?: UserBadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBadges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBadges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserBadges.
     */
    distinct?: UserBadgeScalarFieldEnum | UserBadgeScalarFieldEnum[]
  }

  /**
   * UserBadge findFirstOrThrow
   */
  export type UserBadgeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * Filter, which UserBadge to fetch.
     */
    where?: UserBadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBadges to fetch.
     */
    orderBy?: UserBadgeOrderByWithRelationInput | UserBadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserBadges.
     */
    cursor?: UserBadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBadges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBadges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserBadges.
     */
    distinct?: UserBadgeScalarFieldEnum | UserBadgeScalarFieldEnum[]
  }

  /**
   * UserBadge findMany
   */
  export type UserBadgeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * Filter, which UserBadges to fetch.
     */
    where?: UserBadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBadges to fetch.
     */
    orderBy?: UserBadgeOrderByWithRelationInput | UserBadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserBadges.
     */
    cursor?: UserBadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBadges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBadges.
     */
    skip?: number
    distinct?: UserBadgeScalarFieldEnum | UserBadgeScalarFieldEnum[]
  }

  /**
   * UserBadge create
   */
  export type UserBadgeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * The data needed to create a UserBadge.
     */
    data: XOR<UserBadgeCreateInput, UserBadgeUncheckedCreateInput>
  }

  /**
   * UserBadge createMany
   */
  export type UserBadgeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserBadges.
     */
    data: UserBadgeCreateManyInput | UserBadgeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserBadge createManyAndReturn
   */
  export type UserBadgeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserBadges.
     */
    data: UserBadgeCreateManyInput | UserBadgeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserBadge update
   */
  export type UserBadgeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * The data needed to update a UserBadge.
     */
    data: XOR<UserBadgeUpdateInput, UserBadgeUncheckedUpdateInput>
    /**
     * Choose, which UserBadge to update.
     */
    where: UserBadgeWhereUniqueInput
  }

  /**
   * UserBadge updateMany
   */
  export type UserBadgeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserBadges.
     */
    data: XOR<UserBadgeUpdateManyMutationInput, UserBadgeUncheckedUpdateManyInput>
    /**
     * Filter which UserBadges to update
     */
    where?: UserBadgeWhereInput
  }

  /**
   * UserBadge upsert
   */
  export type UserBadgeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * The filter to search for the UserBadge to update in case it exists.
     */
    where: UserBadgeWhereUniqueInput
    /**
     * In case the UserBadge found by the `where` argument doesn't exist, create a new UserBadge with this data.
     */
    create: XOR<UserBadgeCreateInput, UserBadgeUncheckedCreateInput>
    /**
     * In case the UserBadge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserBadgeUpdateInput, UserBadgeUncheckedUpdateInput>
  }

  /**
   * UserBadge delete
   */
  export type UserBadgeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * Filter which UserBadge to delete.
     */
    where: UserBadgeWhereUniqueInput
  }

  /**
   * UserBadge deleteMany
   */
  export type UserBadgeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserBadges to delete
     */
    where?: UserBadgeWhereInput
  }

  /**
   * UserBadge without action
   */
  export type UserBadgeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    lessonId: number | null
    like: number | null
  }

  export type CommentSumAggregateOutputType = {
    lessonId: number | null
    like: number | null
  }

  export type CommentMinAggregateOutputType = {
    commentId: string | null
    lessonId: number | null
    userId: string | null
    content: string | null
    createdAt: Date | null
    like: number | null
  }

  export type CommentMaxAggregateOutputType = {
    commentId: string | null
    lessonId: number | null
    userId: string | null
    content: string | null
    createdAt: Date | null
    like: number | null
  }

  export type CommentCountAggregateOutputType = {
    commentId: number
    lessonId: number
    userId: number
    content: number
    createdAt: number
    like: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    lessonId?: true
    like?: true
  }

  export type CommentSumAggregateInputType = {
    lessonId?: true
    like?: true
  }

  export type CommentMinAggregateInputType = {
    commentId?: true
    lessonId?: true
    userId?: true
    content?: true
    createdAt?: true
    like?: true
  }

  export type CommentMaxAggregateInputType = {
    commentId?: true
    lessonId?: true
    userId?: true
    content?: true
    createdAt?: true
    like?: true
  }

  export type CommentCountAggregateInputType = {
    commentId?: true
    lessonId?: true
    userId?: true
    content?: true
    createdAt?: true
    like?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    commentId: string
    lessonId: number
    userId: string
    content: string
    createdAt: Date
    like: number
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    commentId?: boolean
    lessonId?: boolean
    userId?: boolean
    content?: boolean
    createdAt?: boolean
    like?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    commentId?: boolean
    lessonId?: boolean
    userId?: boolean
    content?: boolean
    createdAt?: boolean
    like?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    commentId?: boolean
    lessonId?: boolean
    userId?: boolean
    content?: boolean
    createdAt?: boolean
    like?: boolean
  }

  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      lesson: Prisma.$LessonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      commentId: string
      lessonId: number
      userId: string
      content: string
      createdAt: Date
      like: number
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CommentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CommentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `commentId`
     * const commentWithCommentIdOnly = await prisma.comment.findMany({ select: { commentId: true } })
     * 
    **/
    findMany<T extends CommentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
    **/
    create<T extends CommentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CommentCreateArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends CommentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `commentId`
     * const commentWithCommentIdOnly = await prisma.comment.createManyAndReturn({ 
     *   select: { commentId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
    **/
    delete<T extends CommentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CommentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CommentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CommentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
    **/
    upsert<T extends CommentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    lesson<T extends LessonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LessonDefaultArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Comment model
   */ 
  interface CommentFieldRefs {
    readonly commentId: FieldRef<"Comment", 'String'>
    readonly lessonId: FieldRef<"Comment", 'Int'>
    readonly userId: FieldRef<"Comment", 'String'>
    readonly content: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
    readonly like: FieldRef<"Comment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }


  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VerificationTokenFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VerificationTokenFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
    **/
    findMany<T extends VerificationTokenFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
    **/
    create<T extends VerificationTokenCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends VerificationTokenCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({ 
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
    **/
    delete<T extends VerificationTokenDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VerificationTokenUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VerificationTokenDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VerificationTokenUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
    **/
    upsert<T extends VerificationTokenUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the VerificationToken model
   */ 
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
  }


  /**
   * Model SrhiAnswer
   */

  export type AggregateSrhiAnswer = {
    _count: SrhiAnswerCountAggregateOutputType | null
    _avg: SrhiAnswerAvgAggregateOutputType | null
    _sum: SrhiAnswerSumAggregateOutputType | null
    _min: SrhiAnswerMinAggregateOutputType | null
    _max: SrhiAnswerMaxAggregateOutputType | null
  }

  export type SrhiAnswerAvgAggregateOutputType = {
    srhiId: number | null
    q1: number | null
    q2: number | null
    q3: number | null
    q4: number | null
    q5: number | null
    q6: number | null
    q7: number | null
  }

  export type SrhiAnswerSumAggregateOutputType = {
    srhiId: number | null
    q1: number | null
    q2: number | null
    q3: number | null
    q4: number | null
    q5: number | null
    q6: number | null
    q7: number | null
  }

  export type SrhiAnswerMinAggregateOutputType = {
    srhiId: number | null
    userId: string | null
    q1: number | null
    q2: number | null
    q3: number | null
    q4: number | null
    q5: number | null
    q6: number | null
    q7: number | null
    submittedAt: Date | null
  }

  export type SrhiAnswerMaxAggregateOutputType = {
    srhiId: number | null
    userId: string | null
    q1: number | null
    q2: number | null
    q3: number | null
    q4: number | null
    q5: number | null
    q6: number | null
    q7: number | null
    submittedAt: Date | null
  }

  export type SrhiAnswerCountAggregateOutputType = {
    srhiId: number
    userId: number
    q1: number
    q2: number
    q3: number
    q4: number
    q5: number
    q6: number
    q7: number
    submittedAt: number
    _all: number
  }


  export type SrhiAnswerAvgAggregateInputType = {
    srhiId?: true
    q1?: true
    q2?: true
    q3?: true
    q4?: true
    q5?: true
    q6?: true
    q7?: true
  }

  export type SrhiAnswerSumAggregateInputType = {
    srhiId?: true
    q1?: true
    q2?: true
    q3?: true
    q4?: true
    q5?: true
    q6?: true
    q7?: true
  }

  export type SrhiAnswerMinAggregateInputType = {
    srhiId?: true
    userId?: true
    q1?: true
    q2?: true
    q3?: true
    q4?: true
    q5?: true
    q6?: true
    q7?: true
    submittedAt?: true
  }

  export type SrhiAnswerMaxAggregateInputType = {
    srhiId?: true
    userId?: true
    q1?: true
    q2?: true
    q3?: true
    q4?: true
    q5?: true
    q6?: true
    q7?: true
    submittedAt?: true
  }

  export type SrhiAnswerCountAggregateInputType = {
    srhiId?: true
    userId?: true
    q1?: true
    q2?: true
    q3?: true
    q4?: true
    q5?: true
    q6?: true
    q7?: true
    submittedAt?: true
    _all?: true
  }

  export type SrhiAnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SrhiAnswer to aggregate.
     */
    where?: SrhiAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SrhiAnswers to fetch.
     */
    orderBy?: SrhiAnswerOrderByWithRelationInput | SrhiAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SrhiAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SrhiAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SrhiAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SrhiAnswers
    **/
    _count?: true | SrhiAnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SrhiAnswerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SrhiAnswerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SrhiAnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SrhiAnswerMaxAggregateInputType
  }

  export type GetSrhiAnswerAggregateType<T extends SrhiAnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateSrhiAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSrhiAnswer[P]>
      : GetScalarType<T[P], AggregateSrhiAnswer[P]>
  }




  export type SrhiAnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SrhiAnswerWhereInput
    orderBy?: SrhiAnswerOrderByWithAggregationInput | SrhiAnswerOrderByWithAggregationInput[]
    by: SrhiAnswerScalarFieldEnum[] | SrhiAnswerScalarFieldEnum
    having?: SrhiAnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SrhiAnswerCountAggregateInputType | true
    _avg?: SrhiAnswerAvgAggregateInputType
    _sum?: SrhiAnswerSumAggregateInputType
    _min?: SrhiAnswerMinAggregateInputType
    _max?: SrhiAnswerMaxAggregateInputType
  }

  export type SrhiAnswerGroupByOutputType = {
    srhiId: number
    userId: string
    q1: number
    q2: number
    q3: number
    q4: number
    q5: number
    q6: number
    q7: number
    submittedAt: Date
    _count: SrhiAnswerCountAggregateOutputType | null
    _avg: SrhiAnswerAvgAggregateOutputType | null
    _sum: SrhiAnswerSumAggregateOutputType | null
    _min: SrhiAnswerMinAggregateOutputType | null
    _max: SrhiAnswerMaxAggregateOutputType | null
  }

  type GetSrhiAnswerGroupByPayload<T extends SrhiAnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SrhiAnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SrhiAnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SrhiAnswerGroupByOutputType[P]>
            : GetScalarType<T[P], SrhiAnswerGroupByOutputType[P]>
        }
      >
    >


  export type SrhiAnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    srhiId?: boolean
    userId?: boolean
    q1?: boolean
    q2?: boolean
    q3?: boolean
    q4?: boolean
    q5?: boolean
    q6?: boolean
    q7?: boolean
    submittedAt?: boolean
  }, ExtArgs["result"]["srhiAnswer"]>

  export type SrhiAnswerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    srhiId?: boolean
    userId?: boolean
    q1?: boolean
    q2?: boolean
    q3?: boolean
    q4?: boolean
    q5?: boolean
    q6?: boolean
    q7?: boolean
    submittedAt?: boolean
  }, ExtArgs["result"]["srhiAnswer"]>

  export type SrhiAnswerSelectScalar = {
    srhiId?: boolean
    userId?: boolean
    q1?: boolean
    q2?: boolean
    q3?: boolean
    q4?: boolean
    q5?: boolean
    q6?: boolean
    q7?: boolean
    submittedAt?: boolean
  }


  export type $SrhiAnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SrhiAnswer"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      srhiId: number
      userId: string
      q1: number
      q2: number
      q3: number
      q4: number
      q5: number
      q6: number
      q7: number
      submittedAt: Date
    }, ExtArgs["result"]["srhiAnswer"]>
    composites: {}
  }

  type SrhiAnswerGetPayload<S extends boolean | null | undefined | SrhiAnswerDefaultArgs> = $Result.GetResult<Prisma.$SrhiAnswerPayload, S>

  type SrhiAnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SrhiAnswerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SrhiAnswerCountAggregateInputType | true
    }

  export interface SrhiAnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SrhiAnswer'], meta: { name: 'SrhiAnswer' } }
    /**
     * Find zero or one SrhiAnswer that matches the filter.
     * @param {SrhiAnswerFindUniqueArgs} args - Arguments to find a SrhiAnswer
     * @example
     * // Get one SrhiAnswer
     * const srhiAnswer = await prisma.srhiAnswer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SrhiAnswerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SrhiAnswerFindUniqueArgs<ExtArgs>>
    ): Prisma__SrhiAnswerClient<$Result.GetResult<Prisma.$SrhiAnswerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SrhiAnswer that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SrhiAnswerFindUniqueOrThrowArgs} args - Arguments to find a SrhiAnswer
     * @example
     * // Get one SrhiAnswer
     * const srhiAnswer = await prisma.srhiAnswer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SrhiAnswerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SrhiAnswerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SrhiAnswerClient<$Result.GetResult<Prisma.$SrhiAnswerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SrhiAnswer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SrhiAnswerFindFirstArgs} args - Arguments to find a SrhiAnswer
     * @example
     * // Get one SrhiAnswer
     * const srhiAnswer = await prisma.srhiAnswer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SrhiAnswerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SrhiAnswerFindFirstArgs<ExtArgs>>
    ): Prisma__SrhiAnswerClient<$Result.GetResult<Prisma.$SrhiAnswerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SrhiAnswer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SrhiAnswerFindFirstOrThrowArgs} args - Arguments to find a SrhiAnswer
     * @example
     * // Get one SrhiAnswer
     * const srhiAnswer = await prisma.srhiAnswer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SrhiAnswerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SrhiAnswerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SrhiAnswerClient<$Result.GetResult<Prisma.$SrhiAnswerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SrhiAnswers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SrhiAnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SrhiAnswers
     * const srhiAnswers = await prisma.srhiAnswer.findMany()
     * 
     * // Get first 10 SrhiAnswers
     * const srhiAnswers = await prisma.srhiAnswer.findMany({ take: 10 })
     * 
     * // Only select the `srhiId`
     * const srhiAnswerWithSrhiIdOnly = await prisma.srhiAnswer.findMany({ select: { srhiId: true } })
     * 
    **/
    findMany<T extends SrhiAnswerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SrhiAnswerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SrhiAnswerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SrhiAnswer.
     * @param {SrhiAnswerCreateArgs} args - Arguments to create a SrhiAnswer.
     * @example
     * // Create one SrhiAnswer
     * const SrhiAnswer = await prisma.srhiAnswer.create({
     *   data: {
     *     // ... data to create a SrhiAnswer
     *   }
     * })
     * 
    **/
    create<T extends SrhiAnswerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SrhiAnswerCreateArgs<ExtArgs>>
    ): Prisma__SrhiAnswerClient<$Result.GetResult<Prisma.$SrhiAnswerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SrhiAnswers.
     * @param {SrhiAnswerCreateManyArgs} args - Arguments to create many SrhiAnswers.
     * @example
     * // Create many SrhiAnswers
     * const srhiAnswer = await prisma.srhiAnswer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends SrhiAnswerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SrhiAnswerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SrhiAnswers and returns the data saved in the database.
     * @param {SrhiAnswerCreateManyAndReturnArgs} args - Arguments to create many SrhiAnswers.
     * @example
     * // Create many SrhiAnswers
     * const srhiAnswer = await prisma.srhiAnswer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SrhiAnswers and only return the `srhiId`
     * const srhiAnswerWithSrhiIdOnly = await prisma.srhiAnswer.createManyAndReturn({ 
     *   select: { srhiId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends SrhiAnswerCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, SrhiAnswerCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SrhiAnswerPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a SrhiAnswer.
     * @param {SrhiAnswerDeleteArgs} args - Arguments to delete one SrhiAnswer.
     * @example
     * // Delete one SrhiAnswer
     * const SrhiAnswer = await prisma.srhiAnswer.delete({
     *   where: {
     *     // ... filter to delete one SrhiAnswer
     *   }
     * })
     * 
    **/
    delete<T extends SrhiAnswerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SrhiAnswerDeleteArgs<ExtArgs>>
    ): Prisma__SrhiAnswerClient<$Result.GetResult<Prisma.$SrhiAnswerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SrhiAnswer.
     * @param {SrhiAnswerUpdateArgs} args - Arguments to update one SrhiAnswer.
     * @example
     * // Update one SrhiAnswer
     * const srhiAnswer = await prisma.srhiAnswer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SrhiAnswerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SrhiAnswerUpdateArgs<ExtArgs>>
    ): Prisma__SrhiAnswerClient<$Result.GetResult<Prisma.$SrhiAnswerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SrhiAnswers.
     * @param {SrhiAnswerDeleteManyArgs} args - Arguments to filter SrhiAnswers to delete.
     * @example
     * // Delete a few SrhiAnswers
     * const { count } = await prisma.srhiAnswer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SrhiAnswerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SrhiAnswerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SrhiAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SrhiAnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SrhiAnswers
     * const srhiAnswer = await prisma.srhiAnswer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SrhiAnswerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SrhiAnswerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SrhiAnswer.
     * @param {SrhiAnswerUpsertArgs} args - Arguments to update or create a SrhiAnswer.
     * @example
     * // Update or create a SrhiAnswer
     * const srhiAnswer = await prisma.srhiAnswer.upsert({
     *   create: {
     *     // ... data to create a SrhiAnswer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SrhiAnswer we want to update
     *   }
     * })
    **/
    upsert<T extends SrhiAnswerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SrhiAnswerUpsertArgs<ExtArgs>>
    ): Prisma__SrhiAnswerClient<$Result.GetResult<Prisma.$SrhiAnswerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SrhiAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SrhiAnswerCountArgs} args - Arguments to filter SrhiAnswers to count.
     * @example
     * // Count the number of SrhiAnswers
     * const count = await prisma.srhiAnswer.count({
     *   where: {
     *     // ... the filter for the SrhiAnswers we want to count
     *   }
     * })
    **/
    count<T extends SrhiAnswerCountArgs>(
      args?: Subset<T, SrhiAnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SrhiAnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SrhiAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SrhiAnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SrhiAnswerAggregateArgs>(args: Subset<T, SrhiAnswerAggregateArgs>): Prisma.PrismaPromise<GetSrhiAnswerAggregateType<T>>

    /**
     * Group by SrhiAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SrhiAnswerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SrhiAnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SrhiAnswerGroupByArgs['orderBy'] }
        : { orderBy?: SrhiAnswerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SrhiAnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSrhiAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SrhiAnswer model
   */
  readonly fields: SrhiAnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SrhiAnswer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SrhiAnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SrhiAnswer model
   */ 
  interface SrhiAnswerFieldRefs {
    readonly srhiId: FieldRef<"SrhiAnswer", 'Int'>
    readonly userId: FieldRef<"SrhiAnswer", 'String'>
    readonly q1: FieldRef<"SrhiAnswer", 'Int'>
    readonly q2: FieldRef<"SrhiAnswer", 'Int'>
    readonly q3: FieldRef<"SrhiAnswer", 'Int'>
    readonly q4: FieldRef<"SrhiAnswer", 'Int'>
    readonly q5: FieldRef<"SrhiAnswer", 'Int'>
    readonly q6: FieldRef<"SrhiAnswer", 'Int'>
    readonly q7: FieldRef<"SrhiAnswer", 'Int'>
    readonly submittedAt: FieldRef<"SrhiAnswer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SrhiAnswer findUnique
   */
  export type SrhiAnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SrhiAnswer
     */
    select?: SrhiAnswerSelect<ExtArgs> | null
    /**
     * Filter, which SrhiAnswer to fetch.
     */
    where: SrhiAnswerWhereUniqueInput
  }

  /**
   * SrhiAnswer findUniqueOrThrow
   */
  export type SrhiAnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SrhiAnswer
     */
    select?: SrhiAnswerSelect<ExtArgs> | null
    /**
     * Filter, which SrhiAnswer to fetch.
     */
    where: SrhiAnswerWhereUniqueInput
  }

  /**
   * SrhiAnswer findFirst
   */
  export type SrhiAnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SrhiAnswer
     */
    select?: SrhiAnswerSelect<ExtArgs> | null
    /**
     * Filter, which SrhiAnswer to fetch.
     */
    where?: SrhiAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SrhiAnswers to fetch.
     */
    orderBy?: SrhiAnswerOrderByWithRelationInput | SrhiAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SrhiAnswers.
     */
    cursor?: SrhiAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SrhiAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SrhiAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SrhiAnswers.
     */
    distinct?: SrhiAnswerScalarFieldEnum | SrhiAnswerScalarFieldEnum[]
  }

  /**
   * SrhiAnswer findFirstOrThrow
   */
  export type SrhiAnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SrhiAnswer
     */
    select?: SrhiAnswerSelect<ExtArgs> | null
    /**
     * Filter, which SrhiAnswer to fetch.
     */
    where?: SrhiAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SrhiAnswers to fetch.
     */
    orderBy?: SrhiAnswerOrderByWithRelationInput | SrhiAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SrhiAnswers.
     */
    cursor?: SrhiAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SrhiAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SrhiAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SrhiAnswers.
     */
    distinct?: SrhiAnswerScalarFieldEnum | SrhiAnswerScalarFieldEnum[]
  }

  /**
   * SrhiAnswer findMany
   */
  export type SrhiAnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SrhiAnswer
     */
    select?: SrhiAnswerSelect<ExtArgs> | null
    /**
     * Filter, which SrhiAnswers to fetch.
     */
    where?: SrhiAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SrhiAnswers to fetch.
     */
    orderBy?: SrhiAnswerOrderByWithRelationInput | SrhiAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SrhiAnswers.
     */
    cursor?: SrhiAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SrhiAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SrhiAnswers.
     */
    skip?: number
    distinct?: SrhiAnswerScalarFieldEnum | SrhiAnswerScalarFieldEnum[]
  }

  /**
   * SrhiAnswer create
   */
  export type SrhiAnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SrhiAnswer
     */
    select?: SrhiAnswerSelect<ExtArgs> | null
    /**
     * The data needed to create a SrhiAnswer.
     */
    data: XOR<SrhiAnswerCreateInput, SrhiAnswerUncheckedCreateInput>
  }

  /**
   * SrhiAnswer createMany
   */
  export type SrhiAnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SrhiAnswers.
     */
    data: SrhiAnswerCreateManyInput | SrhiAnswerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SrhiAnswer createManyAndReturn
   */
  export type SrhiAnswerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SrhiAnswer
     */
    select?: SrhiAnswerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SrhiAnswers.
     */
    data: SrhiAnswerCreateManyInput | SrhiAnswerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SrhiAnswer update
   */
  export type SrhiAnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SrhiAnswer
     */
    select?: SrhiAnswerSelect<ExtArgs> | null
    /**
     * The data needed to update a SrhiAnswer.
     */
    data: XOR<SrhiAnswerUpdateInput, SrhiAnswerUncheckedUpdateInput>
    /**
     * Choose, which SrhiAnswer to update.
     */
    where: SrhiAnswerWhereUniqueInput
  }

  /**
   * SrhiAnswer updateMany
   */
  export type SrhiAnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SrhiAnswers.
     */
    data: XOR<SrhiAnswerUpdateManyMutationInput, SrhiAnswerUncheckedUpdateManyInput>
    /**
     * Filter which SrhiAnswers to update
     */
    where?: SrhiAnswerWhereInput
  }

  /**
   * SrhiAnswer upsert
   */
  export type SrhiAnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SrhiAnswer
     */
    select?: SrhiAnswerSelect<ExtArgs> | null
    /**
     * The filter to search for the SrhiAnswer to update in case it exists.
     */
    where: SrhiAnswerWhereUniqueInput
    /**
     * In case the SrhiAnswer found by the `where` argument doesn't exist, create a new SrhiAnswer with this data.
     */
    create: XOR<SrhiAnswerCreateInput, SrhiAnswerUncheckedCreateInput>
    /**
     * In case the SrhiAnswer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SrhiAnswerUpdateInput, SrhiAnswerUncheckedUpdateInput>
  }

  /**
   * SrhiAnswer delete
   */
  export type SrhiAnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SrhiAnswer
     */
    select?: SrhiAnswerSelect<ExtArgs> | null
    /**
     * Filter which SrhiAnswer to delete.
     */
    where: SrhiAnswerWhereUniqueInput
  }

  /**
   * SrhiAnswer deleteMany
   */
  export type SrhiAnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SrhiAnswers to delete
     */
    where?: SrhiAnswerWhereInput
  }

  /**
   * SrhiAnswer without action
   */
  export type SrhiAnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SrhiAnswer
     */
    select?: SrhiAnswerSelect<ExtArgs> | null
  }


  /**
   * Model LessonReviews
   */

  export type AggregateLessonReviews = {
    _count: LessonReviewsCountAggregateOutputType | null
    _avg: LessonReviewsAvgAggregateOutputType | null
    _sum: LessonReviewsSumAggregateOutputType | null
    _min: LessonReviewsMinAggregateOutputType | null
    _max: LessonReviewsMaxAggregateOutputType | null
  }

  export type LessonReviewsAvgAggregateOutputType = {
    lessonId: number | null
  }

  export type LessonReviewsSumAggregateOutputType = {
    lessonId: number | null
  }

  export type LessonReviewsMinAggregateOutputType = {
    lessonId: number | null
    userId: string | null
    reviewedAt: Date | null
  }

  export type LessonReviewsMaxAggregateOutputType = {
    lessonId: number | null
    userId: string | null
    reviewedAt: Date | null
  }

  export type LessonReviewsCountAggregateOutputType = {
    lessonId: number
    userId: number
    reviewedAt: number
    _all: number
  }


  export type LessonReviewsAvgAggregateInputType = {
    lessonId?: true
  }

  export type LessonReviewsSumAggregateInputType = {
    lessonId?: true
  }

  export type LessonReviewsMinAggregateInputType = {
    lessonId?: true
    userId?: true
    reviewedAt?: true
  }

  export type LessonReviewsMaxAggregateInputType = {
    lessonId?: true
    userId?: true
    reviewedAt?: true
  }

  export type LessonReviewsCountAggregateInputType = {
    lessonId?: true
    userId?: true
    reviewedAt?: true
    _all?: true
  }

  export type LessonReviewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LessonReviews to aggregate.
     */
    where?: LessonReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonReviews to fetch.
     */
    orderBy?: LessonReviewsOrderByWithRelationInput | LessonReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LessonReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LessonReviews
    **/
    _count?: true | LessonReviewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LessonReviewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LessonReviewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LessonReviewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LessonReviewsMaxAggregateInputType
  }

  export type GetLessonReviewsAggregateType<T extends LessonReviewsAggregateArgs> = {
        [P in keyof T & keyof AggregateLessonReviews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLessonReviews[P]>
      : GetScalarType<T[P], AggregateLessonReviews[P]>
  }




  export type LessonReviewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonReviewsWhereInput
    orderBy?: LessonReviewsOrderByWithAggregationInput | LessonReviewsOrderByWithAggregationInput[]
    by: LessonReviewsScalarFieldEnum[] | LessonReviewsScalarFieldEnum
    having?: LessonReviewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LessonReviewsCountAggregateInputType | true
    _avg?: LessonReviewsAvgAggregateInputType
    _sum?: LessonReviewsSumAggregateInputType
    _min?: LessonReviewsMinAggregateInputType
    _max?: LessonReviewsMaxAggregateInputType
  }

  export type LessonReviewsGroupByOutputType = {
    lessonId: number
    userId: string
    reviewedAt: Date
    _count: LessonReviewsCountAggregateOutputType | null
    _avg: LessonReviewsAvgAggregateOutputType | null
    _sum: LessonReviewsSumAggregateOutputType | null
    _min: LessonReviewsMinAggregateOutputType | null
    _max: LessonReviewsMaxAggregateOutputType | null
  }

  type GetLessonReviewsGroupByPayload<T extends LessonReviewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LessonReviewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LessonReviewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LessonReviewsGroupByOutputType[P]>
            : GetScalarType<T[P], LessonReviewsGroupByOutputType[P]>
        }
      >
    >


  export type LessonReviewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    lessonId?: boolean
    userId?: boolean
    reviewedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lessonReviews"]>

  export type LessonReviewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    lessonId?: boolean
    userId?: boolean
    reviewedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lessonReviews"]>

  export type LessonReviewsSelectScalar = {
    lessonId?: boolean
    userId?: boolean
    reviewedAt?: boolean
  }

  export type LessonReviewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }
  export type LessonReviewsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }

  export type $LessonReviewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LessonReviews"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      lesson: Prisma.$LessonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      lessonId: number
      userId: string
      reviewedAt: Date
    }, ExtArgs["result"]["lessonReviews"]>
    composites: {}
  }

  type LessonReviewsGetPayload<S extends boolean | null | undefined | LessonReviewsDefaultArgs> = $Result.GetResult<Prisma.$LessonReviewsPayload, S>

  type LessonReviewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LessonReviewsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LessonReviewsCountAggregateInputType | true
    }

  export interface LessonReviewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LessonReviews'], meta: { name: 'LessonReviews' } }
    /**
     * Find zero or one LessonReviews that matches the filter.
     * @param {LessonReviewsFindUniqueArgs} args - Arguments to find a LessonReviews
     * @example
     * // Get one LessonReviews
     * const lessonReviews = await prisma.lessonReviews.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LessonReviewsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LessonReviewsFindUniqueArgs<ExtArgs>>
    ): Prisma__LessonReviewsClient<$Result.GetResult<Prisma.$LessonReviewsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one LessonReviews that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LessonReviewsFindUniqueOrThrowArgs} args - Arguments to find a LessonReviews
     * @example
     * // Get one LessonReviews
     * const lessonReviews = await prisma.lessonReviews.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LessonReviewsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LessonReviewsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LessonReviewsClient<$Result.GetResult<Prisma.$LessonReviewsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first LessonReviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonReviewsFindFirstArgs} args - Arguments to find a LessonReviews
     * @example
     * // Get one LessonReviews
     * const lessonReviews = await prisma.lessonReviews.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LessonReviewsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LessonReviewsFindFirstArgs<ExtArgs>>
    ): Prisma__LessonReviewsClient<$Result.GetResult<Prisma.$LessonReviewsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first LessonReviews that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonReviewsFindFirstOrThrowArgs} args - Arguments to find a LessonReviews
     * @example
     * // Get one LessonReviews
     * const lessonReviews = await prisma.lessonReviews.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LessonReviewsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LessonReviewsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LessonReviewsClient<$Result.GetResult<Prisma.$LessonReviewsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more LessonReviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonReviewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LessonReviews
     * const lessonReviews = await prisma.lessonReviews.findMany()
     * 
     * // Get first 10 LessonReviews
     * const lessonReviews = await prisma.lessonReviews.findMany({ take: 10 })
     * 
     * // Only select the `lessonId`
     * const lessonReviewsWithLessonIdOnly = await prisma.lessonReviews.findMany({ select: { lessonId: true } })
     * 
    **/
    findMany<T extends LessonReviewsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LessonReviewsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonReviewsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a LessonReviews.
     * @param {LessonReviewsCreateArgs} args - Arguments to create a LessonReviews.
     * @example
     * // Create one LessonReviews
     * const LessonReviews = await prisma.lessonReviews.create({
     *   data: {
     *     // ... data to create a LessonReviews
     *   }
     * })
     * 
    **/
    create<T extends LessonReviewsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LessonReviewsCreateArgs<ExtArgs>>
    ): Prisma__LessonReviewsClient<$Result.GetResult<Prisma.$LessonReviewsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many LessonReviews.
     * @param {LessonReviewsCreateManyArgs} args - Arguments to create many LessonReviews.
     * @example
     * // Create many LessonReviews
     * const lessonReviews = await prisma.lessonReviews.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends LessonReviewsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LessonReviewsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LessonReviews and returns the data saved in the database.
     * @param {LessonReviewsCreateManyAndReturnArgs} args - Arguments to create many LessonReviews.
     * @example
     * // Create many LessonReviews
     * const lessonReviews = await prisma.lessonReviews.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LessonReviews and only return the `lessonId`
     * const lessonReviewsWithLessonIdOnly = await prisma.lessonReviews.createManyAndReturn({ 
     *   select: { lessonId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends LessonReviewsCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, LessonReviewsCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonReviewsPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a LessonReviews.
     * @param {LessonReviewsDeleteArgs} args - Arguments to delete one LessonReviews.
     * @example
     * // Delete one LessonReviews
     * const LessonReviews = await prisma.lessonReviews.delete({
     *   where: {
     *     // ... filter to delete one LessonReviews
     *   }
     * })
     * 
    **/
    delete<T extends LessonReviewsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LessonReviewsDeleteArgs<ExtArgs>>
    ): Prisma__LessonReviewsClient<$Result.GetResult<Prisma.$LessonReviewsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one LessonReviews.
     * @param {LessonReviewsUpdateArgs} args - Arguments to update one LessonReviews.
     * @example
     * // Update one LessonReviews
     * const lessonReviews = await prisma.lessonReviews.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LessonReviewsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LessonReviewsUpdateArgs<ExtArgs>>
    ): Prisma__LessonReviewsClient<$Result.GetResult<Prisma.$LessonReviewsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more LessonReviews.
     * @param {LessonReviewsDeleteManyArgs} args - Arguments to filter LessonReviews to delete.
     * @example
     * // Delete a few LessonReviews
     * const { count } = await prisma.lessonReviews.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LessonReviewsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LessonReviewsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LessonReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonReviewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LessonReviews
     * const lessonReviews = await prisma.lessonReviews.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LessonReviewsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LessonReviewsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LessonReviews.
     * @param {LessonReviewsUpsertArgs} args - Arguments to update or create a LessonReviews.
     * @example
     * // Update or create a LessonReviews
     * const lessonReviews = await prisma.lessonReviews.upsert({
     *   create: {
     *     // ... data to create a LessonReviews
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LessonReviews we want to update
     *   }
     * })
    **/
    upsert<T extends LessonReviewsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LessonReviewsUpsertArgs<ExtArgs>>
    ): Prisma__LessonReviewsClient<$Result.GetResult<Prisma.$LessonReviewsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of LessonReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonReviewsCountArgs} args - Arguments to filter LessonReviews to count.
     * @example
     * // Count the number of LessonReviews
     * const count = await prisma.lessonReviews.count({
     *   where: {
     *     // ... the filter for the LessonReviews we want to count
     *   }
     * })
    **/
    count<T extends LessonReviewsCountArgs>(
      args?: Subset<T, LessonReviewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LessonReviewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LessonReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonReviewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LessonReviewsAggregateArgs>(args: Subset<T, LessonReviewsAggregateArgs>): Prisma.PrismaPromise<GetLessonReviewsAggregateType<T>>

    /**
     * Group by LessonReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonReviewsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LessonReviewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LessonReviewsGroupByArgs['orderBy'] }
        : { orderBy?: LessonReviewsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LessonReviewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLessonReviewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LessonReviews model
   */
  readonly fields: LessonReviewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LessonReviews.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LessonReviewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    lesson<T extends LessonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LessonDefaultArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the LessonReviews model
   */ 
  interface LessonReviewsFieldRefs {
    readonly lessonId: FieldRef<"LessonReviews", 'Int'>
    readonly userId: FieldRef<"LessonReviews", 'String'>
    readonly reviewedAt: FieldRef<"LessonReviews", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LessonReviews findUnique
   */
  export type LessonReviewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonReviews
     */
    select?: LessonReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonReviewsInclude<ExtArgs> | null
    /**
     * Filter, which LessonReviews to fetch.
     */
    where: LessonReviewsWhereUniqueInput
  }

  /**
   * LessonReviews findUniqueOrThrow
   */
  export type LessonReviewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonReviews
     */
    select?: LessonReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonReviewsInclude<ExtArgs> | null
    /**
     * Filter, which LessonReviews to fetch.
     */
    where: LessonReviewsWhereUniqueInput
  }

  /**
   * LessonReviews findFirst
   */
  export type LessonReviewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonReviews
     */
    select?: LessonReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonReviewsInclude<ExtArgs> | null
    /**
     * Filter, which LessonReviews to fetch.
     */
    where?: LessonReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonReviews to fetch.
     */
    orderBy?: LessonReviewsOrderByWithRelationInput | LessonReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LessonReviews.
     */
    cursor?: LessonReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LessonReviews.
     */
    distinct?: LessonReviewsScalarFieldEnum | LessonReviewsScalarFieldEnum[]
  }

  /**
   * LessonReviews findFirstOrThrow
   */
  export type LessonReviewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonReviews
     */
    select?: LessonReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonReviewsInclude<ExtArgs> | null
    /**
     * Filter, which LessonReviews to fetch.
     */
    where?: LessonReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonReviews to fetch.
     */
    orderBy?: LessonReviewsOrderByWithRelationInput | LessonReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LessonReviews.
     */
    cursor?: LessonReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LessonReviews.
     */
    distinct?: LessonReviewsScalarFieldEnum | LessonReviewsScalarFieldEnum[]
  }

  /**
   * LessonReviews findMany
   */
  export type LessonReviewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonReviews
     */
    select?: LessonReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonReviewsInclude<ExtArgs> | null
    /**
     * Filter, which LessonReviews to fetch.
     */
    where?: LessonReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonReviews to fetch.
     */
    orderBy?: LessonReviewsOrderByWithRelationInput | LessonReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LessonReviews.
     */
    cursor?: LessonReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonReviews.
     */
    skip?: number
    distinct?: LessonReviewsScalarFieldEnum | LessonReviewsScalarFieldEnum[]
  }

  /**
   * LessonReviews create
   */
  export type LessonReviewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonReviews
     */
    select?: LessonReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonReviewsInclude<ExtArgs> | null
    /**
     * The data needed to create a LessonReviews.
     */
    data: XOR<LessonReviewsCreateInput, LessonReviewsUncheckedCreateInput>
  }

  /**
   * LessonReviews createMany
   */
  export type LessonReviewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LessonReviews.
     */
    data: LessonReviewsCreateManyInput | LessonReviewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LessonReviews createManyAndReturn
   */
  export type LessonReviewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonReviews
     */
    select?: LessonReviewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many LessonReviews.
     */
    data: LessonReviewsCreateManyInput | LessonReviewsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonReviewsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LessonReviews update
   */
  export type LessonReviewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonReviews
     */
    select?: LessonReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonReviewsInclude<ExtArgs> | null
    /**
     * The data needed to update a LessonReviews.
     */
    data: XOR<LessonReviewsUpdateInput, LessonReviewsUncheckedUpdateInput>
    /**
     * Choose, which LessonReviews to update.
     */
    where: LessonReviewsWhereUniqueInput
  }

  /**
   * LessonReviews updateMany
   */
  export type LessonReviewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LessonReviews.
     */
    data: XOR<LessonReviewsUpdateManyMutationInput, LessonReviewsUncheckedUpdateManyInput>
    /**
     * Filter which LessonReviews to update
     */
    where?: LessonReviewsWhereInput
  }

  /**
   * LessonReviews upsert
   */
  export type LessonReviewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonReviews
     */
    select?: LessonReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonReviewsInclude<ExtArgs> | null
    /**
     * The filter to search for the LessonReviews to update in case it exists.
     */
    where: LessonReviewsWhereUniqueInput
    /**
     * In case the LessonReviews found by the `where` argument doesn't exist, create a new LessonReviews with this data.
     */
    create: XOR<LessonReviewsCreateInput, LessonReviewsUncheckedCreateInput>
    /**
     * In case the LessonReviews was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LessonReviewsUpdateInput, LessonReviewsUncheckedUpdateInput>
  }

  /**
   * LessonReviews delete
   */
  export type LessonReviewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonReviews
     */
    select?: LessonReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonReviewsInclude<ExtArgs> | null
    /**
     * Filter which LessonReviews to delete.
     */
    where: LessonReviewsWhereUniqueInput
  }

  /**
   * LessonReviews deleteMany
   */
  export type LessonReviewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LessonReviews to delete
     */
    where?: LessonReviewsWhereInput
  }

  /**
   * LessonReviews without action
   */
  export type LessonReviewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonReviews
     */
    select?: LessonReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonReviewsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PointScalarFieldEnum: {
    userId: 'userId',
    basicPoint: 'basicPoint',
    activityPoint: 'activityPoint'
  };

  export type PointScalarFieldEnum = (typeof PointScalarFieldEnum)[keyof typeof PointScalarFieldEnum]


  export const LessonScalarFieldEnum: {
    lessonId: 'lessonId',
    title: 'title'
  };

  export type LessonScalarFieldEnum = (typeof LessonScalarFieldEnum)[keyof typeof LessonScalarFieldEnum]


  export const LessonProgressScalarFieldEnum: {
    lessonId: 'lessonId',
    userId: 'userId',
    completed: 'completed',
    completedAt: 'completedAt'
  };

  export type LessonProgressScalarFieldEnum = (typeof LessonProgressScalarFieldEnum)[keyof typeof LessonProgressScalarFieldEnum]


  export const BadgeScalarFieldEnum: {
    badgeId: 'badgeId',
    name: 'name',
    description: 'description',
    image: 'image',
    criteria: 'criteria'
  };

  export type BadgeScalarFieldEnum = (typeof BadgeScalarFieldEnum)[keyof typeof BadgeScalarFieldEnum]


  export const UserBadgeScalarFieldEnum: {
    userId: 'userId',
    badgeId: 'badgeId',
    obtainedAt: 'obtainedAt'
  };

  export type UserBadgeScalarFieldEnum = (typeof UserBadgeScalarFieldEnum)[keyof typeof UserBadgeScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    commentId: 'commentId',
    lessonId: 'lessonId',
    userId: 'userId',
    content: 'content',
    createdAt: 'createdAt',
    like: 'like'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const SrhiAnswerScalarFieldEnum: {
    srhiId: 'srhiId',
    userId: 'userId',
    q1: 'q1',
    q2: 'q2',
    q3: 'q3',
    q4: 'q4',
    q5: 'q5',
    q6: 'q6',
    q7: 'q7',
    submittedAt: 'submittedAt'
  };

  export type SrhiAnswerScalarFieldEnum = (typeof SrhiAnswerScalarFieldEnum)[keyof typeof SrhiAnswerScalarFieldEnum]


  export const LessonReviewsScalarFieldEnum: {
    lessonId: 'lessonId',
    userId: 'userId',
    reviewedAt: 'reviewedAt'
  };

  export type LessonReviewsScalarFieldEnum = (typeof LessonReviewsScalarFieldEnum)[keyof typeof LessonReviewsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    Points?: PointListRelationFilter
    LessonProgress?: LessonProgressListRelationFilter
    UserBadge?: UserBadgeListRelationFilter
    Comment?: CommentListRelationFilter
    LessonReviews?: LessonReviewsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    Points?: PointOrderByRelationAggregateInput
    LessonProgress?: LessonProgressOrderByRelationAggregateInput
    UserBadge?: UserBadgeOrderByRelationAggregateInput
    Comment?: CommentOrderByRelationAggregateInput
    LessonReviews?: LessonReviewsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    Points?: PointListRelationFilter
    LessonProgress?: LessonProgressListRelationFilter
    UserBadge?: UserBadgeListRelationFilter
    Comment?: CommentListRelationFilter
    LessonReviews?: LessonReviewsListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type PointWhereInput = {
    AND?: PointWhereInput | PointWhereInput[]
    OR?: PointWhereInput[]
    NOT?: PointWhereInput | PointWhereInput[]
    userId?: StringFilter<"Point"> | string
    basicPoint?: IntFilter<"Point"> | number
    activityPoint?: IntFilter<"Point"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type PointOrderByWithRelationInput = {
    userId?: SortOrder
    basicPoint?: SortOrder
    activityPoint?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PointWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    AND?: PointWhereInput | PointWhereInput[]
    OR?: PointWhereInput[]
    NOT?: PointWhereInput | PointWhereInput[]
    basicPoint?: IntFilter<"Point"> | number
    activityPoint?: IntFilter<"Point"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "userId">

  export type PointOrderByWithAggregationInput = {
    userId?: SortOrder
    basicPoint?: SortOrder
    activityPoint?: SortOrder
    _count?: PointCountOrderByAggregateInput
    _avg?: PointAvgOrderByAggregateInput
    _max?: PointMaxOrderByAggregateInput
    _min?: PointMinOrderByAggregateInput
    _sum?: PointSumOrderByAggregateInput
  }

  export type PointScalarWhereWithAggregatesInput = {
    AND?: PointScalarWhereWithAggregatesInput | PointScalarWhereWithAggregatesInput[]
    OR?: PointScalarWhereWithAggregatesInput[]
    NOT?: PointScalarWhereWithAggregatesInput | PointScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"Point"> | string
    basicPoint?: IntWithAggregatesFilter<"Point"> | number
    activityPoint?: IntWithAggregatesFilter<"Point"> | number
  }

  export type LessonWhereInput = {
    AND?: LessonWhereInput | LessonWhereInput[]
    OR?: LessonWhereInput[]
    NOT?: LessonWhereInput | LessonWhereInput[]
    lessonId?: IntFilter<"Lesson"> | number
    title?: StringFilter<"Lesson"> | string
    LessonProgress?: LessonProgressListRelationFilter
    Comment?: CommentListRelationFilter
    LessonReviews?: LessonReviewsListRelationFilter
  }

  export type LessonOrderByWithRelationInput = {
    lessonId?: SortOrder
    title?: SortOrder
    LessonProgress?: LessonProgressOrderByRelationAggregateInput
    Comment?: CommentOrderByRelationAggregateInput
    LessonReviews?: LessonReviewsOrderByRelationAggregateInput
  }

  export type LessonWhereUniqueInput = Prisma.AtLeast<{
    lessonId?: number
    AND?: LessonWhereInput | LessonWhereInput[]
    OR?: LessonWhereInput[]
    NOT?: LessonWhereInput | LessonWhereInput[]
    title?: StringFilter<"Lesson"> | string
    LessonProgress?: LessonProgressListRelationFilter
    Comment?: CommentListRelationFilter
    LessonReviews?: LessonReviewsListRelationFilter
  }, "lessonId">

  export type LessonOrderByWithAggregationInput = {
    lessonId?: SortOrder
    title?: SortOrder
    _count?: LessonCountOrderByAggregateInput
    _avg?: LessonAvgOrderByAggregateInput
    _max?: LessonMaxOrderByAggregateInput
    _min?: LessonMinOrderByAggregateInput
    _sum?: LessonSumOrderByAggregateInput
  }

  export type LessonScalarWhereWithAggregatesInput = {
    AND?: LessonScalarWhereWithAggregatesInput | LessonScalarWhereWithAggregatesInput[]
    OR?: LessonScalarWhereWithAggregatesInput[]
    NOT?: LessonScalarWhereWithAggregatesInput | LessonScalarWhereWithAggregatesInput[]
    lessonId?: IntWithAggregatesFilter<"Lesson"> | number
    title?: StringWithAggregatesFilter<"Lesson"> | string
  }

  export type LessonProgressWhereInput = {
    AND?: LessonProgressWhereInput | LessonProgressWhereInput[]
    OR?: LessonProgressWhereInput[]
    NOT?: LessonProgressWhereInput | LessonProgressWhereInput[]
    lessonId?: IntFilter<"LessonProgress"> | number
    userId?: StringFilter<"LessonProgress"> | string
    completed?: BoolFilter<"LessonProgress"> | boolean
    completedAt?: DateTimeFilter<"LessonProgress"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    lesson?: XOR<LessonRelationFilter, LessonWhereInput>
  }

  export type LessonProgressOrderByWithRelationInput = {
    lessonId?: SortOrder
    userId?: SortOrder
    completed?: SortOrder
    completedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    lesson?: LessonOrderByWithRelationInput
  }

  export type LessonProgressWhereUniqueInput = Prisma.AtLeast<{
    lesson_progress_identifier?: LessonProgressLesson_progress_identifierCompoundUniqueInput
    lessonId_userId?: LessonProgressLessonIdUserIdCompoundUniqueInput
    AND?: LessonProgressWhereInput | LessonProgressWhereInput[]
    OR?: LessonProgressWhereInput[]
    NOT?: LessonProgressWhereInput | LessonProgressWhereInput[]
    lessonId?: IntFilter<"LessonProgress"> | number
    userId?: StringFilter<"LessonProgress"> | string
    completed?: BoolFilter<"LessonProgress"> | boolean
    completedAt?: DateTimeFilter<"LessonProgress"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    lesson?: XOR<LessonRelationFilter, LessonWhereInput>
  }, "lessonId_userId" | "lesson_progress_identifier">

  export type LessonProgressOrderByWithAggregationInput = {
    lessonId?: SortOrder
    userId?: SortOrder
    completed?: SortOrder
    completedAt?: SortOrder
    _count?: LessonProgressCountOrderByAggregateInput
    _avg?: LessonProgressAvgOrderByAggregateInput
    _max?: LessonProgressMaxOrderByAggregateInput
    _min?: LessonProgressMinOrderByAggregateInput
    _sum?: LessonProgressSumOrderByAggregateInput
  }

  export type LessonProgressScalarWhereWithAggregatesInput = {
    AND?: LessonProgressScalarWhereWithAggregatesInput | LessonProgressScalarWhereWithAggregatesInput[]
    OR?: LessonProgressScalarWhereWithAggregatesInput[]
    NOT?: LessonProgressScalarWhereWithAggregatesInput | LessonProgressScalarWhereWithAggregatesInput[]
    lessonId?: IntWithAggregatesFilter<"LessonProgress"> | number
    userId?: StringWithAggregatesFilter<"LessonProgress"> | string
    completed?: BoolWithAggregatesFilter<"LessonProgress"> | boolean
    completedAt?: DateTimeWithAggregatesFilter<"LessonProgress"> | Date | string
  }

  export type BadgeWhereInput = {
    AND?: BadgeWhereInput | BadgeWhereInput[]
    OR?: BadgeWhereInput[]
    NOT?: BadgeWhereInput | BadgeWhereInput[]
    badgeId?: IntFilter<"Badge"> | number
    name?: StringFilter<"Badge"> | string
    description?: StringFilter<"Badge"> | string
    image?: StringNullableFilter<"Badge"> | string | null
    criteria?: JsonFilter<"Badge">
    UserBadge?: UserBadgeListRelationFilter
  }

  export type BadgeOrderByWithRelationInput = {
    badgeId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrderInput | SortOrder
    criteria?: SortOrder
    UserBadge?: UserBadgeOrderByRelationAggregateInput
  }

  export type BadgeWhereUniqueInput = Prisma.AtLeast<{
    badgeId?: number
    AND?: BadgeWhereInput | BadgeWhereInput[]
    OR?: BadgeWhereInput[]
    NOT?: BadgeWhereInput | BadgeWhereInput[]
    name?: StringFilter<"Badge"> | string
    description?: StringFilter<"Badge"> | string
    image?: StringNullableFilter<"Badge"> | string | null
    criteria?: JsonFilter<"Badge">
    UserBadge?: UserBadgeListRelationFilter
  }, "badgeId">

  export type BadgeOrderByWithAggregationInput = {
    badgeId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrderInput | SortOrder
    criteria?: SortOrder
    _count?: BadgeCountOrderByAggregateInput
    _avg?: BadgeAvgOrderByAggregateInput
    _max?: BadgeMaxOrderByAggregateInput
    _min?: BadgeMinOrderByAggregateInput
    _sum?: BadgeSumOrderByAggregateInput
  }

  export type BadgeScalarWhereWithAggregatesInput = {
    AND?: BadgeScalarWhereWithAggregatesInput | BadgeScalarWhereWithAggregatesInput[]
    OR?: BadgeScalarWhereWithAggregatesInput[]
    NOT?: BadgeScalarWhereWithAggregatesInput | BadgeScalarWhereWithAggregatesInput[]
    badgeId?: IntWithAggregatesFilter<"Badge"> | number
    name?: StringWithAggregatesFilter<"Badge"> | string
    description?: StringWithAggregatesFilter<"Badge"> | string
    image?: StringNullableWithAggregatesFilter<"Badge"> | string | null
    criteria?: JsonWithAggregatesFilter<"Badge">
  }

  export type UserBadgeWhereInput = {
    AND?: UserBadgeWhereInput | UserBadgeWhereInput[]
    OR?: UserBadgeWhereInput[]
    NOT?: UserBadgeWhereInput | UserBadgeWhereInput[]
    userId?: StringFilter<"UserBadge"> | string
    badgeId?: IntFilter<"UserBadge"> | number
    obtainedAt?: DateTimeFilter<"UserBadge"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    badge?: XOR<BadgeRelationFilter, BadgeWhereInput>
  }

  export type UserBadgeOrderByWithRelationInput = {
    userId?: SortOrder
    badgeId?: SortOrder
    obtainedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    badge?: BadgeOrderByWithRelationInput
  }

  export type UserBadgeWhereUniqueInput = Prisma.AtLeast<{
    user_badge_identifier?: UserBadgeUser_badge_identifierCompoundUniqueInput
    userId_badgeId?: UserBadgeUserIdBadgeIdCompoundUniqueInput
    AND?: UserBadgeWhereInput | UserBadgeWhereInput[]
    OR?: UserBadgeWhereInput[]
    NOT?: UserBadgeWhereInput | UserBadgeWhereInput[]
    userId?: StringFilter<"UserBadge"> | string
    badgeId?: IntFilter<"UserBadge"> | number
    obtainedAt?: DateTimeFilter<"UserBadge"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    badge?: XOR<BadgeRelationFilter, BadgeWhereInput>
  }, "userId_badgeId" | "user_badge_identifier">

  export type UserBadgeOrderByWithAggregationInput = {
    userId?: SortOrder
    badgeId?: SortOrder
    obtainedAt?: SortOrder
    _count?: UserBadgeCountOrderByAggregateInput
    _avg?: UserBadgeAvgOrderByAggregateInput
    _max?: UserBadgeMaxOrderByAggregateInput
    _min?: UserBadgeMinOrderByAggregateInput
    _sum?: UserBadgeSumOrderByAggregateInput
  }

  export type UserBadgeScalarWhereWithAggregatesInput = {
    AND?: UserBadgeScalarWhereWithAggregatesInput | UserBadgeScalarWhereWithAggregatesInput[]
    OR?: UserBadgeScalarWhereWithAggregatesInput[]
    NOT?: UserBadgeScalarWhereWithAggregatesInput | UserBadgeScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"UserBadge"> | string
    badgeId?: IntWithAggregatesFilter<"UserBadge"> | number
    obtainedAt?: DateTimeWithAggregatesFilter<"UserBadge"> | Date | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    commentId?: StringFilter<"Comment"> | string
    lessonId?: IntFilter<"Comment"> | number
    userId?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    like?: IntFilter<"Comment"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    lesson?: XOR<LessonRelationFilter, LessonWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    commentId?: SortOrder
    lessonId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    like?: SortOrder
    user?: UserOrderByWithRelationInput
    lesson?: LessonOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    commentId?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    lessonId?: IntFilter<"Comment"> | number
    userId?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    like?: IntFilter<"Comment"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    lesson?: XOR<LessonRelationFilter, LessonWhereInput>
  }, "commentId">

  export type CommentOrderByWithAggregationInput = {
    commentId?: SortOrder
    lessonId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    like?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _avg?: CommentAvgOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
    _sum?: CommentSumOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    commentId?: StringWithAggregatesFilter<"Comment"> | string
    lessonId?: IntWithAggregatesFilter<"Comment"> | number
    userId?: StringWithAggregatesFilter<"Comment"> | string
    content?: StringWithAggregatesFilter<"Comment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    like?: IntWithAggregatesFilter<"Comment"> | number
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type SrhiAnswerWhereInput = {
    AND?: SrhiAnswerWhereInput | SrhiAnswerWhereInput[]
    OR?: SrhiAnswerWhereInput[]
    NOT?: SrhiAnswerWhereInput | SrhiAnswerWhereInput[]
    srhiId?: IntFilter<"SrhiAnswer"> | number
    userId?: StringFilter<"SrhiAnswer"> | string
    q1?: IntFilter<"SrhiAnswer"> | number
    q2?: IntFilter<"SrhiAnswer"> | number
    q3?: IntFilter<"SrhiAnswer"> | number
    q4?: IntFilter<"SrhiAnswer"> | number
    q5?: IntFilter<"SrhiAnswer"> | number
    q6?: IntFilter<"SrhiAnswer"> | number
    q7?: IntFilter<"SrhiAnswer"> | number
    submittedAt?: DateTimeFilter<"SrhiAnswer"> | Date | string
  }

  export type SrhiAnswerOrderByWithRelationInput = {
    srhiId?: SortOrder
    userId?: SortOrder
    q1?: SortOrder
    q2?: SortOrder
    q3?: SortOrder
    q4?: SortOrder
    q5?: SortOrder
    q6?: SortOrder
    q7?: SortOrder
    submittedAt?: SortOrder
  }

  export type SrhiAnswerWhereUniqueInput = Prisma.AtLeast<{
    srhiId?: number
    AND?: SrhiAnswerWhereInput | SrhiAnswerWhereInput[]
    OR?: SrhiAnswerWhereInput[]
    NOT?: SrhiAnswerWhereInput | SrhiAnswerWhereInput[]
    userId?: StringFilter<"SrhiAnswer"> | string
    q1?: IntFilter<"SrhiAnswer"> | number
    q2?: IntFilter<"SrhiAnswer"> | number
    q3?: IntFilter<"SrhiAnswer"> | number
    q4?: IntFilter<"SrhiAnswer"> | number
    q5?: IntFilter<"SrhiAnswer"> | number
    q6?: IntFilter<"SrhiAnswer"> | number
    q7?: IntFilter<"SrhiAnswer"> | number
    submittedAt?: DateTimeFilter<"SrhiAnswer"> | Date | string
  }, "srhiId">

  export type SrhiAnswerOrderByWithAggregationInput = {
    srhiId?: SortOrder
    userId?: SortOrder
    q1?: SortOrder
    q2?: SortOrder
    q3?: SortOrder
    q4?: SortOrder
    q5?: SortOrder
    q6?: SortOrder
    q7?: SortOrder
    submittedAt?: SortOrder
    _count?: SrhiAnswerCountOrderByAggregateInput
    _avg?: SrhiAnswerAvgOrderByAggregateInput
    _max?: SrhiAnswerMaxOrderByAggregateInput
    _min?: SrhiAnswerMinOrderByAggregateInput
    _sum?: SrhiAnswerSumOrderByAggregateInput
  }

  export type SrhiAnswerScalarWhereWithAggregatesInput = {
    AND?: SrhiAnswerScalarWhereWithAggregatesInput | SrhiAnswerScalarWhereWithAggregatesInput[]
    OR?: SrhiAnswerScalarWhereWithAggregatesInput[]
    NOT?: SrhiAnswerScalarWhereWithAggregatesInput | SrhiAnswerScalarWhereWithAggregatesInput[]
    srhiId?: IntWithAggregatesFilter<"SrhiAnswer"> | number
    userId?: StringWithAggregatesFilter<"SrhiAnswer"> | string
    q1?: IntWithAggregatesFilter<"SrhiAnswer"> | number
    q2?: IntWithAggregatesFilter<"SrhiAnswer"> | number
    q3?: IntWithAggregatesFilter<"SrhiAnswer"> | number
    q4?: IntWithAggregatesFilter<"SrhiAnswer"> | number
    q5?: IntWithAggregatesFilter<"SrhiAnswer"> | number
    q6?: IntWithAggregatesFilter<"SrhiAnswer"> | number
    q7?: IntWithAggregatesFilter<"SrhiAnswer"> | number
    submittedAt?: DateTimeWithAggregatesFilter<"SrhiAnswer"> | Date | string
  }

  export type LessonReviewsWhereInput = {
    AND?: LessonReviewsWhereInput | LessonReviewsWhereInput[]
    OR?: LessonReviewsWhereInput[]
    NOT?: LessonReviewsWhereInput | LessonReviewsWhereInput[]
    lessonId?: IntFilter<"LessonReviews"> | number
    userId?: StringFilter<"LessonReviews"> | string
    reviewedAt?: DateTimeFilter<"LessonReviews"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    lesson?: XOR<LessonRelationFilter, LessonWhereInput>
  }

  export type LessonReviewsOrderByWithRelationInput = {
    lessonId?: SortOrder
    userId?: SortOrder
    reviewedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    lesson?: LessonOrderByWithRelationInput
  }

  export type LessonReviewsWhereUniqueInput = Prisma.AtLeast<{
    lesson_review_identifier?: LessonReviewsLesson_review_identifierCompoundUniqueInput
    lessonId_userId?: LessonReviewsLessonIdUserIdCompoundUniqueInput
    AND?: LessonReviewsWhereInput | LessonReviewsWhereInput[]
    OR?: LessonReviewsWhereInput[]
    NOT?: LessonReviewsWhereInput | LessonReviewsWhereInput[]
    lessonId?: IntFilter<"LessonReviews"> | number
    userId?: StringFilter<"LessonReviews"> | string
    reviewedAt?: DateTimeFilter<"LessonReviews"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    lesson?: XOR<LessonRelationFilter, LessonWhereInput>
  }, "lessonId_userId" | "lesson_review_identifier">

  export type LessonReviewsOrderByWithAggregationInput = {
    lessonId?: SortOrder
    userId?: SortOrder
    reviewedAt?: SortOrder
    _count?: LessonReviewsCountOrderByAggregateInput
    _avg?: LessonReviewsAvgOrderByAggregateInput
    _max?: LessonReviewsMaxOrderByAggregateInput
    _min?: LessonReviewsMinOrderByAggregateInput
    _sum?: LessonReviewsSumOrderByAggregateInput
  }

  export type LessonReviewsScalarWhereWithAggregatesInput = {
    AND?: LessonReviewsScalarWhereWithAggregatesInput | LessonReviewsScalarWhereWithAggregatesInput[]
    OR?: LessonReviewsScalarWhereWithAggregatesInput[]
    NOT?: LessonReviewsScalarWhereWithAggregatesInput | LessonReviewsScalarWhereWithAggregatesInput[]
    lessonId?: IntWithAggregatesFilter<"LessonReviews"> | number
    userId?: StringWithAggregatesFilter<"LessonReviews"> | string
    reviewedAt?: DateTimeWithAggregatesFilter<"LessonReviews"> | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    Points?: PointCreateNestedManyWithoutUserInput
    LessonProgress?: LessonProgressCreateNestedManyWithoutUserInput
    UserBadge?: UserBadgeCreateNestedManyWithoutUserInput
    Comment?: CommentCreateNestedManyWithoutUserInput
    LessonReviews?: LessonReviewsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Points?: PointUncheckedCreateNestedManyWithoutUserInput
    LessonProgress?: LessonProgressUncheckedCreateNestedManyWithoutUserInput
    UserBadge?: UserBadgeUncheckedCreateNestedManyWithoutUserInput
    Comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    LessonReviews?: LessonReviewsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Points?: PointUpdateManyWithoutUserNestedInput
    LessonProgress?: LessonProgressUpdateManyWithoutUserNestedInput
    UserBadge?: UserBadgeUpdateManyWithoutUserNestedInput
    Comment?: CommentUpdateManyWithoutUserNestedInput
    LessonReviews?: LessonReviewsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Points?: PointUncheckedUpdateManyWithoutUserNestedInput
    LessonProgress?: LessonProgressUncheckedUpdateManyWithoutUserNestedInput
    UserBadge?: UserBadgeUncheckedUpdateManyWithoutUserNestedInput
    Comment?: CommentUncheckedUpdateManyWithoutUserNestedInput
    LessonReviews?: LessonReviewsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PointCreateInput = {
    basicPoint?: number
    activityPoint?: number
    user: UserCreateNestedOneWithoutPointsInput
  }

  export type PointUncheckedCreateInput = {
    userId: string
    basicPoint?: number
    activityPoint?: number
  }

  export type PointUpdateInput = {
    basicPoint?: IntFieldUpdateOperationsInput | number
    activityPoint?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutPointsNestedInput
  }

  export type PointUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    basicPoint?: IntFieldUpdateOperationsInput | number
    activityPoint?: IntFieldUpdateOperationsInput | number
  }

  export type PointCreateManyInput = {
    userId: string
    basicPoint?: number
    activityPoint?: number
  }

  export type PointUpdateManyMutationInput = {
    basicPoint?: IntFieldUpdateOperationsInput | number
    activityPoint?: IntFieldUpdateOperationsInput | number
  }

  export type PointUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    basicPoint?: IntFieldUpdateOperationsInput | number
    activityPoint?: IntFieldUpdateOperationsInput | number
  }

  export type LessonCreateInput = {
    title: string
    LessonProgress?: LessonProgressCreateNestedManyWithoutLessonInput
    Comment?: CommentCreateNestedManyWithoutLessonInput
    LessonReviews?: LessonReviewsCreateNestedManyWithoutLessonInput
  }

  export type LessonUncheckedCreateInput = {
    lessonId?: number
    title: string
    LessonProgress?: LessonProgressUncheckedCreateNestedManyWithoutLessonInput
    Comment?: CommentUncheckedCreateNestedManyWithoutLessonInput
    LessonReviews?: LessonReviewsUncheckedCreateNestedManyWithoutLessonInput
  }

  export type LessonUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    LessonProgress?: LessonProgressUpdateManyWithoutLessonNestedInput
    Comment?: CommentUpdateManyWithoutLessonNestedInput
    LessonReviews?: LessonReviewsUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateInput = {
    lessonId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    LessonProgress?: LessonProgressUncheckedUpdateManyWithoutLessonNestedInput
    Comment?: CommentUncheckedUpdateManyWithoutLessonNestedInput
    LessonReviews?: LessonReviewsUncheckedUpdateManyWithoutLessonNestedInput
  }

  export type LessonCreateManyInput = {
    lessonId?: number
    title: string
  }

  export type LessonUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
  }

  export type LessonUncheckedUpdateManyInput = {
    lessonId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type LessonProgressCreateInput = {
    completed: boolean
    completedAt?: Date | string
    user: UserCreateNestedOneWithoutLessonProgressInput
    lesson: LessonCreateNestedOneWithoutLessonProgressInput
  }

  export type LessonProgressUncheckedCreateInput = {
    lessonId: number
    userId: string
    completed: boolean
    completedAt?: Date | string
  }

  export type LessonProgressUpdateInput = {
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLessonProgressNestedInput
    lesson?: LessonUpdateOneRequiredWithoutLessonProgressNestedInput
  }

  export type LessonProgressUncheckedUpdateInput = {
    lessonId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonProgressCreateManyInput = {
    lessonId: number
    userId: string
    completed: boolean
    completedAt?: Date | string
  }

  export type LessonProgressUpdateManyMutationInput = {
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonProgressUncheckedUpdateManyInput = {
    lessonId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BadgeCreateInput = {
    name: string
    description: string
    image?: string | null
    criteria: JsonNullValueInput | InputJsonValue
    UserBadge?: UserBadgeCreateNestedManyWithoutBadgeInput
  }

  export type BadgeUncheckedCreateInput = {
    badgeId?: number
    name: string
    description: string
    image?: string | null
    criteria: JsonNullValueInput | InputJsonValue
    UserBadge?: UserBadgeUncheckedCreateNestedManyWithoutBadgeInput
  }

  export type BadgeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    criteria?: JsonNullValueInput | InputJsonValue
    UserBadge?: UserBadgeUpdateManyWithoutBadgeNestedInput
  }

  export type BadgeUncheckedUpdateInput = {
    badgeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    criteria?: JsonNullValueInput | InputJsonValue
    UserBadge?: UserBadgeUncheckedUpdateManyWithoutBadgeNestedInput
  }

  export type BadgeCreateManyInput = {
    badgeId?: number
    name: string
    description: string
    image?: string | null
    criteria: JsonNullValueInput | InputJsonValue
  }

  export type BadgeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    criteria?: JsonNullValueInput | InputJsonValue
  }

  export type BadgeUncheckedUpdateManyInput = {
    badgeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    criteria?: JsonNullValueInput | InputJsonValue
  }

  export type UserBadgeCreateInput = {
    obtainedAt: Date | string
    user: UserCreateNestedOneWithoutUserBadgeInput
    badge: BadgeCreateNestedOneWithoutUserBadgeInput
  }

  export type UserBadgeUncheckedCreateInput = {
    userId: string
    badgeId: number
    obtainedAt: Date | string
  }

  export type UserBadgeUpdateInput = {
    obtainedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserBadgeNestedInput
    badge?: BadgeUpdateOneRequiredWithoutUserBadgeNestedInput
  }

  export type UserBadgeUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    badgeId?: IntFieldUpdateOperationsInput | number
    obtainedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBadgeCreateManyInput = {
    userId: string
    badgeId: number
    obtainedAt: Date | string
  }

  export type UserBadgeUpdateManyMutationInput = {
    obtainedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBadgeUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    badgeId?: IntFieldUpdateOperationsInput | number
    obtainedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateInput = {
    commentId?: string
    content: string
    createdAt?: Date | string
    like?: number
    user: UserCreateNestedOneWithoutCommentInput
    lesson: LessonCreateNestedOneWithoutCommentInput
  }

  export type CommentUncheckedCreateInput = {
    commentId?: string
    lessonId: number
    userId: string
    content: string
    createdAt?: Date | string
    like?: number
  }

  export type CommentUpdateInput = {
    commentId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    like?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutCommentNestedInput
    lesson?: LessonUpdateOneRequiredWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    commentId?: StringFieldUpdateOperationsInput | string
    lessonId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    like?: IntFieldUpdateOperationsInput | number
  }

  export type CommentCreateManyInput = {
    commentId?: string
    lessonId: number
    userId: string
    content: string
    createdAt?: Date | string
    like?: number
  }

  export type CommentUpdateManyMutationInput = {
    commentId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    like?: IntFieldUpdateOperationsInput | number
  }

  export type CommentUncheckedUpdateManyInput = {
    commentId?: StringFieldUpdateOperationsInput | string
    lessonId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    like?: IntFieldUpdateOperationsInput | number
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SrhiAnswerCreateInput = {
    userId: string
    q1: number
    q2: number
    q3: number
    q4: number
    q5: number
    q6: number
    q7: number
    submittedAt?: Date | string
  }

  export type SrhiAnswerUncheckedCreateInput = {
    srhiId?: number
    userId: string
    q1: number
    q2: number
    q3: number
    q4: number
    q5: number
    q6: number
    q7: number
    submittedAt?: Date | string
  }

  export type SrhiAnswerUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    q1?: IntFieldUpdateOperationsInput | number
    q2?: IntFieldUpdateOperationsInput | number
    q3?: IntFieldUpdateOperationsInput | number
    q4?: IntFieldUpdateOperationsInput | number
    q5?: IntFieldUpdateOperationsInput | number
    q6?: IntFieldUpdateOperationsInput | number
    q7?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SrhiAnswerUncheckedUpdateInput = {
    srhiId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    q1?: IntFieldUpdateOperationsInput | number
    q2?: IntFieldUpdateOperationsInput | number
    q3?: IntFieldUpdateOperationsInput | number
    q4?: IntFieldUpdateOperationsInput | number
    q5?: IntFieldUpdateOperationsInput | number
    q6?: IntFieldUpdateOperationsInput | number
    q7?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SrhiAnswerCreateManyInput = {
    srhiId?: number
    userId: string
    q1: number
    q2: number
    q3: number
    q4: number
    q5: number
    q6: number
    q7: number
    submittedAt?: Date | string
  }

  export type SrhiAnswerUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    q1?: IntFieldUpdateOperationsInput | number
    q2?: IntFieldUpdateOperationsInput | number
    q3?: IntFieldUpdateOperationsInput | number
    q4?: IntFieldUpdateOperationsInput | number
    q5?: IntFieldUpdateOperationsInput | number
    q6?: IntFieldUpdateOperationsInput | number
    q7?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SrhiAnswerUncheckedUpdateManyInput = {
    srhiId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    q1?: IntFieldUpdateOperationsInput | number
    q2?: IntFieldUpdateOperationsInput | number
    q3?: IntFieldUpdateOperationsInput | number
    q4?: IntFieldUpdateOperationsInput | number
    q5?: IntFieldUpdateOperationsInput | number
    q6?: IntFieldUpdateOperationsInput | number
    q7?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonReviewsCreateInput = {
    reviewedAt?: Date | string
    user: UserCreateNestedOneWithoutLessonReviewsInput
    lesson: LessonCreateNestedOneWithoutLessonReviewsInput
  }

  export type LessonReviewsUncheckedCreateInput = {
    lessonId: number
    userId: string
    reviewedAt?: Date | string
  }

  export type LessonReviewsUpdateInput = {
    reviewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLessonReviewsNestedInput
    lesson?: LessonUpdateOneRequiredWithoutLessonReviewsNestedInput
  }

  export type LessonReviewsUncheckedUpdateInput = {
    lessonId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    reviewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonReviewsCreateManyInput = {
    lessonId: number
    userId: string
    reviewedAt?: Date | string
  }

  export type LessonReviewsUpdateManyMutationInput = {
    reviewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonReviewsUncheckedUpdateManyInput = {
    lessonId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    reviewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type PointListRelationFilter = {
    every?: PointWhereInput
    some?: PointWhereInput
    none?: PointWhereInput
  }

  export type LessonProgressListRelationFilter = {
    every?: LessonProgressWhereInput
    some?: LessonProgressWhereInput
    none?: LessonProgressWhereInput
  }

  export type UserBadgeListRelationFilter = {
    every?: UserBadgeWhereInput
    some?: UserBadgeWhereInput
    none?: UserBadgeWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type LessonReviewsListRelationFilter = {
    every?: LessonReviewsWhereInput
    some?: LessonReviewsWhereInput
    none?: LessonReviewsWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PointOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LessonProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserBadgeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LessonReviewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type PointCountOrderByAggregateInput = {
    userId?: SortOrder
    basicPoint?: SortOrder
    activityPoint?: SortOrder
  }

  export type PointAvgOrderByAggregateInput = {
    basicPoint?: SortOrder
    activityPoint?: SortOrder
  }

  export type PointMaxOrderByAggregateInput = {
    userId?: SortOrder
    basicPoint?: SortOrder
    activityPoint?: SortOrder
  }

  export type PointMinOrderByAggregateInput = {
    userId?: SortOrder
    basicPoint?: SortOrder
    activityPoint?: SortOrder
  }

  export type PointSumOrderByAggregateInput = {
    basicPoint?: SortOrder
    activityPoint?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type LessonCountOrderByAggregateInput = {
    lessonId?: SortOrder
    title?: SortOrder
  }

  export type LessonAvgOrderByAggregateInput = {
    lessonId?: SortOrder
  }

  export type LessonMaxOrderByAggregateInput = {
    lessonId?: SortOrder
    title?: SortOrder
  }

  export type LessonMinOrderByAggregateInput = {
    lessonId?: SortOrder
    title?: SortOrder
  }

  export type LessonSumOrderByAggregateInput = {
    lessonId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type LessonRelationFilter = {
    is?: LessonWhereInput
    isNot?: LessonWhereInput
  }

  export type LessonProgressLesson_progress_identifierCompoundUniqueInput = {
    lessonId: number
    userId: string
  }

  export type LessonProgressLessonIdUserIdCompoundUniqueInput = {
    lessonId: number
    userId: string
  }

  export type LessonProgressCountOrderByAggregateInput = {
    lessonId?: SortOrder
    userId?: SortOrder
    completed?: SortOrder
    completedAt?: SortOrder
  }

  export type LessonProgressAvgOrderByAggregateInput = {
    lessonId?: SortOrder
  }

  export type LessonProgressMaxOrderByAggregateInput = {
    lessonId?: SortOrder
    userId?: SortOrder
    completed?: SortOrder
    completedAt?: SortOrder
  }

  export type LessonProgressMinOrderByAggregateInput = {
    lessonId?: SortOrder
    userId?: SortOrder
    completed?: SortOrder
    completedAt?: SortOrder
  }

  export type LessonProgressSumOrderByAggregateInput = {
    lessonId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BadgeCountOrderByAggregateInput = {
    badgeId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    criteria?: SortOrder
  }

  export type BadgeAvgOrderByAggregateInput = {
    badgeId?: SortOrder
  }

  export type BadgeMaxOrderByAggregateInput = {
    badgeId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
  }

  export type BadgeMinOrderByAggregateInput = {
    badgeId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
  }

  export type BadgeSumOrderByAggregateInput = {
    badgeId?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BadgeRelationFilter = {
    is?: BadgeWhereInput
    isNot?: BadgeWhereInput
  }

  export type UserBadgeUser_badge_identifierCompoundUniqueInput = {
    userId: string
    badgeId: number
  }

  export type UserBadgeUserIdBadgeIdCompoundUniqueInput = {
    userId: string
    badgeId: number
  }

  export type UserBadgeCountOrderByAggregateInput = {
    userId?: SortOrder
    badgeId?: SortOrder
    obtainedAt?: SortOrder
  }

  export type UserBadgeAvgOrderByAggregateInput = {
    badgeId?: SortOrder
  }

  export type UserBadgeMaxOrderByAggregateInput = {
    userId?: SortOrder
    badgeId?: SortOrder
    obtainedAt?: SortOrder
  }

  export type UserBadgeMinOrderByAggregateInput = {
    userId?: SortOrder
    badgeId?: SortOrder
    obtainedAt?: SortOrder
  }

  export type UserBadgeSumOrderByAggregateInput = {
    badgeId?: SortOrder
  }

  export type CommentCountOrderByAggregateInput = {
    commentId?: SortOrder
    lessonId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    like?: SortOrder
  }

  export type CommentAvgOrderByAggregateInput = {
    lessonId?: SortOrder
    like?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    commentId?: SortOrder
    lessonId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    like?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    commentId?: SortOrder
    lessonId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    like?: SortOrder
  }

  export type CommentSumOrderByAggregateInput = {
    lessonId?: SortOrder
    like?: SortOrder
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type SrhiAnswerCountOrderByAggregateInput = {
    srhiId?: SortOrder
    userId?: SortOrder
    q1?: SortOrder
    q2?: SortOrder
    q3?: SortOrder
    q4?: SortOrder
    q5?: SortOrder
    q6?: SortOrder
    q7?: SortOrder
    submittedAt?: SortOrder
  }

  export type SrhiAnswerAvgOrderByAggregateInput = {
    srhiId?: SortOrder
    q1?: SortOrder
    q2?: SortOrder
    q3?: SortOrder
    q4?: SortOrder
    q5?: SortOrder
    q6?: SortOrder
    q7?: SortOrder
  }

  export type SrhiAnswerMaxOrderByAggregateInput = {
    srhiId?: SortOrder
    userId?: SortOrder
    q1?: SortOrder
    q2?: SortOrder
    q3?: SortOrder
    q4?: SortOrder
    q5?: SortOrder
    q6?: SortOrder
    q7?: SortOrder
    submittedAt?: SortOrder
  }

  export type SrhiAnswerMinOrderByAggregateInput = {
    srhiId?: SortOrder
    userId?: SortOrder
    q1?: SortOrder
    q2?: SortOrder
    q3?: SortOrder
    q4?: SortOrder
    q5?: SortOrder
    q6?: SortOrder
    q7?: SortOrder
    submittedAt?: SortOrder
  }

  export type SrhiAnswerSumOrderByAggregateInput = {
    srhiId?: SortOrder
    q1?: SortOrder
    q2?: SortOrder
    q3?: SortOrder
    q4?: SortOrder
    q5?: SortOrder
    q6?: SortOrder
    q7?: SortOrder
  }

  export type LessonReviewsLesson_review_identifierCompoundUniqueInput = {
    lessonId: number
    userId: string
  }

  export type LessonReviewsLessonIdUserIdCompoundUniqueInput = {
    lessonId: number
    userId: string
  }

  export type LessonReviewsCountOrderByAggregateInput = {
    lessonId?: SortOrder
    userId?: SortOrder
    reviewedAt?: SortOrder
  }

  export type LessonReviewsAvgOrderByAggregateInput = {
    lessonId?: SortOrder
  }

  export type LessonReviewsMaxOrderByAggregateInput = {
    lessonId?: SortOrder
    userId?: SortOrder
    reviewedAt?: SortOrder
  }

  export type LessonReviewsMinOrderByAggregateInput = {
    lessonId?: SortOrder
    userId?: SortOrder
    reviewedAt?: SortOrder
  }

  export type LessonReviewsSumOrderByAggregateInput = {
    lessonId?: SortOrder
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type PointCreateNestedManyWithoutUserInput = {
    create?: XOR<PointCreateWithoutUserInput, PointUncheckedCreateWithoutUserInput> | PointCreateWithoutUserInput[] | PointUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PointCreateOrConnectWithoutUserInput | PointCreateOrConnectWithoutUserInput[]
    createMany?: PointCreateManyUserInputEnvelope
    connect?: PointWhereUniqueInput | PointWhereUniqueInput[]
  }

  export type LessonProgressCreateNestedManyWithoutUserInput = {
    create?: XOR<LessonProgressCreateWithoutUserInput, LessonProgressUncheckedCreateWithoutUserInput> | LessonProgressCreateWithoutUserInput[] | LessonProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LessonProgressCreateOrConnectWithoutUserInput | LessonProgressCreateOrConnectWithoutUserInput[]
    createMany?: LessonProgressCreateManyUserInputEnvelope
    connect?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
  }

  export type UserBadgeCreateNestedManyWithoutUserInput = {
    create?: XOR<UserBadgeCreateWithoutUserInput, UserBadgeUncheckedCreateWithoutUserInput> | UserBadgeCreateWithoutUserInput[] | UserBadgeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBadgeCreateOrConnectWithoutUserInput | UserBadgeCreateOrConnectWithoutUserInput[]
    createMany?: UserBadgeCreateManyUserInputEnvelope
    connect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type LessonReviewsCreateNestedManyWithoutUserInput = {
    create?: XOR<LessonReviewsCreateWithoutUserInput, LessonReviewsUncheckedCreateWithoutUserInput> | LessonReviewsCreateWithoutUserInput[] | LessonReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LessonReviewsCreateOrConnectWithoutUserInput | LessonReviewsCreateOrConnectWithoutUserInput[]
    createMany?: LessonReviewsCreateManyUserInputEnvelope
    connect?: LessonReviewsWhereUniqueInput | LessonReviewsWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type PointUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PointCreateWithoutUserInput, PointUncheckedCreateWithoutUserInput> | PointCreateWithoutUserInput[] | PointUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PointCreateOrConnectWithoutUserInput | PointCreateOrConnectWithoutUserInput[]
    createMany?: PointCreateManyUserInputEnvelope
    connect?: PointWhereUniqueInput | PointWhereUniqueInput[]
  }

  export type LessonProgressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LessonProgressCreateWithoutUserInput, LessonProgressUncheckedCreateWithoutUserInput> | LessonProgressCreateWithoutUserInput[] | LessonProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LessonProgressCreateOrConnectWithoutUserInput | LessonProgressCreateOrConnectWithoutUserInput[]
    createMany?: LessonProgressCreateManyUserInputEnvelope
    connect?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
  }

  export type UserBadgeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserBadgeCreateWithoutUserInput, UserBadgeUncheckedCreateWithoutUserInput> | UserBadgeCreateWithoutUserInput[] | UserBadgeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBadgeCreateOrConnectWithoutUserInput | UserBadgeCreateOrConnectWithoutUserInput[]
    createMany?: UserBadgeCreateManyUserInputEnvelope
    connect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type LessonReviewsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LessonReviewsCreateWithoutUserInput, LessonReviewsUncheckedCreateWithoutUserInput> | LessonReviewsCreateWithoutUserInput[] | LessonReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LessonReviewsCreateOrConnectWithoutUserInput | LessonReviewsCreateOrConnectWithoutUserInput[]
    createMany?: LessonReviewsCreateManyUserInputEnvelope
    connect?: LessonReviewsWhereUniqueInput | LessonReviewsWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type PointUpdateManyWithoutUserNestedInput = {
    create?: XOR<PointCreateWithoutUserInput, PointUncheckedCreateWithoutUserInput> | PointCreateWithoutUserInput[] | PointUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PointCreateOrConnectWithoutUserInput | PointCreateOrConnectWithoutUserInput[]
    upsert?: PointUpsertWithWhereUniqueWithoutUserInput | PointUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PointCreateManyUserInputEnvelope
    set?: PointWhereUniqueInput | PointWhereUniqueInput[]
    disconnect?: PointWhereUniqueInput | PointWhereUniqueInput[]
    delete?: PointWhereUniqueInput | PointWhereUniqueInput[]
    connect?: PointWhereUniqueInput | PointWhereUniqueInput[]
    update?: PointUpdateWithWhereUniqueWithoutUserInput | PointUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PointUpdateManyWithWhereWithoutUserInput | PointUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PointScalarWhereInput | PointScalarWhereInput[]
  }

  export type LessonProgressUpdateManyWithoutUserNestedInput = {
    create?: XOR<LessonProgressCreateWithoutUserInput, LessonProgressUncheckedCreateWithoutUserInput> | LessonProgressCreateWithoutUserInput[] | LessonProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LessonProgressCreateOrConnectWithoutUserInput | LessonProgressCreateOrConnectWithoutUserInput[]
    upsert?: LessonProgressUpsertWithWhereUniqueWithoutUserInput | LessonProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LessonProgressCreateManyUserInputEnvelope
    set?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    disconnect?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    delete?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    connect?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    update?: LessonProgressUpdateWithWhereUniqueWithoutUserInput | LessonProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LessonProgressUpdateManyWithWhereWithoutUserInput | LessonProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LessonProgressScalarWhereInput | LessonProgressScalarWhereInput[]
  }

  export type UserBadgeUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserBadgeCreateWithoutUserInput, UserBadgeUncheckedCreateWithoutUserInput> | UserBadgeCreateWithoutUserInput[] | UserBadgeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBadgeCreateOrConnectWithoutUserInput | UserBadgeCreateOrConnectWithoutUserInput[]
    upsert?: UserBadgeUpsertWithWhereUniqueWithoutUserInput | UserBadgeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserBadgeCreateManyUserInputEnvelope
    set?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    disconnect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    delete?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    connect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    update?: UserBadgeUpdateWithWhereUniqueWithoutUserInput | UserBadgeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserBadgeUpdateManyWithWhereWithoutUserInput | UserBadgeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserBadgeScalarWhereInput | UserBadgeScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type LessonReviewsUpdateManyWithoutUserNestedInput = {
    create?: XOR<LessonReviewsCreateWithoutUserInput, LessonReviewsUncheckedCreateWithoutUserInput> | LessonReviewsCreateWithoutUserInput[] | LessonReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LessonReviewsCreateOrConnectWithoutUserInput | LessonReviewsCreateOrConnectWithoutUserInput[]
    upsert?: LessonReviewsUpsertWithWhereUniqueWithoutUserInput | LessonReviewsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LessonReviewsCreateManyUserInputEnvelope
    set?: LessonReviewsWhereUniqueInput | LessonReviewsWhereUniqueInput[]
    disconnect?: LessonReviewsWhereUniqueInput | LessonReviewsWhereUniqueInput[]
    delete?: LessonReviewsWhereUniqueInput | LessonReviewsWhereUniqueInput[]
    connect?: LessonReviewsWhereUniqueInput | LessonReviewsWhereUniqueInput[]
    update?: LessonReviewsUpdateWithWhereUniqueWithoutUserInput | LessonReviewsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LessonReviewsUpdateManyWithWhereWithoutUserInput | LessonReviewsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LessonReviewsScalarWhereInput | LessonReviewsScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type PointUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PointCreateWithoutUserInput, PointUncheckedCreateWithoutUserInput> | PointCreateWithoutUserInput[] | PointUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PointCreateOrConnectWithoutUserInput | PointCreateOrConnectWithoutUserInput[]
    upsert?: PointUpsertWithWhereUniqueWithoutUserInput | PointUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PointCreateManyUserInputEnvelope
    set?: PointWhereUniqueInput | PointWhereUniqueInput[]
    disconnect?: PointWhereUniqueInput | PointWhereUniqueInput[]
    delete?: PointWhereUniqueInput | PointWhereUniqueInput[]
    connect?: PointWhereUniqueInput | PointWhereUniqueInput[]
    update?: PointUpdateWithWhereUniqueWithoutUserInput | PointUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PointUpdateManyWithWhereWithoutUserInput | PointUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PointScalarWhereInput | PointScalarWhereInput[]
  }

  export type LessonProgressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LessonProgressCreateWithoutUserInput, LessonProgressUncheckedCreateWithoutUserInput> | LessonProgressCreateWithoutUserInput[] | LessonProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LessonProgressCreateOrConnectWithoutUserInput | LessonProgressCreateOrConnectWithoutUserInput[]
    upsert?: LessonProgressUpsertWithWhereUniqueWithoutUserInput | LessonProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LessonProgressCreateManyUserInputEnvelope
    set?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    disconnect?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    delete?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    connect?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    update?: LessonProgressUpdateWithWhereUniqueWithoutUserInput | LessonProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LessonProgressUpdateManyWithWhereWithoutUserInput | LessonProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LessonProgressScalarWhereInput | LessonProgressScalarWhereInput[]
  }

  export type UserBadgeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserBadgeCreateWithoutUserInput, UserBadgeUncheckedCreateWithoutUserInput> | UserBadgeCreateWithoutUserInput[] | UserBadgeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBadgeCreateOrConnectWithoutUserInput | UserBadgeCreateOrConnectWithoutUserInput[]
    upsert?: UserBadgeUpsertWithWhereUniqueWithoutUserInput | UserBadgeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserBadgeCreateManyUserInputEnvelope
    set?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    disconnect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    delete?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    connect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    update?: UserBadgeUpdateWithWhereUniqueWithoutUserInput | UserBadgeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserBadgeUpdateManyWithWhereWithoutUserInput | UserBadgeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserBadgeScalarWhereInput | UserBadgeScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type LessonReviewsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LessonReviewsCreateWithoutUserInput, LessonReviewsUncheckedCreateWithoutUserInput> | LessonReviewsCreateWithoutUserInput[] | LessonReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LessonReviewsCreateOrConnectWithoutUserInput | LessonReviewsCreateOrConnectWithoutUserInput[]
    upsert?: LessonReviewsUpsertWithWhereUniqueWithoutUserInput | LessonReviewsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LessonReviewsCreateManyUserInputEnvelope
    set?: LessonReviewsWhereUniqueInput | LessonReviewsWhereUniqueInput[]
    disconnect?: LessonReviewsWhereUniqueInput | LessonReviewsWhereUniqueInput[]
    delete?: LessonReviewsWhereUniqueInput | LessonReviewsWhereUniqueInput[]
    connect?: LessonReviewsWhereUniqueInput | LessonReviewsWhereUniqueInput[]
    update?: LessonReviewsUpdateWithWhereUniqueWithoutUserInput | LessonReviewsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LessonReviewsUpdateManyWithWhereWithoutUserInput | LessonReviewsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LessonReviewsScalarWhereInput | LessonReviewsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPointsInput = {
    create?: XOR<UserCreateWithoutPointsInput, UserUncheckedCreateWithoutPointsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPointsInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutPointsNestedInput = {
    create?: XOR<UserCreateWithoutPointsInput, UserUncheckedCreateWithoutPointsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPointsInput
    upsert?: UserUpsertWithoutPointsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPointsInput, UserUpdateWithoutPointsInput>, UserUncheckedUpdateWithoutPointsInput>
  }

  export type LessonProgressCreateNestedManyWithoutLessonInput = {
    create?: XOR<LessonProgressCreateWithoutLessonInput, LessonProgressUncheckedCreateWithoutLessonInput> | LessonProgressCreateWithoutLessonInput[] | LessonProgressUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: LessonProgressCreateOrConnectWithoutLessonInput | LessonProgressCreateOrConnectWithoutLessonInput[]
    createMany?: LessonProgressCreateManyLessonInputEnvelope
    connect?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutLessonInput = {
    create?: XOR<CommentCreateWithoutLessonInput, CommentUncheckedCreateWithoutLessonInput> | CommentCreateWithoutLessonInput[] | CommentUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutLessonInput | CommentCreateOrConnectWithoutLessonInput[]
    createMany?: CommentCreateManyLessonInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type LessonReviewsCreateNestedManyWithoutLessonInput = {
    create?: XOR<LessonReviewsCreateWithoutLessonInput, LessonReviewsUncheckedCreateWithoutLessonInput> | LessonReviewsCreateWithoutLessonInput[] | LessonReviewsUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: LessonReviewsCreateOrConnectWithoutLessonInput | LessonReviewsCreateOrConnectWithoutLessonInput[]
    createMany?: LessonReviewsCreateManyLessonInputEnvelope
    connect?: LessonReviewsWhereUniqueInput | LessonReviewsWhereUniqueInput[]
  }

  export type LessonProgressUncheckedCreateNestedManyWithoutLessonInput = {
    create?: XOR<LessonProgressCreateWithoutLessonInput, LessonProgressUncheckedCreateWithoutLessonInput> | LessonProgressCreateWithoutLessonInput[] | LessonProgressUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: LessonProgressCreateOrConnectWithoutLessonInput | LessonProgressCreateOrConnectWithoutLessonInput[]
    createMany?: LessonProgressCreateManyLessonInputEnvelope
    connect?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutLessonInput = {
    create?: XOR<CommentCreateWithoutLessonInput, CommentUncheckedCreateWithoutLessonInput> | CommentCreateWithoutLessonInput[] | CommentUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutLessonInput | CommentCreateOrConnectWithoutLessonInput[]
    createMany?: CommentCreateManyLessonInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type LessonReviewsUncheckedCreateNestedManyWithoutLessonInput = {
    create?: XOR<LessonReviewsCreateWithoutLessonInput, LessonReviewsUncheckedCreateWithoutLessonInput> | LessonReviewsCreateWithoutLessonInput[] | LessonReviewsUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: LessonReviewsCreateOrConnectWithoutLessonInput | LessonReviewsCreateOrConnectWithoutLessonInput[]
    createMany?: LessonReviewsCreateManyLessonInputEnvelope
    connect?: LessonReviewsWhereUniqueInput | LessonReviewsWhereUniqueInput[]
  }

  export type LessonProgressUpdateManyWithoutLessonNestedInput = {
    create?: XOR<LessonProgressCreateWithoutLessonInput, LessonProgressUncheckedCreateWithoutLessonInput> | LessonProgressCreateWithoutLessonInput[] | LessonProgressUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: LessonProgressCreateOrConnectWithoutLessonInput | LessonProgressCreateOrConnectWithoutLessonInput[]
    upsert?: LessonProgressUpsertWithWhereUniqueWithoutLessonInput | LessonProgressUpsertWithWhereUniqueWithoutLessonInput[]
    createMany?: LessonProgressCreateManyLessonInputEnvelope
    set?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    disconnect?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    delete?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    connect?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    update?: LessonProgressUpdateWithWhereUniqueWithoutLessonInput | LessonProgressUpdateWithWhereUniqueWithoutLessonInput[]
    updateMany?: LessonProgressUpdateManyWithWhereWithoutLessonInput | LessonProgressUpdateManyWithWhereWithoutLessonInput[]
    deleteMany?: LessonProgressScalarWhereInput | LessonProgressScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutLessonNestedInput = {
    create?: XOR<CommentCreateWithoutLessonInput, CommentUncheckedCreateWithoutLessonInput> | CommentCreateWithoutLessonInput[] | CommentUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutLessonInput | CommentCreateOrConnectWithoutLessonInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutLessonInput | CommentUpsertWithWhereUniqueWithoutLessonInput[]
    createMany?: CommentCreateManyLessonInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutLessonInput | CommentUpdateWithWhereUniqueWithoutLessonInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutLessonInput | CommentUpdateManyWithWhereWithoutLessonInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type LessonReviewsUpdateManyWithoutLessonNestedInput = {
    create?: XOR<LessonReviewsCreateWithoutLessonInput, LessonReviewsUncheckedCreateWithoutLessonInput> | LessonReviewsCreateWithoutLessonInput[] | LessonReviewsUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: LessonReviewsCreateOrConnectWithoutLessonInput | LessonReviewsCreateOrConnectWithoutLessonInput[]
    upsert?: LessonReviewsUpsertWithWhereUniqueWithoutLessonInput | LessonReviewsUpsertWithWhereUniqueWithoutLessonInput[]
    createMany?: LessonReviewsCreateManyLessonInputEnvelope
    set?: LessonReviewsWhereUniqueInput | LessonReviewsWhereUniqueInput[]
    disconnect?: LessonReviewsWhereUniqueInput | LessonReviewsWhereUniqueInput[]
    delete?: LessonReviewsWhereUniqueInput | LessonReviewsWhereUniqueInput[]
    connect?: LessonReviewsWhereUniqueInput | LessonReviewsWhereUniqueInput[]
    update?: LessonReviewsUpdateWithWhereUniqueWithoutLessonInput | LessonReviewsUpdateWithWhereUniqueWithoutLessonInput[]
    updateMany?: LessonReviewsUpdateManyWithWhereWithoutLessonInput | LessonReviewsUpdateManyWithWhereWithoutLessonInput[]
    deleteMany?: LessonReviewsScalarWhereInput | LessonReviewsScalarWhereInput[]
  }

  export type LessonProgressUncheckedUpdateManyWithoutLessonNestedInput = {
    create?: XOR<LessonProgressCreateWithoutLessonInput, LessonProgressUncheckedCreateWithoutLessonInput> | LessonProgressCreateWithoutLessonInput[] | LessonProgressUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: LessonProgressCreateOrConnectWithoutLessonInput | LessonProgressCreateOrConnectWithoutLessonInput[]
    upsert?: LessonProgressUpsertWithWhereUniqueWithoutLessonInput | LessonProgressUpsertWithWhereUniqueWithoutLessonInput[]
    createMany?: LessonProgressCreateManyLessonInputEnvelope
    set?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    disconnect?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    delete?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    connect?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    update?: LessonProgressUpdateWithWhereUniqueWithoutLessonInput | LessonProgressUpdateWithWhereUniqueWithoutLessonInput[]
    updateMany?: LessonProgressUpdateManyWithWhereWithoutLessonInput | LessonProgressUpdateManyWithWhereWithoutLessonInput[]
    deleteMany?: LessonProgressScalarWhereInput | LessonProgressScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutLessonNestedInput = {
    create?: XOR<CommentCreateWithoutLessonInput, CommentUncheckedCreateWithoutLessonInput> | CommentCreateWithoutLessonInput[] | CommentUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutLessonInput | CommentCreateOrConnectWithoutLessonInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutLessonInput | CommentUpsertWithWhereUniqueWithoutLessonInput[]
    createMany?: CommentCreateManyLessonInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutLessonInput | CommentUpdateWithWhereUniqueWithoutLessonInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutLessonInput | CommentUpdateManyWithWhereWithoutLessonInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type LessonReviewsUncheckedUpdateManyWithoutLessonNestedInput = {
    create?: XOR<LessonReviewsCreateWithoutLessonInput, LessonReviewsUncheckedCreateWithoutLessonInput> | LessonReviewsCreateWithoutLessonInput[] | LessonReviewsUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: LessonReviewsCreateOrConnectWithoutLessonInput | LessonReviewsCreateOrConnectWithoutLessonInput[]
    upsert?: LessonReviewsUpsertWithWhereUniqueWithoutLessonInput | LessonReviewsUpsertWithWhereUniqueWithoutLessonInput[]
    createMany?: LessonReviewsCreateManyLessonInputEnvelope
    set?: LessonReviewsWhereUniqueInput | LessonReviewsWhereUniqueInput[]
    disconnect?: LessonReviewsWhereUniqueInput | LessonReviewsWhereUniqueInput[]
    delete?: LessonReviewsWhereUniqueInput | LessonReviewsWhereUniqueInput[]
    connect?: LessonReviewsWhereUniqueInput | LessonReviewsWhereUniqueInput[]
    update?: LessonReviewsUpdateWithWhereUniqueWithoutLessonInput | LessonReviewsUpdateWithWhereUniqueWithoutLessonInput[]
    updateMany?: LessonReviewsUpdateManyWithWhereWithoutLessonInput | LessonReviewsUpdateManyWithWhereWithoutLessonInput[]
    deleteMany?: LessonReviewsScalarWhereInput | LessonReviewsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLessonProgressInput = {
    create?: XOR<UserCreateWithoutLessonProgressInput, UserUncheckedCreateWithoutLessonProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutLessonProgressInput
    connect?: UserWhereUniqueInput
  }

  export type LessonCreateNestedOneWithoutLessonProgressInput = {
    create?: XOR<LessonCreateWithoutLessonProgressInput, LessonUncheckedCreateWithoutLessonProgressInput>
    connectOrCreate?: LessonCreateOrConnectWithoutLessonProgressInput
    connect?: LessonWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutLessonProgressNestedInput = {
    create?: XOR<UserCreateWithoutLessonProgressInput, UserUncheckedCreateWithoutLessonProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutLessonProgressInput
    upsert?: UserUpsertWithoutLessonProgressInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLessonProgressInput, UserUpdateWithoutLessonProgressInput>, UserUncheckedUpdateWithoutLessonProgressInput>
  }

  export type LessonUpdateOneRequiredWithoutLessonProgressNestedInput = {
    create?: XOR<LessonCreateWithoutLessonProgressInput, LessonUncheckedCreateWithoutLessonProgressInput>
    connectOrCreate?: LessonCreateOrConnectWithoutLessonProgressInput
    upsert?: LessonUpsertWithoutLessonProgressInput
    connect?: LessonWhereUniqueInput
    update?: XOR<XOR<LessonUpdateToOneWithWhereWithoutLessonProgressInput, LessonUpdateWithoutLessonProgressInput>, LessonUncheckedUpdateWithoutLessonProgressInput>
  }

  export type UserBadgeCreateNestedManyWithoutBadgeInput = {
    create?: XOR<UserBadgeCreateWithoutBadgeInput, UserBadgeUncheckedCreateWithoutBadgeInput> | UserBadgeCreateWithoutBadgeInput[] | UserBadgeUncheckedCreateWithoutBadgeInput[]
    connectOrCreate?: UserBadgeCreateOrConnectWithoutBadgeInput | UserBadgeCreateOrConnectWithoutBadgeInput[]
    createMany?: UserBadgeCreateManyBadgeInputEnvelope
    connect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
  }

  export type UserBadgeUncheckedCreateNestedManyWithoutBadgeInput = {
    create?: XOR<UserBadgeCreateWithoutBadgeInput, UserBadgeUncheckedCreateWithoutBadgeInput> | UserBadgeCreateWithoutBadgeInput[] | UserBadgeUncheckedCreateWithoutBadgeInput[]
    connectOrCreate?: UserBadgeCreateOrConnectWithoutBadgeInput | UserBadgeCreateOrConnectWithoutBadgeInput[]
    createMany?: UserBadgeCreateManyBadgeInputEnvelope
    connect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
  }

  export type UserBadgeUpdateManyWithoutBadgeNestedInput = {
    create?: XOR<UserBadgeCreateWithoutBadgeInput, UserBadgeUncheckedCreateWithoutBadgeInput> | UserBadgeCreateWithoutBadgeInput[] | UserBadgeUncheckedCreateWithoutBadgeInput[]
    connectOrCreate?: UserBadgeCreateOrConnectWithoutBadgeInput | UserBadgeCreateOrConnectWithoutBadgeInput[]
    upsert?: UserBadgeUpsertWithWhereUniqueWithoutBadgeInput | UserBadgeUpsertWithWhereUniqueWithoutBadgeInput[]
    createMany?: UserBadgeCreateManyBadgeInputEnvelope
    set?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    disconnect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    delete?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    connect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    update?: UserBadgeUpdateWithWhereUniqueWithoutBadgeInput | UserBadgeUpdateWithWhereUniqueWithoutBadgeInput[]
    updateMany?: UserBadgeUpdateManyWithWhereWithoutBadgeInput | UserBadgeUpdateManyWithWhereWithoutBadgeInput[]
    deleteMany?: UserBadgeScalarWhereInput | UserBadgeScalarWhereInput[]
  }

  export type UserBadgeUncheckedUpdateManyWithoutBadgeNestedInput = {
    create?: XOR<UserBadgeCreateWithoutBadgeInput, UserBadgeUncheckedCreateWithoutBadgeInput> | UserBadgeCreateWithoutBadgeInput[] | UserBadgeUncheckedCreateWithoutBadgeInput[]
    connectOrCreate?: UserBadgeCreateOrConnectWithoutBadgeInput | UserBadgeCreateOrConnectWithoutBadgeInput[]
    upsert?: UserBadgeUpsertWithWhereUniqueWithoutBadgeInput | UserBadgeUpsertWithWhereUniqueWithoutBadgeInput[]
    createMany?: UserBadgeCreateManyBadgeInputEnvelope
    set?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    disconnect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    delete?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    connect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    update?: UserBadgeUpdateWithWhereUniqueWithoutBadgeInput | UserBadgeUpdateWithWhereUniqueWithoutBadgeInput[]
    updateMany?: UserBadgeUpdateManyWithWhereWithoutBadgeInput | UserBadgeUpdateManyWithWhereWithoutBadgeInput[]
    deleteMany?: UserBadgeScalarWhereInput | UserBadgeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserBadgeInput = {
    create?: XOR<UserCreateWithoutUserBadgeInput, UserUncheckedCreateWithoutUserBadgeInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserBadgeInput
    connect?: UserWhereUniqueInput
  }

  export type BadgeCreateNestedOneWithoutUserBadgeInput = {
    create?: XOR<BadgeCreateWithoutUserBadgeInput, BadgeUncheckedCreateWithoutUserBadgeInput>
    connectOrCreate?: BadgeCreateOrConnectWithoutUserBadgeInput
    connect?: BadgeWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserBadgeNestedInput = {
    create?: XOR<UserCreateWithoutUserBadgeInput, UserUncheckedCreateWithoutUserBadgeInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserBadgeInput
    upsert?: UserUpsertWithoutUserBadgeInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserBadgeInput, UserUpdateWithoutUserBadgeInput>, UserUncheckedUpdateWithoutUserBadgeInput>
  }

  export type BadgeUpdateOneRequiredWithoutUserBadgeNestedInput = {
    create?: XOR<BadgeCreateWithoutUserBadgeInput, BadgeUncheckedCreateWithoutUserBadgeInput>
    connectOrCreate?: BadgeCreateOrConnectWithoutUserBadgeInput
    upsert?: BadgeUpsertWithoutUserBadgeInput
    connect?: BadgeWhereUniqueInput
    update?: XOR<XOR<BadgeUpdateToOneWithWhereWithoutUserBadgeInput, BadgeUpdateWithoutUserBadgeInput>, BadgeUncheckedUpdateWithoutUserBadgeInput>
  }

  export type UserCreateNestedOneWithoutCommentInput = {
    create?: XOR<UserCreateWithoutCommentInput, UserUncheckedCreateWithoutCommentInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentInput
    connect?: UserWhereUniqueInput
  }

  export type LessonCreateNestedOneWithoutCommentInput = {
    create?: XOR<LessonCreateWithoutCommentInput, LessonUncheckedCreateWithoutCommentInput>
    connectOrCreate?: LessonCreateOrConnectWithoutCommentInput
    connect?: LessonWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCommentNestedInput = {
    create?: XOR<UserCreateWithoutCommentInput, UserUncheckedCreateWithoutCommentInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentInput
    upsert?: UserUpsertWithoutCommentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentInput, UserUpdateWithoutCommentInput>, UserUncheckedUpdateWithoutCommentInput>
  }

  export type LessonUpdateOneRequiredWithoutCommentNestedInput = {
    create?: XOR<LessonCreateWithoutCommentInput, LessonUncheckedCreateWithoutCommentInput>
    connectOrCreate?: LessonCreateOrConnectWithoutCommentInput
    upsert?: LessonUpsertWithoutCommentInput
    connect?: LessonWhereUniqueInput
    update?: XOR<XOR<LessonUpdateToOneWithWhereWithoutCommentInput, LessonUpdateWithoutCommentInput>, LessonUncheckedUpdateWithoutCommentInput>
  }

  export type UserCreateNestedOneWithoutLessonReviewsInput = {
    create?: XOR<UserCreateWithoutLessonReviewsInput, UserUncheckedCreateWithoutLessonReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLessonReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type LessonCreateNestedOneWithoutLessonReviewsInput = {
    create?: XOR<LessonCreateWithoutLessonReviewsInput, LessonUncheckedCreateWithoutLessonReviewsInput>
    connectOrCreate?: LessonCreateOrConnectWithoutLessonReviewsInput
    connect?: LessonWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLessonReviewsNestedInput = {
    create?: XOR<UserCreateWithoutLessonReviewsInput, UserUncheckedCreateWithoutLessonReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLessonReviewsInput
    upsert?: UserUpsertWithoutLessonReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLessonReviewsInput, UserUpdateWithoutLessonReviewsInput>, UserUncheckedUpdateWithoutLessonReviewsInput>
  }

  export type LessonUpdateOneRequiredWithoutLessonReviewsNestedInput = {
    create?: XOR<LessonCreateWithoutLessonReviewsInput, LessonUncheckedCreateWithoutLessonReviewsInput>
    connectOrCreate?: LessonCreateOrConnectWithoutLessonReviewsInput
    upsert?: LessonUpsertWithoutLessonReviewsInput
    connect?: LessonWhereUniqueInput
    update?: XOR<XOR<LessonUpdateToOneWithWhereWithoutLessonReviewsInput, LessonUpdateWithoutLessonReviewsInput>, LessonUncheckedUpdateWithoutLessonReviewsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    Points?: PointCreateNestedManyWithoutUserInput
    LessonProgress?: LessonProgressCreateNestedManyWithoutUserInput
    UserBadge?: UserBadgeCreateNestedManyWithoutUserInput
    Comment?: CommentCreateNestedManyWithoutUserInput
    LessonReviews?: LessonReviewsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Points?: PointUncheckedCreateNestedManyWithoutUserInput
    LessonProgress?: LessonProgressUncheckedCreateNestedManyWithoutUserInput
    UserBadge?: UserBadgeUncheckedCreateNestedManyWithoutUserInput
    Comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    LessonReviews?: LessonReviewsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Points?: PointUpdateManyWithoutUserNestedInput
    LessonProgress?: LessonProgressUpdateManyWithoutUserNestedInput
    UserBadge?: UserBadgeUpdateManyWithoutUserNestedInput
    Comment?: CommentUpdateManyWithoutUserNestedInput
    LessonReviews?: LessonReviewsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Points?: PointUncheckedUpdateManyWithoutUserNestedInput
    LessonProgress?: LessonProgressUncheckedUpdateManyWithoutUserNestedInput
    UserBadge?: UserBadgeUncheckedUpdateManyWithoutUserNestedInput
    Comment?: CommentUncheckedUpdateManyWithoutUserNestedInput
    LessonReviews?: LessonReviewsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    Points?: PointCreateNestedManyWithoutUserInput
    LessonProgress?: LessonProgressCreateNestedManyWithoutUserInput
    UserBadge?: UserBadgeCreateNestedManyWithoutUserInput
    Comment?: CommentCreateNestedManyWithoutUserInput
    LessonReviews?: LessonReviewsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    Points?: PointUncheckedCreateNestedManyWithoutUserInput
    LessonProgress?: LessonProgressUncheckedCreateNestedManyWithoutUserInput
    UserBadge?: UserBadgeUncheckedCreateNestedManyWithoutUserInput
    Comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    LessonReviews?: LessonReviewsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    Points?: PointUpdateManyWithoutUserNestedInput
    LessonProgress?: LessonProgressUpdateManyWithoutUserNestedInput
    UserBadge?: UserBadgeUpdateManyWithoutUserNestedInput
    Comment?: CommentUpdateManyWithoutUserNestedInput
    LessonReviews?: LessonReviewsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Points?: PointUncheckedUpdateManyWithoutUserNestedInput
    LessonProgress?: LessonProgressUncheckedUpdateManyWithoutUserNestedInput
    UserBadge?: UserBadgeUncheckedUpdateManyWithoutUserNestedInput
    Comment?: CommentUncheckedUpdateManyWithoutUserNestedInput
    LessonReviews?: LessonReviewsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PointCreateWithoutUserInput = {
    basicPoint?: number
    activityPoint?: number
  }

  export type PointUncheckedCreateWithoutUserInput = {
    basicPoint?: number
    activityPoint?: number
  }

  export type PointCreateOrConnectWithoutUserInput = {
    where: PointWhereUniqueInput
    create: XOR<PointCreateWithoutUserInput, PointUncheckedCreateWithoutUserInput>
  }

  export type PointCreateManyUserInputEnvelope = {
    data: PointCreateManyUserInput | PointCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LessonProgressCreateWithoutUserInput = {
    completed: boolean
    completedAt?: Date | string
    lesson: LessonCreateNestedOneWithoutLessonProgressInput
  }

  export type LessonProgressUncheckedCreateWithoutUserInput = {
    lessonId: number
    completed: boolean
    completedAt?: Date | string
  }

  export type LessonProgressCreateOrConnectWithoutUserInput = {
    where: LessonProgressWhereUniqueInput
    create: XOR<LessonProgressCreateWithoutUserInput, LessonProgressUncheckedCreateWithoutUserInput>
  }

  export type LessonProgressCreateManyUserInputEnvelope = {
    data: LessonProgressCreateManyUserInput | LessonProgressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserBadgeCreateWithoutUserInput = {
    obtainedAt: Date | string
    badge: BadgeCreateNestedOneWithoutUserBadgeInput
  }

  export type UserBadgeUncheckedCreateWithoutUserInput = {
    badgeId: number
    obtainedAt: Date | string
  }

  export type UserBadgeCreateOrConnectWithoutUserInput = {
    where: UserBadgeWhereUniqueInput
    create: XOR<UserBadgeCreateWithoutUserInput, UserBadgeUncheckedCreateWithoutUserInput>
  }

  export type UserBadgeCreateManyUserInputEnvelope = {
    data: UserBadgeCreateManyUserInput | UserBadgeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutUserInput = {
    commentId?: string
    content: string
    createdAt?: Date | string
    like?: number
    lesson: LessonCreateNestedOneWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutUserInput = {
    commentId?: string
    lessonId: number
    content: string
    createdAt?: Date | string
    like?: number
  }

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentCreateManyUserInputEnvelope = {
    data: CommentCreateManyUserInput | CommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LessonReviewsCreateWithoutUserInput = {
    reviewedAt?: Date | string
    lesson: LessonCreateNestedOneWithoutLessonReviewsInput
  }

  export type LessonReviewsUncheckedCreateWithoutUserInput = {
    lessonId: number
    reviewedAt?: Date | string
  }

  export type LessonReviewsCreateOrConnectWithoutUserInput = {
    where: LessonReviewsWhereUniqueInput
    create: XOR<LessonReviewsCreateWithoutUserInput, LessonReviewsUncheckedCreateWithoutUserInput>
  }

  export type LessonReviewsCreateManyUserInputEnvelope = {
    data: LessonReviewsCreateManyUserInput | LessonReviewsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type PointUpsertWithWhereUniqueWithoutUserInput = {
    where: PointWhereUniqueInput
    update: XOR<PointUpdateWithoutUserInput, PointUncheckedUpdateWithoutUserInput>
    create: XOR<PointCreateWithoutUserInput, PointUncheckedCreateWithoutUserInput>
  }

  export type PointUpdateWithWhereUniqueWithoutUserInput = {
    where: PointWhereUniqueInput
    data: XOR<PointUpdateWithoutUserInput, PointUncheckedUpdateWithoutUserInput>
  }

  export type PointUpdateManyWithWhereWithoutUserInput = {
    where: PointScalarWhereInput
    data: XOR<PointUpdateManyMutationInput, PointUncheckedUpdateManyWithoutUserInput>
  }

  export type PointScalarWhereInput = {
    AND?: PointScalarWhereInput | PointScalarWhereInput[]
    OR?: PointScalarWhereInput[]
    NOT?: PointScalarWhereInput | PointScalarWhereInput[]
    userId?: StringFilter<"Point"> | string
    basicPoint?: IntFilter<"Point"> | number
    activityPoint?: IntFilter<"Point"> | number
  }

  export type LessonProgressUpsertWithWhereUniqueWithoutUserInput = {
    where: LessonProgressWhereUniqueInput
    update: XOR<LessonProgressUpdateWithoutUserInput, LessonProgressUncheckedUpdateWithoutUserInput>
    create: XOR<LessonProgressCreateWithoutUserInput, LessonProgressUncheckedCreateWithoutUserInput>
  }

  export type LessonProgressUpdateWithWhereUniqueWithoutUserInput = {
    where: LessonProgressWhereUniqueInput
    data: XOR<LessonProgressUpdateWithoutUserInput, LessonProgressUncheckedUpdateWithoutUserInput>
  }

  export type LessonProgressUpdateManyWithWhereWithoutUserInput = {
    where: LessonProgressScalarWhereInput
    data: XOR<LessonProgressUpdateManyMutationInput, LessonProgressUncheckedUpdateManyWithoutUserInput>
  }

  export type LessonProgressScalarWhereInput = {
    AND?: LessonProgressScalarWhereInput | LessonProgressScalarWhereInput[]
    OR?: LessonProgressScalarWhereInput[]
    NOT?: LessonProgressScalarWhereInput | LessonProgressScalarWhereInput[]
    lessonId?: IntFilter<"LessonProgress"> | number
    userId?: StringFilter<"LessonProgress"> | string
    completed?: BoolFilter<"LessonProgress"> | boolean
    completedAt?: DateTimeFilter<"LessonProgress"> | Date | string
  }

  export type UserBadgeUpsertWithWhereUniqueWithoutUserInput = {
    where: UserBadgeWhereUniqueInput
    update: XOR<UserBadgeUpdateWithoutUserInput, UserBadgeUncheckedUpdateWithoutUserInput>
    create: XOR<UserBadgeCreateWithoutUserInput, UserBadgeUncheckedCreateWithoutUserInput>
  }

  export type UserBadgeUpdateWithWhereUniqueWithoutUserInput = {
    where: UserBadgeWhereUniqueInput
    data: XOR<UserBadgeUpdateWithoutUserInput, UserBadgeUncheckedUpdateWithoutUserInput>
  }

  export type UserBadgeUpdateManyWithWhereWithoutUserInput = {
    where: UserBadgeScalarWhereInput
    data: XOR<UserBadgeUpdateManyMutationInput, UserBadgeUncheckedUpdateManyWithoutUserInput>
  }

  export type UserBadgeScalarWhereInput = {
    AND?: UserBadgeScalarWhereInput | UserBadgeScalarWhereInput[]
    OR?: UserBadgeScalarWhereInput[]
    NOT?: UserBadgeScalarWhereInput | UserBadgeScalarWhereInput[]
    userId?: StringFilter<"UserBadge"> | string
    badgeId?: IntFilter<"UserBadge"> | number
    obtainedAt?: DateTimeFilter<"UserBadge"> | Date | string
  }

  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
  }

  export type CommentUpdateManyWithWhereWithoutUserInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    commentId?: StringFilter<"Comment"> | string
    lessonId?: IntFilter<"Comment"> | number
    userId?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    like?: IntFilter<"Comment"> | number
  }

  export type LessonReviewsUpsertWithWhereUniqueWithoutUserInput = {
    where: LessonReviewsWhereUniqueInput
    update: XOR<LessonReviewsUpdateWithoutUserInput, LessonReviewsUncheckedUpdateWithoutUserInput>
    create: XOR<LessonReviewsCreateWithoutUserInput, LessonReviewsUncheckedCreateWithoutUserInput>
  }

  export type LessonReviewsUpdateWithWhereUniqueWithoutUserInput = {
    where: LessonReviewsWhereUniqueInput
    data: XOR<LessonReviewsUpdateWithoutUserInput, LessonReviewsUncheckedUpdateWithoutUserInput>
  }

  export type LessonReviewsUpdateManyWithWhereWithoutUserInput = {
    where: LessonReviewsScalarWhereInput
    data: XOR<LessonReviewsUpdateManyMutationInput, LessonReviewsUncheckedUpdateManyWithoutUserInput>
  }

  export type LessonReviewsScalarWhereInput = {
    AND?: LessonReviewsScalarWhereInput | LessonReviewsScalarWhereInput[]
    OR?: LessonReviewsScalarWhereInput[]
    NOT?: LessonReviewsScalarWhereInput | LessonReviewsScalarWhereInput[]
    lessonId?: IntFilter<"LessonReviews"> | number
    userId?: StringFilter<"LessonReviews"> | string
    reviewedAt?: DateTimeFilter<"LessonReviews"> | Date | string
  }

  export type UserCreateWithoutPointsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    LessonProgress?: LessonProgressCreateNestedManyWithoutUserInput
    UserBadge?: UserBadgeCreateNestedManyWithoutUserInput
    Comment?: CommentCreateNestedManyWithoutUserInput
    LessonReviews?: LessonReviewsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPointsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    LessonProgress?: LessonProgressUncheckedCreateNestedManyWithoutUserInput
    UserBadge?: UserBadgeUncheckedCreateNestedManyWithoutUserInput
    Comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    LessonReviews?: LessonReviewsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPointsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPointsInput, UserUncheckedCreateWithoutPointsInput>
  }

  export type UserUpsertWithoutPointsInput = {
    update: XOR<UserUpdateWithoutPointsInput, UserUncheckedUpdateWithoutPointsInput>
    create: XOR<UserCreateWithoutPointsInput, UserUncheckedCreateWithoutPointsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPointsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPointsInput, UserUncheckedUpdateWithoutPointsInput>
  }

  export type UserUpdateWithoutPointsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    LessonProgress?: LessonProgressUpdateManyWithoutUserNestedInput
    UserBadge?: UserBadgeUpdateManyWithoutUserNestedInput
    Comment?: CommentUpdateManyWithoutUserNestedInput
    LessonReviews?: LessonReviewsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPointsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    LessonProgress?: LessonProgressUncheckedUpdateManyWithoutUserNestedInput
    UserBadge?: UserBadgeUncheckedUpdateManyWithoutUserNestedInput
    Comment?: CommentUncheckedUpdateManyWithoutUserNestedInput
    LessonReviews?: LessonReviewsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LessonProgressCreateWithoutLessonInput = {
    completed: boolean
    completedAt?: Date | string
    user: UserCreateNestedOneWithoutLessonProgressInput
  }

  export type LessonProgressUncheckedCreateWithoutLessonInput = {
    userId: string
    completed: boolean
    completedAt?: Date | string
  }

  export type LessonProgressCreateOrConnectWithoutLessonInput = {
    where: LessonProgressWhereUniqueInput
    create: XOR<LessonProgressCreateWithoutLessonInput, LessonProgressUncheckedCreateWithoutLessonInput>
  }

  export type LessonProgressCreateManyLessonInputEnvelope = {
    data: LessonProgressCreateManyLessonInput | LessonProgressCreateManyLessonInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutLessonInput = {
    commentId?: string
    content: string
    createdAt?: Date | string
    like?: number
    user: UserCreateNestedOneWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutLessonInput = {
    commentId?: string
    userId: string
    content: string
    createdAt?: Date | string
    like?: number
  }

  export type CommentCreateOrConnectWithoutLessonInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutLessonInput, CommentUncheckedCreateWithoutLessonInput>
  }

  export type CommentCreateManyLessonInputEnvelope = {
    data: CommentCreateManyLessonInput | CommentCreateManyLessonInput[]
    skipDuplicates?: boolean
  }

  export type LessonReviewsCreateWithoutLessonInput = {
    reviewedAt?: Date | string
    user: UserCreateNestedOneWithoutLessonReviewsInput
  }

  export type LessonReviewsUncheckedCreateWithoutLessonInput = {
    userId: string
    reviewedAt?: Date | string
  }

  export type LessonReviewsCreateOrConnectWithoutLessonInput = {
    where: LessonReviewsWhereUniqueInput
    create: XOR<LessonReviewsCreateWithoutLessonInput, LessonReviewsUncheckedCreateWithoutLessonInput>
  }

  export type LessonReviewsCreateManyLessonInputEnvelope = {
    data: LessonReviewsCreateManyLessonInput | LessonReviewsCreateManyLessonInput[]
    skipDuplicates?: boolean
  }

  export type LessonProgressUpsertWithWhereUniqueWithoutLessonInput = {
    where: LessonProgressWhereUniqueInput
    update: XOR<LessonProgressUpdateWithoutLessonInput, LessonProgressUncheckedUpdateWithoutLessonInput>
    create: XOR<LessonProgressCreateWithoutLessonInput, LessonProgressUncheckedCreateWithoutLessonInput>
  }

  export type LessonProgressUpdateWithWhereUniqueWithoutLessonInput = {
    where: LessonProgressWhereUniqueInput
    data: XOR<LessonProgressUpdateWithoutLessonInput, LessonProgressUncheckedUpdateWithoutLessonInput>
  }

  export type LessonProgressUpdateManyWithWhereWithoutLessonInput = {
    where: LessonProgressScalarWhereInput
    data: XOR<LessonProgressUpdateManyMutationInput, LessonProgressUncheckedUpdateManyWithoutLessonInput>
  }

  export type CommentUpsertWithWhereUniqueWithoutLessonInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutLessonInput, CommentUncheckedUpdateWithoutLessonInput>
    create: XOR<CommentCreateWithoutLessonInput, CommentUncheckedCreateWithoutLessonInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutLessonInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutLessonInput, CommentUncheckedUpdateWithoutLessonInput>
  }

  export type CommentUpdateManyWithWhereWithoutLessonInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutLessonInput>
  }

  export type LessonReviewsUpsertWithWhereUniqueWithoutLessonInput = {
    where: LessonReviewsWhereUniqueInput
    update: XOR<LessonReviewsUpdateWithoutLessonInput, LessonReviewsUncheckedUpdateWithoutLessonInput>
    create: XOR<LessonReviewsCreateWithoutLessonInput, LessonReviewsUncheckedCreateWithoutLessonInput>
  }

  export type LessonReviewsUpdateWithWhereUniqueWithoutLessonInput = {
    where: LessonReviewsWhereUniqueInput
    data: XOR<LessonReviewsUpdateWithoutLessonInput, LessonReviewsUncheckedUpdateWithoutLessonInput>
  }

  export type LessonReviewsUpdateManyWithWhereWithoutLessonInput = {
    where: LessonReviewsScalarWhereInput
    data: XOR<LessonReviewsUpdateManyMutationInput, LessonReviewsUncheckedUpdateManyWithoutLessonInput>
  }

  export type UserCreateWithoutLessonProgressInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    Points?: PointCreateNestedManyWithoutUserInput
    UserBadge?: UserBadgeCreateNestedManyWithoutUserInput
    Comment?: CommentCreateNestedManyWithoutUserInput
    LessonReviews?: LessonReviewsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLessonProgressInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Points?: PointUncheckedCreateNestedManyWithoutUserInput
    UserBadge?: UserBadgeUncheckedCreateNestedManyWithoutUserInput
    Comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    LessonReviews?: LessonReviewsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLessonProgressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLessonProgressInput, UserUncheckedCreateWithoutLessonProgressInput>
  }

  export type LessonCreateWithoutLessonProgressInput = {
    title: string
    Comment?: CommentCreateNestedManyWithoutLessonInput
    LessonReviews?: LessonReviewsCreateNestedManyWithoutLessonInput
  }

  export type LessonUncheckedCreateWithoutLessonProgressInput = {
    lessonId?: number
    title: string
    Comment?: CommentUncheckedCreateNestedManyWithoutLessonInput
    LessonReviews?: LessonReviewsUncheckedCreateNestedManyWithoutLessonInput
  }

  export type LessonCreateOrConnectWithoutLessonProgressInput = {
    where: LessonWhereUniqueInput
    create: XOR<LessonCreateWithoutLessonProgressInput, LessonUncheckedCreateWithoutLessonProgressInput>
  }

  export type UserUpsertWithoutLessonProgressInput = {
    update: XOR<UserUpdateWithoutLessonProgressInput, UserUncheckedUpdateWithoutLessonProgressInput>
    create: XOR<UserCreateWithoutLessonProgressInput, UserUncheckedCreateWithoutLessonProgressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLessonProgressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLessonProgressInput, UserUncheckedUpdateWithoutLessonProgressInput>
  }

  export type UserUpdateWithoutLessonProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Points?: PointUpdateManyWithoutUserNestedInput
    UserBadge?: UserBadgeUpdateManyWithoutUserNestedInput
    Comment?: CommentUpdateManyWithoutUserNestedInput
    LessonReviews?: LessonReviewsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLessonProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Points?: PointUncheckedUpdateManyWithoutUserNestedInput
    UserBadge?: UserBadgeUncheckedUpdateManyWithoutUserNestedInput
    Comment?: CommentUncheckedUpdateManyWithoutUserNestedInput
    LessonReviews?: LessonReviewsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LessonUpsertWithoutLessonProgressInput = {
    update: XOR<LessonUpdateWithoutLessonProgressInput, LessonUncheckedUpdateWithoutLessonProgressInput>
    create: XOR<LessonCreateWithoutLessonProgressInput, LessonUncheckedCreateWithoutLessonProgressInput>
    where?: LessonWhereInput
  }

  export type LessonUpdateToOneWithWhereWithoutLessonProgressInput = {
    where?: LessonWhereInput
    data: XOR<LessonUpdateWithoutLessonProgressInput, LessonUncheckedUpdateWithoutLessonProgressInput>
  }

  export type LessonUpdateWithoutLessonProgressInput = {
    title?: StringFieldUpdateOperationsInput | string
    Comment?: CommentUpdateManyWithoutLessonNestedInput
    LessonReviews?: LessonReviewsUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateWithoutLessonProgressInput = {
    lessonId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    Comment?: CommentUncheckedUpdateManyWithoutLessonNestedInput
    LessonReviews?: LessonReviewsUncheckedUpdateManyWithoutLessonNestedInput
  }

  export type UserBadgeCreateWithoutBadgeInput = {
    obtainedAt: Date | string
    user: UserCreateNestedOneWithoutUserBadgeInput
  }

  export type UserBadgeUncheckedCreateWithoutBadgeInput = {
    userId: string
    obtainedAt: Date | string
  }

  export type UserBadgeCreateOrConnectWithoutBadgeInput = {
    where: UserBadgeWhereUniqueInput
    create: XOR<UserBadgeCreateWithoutBadgeInput, UserBadgeUncheckedCreateWithoutBadgeInput>
  }

  export type UserBadgeCreateManyBadgeInputEnvelope = {
    data: UserBadgeCreateManyBadgeInput | UserBadgeCreateManyBadgeInput[]
    skipDuplicates?: boolean
  }

  export type UserBadgeUpsertWithWhereUniqueWithoutBadgeInput = {
    where: UserBadgeWhereUniqueInput
    update: XOR<UserBadgeUpdateWithoutBadgeInput, UserBadgeUncheckedUpdateWithoutBadgeInput>
    create: XOR<UserBadgeCreateWithoutBadgeInput, UserBadgeUncheckedCreateWithoutBadgeInput>
  }

  export type UserBadgeUpdateWithWhereUniqueWithoutBadgeInput = {
    where: UserBadgeWhereUniqueInput
    data: XOR<UserBadgeUpdateWithoutBadgeInput, UserBadgeUncheckedUpdateWithoutBadgeInput>
  }

  export type UserBadgeUpdateManyWithWhereWithoutBadgeInput = {
    where: UserBadgeScalarWhereInput
    data: XOR<UserBadgeUpdateManyMutationInput, UserBadgeUncheckedUpdateManyWithoutBadgeInput>
  }

  export type UserCreateWithoutUserBadgeInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    Points?: PointCreateNestedManyWithoutUserInput
    LessonProgress?: LessonProgressCreateNestedManyWithoutUserInput
    Comment?: CommentCreateNestedManyWithoutUserInput
    LessonReviews?: LessonReviewsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserBadgeInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Points?: PointUncheckedCreateNestedManyWithoutUserInput
    LessonProgress?: LessonProgressUncheckedCreateNestedManyWithoutUserInput
    Comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    LessonReviews?: LessonReviewsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserBadgeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserBadgeInput, UserUncheckedCreateWithoutUserBadgeInput>
  }

  export type BadgeCreateWithoutUserBadgeInput = {
    name: string
    description: string
    image?: string | null
    criteria: JsonNullValueInput | InputJsonValue
  }

  export type BadgeUncheckedCreateWithoutUserBadgeInput = {
    badgeId?: number
    name: string
    description: string
    image?: string | null
    criteria: JsonNullValueInput | InputJsonValue
  }

  export type BadgeCreateOrConnectWithoutUserBadgeInput = {
    where: BadgeWhereUniqueInput
    create: XOR<BadgeCreateWithoutUserBadgeInput, BadgeUncheckedCreateWithoutUserBadgeInput>
  }

  export type UserUpsertWithoutUserBadgeInput = {
    update: XOR<UserUpdateWithoutUserBadgeInput, UserUncheckedUpdateWithoutUserBadgeInput>
    create: XOR<UserCreateWithoutUserBadgeInput, UserUncheckedCreateWithoutUserBadgeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserBadgeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserBadgeInput, UserUncheckedUpdateWithoutUserBadgeInput>
  }

  export type UserUpdateWithoutUserBadgeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Points?: PointUpdateManyWithoutUserNestedInput
    LessonProgress?: LessonProgressUpdateManyWithoutUserNestedInput
    Comment?: CommentUpdateManyWithoutUserNestedInput
    LessonReviews?: LessonReviewsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserBadgeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Points?: PointUncheckedUpdateManyWithoutUserNestedInput
    LessonProgress?: LessonProgressUncheckedUpdateManyWithoutUserNestedInput
    Comment?: CommentUncheckedUpdateManyWithoutUserNestedInput
    LessonReviews?: LessonReviewsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BadgeUpsertWithoutUserBadgeInput = {
    update: XOR<BadgeUpdateWithoutUserBadgeInput, BadgeUncheckedUpdateWithoutUserBadgeInput>
    create: XOR<BadgeCreateWithoutUserBadgeInput, BadgeUncheckedCreateWithoutUserBadgeInput>
    where?: BadgeWhereInput
  }

  export type BadgeUpdateToOneWithWhereWithoutUserBadgeInput = {
    where?: BadgeWhereInput
    data: XOR<BadgeUpdateWithoutUserBadgeInput, BadgeUncheckedUpdateWithoutUserBadgeInput>
  }

  export type BadgeUpdateWithoutUserBadgeInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    criteria?: JsonNullValueInput | InputJsonValue
  }

  export type BadgeUncheckedUpdateWithoutUserBadgeInput = {
    badgeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    criteria?: JsonNullValueInput | InputJsonValue
  }

  export type UserCreateWithoutCommentInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    Points?: PointCreateNestedManyWithoutUserInput
    LessonProgress?: LessonProgressCreateNestedManyWithoutUserInput
    UserBadge?: UserBadgeCreateNestedManyWithoutUserInput
    LessonReviews?: LessonReviewsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Points?: PointUncheckedCreateNestedManyWithoutUserInput
    LessonProgress?: LessonProgressUncheckedCreateNestedManyWithoutUserInput
    UserBadge?: UserBadgeUncheckedCreateNestedManyWithoutUserInput
    LessonReviews?: LessonReviewsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentInput, UserUncheckedCreateWithoutCommentInput>
  }

  export type LessonCreateWithoutCommentInput = {
    title: string
    LessonProgress?: LessonProgressCreateNestedManyWithoutLessonInput
    LessonReviews?: LessonReviewsCreateNestedManyWithoutLessonInput
  }

  export type LessonUncheckedCreateWithoutCommentInput = {
    lessonId?: number
    title: string
    LessonProgress?: LessonProgressUncheckedCreateNestedManyWithoutLessonInput
    LessonReviews?: LessonReviewsUncheckedCreateNestedManyWithoutLessonInput
  }

  export type LessonCreateOrConnectWithoutCommentInput = {
    where: LessonWhereUniqueInput
    create: XOR<LessonCreateWithoutCommentInput, LessonUncheckedCreateWithoutCommentInput>
  }

  export type UserUpsertWithoutCommentInput = {
    update: XOR<UserUpdateWithoutCommentInput, UserUncheckedUpdateWithoutCommentInput>
    create: XOR<UserCreateWithoutCommentInput, UserUncheckedCreateWithoutCommentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentInput, UserUncheckedUpdateWithoutCommentInput>
  }

  export type UserUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Points?: PointUpdateManyWithoutUserNestedInput
    LessonProgress?: LessonProgressUpdateManyWithoutUserNestedInput
    UserBadge?: UserBadgeUpdateManyWithoutUserNestedInput
    LessonReviews?: LessonReviewsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Points?: PointUncheckedUpdateManyWithoutUserNestedInput
    LessonProgress?: LessonProgressUncheckedUpdateManyWithoutUserNestedInput
    UserBadge?: UserBadgeUncheckedUpdateManyWithoutUserNestedInput
    LessonReviews?: LessonReviewsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LessonUpsertWithoutCommentInput = {
    update: XOR<LessonUpdateWithoutCommentInput, LessonUncheckedUpdateWithoutCommentInput>
    create: XOR<LessonCreateWithoutCommentInput, LessonUncheckedCreateWithoutCommentInput>
    where?: LessonWhereInput
  }

  export type LessonUpdateToOneWithWhereWithoutCommentInput = {
    where?: LessonWhereInput
    data: XOR<LessonUpdateWithoutCommentInput, LessonUncheckedUpdateWithoutCommentInput>
  }

  export type LessonUpdateWithoutCommentInput = {
    title?: StringFieldUpdateOperationsInput | string
    LessonProgress?: LessonProgressUpdateManyWithoutLessonNestedInput
    LessonReviews?: LessonReviewsUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateWithoutCommentInput = {
    lessonId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    LessonProgress?: LessonProgressUncheckedUpdateManyWithoutLessonNestedInput
    LessonReviews?: LessonReviewsUncheckedUpdateManyWithoutLessonNestedInput
  }

  export type UserCreateWithoutLessonReviewsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    Points?: PointCreateNestedManyWithoutUserInput
    LessonProgress?: LessonProgressCreateNestedManyWithoutUserInput
    UserBadge?: UserBadgeCreateNestedManyWithoutUserInput
    Comment?: CommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLessonReviewsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Points?: PointUncheckedCreateNestedManyWithoutUserInput
    LessonProgress?: LessonProgressUncheckedCreateNestedManyWithoutUserInput
    UserBadge?: UserBadgeUncheckedCreateNestedManyWithoutUserInput
    Comment?: CommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLessonReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLessonReviewsInput, UserUncheckedCreateWithoutLessonReviewsInput>
  }

  export type LessonCreateWithoutLessonReviewsInput = {
    title: string
    LessonProgress?: LessonProgressCreateNestedManyWithoutLessonInput
    Comment?: CommentCreateNestedManyWithoutLessonInput
  }

  export type LessonUncheckedCreateWithoutLessonReviewsInput = {
    lessonId?: number
    title: string
    LessonProgress?: LessonProgressUncheckedCreateNestedManyWithoutLessonInput
    Comment?: CommentUncheckedCreateNestedManyWithoutLessonInput
  }

  export type LessonCreateOrConnectWithoutLessonReviewsInput = {
    where: LessonWhereUniqueInput
    create: XOR<LessonCreateWithoutLessonReviewsInput, LessonUncheckedCreateWithoutLessonReviewsInput>
  }

  export type UserUpsertWithoutLessonReviewsInput = {
    update: XOR<UserUpdateWithoutLessonReviewsInput, UserUncheckedUpdateWithoutLessonReviewsInput>
    create: XOR<UserCreateWithoutLessonReviewsInput, UserUncheckedCreateWithoutLessonReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLessonReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLessonReviewsInput, UserUncheckedUpdateWithoutLessonReviewsInput>
  }

  export type UserUpdateWithoutLessonReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Points?: PointUpdateManyWithoutUserNestedInput
    LessonProgress?: LessonProgressUpdateManyWithoutUserNestedInput
    UserBadge?: UserBadgeUpdateManyWithoutUserNestedInput
    Comment?: CommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLessonReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Points?: PointUncheckedUpdateManyWithoutUserNestedInput
    LessonProgress?: LessonProgressUncheckedUpdateManyWithoutUserNestedInput
    UserBadge?: UserBadgeUncheckedUpdateManyWithoutUserNestedInput
    Comment?: CommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LessonUpsertWithoutLessonReviewsInput = {
    update: XOR<LessonUpdateWithoutLessonReviewsInput, LessonUncheckedUpdateWithoutLessonReviewsInput>
    create: XOR<LessonCreateWithoutLessonReviewsInput, LessonUncheckedCreateWithoutLessonReviewsInput>
    where?: LessonWhereInput
  }

  export type LessonUpdateToOneWithWhereWithoutLessonReviewsInput = {
    where?: LessonWhereInput
    data: XOR<LessonUpdateWithoutLessonReviewsInput, LessonUncheckedUpdateWithoutLessonReviewsInput>
  }

  export type LessonUpdateWithoutLessonReviewsInput = {
    title?: StringFieldUpdateOperationsInput | string
    LessonProgress?: LessonProgressUpdateManyWithoutLessonNestedInput
    Comment?: CommentUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateWithoutLessonReviewsInput = {
    lessonId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    LessonProgress?: LessonProgressUncheckedUpdateManyWithoutLessonNestedInput
    Comment?: CommentUncheckedUpdateManyWithoutLessonNestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type PointCreateManyUserInput = {
    basicPoint?: number
    activityPoint?: number
  }

  export type LessonProgressCreateManyUserInput = {
    lessonId: number
    completed: boolean
    completedAt?: Date | string
  }

  export type UserBadgeCreateManyUserInput = {
    badgeId: number
    obtainedAt: Date | string
  }

  export type CommentCreateManyUserInput = {
    commentId?: string
    lessonId: number
    content: string
    createdAt?: Date | string
    like?: number
  }

  export type LessonReviewsCreateManyUserInput = {
    lessonId: number
    reviewedAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointUpdateWithoutUserInput = {
    basicPoint?: IntFieldUpdateOperationsInput | number
    activityPoint?: IntFieldUpdateOperationsInput | number
  }

  export type PointUncheckedUpdateWithoutUserInput = {
    basicPoint?: IntFieldUpdateOperationsInput | number
    activityPoint?: IntFieldUpdateOperationsInput | number
  }

  export type PointUncheckedUpdateManyWithoutUserInput = {
    basicPoint?: IntFieldUpdateOperationsInput | number
    activityPoint?: IntFieldUpdateOperationsInput | number
  }

  export type LessonProgressUpdateWithoutUserInput = {
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lesson?: LessonUpdateOneRequiredWithoutLessonProgressNestedInput
  }

  export type LessonProgressUncheckedUpdateWithoutUserInput = {
    lessonId?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonProgressUncheckedUpdateManyWithoutUserInput = {
    lessonId?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBadgeUpdateWithoutUserInput = {
    obtainedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    badge?: BadgeUpdateOneRequiredWithoutUserBadgeNestedInput
  }

  export type UserBadgeUncheckedUpdateWithoutUserInput = {
    badgeId?: IntFieldUpdateOperationsInput | number
    obtainedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBadgeUncheckedUpdateManyWithoutUserInput = {
    badgeId?: IntFieldUpdateOperationsInput | number
    obtainedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutUserInput = {
    commentId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    like?: IntFieldUpdateOperationsInput | number
    lesson?: LessonUpdateOneRequiredWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutUserInput = {
    commentId?: StringFieldUpdateOperationsInput | string
    lessonId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    like?: IntFieldUpdateOperationsInput | number
  }

  export type CommentUncheckedUpdateManyWithoutUserInput = {
    commentId?: StringFieldUpdateOperationsInput | string
    lessonId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    like?: IntFieldUpdateOperationsInput | number
  }

  export type LessonReviewsUpdateWithoutUserInput = {
    reviewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lesson?: LessonUpdateOneRequiredWithoutLessonReviewsNestedInput
  }

  export type LessonReviewsUncheckedUpdateWithoutUserInput = {
    lessonId?: IntFieldUpdateOperationsInput | number
    reviewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonReviewsUncheckedUpdateManyWithoutUserInput = {
    lessonId?: IntFieldUpdateOperationsInput | number
    reviewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonProgressCreateManyLessonInput = {
    userId: string
    completed: boolean
    completedAt?: Date | string
  }

  export type CommentCreateManyLessonInput = {
    commentId?: string
    userId: string
    content: string
    createdAt?: Date | string
    like?: number
  }

  export type LessonReviewsCreateManyLessonInput = {
    userId: string
    reviewedAt?: Date | string
  }

  export type LessonProgressUpdateWithoutLessonInput = {
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLessonProgressNestedInput
  }

  export type LessonProgressUncheckedUpdateWithoutLessonInput = {
    userId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonProgressUncheckedUpdateManyWithoutLessonInput = {
    userId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutLessonInput = {
    commentId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    like?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutLessonInput = {
    commentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    like?: IntFieldUpdateOperationsInput | number
  }

  export type CommentUncheckedUpdateManyWithoutLessonInput = {
    commentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    like?: IntFieldUpdateOperationsInput | number
  }

  export type LessonReviewsUpdateWithoutLessonInput = {
    reviewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLessonReviewsNestedInput
  }

  export type LessonReviewsUncheckedUpdateWithoutLessonInput = {
    userId?: StringFieldUpdateOperationsInput | string
    reviewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonReviewsUncheckedUpdateManyWithoutLessonInput = {
    userId?: StringFieldUpdateOperationsInput | string
    reviewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBadgeCreateManyBadgeInput = {
    userId: string
    obtainedAt: Date | string
  }

  export type UserBadgeUpdateWithoutBadgeInput = {
    obtainedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserBadgeNestedInput
  }

  export type UserBadgeUncheckedUpdateWithoutBadgeInput = {
    userId?: StringFieldUpdateOperationsInput | string
    obtainedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBadgeUncheckedUpdateManyWithoutBadgeInput = {
    userId?: StringFieldUpdateOperationsInput | string
    obtainedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LessonCountOutputTypeDefaultArgs instead
     */
    export type LessonCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LessonCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BadgeCountOutputTypeDefaultArgs instead
     */
    export type BadgeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BadgeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountDefaultArgs instead
     */
    export type AccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SessionDefaultArgs instead
     */
    export type SessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PointDefaultArgs instead
     */
    export type PointArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PointDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LessonDefaultArgs instead
     */
    export type LessonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LessonDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LessonProgressDefaultArgs instead
     */
    export type LessonProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LessonProgressDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BadgeDefaultArgs instead
     */
    export type BadgeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BadgeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserBadgeDefaultArgs instead
     */
    export type UserBadgeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserBadgeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CommentDefaultArgs instead
     */
    export type CommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CommentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VerificationTokenDefaultArgs instead
     */
    export type VerificationTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VerificationTokenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SrhiAnswerDefaultArgs instead
     */
    export type SrhiAnswerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SrhiAnswerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LessonReviewsDefaultArgs instead
     */
    export type LessonReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LessonReviewsDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}