document.getElementById('showNhkBtn').addEventListener('click', showNhk);
document.getElementById('showGourmetBtn').addEventListener('click', showGourmet);
document.getElementById('showWeatherBtn').addEventListener('click', showWeather);

function showNhk() {
  const service = document.getElementById('nhkServiceSelect').value;
  const genre = document.getElementById('nhkGenreSelect').value;
  const url = `https://www.nishita-lab.org/web-contents/jsons/nhk/${service}-${genre}-j.json`;

  fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log('取得したデータ:', data);
          const nhkInfo = document.getElementById('nhkInfo');
          if (data.list && Array.isArray(data.list.g1) && data.list.g1.length > 0) {
            nhkInfo.innerHTML = '';
            data.list.g1.slice(0, 24).forEach(program =>{ 
              nhkInfo.innerHTML += `
                  <div>
                      <h3>${program.title || 'タイトル情報なし'}</h3>
                      <p>${program.subtitle || 'サブタイトル情報なし'}</p>
                      <p>開始時刻: ${program.start_time || '情報なし'}</p>
                      <p>終了時刻: ${program.end_time || '情報なし'}</p>
                      <p>チャンネル: ${program.service?.name || '情報なし'}</p>
                      <p>説明: ${program.content || '情報なし'}</p>
                      <p>出演者: ${program.act || '情報なし'}</p>
                  </div>
              `;
            });
          } else if (data.list && Array.isArray(data.list.e1) && data.list.e1.length > 0) {
            nhkInfo.innerHTML = '';
            data.list.e1.slice(0, 24).forEach(program =>{ 
              nhkInfo.innerHTML += `
                  <div>
                      <h3>${program.title || 'タイトル情報なし'}</h3>
                      <p>${program.subtitle || 'サブタイトル情報なし'}</p>
                      <p>開始時刻: ${program.start_time || '情報なし'}</p>
                      <p>終了時刻: ${program.end_time || '情報なし'}</p>
                      <p>チャンネル: ${program.service?.name || '情報なし'}</p>
                      <p>説明: ${program.content || '情報なし'}</p>
                      <p>出演者: ${program.act || '情報なし'}</p>
                  </div>
              `;
            });
          }else{
              nhkInfo.innerHTML = '<p>番組情報が見つかりませんでした。</p>';
          }
      })
      .catch(error => {
          console.error('エラー:', error);
          document.getElementById('nhkInfo').innerHTML = '<p>データの取得に失敗しました。</p>';
      });
}


function showGourmet() {
  const genre = document.getElementById('gourmetGenreSelect').value;
  const url = `https://www.nishita-lab.org/web-contents/jsons/hotpepper/${genre}.json`;

  fetch(url)
      .then(response => response.json())
      .then(data => {
          console.log('取得したデータ:', data); // デバッグ用にデータをコンソールに出力

          const gourmetInfo = document.getElementById('gourmetInfo');
          if (data.results && Array.isArray(data.results.shop) && data.results.shop.length > 0) {
              gourmetInfo.innerHTML = '';
              data.results.shop.slice(0, 10).forEach(shop => {
                  gourmetInfo.innerHTML += `
                      <div>
                          <h3>${shop.name || '情報なし'}</h3>
                          <p>ジャンル: ${shop.genre?.name || '情報なし'}</p>
                          <p>サブジャンル: ${shop.subgenre?.name || '情報なし'}</p>
                          <p>キャッチコピー: ${shop.catch || '情報なし'}</p>
                          <p>住所: ${shop.address || '情報なし'}</p>
                          <p>最寄駅: ${shop.station_name || '情報なし'}</p>
                          <p>アクセス情報: ${shop.access || '情報なし'}</p>
                          <p>予算: ${shop.budget?.name || '情報なし'}</p>
                          <p>営業日時: ${shop.open || '情報なし'}</p>
                      </div>
                  `;
              });
          } else {
              gourmetInfo.innerHTML = '<p>グルメ情報が見つかりませんでした。</p>';
          }
      })
      .catch(error => {
          console.error('エラー:', error);
          document.getElementById('gourmetInfo').innerHTML = '<p>データの取得に失敗しました。</p>';
      });
}






function showWeather() {
    const cityId = document.getElementById('weatherCitySelect').value;
    const url = `https://www.nishita-lab.org/web-contents/jsons/openweather/${cityId}.json`;

    fetch(url)
        .then(response => response.json())

        .then(data => {
          console.log('取得したデータ:', data); // デバッグ用にデータをコンソールに出力
            const weatherInfo = document.getElementById('weatherInfo');
            if (data && data.weather) {
                weatherInfo.innerHTML = `
                    <h2>${data.name}</h2>
                    <p>緯度: ${data.coord.lat}</p>
                    <p>経度: ${data.coord.lon}</p>
                    <p>天気: ${data.weather[0].description}</p>
                    <p>最低気温: ${data.main.temp_min}℃</p>
                    <p>最高気温: ${data.main.temp_max}℃</p>
                    <p>湿度: ${data.main.humidity}%</p>
                    <p>風速: ${data.wind.speed}m/s</p>
                    <p>風向: ${data.wind.deg}°</p>
                `;
            } else {
                weatherInfo.innerHTML = '<p>天気情報が見つかりませんでした。</p>';
            }
        })
        .catch(error => {
            console.error('エラー:', error);
            document.getElementById('weatherInfo').innerHTML = '<p>データの取得に失敗しました。</p>';
        });
}
