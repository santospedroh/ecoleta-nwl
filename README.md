# Ecoleta ♻️

## Sobre o projeto 💻

O Ecoleta é um site de criação e buscagem de pontos de coletas de resíduos para reciclagem criado pela Rocketseat para a semana Next Level Week.
<https://blog.rocketseat.com.br/primeira-next-level-week/>

## Tecnologias usadas 👨‍💻

- Node.js
- Docker
- NPM
  - Express
  - Nodemon
  - Nunjucks
  - MySQL

## Instalação 🛠

### Node.js

1. Vá ao site <https://nodejs.org/en/download/>;
2. Escolha a versão que deseja de acordo com o seu Sistema Operacional;
3. Abra o executável e prossiga no processo de instalação.
    - OBS: O NPM já vem acompanhado do Node.js

### Dependências do Node.js

1. Express: $ `npm install express`
2. Nodemon: $ `npm install nodemon`
3. Nunjucks: $ `npm install nunjucks`
4. MySQL: $ `npm install mysql`
5. Migrations: $ `npm install mysql-migrations`

## Executando  🚀

## Subindo na mão os dois containers

### Docker containet MySQL

1. Executar o container do MySQL5.6: $ `docker run --rm -p 3306:3306 --name mysql --net=my-net -e MYSQL_ROOT_PASSWORD=rootpass -e MYSQL_USER=db_user -e MYSQL_PASSWORD=db_pass -e MYSQL_DATABASE=nlwecoleta -d mysql:5.6.51`
2. Executar a migration para criar a base de dados: $ `node src/migration.js up`

### Docker container Application

1. Fazer o build da imagem docker: $ `docker build -t nlw-ecoleta:latest .`
2. Para iniciar a aplicação execute o comando : $ `docker run --rm -p 8000:8000 --name ecoleta --net=my-net -e HOSTDB=mysql -e USERDB=root -e PASSDB=rootpass -e SCHEDB=nlwecoleta -d nlw-ecoleta:latest`	
3. Abra o navegador web e acesse: <http://localhost:8000>
4. Pronto, aplicação executando!

## Subindo tudo de uma vez com Docker-Compose
1. Executar: $ `docker-compose up`
2. Abra o navegador web e acesse: <http://localhost:8000>
3. Pronto, aplicação executando!

---

Made with ♥ by Pedro Santos :wave: [Get in touch!](https://www.linkedin.com/in/santospedroh/)
