// 二項演算子
const addResulit = 1024 + 314 + 500; // 加算
console.log(addResulit)// 1838
const discounted = addResulit * 0.7;
console.log(discounted); // 1286.6

const squrt2 = 2 ** 0.5; // 2の平方根
console.log(squrt2); // 1.4142135623730951
console.log(squrt2 - 1); // 0.4142135623730951

console.log(18 / 12); // 1.5
console.log(18n / 12n); // 1n (BigInt型の除算)
console.log(18 % 12); // 6 (余り)
console.log(18n % 12n); // 6n (BigInt型の余り)

// 返り値
// const result = 10n + 5; // エラー: BigIntとNumberの混合計算はできません
// const result = '123' + 5n; // エラー: 文字列とBigIntの混合計算はできません

// 単項演算子
const x = 123;
const minusx = -x; // xの符号を反転
console.log(minusx); // -123

const plusx = +x; // xをそのまま
console.log(plusx); // 123

// インクリメントとデクリメント
let foo = 10;
foo++; // fooを1増やす
console.log(foo); // 11
foo--; // fooを1減らす
console.log(foo); // 10

// 文字列の連結
const firstName = "Alice";
const lastName = "Smith";
const fullName = firstName + " " + lastName; // 文字列の連結
console.log(fullName); // "Alice Smith"
// 手軽なテンプレートリテラルを使うこともできる
const fullNameTemplate = `${firstName} ${lastName}`; // テンプレートリテラル
console.log(fullNameTemplate); // "Alice Smith"
const fullNameWithAge = `${fullName} is 30 years old.`; // 年齢を含めた文字列

// 比較演算子（大小比較）
const left1 = -5, right1 = 10;
console.log(left1 < right1); // true

const left2 = 100n, right2 = 50n;
console.log(left2 >= right2); // true

const left3 = -10, right3 = 0;
console.log(left3 > right3); // false

const left4 = 12n, right4 = 8n;
console.log(left4 <= right4); // false

// 一致判定
const left5 = 123, right5 = 123;
console.log(left5 === right5); // true
console.log(left5 !== right5); // false

// 複雑な例
import { createInterface } from 'readline';
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('パスワードを入力してください:', (password) => {
  if (password === 'hogehoge') {
    console.log('ようこそ！');
  } else {
    console.log('誰？');
  }
  rl.close();
});

// ==と===の違い
const str: any = "123";

console.log(str == 123); // true (型変換が行われる)
console.log(str === 123); // false (型が異なるため厳密な比較)

// 論理演算子
const t = true, f = false;

console.log(t && t); // true (AND)
console.log(t && f); // false (AND)
console.log(f && f); // false (AND)

console.log(t || t); // true (OR)
console.log(t || f); // true (OR)
console.log(f || f); // false (OR)

// 複数条件の判定
rl.question('数値を入力してください:', (val) => {
  const num = Number(val);
  if (num >= 0 && num <= 100) {
    console.log(`入力された数値は0以上100以下です: ${num}`);
  } else {
    console.log('入力された数値は0未満または100を超えています。');
  }
  rl.close();
});

// !演算子
// if (!Nunber.isNaN(num)) {
//   console.log('123はNaNではありません。');
// }

// !!式（真偽値に変換）
const value = "Hello, World!";
const isTruthy = !!value; // 真偽値に変換
console.log(isTruthy); // true (空でない文字列は真)
