# Ecoleta ♻️

## Sobre o projeto 💻

O Ecoleta é um site de criação e buscagem de pontos de coletas de resíduos para reciclagem criado pela Rocketseat para a semana Next Level Week.
<https://blog.rocketseat.com.br/primeira-next-level-week/>

## Tecnologias usadas 👨‍💻

- Node.js
- NPM
  - Express
  - Nodemon
  - Nunjucks
  - SQLite3

## Instalação 🛠

### Node.js

1. Vá ao site <https://nodejs.org/en/download/>;
2. Escolha a versão que deseja de acordo com o seu Sistema Operacional;
3. Abra o executável e prossiga no processo de instalação.
    - OBS: O NPM já vem acompanhado do Node.js

### Dependências do Node.js

1. Express: `npm install express`
2. Nodemon: `npm install nodemon`
3. Nunjucks: `npm install nunjucks`
4. MySQL: `npm install mysql`
5. Migrations: `npm install mysql-migrations`

### Banco de dados MySQL via Docker

1. MySQL5.6: `docker run -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=rootpass -e MYSQL_USER=db_user -e MYSQL_PASSWORD=db_pass -e MYSQL_DATABASE=nlwecoleta -d mysql:5.6.51`
2. Migration: `node src/migration.js up`

## Executando 🚀

### Start node Server

1. Para iniciar o servidor local execute o comando : $ `npm start`	
2. Abra o navegador web e acesse: <http://localhost:3000>
3. Pronto, aplicação executando!

---

Made with ♥ by Pedro Santos :wave: [Get in touch!](https://www.linkedin.com/in/santospedroh/)
