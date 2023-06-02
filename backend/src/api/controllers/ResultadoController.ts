import { Request, Response } from 'express';
import {ResultadosServices} from '../services';
const resultadosServices = new ResultadosServices();

class ResultadoController {
    static async pegaTodosOsResultados(req: Request, res: Response): Promise<void> {
        try {
            const todosOsResultados: object[] = await resultadosServices.pegaTodosOsRegistros();
            res.status(200).json(todosOsResultados);
        } catch (error) {
            
            res.status(500).json(error);
        }
    }

    static async pegaResultadosEmDestaque(req: Request, res: Response): Promise<void> {
        try {
            const resultadosEmDestaque: object[] = await resultadosServices.pegaRegistrosComCondicao({destaque:true});
            res.status(200).json(resultadosEmDestaque);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async pegaResultadoPorId(req: Request, res: Response): Promise<void> {
        const {idResultado}=req.params;
        try {
            const resultado: object = await resultadosServices.pegaRegistroUnico({id: idResultado});
            res.status(200).json(resultado);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

export { ResultadoController };