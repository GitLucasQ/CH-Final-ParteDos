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

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _config = require("../../config");

var _ContenedorMongoDB2 = _interopRequireDefault(require("../../contenedores/ContenedorMongoDB"));

var _CarritoMongo = _interopRequireDefault(require("../../models/CarritoMongo"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var CarritosDaoMongoDB = /*#__PURE__*/function (_ContenedorMongoDB) {
  (0, _inherits2["default"])(CarritosDaoMongoDB, _ContenedorMongoDB);

  var _super = _createSuper(CarritosDaoMongoDB);

  function CarritosDaoMongoDB() {
    (0, _classCallCheck2["default"])(this, CarritosDaoMongoDB);
    return _super.call(this, _config.MONGODB_URL);
  }

  (0, _createClass2["default"])(CarritosDaoMongoDB, [{
    key: "getAllShopcart",
    value: function () {
      var _getAllShopcart = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _CarritoMongo["default"].find();

              case 3:
                return _context.abrupt("return", _context.sent);

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                console.error('Error al obtener carritos:', _context.t0);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 6]]);
      }));

      function getAllShopcart() {
        return _getAllShopcart.apply(this, arguments);
      }

      return getAllShopcart;
    }()
  }, {
    key: "getShopcartById",
    value: function () {
      var _getShopcartById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(idShopCart) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _CarritoMongo["default"].findById(idShopCart);

              case 3:
                return _context2.abrupt("return", _context2.sent);

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);
                console.error('Error al obtener carrito:', _context2.t0);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 6]]);
      }));

      function getShopcartById(_x) {
        return _getShopcartById.apply(this, arguments);
      }

      return getShopcartById;
    }()
  }, {
    key: "addNewProduct",
    value: function () {
      var _addNewProduct = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(idShopCart, idNewProduct) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;

                _CarritoMongo["default"].updateOne({
                  _id: idShopCart
                }, {
                  $push: {
                    productos: idNewProduct
                  }
                }).exec();

                return _context3.abrupt("return", 'Producto agregado al carrito con éxito');

              case 5:
                _context3.prev = 5;
                _context3.t0 = _context3["catch"](0);
                console.error('Error al agregar producto al carrito:', _context3.t0);

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 5]]);
      }));

      function addNewProduct(_x2, _x3) {
        return _addNewProduct.apply(this, arguments);
      }

      return addNewProduct;
    }()
  }, {
    key: "createShopCart",
    value: function () {
      var _createShopCart = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _CarritoMongo["default"].create({
                  timestamp: Date.now(),
                  products: []
                });

              case 3:
                return _context4.abrupt("return", 'Carrito creado con éxito');

              case 6:
                _context4.prev = 6;
                _context4.t0 = _context4["catch"](0);
                console.error('Error al crear carrito:', _context4.t0);

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 6]]);
      }));

      function createShopCart() {
        return _createShopCart.apply(this, arguments);
      }

      return createShopCart;
    }()
  }, {
    key: "updateShopcart",
    value: function () {
      var _updateShopcart = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id, newData) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _CarritoMongo["default"].updateOne({
                  _id: id
                }, {
                  $set: newData
                });

              case 3:
                return _context5.abrupt("return", 'Carrito actualizado con éxito');

              case 6:
                _context5.prev = 6;
                _context5.t0 = _context5["catch"](0);
                console.error('Error al actualizar carrito:', _context5.t0);

              case 9:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 6]]);
      }));

      function updateShopcart(_x4, _x5) {
        return _updateShopcart.apply(this, arguments);
      }

      return updateShopcart;
    }()
  }, {
    key: "deleteShopCart",
    value: function () {
      var _deleteShopCart = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(id) {
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return _CarritoMongo["default"].deleteOne({
                  _id: id
                });

              case 3:
                return _context6.abrupt("return", 'Carrito eliminado con éxito');

              case 6:
                _context6.prev = 6;
                _context6.t0 = _context6["catch"](0);
                console.error('Error al eliminar carrito:', _context6.t0);

              case 9:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 6]]);
      }));

      function deleteShopCart(_x6) {
        return _deleteShopCart.apply(this, arguments);
      }

      return deleteShopCart;
    }()
  }]);
  return CarritosDaoMongoDB;
}(_ContenedorMongoDB2["default"]);

var _default = CarritosDaoMongoDB;
exports["default"] = _default;