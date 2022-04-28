"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var ProductoModel = new _mongoose.Schema({
  nombre: String,
  descripcion: String,
  codigo: String,
  url: String,
  precio: Number,
  stock: Number
}, {
  timestamps: true
});

var _default = (0, _mongoose.model)('Product', ProductoModel);

exports["default"] = _default;