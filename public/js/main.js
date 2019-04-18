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
/* harmony import */ var _module_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/loader */ "./src/js/module/loader.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



(function () {
  // file APIが使えるかチェック
  if (window.File) {
    // File APIに関する処理を記述
    console.log('File APIが実装されてます。');
  } else {
    console.log('本ブラウザではFile APIが使えません');
  }
})(); // カレンダーのvalueを取得


var jsonToCsv = function () {
  document.addEventListener('DOMContentLoaded', function () {
    //今日の日時を表示
    var date = new Date(),
        year = date.getFullYear(),
        month = ('0' + (date.getMonth() + 1)).slice(-2),
        day = ('0' + date.getDate()).slice(-2),
        ymd = "".concat(year, "-").concat(month, "-").concat(day),
        fileNameDate = document.querySelector('#fileNameDate'),
        getJsonDataBtn = document.querySelector('#getJsonData'),
        getCsvFileBtn = document.querySelector('#getCsvFile'),
        jsonFileName; // loading classをインスタンス化

    var nowLoading = new _module_loader__WEBPACK_IMPORTED_MODULE_0__["LoadingAnimation"](); // デフォルトのファイル名（日付）

    jsonFileName = fileNameDate.value = ymd; // 取得できる日付を当日までとする

    fileNameDate.setAttribute('max', jsonFileName); // カレンダーが変更させれたら

    fileNameDate.addEventListener('change', function () {
      if (this.value != '') {
        jsonFileName = fileNameDate.value.split('-').join('');
      }
    }, false); // _1から_8までのjsonファイルを取得する(デフォルトは8)

    var getData = function getData() {
      var fileCount = 8; //default [8]

      var filePath = '/lib/json/' + jsonFileName;

      for (var i = 0; i < fileCount; i++) {
        fetch("".concat(filePath, "_").concat(1 + i, ".json")).then(function (response) {
          return response.json();
        }).then(function (json) {
          // jsonデータを各フィールドに表示
          document.querySelectorAll('.jsonDataLog').innerHTML += JSON.stringify(json, null, ' ');
        })["catch"](function (error) {
          alert('fileが存在しません');
        });
      }
    }; // JSONファイル取得メソッド


    var getJsonFile =
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return new Promise(function (resolve) {
                  setTimeout(function () {
                    nowLoading.loadStart();
                    resolve();
                  }, 0);
                });

              case 2:
                _context.next = 4;
                return new Promise(function (resolve) {
                  setTimeout(function () {
                    getData();
                    resolve();
                  }, 4000);
                });

              case 4:
                _context.next = 6;
                return new Promise(function (resolve) {
                  setTimeout(function () {
                    nowLoading.loadEnd();
                    resolve();
                  }, 0);
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function getJsonFile() {
        return _ref.apply(this, arguments);
      };
    }(); // ボタンをクリックしたら


    getJsonDataBtn.addEventListener('click', function () {
      getJsonFile();
    });
  }, false);
}();

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