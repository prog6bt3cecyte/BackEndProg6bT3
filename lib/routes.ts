import { UsuarioRoutes } from "./modules/usuario/routes/usuario.routes";
import { ComandaRoutes } from "./modules/comanda/routes/comanda.routes";

export class Routes {

    private comandaRoutes: comandaRoutes = new comandaRoutes();
    private usuarioRoutes: UsuarioRoutes = new UsuarioRoutes();

    public routes(app): void {
        this.usuarioRoutes.routes(app);
        this.comandaRoutes.routes(app);
    }
}