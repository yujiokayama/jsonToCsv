
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
                jsonFileName = fileNameDate.value.split('-').join('');
            }
        }, false);


        // _1から_8までのjsonファイルを取得する(デフォルトは8)
        const getData = () => {
            let fileCount = 8; //default [8]
            let filePath = '/lib/json/' + jsonFileName;
            let jsonDataFields;
            let jsonDatas = [];

            for (let i = 0; i < fileCount; i++) {
                fetch(`${filePath}_${(1 + i)}.json`).then((response) => {
                    return response.json();
                }).then((json) => {
                    // JSONデータ表示用フィールドを生成
                    cleateDataFileds();
                    // 各jsonデータを配列に格納
                    jsonDatas.push(JSON.stringify(json, null, ' '));
                }).catch((error) => {
                    alert('fileが存在しません');
                });
            }
            // JSONデータ表示用フィールドを取得
            jsonDataFields = document.querySelectorAll('.jsonDataLog');
            console.log(jsonDataFields);

        };

        // JSONデータを表示するエリアを生成
        const cleateDataFileds = () => {
            let jsonDataLogArea = document.querySelector('#jsonDataLogArea');
            let jsonDataLogField = '<pre class="jsonDataLog"></pre>';
            jsonDataLogArea.insertAdjacentHTML('afterbegin', jsonDataLogField);
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
