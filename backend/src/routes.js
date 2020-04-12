const express = require('express');
// const crypto = require('crypto');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SEssionController');

// const connection = require('./database/connection');
const routes = express.Router();

routes.post('/sessions', SessionController.create);

/* Begin  Ongs Routes */
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);
/* End   Ongs Routes */

/* Begin  Profile Routes */
routes.get('/profile', ProfileController.index);
/* End   Profile Routes */

/* Begin  Incidents Routes */
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);
/* End  Incidents Routes */


/* Lista todas as ongs */
// routes.get('/ongs', async(request, response) => {
//     const ongs = await connection('ongs').select('*');
//     //console.log(ongs);
//     return response.json(ongs);
// });

/* Criar uam ong */
// routes.post('/ongs', async(request, response) => {
//     // return response.send( 'Hello World!');
//     const { name, email, whatsapp, city, uf } = request.body;

//     const id = crypto.randomBytes(4).toString('HEX');

//     await connection('ongs').insert({
//         id, 
//         name,
//         email,
//         whatsapp,
//         city,
//         uf,
//     })

//     // const data = request.body;

//     // console.log(data);
    
    
//     return response.json({ id });
// });

module.exports = routes;