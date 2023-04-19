const knex = require("../conexao/knex.js")
const bcrypt = require("bcrypt")

const atualizarPerfil = async (req, res) => {
  const { nome, email, senha } = req.body;
  const { usuario } = req;

  try {
    const usuarioEncontrado = await knex('usuarios')
      .where('email', email)
      .first();

    if (usuarioEncontrado && usuarioEncontrado.id !== usuario.id) {
      return res.status(400).json({ mensagem: 'O email já existe cadastrado.' });
    }

    const senhaCriptografada = await bcrypt.hash(senha, 10);

    await knex('usuarios')
      .where('id', usuario.id)
      .update({
        nome,
        email,
        senha: senhaCriptografada,
      });

    return res.status(204).send();

  } catch (error) {
    return res.status(500).json({ mensagem: `Erro interno: ${error.message}` });
  }
}

module.exports = {
  atualizarPerfil,
}