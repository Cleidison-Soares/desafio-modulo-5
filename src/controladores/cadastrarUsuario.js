const knex = require("../conexao/knex.js");
const bcrypt = require("bcrypt");

const cadastrarUsuario = async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    const usuario = await knex("usuarios").where({ email }).first();

    if (usuario) {
      return res
        .status(400)
        .json({ mensagem: "O email já existe cadastrado." });
    }
    const senhaCriptografada = await bcrypt.hash(senha, 10);

    const usuarioCadastrado = await knex("usuarios")
      .insert({
        nome,
        email,
        senha: senhaCriptografada,
      })
      .returning("*");

    if (!usuarioCadastrado) {
      return res.status(404).json("O usuário não foi cadastrado.");
    }
    return res.status(201).json({ nome, email});

  } catch (error) {
    console.log(error);
    return res.status(500).json({ mensagem: `Erro interno: ${error.message}` });
  }
};

module.exports = {
  cadastrarUsuario,
};
