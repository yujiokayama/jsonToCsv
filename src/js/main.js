import { DatePicker } from './module/datepicker';
import { LoadingAnimation } from './module/loader';
import { DataFields } from './module/datafileds';

const jsonToCsv = (() => {
    document.addEventListener(
        'DOMContentLoaded',
        () => {

            // DatePicker classをインスタンス化
            const datePicker = new DatePicker();
            // Loading classをインスタンス化
            const nowLoading = new LoadingAnimation();
            // DataFields classをインスタンス化
            const jsonDataFields = new DataFields();

            const fileNameDate = document.querySelector('#fileNameDate');
            const getJsonDataBtn = document.querySelector('#getJsonDataAll');
            const getCsvFileBtn = document.querySelector('#getCsvFileAll');
            let getDate = fileNameDate.value = datePicker.ymd;


            // 取得できる日付を当日までにする
            fileNameDate.setAttribute('max', getDate);

            // 取得するファイルパス
            const getFilePath = count => {
                const filePath = [];
                for (let i = 0; i < count; i++) {
                    filePath.push(`/lib/json/${getDate}_${1 + i}.json`);
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
                for (let i = 0; i < dataFields.length; i++) {
                    dataFields[i].innerHTML = await getJson[i];
                }
            };

            // フィールドのコンテンツを取得
            const getFieldContents = () => {
                const dataFields = jsonDataFields.getDataFileds();
                const dataContents = [];
                // 各フィールドのコンテンツを取得する
                for (let field of dataFields) {
                    dataContents.push(field.innerHTML);
                }
                // 不要なデータを削除
                const data1 = dataContents[0];
                console.log(data1);

                return dataContents;
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
                    getFileData();
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
                    getDate = fileNameDate.value.split('-').join('');
                },
                false
            );
            getJsonDataBtn.addEventListener('click', () => {
                getJsonFile();
            });
            getCsvFileBtn.addEventListener('click', () => {
                // コンテンツを取得
                getFieldContents();
            });
        },
        false
    );
})();
