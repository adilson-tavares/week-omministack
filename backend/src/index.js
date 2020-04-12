const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

// Configure CORS
app.use(cors());

app.use(express.json());
app.use(routes);

app.listen(3333);
/* 
Rota / Recurso
 */

 /* 
 Tipos de parâmetros
 
 Query Params: Paraâmetros nomeados enviados na rota após "?" (Filtros, Paginação )
 Route Params: Parâmetros utilizados para identificar recursos 
 Request Body: Corpo da requisição, utilizado para criar ou alterar recursos 
 */
/*
Tipos de instalação:
    Driver: SELECT  * FROM users 
    Query Builder: table('name_table').select('*').where();
 */
/* app.post('/users', (request, response) => {
    // return response.send( 'Hello World!');
    const body = request.body;

    console.log(body);
    
    
    return response.json({
        evento: "Semana Oministack!",
        aluno: "Adilson Cruz"
    });
}); */

