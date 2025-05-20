"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComandaRoutes = void 0;
const comanda_controller_1 = require("../controllers/comanda.controller");
class ComandaRoutes {
    constructor() {
        this.comandaController = new comanda_controller_1.ComandaController();
    }
    routes(app) {
        app.route('/comanda')
            .get(this.comandaController.obtenerComandas)
            .post(this.comandaController.crearComanda);
        app.route('/comanda/:id')
            .put(this.comandaController.actualizarComanda)
            .delete(this.comandaController.eliminarComanda);
    }
}
exports.ComandaRoutes = ComandaRoutes;
//# sourceMappingURL=comanda.routes.js.map