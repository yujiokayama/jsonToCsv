import { DatePicker } from './module/datepicker';
import { LoadingAnimation } from './module/loader';
import { DataFields } from './module/datafileds';

const jsonToCsv = (() => {
  document.addEventListener(
    'DOMContentLoaded',
    () => {
      const datePicker = new DatePicker();
      const nowLoading = new LoadingAnimation();
      const fileNameDate = document.querySelector('#datePicker');
      const getfileNumSelect = document.querySelector('#fileNum');
      const getJsonDataAllBtn = document.querySelector('#getJsonDataAll');
      const getCsvFileBtn = document.querySelector('#getCsvFileAll');
      let getDate = datePicker.ymd;
      let fileNum = 1;
      let fileTitle = document.querySelector('#fileName');
      let fileCheck = false;

      /*
    //////////////////////////////////////////
    初期設定
    //////////////////////////////////////////
    */
      // デフォルトは当日
      fileNameDate.setAttribute('value', getDate);
      // 取得できる日付を当日までにする
      fileNameDate.setAttribute('max', getDate);
      // 表示用フィールド
      createFields(1);
      fileTitle.textContent = 'Unselected';
      getJsonDataAllBtn.disabled = true;

      // ダウンロードをクリックしたとき
      getCsvFileBtn.addEventListener(
        'click',
        () => {
          getJson(`/lib/json/${getDate}_${fileNum}.json`)
            .then(json => {
              return JSON.parse(json);
            })
            .then(data => {
              exportCSV(data, ',', `${getDate}_${fileNum}`);
            });
        },
        false
      );

      // 「JSONファイルを取得」をクリックしたとき
      getJsonDataAllBtn.addEventListener(
        'click',
        () => {
          // 日付を取得するファイルの形式に変更
          getDate = fileNameDate.value.split('-').join('');
          const filePath = getFilePath(getDate, fileNum);
          getJson(filePath)
            .then(json => {
              nowLoading.loadStart();
              return json;
            })
            .then(data => {
              reflectFields(data);
              fileTitle.textContent = `${getDate}_${fileNum}.json`;
              fileCheck = true;
              if (fileCheck == true) {
                getCsvFileBtn.disabled = '';
              }
              nowLoading.loadEnd();
            })
            .catch(() => {
              nowLoading.loadEnd();
              fileCheck = false;
              if (fileCheck == false) {
                getCsvFileBtn.disabled = true;
              }
              reflectFields('');
              fileTitle.textContent = 'not found';
              alert(`${getDate}_${fileNum}.jsonが取得できませんでした`);
            });
        },
        false
      );

      // プルダウン変更イベントを監視
      getfileNumSelect.addEventListener('change', () => {
        const value = getfileNumSelect.value;
        fileNum = value;
        getJsonDataAllBtn.disabled = '';

        fileCheck = false;
        if (fileCheck == false) {
          getCsvFileBtn.disabled = true;
        }
      });
    },
    false
  );

  /*
  //////////////////////////////////////////
  表示用フィールドを作成
  //////////////////////////////////////////
  */
  const createFields = count => {
    // JSONデータ表示用フィールドを生成
    DataFields.cleateDataFileds(count);
  };

  /*
  //////////////////////////////////////////
  JSONデータをフィールドに反映
  //////////////////////////////////////////
  */
  const reflectFields = data => {
    const dataFields = document.querySelectorAll('.dataLog');
    for (let i = 0; i < dataFields.length; i++) {
      dataFields[i].innerHTML = data;
    }
  };

  /*
  //////////////////////////////////////////
  取得するファイルパス
  //////////////////////////////////////////
  */
  // const getFilePaths = (date, count) => {
  //   const getDate = date;
  //   const filePath = [];
  //   for (let i = 0; i < count; i++) {
  //     filePath.push(`/lib/json/${getDate}_${1 + i}.json`);
  //   }
  //   return filePath;
  // };

  const getFilePath = (date, num) => {
    const getDate = date;
    return `/lib/json/${getDate}_${num}.json`;
  };

  /*
  //////////////////////////////////////////
  JSONを取得
  //////////////////////////////////////////
  */
  const getJson = async filepath => {
    // ファイルを読み込む
    const data = await fetch(filepath);
    // JSONとして解析
    const obj = await data.json();
    // 特定のキーと値を削除
    delete obj.created;
    delete obj.user;
    // 一番最初の配列要素を削除
    obj.recommended.splice(0, 1);
    // JSONデータを最終整形
    return JSON.stringify(obj.recommended, null, ' ');
  };

  /*
  //////////////////////////////////////////
  JSONをCSV形式に変換
  //////////////////////////////////////////
  */
  const jsonToCsv = (json, delimiter) => {
    const header = Object.keys(json[0]).join(delimiter) + '\n';
    const body = json
      .map(function (d) {
        return Object.keys(d)
          .map(function (key) {
            return d[key];
          })
          .join(delimiter);
      })
      .join('\n');
    return header + body;
  };

  /*
  //////////////////////////////////////////
  CSVをダウンロード
  //////////////////////////////////////////
  */
  const exportCSV = (items, delimiter, filename) => {
    //文字列に変換する
    const csv = jsonToCsv(items, delimiter);
    //拡張子
    const extention = delimiter == ',' ? 'csv' : 'tsv';
    // bom
    const bom = new Uint8Array([0xEF, 0xBB, 0xBF]);
    //出力ファイル名
    const exportedFilenmae = (filename || 'export') + '.' + extention;
    //BLOBに変換
    const blob = new Blob([bom, csv], { type: 'text/csv; charset=utf-8;' });
    if (navigator.msSaveBlob) {
      // for IE 10+
      navigator.msSaveBlob(blob, exportedFilenmae);
    } else {
      //anchorを生成してclickイベントを呼び出す。
      const link = document.createElement('a');
      if (link.download !== undefined) {
        var url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', exportedFilenmae);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  };

})();
