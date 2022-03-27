// const let 変数宣言
// var val1 = "var変数";
// console.log(val1);
// let val2 = "let変数";
// console.log(val2);

// // let上書き
// val2 = "let上書き";
// console.log(val2);

// // 再宣言は不可能

// const val3 = "const変数";
// console.log(val3);

// 上書き不可能
// オブジェクトや配列は変更可能
// const val4 = {
//   name: "a",
//   age: 1
// };
// val4.name = "b";
// console.log(val4);

const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monkey");
console.log(val5);
