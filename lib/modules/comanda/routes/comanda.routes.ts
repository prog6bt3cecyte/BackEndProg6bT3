import { ComandaController } from "../controllers/comanda.controller";

export class ComandaRoutes {
    private comandaController: ComandaController = new ComandaController();
    public routes(app): void {
        app.route('/comanda')
        .get(this.comandaController.obtenerComandas)
        .post(this.comandaController.crearComanda);

        app.route('/comanda/:id')
        .put(this.comandaController.actualizarComanda)
        .delete(this.comandaController.eliminarComanda);
    }
}