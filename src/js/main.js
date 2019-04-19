import { DatePicker } from './module/datepicker';
import { LoadingAnimation } from './module/loader';
import { DataFields } from './module/datafileds';

const jsonToCsv = (() => {
    document.addEventListener('DOMContentLoaded', () => {

        let fileNameDate = document.querySelector('#fileNameDate'),
            getJsonDataBtn = document.querySelector('#getJsonData'),
            getCsvFileBtn = document.querySelector('#getCsvFile'),
            jsonFileName;

        // DatePicker classをインスタンス化
        const datePicker = new DatePicker();
        // Loading classをインスタンス化
        const nowLoading = new LoadingAnimation();
        // DataFields classをインスタンス化
        const jsonDataFields = new DataFields();

        // デフォルトの日付は当日
        jsonFileName = fileNameDate.value = datePicker.ymd;
        // 取得できる日付を当日までにする
        fileNameDate.setAttribute('max', jsonFileName);

        // カレンダーが変更させれたら
        fileNameDate.addEventListener('change', () => {
            jsonFileName = fileNameDate.value.split('-').join('');
        }, false);


        // 取得するファイルのパス
        const getFilePath = (count) => {
            let filePath = [];
            for (let i = 0; i < count; i++) {
                filePath.push(`/lib/json/${jsonFileName}_${1 + i}.json`);
            }
            return filePath;
        };

        // JSONを読み込む
        const getFileData = async () => {
            // 取得したfilepath
            let filePathResults = getFilePath(8);
            console.log(filePathResults);
            console.log(await Promise.all(filePathResults.map(fetchFile)));
            // fetch(filePath).then((response) => {
            //     if (response.ok) {
            //         return response.json();
            //     }
            //     throw new Error('JSONファイルを取得できませんでした。');
            // }).then((json) => {

            // }).catch((error) => {
            //     console.error(error);
            // });

        };

        const fetchFile = (url) => {
            return fetch(url);
        }

        // ボタンをクリックしたとき
        async function load() {
            // ファイルを読み込む
            const data = await fetch('sample.json');
            // JSONとして解析
            const obj = await data.json();
            console.log(obj); // 結果: {name: "別所分校", classes: Array(2)}
            // テキストを出力
            document.querySelector('#log').innerHTML = JSON.stringify(obj, null, '  ');
        }
        load();




        // JSONファイル取得メソッド
        const getJsonFile = async () => {
            // loading Start
            await new Promise(resolve => {
                nowLoading.loadStart();
                resolve();
            });
            // getJsonFile
            await new Promise(resolve => {
                getFilePath(8);
                // JSONデータ表示用フィールドを一旦削除
                jsonDataFields.removeDataFileds();
                // JSONデータ表示用フィールドを生成
                jsonDataFields.cleateDataFileds(8);
                getFileData();
                resolve();
            });
            // loading End
            await new Promise(resolve => {
                nowLoading.loadEnd();
                resolve();
            });
        };

        // ボタンをクリックしたら
        getJsonDataBtn.addEventListener('click', () => {
            getJsonFile();
        });
    }, false);
})();
