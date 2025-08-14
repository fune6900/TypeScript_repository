// TypeScriptにおける数値型の特徴
const a: number = 10;
const b: number = 20;

// 算術演算
const sum = a + b;
const difference = a - b;
const product = a * b;
const quotient = a / b;

console.log(sum)  
console.log(difference)
console.log(product)
console.log(quotient)

// 少数点以下の演算
const c: number = 5.5;
const d: number = 2.2;

const floatSum = c + d;
console.log(floatSum)

// 数値リテラル
const decimal: number = 6; // 10進数
const binary: number = 0b1010; // 2進数
const octal: number = 0o12; // 8進数
const hex: number = 0x1f // 16進数

// 指数標記（べき乗表記）
const bigNum = 1e8 // 1 * 10^8 = 100,000,000
const smallNum = 1e-3 // 1 * 10^-3 = 0.001

// 数値の区切り文字(アンダースコア)の使用
const laegeNumber: number = 1_000_000; // 1,000,000
const hexNumber: number = 0x1_0000; // 65,536

// bigint型の変数を定義
const bigintval: bigint = 1234567890123456789012345678901234567890n;

// bigint型の計算
const bigintval2: bigint = 10n / 3n;
console.log(bigintval2); // 3n

// BigintとNumberの混合計算
const numberval: number = 5;
const bigintval3: bigint = bigintval + BigInt(numberval);
console.log(bigintval3); // 1234567890123456789012345678901234567895n

// 文字列リテラル
const word1: string = "Hello";
const word2: string = 'World!';
console.log(word1 + ", " + word2); // "Hello, World!"と表示される

// テンプレートリテラル
const name: string = "Alice";
const age: number = 30;
console.log(`私の名前は${name}です。年齢は${age}歳です。`);

// エスケープシーケンス
const str = "Hello, \nWorld!";
console.log(str); // "Hello, \nWorld!"と表示される

// 真偽値リテラル
const yes: boolean = true;
const no: boolean = false;
console.log(yes); // true
console.log(no); // false

// nullとundefined
const nothing: null = null;
const notDefined: undefined = undefined;
console.log(nothing); // null
console.log(notDefined); // undefined