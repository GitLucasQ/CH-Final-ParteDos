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

var _ContenedorFirebase2 = _interopRequireDefault(require("../../contenedores/ContenedorFirebase"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var CarritosDaoFirebase = /*#__PURE__*/function (_ContenedorFirebase) {
  (0, _inherits2["default"])(CarritosDaoFirebase, _ContenedorFirebase);

  var _super = _createSuper(CarritosDaoFirebase);

  function CarritosDaoFirebase() {
    (0, _classCallCheck2["default"])(this, CarritosDaoFirebase);
    return _super.call(this, 'shopcart');
  }

  (0, _createClass2["default"])(CarritosDaoFirebase, [{
    key: "createCart",
    value: function () {
      var _createCart = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return this.create({
                  timestamp: Date.now(),
                  products: []
                });

              case 3:
                return _context.abrupt("return", 'Carrito creado con éxito');

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                console.error('Error al crear carrito:', _context.t0);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 6]]);
      }));

      function createCart() {
        return _createCart.apply(this, arguments);
      }

      return createCart;
    }()
  }, {
    key: "addProduct",
    value: function () {
      var _addProduct = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(shopCartId, productId) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return this.collection.doc(shopCartId).update({
                  products: this.firestore.FieldValue.arrayUnion(productId)
                });

              case 3:
                return _context2.abrupt("return", 'Producto agregado con éxito');

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);
                console.error('Error al agregar produco al carrito:', _context2.t0);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 6]]);
      }));

      function addProduct(_x, _x2) {
        return _addProduct.apply(this, arguments);
      }

      return addProduct;
    }()
  }, {
    key: "deleteProduct",
    value: function () {
      var _deleteProduct = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(shopCartId, productId) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return this.collection.doc(shopCartId).update({
                  products: this.firestore.FieldValue.arrayRemove(productId)
                });

              case 3:
                return _context3.abrupt("return", 'Producto eliminado con éxito del carrito');

              case 6:
                _context3.prev = 6;
                _context3.t0 = _context3["catch"](0);
                console.error('Error al eliminar producto:', _context3.t0);

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 6]]);
      }));

      function deleteProduct(_x3, _x4) {
        return _deleteProduct.apply(this, arguments);
      }

      return deleteProduct;
    }()
  }]);
  return CarritosDaoFirebase;
}(_ContenedorFirebase2["default"]);

var _default = CarritosDaoFirebase;
exports["default"] = _default;