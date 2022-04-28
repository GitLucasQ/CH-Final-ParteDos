"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _fs = require("fs");

var ContenedorArchivo = /*#__PURE__*/function () {
  function ContenedorArchivo(ruta) {
    (0, _classCallCheck2["default"])(this, ContenedorArchivo);
    this.ruta = ruta;
  }

  (0, _createClass2["default"])(ContenedorArchivo, [{
    key: "getAll",
    value: function () {
      var _getAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var data;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _fs.promises.readFile(this.ruta);

              case 3:
                data = _context.sent;
                return _context.abrupt("return", JSON.parse(data));

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.error('Sucedió un error al obtener los datos:', _context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      function getAll() {
        return _getAll.apply(this, arguments);
      }

      return getAll;
    }()
  }, {
    key: "getById",
    value: function () {
      var _getById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id) {
        var data;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return this.getAll();

              case 3:
                data = _context2.sent;
                return _context2.abrupt("return", data.find(function (element) {
                  return element.id == id;
                }));

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                console.error('Error al obtener objeto:', _context2.t0);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 7]]);
      }));

      function getById(_x) {
        return _getById.apply(this, arguments);
      }

      return getById;
    }()
  }, {
    key: "deleteById",
    value: function () {
      var _deleteById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id) {
        var data, newdata;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return this.getAll();

              case 3:
                data = _context3.sent;
                newdata = data.filter(function (element) {
                  return element.id != parseInt(id);
                });
                _context3.next = 7;
                return _fs.promises.writeFile(this.ruta, JSON.stringify(newdata, null, 2));

              case 7:
                return _context3.abrupt("return", 'Objeto eliminado con éxito');

              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3["catch"](0);
                console.error('Error eliminando objeto:', _context3.t0);

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 10]]);
      }));

      function deleteById(_x2) {
        return _deleteById.apply(this, arguments);
      }

      return deleteById;
    }()
  }, {
    key: "saveData",
    value: function () {
      var _saveData = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(data) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _fs.promises.writeFile(this.ruta, JSON.stringify(data, null, 2));

              case 3:
                _context4.next = 8;
                break;

              case 5:
                _context4.prev = 5;
                _context4.t0 = _context4["catch"](0);
                console.error('Error guardando la data:', _context4.t0);

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 5]]);
      }));

      function saveData(_x3) {
        return _saveData.apply(this, arguments);
      }

      return saveData;
    }()
  }]);
  return ContenedorArchivo;
}();

var _default = ContenedorArchivo;
exports["default"] = _default;