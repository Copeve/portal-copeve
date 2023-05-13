import { Router } from 'express';
import { Request, Response } from 'express';
const router = Router();

//GET
router.get('/api/resultados', (req: Request, res: Response)=>{
    try {
        res.status(200).json(
            {data:
                {message:'Busca no banco por resultados'}
            });
    } catch (error) {
        res.status(500).json(error);
    }
});
export default router;