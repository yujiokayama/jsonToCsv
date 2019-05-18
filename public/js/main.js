/******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {}
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    ); // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function(exports) {
    /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/ Object.defineProperty(exports, '__esModule', { value: true });
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
    value,
    mode
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === 'object' &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/ if (mode & 2 && typeof value != 'string')
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function(key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module['default'];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, 'a', getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = '/'; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__(
    (__webpack_require__.s = './src/js/main.js')
  );
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ './src/js/main.js':
      /*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _module_datepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./module/datepicker */ './src/js/module/datepicker.js'
        );
        /* harmony import */ var _module_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./module/loader */ './src/js/module/loader.js'
        );
        /* harmony import */ var _module_datafileds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./module/datafileds */ './src/js/module/datafileds.js'
        );
        function asyncGeneratorStep(
          gen,
          resolve,
          reject,
          _next,
          _throw,
          key,
          arg
        ) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            Promise.resolve(value).then(_next, _throw);
          }
        }

        function _asyncToGenerator(fn) {
          return function() {
            var self = this,
              args = arguments;
            return new Promise(function(resolve, reject) {
              var gen = fn.apply(self, args);
              function _next(value) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  'next',
                  value
                );
              }
              function _throw(err) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  'throw',
                  err
                );
              }
              _next(undefined);
            });
          };
        }

        var jsonToCsv = (function() {
          document.addEventListener(
            'DOMContentLoaded',
            function() {
              var datePicker = new _module_datepicker__WEBPACK_IMPORTED_MODULE_0__[
                'DatePicker'
              ]();
              var nowLoading = new _module_loader__WEBPACK_IMPORTED_MODULE_1__[
                'LoadingAnimation'
              ]();
              var fileNameDate = document.querySelector('#datePicker');
              var getfileNumSelect = document.querySelector('#fileNum');
              var getJsonDataAllBtn = document.querySelector('#getJsonDataAll');
              var getCsvFileBtn = document.querySelector('#getCsvFileAll');
              var getDate = datePicker.ymd;
              var fileNum = 1;
              var fileTitle = document.querySelector('#fileName');
              var fileCheck = false;
              /*
    //////////////////////////////////////////
    初期設定
    //////////////////////////////////////////
    */
              // デフォルトは当日

              fileNameDate.setAttribute('value', getDate); // 取得できる日付を当日までにする

              fileNameDate.setAttribute('max', getDate); // 表示用フィールド

              createFields(1);
              fileTitle.textContent = 'Unselected'; // ダウンロードをクリックしたとき

              getCsvFileBtn.addEventListener(
                'click',
                function() {
                  getJson(
                    '/tool/jsontocsv/lib/json/'
                      .concat(getDate, '_')
                      .concat(fileNum, '.json')
                  )
                    .then(function(json) {
                      return JSON.parse(json);
                    })
                    .then(function(data) {
                      exportCSV(
                        data,
                        ',',
                        ''.concat(getDate, '_').concat(fileNum)
                      );
                    });
                },
                false
              ); // 「JSONファイルを取得」をクリックしたとき

              getJsonDataAllBtn.addEventListener(
                'click',
                function() {
                  // 日付を取得するファイルの形式に変更
                  getDate = fileNameDate.value.split('-').join('');
                  var filePath = getFilePath(getDate, fileNum);
                  getJson(filePath)
                    .then(function(json) {
                      nowLoading.loadStart();
                      return json;
                    })
                    .then(function(data) {
                      reflectFields(data);
                      fileTitle.textContent = ''
                        .concat(getDate, '_')
                        .concat(fileNum, '.json');
                      fileCheck = true;

                      if (fileCheck == true) {
                        getCsvFileBtn.disabled = '';
                      }

                      nowLoading.loadEnd();
                    })
                    ['catch'](function() {
                      nowLoading.loadEnd();
                      fileCheck = false;

                      if (fileCheck == false) {
                        getCsvFileBtn.disabled = true;
                      }

                      reflectFields('');
                      fileTitle.textContent = 'not found';
                      alert(
                        ''
                          .concat(getDate, '_')
                          .concat(
                            fileNum,
                            '.json\u304C\u53D6\u5F97\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F'
                          )
                      );
                    });
                },
                false
              ); // プルダウン変更イベントを監視

              getfileNumSelect.addEventListener('change', function() {
                var value = getfileNumSelect.value;
                fileNum = value;
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

          var createFields = function createFields(count) {
            // JSONデータ表示用フィールドを生成
            _module_datafileds__WEBPACK_IMPORTED_MODULE_2__[
              'DataFields'
            ].cleateDataFileds(count);
          };
          /*
  //////////////////////////////////////////
  JSONデータをフィールドに反映
  //////////////////////////////////////////
  */

          var reflectFields = function reflectFields(data) {
            var dataFields = document.querySelectorAll('.dataLog');

            for (var i = 0; i < dataFields.length; i++) {
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

          var getFilePath = function getFilePath(date, num) {
            var getDate = date;
            return '/tool/jsontocsv/lib/json/'
              .concat(getDate, '_')
              .concat(num, '.json');
          };
          /*
  //////////////////////////////////////////
  JSONを取得
  //////////////////////////////////////////
  */

          var getJson =
            /*#__PURE__*/
            (function() {
              var _ref = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee(filepath) {
                  var data, obj;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch ((_context.prev = _context.next)) {
                        case 0:
                          _context.next = 2;
                          return fetch(filepath);

                        case 2:
                          data = _context.sent;
                          _context.next = 5;
                          return data.json();

                        case 5:
                          obj = _context.sent;
                          // 特定のキーと値を削除
                          delete obj.created;
                          delete obj.user; // 一番最初の配列要素を削除

                          obj.recommended.splice(0, 1); // JSONデータを最終整形

                          return _context.abrupt(
                            'return',
                            JSON.stringify(obj.recommended, null, ' ')
                          );

                        case 10:
                        case 'end':
                          return _context.stop();
                      }
                    }
                  }, _callee);
                })
              );

              return function getJson(_x) {
                return _ref.apply(this, arguments);
              };
            })();
          /*
  //////////////////////////////////////////
  JSONをCSV形式に変換
  //////////////////////////////////////////
  */

          var jsonToCsv = function jsonToCsv(json, delimiter) {
            var header = Object.keys(json[0]).join(delimiter) + '\n';
            var body = json
              .map(function(d) {
                return Object.keys(d)
                  .map(function(key) {
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

          var exportCSV = function exportCSV(items, delimiter, filename) {
            //文字列に変換する
            var csv = jsonToCsv(items, delimiter); //拡張子

            var extention = delimiter == ',' ? 'csv' : 'tsv'; //出力ファイル名

            var exportedFilenmae = (filename || 'export') + '.' + extention; //BLOBに変換

            var blob = new Blob([csv], {
              type: 'text/csv; charset=utf-8;'
            });

            if (navigator.msSaveBlob) {
              // for IE 10+
              navigator.msSaveBlob(blob, exportedFilenmae);
            } else {
              //anchorを生成してclickイベントを呼び出す。
              var link = document.createElement('a');

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

        /***/
      },

    /***/ './src/js/module/datafileds.js':
      /*!*************************************!*\
  !*** ./src/js/module/datafileds.js ***!
  \*************************************/
      /*! exports provided: DataFields */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DataFields',
          function() {
            return DataFields;
          }
        );
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        /*
/////////////////////////////////////////////////////////////////////////
DataFields
/////////////////////////////////////////////////////////////////////////
*/
        var DataFields =
          /*#__PURE__*/
          (function() {
            /*
  //////////////////////////////
  properties
  //////////////////////////////
  */
            function DataFields() {
              _classCallCheck(this, DataFields);
            }
            /*
  //////////////////////////////
  methods
  //////////////////////////////
  */
            // 表示エリアを生成

            _createClass(DataFields, null, [
              {
                key: 'cleateDataFileds',
                value: function cleateDataFileds(fileCount) {
                  var dataFieldsArea = document.querySelector('#DataLogArea');
                  var dataFields = '<pre class="dataLog"></pre>';

                  for (var i = 0; i < fileCount; i++) {
                    dataFieldsArea.insertAdjacentHTML('afterbegin', dataFields);
                  }
                } // 表示エリアを取得
              },
              {
                key: 'getDataFileds',
                value: function getDataFileds() {
                  var dataLogs = document.querySelectorAll('.dataLog');
                  return dataLogs;
                } // 表示エリアを削除
              },
              {
                key: 'removeDataFileds',
                value: function removeDataFileds() {
                  var dataLogs = document.querySelectorAll('.dataLog'); // すでに表示用エリアがある場合

                  if (document.querySelector('.dataLog') != null) {
                    dataLogs.forEach(function(e) {
                      e.remove();
                    });
                  }
                }
              }
            ]);

            return DataFields;
          })();

        /***/
      },

    /***/ './src/js/module/datepicker.js':
      /*!*************************************!*\
  !*** ./src/js/module/datepicker.js ***!
  \*************************************/
      /*! exports provided: DatePicker */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DatePicker',
          function() {
            return DatePicker;
          }
        );
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
          }
        }

        /*
/////////////////////////////////////////////////////////////////////////
DatePicker
/////////////////////////////////////////////////////////////////////////
*/
        var DatePicker =
          /*
//////////////////////////////
properties
//////////////////////////////
*/
          function DatePicker() {
            _classCallCheck(this, DatePicker);

            this.date = new Date();
            this.year = this.date.getFullYear();
            this.month = ('0' + (this.date.getMonth() + 1)).slice(-2);
            this.day = ('0' + this.date.getDate()).slice(-2);
            this.ymd = ''
              .concat(this.year, '-')
              .concat(this.month, '-')
              .concat(this.day);
          };
        /*
//////////////////////////////
methods
//////////////////////////////
*/

        /***/
      },

    /***/ './src/js/module/loader.js':
      /*!*********************************!*\
  !*** ./src/js/module/loader.js ***!
  \*********************************/
      /*! exports provided: LoadingAnimation */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'LoadingAnimation',
          function() {
            return LoadingAnimation;
          }
        );
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        // loadingAnimation
        var LoadingAnimation =
          /*#__PURE__*/
          (function() {
            // properties
            function LoadingAnimation() {
              _classCallCheck(this, LoadingAnimation);

              this.loadingIcon = document.querySelector('.loadingIcon');
            } // method

            _createClass(LoadingAnimation, [
              {
                key: 'loadStart',
                value: function loadStart() {
                  this.loadingIcon.style.display = 'block';
                }
              },
              {
                key: 'loadEnd',
                value: function loadEnd() {
                  this.loadingIcon.style.display = 'none';
                }
              }
            ]);

            return LoadingAnimation;
          })();

        /***/
      }

    /******/
  }
);
//# sourceMappingURL=main.js.map
