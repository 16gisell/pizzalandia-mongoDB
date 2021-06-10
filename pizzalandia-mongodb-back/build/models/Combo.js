"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
const mongoose_1 = require("mongoose");
const ComboSchema = new mongoose_1.Schema({
    id: { type: Number },
    nameCombo: { type: String },
    imageCombo: { type: String },
    elementCombo: { type: String },
    precioCombo: { type: Number },
    created_at: { type: Date, default: Date.now }
});
exports.default = mongoose_1.model('combos', ComboSchema);
