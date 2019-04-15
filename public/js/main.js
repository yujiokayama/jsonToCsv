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
/*! no static exports found */
/***/ (function(module, exports) {

// file APIが使えるかチェック
if (window.File) {
  // File APIに関する処理を記述
  console.log('File APIが実装されてます。');
} else {
  console.log('本ブラウザではFile APIが使えません');
} // カレンダーのvalueを取得


var jsonToCsv = function () {
  document.addEventListener('DOMContentLoaded', function () {
    //今日の日時を表示
    var date = new Date(),
        year = date.getFullYear(),
        month = ('0' + (date.getMonth() + 1)).slice(-2),
        day = ('0' + date.getDate()).slice(-2),
        ymd = "".concat(year, "-").concat(month, "-").concat(day),
        fileNameDate = document.getElementById('fileNameDate'),
        getJsonDataBtn = document.querySelector('#getJsonData'),
        jsonFileName; // デフォルトのファイル名（日付）

    jsonFileName = fileNameDate.value = ymd; // 取得できる日付を当日までとする

    fileNameDate.setAttribute('max', jsonFileName); // カレンダーが変更させれたら

    fileNameDate.addEventListener('change', function () {
      if (this.value != '') {
        jsonFileName = fileNameDate.value.split('-').join('') + '.json'; // dlボタンを表示

        getJsonDataBtn.css.display = 'block';
      } else {
        // dlボタンを非表示
        getJsonDataBtn.css.display = 'none';
      }
    }, false); // ファイルをダウンロードする

    var bom = new Uint8Array([0xEF, 0xBB, 0xBF]),
        btn = document.getElementById('getCsvFile');
    btn.addEventListener('click', function () {
      var blob = new Blob(['csv'], {
        'type': 'text/csv'
      });
      btn.href = window.URL.createObjectURL(blob);
    }); // JSONファイルの取得

    var getJsonFiles = function getJsonFiles() {
      // ボタンをクリックしたとき
      getJsonDataBtn.addEventListener('click', function () {
        var url = '/jsonToCsv/lib/json/' + jsonFileName;

        if (fileNameDate != '') {
          fetch(url).then(function (response) {
            return response.json();
          }).then(function (json) {
            document.querySelector('#jsonDataLog').innerHTML = JSON.stringify(json, null, ' ');
          })["catch"](function (error) {
            alert('fileが存在しません');
          });
        }
      }, false);
    };

    getJsonFiles();
  }, false);
}();

/***/ })

/******/ });
//# sourceMappingURL=main.js.map