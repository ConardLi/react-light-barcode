'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Code = require('./component/Code128');

Object.defineProperty(exports, 'Code128', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Code).default;
  }
});

var _Code2 = require('./component/Code39');

Object.defineProperty(exports, 'Code39', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Code2).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }