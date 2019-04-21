import { DatePicker } from './module/datepicker';
import { LoadingAnimation } from './module/loader';
import { DataFields } from './module/datafileds';

const jsonToCsv = (() => {
  document.addEventListener(
    'DOMContentLoaded',
    () => {
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

      // 取得するファイルのパス
      const getFilePath = count => {
        const filePath = [];
        for (let i = 0; i < count; i++) {
          filePath.push(`/lib/json/${jsonFileName}_${1 + i}.json`);
        }
        return filePath;
      };

      // 表示様フィールドを作成
      const createFields = count => {
        // JSONデータ表示用フィールドを生成
        jsonDataFields.cleateDataFileds(count);
      };

      //   const getFileData = () => {
      //     const filePath = getFilePath(8);
      //     const dataFields = jsonDataFields.getDataFileds();

      //     for (let i = 0; i < dataFields.length; i++) {
      //       fetch(filePath[i])
      //         .then(response => {
      //           return response.json();
      //         })
      //         .then(data => {
      //           dataFields[i].innerHTML = JSON.stringify(data, null, ' ');
      //         });
      //     }
      //   };

      const getFileData = async () => {
        const filePath = getFilePath(8);

        const fileData = await filePath.map(data => {
          fetch(data).then(response => {
            response.json().then(json => {
              JSON.stringify(json, null, ' ');
            });
          });
        });
        return fileData;
      };

      const getJsonFile = async () => {
        // loading Start
        await new Promise(resolve => {
          nowLoading.loadStart();
          // JSONデータ表示用フィールドを一旦削除
          jsonDataFields.removeDataFileds();
          setTimeout(() => {
            resolve();
          }, 4000);
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
      // カレンダーが変更させれたら
      fileNameDate.addEventListener(
        'change',
        () => {
          jsonFileName = fileNameDate.value.split('-').join('');
        },
        false
      );
      // ボタンをクリックしたら
      getJsonDataBtn.addEventListener('click', () => {
        getJsonFile();
      });
    },
    false
  );
})();
