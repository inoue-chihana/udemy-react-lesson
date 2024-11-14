import funcYeah, { hello, User } from "./module.js";

// 関数インポート
hello();

// クラスインポート
const user = new User('Tom');
user.hello();

// デフォルトエクスポート
funcYeah();