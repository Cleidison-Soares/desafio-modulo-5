const knex = require("../conexao/knex.js");

const detalharPerfilUsuarioLogado = async (req, res) => {
  const { usuario } = req;
  try {
    const usuarioDetalhado = await knex("usuarios").select("id", "nome", "email").where({ id: usuario.id }).first();

    if (!usuarioDetalhado) {
      return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }

    return res.status(200).json(usuarioDetalhado);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ mensagem: `Erro interno: ${error.message}` });
  }
};

module.exports = {
  detalharPerfilUsuarioLogado,
};
