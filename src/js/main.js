import { DatePicker } from './module/datepicker';
import { LoadingAnimation } from './module/loader';
import { DataFields } from './module/datafileds';

const jsonToCsv = (() => {
  document.addEventListener('DOMContentLoaded', () => {

    // DatePicker classをインスタンス化
    const datePicker = new DatePicker();
    // Loading classをインスタンス化
    const nowLoading = new LoadingAnimation();

    const fileNameDate = document.querySelector('#datePicker');
    const getJsonDataAllBtn = document.querySelector('#getJsonDataAll');
    const getCsvFileBtn = document.querySelector('#getCsvFileAll');
    const getDate = datePicker.ymd;


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
    createFields(3);

    /*
    //////////////////////////////////////////
    JSONデータをフィールド
    //////////////////////////////////////////
    */



    // デートピッカーを変更したら
    fileNameDate.addEventListener('change', () => {
      const selectDate = fileNameDate.value.split('-').join('');
      getFilePath(selectDate, 3);
    }, false);

    // ダウンロードボタンをクリックしたとき
    getCsvFileBtn.addEventListener('click', () => {
      getJson().then(json => {
        return JSON.parse(json);
      }).then((data) => {
        exportCSV(data, ',', 'test');
      })
    }, false);

    // JSONファイルを一括取得ボタンをクリックしたとき
    getJsonDataAllBtn.addEventListener('click', () => {

    }, false);


  }, false);










  // 表示用フィールドを作成
  const createFields = count => {
    // JSONデータ表示用フィールドを生成
    DataFields.cleateDataFileds(count);
  };

  // 取得するファイルパス
  const getFilePath = (date, count) => {
    const getDate = date;
    const filePath = [];
    for (let i = 0; i < count; i++) {
      filePath.push(`/lib/json/${getDate}_${1 + i}.json`);
    }
    return filePath;
  };

  // JSONを取得
  const getJson = async () => {
    // ファイルを読み込む
    const data = await fetch('./sample.json');
    // JSONとして解析
    const obj = await data.json();
    // 特定のキーと値を削除
    delete obj.created;
    delete obj.user;
    // 一番最初の配列要素を削除
    obj.recommended.splice(0, 1);
    // JSONデータを最終整形
    return JSON.stringify(obj.recommended, null, ' ');
  }

  // JSONをCSV形式に変換
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
  }

  // CSVをダウンロード
  const exportCSV = (items, delimiter, filename) => {
    //文字列に変換する
    const csv = jsonToCsv(items, delimiter);
    //拡張子
    const extention = delimiter == ',' ? 'csv' : 'tsv';
    //出力ファイル名
    const exportedFilenmae = (filename || 'export') + '.' + extention;
    //BLOBに変換
    const blob = new Blob([csv], { type: 'text/csv; charset=utf-8;' });
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
  }










})();
