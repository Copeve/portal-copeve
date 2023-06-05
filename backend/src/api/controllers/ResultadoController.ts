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

    static async adicionaResultado(req: Request, res: Response): Promise<void> {
        try {
            const dados= req.body;
            await resultadosServices.adicionaRegistro(dados);
            res.status(200).json(dados);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    static async adicionaResultadoDestaque(req: Request, res: Response): Promise<void> {
        try {
            const dados= req.body;
            if(dados.destaque){
                await resultadosServices.adicionaRegistro(dados);
                res.status(200).json(dados);
            }else{
                res.status(500).json({message: 'O atributo destaque deve ser true'});
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async deletaResultado(req: Request, res: Response): Promise<void> {
        try {
            const {idResultado} = req.params;
            await resultadosServices.deletaRegistro(idResultado);
            res.status(200).json();
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async tiraResultadoDeDestaque(req: Request, res: Response): Promise<void> {
        try {
            const {idResultado} = req.params;
            const atualizacao={'destaque':false};
            await resultadosServices.atualizaRegistro(idResultado, atualizacao);
            res.status(200).json();
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async colocaResultadoEmDestaque(req: Request, res: Response): Promise<void>{
        try {
            const {idResultado} = req.params;
            const atualizacao={'destaque':true};
            await resultadosServices.atualizaRegistro(idResultado, atualizacao);
            res.status(200).json();
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

export { ResultadoController };