<h1 align="center"> pass.in - API </h1>


O pass.in é uma aplicação de **gestão de participantes em eventos presenciais**. 

A ferramenta permite que o organizador cadastre um evento e abra uma página pública de inscrição.

Os participantes inscritos podem emitir uma credencial para check-in no dia do evento.

O sistema fará um scan da credencial do participante para permitir a entrada no evento.

<br>

## 🚀 Technologias
<p>
  <code><img height="35" alt="javascript logo" src="https://i0.wp.com/pt.mundobabushka.com/wp-content/uploads/sites/5/2016/03/js-logo.png?fit=500%2C500&ssl=1"></code>
  <code><img height="35" alt="nodejs logo" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"></code>
  <code><img height="30" alt="typescript logo" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"></code>
  <code><img height="28" alt="sqlite logo" src="https://i.postimg.cc/zXSKfSwL/sqlite.jpg"></code>
  <code><img height="32" alt="prisma logo" src="https://i.postimg.cc/769r6RLs/prisma.png"></code>
  <code><img height="37" alt="fastify logo" src="https://i.postimg.cc/N0bHxgCQ/fastify.png"></code>
  <code><img height="30" alt="zod logo" src="https://i.postimg.cc/LXLB3dPD/zod-logo.png"></code>
  <code><img height="30" alt="swagger logo" src="https://i.postimg.cc/wBSQNx13/swagger-logo.png"></code>
  <code><img height="33" alt="vs code logo" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png"></code>
</p>

- **[Javascript](https://www.javascript.com/)**: linguagem de programação que permite implementar funcionalidades mais complexas em páginas web
- **[NodeJS](https://nodejs.org/)**: ambiente de execução do código JavaScript do lado servidor (server side)
- **[TypeScript](https://www.typescriptlang.org/)**: superset de JavaScript que adiciona tipagem estática ao código
- **[SQLite](https://www.sqlite.org/)**: base de dados relacional de código aberto e que dispensa o uso de um servidor na sua atuação, podendo ser disponibilizado junto com uma aplicação
- **[Prisma](https://www.prisma.io/)**: biblioteca de banco de dados ORM (Object-Relational Mapping) para NodeJS e TypeScript. Ele fornece uma interface de programação de aplicativo (API) para interagir com um banco de dados usando o Prisma Schema
- **[Fastify](https://fastify.dev/)**: framework web extremamente rápido e eficiente para NodeJS, projetado para fornecer alto desempenho com baixo consumo de recursos, adequado para desenvolvimento de APIs e serviços web
- **[Fastify-Swagger](https://github.com/fastify/fastify-swagger)**: plugin Fastify que gera automaticamente a documentação a partir de seus esquemas de rota e parâmetros ou de um esquema Swagger/OpenAPI existente
- **[Fastify-Swagger-UI](https://github.com/fastify/fastify-swagger-ui)**: pacote independente que fornece uma interface para usuário visualizar e interagir com APIs definidas com o Swagger
- **[Fastify-cors](https://github.com/fastify/fastify-cors)**: plugin Fastify que permite configurar políticas de Cross-Origin Resource Sharing (CORS) para controlar o acesso a recursos de origens diferentes
- **[Zod](https://zod.dev/)**: biblioteca de validação de esquemas altamente eficiente e fácil de usar para JavaScript e TypeScript, permite definir e validar esquemas de forma declarativa, ajudando a garantir a integridade dos dados em seu aplicativo

<br>

## 📑 Requisitos

### Requisitos funcionais

- [x] O organizador deve poder cadastrar um novo evento;
- [x] O organizador deve poder visualizar dados de um evento;
- [x] O organizador deve poser visualizar a lista de participantes; 
- [x] O participante deve poder se inscrever em um evento;
- [x] O participante deve poder visualizar seu crachá de inscrição;
- [x] O participante deve poder realizar check-in no evento;

### Regras de negócio

- [x] O participante só pode se inscrever em um evento uma única vez;
- [x] O participante só pode se inscrever em eventos com vagas disponíveis;
- [x] O participante só pode realizar check-in em um evento uma única vez;

### Requisitos não-funcionais

- [x] O check-in no evento será realizado através de um QRCode;

<br>

## 📝 Documentação da API (Swagger)

Para documentação da API (rotas e parâmetros), acesse o link: https://nlw-unite-nodejs.onrender.com/docs

Ou acesse a documentação local em http://localhost:3333/docs

>Nota: Aplicação  desenvolvida usando a versão Node.js v20.11. Em caso de problemas, tente atualizar o Node.js para a versão mais recente.

<br>

## 🗃️ Banco de dados

Nessa aplicação foi utilizado banco de dados relacional (SQL). Para ambiente de desenvolvimento o SQLite foi adotado pela facilidade do ambiente.

### Diagrama ERD

<img src="https://i.postimg.cc/jjj5tyvr/diagrama-ERD.png" width="180" alt="Diagrama ERD do banco de dados" />

### Estrutura do banco (SQL)

```sql
-- CreateTable
CREATE TABLE "events" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "details" TEXT,
    "slug" TEXT NOT NULL,
    "maximum_attendees" INTEGER
);

-- CreateTable
CREATE TABLE "attendees" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "event_id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "attendees_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "events" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "check_ins" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "attendeeId" INTEGER NOT NULL,
    CONSTRAINT "check_ins_attendeeId_fkey" FOREIGN KEY ("attendeeId") REFERENCES "attendees" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "events_slug_key" ON "events"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "attendees_event_id_email_key" ON "attendees"("event_id", "email");

-- CreateIndex
CREATE UNIQUE INDEX "check_ins_attendeeId_key" ON "check_ins"("attendeeId");
```
<br>

## 🛠️ Instalação

1. Clone ou faça o download do repositório
```
git clone https://github.com/Vitinho163/NLW-Unite---Pass-In.git
```

2. Instale as dependências
```
npm install
```

3. Renomeie o arquivo `.env.example` para `.env` e preencha as informações
```
DATABASE_URL=""
```

4. Execute as migrações
```
npm run migrate
```

<br>

## 🚀 Iniciando aplicação

Para rodar a aplicação em modo produção

1. Build na aplicação
```
npm run build
```

2. Inicie a aplicação
```
npm run start
```

<br>

Para rodar a aplicação em modo desenvolvimento
```
npm run dev
```

<br>

## 🌐 Deploy

Esta API foi hospedada diretamente no Render.

O deployment pode ser acessado no seguinte endereço:
```
https://nlw-unite-pass-in.onrender.com/
```

>Nota: Como está hospedado em um serviço gratuito, a aplicação 'hiberna' após 15 minutos de inatividade. Se você estiver tentando acessar o site e o BackEnd não responder, basta aguardar, pois ele estará 'inicializando' os serviços.
