// type文: 型を宣言する文
// type Foobarobj = {
//   foo: string;
//   bar: number;
// };

// let foobar: Foobarobj = {
//   foo: "Hello",
//   bar: 123,
// };

// インデックスシグネチャ
// type PriceData = {
//   [key: string]: number;
// }

// const data: PriceData = {
//   apple: 100,
//   banana: 200,
//   orange: 150,
// };

// console.log(data.apple);  // 100
// console.log(data["banana"]); // 200

// オプショナルプロパティ
type Myobj = {
  foo: string;
  bar?: number; // barは別にあってもなくても良い
}

let myobj1: Myobj = {
  foo: "Hello",
  bar : 123,  
};

let myobj2: Myobj = {
  foo: "World",
};

console.log(myobj1); // { foo: 'Hello', bar: 123 }
console.log(myobj2); // { foo: 'World' }
// myobj1.barはnumber型、myobj2.barはundefined型になる(ユニオン型)
console.log(myobj2.bar); // undefined

// 読み取り専用プロパティ
// type ReadonlyObj = {
//   readonly foo: string;
//   bar: number;
// }

// let readonlyObj: ReadonlyObj = {
//   foo: "Hello",
//   bar: 123,
// };
// // readonlyObj.foo = "World"; // エラー: fooは読み取り専用プロパティです
// readonlyObj.bar = 456; // barは変更可能
