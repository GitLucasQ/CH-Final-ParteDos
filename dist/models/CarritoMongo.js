"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var CarritoModel = new _mongoose.Schema({
  timestamp: Date,
  productos: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  }]
}, {
  timestamps: true
});

var _default = (0, _mongoose.model)('Shopcart', CarritoModel);

exports["default"] = _default;