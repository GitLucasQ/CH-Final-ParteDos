"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _ContenedorArchivo2 = _interopRequireDefault(require("../../contenedores/ContenedorArchivo"));

var _config = require("../../config");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ProductoDaoArchivo = /*#__PURE__*/function (_ContenedorArchivo) {
  (0, _inherits2["default"])(ProductoDaoArchivo, _ContenedorArchivo);

  var _super = _createSuper(ProductoDaoArchivo);

  function ProductoDaoArchivo() {
    (0, _classCallCheck2["default"])(this, ProductoDaoArchivo);
    return _super.call(this, _config.RUTA_ARCHIVO_PRODUCTOS);
  }

  (0, _createClass2["default"])(ProductoDaoArchivo, [{
    key: "createNewProduct",
    value: function () {
      var _createNewProduct = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(newProduct) {
        var newId, nombre, descripcion, codigo, url, precio, stock, listOfProducts, lastId;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                newId = 0;
                nombre = newProduct.nombre, descripcion = newProduct.descripcion, codigo = newProduct.codigo, url = newProduct.url, precio = newProduct.precio, stock = newProduct.stock;
                _context.prev = 2;
                _context.next = 5;
                return this.getAll();

              case 5:
                listOfProducts = _context.sent;

                if (listOfProducts.length === 0) {
                  newId = 1;
                } else {
                  lastId = Math.max.apply(Math, (0, _toConsumableArray2["default"])(listOfProducts.map(function (product) {
                    return product.id;
                  })));
                  newId = lastId += 1;
                }

                listOfProducts.push({
                  id: newId,
                  timestamp: Date.now(),
                  nombre: nombre,
                  descripcion: descripcion,
                  codigo: codigo,
                  url: url,
                  precio: precio,
                  stock: stock
                });
                _context.next = 10;
                return this.saveData(listOfProducts);

              case 10:
                return _context.abrupt("return", 'Producto agregado con éxito');

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](2);
                console.error('Error al agregar producto:', _context.t0);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 13]]);
      }));

      function createNewProduct(_x) {
        return _createNewProduct.apply(this, arguments);
      }

      return createNewProduct;
    }()
  }, {
    key: "updateProduct",
    value: function () {
      var _updateProduct = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(newDataProduct) {
        var listOfProducts;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return this.getAll();

              case 3:
                listOfProducts = _context2.sent;
                listOfProducts.forEach(function (product) {
                  if (product.id === newDataProduct.id) {
                    product.nombre = newDataProduct.nombre;
                    product.descripcion = newDataProduct.descripcion;
                    product.codigo = newDataProduct.codigo;
                    product.url = newDataProduct.url;
                    product.precio = newDataProduct.precio;
                    product.stock = newDataProduct.stock;
                  }
                });
                _context2.next = 7;
                return this.saveData(listOfProducts);

              case 7:
                return _context2.abrupt("return", 'Producto actualizado con éxito');

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](0);
                console.error('Error actualizando producto:', _context2.t0);

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 10]]);
      }));

      function updateProduct(_x2) {
        return _updateProduct.apply(this, arguments);
      }

      return updateProduct;
    }()
  }]);
  return ProductoDaoArchivo;
}(_ContenedorArchivo2["default"]);

var _default = ProductoDaoArchivo;
exports["default"] = _default;