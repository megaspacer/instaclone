(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    console.log('123');
};

},{}],2:[function(require,module,exports){
'use strict';

var _addPhoto = require('./addPhoto');

var _addPhoto2 = _interopRequireDefault(_addPhoto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addBtn = document.querySelector('#add-photo');

addBtn.addEventListener('click', _addPhoto2.default);

},{"./addPhoto":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYWRkUGhvdG8uanMiLCJzcmMvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztrQkNBZSxZQUFNO0FBQ2pCLFlBQVEsR0FBUixDQUFZLEtBQVo7QUFDSCxDOzs7OztBQ0ZEOzs7Ozs7QUFDQSxJQUFNLFNBQVMsU0FBUyxhQUFULENBQXVCLFlBQXZCLENBQWY7O0FBRUEsT0FBTyxnQkFBUCxDQUF3QixPQUF4QiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9cmV0dXJuIGV9KSgpIiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJzEyMycpO1xyXG59O1xyXG4iLCJpbXBvcnQgYWRkUGhvdG8gZnJvbSAnLi9hZGRQaG90byc7XHJcbmNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtcGhvdG8nKTtcclxuXHJcbmFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFBob3RvKTtcclxuIl19

//# sourceMappingURL=script.js.map