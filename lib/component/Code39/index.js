'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BARS = [212222, 222122, 222221, 121223, 121322, 131222, 122213, 122312, 132212, 221213, 221312, 231212, 112232, 122132, 122231, 113222, 123122, 123221, 223211, 221132, 221231, 213212, 223112, 312131, 311222, 321122, 321221, 312212, 322112, 322211, 212123, 212321, 232121, 111323, 131123, 131321, 112313, 132113, 132311, 211313, 231113, 231311, 112133, 112331, 132131, 113123, 113321, 133121, 313121, 211331, 231131, 213113, 213311, 213131, 311123, 311321, 331121, 312113, 312311, 332111, 314111, 221411, 431111, 111224, 111422, 121124, 121421, 141122, 141221, 112214, 112412, 122114, 122411, 142112, 142211, 241211, 221114, 413111, 241112, 134111, 111242, 121142, 121241, 114212, 124112, 124211, 411212, 421112, 421211, 212141, 214121, 412121, 111143, 111341, 131141, 114113, 114311, 411113, 411311, 113141, 114131, 311141, 411131, 211412, 211214, 211232, 23311120],
    START_BASE = 38,
    STOP = 106;

var fromType = {
  A: function A(charCode) {
    if (charCode >= 0 && charCode < 32) return charCode + 64;
    if (charCode >= 32 && charCode < 96) return charCode - 32;
    return charCode;
  },
  B: function B(charCode) {
    if (charCode >= 32 && charCode < 128) return charCode - 32;
    return charCode;
  },
  C: function C(charCode) {
    return charCode;
  }
};

var Code39 = function (_React$Component) {
  _inherits(Code39, _React$Component);

  function Code39() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Code39);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Code39.__proto__ || Object.getPrototypeOf(Code39)).call.apply(_ref, [this].concat(args))), _this), _this.code39 = function (code, barcodeType) {
      var _this$props = _this.props,
          displayValue = _this$props.displayValue,
          size = _this$props.size,
          fontSize = _this$props.fontSize,
          fontColor = _this$props.fontColor;

      if (!barcodeType) barcodeType = _this.code139Detect(code);
      if (barcodeType === 'C' && code.length % 2 === 1) code = '' + code;
      var a = _this.parseBarcode(code, barcodeType);
      return _react2.default.createElement(
        'div',
        { className: 'barcode', style: { zoom: size } },
        _this.bar2html(a.join('')),
        displayValue ? _react2.default.createElement(
          'label',
          {
            style: { fontSize: fontSize, color: fontColor } },
          ' ',
          code
        ) : null
      );
    }, _this.bar2html = function (s) {
      var color = _this.props.color;

      return s.split('').map(function (element, index) {
        if (index % 2 === 0) {
          return _react2.default.createElement('div', {
            key: index,
            className: "bar" + element + " space" + s[index + 1],
            style: { borderColor: color } });
        }
      });
    }, _this.code39Detect = function (code) {
      if (/^[0-9]+$/.test(code)) return 'C';
      if (/[a-z]/.test(code)) return 'B';
      return 'A';
    }, _this.parseBarcode = function (barcode, barcodeType) {
      var bars = [];
      bars.add = function (nr) {
        var nrCode = BARS[nr];
        this.check = this.length === 0 ? nr : this.check + nr * this.length;
        this.push(nrCode || 'UNDEFINED: ' + nr + '->' + nrCode);
      };
      bars.add(START_BASE + barcodeType.charCodeAt(0));
      for (var i = 0; i < barcode.length; i++) {
        var code = barcodeType === 'C' ? +barcode.substr(i++, 2) : barcode.charCodeAt(i);
        var converted = fromType[barcodeType](code);
        if (isNaN(converted) || converted < 0 || converted > 106) throw new Error('Unrecognized character (' + code + ') at position ' + i + ' in code \'' + barcode + '\'.');
        bars.add(converted);
      }
      bars.push(BARS[bars.check % 103], BARS[STOP]);
      return bars;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Code39, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          type = _props.type;

      return _react2.default.createElement(
        'div',
        null,
        this.code39(value, type)
      );
    }
  }]);

  return Code39;
}(_react2.default.Component);

Code39.propTypes = {
  value: _propTypes2.default.string,
  displayValue: _propTypes2.default.bool,
  size: _propTypes2.default.number,
  type: _propTypes2.default.string,
  color: _propTypes2.default.string,
  fontSize: _propTypes2.default.string,
  fontColor: _propTypes2.default.string
};
Code39.defaultProps = {
  value: '1234567891234',
  displayValue: true,
  size: 1,
  type: 'C',
  color: 'black',
  fontSize: '0.125in',
  fontColor: 'black'
};
exports.default = Code39;