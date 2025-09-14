// if文の基本
const userName = "admin";
if (userName === "admin") {
    console.log("管理者ユーザーです");
}

// ブロック
// 文が1つだけの場合（ブロック省略可）
let score1 = 85;

if (score1 > 80)
  console.log("合格！"); // 文が1つだけなら {} は省略可能

//複数の文を実行したい場合（ブロック必須）
let score2 = 85;

if (score2 > 80) {
  console.log("合格！");
  let username = "リク";
  console.log("ユーザー名: " + username);
}

// else構文
let score3 = 65;
if (score3 > 80) {
  console.log("合格！");
}
else {
  console.log("不合格...");
}
// else if構文
let score4 = 75;
if (score4 > 80) {
  console.log("合格！");
}

// // while文
// let sum = 0;
// let i = 1;

// while (i <= 100) {
//   sum += i; // sum = sum + i と同じ意味
//   i++;      // i = i + 1 と同じ意味
// }

// for文
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum); // 5050

