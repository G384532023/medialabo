var unit = 100,
    canvasList, // キャンバスの配列
    info = {}, // 全キャンバス共通の描画情報
    colorList; // 各キャンバスの色情報


    document.addEventListener('DOMContentLoaded', function() {
        function togglePopup(popupId, action) {
            let popup = document.getElementById(popupId);
            if (action === 'show') {
                popup.classList.remove('fadeout');
                popup.style.display = 'block';
            } else if (action === 'hide') {
                popup.classList.add('fadeout');
                setTimeout(function() {
                    popup.style.display = 'none';
                }, 500);
            }
        }
    
        document.getElementById('show-popup').addEventListener('click', function() {
            togglePopup('popup-a', 'show');
        });
    
        document.getElementById('hide-popup').addEventListener('click', function() {
            togglePopup('popup-a', 'hide');
        });
    
        document.getElementById('show-popup2').addEventListener('click', function() {
            togglePopup('popup-b', 'show');
        });
    
        document.getElementById('hide-popup2').addEventListener('click', function() {
            togglePopup('popup-b', 'hide');
        });
    
        document.getElementById('show-popup3').addEventListener('click', function() {
            togglePopup('popup-c', 'show');
        });
    
        document.getElementById('hide-popup3').addEventListener('click', function() {
            togglePopup('popup-c', 'hide');
        });
    
        document.getElementById('show-popup4').addEventListener('click', function() {
            togglePopup('popup-d', 'show');
        });
    
        document.getElementById('hide-popup4').addEventListener('click', function() {
            togglePopup('popup-d', 'hide');
        });
    
        document.getElementById('show-popup5').addEventListener('click', function() {
            togglePopup('popup-e', 'show');
        });
    
        document.getElementById('hide-popup5').addEventListener('click', function() {
            togglePopup('popup-e', 'hide');
        });
    
        document.getElementById('show-popup6').addEventListener('click', function() {
            togglePopup('popup-f', 'show');
        });
    
        document.getElementById('hide-popup6').addEventListener('click', function() {
            togglePopup('popup-f', 'hide');
        });
    
        document.getElementById('show-popup7').addEventListener('click', function() {
            togglePopup('popup-g', 'show');
        });
    
        document.getElementById('hide-popup7').addEventListener('click', function() {
            togglePopup('popup-g', 'hide');
        });

        document.getElementById('hide-spopup').addEventListener('click', function() {
            togglePopup('startpopup', 'hide');
        });
    });
    
    
    
    




/**
 * Init function.
 * 
 * Initialize variables and begin the animation.
 */
function init() {
    info.seconds = 0;
    info.t = 0;
    canvasList = [];
    colorList = [];
    // canvas1個めの色指定
    canvasList.push(document.getElementById("waveCanvas"));
    colorList.push(['#666', '#ccc', '#eee']);//重ねる波の色設定

    // canvas2個めの色指定
    canvasList.push(document.getElementById("waveCanvas2"));
    colorList.push(['#43c0e4']);

    // canvas3個めの色指定
    canvasList.push(document.getElementById("waveCanvas3"));
    colorList.push(['#fff']);

    // 各キャンバスの初期化
    for (var canvasIndex in canvasList) {
        var canvas = canvasList[canvasIndex];
        canvas.width = document.documentElement.clientWidth; //Canvasのwidthをウィンドウの幅に合わせる
        canvas.height = 200;//波の高さ
        canvas.contextCache = canvas.getContext("2d");
    }
    // 共通の更新処理呼び出し
    update();
}

function update() {
    for (var canvasIndex in canvasList) {
        var canvas = canvasList[canvasIndex];
        // 各キャンバスの描画
        draw(canvas, colorList[canvasIndex]);
    }
    // 共通の描画情報の更新
    info.seconds = info.seconds + .014;
    info.t = info.seconds * Math.PI;
    // 自身の再起呼び出し
    setTimeout(update, 35);
}

/**
 * Draw animation function.
 * 
 * This function draws one frame of the animation, waits 20ms, and then calls
 * itself again.
 */
function draw(canvas, color) {
    // 対象のcanvasのコンテキストを取得
    var context = canvas.contextCache;
    // キャンバスの描画をクリア
    context.clearRect(0, 0, canvas.width, canvas.height);

    //波の重なりを描画 drawWave(canvas, color[数字（波の数を0から数えて指定）], 透過, 波の幅のzoom,波の開始位置の遅れ )
    drawWave(canvas, color[0], 0.5, 3, 0);
    drawWave(canvas, color[1], 0.4, 2, 250);
    drawWave(canvas, color[2], 0.2, 1.6, 100);
}

/**
* 波を描画
* drawWave(色, 不透明度, 波の幅のzoom, 波の開始位置の遅れ)
*/
function drawWave(canvas, color, alpha, zoom, delay) {
    var context = canvas.contextCache;
    context.fillStyle = color;//塗りの色
    context.globalAlpha = alpha;
    context.beginPath(); //パスの開始
    drawSine(canvas, info.t / 0.5, zoom, delay);
    context.lineTo(canvas.width + 10, canvas.height); //パスをCanvasの右下へ
    context.lineTo(0, canvas.height); //パスをCanvasの左下へ
    context.closePath() //パスを閉じる
    context.fill(); //塗りつぶす
}

/**
 * Function to draw sine
 * 
 * The sine curve is drawn in 10px segments starting at the origin. 
 * drawSine(時間, 波の幅のzoom, 波の開始位置の遅れ)
 */
function drawSine(canvas, t, zoom, delay) {
    var xAxis = Math.floor(canvas.height / 2);
    var yAxis = 0;
    var context = canvas.contextCache;
    // Set the initial x and y, starting at 0,0 and translating to the origin on
    // the canvas.
    var x = t; //時間を横の位置とする
    var y = Math.sin(x) / zoom;
    context.moveTo(yAxis, unit * y + xAxis); //スタート位置にパスを置く

    // Loop to draw segments (横幅の分、波を描画)
    for (i = yAxis; i <= canvas.width + 10; i += 10) {
        x = t + (-yAxis + i) / unit / zoom;
        y = Math.sin(x - delay) / 3;
        context.lineTo(i, unit * y + xAxis);
    }
}


let page1 = document.querySelector('a#page1');
page1.addEventListener('focus', changeColor);

function changeColor() {
	// 見出し h1 要素を検索
    let h1 = document.querySelector('a#page1');

    h1.style.color = 'white';

	// h1 の文字を青色に
}



init();