
import { LoadingAnimation } from './module/loader';


(() => {
    // file APIが使えるかチェック
    if (window.File) {
        // File APIに関する処理を記述
        console.log('File APIが実装されてます。');
    }
    else {
        console.log('本ブラウザではFile APIが使えません');
    }
})();

// カレンダーのvalueを取得
const jsonToCsv = (() => {
    document.addEventListener('DOMContentLoaded', function () {

        //今日の日時を表示
        let date = new Date(),
            year = date.getFullYear(),
            month = ('0' + (date.getMonth() + 1)).slice(-2),
            day = ('0' + date.getDate()).slice(-2),
            ymd = `${year}-${month}-${day}`,
            fileNameDate = document.querySelector('#fileNameDate'),
            getJsonDataBtn = document.querySelector('#getJsonData'),
            getCsvFileBtn = document.querySelector('#getCsvFile'),
            jsonFileName;

        // loading classをインスタンス化
        const nowLoading = new LoadingAnimation();

        // デフォルトのファイル名（日付）
        jsonFileName = fileNameDate.value = ymd;
        // 取得できる日付を当日までとする
        fileNameDate.setAttribute('max', jsonFileName);

        // カレンダーが変更させれたら
        fileNameDate.addEventListener('change', function () {
            if (this.value != '') {
                jsonFileName = fileNameDate.value.split('-').join('') + '.json';
            }
        }, false);



        const getData = function () {
            const filePath = '/lib/json/' + jsonFileName;
            if (fileNameDate != '') {
                fetch(filePath).then((response) => {
                    return response.json();
                    // CSVダウンロードボタンを表示
                }).then((json) => {
                    document.querySelector('#jsonDataLog').innerHTML = JSON.stringify(json, null, ' ');
                }).catch((error) => {
                    // CSVダウンロードボタンを非表示
                    alert('fileが存在しません');
                });
            }
        };

        // JSONファイル取得メソッド
        const getJsonFile = async () => {
            // loading Start
            await new Promise(resolve => {
                setTimeout(() => {
                    nowLoading.loadStart();
                    resolve();
                }, 0);
            });
            // getJsonFile
            await new Promise(resolve => {
                setTimeout(() => {
                    getData();
                    resolve();
                }, 4000);
            });
            // loading End
            await new Promise(resolve => {
                setTimeout(() => {
                    nowLoading.loadEnd();
                    resolve();
                }, 0);
            });

        };

        // ボタンをクリックしたら
        getJsonDataBtn.addEventListener('click', () => {
            getJsonFile();
        });


    }, false);

})();
