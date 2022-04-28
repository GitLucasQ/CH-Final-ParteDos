"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _CarritosDaoArchivo = _interopRequireDefault(require("./daos/carritos/CarritosDaoArchivo"));

var _CarritosDaoMongoDB = _interopRequireDefault(require("./daos/carritos/CarritosDaoMongoDB"));

var _ProductosDaoArchivo = _interopRequireDefault(require("./daos/productos/ProductosDaoArchivo"));

var _ProductosDaoMongoDB = _interopRequireDefault(require("./daos/productos/ProductosDaoMongoDB"));

var app = (0, _express["default"])();
var PORT = process.env.PORT || 8080;
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use(function (_req, res) {
  res.status(404).json({
    'error': -2,
    'descripcion': 'Ruta no existente'
  });
});

var ejecutaCRUD = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
    var newData, mongodbDAO, listaProductos, mongoCarritoDAO, listaCarritos;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            newData = {
              "timestamp": Date.now(),
              "nombre": "Laptop Asus",
              "descripcion": "producto de computo",
              "codigo": "TEC-001",
              "url": "https://mercury.vteximg.com.br/arquivos/ids/5970366-3000-3000/image-d73f01d58cab41529c121bb2d594c68c.jpg?v=637817666434800000",
              "precio": 2599,
              "stock": 5
            };
            mongodbDAO = new _ProductosDaoMongoDB["default"]();

            listaProductos = /*#__PURE__*/function () {
              var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
                return _regenerator["default"].wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        return _context.abrupt("return", mongodbDAO.getAll());

                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function listaProductos() {
                return _ref2.apply(this, arguments);
              };
            }();

            _context3.t0 = console;
            _context3.next = 6;
            return listaProductos();

          case 6:
            _context3.t1 = _context3.sent;

            _context3.t0.log.call(_context3.t0, _context3.t1);

            _context3.t2 = console;
            _context3.next = 11;
            return mongodbDAO.getById('626608d4336943bf34d288cd');

          case 11:
            _context3.t3 = _context3.sent;

            _context3.t2.log.call(_context3.t2, _context3.t3);

            _context3.t4 = console;
            _context3.next = 16;
            return mongodbDAO.createNewProduct(newData);

          case 16:
            _context3.t5 = _context3.sent;

            _context3.t4.log.call(_context3.t4, _context3.t5);

            _context3.t6 = console;
            _context3.next = 21;
            return mongodbDAO.updateProduct('626608d4336943bf34d288cd', newData);

          case 21:
            _context3.t7 = _context3.sent;

            _context3.t6.log.call(_context3.t6, _context3.t7);

            mongoCarritoDAO = new _CarritosDaoMongoDB["default"]();

            listaCarritos = /*#__PURE__*/function () {
              var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
                return _regenerator["default"].wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        return _context2.abrupt("return", mongoCarritoDAO.getAllShopcart());

                      case 1:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function listaCarritos() {
                return _ref3.apply(this, arguments);
              };
            }();

            _context3.t8 = console;
            _context3.next = 28;
            return listaCarritos();

          case 28:
            _context3.t9 = _context3.sent;

            _context3.t8.log.call(_context3.t8, _context3.t9);

          case 30:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function ejecutaCRUD() {
    return _ref.apply(this, arguments);
  };
}();

app.listen(PORT, function () {
  console.log('Server online on port', PORT);
  ejecutaCRUD();
});