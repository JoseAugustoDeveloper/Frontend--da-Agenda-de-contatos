Introdução Oi, pessoal! Hoje quero compartilhar com vocês como eu conectei o frontend ao backend no meu projeto de cadastro de contatos. Vou explicar de forma simples o que cada parte faz e como elas trabalham juntas para funcionar. Vamos lá!

O Backend O backend é o "cérebro" da aplicação. Ele é responsável por guardar e organizar as informações no banco de dados, além de permitir que o frontend consiga buscar, criar, atualizar e apagar essas informações.

No meu backend, usei o Fastify, que é um framework muito rápido e fácil de configurar. Aqui estão as principais funcionalidades do meu backend:

Rotas Criei rotas para cada funcionalidade da aplicação:

Cadastrar contatos: Onde o usuário pode enviar informações como nome, e-mail e telefone. Listar contatos: Onde todos os contatos cadastrados são enviados para o frontend. Atualizar contatos: Permite editar informações de um contato específico. Excluir contatos: Para remover contatos do banco de dados. Banco de Dados Usei o Prisma como gerenciador de banco de dados. Ele facilita muito na hora de organizar os dados e fazer operações, como salvar ou buscar informações.

CORS Para permitir que o frontend conseguisse se comunicar com o backend, ativei o CORS. Ele é como uma "autorização" para que o navegador possa enviar e receber dados do servidor.

O Frontend O frontend é a parte que o usuário vê e interage. Ele tem campos para preencher os dados do contato, botões para enviar essas informações e uma lista onde os contatos aparecem.

No meu projeto, usei React para construir o frontend. Aqui estão algumas coisas que implementei:

Formulário de Cadastro Criei um formulário onde o usuário pode inserir o nome, e-mail e telefone de um contato. Quando ele clica no botão de cadastrar, os dados são enviados para o backend.

Listagem de Contatos Assim que o usuário abre a página, o frontend busca todos os contatos no backend e exibe na tela.

A Interação entre Frontend e Backend O segredo para tudo funcionar é a comunicação entre o frontend e o backend. Para isso, usei o Axios, que facilita o envio e recebimento de dados.

Resumo Resumindo, o backend é como um banco de informações, e o frontend é a interface que conecta o usuário a esse banco. Usando ferramentas como Fastify, Prisma, React e Axios, consegui fazer essa conexão de forma simples e eficiente.

Se você gostou dessa explicação e quer saber mais detalhes, deixa um comentário e me conta! Até a próxima! 🎥✨
