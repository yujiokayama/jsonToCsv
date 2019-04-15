// file APIが使えるかチェック
if (window.File) {
    // File APIに関する処理を記述
    console.log('File APIが実装されてます。');
}
else {
    console.log('本ブラウザではFile APIが使えません');
}

// カレンダーのvalueを取得
var jsonToCsv = (function () {
    document.addEventListener('DOMContentLoaded', function () {

        //今日の日時を表示
        var date = new Date(),
            year = date.getFullYear(),
            month = ('0' + (date.getMonth() + 1)).slice(-2),
            day = ('0' + date.getDate()).slice(-2),
            ymd = `${year}-${month}-${day}`,
            fileNameDate = document.getElementById('fileNameDate'),
            getJsonDataBtn = document.querySelector('#getJsonData'),
            jsonFileName;

        // デフォルトのファイル名（日付）
        jsonFileName = fileNameDate.value = ymd;
        // 取得できる日付を当日までとする
        fileNameDate.setAttribute('max', jsonFileName);

        // カレンダーが変更させれたら
        fileNameDate.addEventListener('change', function () {
            if (this.value != '') {
                jsonFileName = fileNameDate.value.split('-').join('') + '.json';
                // dlボタンを表示
                getJsonDataBtn.css.display = 'block';
            }
            else {
                // dlボタンを非表示
                getJsonDataBtn.css.display = 'none';
            }
        }, false);

        // ファイルをダウンロードする
        let bom = new Uint8Array([0xEF, 0xBB, 0xBF]),
            btn = document.getElementById('getCsvFile');

        btn.addEventListener('click', function () {
            var blob = new Blob(['csv'], { 'type': 'text/csv' });
            btn.href = window.URL.createObjectURL(blob);
        });

        // JSONファイルの取得
        var getJsonFiles = function () {
            // ボタンをクリックしたとき
            getJsonDataBtn.addEventListener('click', function () {
                var url = '/lib/json/' + jsonFileName;
                if (fileNameDate != '') {
                    fetch(url).then((response) => {
                        return response.json();
                    }).then((json) => {
                        document.querySelector('#jsonDataLog').innerHTML = JSON.stringify(json, null, ' ');
                    }).catch((error) => {
                        alert('fileが存在しません');
                    });
                }
            }, false);
        };
        getJsonFiles();



    }, false);

})();
