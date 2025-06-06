import { Request, Response } from 'express';
import * as _ from 'lodash';
import Comanda from '../models/comanda.models';

export class ComandaController {
    crearComanda = (req: Request, res: Response) =>  {
        const nuevaComanda = new Comanda({
            comanda: req.body.comanda,
            user: req.body.user
        });

        nuevaComanda.save()
        .then(comandaCreada => {
            res.status(201).json({
                ok: true,
                comanda: comandaCreada,
                message: 'Comanda creada'
            });
        })
        .catch(error =>{
            res.status(400).json({
                ok: false,
                error: error.name,
                message: 'Comanda no creada'
            });
        });
    }

    obtenerComandas = (req: Request, res: Response) => {
        Comanda.find()
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
    }

    actualizarComanda  = (req: Request, res: Response) => {
        Comanda.findByIdAndUpdate(req.params.id, {
            comanda: req.body.comanda
        })
        .then(comandaActualizada => {
            res.status(200).json(
                {
                    ok: true,
                    comanda: comandaActualizada,
                    message: 'Comanda actualizada'    
                }
            );
        })
        .catch(error => {
            res.status(400).json({
                ok: false,
                error: error.name,
                message: 'Comanda no actualizada'
            });
        });
    }

    eliminarComanda  = (req: Request, res: Response) => {
        Comanda.findByIdAndDelete(req.params.id)
        .then(comandaEliminada => {
            res.status(200).json(
                {
                    ok: true,                   
                    message: 'Comanda eliminada'    
                }
            );
        })
        .catch(error => {
            res.status(400).json({
                ok: false,
                error: error.name,
                message: 'Comanda no eliminada'
            });
        });
    }

    

}