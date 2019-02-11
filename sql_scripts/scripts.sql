CREATE TABLE cliente(
	cpf_cliente varchar(16) primary key,
	nome_cliente varchar(50),
	endereco_cliente varchar(50)
);

CREATE TABLE produto(
	id_produto int primary key,
	valor_produto money,
	descricao_produto varchar(50)	
);

CREATE TABLE vendedor(
	cpf_vendedor varchar(16) primary key,
	nome_vendedor varchar(50),
	taxacomicao_vendedor real
);

CREATE TABLE venda(
	id_venda int primary key,
	data_venda date,
	total_venda real,
	cpf_cliente varchar(16),
	cpf_vendedor varchar(16),
	id_item int,
	foreign key (cpf_cliente) references cliente(cpf_cliente),
	foreign key (cpf_vendedor) references vendedor(cpf_vendedor),
	foreign key (id_item) references item(id_item)
);

insert into vendedor(cpf_vendedor, nome_vendedor, taxacomicao_vendedor)
values ('111', 'Gabriel de Queiroz', 5),
('123', 'Natalia Cavalcante', 6),
('456', 'Fernando Algusto', 7),
('789', 'Neymar Jr', 4);


insert into cliente(cpf_cliente, nome_cliente, endereco_cliente)
values ('000', 'Cliente 1', 'Rua que deus sabe'),
('1', 'Cliente 2', 'Outra rua'),
('2', 'Cliente 3', 'Rua A'),
('3', 'CLiente 4', 'Rua B');


insert into produto(id_produto, valor_produto, descricao_produto)
values (11,50,'sabao'),
(22,40,'sabonete'),
(33,30, 'amaciante'),
(44,20, 'camisa');


CREATE TABLE item(
	id_item int primary key,
	quatidade_item int,
	valor_item real,
	id_produto int,
	foreign key(id_produto) references produto(id_produto)
);

insert into item(id_item, quatidade_item, valor_item, id_produto)
values (100, 3, 3 * 50, 11),
(200, 2, 2 * 40, 22),
(300, 1, 1 * 50, 33),
(400, 4, 4 * 50, 44);


insert into venda(id_venda, data_venda, cpf_cliente, cpf_vendedor, id_item)
values (1, '10/08/2018', '000', '111', 100);


#Questão 1
select id_venda, quatidade_item,valor_item,valor_produto
from venda, item, produto
where item.id_item = venda.id_item
and produto.id_produto = item.id_produto

#Questão 2
select id_venda, total_venda from venda

#Questão 3
select vendedor.cpf_vendedor, nome_vendedor, id_venda,total_venda,taxacomicao_vendedor
from vendedor,venda
where vendedor.cpf_vendedor=venda.cpf_vendedor;

#Questão 4
select cliente.cpf_cliente,nome_cliente,total_venda
from cliente,venda
where cliente.cpf_cliente=venda.cpf_cliente
order by total_venda desc;

#Questão 5
select produto.id_produto,descricao_produto,total_venda
from produto,venda,item
where produto.id_produto= item.id_produto
and item.id_produto=produto.id_produto
order by total_venda desc;













