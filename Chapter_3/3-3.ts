// 部分型関係
type FooBar = {
  foo: string;
  bar: number;
}

type FooBarBuz = {
  foo: string;
  bar: number;
  buz: boolean;
}

const obj: FooBarBuz = {
  foo: "Hello",
  bar: 123,
  buz: true,
};

// FooBarプロパティはFooBarBuzプロパティに全て存在する
// 各プロパティについてFooBarBazプロパティにおけるそのプロパティの型はFooBarプロパティにおけるそのプロパティの型と同じ型か、より広い型である

