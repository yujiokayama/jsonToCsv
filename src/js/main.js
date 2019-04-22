import { DatePicker } from './module/datepicker';
import { LoadingAnimation } from './module/loader';
import { DataFields } from './module/datafileds';

const jsonToCsv = (() => {
    document.addEventListener(
        'DOMContentLoaded',
        () => {

            const fileNameDate = document.querySelector('#fileNameDate');
            const getJsonDataBtn = document.querySelector('#getJsonDataAll');
            const getCsvFileBtn = document.querySelector('#getCsvFileAll');
            let jsonFileName;

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

            // 取得するファイルパス
            const getFilePath = count => {
                const filePath = [];
                for (let i = 0; i < count; i++) {
                    filePath.push(`/lib/json/${jsonFileName}_${1 + i}.json`);
                }
                return filePath;
            };

            // 表示用フィールドを作成
            const createFields = count => {
                // JSONデータ表示用フィールドを生成
                jsonDataFields.cleateDataFileds(count);
            };

            // JSONデータを取得＆出力
            const getFileData = async () => {
                const filePath = getFilePath(8);
                const dataFields = jsonDataFields.getDataFileds();
                // 取得
                const getJson = await filePath.map(file => {
                    return fetch(file).then(data => data.json().then(json => JSON.stringify(json, null, ' ')));
                });
                // 出力
                // for (let i = 0; i < dataFields.length; i++) {
                //     dataFields[i].innerHTML = await getJson[i];
                // }
                console.log(await getJson);
                return await getJson;
            };

            // CSVダウンロード
            const handleDownload = (content) => {
                const bom = new Uint8Array([0xEF, 0xBB, 0xBF]);
                const blob = new Blob([bom, content], { "type": "text/csv" });

                if (window.navigator.msSaveBlob) {
                    window.navigator.msSaveBlob(blob, "test.csv");
                    // msSaveOrOpenBlobの場合はファイルを保存せずに開ける
                    window.navigator.msSaveOrOpenBlob(blob, "test.csv");
                } else {
                    document.getElementById('getCsvFileAll').href = window.URL.createObjectURL(blob);
                }
            }

            const getJsonFile = async () => {
                // loading Start
                await new Promise(resolve => {
                    nowLoading.loadStart();
                    // JSONデータ表示用フィールドを一旦削除
                    jsonDataFields.removeDataFileds();
                    setTimeout(() => {
                        resolve();
                    }, 0);
                });
                // getJsonFile
                await new Promise(resolve => {
                    // JSONデータ表示用フィールドを作成
                    createFields(8);
                    // JSONデータ表示用フィールドにデータを反映
                    console.log(getFileData());
                    resolve();
                });
                // loading End
                await new Promise(resolve => {
                    nowLoading.loadEnd();
                    resolve();
                });
            };
            fileNameDate.addEventListener(
                'change',
                () => {
                    jsonFileName = fileNameDate.value.split('-').join('');
                },
                false
            );
            getJsonDataBtn.addEventListener('click', () => {
                getJsonFile();
            });
            getCsvFileBtn.addEventListener('click', () => {
                handleDownload('hoge');
            });
        },
        false
    );
})();
