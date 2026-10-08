const express = require('express');
const contaRoutes = require('./routes/contaRoutes');

const app = express();
app.use(express.json());

// Cadastra a rota base
app.use('/contas', contaRoutes);

module.exports = app;