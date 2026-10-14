const express = require('express');
const router = express.Router();
const contaController = require('../controllers/contaController');
const authMiddleware = require('../middlewares/authMiddleware'); // 👈 Importa o segurança

router.post('/registrar', contaController.registrar);
router.post('/login', contaController.login);


// ROTA PROTEGIDA! Rota -> Middleware -> Controller
router.get('/perfil', authMiddleware, contaController.verPerfil);

module.exports = router;