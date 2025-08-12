// 数値型
let age: number = 25;
let price: number = 100;

console.log(age);
console.log(price);

// 文字列型
let hello: string = "こんにちは！"
let userName: string = "フネ";

console.log(hello);
console.log(userName);

//真偽値型
let isActive: boolean = true;
let hasPermission: boolean = false;

console.log(isActive);
console.log(hasPermission);

//　リテラ型　変数に入れることができる値を指定できる
let direction: "left" | "right" | "center";
direction = "left"; // OK
// direction = "bottom"; // エラー

// ユニオン型 変数に複数の型を指定して入れることができる
let id: string | number;
id = 123; // OK
id = "123"; // OK
// id = true ; // エラー

// 配列型
let numbers: number[] = [1, 2, 3, 4, 5];
let names: Array<string> = ["フネ", "リク", "ベンツ"];

console.log(numbers);
console.log(names);

// タプル型 型と配列の長さをカッチリ決めれる配列
let person: [string, number] = ["フネ", 21];// OK
// let another: [string, number] = [21, "フネ"]; // NG

// オブジェクト型 keyと値の組み合わせ（ハッシュ的なやつ）
let user: { name: string; age: number } = {
  name: "フネ",
  age: 21
};

console.log(user);

type User = {
  name: string;
  age: number;
  isAdmin?: boolean;
};

let player: User = { name: "Bob", age: 27 };

console.log(player);

// 特殊型
// any型 なんでも代入できる
let anything: any = "Hello";
console.log(anything);

anything = 123;
console.log(anything);

anything = true;
console.log(anything);

// unknown型 使用する際に型のチェックが必要になる安全な型
let value: unknown = "Hello";
if (typeof value === "string") {
  console.log(value.toUpperCase()); // 型チェックが必要
}

// never型 絶対に値を返さない型
function throwError(message: string): never {
  throw new Error(message);
}

// void型 関数が値を返さない場合に使われる型
function logMessage(message: string): void {
  console.log(message);
}

// 関数の型定義
// 引数と戻り値に型を指定した関数
function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("Alice")); // "Hello, Alice!"
// console.log(greet(123));  // エラー: number型はstring型の引数に代入できません

// 戻り値がない場合はvoid型を使います
function message(message: string): void {
  console.log(message);
}

// オブジェクトの型定義
// オブジェクトリテラルでの型指定
const per: { name: string; age: number } = {
  name: "Bob",
  age: 30,
};

// 型エイリアス（type）やインターフェイス（interface）の利用
// 型エイリアスを使った定義
type UserType = {
  name: string;
  age: number;
  isAdmin?: boolean; // オプショナルなプロパティ（省略可能）
};

const userA: UserType = { name: "Carol", age: 28 };
console.log(userA)

// インターフェイスを使った定義（拡張も可能）
interface IUser {
  name: string;
  age: number;
}

const userB: IUser = { name: "Dave", age: 35 };
console.log(userB)

// 配列とタプルの型指定
// 配列型 同じ型の複数の値を扱う場合、配列に型を指定します。
// 数値の配列
const scores: number[] = [10, 20, 30];
console.log(scores)

// 文字列の配列（別の書き方）
const namaes: Array<string> = ["Alice", "Bob", "Charlie"];
console.log(names)

// タプル型 各要素の型と順番が固定される配列
// 名前と年齢をセットで返すタプル
function getUserInfo(): [string, number] {
  return ["Alice", 25];
}

const [userNam, userAge] = getUserInfo();
console.log(userName, userAge);  // "Alice" 25

// ユニオン型と型ガード
//ユニオン型は、複数の型のいずれかを許容する型
let ids: string | number;
ids = "abc123";  // OK
ids = 456;       // OK
// ids = true;   // エラー: booleanは許容されません

// 型ガードの利用例
//型ガードを使うと、実行時に値の型をチェックして適切な処理を分岐できます
function printId(id: string | number) {
  if (typeof id === "string") {
    // idはstring型として扱える
    console.log(`ID (string): ${id.toUpperCase()}`);
  } else {
    // idはnumber型として扱える
    console.log(`ID (number): ${id}`);
  }
}

printId("abc");  // 出力: ID (string): ABC
printId(123);    // 出力: ID (number): 123

// keyof を使うとオブジェクトのプロパティ名が正しいかチェックできます。
interface Product {
  name: string;
  price: number;
}

function getProductValue(product: Product, key: keyof Product) {
  //keyof Product は "name" | "price" のユニオン型になります
  return product[key]; // product["name"] や product["price"]）と同じ動作
}

const product: Product = { name: "Laptop", price: 1500 };
console.log(getProductValue(product, "name"));  // "Laptop"
// console.log(getProductValue(product, "category"));  // エラー: "category"はProductのキーではありません

// ジェネリクス
// ジェネリクスは、関数やクラスの中で具体的な型をパラメータとして扱えるため、柔軟かつ再利用性の高いコードを実現
// ジェネリック関数の例：引数をそのまま返す関数
function identity<T>(value: T): T {
  return value;
}

console.log(identity<string>("Hello"));   // 出力: Hello
console.log(identity<number>(123));       // 出力: 123

// 型推論により、型指定を省略できる
console.log(identity("World"));           // 出力: World

// モジュール
// TypeScriptでは、コードをファイルごとに分割して管理し、exportとimportを使って再利用できます
// モジュールを利用することで、コードが整理され、複数ファイルに分割して保守しやすいプロジェクト構成を実現
// 例.関数をエクスポートする
// ファイル: mathUtils.ts
// export function add(a: number, b: number): number {
//   return a + b;
// }

// export const PI: number = 3.14159;

// ファイル: main.ts
// mathUtils.tsからエクスポートされた機能をインポートする
// import { add, PI } from './mathUtils';

// console.log(add(5, 3));  // 出力: 8
// console.log(PI);         // 出力: 3.14159
