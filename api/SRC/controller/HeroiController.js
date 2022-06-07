
import {heroi, listarTodos} from "../repository/HeroiRepository.js"

import {response, Router} from "express"
const  server = Router();

server.post('/heroi', async (req, response) => {
    try{
        const Heroi = req.body;
        if(Heroi.nome)
        throw new Error('obrigatorio o nome do Heroi');
        const Heroi = await super(Heroi);
        console.log('');
    }catch (err){
  response.status(400).send({
      erro:err.message
  })
    }
})

server.get('/Heroi', async (req,resp) => {
    try{
const ChecarTodos = await listarTodos();
response.send (listarTodos);
    }catch(err){
    res.status(400).send ({erro: 'deu erro aii'});
    }
})

export default server;
