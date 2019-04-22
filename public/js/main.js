/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_datepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/datepicker */ "./src/js/module/datepicker.js");
/* harmony import */ var _module_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/loader */ "./src/js/module/loader.js");
/* harmony import */ var _module_datafileds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/datafileds */ "./src/js/module/datafileds.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var jsonToCsv = function () {
  document.addEventListener('DOMContentLoaded', function () {
    var fileNameDate = document.querySelector('#fileNameDate'),
        getJsonDataBtn = document.querySelector('#getJsonData'),
        getCsvFileBtn = document.querySelector('#getCsvFile'),
        jsonFileName; // DatePicker classをインスタンス化

    var datePicker = new _module_datepicker__WEBPACK_IMPORTED_MODULE_0__["DatePicker"](); // Loading classをインスタンス化

    var nowLoading = new _module_loader__WEBPACK_IMPORTED_MODULE_1__["LoadingAnimation"](); // DataFields classをインスタンス化

    var jsonDataFields = new _module_datafileds__WEBPACK_IMPORTED_MODULE_2__["DataFields"](); // デフォルトの日付は当日

    jsonFileName = fileNameDate.value = datePicker.ymd; // 取得できる日付を当日までにする

    fileNameDate.setAttribute('max', jsonFileName); // 取得するファイルのパス

    var getFilePath = function getFilePath(count) {
      var filePath = [];

      for (var i = 0; i < count; i++) {
        filePath.push("/lib/json/".concat(jsonFileName, "_").concat(1 + i, ".json"));
      }

      return filePath;
    }; // 表示様フィールドを作成


    var createFields = function createFields(count) {
      // JSONデータ表示用フィールドを生成
      jsonDataFields.cleateDataFileds(count);
    }; //   const getFileData = () => {
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


    var getFileData =
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var filePath, fileData;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                filePath = getFilePath(8);
                _context.next = 3;
                return filePath.map(function (data) {
                  return fetch(data).then(function (response) {
                    response.json().then(function (json) {
                      JSON.stringify(json, null, ' ');
                    });
                  });
                });

              case 3:
                fileData = _context.sent;
                return _context.abrupt("return", fileData);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function getFileData() {
        return _ref.apply(this, arguments);
      };
    }();

    var getJsonFile =
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return new Promise(function (resolve) {
                  nowLoading.loadStart(); // JSONデータ表示用フィールドを一旦削除

                  jsonDataFields.removeDataFileds();
                  setTimeout(function () {
                    resolve();
                  }, 4000);
                });

              case 2:
                _context2.next = 4;
                return new Promise(function (resolve) {
                  // JSONデータ表示用フィールドを作成
                  createFields(8); // JSONデータ表示用フィールドにデータを反映

                  console.log(getFileData());
                  resolve();
                });

              case 4:
                _context2.next = 6;
                return new Promise(function (resolve) {
                  nowLoading.loadEnd();
                  resolve();
                });

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function getJsonFile() {
        return _ref2.apply(this, arguments);
      };
    }(); // カレンダーが変更させれたら


    fileNameDate.addEventListener('change', function () {
      jsonFileName = fileNameDate.value.split('-').join('');
    }, false); // ボタンをクリックしたら

    getJsonDataBtn.addEventListener('click', function () {
      getJsonFile();
    });
  }, false);
}();

/***/ }),

/***/ "./src/js/module/datafileds.js":
/*!*************************************!*\
  !*** ./src/js/module/datafileds.js ***!
  \*************************************/
/*! exports provided: DataFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFields", function() { return DataFields; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
/////////////////////////////////////////////////////////////////////////
DataFields
/////////////////////////////////////////////////////////////////////////
*/
var DataFields =
/*#__PURE__*/
function () {
  /*
  //////////////////////////////
  properties
  //////////////////////////////
  */
  function DataFields() {
    _classCallCheck(this, DataFields);

    this.dataFieldsArea = document.querySelector('#DataLogArea');
    this.dataFields = '<pre class="dataLog"></pre>';
  }
  /*
  //////////////////////////////
  methods
  //////////////////////////////
  */
  // 表示エリアを生成


  _createClass(DataFields, [{
    key: "cleateDataFileds",
    value: function cleateDataFileds(fileCount) {
      for (var i = 0; i < fileCount; i++) {
        this.dataFieldsArea.insertAdjacentHTML('afterbegin', this.dataFields);
      }
    } // 表示エリアを取得

  }, {
    key: "getDataFileds",
    value: function getDataFileds() {
      var dataLogs = document.querySelectorAll('.dataLog');
      return dataLogs;
    } // 表示エリアを削除

  }, {
    key: "removeDataFileds",
    value: function removeDataFileds() {
      var dataLogs = document.querySelectorAll('.dataLog'); // すでに表示用エリアがある場合

      if (document.querySelector('.dataLog') != null) {
        dataLogs.forEach(function (e) {
          e.remove();
        });
      }
    }
  }]);

  return DataFields;
}();

/***/ }),

/***/ "./src/js/module/datepicker.js":
/*!*************************************!*\
  !*** ./src/js/module/datepicker.js ***!
  \*************************************/
/*! exports provided: DatePicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePicker", function() { return DatePicker; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
  this.ymd = "".concat(this.year, "-").concat(this.month, "-").concat(this.day);
}
/*
//////////////////////////////
methods
//////////////////////////////
*/
;

/***/ }),

/***/ "./src/js/module/loader.js":
/*!*********************************!*\
  !*** ./src/js/module/loader.js ***!
  \*********************************/
/*! exports provided: LoadingAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingAnimation", function() { return LoadingAnimation; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// loadingAnimation
var LoadingAnimation =
/*#__PURE__*/
function () {
  // properties
  function LoadingAnimation() {
    _classCallCheck(this, LoadingAnimation);

    this.loadingIcon = document.querySelector('.loadingIcon');
  } // method


  _createClass(LoadingAnimation, [{
    key: "loadStart",
    value: function loadStart() {
      this.loadingIcon.style.display = 'block';
    }
  }, {
    key: "loadEnd",
    value: function loadEnd() {
      this.loadingIcon.style.display = 'none';
    }
  }]);

  return LoadingAnimation;
}();

/***/ })

/******/ });
//# sourceMappingURL=main.js.map