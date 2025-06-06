"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ComandaSchema = new Schema({
    comanda: {
        type: String,
        required: [true, 'comanda required'],
        unique: true
    },
    user: {
        type: String,
        required: [true, 'user required'],
    }
});
const Comanda = mongoose.model("Comanda", ComandaSchema);
exports.default = Comanda;
//# sourceMappingURL=comanda.models.js.map