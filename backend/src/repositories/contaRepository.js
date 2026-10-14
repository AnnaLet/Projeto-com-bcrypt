const pool = require('../config/db');

const criarContas = async (nome, email, senha_hash) => {
    const sql = 'INSERT INTO contas (nome, email, senha_hash) VALUES ($1, $2, $3) RETURNING id, nome, email';
    const resultado = await pool.query(sql, [nome, email, senha_hash]);

    return resultado.rows[0];
};

const buscarContaPorEmail = async (email) => {
    const sql = 'SELECT * FROM contas WHERE email = $1';
    const resultado = await pool.query(sql, [email]);
    return resultado.rows[0];
};

const buscarContaPorId = async (id) => {
    const sql = 'SELECT * FROM contas WHERE id = $1';
    const resultado = await pool.query(sql, [id]);
    return resultado.rows[0];
}
module.exports = {criarContas, buscarContaPorEmail, buscarContaPorId};

