"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
const mongoose_1 = require("mongoose");
const FacturaSchema = new mongoose_1.Schema({
    id: { type: Number },
    tipoMenu: { type: String },
    Elementos: { type: String },
    totalPago: { type: Number },
    tamanoPizza: { type: String },
    ingredientesExtra: { type: String },
    cantidad: { type: Number },
    Tipo_factura: { type: String },
    lugar_pedido: { type: String },
    codigo_pedido: { type: String },
    codigo_entrega: { type: String },
    name_usuario: { type: String },
    correo: { type: String },
    pago: { type: String },
    created_at: { type: Date, default: Date.now }
});
exports.default = mongoose_1.model('facturas', FacturaSchema);
