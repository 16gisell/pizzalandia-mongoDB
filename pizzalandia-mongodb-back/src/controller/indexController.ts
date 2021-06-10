import {Request, Response} from 'express';

class IndexController{
    public index(req:Request, res:Response){
        res.send('que tall') //para enviar un msj 
        res.json({text: 'Api mensaje'}) //enviar un mensaje api
    }
}

export const indexController = new IndexController();