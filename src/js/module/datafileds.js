/*
/////////////////////////////////////////////////////////////////////////
DataFields
/////////////////////////////////////////////////////////////////////////
*/
export class DataFields {
  /*
  //////////////////////////////
  properties
  //////////////////////////////
  */
  constructor() {}
  /*
  //////////////////////////////
  methods
  //////////////////////////////
  */
  // 表示エリアを生成
  static cleateDataFileds(fileCount) {
    const dataFieldsArea = document.querySelector('#DataLogArea');
    const dataFields = '<pre class="dataLog"></pre>';
    for (let i = 0; i < fileCount; i++) {
      dataFieldsArea.insertAdjacentHTML('afterbegin', dataFields);
    }
  }
  // 表示エリアを取得
  static getDataFileds() {
    const dataLogs = document.querySelectorAll('.dataLog');
    return dataLogs;
  }
  // 表示エリアを削除
  static removeDataFileds() {
    const dataLogs = document.querySelectorAll('.dataLog');
    // すでに表示用エリアがある場合
    if (document.querySelector('.dataLog') != null) {
      dataLogs.forEach(e => {
        e.remove();
      });
    }
  }
}
