"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
const mongoose_1 = require("mongoose");
const BebidaSchema = new mongoose_1.Schema({
    nombreBebidas: { type: String },
    precioBebidas: { type: Number },
    contenido: { type: String },
    created_at: { type: Date, default: Date.now }
});
exports.default = mongoose_1.model('bebidas', BebidaSchema);
