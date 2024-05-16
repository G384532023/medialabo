// 答え
let kotae = Math.floor(Math.random() * 10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// ボタン要素を取得
let button = document.getElementById("button");

// ボタンクリック時の処理を設定
button.addEventListener("click", hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // テキストボックスから値を取得
  let yoso = document.getElementById("inputNumber").value;
  yoso = parseInt(yoso); // 文字列から数値への変換

  // 空欄や無効な入力のチェック
  if (isNaN(yoso) || yoso < 1 || yoso > 10) {
    console.log("1から10までの数字を入力してください。");
    return; // 処理を終了
  }
  kaisu++;
  console.log(kaisu+"回目の予想: "+yoso);
  
  // 入力回数を更新
  document.getElementById("kaisu").textContent = kaisu;
  document.getElementById("answer").textContent = yoso;

  // 課題3-1: 正解判定する
  if (yoso === kotae) {
    if(kaisu >= 4){
    }else{
        console.log("正解です、おめでとう!");
        document.getElementById("result").textContent = "正解です、おめでとう!";
    }
  } else {
    if (yoso < kotae && (kaisu === 1 || kaisu === 2)) {
      console.log("まちがい．答えはもっと大きいですよ");
      document.getElementById("result").textContent = "まちがい．答えはもっと大きいですよ";
    } else if (yoso > kotae && (kaisu === 1 || kaisu === 2)) {
      console.log("まちがい．答えはもっと小さいですよ");
      document.getElementById("result").textContent = "まちがい．答えはもっと小さいですよ";
    } else if (kaisu === 3) {
      console.log("まちがい．残念でした、答えは " + kotae + " です．");
      document.getElementById("result").textContent = "まちがい．残念でした、答えは " + kotae + " です．";
    }
  }

  // 入力回数が4回に達した場合、終了メッセージを表示
  if (kaisu >= 4) {
    console.log("答えは " + kotae + " でした．すでにゲームは終わっています");

    document.getElementById("result").textContent = "答えは " + kotae + " でした．すでにゲームは終わっています";
    // ボタンのクリックイベントを削除
  }
}
