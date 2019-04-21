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
  constructor() {
    this.dataFieldsArea = document.querySelector('#DataLogArea');
    this.dataFields = '<pre class="dataLog"></pre>';
  }
  /*
  //////////////////////////////
  methods
  //////////////////////////////
  */
  // 表示エリアを生成
  cleateDataFileds(fileCount) {
    for (let i = 0; i < fileCount; i++) {
      this.dataFieldsArea.insertAdjacentHTML('afterbegin', this.dataFields);
    }
  }
  // 表示エリアを取得
  getDataFileds() {
    const dataLogs = document.querySelectorAll('.dataLog');
    return dataLogs;
  }
  // 表示エリアを削除
  removeDataFileds() {
    const dataLogs = document.querySelectorAll('.dataLog');
    // すでに表示用エリアがある場合
    if (document.querySelector('.dataLog') != null) {
      dataLogs.forEach(e => {
        e.remove();
      });
    }
  }
}
