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
