// // 型引数を持つ型(ジェネリック型)
// type Box<T> = {
//   name: string;
//   child: T;
// };

// type Family<Parent, Child> = {
//   mother: Parent;
//   father: Parent;
//   child: Child;
// };

// const obj: Family<number, string> = {
//   mother: 123,
//   father: 456,
//   child: "789",
// };

// オプショナルな型引数
// type Animal = {
//   name: string;
// }

// type Family<Parent = Animal, Child = Animal> = {
//   mother: Parent;
//   father: Parent;
//   child: Child;
// };

// // 通常通りの使い方
// type S = Family<string, number>;
// // TはFamily<Animal, Animal>と同じ意味
// type T = Family;
// // UはFamily<string, Animal>と同じ意味
// type U = Family<string>;

// 部分型関係による型引数の制約
// type HasName = {
//   name: string;
// }

// type Family<Parent extends HasName, Child extends HasName> = {
//   mother: Parent;
//   father: Parent;
//   child: Child;
// };

// type T = Family<string, number>; // エラー: string型とnumber型はHasNameを満たさない

