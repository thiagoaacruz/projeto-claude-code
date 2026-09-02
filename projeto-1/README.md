# Veloce Motors — Landing Page

Landing page institucional para uma concessionária de veículos fictícia (Veloce Motors), construída com Next.js. Apresenta a marca, diferenciais, modelos em destaque e uma chamada para agendamento de test-drive.

Projeto criado com `create-next-app`, seguindo as convenções descritas em [`CLAUDE.md`](./CLAUDE.md).

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev) + TypeScript
- [Tailwind CSS 4](https://tailwindcss.com)
- ESLint 9 (`eslint-config-next`)

> Convenções do projeto (shadcn/ui, React Hook Form + Zod, Server Actions, estrutura de pastas) estão documentadas em [`CLAUDE.md`](./CLAUDE.md) e devem ser seguidas conforme o projeto evoluir.

## Seções da página

| Seção | Componente | Descrição |
|---|---|---|
| Header | `site-header.tsx` | Navegação principal |
| Hero | `hero-section.tsx` | Chamada principal ("O carro certo para cada trajeto") |
| Diferenciais | `features-section.tsx` | Garantia, financiamento, revisão inclusa, suporte 24h |
| Modelos | `models-section.tsx` | Cards com os modelos em destaque (sedã, SUV, elétrico) |
| CTA | `cta-section.tsx` | Chamada para agendar test-drive |
| Footer | `site-footer.tsx` | Rodapé |

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
components/     # Seções da landing page (hero, features, models, cta, header, footer)
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
