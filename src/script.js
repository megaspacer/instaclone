(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

var _modal = require('./modal');

var _modal2 = _interopRequireDefault(_modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var openModalBtn = document.querySelector('#open-modal');
var closeModalBtn = document.querySelector('#reset');

var modal = new _modal2.default();

openModalBtn.addEventListener('click', modal.openModal);
closeModalBtn.addEventListener('click', modal.closeModal);

},{"./modal":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var modalWindow = document.querySelector('.modal');

var Modal = function () {
    function Modal() {
        _classCallCheck(this, Modal);
    }

    _createClass(Modal, [{
        key: 'openModal',
        value: function openModal() {
            modalWindow.classList.remove('modal--close');
            modalWindow.classList.add('modal--open');
        }
    }, {
        key: 'closeModal',
        value: function closeModal() {
            modalWindow.classList.remove('modal--open');
            modalWindow.classList.add('modal--close');
        }
    }]);

    return Modal;
}();

exports.default = Modal;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbi5qcyIsInNyYy9qcy9tb2RhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7OztBQUNBLElBQU0sZUFBZSxTQUFTLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBckI7QUFDQSxJQUFNLGdCQUFnQixTQUFTLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBdEI7O0FBRUEsSUFBTSxRQUFRLHFCQUFkOztBQUVBLGFBQWEsZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUMsTUFBTSxTQUE3QztBQUNBLGNBQWMsZ0JBQWQsQ0FBK0IsT0FBL0IsRUFBd0MsTUFBTSxVQUE5Qzs7Ozs7Ozs7Ozs7OztBQ1BBLElBQU0sY0FBYyxTQUFTLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBcEI7O0lBRXFCLEs7Ozs7Ozs7b0NBQ0w7QUFDUix3QkFBWSxTQUFaLENBQXNCLE1BQXRCLENBQTZCLGNBQTdCO0FBQ0Esd0JBQVksU0FBWixDQUFzQixHQUF0QixDQUEwQixhQUExQjtBQUNIOzs7cUNBQ1k7QUFDVCx3QkFBWSxTQUFaLENBQXNCLE1BQXRCLENBQTZCLGFBQTdCO0FBQ0Esd0JBQVksU0FBWixDQUFzQixHQUF0QixDQUEwQixjQUExQjtBQUNIOzs7Ozs7a0JBUmdCLEsiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfXJldHVybiBlfSkoKSIsImltcG9ydCBNb2RhbCBmcm9tICcuL21vZGFsJztcclxuY29uc3Qgb3Blbk1vZGFsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29wZW4tbW9kYWwnKTtcclxuY29uc3QgY2xvc2VNb2RhbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNldCcpO1xyXG5cclxuY29uc3QgbW9kYWwgPSBuZXcgTW9kYWwoKTtcclxuXHJcbm9wZW5Nb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1vZGFsLm9wZW5Nb2RhbCk7XHJcbmNsb3NlTW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtb2RhbC5jbG9zZU1vZGFsKTtcclxuIiwiY29uc3QgbW9kYWxXaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsIHtcclxuICAgIG9wZW5Nb2RhbCgpIHtcclxuICAgICAgICBtb2RhbFdpbmRvdy5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC0tY2xvc2UnKTtcclxuICAgICAgICBtb2RhbFdpbmRvdy5jbGFzc0xpc3QuYWRkKCdtb2RhbC0tb3BlbicpO1xyXG4gICAgfVxyXG4gICAgY2xvc2VNb2RhbCgpIHtcclxuICAgICAgICBtb2RhbFdpbmRvdy5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC0tb3BlbicpO1xyXG4gICAgICAgIG1vZGFsV2luZG93LmNsYXNzTGlzdC5hZGQoJ21vZGFsLS1jbG9zZScpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==

//# sourceMappingURL=script.js.map
