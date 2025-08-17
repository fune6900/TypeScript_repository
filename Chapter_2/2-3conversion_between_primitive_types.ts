// // プリミティブ型同士の変換（暗黙的な変換）
// import { createInterface } from 'readline';
// const rl = createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('文字列を入力してください:', (line) => {
//   // 文字列が入力されるとここが実行される
//   console.log(`入力された文字列: ${line}`);
//   rl.close();
// });

// プリミティブ型同士の変換(明示的な変換)
import { createInterface } from 'readline';
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('文字列を入力してください:', (line) => {
  // 文字列が入力されるとここが実行される
  const num = Number(line);
  console.log(num + 1000);
  rl.close();
});

// Numner型への変換
const num1 = Number(true);
console.log(num1); // 1

const num2 = Number(false);
console.log(num2); // 0

const num3 = Number(null);
console.log(num3); // 0

const num4 = Number(undefined);
console.log(num4); // NaN

// Bigint型への変換
const bigInt1 = BigInt(123);
console.log(bigInt1); // 123n

// cost bigInt2 = BigInt("4.56");
// console.log(bigInt2); // 4n

//const bigInt3 = BigInt(true);
// console.log(bigInt3); // エラー: BigIntは真偽値を受け付けません

// 文字列型への変換
const str1 =  String(1234.5);
console.log(str1); // "1234.5"

const str2 = String(true);
console.log(str2); // "true"

const str3 = String(null);
console.log(str3); // "null"
const str4 = String(undefined);
console.log(str4); // "undefined"

// 真偽値型への変換
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("Hello")); // true
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean([])); // true
console.log(Boolean({})); // true
console.log(Boolean(NaN)); // false
console.log(Boolean(0n)); // false
console.log(Boolean(1n)); // true

