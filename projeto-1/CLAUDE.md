@AGENTS.md

# Project: Aula Teste Claude (aula-teste-claude)

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- TailwindCSS 4
- shadcn/ui
- React Hook Form + Zod
- Server Components First

## Commands

- `npm run dev` — servidor local na porta 3000
- `npm run build` — build de produção
- `npm run type-check` — validação de tipos
- `npm run lint` — análise estática
- `npm run test -- NomeDoArquivo` — executar teste específico

## Architecture

- Utilizar App Router com rotas em `app/`, agrupadas por `(grupo)/`.
- Utilizar Server Components por padrão.
- Adicionar `'use client'` somente quando necessário para hooks,
  eventos ou browser APIs.
- Realizar mutações através de Server Actions em `actions/`.
- Nunca acessar o banco de dados diretamente em Client Components.
- `components/ui/` — componentes primitivos reutilizáveis do shadcn/ui.
- `components/` — componentes específicos de features.
- `lib/` — helpers, clients e configurações.
- `types/` — tipos globais e schemas Zod compartilhados.

## Code Style

- Nunca utilizar `any` explicitamente.
- Preferir `unknown` com type guards quando o tipo não for conhecido.
- Utilizar ES Modules (`import` / `export`).
- Não utilizar `require()`.
- Utilizar TailwindCSS para estilização.
- Não utilizar CSS inline ou styled-components.
- Novos design tokens devem ser definidos na configuração apropriada
  do Tailwind antes de serem utilizados.
- Arquivos devem utilizar kebab-case.
- Componentes React devem utilizar PascalCase.
- Evitar alterações fora do escopo da tarefa atual.
- Preservar padrões existentes do projeto quando não conflitarem com
  estas regras.

## Environment Variables

- Variáveis `NEXT_PUBLIC_*` devem conter somente valores seguros para
  exposição no client.
- Segredos, tokens e API keys devem permanecer exclusivamente no server.
- Nunca expor secrets em Client Components.
- Utilizar `.env.example` como referência para configuração local.
- Nunca adicionar `.env.local` ou arquivos contendo secrets ao Git.

## Workflow

Após uma série de alterações relevantes, executar:

`npm run type-check && npm run lint`

Para testes, preferir inicialmente o teste diretamente relacionado à
alteração:

`npm run test -- NomeDoArquivo`

Antes de considerar uma tarefa concluída:

1. verificar erros de TypeScript;
2. executar lint;
3. executar os testes relacionados;
4. verificar se nenhuma alteração não relacionada foi introduzida.

## Common Gotchas

- `revalidatePath()` e `revalidateTag()` devem ser utilizados em contexto
  server compatível.
- Manter o middleware na localização definida pela arquitetura atual do
  projeto.
- No server, utilizar o client Supabase apropriado para execução server-side.
- No client, utilizar o client Supabase apropriado para o browser.
- Configurar imagens externas no `next.config.ts` quando necessário.

## Git

Todo commit deste projeto deve obrigatoriamente utilizar a `commit` skill.

Isso inclui solicitações explícitas, como:

- "faz o commit"
- "commita"
- "commit as mudanças"

E solicitações implícitas que exijam um commit para serem concluídas, como:

- "salva no Git"
- "finaliza a feature"
- "pode subir"

Nunca executar `git commit` diretamente fora do fluxo definido pela
`commit` skill.

A `commit` skill é a fonte de verdade para:

- criação e nomenclatura de branches;
- Conventional Commits;
- staging;
- proteção da `main`;
- segurança de arquivos e secrets;
- validação do commit;
- push da branch;
- preparação para code review e Pull Request.

Não duplicar ou substituir essas regras neste arquivo.