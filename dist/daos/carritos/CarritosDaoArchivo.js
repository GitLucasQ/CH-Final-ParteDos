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

var _config = require("../../config");

var _ContenedorArchivo2 = _interopRequireDefault(require("../../contenedores/ContenedorArchivo"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var CarritosDaoArchivo = /*#__PURE__*/function (_ContenedorArchivo) {
  (0, _inherits2["default"])(CarritosDaoArchivo, _ContenedorArchivo);

  var _super = _createSuper(CarritosDaoArchivo);

  function CarritosDaoArchivo() {
    (0, _classCallCheck2["default"])(this, CarritosDaoArchivo);
    return _super.call(this, _config.RUTA_ARCHIVO_CARRITOS);
  }

  (0, _createClass2["default"])(CarritosDaoArchivo, [{
    key: "getAllProducts",
    value: function () {
      var _getAllProducts = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(idShopCart) {
        var data;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return this.getAll();

              case 3:
                data = _context.sent;
                return _context.abrupt("return", data.find(function (shopcart) {
                  return shopcart.id === idShopCart;
                }).productos);

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

      function getAllProducts(_x) {
        return _getAllProducts.apply(this, arguments);
      }

      return getAllProducts;
    }()
  }, {
    key: "addNewProduct",
    value: function () {
      var _addNewProduct = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(idShopCart, newProduct) {
        var nombre, descripcion, codigo, url, precio, stock, newId, _data$filter$, data, listOfProducts, lastId;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                nombre = newProduct.nombre, descripcion = newProduct.descripcion, codigo = newProduct.codigo, url = newProduct.url, precio = newProduct.precio, stock = newProduct.stock;
                newId = 0;
                _context2.prev = 2;
                _context2.next = 5;
                return this.getAll();

              case 5:
                data = _context2.sent;
                listOfProducts = data.find(function (shopcart) {
                  return shopcart.id === idShopCart;
                }).productos;
                lastId = Math.max.apply(Math, (0, _toConsumableArray2["default"])(listOfProducts.map(function (product) {
                  return product.id;
                })));
                newId = lastId += 1;
                (_data$filter$ = data.filter(function (shopcart) {
                  return shopcart.id === parseInt(idShopCart);
                })[0]) === null || _data$filter$ === void 0 ? void 0 : _data$filter$.productos.push({
                  id: newId,
                  timestamp: Date.now(),
                  nombre: nombre,
                  descripcion: descripcion,
                  codigo: codigo,
                  url: url,
                  precio: precio,
                  stock: stock
                });
                _context2.next = 12;
                return this.saveData(data);

              case 12:
                return _context2.abrupt("return", 'Producto agregado al carrito con éxito');

              case 15:
                _context2.prev = 15;
                _context2.t0 = _context2["catch"](2);
                console.error('Error al agregar producto al carrito:', _context2.t0);

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[2, 15]]);
      }));

      function addNewProduct(_x2, _x3) {
        return _addNewProduct.apply(this, arguments);
      }

      return addNewProduct;
    }()
  }, {
    key: "updateProduct",
    value: function () {
      var _updateProduct = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(idShopCart, newData) {
        var nombre, descripcion, codigo, url, precio, stock, data, foundedShopcart, foundedProduct;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                nombre = newData.nombre, descripcion = newData.descripcion, codigo = newData.codigo, url = newData.url, precio = newData.precio, stock = newData.stock;
                _context3.prev = 1;
                _context3.next = 4;
                return this.getAll();

              case 4:
                data = _context3.sent;
                foundedShopcart = data.find(function (shopcart) {
                  return shopcart.id === idShopCart;
                });
                foundedProduct = foundedShopcart.productos.find(function (product) {
                  return product.id = newData.id;
                });
                foundedProduct.nombre = nombre;
                foundedProduct.descripcion = descripcion;
                foundedProduct.codigo = codigo;
                foundedProduct.url = url;
                foundedProduct.precio = precio;
                foundedProduct.stock = stock;
                _context3.next = 15;
                return this.saveData(data);

              case 15:
                return _context3.abrupt("return", 'Producto actualizado en el carrito con éxito');

              case 18:
                _context3.prev = 18;
                _context3.t0 = _context3["catch"](1);
                console.error('Error al actualizar producto del carrito:', _context3.t0);

              case 21:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 18]]);
      }));

      function updateProduct(_x4, _x5) {
        return _updateProduct.apply(this, arguments);
      }

      return updateProduct;
    }()
  }, {
    key: "deleteProduct",
    value: function () {
      var _deleteProduct = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(idShopCart, idProduct) {
        var data, listOfProducts;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return this.getAll();

              case 3:
                data = _context4.sent;
                listOfProducts = data.find(function (shopcart) {
                  return shopcart.id === idShopCart;
                }).productos;
                listOfProducts = listOfProducts.filter(function (product) {
                  return product.id != idProduct;
                });
                data.find(function (shopcart) {
                  return shopcart.id === idShopCart;
                }).productos = listOfProducts;
                _context4.next = 9;
                return this.saveData(data);

              case 9:
                return _context4.abrupt("return", 'Producto eliminado del carrito con éxito');

              case 12:
                _context4.prev = 12;
                _context4.t0 = _context4["catch"](0);
                console.error('Error al borrar el producto del carrito:', _context4.t0);

              case 15:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 12]]);
      }));

      function deleteProduct(_x6, _x7) {
        return _deleteProduct.apply(this, arguments);
      }

      return deleteProduct;
    }()
  }]);
  return CarritosDaoArchivo;
}(_ContenedorArchivo2["default"]);

var _default = CarritosDaoArchivo;
exports["default"] = _default;