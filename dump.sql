create database pdv;

create table usuarios(
	
  id serial not null primary key,
  nome text not null,
  email text not null unique,
  senha text not null

);

create table categorias(

  id serial primary key,
  descricao text not null

);

insert into categorias (descricao)
values 
('Informática'),
('Beleza e Perfumaria'),
('Mercado'),
('Livros e Papelaria'),
('Brinquedos'),
('Moda'),
('Bebê'),
('Games')
;