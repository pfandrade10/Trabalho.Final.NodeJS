# Trabalho-Final-PWN

> Trabalho final da disciplina Programação Web com Node.js (PWN) do curso Desenvolvimento Web Fullstack da PUC Minas promovido pelo professor [Samuel Martins](https://github.com/samwx)

<!--- Adicionar uma foto/gif final do projeto aqui -->

## Enunciado 📜

#### TO-DO Lists

Vocês foram contratados pela empresa SM Solutions para desenvolver um produto, onde será possível adicionar várias listas e várias tarefas para cada lista. Para essa solução, a empresa listou os seguintes requisitos: 

* Por questões de segurança, o sistema deve possuir algum tipo de autenticação (login e logout utilizando passport.js, auth0, firebase auth, manualmente na base de dados ou qualquer outro tipo de autenticação);
* A tela inicial deverá conter todas as listas criadas pelo usuário, onde será possível inserir, editar o nome e remover as listas;
* Ao clicar em uma das listas, o usuário será levado a uma outra página com as tarefas específicas daquela lista. Nessa tela, o usuário deverá ser capaz de executar as seguintes ações:
  * Adicionar, editar e remover uma tarefa; 
  * Marcar e desmarcar uma tarefa como concluída. 

#### Importante 

- Todos os trabalhos deverão ser entregues em alguma plataforma git (github, gitlab, bitbucket…); 
- Os trabalhos deverão ser acessíveis por meio de algum domínio (sugestão: utilizar zeit/now, netlify, heroku, surge.sh, AWS, Azure…); 
- Poderá ser utilizado qualquer banco de dados nas soluções acima, seja local ou “as a service”; 
- Os trabalhos deverão ser feitos em grupo de até **​3 pessoas​.**

#### Extra

Os trabalhos entregues em container docker irão receber ​**5pts extras.** Neste caso, todos os componentes necessários para rodar a aplicação deverão estar “containerizados” (servidor nodejs, banco de dados e outros possíveis componentes). 

## Instalação 💻

```sh
    git clone https://github.com/VictorGazzinelli/Trabalho-Final-PWN.git
    cd Trabalho-Final-PWN 
    npm install
    npm start
```

## Milestones 🚩

* [x] Criar repositorio do projeto
* [x] Convidar integrantes do grupo
* [ ] Implementação do back-end 
    * [x] Adicionar dependencias relacionadas ao [Express](https://expressjs.com/pt-br/) para mapear as rotas da API
    * [x] Instanciar um banco de dados [Postgre](https://www.postgresql.org/) "as a service" com o [ElephantSQL](https://www.elephantsql.com/)
    * [x] Adicionar dependencias relacionadas ao [Sequelize](https://sequelize.org/) para realizar operações 
    * [x] Executar script de migrations
    * [x] Proteger dependencias de ambiente utilizando [Dotenv](https://www.npmjs.com/package/dotenv)
    * [x] CRUD Usuário
    * [x] CRUD Lista
    * [x] CRUD Tarefa
    * [x] Construir e proteger as rotas autenticadas com [Passport.js](http://www.passportjs.org/) utilizando login do Github
 
* [ ] Implementação do front-end 
    * [ ] Adicionar Rota/Pagina de Login
    * [ ] Adicionar Rota/Pagina de Listas
    * [ ] Adicionar Rota/Pagina de Tarefas
* [ ] Publicação da solução no [Heroku](https://www.heroku.com/)

## Extras 🔥
* [ ] Exportar os modulos como contaniers usando [Docker](https://www.docker.com/)
* [ ] Implementar [Typescript](https://www.typescriptlang.org/) para melhor organização e compreensão do projeto
* [ ] Implementar [Swagger](https://swagger.io/) para melhor documentacao da API.
* [ ] Implementar validação das requests recebidas pela API.
* [ ] Implementar testes.
* [ ] Adotar design patterns!

## Changelog 🧐

* 0.0.1
    * Versão base da API

## Autores 👨‍💻

Victor Gazzinelli – [https://github.com/VictorGazzinelli](https://github.com/VictorGazzinelli) – vpezzigc@gmail.com

Lucas Viana – [https://github.com/lcasviana](https://github.com/lcasviana) – lcasviana@gmail.com

Alex Miller – [https://github.com/alexmillerc](https://github.com/alexmillerc) – alexmillerc@gmail.com