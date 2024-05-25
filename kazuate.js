// 答え
let kotae = Math.floor(Math.random() * 10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

let kaisu = 0;

let button = document.getElementById("button");

button.addEventListener("click", hantei);

function hantei() {
  let yoso = document.getElementById("inputNumber").value;
  yoso = parseInt(yoso); // 文


  if (isNaN(yoso) || yoso < 1 || yoso > 10) {
    console.log("1から10までの数字を入力してください。");
    return; 
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
        kaisu = 0;
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
