# Projeto Claude Code

Repositório de estudos/prática do curso de programação com Claude Code — reúne um projeto Next.js de exemplo, material de referência sobre harnesses de LLM e configurações/regras usadas com agentes de IA (Claude Code).

## Conteúdo

| Pasta/arquivo | Descrição |
|---|---|
| [`projeto-1/`](./projeto-1) | Landing page da concessionária fictícia **Veloce Motors**, construída com Next.js 16, React 19 e Tailwind CSS 4 |
| [`rules-global/`](./rules-global) | Regras globais de convenção de código (estrutura de pastas, App Router, Server Components, Shadcn UI etc.) usadas como referência para agentes de IA |
| `Harness_de_LLM_Panorama.pptx` | Apresentação sobre o panorama de harnesses de LLM |
| `skills-lock.json` | Lockfile de skills do Claude Code |

## Projeto principal: Veloce Motors

O projeto em [`projeto-1/`](./projeto-1) é uma landing page institucional para uma concessionária de veículos, com seções de hero, diferenciais, modelos em destaque e chamada para agendamento de test-drive.

**Tech stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4

Para rodar localmente:

```bash
cd projeto-1
npm install
npm run dev
```

Mais detalhes em [`projeto-1/README.md`](./projeto-1/README.md).

## Contexto

Este repositório serve como material de prática para desenvolvimento assistido por agentes de IA (Claude Code), incluindo configuração de regras (`CLAUDE.md`, `AGENTS.md`, `rules-global/`) e skills que orientam o comportamento do agente durante o desenvolvimento.
