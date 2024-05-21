// (1) 変数名のつづり間違い      → エラー発生
let heikin = 3.5;
console.log(heikin);            // 正しくは heikin

// (2) 関数名のつづり間違い      → エラー発生
let n = Math.floor(heikin);     // 正しくは floor

// (3) 存在しない配列要素       → undefined
let ary = ['a', 'b', 'c'];
console.log(ary[2]);            // 3番目の要素は存在しない

// (4) 小数のインデックス        → undefined
let i = 3/2;                
console.log(ary[i]);            // i=3/2=1.5 なので ary[1.5] を参照しようとする

// (5) メンバー名の間違い       → undefined
let obj = {x:3, y:7};
console.log(obj.z);             // メンバー z は存在しない

// (6) undefined のメンバー   → エラー発生
let o;
console.log(o.x);               // oは初期化していない

// (7) 整数のメンバー？と要素？   → undefined let n = 3;
console.log(n.x);               // n はオブジェクトではない
console.log(n[2]);              // n は配列ではない

// (8) 5と6の組み合わせ        → エラー発生
let obj2 = {
    mem1: {x:4, y:9},
    mem2: "abc"
};
console.log(obj2.mem1.x);           // obj2.mem0 は存在しない. さらにそのメンバー x を参照しようとする