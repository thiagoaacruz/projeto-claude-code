---

description: Cria um commit semântico baseado nas mudanças atuais
allowed-tools: Bash(git*)
-------------------------

# Criar Commit Semântico

Analise o estado atual do repositório e crie um commit seguindo **Conventional Commits**.

O projeto segue obrigatoriamente o fluxo:

`main → branch → alterações → validação → commit → push da branch → Pull Request → merge`

## Regras de Commit

* Prefixos permitidos:

  * `feat`
  * `fix`
  * `chore`
  * `docs`
  * `refactor`
  * `test`
  * `style`

* Formato:

  `tipo(escopo): descrição curta em inglês`

* A primeira linha deve ter no máximo 72 caracteres.

* A mensagem deve descrever claramente o objetivo da alteração.

* Não utilizar mensagens genéricas como:

  `update files`

  `changes`

  `fix stuff`

  `adjustments`

* Se existir `$ARGUMENTS`, utilize-o como contexto adicional para entender a intenção das alterações.

## Regra de Branch

Antes de realizar qualquer commit, execute:

`git branch --show-current`

Se a branch atual for `main`:

1. Não realizar commit na `main`.
2. Não realizar push na `main`.
3. Analisar as alterações existentes.
4. Determinar um nome apropriado para a nova branch.
5. Criar a branch antes do commit.

Exemplo:

`git switch -c feat/autenticacao-jwt`

Utilize nomes de branch compatíveis com a alteração:

* `feat/nome-da-feature`
* `fix/nome-do-problema`
* `refactor/nome-da-refatoracao`
* `docs/nome-da-documentacao`
* `test/nome-do-teste`
* `chore/nome-da-tarefa`

Nunca utilizar nomes genéricos como:

* `teste`
* `alteracao`
* `nova-branch`
* `fix`
* `branch1`

## Proteção da Main

É proibido executar:

`git push origin main`

Também não realizar:

* commit diretamente na `main`
* merge diretamente na `main`
* rebase destrutivo na `main`
* force push na `main`

A integração com a `main` deve ocorrer exclusivamente através de **Pull Request (PR)**.

## Verificação Inicial

Antes de realizar qualquer alteração Git, execute:

`git status`

`git branch --show-current`

`git diff`

`git diff --staged`

Analise:

* arquivos modificados
* arquivos staged
* arquivos unstaged
* arquivos untracked
* branch atual

Não assuma que todas as alterações existentes pertencem à tarefa atual.

## Staging

Se já existirem arquivos staged:

1. Analise somente esses arquivos com:

   `git diff --staged`

2. Utilize essas alterações como base principal para o commit.

Se não houver arquivos staged:

1. Execute:

   `git status`

2. Analise os arquivos modificados e untracked.

3. Não execute `git add -A` automaticamente.

4. Identifique quais arquivos pertencem à alteração atual.

5. Solicite confirmação antes de adicionar arquivos ao staging.

6. Prefira adicionar arquivos explicitamente:

   `git add caminho/do/arquivo`

Evite:

`git add -A`

quando existirem alterações que possam não estar relacionadas à tarefa.

## Criação do Commit

Depois de analisar as alterações staged:

1. Determine o tipo do commit.
2. Determine o escopo.
3. Gere uma mensagem seguindo Conventional Commits.
4. Verifique se a mensagem representa corretamente todas as alterações staged.
5. Execute:

   `git commit -m "tipo(escopo): descrição"`

Exemplo:

`git commit -m "feat(auth): add JWT authentication"`

## Push

Não realizar push automaticamente após criar o commit.

O commit local pode ser criado sem confirmação adicional desde que esteja em uma branch diferente da `main`.

O push deve ser executado somente quando solicitado explicitamente pelo usuário.

Antes do push:

1. Verifique novamente a branch atual:

   `git branch --show-current`

2. Confirme que não é `main`.

3. Execute:

   `git push -u origin <branch-atual>`

Nunca executar:

`git push origin main`

## Comandos Git Proibidos

Não executar automaticamente:

`git push --force`

`git push -f`

`git reset --hard`

`git clean -fd`

`git clean -fdx`

`git branch -D`

`git checkout -- .`

`git restore .`

Esses comandos podem destruir alterações locais ou modificar histórico.

Se alguma dessas operações for realmente necessária, explicar o motivo e solicitar confirmação explícita do usuário.

## Preservação de Alterações

Nunca descarte alterações existentes somente para permitir o commit.

Se forem encontradas alterações que aparentemente não pertencem à tarefa:

* não remover
* não sobrescrever
* não resetar
* não incluir automaticamente no commit

Informe o usuário antes de prosseguir.

## Validação Final

Antes do commit, confirme:

* branch atual não é `main`
* alterações staged foram analisadas
* arquivos do commit pertencem à mesma finalidade
* nenhuma alteração desconhecida será incluída
* mensagem segue Conventional Commits

Depois do commit, execute:

`git status`

e informe:

* branch utilizada
* hash do commit
* mensagem criada
* arquivos incluídos
* se existem alterações restantes

## Definition of Done

O comando é considerado concluído quando:

* o commit foi criado em uma branch válida
* nenhuma alteração foi descartada
* nenhuma alteração não relacionada foi incluída sem autorização
* o commit segue Conventional Commits
* nenhum push direto para `main` foi realizado

## Contexto adicional

Contexto adicional do usuário: $ARGUMENTS
