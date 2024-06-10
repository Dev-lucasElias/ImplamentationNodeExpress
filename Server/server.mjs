import express from 'express';

const server = express();
const porta = 3333;

server.get('/',(req, res) => {
      res.send("hello word")
})

server.listen(porta, () => {console.log("rodando")});
