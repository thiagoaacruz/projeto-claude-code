# Projeto 1

Projeto Next.js criado com `create-next-app`, seguindo as convenções descritas em [`CLAUDE.md`](./CLAUDE.md).

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev) + TypeScript
- [Tailwind CSS 4](https://tailwindcss.com)
- ESLint 9 (`eslint-config-next`)

> Convenções do projeto (shadcn/ui, React Hook Form + Zod, Server Actions, estrutura de pastas) estão documentadas em [`CLAUDE.md`](./CLAUDE.md) e devem ser seguidas conforme o projeto evoluir.

## Getting Started

Instale as dependências e rode o servidor de desenvolvimento:

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para ver o resultado.

A página principal pode ser editada em `app/page.tsx` — a página é atualizada automaticamente conforme o arquivo é salvo.

Este projeto usa [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) para carregar a fonte [Geist](https://vercel.com/font) automaticamente.

## Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Servidor de desenvolvimento (porta 3000) |
| `npm run build` | Build de produção |
| `npm run start` | Inicia o build de produção |
| `npm run lint` | Roda o ESLint |
| `npm run type-check` | Checagem de tipos (`tsc --noEmit`) |

## Estrutura do projeto

```
app/            # Rotas (App Router), layout e estilos globais
public/         # Arquivos estáticos
CLAUDE.md       # Convenções e arquitetura do projeto
AGENTS.md       # Instruções para agentes de IA (gerado pelo Next.js)
```

Conforme o projeto crescer, novas pastas serão adicionadas seguindo a arquitetura definida em `CLAUDE.md` (`actions/`, `components/`, `lib/`, `types/`).

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) — recursos e API do Next.js
- [Learn Next.js](https://nextjs.org/learn) — tutorial interativo

## Deploy

A forma mais simples de fazer deploy é usar a [Vercel Platform](https://vercel.com/new). Veja a [documentação de deploy do Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para mais detalhes.
