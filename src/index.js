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

// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("2"));

// 分割代入
// const myProfile = {
//   name: "natsu",
//   age: 25
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// 三項演算子
const num = "1300";

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : `数値を入力してください`；
// console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "１００を超えています" : "許容範囲内です";
};
console.log(checkSum(50, 80));
