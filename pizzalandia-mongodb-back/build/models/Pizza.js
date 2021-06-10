"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
const mongoose_1 = require("mongoose");
const PizzaSchema = new mongoose_1.Schema({
    idPizza: { type: Number },
    nombrePizza: { type: String },
    ingredientesPizza: { type: String },
    precioCombo: { type: Number },
    created_at: { type: Date, default: Date.now }
});
exports.default = mongoose_1.model('pizzas', PizzaSchema);
