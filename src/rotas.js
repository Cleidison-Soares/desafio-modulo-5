const express = require("express");
const { listaDeCategoria } = require("./controladores/listarCategorias");
const { cadastrarUsuario } = require("./controladores/cadastrarUsuario");

const validarDados = require("./intermediario/validarDadosEntrada");

const schemaUsuario = require("./validacoes/schemaCadastro");
const schemaLogin = require("./validacoes/schemaLogin");
const { login } = require("./controladores/login");
const { filtroAutenticacao } = require("./intermediario/authenticacao");
const { detalharPerfilUsuarioLogado } = require("./controladores/detalharPerfilUsuarioLogado");
const { atualizarPerfil } = require("./controladores/atualizarPerfilUsuarioLogado");

const rotas = express.Router();

rotas.get("/categoria", listaDeCategoria);
rotas.post("/usuario", validarDados(schemaUsuario), cadastrarUsuario);
rotas.post("/login", validarDados(schemaLogin), login);

rotas.use(filtroAutenticacao)

rotas.get("/usuario", detalharPerfilUsuarioLogado);
rotas.put("/usuario", validarDados(schemaUsuario), atualizarPerfil);







module.exports = rotas;
