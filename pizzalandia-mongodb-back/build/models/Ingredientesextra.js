"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
const mongoose_1 = require("mongoose");
const IngredientesESchema = new mongoose_1.Schema({
    id_ingrediente: { type: Number },
    nombreIngrediente: { type: String },
    precioIngrediente: { type: Number },
    value: { type: String },
    created_at: { type: Date, default: Date.now }
});
exports.default = mongoose_1.model('ingredientesextra', IngredientesESchema);
