// 変数宣言の構文
// ,を使って複数の変数を同時に宣言することもできる
const greeting = "Hello, ",
      target = "World!",
      text = greeting + target;
console.log(text); // "Hello, World!"と表示される

// 識別子
// 変数名に日本語を使用できる
const あいう = 123;
const 技術書 = あいう + 876;
console.log(技術書); // 999

// 変数名にUnicode文字を使用できる
const こんにちは = "こんにちは";
const 世界 = "世界";
const こんにちは世界 = こんにちは + " " + 世界;
console.log(こんにちは世界); // "こんにちは 世界"と表示される

// 変数名は空白を含めることはできない
// const hello world = "Hello World"; // エラー: 変数名に空白は使用できません

// 変数名は数字で始めることはできない
// const 1stVariable = "First"; // エラー: 変数名は数字で始めることはできません

// 変数名は予約語を使用できない
// const class = "MyClass"; // エラー: 'class'は予約語です

// 変数に型注釈を与える
const greeting1: string = "Hello, ";
const target1: string = "World!";
console.log(greeting1 + target1); // "Hello, World!"と表示される

// 指定した型とは異なる型の値を代入した場合
//const greeting2: string = "Hello, ";
// const target2: string = 123; 
// console.log(greeting2 + target2); // "Hello, World!"と表示される

// letによる変数宣言と変数への再代入
// letを使った変数宣言と再代入の例
let greeting3 = "Hello, ";
let target3 = "World!";
console.log(greeting3 + target3); // "Hello, World!"と表示される

let greeting4 = "Hello, ";
greeting4 = greeting4 + "World!"; // greeting1に再代入
console.log(greeting4); // "Hello, World!"と表示される

// costは再代入できない
const greeting5 = "Hello, ";
// greeting5 = greeting5 + "World!"; // エラー: const変数は再代入できません
// console.log(greeting5); // "Hello, "と表示される

// 宣言時に値を代入しなくて良い
let greeeting6, target4;
greeeting6 = "Hello, ";
target4 = "World!";
console.log(greeeting6 + target4); // "Hello, World!"と表示される

// 宣言時に型注釈を与える
let greeting7: string, target5: string;
greeting7 = "Hello, ";
target5 = "World!";
console.log(greeting7 + target5); // "Hello, World!"と表示される

