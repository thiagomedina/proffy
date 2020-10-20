
<h1 align="center">
    <!-- <img alt="Proffy" src="assets/logo.png" height="100px" /> -->
    <br/>
   <a href="https://nodejs.org/en/" target="_blank" rel="noopener">Node.js</a> | <a href="https://pt-br.reactjs.org" target="_blank" rel="noopener">ReactJS</a> | <a href="https://reactnative.dev" target="_blank" rel="noopener">React Native</a>
</h1>

<p align="center">
  <img alt="Develop by" src="https://img.shields.io/badge/Develop%20by-Thiago%20Medina-blue?style=flat&logo=Awesome-Lists">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/thiagomedina/proffy?color=informational&style=flat&logo=GitHub-Actions">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/gabrielpatrola/proffy?color=important&style=flat&logo=TypeScript">
  <img alt="Made By" src="https://img.shields.io/badge/Made%20by-RocketSeat-blueviolet?style=flat&logo=Apache-RocketMQ">
  <img alt="Made By" src="https://img.shields.io/github/license/gabrielpatrola/proffy?&style=flat&logo=Google-Sheets">
<p>

<h3 align="center">
  <a href="#-sobre">About</a>
  <span> · </span>
  <a href="#-tecnologias-utilizadas">Stack technology used</a>
  <span> · </span>
  <a href="#-como-usar">How to use it</a>
  <span> · </span>
</h3>

## 💭 About

Proffy is an application that have goal to connect students and teachers, within it is provided a space for teachers to record their availability during the week, subjects they teach, phone(WhatsApp) and also the cost of their hour / class. For the student it is possible to find tutors to contact them via WhatsApp and also save "proffys" in their favorites.

The application was developed during the second edition of RocketSeat's Next Level Week.

## 👨‍💻 Stack technology used

- <a href="https://reactjs.org/" target="_blank" rel="noopener">React</a> on the web frontend;
- <a href="https://reactnative.dev/" target="_blank" rel="noopener">React Native</a> with <a href="https://expo.io/" target="_blank" rel="noopener">Expo</a> on mobile frontend;
- <a href="https://nodejs.org/en/" target="_blank" rel="noopener">Node</a> with <a href="https://expressjs.com/" target="_blank" rel="noopener">Express</a> on backend;
- <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener">TypeScript</a>

## ⁉ How to use it

### 🤔 Pré-requisitos

Para conseguir utilizar a aplicação sem nenhum problema é necessário ter:

- O **<a href="https://nodejs.org/en/" target="_blank" rel="noopener">Node.js</a>** instalado no computador para a execução do backend
- Ter em sua máquina o **<a href="https://www.npmjs.com/" target="_blank" rel="noopener">NPM</a>** ou **<a href="https://yarnpkg.com/" target="_blank" rel="noopener">Yarn</a>** para o gerenciamento dos pacotes da aplicação
- **<a href="https://expo.io/" target="_blank" rel="noopener">Expo</a>** instalado de forma global na máquina para a execução da aplicação mobile
- E não menos importante, o **<a href="https://git-scm.com/" target="_blank" rel="noopener">Git</a>** para clonar o repositório em seu computador

### 📝 Passo a passo

Primeiro clone o repositório em seu computador, por meio do terminal utilizando o comando:

1. Clonando o repositório

```sh
  # Clone o repositório
  $ git clone https://github.com/Gabrielpatrola/proffy.git
  # Entre na pasta raiz da aplicação
  $ cd proffy
```

2. Iniciando o Backend

```sh
  # Entre na pasta do backend
  $ cd server
  # Instale as dependências da aplicação
  $ yarn # ou npm install
  # Crie o banco de dados da aplicação
  $ yarn knex:migrate # ou npm run knex:migrate
  # Inicie o servidor
  $ yarn start # ou npm start
```

3. Iniciando o Frontend web

```sh
  # Entre na pasta da aplicação web
  $ cd web
  # Instale as dependências da aplicação
  $ yarn # ou npm install
  # Inicie a aplicação web
  $ yarn start # ou npm start
```

4. Iniciando a aplicação Mobile

```sh
  # Entre na pasta da aplicação mobile
  $ cd mobile
  # Instale as dependências da aplicação
  $ yarn # ou npm install
  # Inicie a aplicação mobile
  $ yarn start # ou npm start
```