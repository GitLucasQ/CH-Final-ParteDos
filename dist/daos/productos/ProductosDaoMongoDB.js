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

var _ProductoMongo = _interopRequireDefault(require("../../models/ProductoMongo"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ProductosDaoMongoDB = /*#__PURE__*/function (_ContenedorMongoDB) {
  (0, _inherits2["default"])(ProductosDaoMongoDB, _ContenedorMongoDB);

  var _super = _createSuper(ProductosDaoMongoDB);

  function ProductosDaoMongoDB() {
    (0, _classCallCheck2["default"])(this, ProductosDaoMongoDB);
    return _super.call(this, _config.MONGODB_URL);
  }

  (0, _createClass2["default"])(ProductosDaoMongoDB, [{
    key: "createNewProduct",
    value: function () {
      var _createNewProduct = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(newProduct) {
        var nombre, descripcion, codigo, url, precio, stock;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                nombre = newProduct.nombre, descripcion = newProduct.descripcion, codigo = newProduct.codigo, url = newProduct.url, precio = newProduct.precio, stock = newProduct.stock;
                _context.prev = 1;
                _context.next = 4;
                return new _ProductoMongo["default"]({
                  nombre: nombre,
                  descripcion: descripcion,
                  codigo: codigo,
                  url: url,
                  precio: precio,
                  stock: stock
                }).save();

              case 4:
                return _context.abrupt("return", 'Producto creado con éxito');

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](1);
                console.error('Error al crear producto:', _context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 7]]);
      }));

      function createNewProduct(_x) {
        return _createNewProduct.apply(this, arguments);
      }

      return createNewProduct;
    }()
  }, {
    key: "updateProduct",
    value: function () {
      var _updateProduct = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(productId, newDataProduct) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _ProductoMongo["default"].findByIdAndUpdate(productId, newDataProduct);

              case 3:
                return _context2.abrupt("return", 'Producto actualizado con éxito');

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);
                console.error('Error al actualizar producto:', _context2.t0);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 6]]);
      }));

      function updateProduct(_x2, _x3) {
        return _updateProduct.apply(this, arguments);
      }

      return updateProduct;
    }()
  }]);
  return ProductosDaoMongoDB;
}(_ContenedorMongoDB2["default"]);

var _default = ProductosDaoMongoDB;
exports["default"] = _default;