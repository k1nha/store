<h1>Store</h1>

## Sumário

- [Sumário](#sumário)
- [Visão Geral](#visão-geral)
- [Tecnologias usadas](#tecnologias-usadas)
- [Requisitos](#requisitos)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Arquitetura da Aplicação](#arquitetura-da-aplicação)
- [Instalação](#instalação)
- [Funcionalidades](#funcionalidades)

## Visão Geral

O Store é uma aplicação web que permite aos usuários realizar compras online. Ele oferece uma variedade de produtos categorizados, carrinho de compras, sessâo para criar produtos

## Tecnologias usadas

- Next 14
- App Router
- Tailwind
- Next Auth
- Shadcn
- React Query

## Requisitos

Certifique-se de que seu ambiente atenda aos seguintes requisitos:

- Node.js (versão X.X.X ou superior)
- Docker
- Outras dependências específicas do projeto (consulte o arquivo `package.json`)

## Configuração do Ambiente

1. Clone o repositório: `git clone https://github.com/k1nha/store.git`
2. Acesse o diretório do projeto: `cd store`
3. Instale as dependências: `npm install`
4. Configure as variáveis de ambiente no arquivo `.env` (exemplo disponível em `.env.example`)

## Arquitetura da Aplicação

A aplicação adota uma abordagem de separação de responsabilidades, onde o Next.js por padrão, lida com a renderização no servidor. Nesse caso, os módulos e views são usados quando a comunicação precisa ocorrer no lado do cliente, por exemplo, em formulários onde a interação do usuário é necessária para enviar informações ao servidor.

Os formulários são projetados de forma modular, permitindo o reutilização desses componentes. Um exemplo prático disso é a possibilidade de cadastrar um produto de duas maneiras distintas: através da página de cadastros ou da página de administrador. Mesmo usando módulos diferentes, é possível reutilizar o mesmo formulário. Essa abordagem dá uma flexibilidade maior para aplicação e evita retição de código.

## Instalação

Execute os seguintes comandos para iniciar o E-commerce:

```bash
# URL padrao DB postgresql://docker:docker@localhost:5432/mission?schema=public
docker compose up -d
```

```bash
# Inicie o servidor local
npm run dev
```

O Projeto estará disponível em `http://localhost:3000`.

## Funcionalidades

- Catálogo de produtos
- Carrinho de compras
- Cadastro de produtos
