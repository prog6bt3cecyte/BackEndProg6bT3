"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComandaController = void 0;
const comanda_models_1 = require("../models/comanda.models");
class ComandaController {
    constructor() {
        this.crearComanda = (req, res) => {
            const nuevaComanda = new comanda_models_1.default({
                comanda: req.body.comanda
            });
            nuevaComanda.save()
                .then(comandaCreada => {
                res.status(201).json({
                    ok: true,
                    comanda: comandaCreada,
                    message: 'Comanda creada'
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error: error.name,
                    message: 'Comanda no creada'
                });
            });
        };
        this.obtenerComandas = (req, res) => {
            comanda_models_1.default.find()
                .then(comandas => {
                res.status(200).json({
                    ok: true,
                    comandas: comandas
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error: error.name,
                    message: error.message
                });
            });
        };
        this.actualizarComanda = (req, res) => {
            comanda_models_1.default.findByIdAndUpdate(req.params.id, {
                comanda: req.body.comanda
            })
                .then(comandaActualizada => {
                res.status(200).json({
                    ok: true,
                    comanda: comandaActualizada,
                    message: 'Comanda actualizada'
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error: error.name,
                    message: 'Comanda no actualizada'
                });
            });
        };
        this.eliminarComanda = (req, res) => {
            comanda_models_1.default.findByIdAndDelete(req.params.id)
                .then(comandaEliminada => {
                res.status(200).json({
                    ok: true,
                    message: 'Comanda eliminada'
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error: error.name,
                    message: 'Comanda no eliminada'
                });
            });
        };
    }
}
exports.ComandaController = ComandaController;
//# sourceMappingURL=comanda.controller.js.map