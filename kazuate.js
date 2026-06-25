// 課題4-1: 数当てゲーム

// 乱数を使って正解を作る
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// そのほか，必要に応じて変数を宣言してもよい

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // ここから: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  kaisu++;
  let span = document.querySelector('span#kaisu');
  span.textContent = kaisu;
  // ここまで: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  
  // ここから: テキストボックスに指定された数値を yoso に代入する
  let yoso = document.querySelector('input[name="textbox"]');
  span = document.querySelector('span#yoso');
  span.textContent = yoso.value;
  // ここまで: テキストボックスに指定された数値を yoso に代入する
  
  // ここから: 正解判定する
  // 　　　　  正解/不正解のときのメッセージを表示する
let result = document.querySelector('p#result');

if (kaisu >= 4) {
  result.textContent = '答えは ' + kotae + ' でした．すでにゲームは終わっています．';
}else if (yoso.value == kotae) {
  result.textContent = `正解です．おめでとう!`;
}else {
  if (kaisu == 3) {
    result.textContent = 'まちがい．残念でした答えは ' + kotae + ' です．';
  }else if (yoso.value < kotae) {
    result.textContent = 'まちがい．答えはもっと大きいですよ．';
  }else if (yoso.value > kotae) {
    result.textContent = 'まちがい．答えはもっと小さいですよ．';
  }
  // ここまで: 正解判定する
}
}

// ここから: ボタンを押した時のイベントハンドラとして hantei を登録
let button = document.querySelector('button#print');
button.addEventListener('click', hantei);

// ここまで: ボタンを押した時のイベントハンドラとして hantei を登録
