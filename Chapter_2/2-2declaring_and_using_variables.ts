// 変数宣言の構文
// ,を使って複数の変数を同時に宣言することもできる
const greeting = "Hello, ",
      target = "World!",
      text = greeting + target;
console.log(text); // "Hello, World!"と表示される

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
