// Usando objeto Express
const express = require('express');

// App de Express
const app = express();

app.use(express.json()); // Indicamos que usaremos JSON


app.get('/v1/explorers', (req, res) => {
  console.log(`Api explorers GET ALL requests ${new Date()}`);
  const explorer1 = { id: 1, name: 'baruch1' };
  const explorer2 = { id: 2, name: 'baruch2' };
  const explorer3 = { id: 3, name: 'baruch3' };
  const explorer4 = { id: 4, name: 'baruch4' };
  const explorer5 = { id: 5, name: 'baruch5' };
  const explorer6 = { id: 6, name: 'baruch6' };
  const explorers = [explorer1, explorer2, explorer3, explorer4, explorer5, explorer6];

  res.status(200).json(explorers);
});

app.get('/v1/explorers/:id', (req, res) => {
  console.log(`Api explorers GET request ${new Date()}`);
  console.log(`Getting explorers with id ${req.params.id}`);
  const explorer = { id: 1, name: 'Baruch' };
  res.status(200).json(explorer);
});

app.post('/v1/explorers', (req, res) => {
  console.log(`API explorers POST request ${new Date()}`);
  const requestBody = req.body; // Parámetros de un cliente
  res.status(200).json({ message: 'created' });
});

app.put('/v1/explorers/:id', (req, res) => {
  console.log(`API Explorers PUT request ${new Date()}`);
  console.log(`Update explorer with id ${req.params.id}`);

  const requestBody = req.body; // Parámetros de un cliente
  res.status(200).json({ msg: 'UPDATED' });
});

app.delete('/v1/explorers/:id', (req, res) => {
  console.log(`API Explorers DELETE request ${new Date()}`);
  console.log(`Delete explorer with id ${req.params.id}`);

  const requestBody = req.body;
  res.status(200).json({ msg: 'DELETED!!' });
});

module.exports = app;