// Usando objeto express
const express = require('express');

// App de Express
const app = express();

// Puerto en el que vamos a ver nuestra app: localhost:3000 
const port = 3000;

// Path inicial, responderá a la url localhost:3000
app.get('/', (req, res) => {
  res.send('Hello world');
});

/**
 * Respondiendo texto
 * localhost:3000/launchX
 */
app.get('/launchX', (req, res) => {
  res.send('Bienvenidos a LaunchX');
});

/**
 * Regresando un objeto
 * localhost:3000/explorersInNode
 */
app.get('/explorersInNode', (req, res) => {
  const explorer = { name: 'Explorer', msg: 'Hello' };
  res.send(explorer);
});
/**
 * Query Params: Recibir parámetros por la url
 * http://localhost:3000/explorers/baruch
 * req.params = { "explorerName": "baruch" }
 */

app.get('/explorers/:explorerName', (req, res) => {
  res.send(req.params);
});


module.exports = app;