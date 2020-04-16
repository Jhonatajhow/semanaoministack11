const express = require('express');
const routes = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/**
 * 
 */
/*Metodo HTTP
*
*Get: Buscar/listar uma informaçao do back-end
*POST: Criar uma informação no back-end
*PUT: alterar uma informaçao no  back-end
*DELETE: DELETAR UMA INFORMAÇAO NO BACK-END
*/
/**
 * Tipos de parametros:
 ** Query parmas: Paramtros nomeados enviados na rota apos "?" ()filtros, paginaçao)
 * Route params: parametros utilizados para identificar recursos
 * *Request Body: Corpo da requisicao , utilizados para criar ou alterar recursos
 */

app.listen(3333);