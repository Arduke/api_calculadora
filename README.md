Requisitos

- Nodejs
- Npm

Passo a passo no terminal
1 - Instale todas as dependencias com "npm install"
2 - Rode o script de migrations para estruturar o banco "npx knex migrate:latest"
3 - Inicie o servidor usando o script "npm run start"

Rotas

- Get (/logs) - retorna os logs dos calculos
- Post (/calculate) - Recebe um json com o nome e o calculo solicitado e retorna o resultado.
  JSON EXEMPLO:
  {
  "username": "pepino",
  "calculation": "9+13+3"
  }
