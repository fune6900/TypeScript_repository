// 配列
const arr = [ 1, 2, -456 * 100 ];
console.log(arr); // [ 1, 2, -45600 ]

// 配列のスプレット構文
const arr1 = [1, 2, 3];
const arr2 = [ ...arr1, 4, 5, 6];
console.log(arr2); // [ 1, 2, 3, 4, 5, 6 ]

// 配列の要素にアクセス
const arr3 = [10, 20, 30, 40, 50];
console.log(arr[0]); // 10
console.log(arr[2]); // 30
arr3[2] = 300; // 要素の更新

// 配列型の記法
const arr4: number[] = [100, 200, 300];
const arr5: Array<string> = ["Alice", "Bob", "Charlie"];

// readonly配列型 
const arr6: readonly number[] = [1, 2, 3];
// arr6[0] = 10; // エラー: 読み取り専用プロパティに代入できません

// 配列のメソッド
// push メソッド 配列の末尾に要素を追加
const arr7: number[] = [1, 2, 3];
arr7.push(4); // arrは [1, 2, 3, 4]

// pop メソッド 配列の末尾の要素を削除して返す
const last = arr7.pop(); // arrは [1, 2, 3], lastは4
console.log(last); // 4
console.log(arr7); // [1, 2, 3]

// shift メソッド 配列の先頭の要素を削除して返す
const first = arr7.shift(); // arrは [2, 3], firstは1
console.log(first); // 1
console.log(arr7); // [2, 3]

// unshift メソッド 配列の先頭に要素を追加
arr7.unshift(0); // arrは [0, 2, 3]
console.log(arr7); // [0, 2, 3]

// for-of文での配列の反復処理
for (const num of arr7) {
  console.log(num); // 0, 2, 3と順に表示される
}
