"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// var Schema = mongoose.Schema;
const mongoose_1 = require("mongoose");
const TamanopizzaSchema = new mongoose_1.Schema({
    tipoTamano: { type: String },
    precioTamano: { type: Number },
    created_at: { type: Date, default: Date.now }
});
exports.default = mongoose_1.model('tamano', TamanopizzaSchema);
